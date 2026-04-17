import Link from "next/link";
import { wineList } from "@/data/wines";

export default function WinePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[var(--color-earth)] mb-3 text-center">
        Wine
      </h1>
      <p className="text-center text-[var(--color-earth-light)] mb-10 max-w-lg mx-auto">
        Our cellar is the foundation of Heirloom. We source aged wines from California and
        regions across Europe, with dozens of bottles each night that have had years to improve.
      </p>

      {/* Full PDF link */}
      <div className="text-center mb-12">
        <a
          href="https://heirloom-sf.com/wp-content/uploads/2023/01/Wine-List-Current-1523.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded border border-[var(--color-cream-dark)] text-[var(--color-earth-light)] hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          View Full Wine List (PDF)
        </a>
      </div>

      {/* By the glass */}
      <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)] mb-6 text-center">
        By the Glass
      </h2>
      {wineList.map((section) => (
        <div key={section.category} className="mb-8">
          <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-sage)] mb-3">
            {section.category}
          </h3>
          <div className="space-y-2">
            {section.wines.map((wine, i) => (
              <div key={i} className="flex justify-between gap-4">
                <p className="text-[var(--color-earth)] text-sm leading-relaxed">{wine.name}</p>
                <p className="text-[var(--color-earth-light)] text-sm flex-shrink-0">
                  {wine.glass ? `${wine.glass}/${wine.bottle}` : wine.bottle}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* CTAs */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/wine-club"
          className="px-6 py-3 rounded bg-[var(--color-sage)] text-white text-center font-medium hover:bg-[var(--color-sage-dark)] transition-colors"
        >
          Join the Wine Club
        </Link>
        <Link
          href="/wine-pairing"
          className="px-6 py-3 rounded border border-[var(--color-sage)] text-[var(--color-sage)] text-center font-medium hover:bg-[var(--color-sage)] hover:text-white transition-colors"
        >
          AI Wine Pairing
        </Link>
      </div>
    </div>
  );
}
