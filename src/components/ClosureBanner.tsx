import { getClosureNotice } from "@/lib/queries";

const PRESET_TEXT: Record<string, string> = {
  "private-event": "We will be closed this Thursday for a private event. Thank you for your understanding.",
  "holiday-week":  "We are closed for the holiday week. We look forward to welcoming you back soon.",
  "july-4th":      "We are closed for the Fourth of July week. Happy holiday, and see you when we return.",
};

function formatDate(iso: string): string {
  // Sanity dates are YYYY-MM-DD — parse as local noon to avoid timezone drift
  const [year, month, day] = iso.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default async function ClosureBanner() {
  // Feature flag — set NEXT_PUBLIC_ENABLE_CLOSURE_BANNER=true in Vercel to activate
  if (process.env.NEXT_PUBLIC_ENABLE_CLOSURE_BANNER !== "true") return null;

  const notice = await getClosureNotice();

  // Nothing in Sanity yet, or master switch is off
  if (!notice || !notice.enabled) return null;

  // Date-window check — banner only shows within [startDate, endDate] if set
  const today = todayISO();
  if (notice.startDate && today < notice.startDate) return null;
  if (notice.endDate   && today > notice.endDate)   return null;

  // Resolve display text
  let message =
    notice.preset === "custom"
      ? (notice.customMessage ?? "")
      : (PRESET_TEXT[notice.preset] ?? "");

  if (!message) return null;

  if (notice.reopenDate) {
    message = `${message} We reopen ${formatDate(notice.reopenDate)}.`;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full bg-[var(--color-charcoal)] text-[var(--color-cream)] py-3 px-6 text-center text-sm tracking-wide"
    >
      {message}
    </div>
  );
}
