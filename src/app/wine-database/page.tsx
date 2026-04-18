"use client";

import { useState, useMemo, useEffect } from "react";
import TastingGrid from "@/components/wine-database/TastingGrid";
import DrinkWindowBar from "@/components/wine-database/DrinkWindowBar";
import LabelBadge from "@/components/wine-database/LabelBadge";

/* eslint-disable @typescript-eslint/no-explicit-any */
import cellarDataRaw from "@/data/cellar-data.json";
const cellarData: any[] = cellarDataRaw as any[];

const typeColors: Record<string, string> = {
  sparkling: '#F0EAD0', white: '#F5ECD0', rosé: '#F0D8D8', red: '#E8D0C8', dessert: '#E8D8B8', orange: '#E8D0B8',
};
const typeBorders: Record<string, string> = {
  sparkling: '#D4C88A', white: '#D4B86A', rosé: '#C89898', red: '#A87870', dessert: '#C8A868', orange: '#C8A070',
};

type ViewMode = 'v1' | 'v2' | 'v3';
type SortOption = 'name' | 'price-low' | 'price-high' | 'vintage-old' | 'vintage-new' | 'drink-now';

function ExpandableSection({ title, preview, full, defaultOpen }: { title: string; preview: string; full: string; defaultOpen?: boolean }) {
  const [expanded, setExpanded] = useState(defaultOpen || false);
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-widest text-[var(--color-warm-gray)] mb-1.5">{title}</h4>
      <p className="text-xs text-[var(--color-charcoal)] leading-relaxed">{expanded ? full : preview}</p>
      {full.length > preview.length && (
        <button onClick={() => setExpanded(!expanded)} className="text-[10px] text-[var(--color-gold)] mt-1 hover:text-[var(--color-gold-hover)]">
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
}

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
    if (localStorage.getItem('heirloom-stephen-mode') === 'true') setStephenMode(true);
  }, []);
  useEffect(() => { localStorage.setItem('heirloom-stephen-mode', String(stephenMode)); }, [stephenMode]);

  const types = [...new Set(cellarData.map(w => w.type))].sort();
  const countries = [...new Set(cellarData.map(w => w.country))].sort();
  const allLabels = [...new Set(cellarData.flatMap(w => w.labels || []))].sort();

  const filtered = useMemo(() => {
    let result = cellarData;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(w =>
        (w.fullDisplayName || w.name || '').toLowerCase().includes(q) ||
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

    const sorted = [...result];
    switch (sort) {
      case 'price-low': sorted.sort((a, b) => (a.priceBottle || 0) - (b.priceBottle || 0)); break;
      case 'price-high': sorted.sort((a, b) => (b.priceBottle || 0) - (a.priceBottle || 0)); break;
      case 'vintage-old': sorted.sort((a, b) => (a.vintage === 'NV' ? 9999 : +a.vintage) - (b.vintage === 'NV' ? 9999 : +b.vintage)); break;
      case 'vintage-new': sorted.sort((a, b) => (b.vintage === 'NV' ? 0 : +b.vintage) - (a.vintage === 'NV' ? 0 : +a.vintage)); break;
      case 'drink-now': sorted.sort((a, b) => (a.drinkWindowEnd || 9999) - (b.drinkWindowEnd || 9999)); break;
      default: sorted.sort((a, b) => (a.producer || '').localeCompare(b.producer || ''));
    }
    return sorted;
  }, [search, typeFilter, countryFilter, labelFilter, btgOnly, sort]);

  return (
    <div className="bg-[var(--color-cream)] min-h-screen">
      {/* Hero */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img src="/images/wine-shelf.jpeg" alt="Heirloom wine cellar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-cream)] mb-1">The Cellar</h1>
            <p className="text-sm text-[var(--color-cream)] opacity-70">Our full collection of aged and current wines</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Tabs + Stephen */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex gap-2">
            {([['v1','V1: Full Profile'],['v2','V2: Guest View'],['v3','V3: Quick Scan']] as [ViewMode,string][]).map(([id,label]) => (
              <button key={id} onClick={() => setView(id)}
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${view === id ? 'bg-[var(--color-gold)] text-white border-[var(--color-gold)]' : 'border-[var(--color-gold)] text-[var(--color-gold)]'}`}>
                {label}
              </button>
            ))}
          </div>
          <button onClick={() => setStephenMode(!stephenMode)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-colors ${stephenMode ? 'bg-[var(--color-charcoal)] text-[var(--color-gold)] border border-[var(--color-gold)]' : 'bg-[var(--color-parchment)] text-[var(--color-warm-gray)]'}`}>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {stephenMode ? <path d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                : <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />}
            </svg>
            For Stephen
          </button>
        </div>

        {stephenMode && (
          <div className="text-xs text-[var(--color-gold)] bg-[var(--color-charcoal)] px-4 py-2 rounded mb-4">
            Viewing owner data: costs, margins, and inventory
          </div>
        )}

        {/* Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3 items-center mb-3">
            <input type="text" placeholder="Search wines, producers, regions, grapes..." value={search} onChange={e => setSearch(e.target.value)}
              className="flex-1 min-w-[200px] px-4 py-2.5 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]" />
            <button onClick={() => setFiltersOpen(!filtersOpen)} className="sm:hidden text-xs px-3 py-2 rounded bg-[var(--color-parchment)] text-[var(--color-warm-gray)]">
              Filters {filtersOpen ? '▲' : '▼'}
            </button>
          </div>
          <div className={`flex flex-wrap gap-2 ${filtersOpen ? '' : 'hidden sm:flex'}`}>
            {types.map(t => (
              <button key={t} onClick={() => setTypeFilter(typeFilter === t ? '' : t)}
                className={`text-xs px-3 py-1.5 rounded-full capitalize ${typeFilter === t ? 'text-white' : 'text-[var(--color-warm-gray)]'}`}
                style={{ backgroundColor: typeFilter === t ? typeBorders[t] : typeColors[t] }}>{t}</button>
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
              <input type="checkbox" checked={btgOnly} onChange={e => setBtgOnly(e.target.checked)} className="rounded" /> By the glass
            </label>
            <select value={sort} onChange={e => setSort(e.target.value as SortOption)} className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)]">
              <option value="name">Sort: Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="vintage-old">Vintage: Oldest</option>
              <option value="vintage-new">Vintage: Newest</option>
              <option value="drink-now">Drink Now (urgency)</option>
            </select>
          </div>
        </div>

        <p className="text-xs text-[var(--color-warm-gray)] mb-4">{filtered.length} wines</p>

        {/* Wine Grid */}
        <div className={`grid gap-4 ${view === 'v3' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : view === 'v2' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}`}>
          {filtered.map(wine => {
            const displayName = wine.fullDisplayName || `${wine.producer} ${wine.name || wine.wineName || ''}`;

            return (
              <div key={wine.id} id={wine.id} className="rounded-xl overflow-hidden border transition-all hover:shadow-lg"
                style={{ backgroundColor: typeColors[wine.type] || '#F5F0E6', borderColor: typeBorders[wine.type] || '#DDD', borderTopWidth: '3px' }}>

                {view === 'v3' ? (
                  /* V3: Compact */
                  <div className="p-4">
                    <p className="font-[family-name:var(--font-serif)] font-medium text-sm text-[var(--color-charcoal)] mb-0.5">{displayName}</p>
                    <p className="text-[11px] text-[var(--color-warm-gray)] mb-1">{wine.vintage} · {wine.region} · <span className="capitalize">{wine.type}</span></p>
                    <p className="text-[10px] text-[var(--color-charcoal)] italic mb-2">{wine.briefDescriptor}</p>
                    <div className="flex justify-between items-end">
                      <span className="text-xs text-[var(--color-charcoal)]">
                        {wine.priceGlass ? `Glass $${wine.priceGlass} · Bottle $${wine.priceBottle}` : `Bottle $${wine.priceBottle}`}
                      </span>
                      <div className="flex gap-1">{wine.labels?.slice(0, 1).map((l: string) => <LabelBadge key={l} label={l} />)}</div>
                    </div>
                  </div>

                ) : view === 'v2' ? (
                  /* V2: Guest View */
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-serif)] text-base text-[var(--color-charcoal)] mb-0.5">{displayName}</h3>
                    <p className="text-xs text-[var(--color-warm-gray)] mb-0.5">{wine.vintage} · {wine.region}, {wine.country} · <span className="capitalize">{wine.type}</span></p>
                    <p className="text-[11px] text-[var(--color-warm-gray)] mb-2">{(wine.grapeVarieties || []).join(', ')}</p>
                    <p className="text-xs text-[var(--color-charcoal)] italic leading-relaxed mb-3 font-[family-name:var(--font-serif)]">"{wine.briefDescriptor}"</p>
                    <p className="text-xs text-[var(--color-warm-gray)] leading-relaxed mb-3">{wine.tastingNotesPreview || wine.tastingNotes}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {(wine.aromas || wine.tastingProfile?.aromas || []).map((a: string) => (
                        <span key={a} className="text-[9px] px-1.5 py-0.5 rounded bg-white/50 text-[var(--color-warm-gray)]">{a}</span>
                      ))}
                    </div>
                    {wine.heirloomMenuPairings?.length > 0 && (
                      <p className="text-xs text-[var(--color-warm-gray)] mb-3">
                        Pairs with: {wine.heirloomMenuPairings.join(', ')}
                      </p>
                    )}
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-[var(--color-charcoal)]">
                        {wine.priceGlass && <span>Heirloom glass <strong className="text-[var(--color-gold)]">${wine.priceGlass}</strong> · </span>}
                        <span>Heirloom bottle <strong className="text-[var(--color-gold)]">${wine.priceBottle}</strong></span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">{wine.labels?.slice(0, 2).map((l: string) => <LabelBadge key={l} label={l} />)}</div>
                  </div>

                ) : (
                  /* V1: Full Profile — bottle-centric */
                  <div className="p-5 sm:p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-charcoal)] leading-tight">{displayName}</h3>
                      <div className="flex flex-col gap-1 items-end flex-shrink-0">
                        {wine.labels?.slice(0, 3).map((l: string) => <LabelBadge key={l} label={l} />)}
                      </div>
                    </div>
                    <p className="text-xs text-[var(--color-warm-gray)] mb-0.5">{wine.vintage} · {wine.region}, {wine.country} · <span className="capitalize">{wine.type}</span></p>
                    <p className="text-[11px] text-[var(--color-warm-gray)] mb-0.5">{(wine.grapeVarieties || []).join(', ')}</p>
                    {wine.grapeBreakdown && <p className="text-[10px] text-[var(--color-warm-gray)] italic mb-2">({wine.grapeBreakdown})</p>}

                    <p className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-charcoal)] italic leading-relaxed mb-4">"{wine.briefDescriptor}"</p>

                    <div className="border-t border-black/5 pt-4 mb-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Tasting section */}
                        <div className="sm:col-span-2">
                          <ExpandableSection
                            title="Tasting Notes"
                            preview={wine.tastingNotesPreview || (wine.tastingNotes || '').split('.').slice(0, 2).join('.') + '.'}
                            full={wine.tastingNotes || ''}
                          />
                          <div className="flex flex-wrap gap-1 mt-2 mb-3">
                            {(wine.aromas || wine.tastingProfile?.aromas || []).map((a: string) => (
                              <span key={a} className="text-[9px] px-1.5 py-0.5 rounded bg-white/50 text-[var(--color-warm-gray)]">{a}</span>
                            ))}
                          </div>
                          {wine.tastingProfile && (
                            <TastingGrid acidity={wine.tastingProfile.acidity} tannin={wine.tastingProfile.tannin} body={wine.tastingProfile.body}
                              sweetness={wine.tastingProfile.sweetness} alcohol={wine.tastingProfile.alcohol} aromas={[]} compact />
                          )}
                        </div>

                        {/* Pricing */}
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest text-[var(--color-warm-gray)] mb-1.5">Pricing</h4>
                          <div className="space-y-1 text-xs">
                            {wine.priceGlass && <div className="flex justify-between"><span className="text-[var(--color-warm-gray)]">Heirloom glass</span><span className="font-semibold text-[var(--color-charcoal)]">${wine.priceGlass}</span></div>}
                            <div className="flex justify-between"><span className="text-[var(--color-warm-gray)]">Heirloom bottle</span><span className="font-semibold text-[var(--color-charcoal)]">${wine.priceBottle}</span></div>
                            {wine.retailPriceRange && (
                              <div>
                                <div className="flex justify-between"><span className="text-[var(--color-warm-gray)]">Typical retail</span><span className="text-[var(--color-warm-gray)]">${wine.retailPriceRange.low} to ${wine.retailPriceRange.high}</span></div>
                                <p className="text-[9px] text-[var(--color-warm-gray)] opacity-60">({wine.retailPriceRange.sources?.join(', ')})</p>
                              </div>
                            )}
                          </div>
                          {stephenMode && wine.wholesaleCost && (
                            <div className="mt-2 pt-2 border-t border-black/5 space-y-1 text-xs">
                              <div className="flex justify-between"><span className="text-[var(--color-warm-gray)]">Heirloom cost</span><span>${wine.wholesaleCost}</span></div>
                              <div className="flex justify-between"><span className="text-[var(--color-warm-gray)]">Margin</span>
                                <span className={`font-semibold ${(wine.profitMargin || ((wine.priceBottle - wine.wholesaleCost) / wine.priceBottle * 100)) > 60 ? 'text-green-600' : 'text-amber-600'}`}>
                                  {Math.round(wine.profitMargin || ((wine.priceBottle - wine.wholesaleCost) / wine.priceBottle * 100))}%
                                </span>
                              </div>
                            </div>
                          )}
                          {wine.scores?.length > 0 && (
                            <div className="mt-3">
                              <h4 className="text-[10px] uppercase tracking-widest text-[var(--color-warm-gray)] mb-1">Scores</h4>
                              <div className="flex flex-wrap gap-1">
                                {wine.scores.map((s: any, i: number) => (
                                  <span key={i} className="text-[10px] px-1.5 py-0.5 bg-white/50 rounded font-mono">{s.abbreviation || s.reviewer} {s.score}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          <p className="text-[9px] text-[var(--color-warm-gray)] mt-2">{wine.sourceConfidence === 'well-documented' ? '3+ sources' : wine.sourceConfidence === 'moderately-documented' ? '1 to 2 sources' : 'Limited info'}</p>
                        </div>
                      </div>
                    </div>

                    {/* Drink window */}
                    {wine.drinkWindowStart && wine.drinkWindowEnd && (
                      <div className="border-t border-black/5 pt-4 mb-4">
                        <h4 className="text-[10px] uppercase tracking-widest text-[var(--color-warm-gray)] mb-1.5">Drinking Window</h4>
                        <p className="text-xs text-[var(--color-charcoal)] mb-2">Suggested: {wine.drinkWindowStart} to {wine.drinkWindowEnd}{wine.estimatedPeak ? ` · Expected peak: ${wine.estimatedPeak}` : ''}</p>
                        <DrinkWindowBar start={wine.drinkWindowStart} end={wine.drinkWindowEnd} agingPotential={wine.agingPotential || 'drink-now'} />
                        {wine.aromaIfDrinkingNow && (
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-[var(--color-warm-gray)] leading-relaxed">
                            <div><span className="font-medium text-[var(--color-charcoal)]">If drinking now:</span> {wine.aromaIfDrinkingNow}</div>
                            {wine.aromaWithAge && <div><span className="font-medium text-[var(--color-charcoal)]">With age:</span> {wine.aromaWithAge}</div>}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Food pairings */}
                    {(wine.heirloomMenuPairings?.length > 0 || wine.pairingSuggestions?.length > 0) && (
                      <div className="border-t border-black/5 pt-4 mb-4">
                        <h4 className="text-[10px] uppercase tracking-widest text-[var(--color-warm-gray)] mb-1.5">Food Pairings</h4>
                        {wine.heirloomMenuPairings?.length > 0 && (
                          <div className="mb-2">
                            <p className="text-[10px] text-[var(--color-warm-gray)] mb-1">From Heirloom's menu:</p>
                            {wine.heirloomMenuPairings.map((p: string, i: number) => (
                              <p key={i} className="text-xs text-[var(--color-sage)]">· {p}</p>
                            ))}
                          </div>
                        )}
                        {wine.pairingSuggestions?.length > 0 && (
                          <p className="text-xs text-[var(--color-warm-gray)]">General: {wine.pairingSuggestions.join(', ')}</p>
                        )}
                      </div>
                    )}

                    {/* Producer story */}
                    {(wine.producerStory || wine.producerStoryPreview) && (
                      <div className="border-t border-black/5 pt-4 mb-4">
                        <ExpandableSection
                          title="Producer Story"
                          preview={wine.producerStoryPreview || wine.producerStory?.split('.').slice(0, 2).join('.') + '.' || ''}
                          full={wine.producerStory || wine.producerStoryPreview || ''}
                        />
                      </div>
                    )}

                    {/* Vintage + Distribution */}
                    {wine.vintageNotes && (
                      <div className="border-t border-black/5 pt-3 text-[10px] text-[var(--color-warm-gray)]">
                        <span className="font-medium text-[var(--color-charcoal)]">Vintage {wine.vintage}:</span> {wine.vintageNotes}
                      </div>
                    )}
                    <p className="text-[9px] text-[var(--color-warm-gray)] capitalize mt-1">{wine.distributionLevel?.replace(/-/g, ' ')}{wine.distributionNote ? ` · ${wine.distributionNote}` : ''}</p>

                    {/* Stephen mode extras */}
                    {stephenMode && (
                      <div className="mt-3 pt-3 border-t border-black/5 text-[10px] text-[var(--color-warm-gray)] space-y-1">
                        {wine.inventoryCount != null && <p>Inventory: {wine.inventoryCount} bottles{wine.reorderFlag ? ' (reorder needed)' : ''}</p>}
                        {wine.stephenNotes && <p className="italic">{wine.stephenNotes}</p>}
                      </div>
                    )}

                    {wine.producerId && (
                      <a href={`/producers#${wine.producerId}`} className="inline-block text-xs text-[var(--color-sage)] mt-2 hover:text-[var(--color-sage-dark)]">View producer profile</a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
