"use client";

import { useState, useMemo, useEffect } from "react";
import TastingGrid from "@/components/wine-database/TastingGrid";
import DrinkWindowBar from "@/components/wine-database/DrinkWindowBar";
import LabelBadge from "@/components/wine-database/LabelBadge";

// Import cellar data - will be populated from JSON
import cellarDataRaw from "@/data/cellar-data.json";

/* eslint-disable @typescript-eslint/no-explicit-any */
const cellarData: any[] = cellarDataRaw as any[];

const typeColors: Record<string, string> = {
  sparkling: '#E8DFB8',
  white: '#F5ECD0',
  rosé: '#F0D8D8',
  red: '#E0C8C0',
  dessert: '#E8D8B8',
  orange: '#E8D0B8',
};

const typeBorders: Record<string, string> = {
  sparkling: '#D4C88A',
  white: '#D4B86A',
  rosé: '#C89898',
  red: '#A87870',
  dessert: '#C8A868',
  orange: '#C8A070',
};

type ViewMode = 'v1' | 'v2' | 'v3';
type SortOption = 'name' | 'price-low' | 'price-high' | 'vintage-old' | 'vintage-new' | 'drink-now';

export default function WineDatabasePage() {
  const [view, setView] = useState<ViewMode>('v1');
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [labelFilter, setLabelFilter] = useState('');
  const [btgOnly, setBtgOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>('name');
  const [stephenMode, setStephenMode] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('heirloom-stephen-mode');
    if (stored === 'true') setStephenMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('heirloom-stephen-mode', String(stephenMode));
  }, [stephenMode]);

  const types = [...new Set(cellarData.map(w => w.type))].sort();
  const countries = [...new Set(cellarData.map(w => w.country))].sort();
  const allLabels = [...new Set(cellarData.flatMap(w => w.labels || []))].sort();

  const filtered = useMemo(() => {
    let result = cellarData;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(w =>
        w.name?.toLowerCase().includes(q) ||
        w.producer?.toLowerCase().includes(q) ||
        w.region?.toLowerCase().includes(q) ||
        w.briefDescriptor?.toLowerCase().includes(q) ||
        w.grapeVarieties?.some((g: string) => g.toLowerCase().includes(q))
      );
    }
    if (typeFilter) result = result.filter(w => w.type === typeFilter);
    if (countryFilter) result = result.filter(w => w.country === countryFilter);
    if (labelFilter) result = result.filter(w => w.labels?.includes(labelFilter));
    if (btgOnly) result = result.filter(w => w.byTheGlass);

    // Sort
    const sorted = [...result];
    switch (sort) {
      case 'price-low': sorted.sort((a, b) => (a.priceBottle || 0) - (b.priceBottle || 0)); break;
      case 'price-high': sorted.sort((a, b) => (b.priceBottle || 0) - (a.priceBottle || 0)); break;
      case 'vintage-old': sorted.sort((a, b) => (a.vintage === 'NV' ? 9999 : +a.vintage) - (b.vintage === 'NV' ? 9999 : +b.vintage)); break;
      case 'vintage-new': sorted.sort((a, b) => (b.vintage === 'NV' ? 0 : +b.vintage) - (a.vintage === 'NV' ? 0 : +a.vintage)); break;
      case 'drink-now': sorted.sort((a, b) => (a.drinkWindowEnd || 9999) - (b.drinkWindowEnd || 9999)); break;
      default: sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    }
    return sorted;
  }, [search, typeFilter, countryFilter, labelFilter, btgOnly, sort]);

  return (
    <div className="bg-[var(--color-cream)] min-h-screen">
      {/* Hero */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img src="/images/wine-shelf.jpeg" alt="Heirloom wine cellar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-cream)] mb-1">The Cellar</h1>
            <p className="text-sm text-[var(--color-cream)] opacity-70">Our full collection of aged and current wines</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* View tabs + Stephen Mode */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex gap-2">
            {[
              { id: 'v1' as ViewMode, label: 'V1: Full Profile' },
              { id: 'v2' as ViewMode, label: 'V2: Guest View' },
              { id: 'v3' as ViewMode, label: 'V3: Quick Scan' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setView(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                  view === tab.id
                    ? 'bg-[var(--color-gold)] text-white border-[var(--color-gold)]'
                    : 'border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setStephenMode(!stephenMode)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
              stephenMode ? 'bg-[var(--color-charcoal)] text-[var(--color-gold)]' : 'bg-[var(--color-parchment)] text-[var(--color-warm-gray)]'
            }`}
          >
            {stephenMode ? '🔓 Stephen Mode' : '🔒 For Stephen'}
          </button>
        </div>

        {stephenMode && (
          <div className="text-xs text-[var(--color-gold)] bg-[var(--color-charcoal)] px-4 py-2 rounded mb-4">
            Stephen Mode: Showing wholesale costs, margins, and inventory
          </div>
        )}

        {/* Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3 items-center mb-3">
            <input
              type="text"
              placeholder="Search wines, producers, regions, grapes..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 min-w-[200px] px-4 py-2.5 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]"
            />
            <button onClick={() => setFiltersOpen(!filtersOpen)} className="sm:hidden text-xs px-3 py-2 rounded bg-[var(--color-parchment)] text-[var(--color-warm-gray)]">
              Filters {filtersOpen ? '▲' : '▼'}
            </button>
          </div>
          <div className={`flex flex-wrap gap-2 ${filtersOpen ? '' : 'hidden sm:flex'}`}>
            {types.map(t => (
              <button key={t} onClick={() => setTypeFilter(typeFilter === t ? '' : t)}
                className={`text-xs px-3 py-1.5 rounded-full capitalize ${typeFilter === t ? 'text-white' : 'text-[var(--color-warm-gray)]'}`}
                style={{ backgroundColor: typeFilter === t ? typeBorders[t] : typeColors[t] }}>
                {t}
              </button>
            ))}
            <select value={countryFilter} onChange={e => setCountryFilter(e.target.value)} className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)]">
              <option value="">All Countries</option>
              {countries.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={labelFilter} onChange={e => setLabelFilter(e.target.value)} className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)]">
              <option value="">All Labels</option>
              {allLabels.map(l => <option key={l} value={l}>{l.replace(/-/g, ' ')}</option>)}
            </select>
            <label className="flex items-center gap-1.5 text-xs text-[var(--color-warm-gray)] cursor-pointer">
              <input type="checkbox" checked={btgOnly} onChange={e => setBtgOnly(e.target.checked)} className="rounded" />
              By the glass
            </label>
            <select value={sort} onChange={e => setSort(e.target.value as SortOption)} className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)]">
              <option value="name">Sort: Name</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="vintage-old">Vintage: Oldest</option>
              <option value="vintage-new">Vintage: Newest</option>
              <option value="drink-now">Drink Now (urgency)</option>
            </select>
          </div>
        </div>

        <p className="text-xs text-[var(--color-warm-gray)] mb-4">{filtered.length} wines</p>

        {/* Wine Grid */}
        <div className={`grid gap-4 ${
          view === 'v3' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
          view === 'v2' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
          'grid-cols-1 lg:grid-cols-2'
        }`}>
          {filtered.map(wine => (
            <div key={wine.id}
              className="rounded-xl overflow-hidden border transition-all hover:shadow-lg"
              style={{ backgroundColor: typeColors[wine.type] || '#F5F0E6', borderColor: typeBorders[wine.type] || '#DDD', borderTopWidth: '3px' }}>

              {view === 'v3' ? (
                /* V3: Compact */
                <div className="p-4">
                  <p className="font-medium text-sm text-[var(--color-charcoal)] mb-0.5">{wine.vintage} {wine.name}</p>
                  <p className="text-[11px] text-[var(--color-warm-gray)] mb-1">{wine.producer} · {wine.type} · {wine.country}</p>
                  <p className="text-[10px] text-[var(--color-warm-gray)] italic mb-2">{wine.briefDescriptor}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[var(--color-gold)]">
                      {wine.priceGlass ? `$${wine.priceGlass} / $${wine.priceBottle}` : `$${wine.priceBottle}`}
                    </span>
                    {wine.labels?.slice(0, 1).map((l: string) => <LabelBadge key={l} label={l} />)}
                  </div>
                </div>
              ) : view === 'v2' ? (
                /* V2: Guest View */
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-serif)] text-base text-[var(--color-charcoal)] mb-0.5">{wine.name}</h3>
                  <p className="text-xs text-[var(--color-warm-gray)] mb-2">{wine.producer} · {wine.region} · {wine.vintage}</p>
                  <p className="text-xs text-[var(--color-charcoal)] italic leading-relaxed mb-3">{wine.briefDescriptor}</p>
                  {wine.tastingNotes && <p className="text-xs text-[var(--color-warm-gray)] leading-relaxed mb-3">{wine.tastingNotes}</p>}
                  {wine.pairingSuggestions?.length > 0 && (
                    <p className="text-xs text-[var(--color-warm-gray)] mb-3">
                      <span className="font-medium">Pairs with:</span> {wine.pairingSuggestions?.slice(0, 3).join(', ')}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {wine.tastingProfile?.aromas?.map((a: string) => (
                      <span key={a} className="text-[9px] px-1.5 py-0.5 rounded bg-white/50 text-[var(--color-warm-gray)]">{a}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-[var(--color-gold)]">
                      {wine.priceGlass ? `Glass $${wine.priceGlass} · Bottle $${wine.priceBottle}` : `$${wine.priceBottle}`}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {wine.labels?.slice(0, 2).map((l: string) => <LabelBadge key={l} label={l} />)}
                  </div>
                </div>
              ) : (
                /* V1: Full Profile */
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-charcoal)]">{wine.name}</h3>
                      <p className="text-xs text-[var(--color-warm-gray)]">{wine.producer} · {wine.vintage} · {wine.region}</p>
                    </div>
                    <div className="flex flex-col gap-1 items-end flex-shrink-0">
                      {wine.labels?.slice(0, 3).map((l: string) => <LabelBadge key={l} label={l} />)}
                    </div>
                  </div>

                  <p className="text-xs text-[var(--color-charcoal)] italic leading-relaxed mb-3 font-medium">{wine.briefDescriptor}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    {/* Tasting grid */}
                    <div>
                      {wine.tastingProfile && (
                        <TastingGrid
                          acidity={wine.tastingProfile.acidity}
                          tannin={wine.tastingProfile.tannin}
                          body={wine.tastingProfile.body}
                          sweetness={wine.tastingProfile.sweetness}
                          alcohol={wine.tastingProfile.alcohol}
                          aromas={wine.tastingProfile.aromas || []}
                        />
                      )}
                    </div>

                    {/* Tasting notes + pairings */}
                    <div>
                      {wine.tastingNotes && (
                        <p className="text-xs text-[var(--color-warm-gray)] leading-relaxed mb-2">{wine.tastingNotes}</p>
                      )}
                      {wine.heirloomMenuPairings?.length > 0 && (
                        <div className="text-xs text-[var(--color-warm-gray)]">
                          <p className="font-medium mb-0.5">Menu pairings:</p>
                          {wine.heirloomMenuPairings.map((p: string, i: number) => (
                            <p key={i} className="text-[var(--color-sage)]">→ {p}</p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Price + scores */}
                    <div className="text-right">
                      <div className="mb-2">
                        {wine.priceGlass && <p className="text-sm font-semibold text-[var(--color-gold)]">Glass: ${wine.priceGlass}</p>}
                        <p className="text-sm font-semibold text-[var(--color-gold)]">Bottle: ${wine.priceBottle}</p>
                      </div>
                      {wine.scores?.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-end mb-2">
                          {wine.scores.map((s: { score: string; reviewer: string }, i: number) => (
                            <span key={i} className="text-[10px] px-1.5 py-0.5 bg-white/50 rounded font-mono">{s.reviewer.replace('Wine Advocate','WA').replace('Jancis Robinson','JR').replace('Wine Spectator','WS')} {s.score}</span>
                          ))}
                        </div>
                      )}
                      <p className="text-[9px] text-[var(--color-warm-gray)]">{wine.sourceConfidence === 'well-documented' ? '📊 3+ sources' : wine.sourceConfidence === 'moderately-documented' ? '📊 1-2 sources' : '📊 Limited info'}</p>
                    </div>
                  </div>

                  {/* Vintage + drink window */}
                  {wine.vintageNotes && (
                    <p className="text-[10px] text-[var(--color-warm-gray)] italic mb-2">
                      <span className="font-medium not-italic">{wine.vintage}:</span> {wine.vintageNotes}
                    </p>
                  )}

                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      {wine.drinkWindowStart && wine.drinkWindowEnd && (
                        <DrinkWindowBar start={wine.drinkWindowStart} end={wine.drinkWindowEnd} agingPotential={wine.agingPotential || 'drink-now'} />
                      )}
                    </div>
                    <p className="text-[9px] text-[var(--color-warm-gray)] capitalize">{wine.distributionLevel?.replace(/-/g, ' ')}</p>
                  </div>

                  {/* Stephen Mode extras */}
                  {stephenMode && (
                    <div className="mt-3 pt-3 border-t border-black/5 text-[10px] text-[var(--color-warm-gray)] space-y-1">
                      {wine.wholesaleCost && <p>Cost: ${wine.wholesaleCost} · Margin: {Math.round(((wine.priceBottle - wine.wholesaleCost) / wine.priceBottle) * 100)}%</p>}
                      {wine.inventoryCount != null && <p>Inventory: {wine.inventoryCount} bottles{wine.reorderFlag ? ' ⚠️ Reorder' : ''}</p>}
                      {wine.stephenNotes && <p className="italic">{wine.stephenNotes}</p>}
                    </div>
                  )}

                  {wine.producerId && (
                    <a href={`/producers#${wine.producerId}`} className="inline-block text-xs text-[var(--color-sage)] mt-2 hover:text-[var(--color-sage-dark)]">→ View Producer</a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
