import { pressItems } from "@/data/press";

export default function PressPage() {
  const featured = pressItems.filter(item => item.quote);
  const mentions = pressItems.filter(item => !item.quote);

  return (
    <div className="bg-[var(--color-cream)] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Left: candlelit table photo */}
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden md:sticky md:top-24">
              <img src="/images/candlelit-table.jpeg" alt="Candlelit table at Heirloom Cafe" className="w-full object-cover" />
            </div>
          </div>

          {/* Right: press content */}
          <div className="md:col-span-3">
            <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-charcoal)] mb-10">Press</h1>

            {/* Featured quotes */}
            <div className="space-y-10 mb-14">
              {featured.map((item, i) => (
                <div key={i}>
                  {item.isFeature && (
                    <p className="text-[10px] uppercase tracking-widest text-[var(--color-gold)] mb-2">Feature</p>
                  )}

                  <blockquote className="pl-4 border-l border-[var(--color-gold)] mb-3">
                    <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>

                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-wine)] italic">
                      {item.author ? (
                        <>
                          {item.url ? (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-charcoal)] transition-colors">
                              {item.author}
                            </a>
                          ) : item.author}
                          <span className="not-italic text-[var(--color-warm-gray)]">, {item.source}</span>
                          {item.title && <span className="not-italic text-[var(--color-warm-gray)]">, {item.title}</span>}
                        </>
                      ) : (
                        <>
                          {item.url ? (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-charcoal)] transition-colors">
                              {item.title ?? item.source}
                            </a>
                          ) : (item.title ?? item.source)}
                          {item.title && <span className="not-italic text-[var(--color-warm-gray)]">, {item.source}</span>}
                        </>
                      )}
                    </p>
                    {item.year && (
                      <span className="text-xs text-[var(--color-warm-gray)] flex-shrink-0">{item.year}</span>
                    )}
                  </div>
                  {item.note && (
                    <p className="text-sm text-[var(--color-charcoal)] italic mt-2">{item.note}</p>
                  )}

                  {i < featured.length - 1 && (
                    <div className="w-12 h-px bg-[var(--color-gold)] mt-10" />
                  )}
                </div>
              ))}
            </div>

            {/* Notable mentions */}
            <div className="pt-6 border-t border-[var(--color-cream)]" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-warm-gray)] mb-5">Notable Coverage</p>
              <div className="space-y-0">
                {mentions.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 py-2.5 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    <div>
                      <p className="text-sm text-[var(--color-charcoal)]">
                        {item.url ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-serif)] hover:text-[var(--color-wine)] transition-colors">
                            {item.source}
                          </a>
                        ) : (
                          <span className="font-[family-name:var(--font-serif)]">{item.source}</span>
                        )}
                        {(item.title || item.author) && (
                          <span className="text-[var(--color-warm-gray)]">
                            {item.title ? ` — ${item.title}` : ''}{item.author ? `, ${item.author}` : ''}
                          </span>
                        )}
                      </p>
                      {item.note && (
                        <p className="text-xs text-[var(--color-gold)] mt-0.5">{item.note}</p>
                      )}
                    </div>
                    {item.year && (
                      <span className="text-xs text-[var(--color-warm-gray)] flex-shrink-0 mt-0.5">{item.year}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
