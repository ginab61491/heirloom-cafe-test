import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl text-[var(--color-earth)] mb-3 leading-tight">
          Heirloom Caf&eacute;
        </h1>
        <p className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-earth-light)] italic mb-6">
          Seasonal. Local. Intentional.
        </p>
        <div className="w-12 h-px bg-[#630000] mx-auto opacity-40 mb-8" />
        <div className="text-sm text-[var(--color-earth-light)] space-y-1 mb-8">
          <p>2500 Folsom Street, San Francisco</p>
          <p>Tuesday &ndash; Saturday, 5:45 &ndash; 9:30 PM</p>
          <p><a href="tel:4158212500" className="hover:text-[var(--color-terracotta)]">415 821 2500</a></p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://resy.com/cities/sf/heirloom-cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded bg-[#630000] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Reserve a Table
          </a>
          <a
            href="https://www.toasttab.com/heirloom-cafe-2500-folsom-street/giftcards"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded border border-[var(--color-cream-dark)] text-[var(--color-earth-light)] hover:border-[#630000] hover:text-[#630000] transition-colors"
          >
            Gift Cards
          </a>
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <p className="text-center text-[var(--color-earth-light)] leading-relaxed">
          Our wine cellar and our love of mature wines are the foundation of our restaurant.
          The kitchen is dedicated to offering a menu which is concise, seasonal, highly
          selective, and exceedingly tasteful.
        </p>
      </section>

      {/* Wine Pairing CTA */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <Link href="/wine-pairing" className="block group">
          <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl p-8 sm:p-10 text-center hover:border-[var(--color-sage-light)] hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-[var(--color-sage)] bg-opacity-10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-[var(--color-sage)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-.94 2.06a2.25 2.25 0 0 0 2.012 3.19h11.856a2.25 2.25 0 0 0 2.012-3.19L19 14.5M5 14.5h14" />
              </svg>
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-earth)] mb-3">
              AI Wine Pairing
            </h2>
            <p className="text-[var(--color-earth-light)] mb-5 max-w-md mx-auto">
              Describe your dish and our AI sommelier will find the perfect match from our cellar or beyond.
            </p>
            <span className="inline-flex items-center gap-2 text-[var(--color-sage)] font-medium group-hover:gap-3 transition-all">
              Try it now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}
