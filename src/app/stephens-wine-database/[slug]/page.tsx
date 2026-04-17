import { producers } from "@/data/stephens-wines";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return producers.map(p => ({ slug: p.slug }));
}

export default async function ProducerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const producer = producers.find(p => p.slug === slug);
  if (!producer) notFound();

  const tastedWines = producer.wines.filter(w => w.dateTasted).sort((a, b) =>
    new Date(b.dateTasted).getTime() - new Date(a.dateTasted).getTime()
  );
  const untastedWines = producer.wines.filter(w => !w.dateTasted);
  const allWines = [...tastedWines, ...untastedWines];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-[var(--color-earth-light)] mb-8">
        <Link href="/" className="hover:text-[var(--color-earth)]">Heirloom Caf&eacute;</Link>
        {" / "}
        <Link href="/stephens-wine-database" className="hover:text-[var(--color-earth)]">Stephen&apos;s Wine Database</Link>
        {" / "}
        <span className="text-[var(--color-earth)]">{producer.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-earth)] mb-1">
          {producer.name}
        </h1>
        <p className="text-[var(--color-earth-light)] mb-4">
          {producer.region}, {producer.country}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-sage)] text-white">
            Sommelier Pick
          </span>
          {tastedWines.length > 0 && (
            <span className="text-xs px-3 py-1 rounded-full bg-[#630000] text-white">
              Tasted at Heirloom
            </span>
          )}
        </div>
      </div>

      {/* Philosophy (placeholder) */}
      {producer.philosophy && (
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)] mb-3">
            Philosophy &amp; Approach
          </h2>
          <p className="text-[var(--color-earth-light)] leading-relaxed">{producer.philosophy}</p>
        </section>
      )}

      {/* Stephen's Selections */}
      <section className="mb-8">
        <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)] mb-4">
          Stephen&apos;s Selections
        </h2>
        <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl overflow-hidden">
          {allWines.map((wine, i) => (
            <div
              key={`${wine.wine}-${wine.vintage}-${i}`}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4 ${
                i < allWines.length - 1 ? "border-b border-[var(--color-cream-dark)]" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <p className="text-[var(--color-earth)] font-medium">{wine.wine}</p>
                <p className="text-xs text-[var(--color-earth-light)]">
                  {wine.vintage} &middot; {wine.style}
                </p>
              </div>
              <div className="flex-shrink-0">
                {wine.dateTasted ? (
                  <span className="inline-block text-[11px] px-3 py-1 rounded-full bg-[#630000] text-white">
                    Tasted {new Date(wine.dateTasted).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                ) : (
                  <span className="inline-block text-[11px] px-3 py-1 rounded-full border border-[var(--color-cream-dark)] text-[var(--color-earth-light)]">
                    On the list
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badge */}
      <section className="mb-8">
        <div className="bg-[var(--color-cream)] border border-[var(--color-cream-dark)] rounded-lg p-4 text-xs text-[var(--color-earth-light)]">
          <p className="font-medium text-[var(--color-earth)] mb-1">
            {producer.trustBadge === "well-documented" ? "Well-documented" :
             producer.trustBadge === "moderate" ? "Moderately documented" :
             "Limited information"}
          </p>
          <p>
            {producer.trustBadge === "well-documented"
              ? "Referenced across 3+ trusted professional sources."
              : producer.trustBadge === "moderate"
              ? "Covered in 1-2 trusted sources, plus importer material."
              : "Minimal coverage in trusted independent sources. Notes may rely on importer descriptions."}
          </p>
        </div>
      </section>

      {/* Sources */}
      {producer.sources && producer.sources.length > 0 && (
        <section className="mb-8">
          <details className="text-xs text-[var(--color-earth-light)]">
            <summary className="cursor-pointer hover:text-[var(--color-earth)] font-medium">Sources</summary>
            <ul className="mt-2 space-y-1 pl-4">
              {producer.sources.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </details>
        </section>
      )}

      <Link
        href="/stephens-wine-database"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-sage)] hover:text-[var(--color-sage-dark)]"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Back to all producers
      </Link>
    </div>
  );
}
