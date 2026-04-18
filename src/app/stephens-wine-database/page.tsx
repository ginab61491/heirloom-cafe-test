"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { producers } from "@/data/stephens-wines";
import { producerEnrichment } from "@/data/producer-enrichment";
import PasswordGate from "@/components/PasswordGate";

function getEnrichment(name: string) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (producerEnrichment[slug]) return producerEnrichment[slug];
  const keys = Object.keys(producerEnrichment);
  const partial = keys.find(k => slug.includes(k) || k.includes(slug));
  return partial ? producerEnrichment[partial] : null;
}

const countries = [...new Set(producers.map(p => p.country))].sort();
const regions = [...new Set(producers.map(p => p.region))].sort();
const styles = [...new Set(producers.flatMap(p => p.wines.map(w => w.style)))].sort();

type SortOption = "alpha" | "region" | "recent" | "quality";

export default function StephensWineDatabase() {
  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [styleFilter, setStyleFilter] = useState("");
  const [tastedOnly, setTastedOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>("alpha");

  const filtered = useMemo(() => {
    let result = producers;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.region.toLowerCase().includes(q) ||
        p.wines.some(w => w.wine.toLowerCase().includes(q))
      );
    }
    if (countryFilter) result = result.filter(p => p.country === countryFilter);
    if (regionFilter) result = result.filter(p => p.region === regionFilter);
    if (styleFilter) result = result.filter(p => p.wines.some(w => w.style === styleFilter));
    if (tastedOnly) result = result.filter(p => p.wines.some(w => w.dateTasted));

    // Sort
    if (sort === "alpha") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "region") result = [...result].sort((a, b) => a.region.localeCompare(b.region) || a.name.localeCompare(b.name));
    else if (sort === "recent") {
      result = [...result].sort((a, b) => {
        const aDate = Math.max(...a.wines.filter(w => w.dateTasted).map(w => new Date(w.dateTasted).getTime()), 0);
        const bDate = Math.max(...b.wines.filter(w => w.dateTasted).map(w => new Date(w.dateTasted).getTime()), 0);
        return bDate - aDate;
      });
    }

    return result;
  }, [search, countryFilter, regionFilter, styleFilter, tastedOnly, sort]);

  const tastedCount = producers.filter(p => p.wines.some(w => w.dateTasted)).length;

  return (
    <PasswordGate>
    <div className="max-w-5xl mx-auto px-6 py-12" style={{ backgroundImage: 'none' }}>
      {/* Intro */}
      <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[var(--color-earth)] mb-4 text-center">
        Stephen&apos;s Wine Database
      </h1>
      <p className="text-center text-[var(--color-earth-light)] leading-relaxed max-w-2xl mx-auto mb-10 text-sm">
        A record of the producers poured at Heirloom Caf&eacute;&apos;s wine classes and Saturday tastings.
        Every producer has been selected and served by Stephen. Wines with a <strong>Tasted at Heirloom</strong> chip
        have been poured at a documented event. Where a producer is small or poorly documented, we say so.
      </p>

      {/* Filters */}
      <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl p-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <input
            type="text"
            placeholder="Search producers, wines, regions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] bg-white text-sm text-[var(--color-earth)] placeholder:text-[var(--color-earth-light)] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)]"
          />
          <select value={countryFilter} onChange={e => setCountryFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] bg-white text-sm text-[var(--color-earth)]">
            <option value="">All Countries</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={regionFilter} onChange={e => setRegionFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] bg-white text-sm text-[var(--color-earth)]">
            <option value="">All Regions</option>
            {regions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <select value={styleFilter} onChange={e => setStyleFilter(e.target.value)} className="px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] bg-white text-sm text-[var(--color-earth)]">
            <option value="">All Styles</option>
            {styles.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={sort} onChange={e => setSort(e.target.value as SortOption)} className="px-3 py-2 rounded-lg border border-[var(--color-cream-dark)] bg-white text-sm text-[var(--color-earth)]">
            <option value="alpha">Sort: A-Z</option>
            <option value="region">Sort: Region</option>
            <option value="recent">Sort: Recently Tasted</option>
          </select>
          <label className="flex items-center gap-2 text-sm text-[var(--color-earth-light)] cursor-pointer">
            <input type="checkbox" checked={tastedOnly} onChange={e => setTastedOnly(e.target.checked)} className="rounded" />
            Tasted at Heirloom only
          </label>
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-[var(--color-earth-light)] mb-6">
        Showing {filtered.length} producers &middot; {tastedCount} tasted at Heirloom
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(producer => {
          const hasTasted = producer.wines.some(w => w.dateTasted);
          const wineCount = producer.wines.length;
          const latestTasted = producer.wines
            .filter(w => w.dateTasted)
            .sort((a, b) => new Date(b.dateTasted).getTime() - new Date(a.dateTasted).getTime())[0];
          const enrichment = getEnrichment(producer.name);
          const standout = enrichment?.standoutLine || producer.descriptor;

          return (
            <Link
              key={producer.slug}
              href={`/stephens-wine-database/${producer.slug}`}
              className="block bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl p-5 hover:border-[var(--color-sage-light)] hover:shadow-md transition-all"
            >
              <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-earth)] mb-0.5">
                {producer.name}
              </h3>
              <p className="text-xs text-[var(--color-earth-light)] mb-2">
                {producer.region}, {producer.country}
              </p>

              {standout && (
                <p className="text-xs text-[var(--color-earth)] italic leading-relaxed mb-3 line-clamp-2">
                  {standout}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-sage)] text-white">
                  Sommelier Pick
                </span>
                {hasTasted && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#630000] text-white">
                    Tasted at Heirloom
                  </span>
                )}
                {producer.qualityTier && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--color-cream-dark)] text-[var(--color-earth-light)]">
                    {producer.qualityTier}
                  </span>
                )}
              </div>

              <p className="text-xs text-[var(--color-earth-light)]">
                {wineCount} wine{wineCount !== 1 ? "s" : ""} on the list
                {latestTasted && (
                  <> &middot; Last tasted {new Date(latestTasted.dateTasted).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</>
                )}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
    </PasswordGate>
  );
}
