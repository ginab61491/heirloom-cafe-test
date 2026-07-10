"use client";

import { useState } from "react";
import Link from "next/link";
import { rareWineList } from "@/data/rareWines";

export default function WinePage() {
  const [activeCategory, setActiveCategory] = useState('Sparkling');
  const [search, setSearch] = useState('');

  const currentCategory = rareWineList.find(c => c.category === activeCategory)!;

  const filteredSections = search.trim()
    ? currentCategory.sections.map(section => ({
        ...section,
        groups: section.groups.map(group => ({
          ...group,
          wines: group.wines.filter(w =>
            w.name.toLowerCase().includes(search.toLowerCase())
          ),
        })).filter(g => g.wines.length > 0),
      })).filter(s => s.groups.length > 0)
    : currentCategory.sections;

  return (
    <div className="bg-[var(--color-cream)]">
      {/* Hero */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img src="/images/cellar.jpg" alt="Heirloom Cafe wine cellar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="absolute bottom-8 left-0 right-0 text-center font-[family-name:var(--font-serif)] text-4xl text-[var(--color-cream)]">
          The Cellar
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Intro */}
        <p className="text-[var(--color-warm-gray)] leading-relaxed text-[15px] mb-3 text-center">
          Our rare and allocated wine list — curated from a cellar built over more than fifteen years.
          Bottles range from everyday pleasures to singular library vintages. Ask your server for guidance.
        </p>
        <p className="text-center text-xs text-[var(--color-warm-gray)] mb-3">
          Wine by the glass available on the{' '}
          <Link href="/dinner" className="text-[var(--color-gold)] hover:underline">dinner menu</Link>.
        </p>
        <p className="text-center text-xs text-[var(--color-warm-gray)] italic mb-10">
          Please note this list is not live and inventory may have changed. Ask your server for current availability.
        </p>

        {/* Category tabs */}
        <div className="flex gap-1 mb-8 border-b border-[var(--color-cream)]">
          {rareWineList.map(cat => (
            <button
              key={cat.category}
              onClick={() => { setActiveCategory(cat.category); setSearch(''); }}
              className={`px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                activeCategory === cat.category
                  ? 'border-[var(--color-gold)] text-[var(--color-charcoal)]'
                  : 'border-transparent text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-8 relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-warm-gray)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={`Search ${activeCategory.toLowerCase()} wines...`}
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-[var(--color-warm-white)] border border-[var(--color-cream)] rounded text-[var(--color-charcoal)] placeholder:text-[var(--color-warm-gray)] focus:outline-none focus:border-[var(--color-gold)]"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)]">
              ✕
            </button>
          )}
        </div>

        {/* Wine list */}
        {filteredSections.length === 0 ? (
          <p className="text-center text-[var(--color-warm-gray)] text-sm py-8">No wines found for &ldquo;{search}&rdquo;</p>
        ) : (
          <div className="space-y-10">
            {filteredSections.map(section => (
              <div key={section.section}>
                {/* Section header */}
                <div className="flex items-center gap-4 mb-5">
                  <h2 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-wine)] whitespace-nowrap">
                    {section.section}
                  </h2>
                  <div className="flex-1 h-px bg-[var(--color-cream)]" />
                </div>

                <div className="space-y-6">
                  {section.groups.map((group, gi) => (
                    <div key={gi}>
                      {/* Producer sub-header */}
                      {group.producer && (
                        <p className="text-xs uppercase tracking-widest text-[var(--color-gold)] mb-3">
                          {group.producer}
                        </p>
                      )}
                      {/* Wine rows */}
                      <div className="space-y-2">
                        {group.wines.map((wine, wi) => (
                          <div key={wi} className="flex justify-between items-baseline gap-4 group">
                            <p className="text-sm text-[var(--color-charcoal)] leading-relaxed">
                              {wine.name}
                            </p>
                            <p className="text-sm text-[var(--color-gold)] font-semibold flex-shrink-0">
                              {wine.price >= 1000
                                ? `$${wine.price.toLocaleString()}`
                                : `$${wine.price}`}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
