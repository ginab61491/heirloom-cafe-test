export async function POST(request: Request) {
  const { name, email, tier } = await request.json();

  if (!name || !email || !tier) {
    return Response.json({ ok: false, error: "Missing fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set");
    return Response.json({ ok: false, error: "Email service not configured." }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Heirloom Café <onboarding@resend.dev>",
      to: ["stephen@heirloom-sf.com"],
      subject: `New Wine Club Sign-Up: ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tier:</strong> ${tier}</p>
      `,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Resend error:", body);
    return Response.json({ ok: false, error: "Failed to send email." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
