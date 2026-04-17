export default function EventsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[var(--color-earth)] mb-8 text-center">
        Events at Heirloom
      </h1>
      <p className="text-center text-[var(--color-earth-light)] leading-relaxed mb-10 max-w-lg mx-auto">
        We host winemaker dinners, special tastings, and seasonal celebrations throughout
        the year. Check back for upcoming events, or reach out to reserve for a private gathering.
      </p>

      <div className="text-center mb-12">
        <a
          href="mailto:stephen@heirloom-sf.com"
          className="inline-flex items-center gap-2 text-[#630000] hover:opacity-75 transition-opacity"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          stephen@heirloom-sf.com
        </a>
      </div>

      <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl p-8 text-center">
        <p className="text-[var(--color-earth-light)] italic">
          No upcoming events. Check back soon.
        </p>
      </div>
    </div>
  );
}
