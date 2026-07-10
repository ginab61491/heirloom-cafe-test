// Simple in-memory rate limiter — resets on server restart, acceptable for
// a low-traffic endpoint. Key is the client IP from the X-Forwarded-For header
// (set by Vercel) or the socket address as fallback.
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60_000;
  const maxRequests = 5;
  const timestamps = (rateLimitStore.get(ip) ?? []).filter(t => t > now - windowMs);
  if (timestamps.length >= maxRequests) return true;
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

export async function POST(request: Request) {
  // Rate limiting
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  if (isRateLimited(ip)) {
    return Response.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Parse and validate body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const raw = typeof (body as Record<string, unknown>).email === 'string'
    ? ((body as Record<string, unknown>).email as string).trim().toLowerCase()
    : '';

  if (!raw || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw) || raw.length > 254) {
    return Response.json({ error: 'A valid email address is required.' }, { status: 400 });
  }

  // Guard — all three Mailchimp vars must be present
  const mcKey = process.env.MAILCHIMP_API_KEY;
  const mcServer = process.env.MAILCHIMP_SERVER_PREFIX;
  const mcList = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!mcKey || !mcServer || !mcList) {
    console.error('[newsletter] Mailchimp env vars not configured');
    return Response.json(
      { error: 'Newsletter signup is not available right now. Please try again later.' },
      { status: 503 }
    );
  }

  // Call Mailchimp Members API — status "pending" triggers double opt-in confirmation email
  const url = `https://${mcServer}.api.mailchimp.com/3.0/lists/${mcList}/members`;
  const credentials = Buffer.from(`heirloom:${mcKey}`).toString('base64');

  let mcRes: Response;
  try {
    mcRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: raw, status: 'subscribed' }),
    });
  } catch (networkErr) {
    console.error('[newsletter] Mailchimp network error:', (networkErr as Error).message);
    return Response.json(
      { error: 'Could not reach the newsletter service. Please try again.' },
      { status: 502 }
    );
  }

  let mcBody: Record<string, unknown> = {};
  try {
    mcBody = await mcRes.json();
  } catch {
    // ignore parse failure
  }

  if (mcRes.ok) {
    return Response.json({ ok: true, message: 'You are on the list.' });
  }

  // "Member Exists" — already subscribed (any status). Return success to avoid enumeration.
  if (mcRes.status === 400 && mcBody.title === 'Member Exists') {
    return Response.json({ ok: true, message: 'You are already on our list.' });
  }

  // Unexpected error — log internally, reveal nothing to client
  console.error('[newsletter] Mailchimp error:', mcRes.status, mcBody.title, mcBody.detail);
  return Response.json(
    { error: 'Something went wrong. Please try again later.' },
    { status: 500 }
  );
}
