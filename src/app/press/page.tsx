import { pressQuotes } from "@/data/press";

export default function PressPage() {
  return (
    <div className="bg-[var(--color-cream)]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Left: candlelit table photo */}
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden md:sticky md:top-24">
              <img src="/images/candlelit-table.jpeg" alt="Candlelit table at Heirloom Cafe" className="w-full object-cover" />
            </div>
          </div>

          {/* Right: press quotes */}
          <div className="md:col-span-3">
            <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-charcoal)] mb-10">
              Press
            </h1>
            <div className="space-y-8">
              {pressQuotes.map((item, i) => (
                <div key={i}>
                  {item.isFeature && (
                    <span className="text-[10px] uppercase tracking-widest text-[var(--color-gold)] mb-2 block">Feature</span>
                  )}
                  <p className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-wine)] italic mb-2">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-charcoal)] transition-colors underline underline-offset-2">
                        {item.source}
                      </a>
                    ) : item.source}
                  </p>
                  {item.quote && (
                    <blockquote className="relative pl-6 mb-2">
                      <span className="absolute left-0 top-0 font-[family-name:var(--font-serif)] text-3xl text-[var(--color-gold)] opacity-60 leading-none">&ldquo;</span>
                      <p className="text-[var(--color-charcoal)] leading-relaxed">
                        {item.quote}
                      </p>
                    </blockquote>
                  )}
                  <p className="text-sm text-[var(--color-warm-gray)] text-right italic">
                    &mdash; {item.title || item.source}{item.author ? `, ${item.author}` : ''}
                  </p>
                  {i < pressQuotes.length - 1 && (
                    <div className="w-12 h-px bg-[var(--color-gold)] mt-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
