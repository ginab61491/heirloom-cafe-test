import { producers } from "@/data/stephens-wines";
import { producerEnrichment } from "@/data/producer-enrichment";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return producers.map(p => ({ slug: p.slug }));
}

function getEnrichment(name: string) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  // Try direct match, then partial
  if (producerEnrichment[slug]) return producerEnrichment[slug];
  const keys = Object.keys(producerEnrichment);
  const partial = keys.find(k => slug.includes(k) || k.includes(slug));
  return partial ? producerEnrichment[partial] : null;
}

export default async function ProducerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const producer = producers.find(p => p.slug === slug);
  if (!producer) notFound();

  const enrichment = getEnrichment(producer.name);
  const standoutLine = enrichment?.standoutLine || producer.descriptor;
  const wineStyle = enrichment?.wineStyle;
  const valueTier = enrichment?.valueTier;
  const varietals = enrichment?.signatureVarietals;

  const tastedWines = producer.wines.filter(w => w.dateTasted).sort((a, b) =>
    new Date(b.dateTasted).getTime() - new Date(a.dateTasted).getTime()
  );
  const untastedWines = producer.wines.filter(w => !w.dateTasted);
  const allWines = [...tastedWines, ...untastedWines];

  // Find matching enrichment wine data
  function getWineEnrichment(wineName: string, vintage: string) {
    if (!enrichment?.wines) return null;
    return enrichment.wines.find((w: { name: string; vintage: string }) =>
      w.name === wineName || wineName.includes(w.name) || w.name.includes(wineName)
    );
  }

  const valueTierLabels: Record<string, string> = {
    "exceptional-value": "Exceptional Value",
    "worth-the-splurge": "Worth the Splurge",
    "special-occasion": "Special Occasion",
  };

  return (
    <div className="min-h-screen bg-[var(--color-cream)]" style={{ backgroundImage: 'none' }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--color-earth-light)] mb-8">
          <Link href="/" className="hover:text-[var(--color-earth)]">Heirloom Caf&eacute;</Link>
          {" / "}
          <Link href="/stephens-wine-database" className="hover:text-[var(--color-earth)]">Stephen&apos;s Wine Database</Link>
          {" / "}
          <span className="text-[var(--color-earth)]">{producer.name}</span>
        </nav>

        {/* Main card with solid background */}
        <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl p-6 sm:p-8 shadow-sm">

          {/* Header */}
          <div className="mb-6">
            {valueTier && valueTier !== 'fair-price' && valueTierLabels[valueTier] && (
              <div className="text-[9px] uppercase tracking-widest text-[#630000] mb-2">
                &#9670; {valueTierLabels[valueTier]}
              </div>
            )}

            <h1 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-earth)] mb-1">
              {producer.name}
            </h1>
            <p className="text-sm text-[var(--color-earth-light)] mb-3">
              {producer.region}, {producer.country}
              {producer.founded ? ` · Est. ${producer.founded}` : ''}
              {producer.winemaker ? ` · ${producer.winemaker}` : ''}
              {producer.hectares ? ` · ${producer.hectares} ha` : ''}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {producer.priceTier && (
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--color-cream-dark)] text-[var(--color-earth-light)]">
                  {producer.priceTier}
                </span>
              )}
              {producer.qualityTier && (
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--color-cream-dark)] text-[var(--color-earth-light)]">
                  {producer.qualityTier}
                </span>
              )}
              {(producer.tags || []).map(tag => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-sage)] text-white">
                  {tag}
                </span>
              ))}
            </div>

            {/* Varietal chips */}
            {varietals && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {varietals.map((v: string) => (
                  <span key={v} className="text-[10px] px-2.5 py-1 rounded-full bg-[var(--color-cream)] text-[var(--color-earth)]">
                    {v}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Standout line */}
          {standoutLine && (
            <p className="font-[family-name:var(--font-serif)] text-[var(--color-earth)] italic leading-relaxed mb-5 text-lg border-l-2 border-[#630000] pl-4">
              {standoutLine}
            </p>
          )}

          {/* Wine style */}
          {wineStyle && (
            <p className="text-sm text-[var(--color-earth-light)] leading-relaxed mb-6">
              {wineStyle}
            </p>
          )}

          {/* Philosophy */}
          {producer.philosophy && (
            <section className="mb-6">
              <h2 className="text-[10px] uppercase tracking-widest text-[var(--color-earth-light)] mb-2">
                Philosophy &amp; Approach
              </h2>
              <p className="text-sm text-[var(--color-earth)] leading-relaxed">{producer.philosophy}</p>
            </section>
          )}

          {/* Divider */}
          <div className="w-full h-px bg-[var(--color-cream-dark)] my-6" />

          {/* Stephen's Selections */}
          <section className="mb-6">
            <h2 className="text-[10px] uppercase tracking-widest text-[var(--color-earth-light)] mb-4">
              Stephen&apos;s Selections
            </h2>
            <div className="space-y-0">
              {allWines.map((wine, i) => {
                const wineEnrich = getWineEnrichment(wine.wine, wine.vintage);
                return (
                  <div
                    key={`${wine.wine}-${wine.vintage}-${i}`}
                    className={`py-4 ${i < allWines.length - 1 ? 'border-b border-[var(--color-cream-dark)]' : ''}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-[var(--color-earth)] font-medium">{wine.wine}</p>
                        <p className="text-xs text-[var(--color-earth-light)] mt-0.5">
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

                    {/* Enriched wine details */}
                    {wineEnrich && (
                      <div className="mt-3 pl-0 space-y-2">
                        {wineEnrich.tastingNotes && (
                          <p className="text-sm text-[var(--color-earth-light)] italic leading-relaxed">
                            {wineEnrich.tastingNotes}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 items-center">
                          {wineEnrich.ratings?.map((r: { score: string; reviewer: string }, ri: number) => (
                            <span key={ri} className="px-1.5 py-0.5 bg-[var(--color-cream)] rounded text-[10px] font-mono text-[var(--color-earth)]">
                              {r.reviewer.replace('Wine Advocate', 'WA').replace('Wine Spectator', 'WS').replace('Jancis Robinson', 'JR')} {r.score}
                            </span>
                          ))}
                          {wineEnrich.drinkWindow && (
                            <span className="text-[10px] text-[var(--color-earth-light)]">
                              Drink: {wineEnrich.drinkWindow}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Trust Badge */}
          <section className="mb-6">
            <div className="bg-[var(--color-cream)] rounded-lg p-4 text-xs text-[var(--color-earth-light)]">
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
            <section className="mb-6">
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
      </div>
    </div>
  );
}
