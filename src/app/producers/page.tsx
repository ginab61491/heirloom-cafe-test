"use client";

import { useState, useMemo } from "react";
import { heirloomProducers } from "@/data/heirloom-producers";

const countries = [...new Set(heirloomProducers.map(p => p.country))].sort();

export default function ProducersPage() {
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = heirloomProducers;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q) ||
        p.grapeVarieties.some(g => g.toLowerCase().includes(q))
      );
    }
    if (countryFilter) result = result.filter(p => p.country === countryFilter);
    return result;
  }, [search, countryFilter]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl text-[var(--color-earth)] mb-3">
          The Producers
        </h1>
        <p className="text-[var(--color-earth-light)] italic max-w-lg mx-auto">
          The winemakers behind our cellar
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search producers, regions, grapes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)]"
        />
        <select
          value={countryFilter}
          onChange={e => setCountryFilter(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-sm"
        >
          <option value="">All Countries</option>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map(producer => {
          const isExpanded = expanded === producer.id;
          const hasPress = producer.notablePress.length > 0;

          return (
            <div
              key={producer.id}
              className="break-inside-avoid rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: producer.colorAccent }}
              onClick={() => setExpanded(isExpanded ? null : producer.id)}
            >
              <div className="p-6 sm:p-7">
                {/* Header */}
                <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)] mb-1">
                  {producer.name}
                </h2>
                <p className="text-xs text-[var(--color-earth-light)] tracking-wide uppercase mb-4">
                  {producer.region}, {producer.country}
                </p>

                {/* Pull quote */}
                <p className="font-[family-name:var(--font-serif)] text-[var(--color-earth)] italic leading-relaxed mb-4">
                  {producer.whatMakesThemSpecial.split('.')[0]}.
                </p>

                {/* Grapes + Cost */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {producer.grapeVarieties.slice(0, 3).map(g => (
                    <span key={g} className="text-[10px] px-2 py-0.5 rounded-full bg-white/40 text-[var(--color-earth)]">
                      {g}
                    </span>
                  ))}
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/30 text-[var(--color-earth-light)]">
                    {producer.avgCostRange}
                  </span>
                </div>

                {/* Heirloom wines */}
                <div className="border-t border-black/5 pt-3 mt-3">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--color-earth-light)] mb-2">
                    On Heirloom&apos;s List
                  </p>
                  {producer.heirloomWines.map((w, i) => (
                    <div key={i} className="flex justify-between text-sm text-[var(--color-earth)] mb-1">
                      <span>{w.name} {w.vintage}</span>
                      <span className="text-[var(--color-earth-light)] text-xs">
                        {w.priceGlass ? `${w.priceGlass}/${w.priceBottle}` : w.priceBottle ? `${w.priceBottle}` : ''}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-black/5 space-y-4 animate-fade-in">
                    {/* History */}
                    <div>
                      <p className="text-sm text-[var(--color-earth)] leading-relaxed">{producer.history}</p>
                    </div>

                    {/* Philosophy */}
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[var(--color-earth-light)] mb-1">Philosophy</p>
                      <p className="text-sm text-[var(--color-earth)] leading-relaxed">{producer.winemakingPhilosophy}</p>
                    </div>

                    {/* Known for */}
                    <div>
                      <p className="text-sm text-[var(--color-earth)] leading-relaxed">{producer.knownFor}</p>
                    </div>

                    {/* Press */}
                    {hasPress && (
                      <div className="space-y-2">
                        {producer.notablePress.map((p, i) => (
                          <blockquote key={i} className="border-l-2 border-black/10 pl-3">
                            <p className="text-sm italic text-[var(--color-earth)]">&ldquo;{p.quote}&rdquo;</p>
                            <p className={`text-xs mt-0.5 ${p.trusted ? 'text-[var(--color-earth-light)]' : 'text-[var(--color-earth-light)] opacity-60'}`}>
                              {p.source}
                            </p>
                          </blockquote>
                        ))}
                      </div>
                    )}

                    {/* Website */}
                    {producer.websiteUrl && (
                      <a
                        href={producer.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="inline-block text-xs text-[var(--color-earth-light)] underline underline-offset-2 hover:text-[var(--color-earth)]"
                      >
                        {producer.websiteUrl.replace('https://', '').replace('www.', '')}
                      </a>
                    )}
                  </div>
                )}

                {/* Expand hint */}
                <p className="text-[10px] text-[var(--color-earth-light)] mt-3 text-center opacity-50">
                  {isExpanded ? 'Click to collapse' : 'Click to read more'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </div>
  );
}
