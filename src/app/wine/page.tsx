"use client";

import { useState } from "react";
import Link from "next/link";
import { rareWineList } from "@/data/rareWines";

export default function WinePage() {
  const [activeTab, setActiveTab] = useState<'list' | 'club'>('list');
  const [activeCategory, setActiveCategory] = useState('Sparkling');
  const [search, setSearch] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [clubName, setClubName] = useState('');
  const [clubEmail, setClubEmail] = useState('');
  const [clubTier, setClubTier] = useState('Classic Tier ($35 average bottle — $420/quarter)');
  const [clubLoading, setClubLoading] = useState(false);
  const [clubError, setClubError] = useState('');

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

        {/* Top-level tab toggle */}
        <div className="flex gap-3 justify-center mb-12">
          <button
            onClick={() => setActiveTab('list')}
            className={`px-8 py-3 text-sm font-medium tracking-wide border transition-colors ${
              activeTab === 'list'
                ? 'bg-[var(--color-charcoal)] text-[var(--color-cream)] border-[var(--color-charcoal)]'
                : 'bg-transparent text-[var(--color-charcoal)] border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-cream)]'
            }`}
          >
            Wine List
          </button>
          <button
            onClick={() => setActiveTab('club')}
            className={`px-8 py-3 text-sm font-medium tracking-wide border transition-colors ${
              activeTab === 'club'
                ? 'bg-[var(--color-charcoal)] text-[var(--color-cream)] border-[var(--color-charcoal)]'
                : 'bg-transparent text-[var(--color-charcoal)] border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-cream)]'
            }`}
          >
            Wine Club
          </button>
        </div>

        {/* ── WINE LIST ── */}
        {activeTab === 'list' && (
          <>
            <p className="text-[var(--color-warm-gray)] leading-relaxed text-[15px] mb-3 text-center">
              Our rare and allocated wine list, curated from a cellar built over more than fifteen years.
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
                    <div className="flex items-center gap-4 mb-5">
                      <h2 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-wine)] whitespace-nowrap">
                        {section.section}
                      </h2>
                      <div className="flex-1 h-px bg-[var(--color-cream)]" />
                    </div>
                    <div className="space-y-6">
                      {section.groups.map((group, gi) => (
                        <div key={gi}>
                          {group.producer && (
                            <p className="text-xs uppercase tracking-widest text-[var(--color-gold)] mb-3">
                              {group.producer}
                            </p>
                          )}
                          <div className="space-y-2">
                            {group.wines.map((wine, wi) => (
                              <div key={wi} className="flex justify-between items-baseline gap-4">
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
          </>
        )}

        {/* ── WINE CLUB ── */}
        {activeTab === 'club' && (
          <>
            <div className="space-y-5 text-[var(--color-warm-gray)] leading-relaxed mb-12">
              <p>
                For nearly 15 years, the Heirloom Wine Club has been one of the most rewarding parts of our
                restaurant&rsquo;s wine program. It gives us the opportunity to share the wines, winemakers,
                and regions we are most passionate about, bringing exceptional bottles from our cellar to your table.
              </p>
              <p>
                Each quarterly selection is thoughtfully curated to highlight both the producers and terroirs we
                have championed for more than 15 years, while also introducing members to exciting new regions,
                varietals, and emerging winemakers. These are the wines that have inspired us most over the past
                few months. They are the same bottles we&rsquo;re opening at home and enjoying ourselves.
              </p>
            </div>

            <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream)] rounded-xl p-6 sm:p-8 mb-8">
              <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-charcoal)] mb-4">How the Club Works</h3>
              <p className="text-sm text-[var(--color-warm-gray)] mb-4">Members receive one curated case of wine every quarter: March, June, September, and December.</p>
              <p className="text-sm text-[var(--color-warm-gray)] mb-3">Each shipment includes:</p>
              <ul className="space-y-2 text-sm text-[var(--color-warm-gray)] list-disc list-inside mb-4">
                <li>12 bottles total</li>
                <li>6 different wines</li>
                <li>2 bottles of each selection</li>
              </ul>
              <p className="text-sm text-[var(--color-warm-gray)]">Most cases include a balanced mix of three white wines and three red wines, though we occasionally include a ros&eacute; or sparkling wine to keep things fresh and exciting.</p>
            </div>

            <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream)] rounded-xl p-6 sm:p-8 mb-12">
              <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-charcoal)] mb-4">Membership</h3>
              <p className="text-sm text-[var(--color-warm-gray)] mb-5">We offer two membership levels:</p>
              <div className="space-y-4 mb-5">
                <div>
                  <p className="font-medium text-[var(--color-charcoal)]">Collector Tier</p>
                  <p className="text-sm text-[var(--color-warm-gray)]">Average of $55 per bottle &mdash; $660 per quarterly case</p>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-charcoal)]">Classic Tier</p>
                  <p className="text-sm text-[var(--color-warm-gray)]">Average of $35 per bottle &mdash; $420 per quarterly case</p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-warm-gray)]">Both tiers are carefully selected with the same philosophy of quality, discovery, and drinkability, simply at different price points.</p>
            </div>

            <div className="text-center mb-12">
              <p className="text-sm text-[var(--color-warm-gray)] mb-2">We maintain only a limited number of memberships in each tier to ensure every selection remains personal and thoughtfully curated.</p>
              <p className="text-sm text-[var(--color-warm-gray)]">Cases are available for pickup at the restaurant.</p>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] mb-2">Thank you!</h3>
                <p className="text-[var(--color-warm-gray)]">We&apos;ll be in touch with details about your membership.</p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setClubError('');
                  setClubLoading(true);
                  try {
                    const res = await fetch('/api/wine-club', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ name: clubName, email: clubEmail, tier: clubTier }),
                    });
                    const data = await res.json();
                    if (data.ok) {
                      setSubmitted(true);
                    } else {
                      setClubError(data.error ?? 'Something went wrong. Please try again.');
                    }
                  } catch {
                    setClubError('Could not connect. Please check your connection and try again.');
                  } finally {
                    setClubLoading(false);
                  }
                }}
                className="space-y-4"
              >
                <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-charcoal)] mb-2">Sign Up</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    value={clubName}
                    onChange={e => setClubName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream)] bg-[var(--color-warm-white)] text-[var(--color-charcoal)] placeholder:text-[var(--color-warm-gray)] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={clubEmail}
                    onChange={e => setClubEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream)] bg-[var(--color-warm-white)] text-[var(--color-charcoal)] placeholder:text-[var(--color-warm-gray)] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]"
                  />
                </div>
                <select
                  value={clubTier}
                  onChange={e => setClubTier(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream)] bg-[var(--color-warm-white)] text-[var(--color-charcoal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]"
                >
                  <option>Classic Tier ($35 average bottle — $420/quarter)</option>
                  <option>Collector Tier ($55 average bottle — $660/quarter)</option>
                </select>
                {clubError && <p className="text-sm text-red-500">{clubError}</p>}
                <button
                  type="submit"
                  disabled={clubLoading}
                  className="w-full py-3 px-6 rounded-lg bg-[var(--color-sage)] text-white font-medium hover:bg-[var(--color-sage-dark)] transition-colors disabled:opacity-60"
                >
                  {clubLoading ? 'Sending…' : 'Join the Wine Club'}
                </button>
              </form>
            )}
          </>
        )}

      </div>
    </div>
  );
}
