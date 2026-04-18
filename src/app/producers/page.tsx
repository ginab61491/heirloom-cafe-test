"use client";

import { useState, useMemo, useEffect } from "react";
import { heirloomProducers, type HeirloomProducer } from "@/data/heirloom-producers";
import { producerEnrichment } from "@/data/producer-enrichment";
import PasswordGate from "@/components/PasswordGate";

// Merge enrichment into producers at module level
const enrichedProducers: HeirloomProducer[] = heirloomProducers.map(p => {
  const e = producerEnrichment[p.id];
  if (!e) return p;
  const merged = { ...p };
  if (e.standoutLine) merged.standoutLine = e.standoutLine;
  if (e.signatureVarietals) merged.signatureVarietals = e.signatureVarietals;
  if (e.wineStyle) merged.wineStyle = e.wineStyle;
  if (e.valueTier) merged.valueTier = e.valueTier;
  if (e.subRegion) merged.subRegion = e.subRegion;
  if (e.importerUrl) merged.importerUrl = e.importerUrl;
  if (e.wines) {
    merged.heirloomWines = p.heirloomWines.map(hw => {
      const ew = e.wines.find((w: { name: string; vintage: string }) => w.name === hw.name && w.vintage === hw.vintage);
      if (!ew) return hw;
      return { ...hw, tastingNotes: ew.tastingNotes, ratings: ew.ratings, drinkWindow: ew.drinkWindow };
    });
  }
  return merged;
});

const countries = [...new Set(enrichedProducers.map(p => p.country))].sort();
const allVarietals = [...new Set(enrichedProducers.flatMap(p => p.signatureVarietals || p.grapeVarieties))].sort();
const valueTierLabels: Record<string, string> = {
  "exceptional-value": "Exceptional Value",
  "fair-price": "Fair Price",
  "worth-the-splurge": "Worth the Splurge",
  "special-occasion": "Special Occasion",
};

type SortOption = "name" | "price-low" | "price-high";

export default function ProducersPage() {
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [varietalFilter, setVarietalFilter] = useState("");
  const [valueFilter, setValueFilter] = useState("");
  const [sort, setSort] = useState<SortOption>("name");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedWine, setExpandedWine] = useState<string | null>(null);

  // Handle hash-based deep linking
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) setExpanded(hash);
  }, []);

  const filtered = useMemo(() => {
    let result = enrichedProducers;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q) ||
        (p.signatureVarietals || p.grapeVarieties).some(g => g.toLowerCase().includes(q)) ||
        p.winemakingPhilosophy.toLowerCase().includes(q)
      );
    }
    if (countryFilter) result = result.filter(p => p.country === countryFilter);
    if (varietalFilter) result = result.filter(p => (p.signatureVarietals || p.grapeVarieties).includes(varietalFilter));
    if (valueFilter) result = result.filter(p => p.valueTier === valueFilter);

    if (sort === "price-low") {
      result = [...result].sort((a, b) => {
        const aMin = Math.min(...a.heirloomWines.map(w => w.priceGlass || w.priceBottle || 999));
        const bMin = Math.min(...b.heirloomWines.map(w => w.priceGlass || w.priceBottle || 999));
        return aMin - bMin;
      });
    } else if (sort === "price-high") {
      result = [...result].sort((a, b) => {
        const aMax = Math.max(...a.heirloomWines.map(w => w.priceBottle || 0));
        const bMax = Math.max(...b.heirloomWines.map(w => w.priceBottle || 0));
        return bMax - aMax;
      });
    } else {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, countryFilter, varietalFilter, valueFilter, sort]);

  return (
    <PasswordGate>
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
      <div className="flex flex-col gap-3 mb-10 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search producers, regions, grapes, philosophy..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)]"
        />
        <div className="flex flex-wrap gap-2">
          <select value={countryFilter} onChange={e => setCountryFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-xs">
            <option value="">All Countries</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={varietalFilter} onChange={e => setVarietalFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-xs">
            <option value="">All Grapes</option>
            {allVarietals.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
          <select value={valueFilter} onChange={e => setValueFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-xs">
            <option value="">All Value Tiers</option>
            <option value="exceptional-value">Exceptional Value</option>
            <option value="fair-price">Fair Price</option>
            <option value="worth-the-splurge">Worth the Splurge</option>
            <option value="special-occasion">Special Occasion</option>
          </select>
          <select value={sort} onChange={e => setSort(e.target.value as SortOption)} className="px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-xs">
            <option value="name">Sort: A-Z</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map(producer => {
          const isExpanded = expanded === producer.id;
          const hasPress = producer.notablePress.length > 0;
          const varietals = producer.signatureVarietals || producer.grapeVarieties;
          const standout = producer.standoutLine || producer.whatMakesThemSpecial?.split('.')[0] + '.';
          const valueBadge = producer.valueTier && producer.valueTier !== 'fair-price'
            ? valueTierLabels[producer.valueTier] : null;

          return (
            <div
              key={producer.id}
              id={producer.id}
              className="break-inside-avoid rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: producer.colorAccent }}
            >
              <div className="p-6 sm:p-7">
                {/* Value badge */}
                {valueBadge && (
                  <div className="text-[9px] uppercase tracking-widest text-[var(--color-earth-light)] mb-2">
                    &#9670; {valueBadge}
                  </div>
                )}

                {/* Header */}
                <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)] mb-0.5">
                  {producer.name}
                </h2>
                <p className="text-xs text-[var(--color-earth-light)] tracking-wide uppercase mb-3">
                  {producer.subRegion ? `${producer.subRegion}, ` : ''}{producer.region}, {producer.country}
                </p>

                {/* Standout line */}
                <p className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-earth)] italic leading-relaxed mb-4">
                  {standout}
                </p>

                {/* Wine style */}
                {producer.wineStyle && (
                  <p className="text-xs text-[var(--color-earth-light)] leading-relaxed mb-3">
                    {producer.wineStyle}
                  </p>
                )}

                {/* Varietal chips + price */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {varietals.slice(0, 4).map(g => (
                    <span key={g} className="text-[10px] px-2 py-0.5 rounded-full bg-white/40 text-[var(--color-earth)]">
                      {g}
                    </span>
                  ))}
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/30 text-[var(--color-earth-light)]">
                    {producer.avgCostRange || producer.avgRetailRange}
                  </span>
                </div>

                {/* Heirloom wines - expandable */}
                <div className="border-t border-black/5 pt-3 mt-3">
                  <p className="text-[10px] uppercase tracking-wider text-[var(--color-earth-light)] mb-2">
                    On Heirloom&apos;s List
                  </p>
                  {producer.heirloomWines.map((w, i) => {
                    const wineKey = `${producer.id}-${i}`;
                    const isWineExpanded = expandedWine === wineKey;
                    return (
                      <div key={i} className="mb-2">
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={e => { e.stopPropagation(); setExpandedWine(isWineExpanded ? null : wineKey); }}
                        >
                          <span className="text-sm text-[var(--color-earth)]">
                            {w.name} <span className="text-[var(--color-earth-light)]">{w.vintage}</span>
                          </span>
                          <span className="text-[var(--color-earth-light)] text-xs">
                            {w.priceGlass ? `${w.priceGlass}/${w.priceBottle}` : w.priceBottle ? `${w.priceBottle}` : ''}
                            <span className="ml-1 opacity-40">{isWineExpanded ? '−' : '+'}</span>
                          </span>
                        </div>

                        {isWineExpanded && (
                          <div className="mt-2 pl-0 pb-2 text-xs space-y-2 animate-fade-in">
                            {w.tastingNotes && (
                              <p className="text-[var(--color-earth)] leading-relaxed italic">
                                {w.tastingNotes}
                              </p>
                            )}
                            {w.ratings && w.ratings.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {w.ratings.map((r, ri) => (
                                  <span key={ri} className="px-1.5 py-0.5 bg-white/30 rounded text-[10px] font-mono text-[var(--color-earth)]">
                                    {r.reviewer.replace('Wine Advocate', 'WA').replace('Wine Spectator', 'WS').replace('Jancis Robinson', 'JR')} {r.score}
                                  </span>
                                ))}
                              </div>
                            )}
                            {w.drinkWindow && (
                              <p className="text-[var(--color-earth-light)] text-[10px]">
                                Drink window: {w.drinkWindow}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Expand full card */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : producer.id)}
                  className="w-full text-[10px] text-[var(--color-earth-light)] mt-3 text-center opacity-50 hover:opacity-100 transition-opacity"
                >
                  {isExpanded ? 'Collapse' : 'Read more'}
                </button>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-black/5 space-y-4 animate-fade-in">
                    <p className="text-sm text-[var(--color-earth)] leading-relaxed">{producer.history}</p>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[var(--color-earth-light)] mb-1">Philosophy</p>
                      <p className="text-sm text-[var(--color-earth)] leading-relaxed">{producer.winemakingPhilosophy}</p>
                    </div>

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

                    <div className="flex gap-4 text-xs">
                      {producer.websiteUrl && (
                        <a href={producer.websiteUrl} target="_blank" rel="noopener noreferrer"
                          className="text-[var(--color-earth-light)] underline underline-offset-2 hover:text-[var(--color-earth)]">
                          Website
                        </a>
                      )}
                      {producer.importerUrl && (
                        <a href={producer.importerUrl} target="_blank" rel="noopener noreferrer"
                          className="text-[var(--color-earth-light)] underline underline-offset-2 hover:text-[var(--color-earth)]">
                          US Importer
                        </a>
                      )}
                    </div>
                  </div>
                )}
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
    </PasswordGate>
  );
}
