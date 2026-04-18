"use client";

import { useState } from "react";
import { events, type HeirloomEvent } from "@/data/events";

const categories = ['all', 'winemaker-dinner', 'tasting', 'class', 'special-event'] as const;
const catLabels: Record<string, string> = { all: 'All', 'winemaker-dinner': 'Winemaker Dinners', tasting: 'Tastings', class: 'Classes', 'special-event': 'Special Events' };
const catColors: Record<string, string> = { 'winemaker-dinner': 'var(--color-wine)', tasting: 'var(--color-sage)', class: 'var(--color-gold)', 'special-event': 'var(--color-terracotta)', 'wine-offer': 'var(--color-gold)' };

function formatDate(d: string) {
  const date = new Date(d + 'T12:00:00');
  return { month: date.toLocaleDateString('en-US', { month: 'short' }), day: date.getDate(), year: date.getFullYear() };
}

function EventCard({ event, isPast }: { event: HeirloomEvent; isPast?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const d = formatDate(event.date);

  return (
    <div className={`flex gap-5 bg-[var(--color-warm-white)] rounded-lg overflow-hidden border border-[var(--color-cream)] ${isPast ? 'opacity-70' : ''}`}>
      {/* Color accent */}
      <div className="w-1.5 flex-shrink-0" style={{ backgroundColor: catColors[event.category] || 'var(--color-sage)' }} />

      {/* Date */}
      <div className="py-5 flex-shrink-0 w-16 text-center">
        <p className="text-xs uppercase text-[var(--color-warm-gray)]">{d.month}</p>
        <p className="text-2xl font-bold text-[var(--color-charcoal)]">{d.day}</p>
        <p className="text-xs text-[var(--color-warm-gray)]">{d.year}</p>
      </div>

      {/* Content */}
      <div className="py-5 pr-5 flex-1">
        <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-charcoal)] mb-1">{event.title}</h3>
        <div className="flex flex-wrap gap-3 text-xs text-[var(--color-warm-gray)] mb-2">
          {event.time && <span>{event.time}</span>}
          {event.price && <span>{event.price}</span>}
        </div>
        <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed mb-3">{event.description}</p>

        {event.recurring && (
          <p className="text-xs text-[var(--color-sage)] italic mb-3">{event.recurring}</p>
        )}

        {/* Menu toggle */}
        {event.menu && (
          <div className="mb-3">
            <button onClick={() => setExpanded(!expanded)} className="text-xs text-[var(--color-gold)] hover:text-[var(--color-gold-hover)]">
              {expanded ? 'Hide Menu & Pairings' : 'View Menu & Pairings'}
            </button>
            {expanded && (
              <div className="mt-3 space-y-2 pl-3 border-l border-[var(--color-cream)]">
                {event.menu.map((m, i) => (
                  <div key={i}>
                    <p className="text-sm text-[var(--color-charcoal)]">{m.course}</p>
                    <p className="text-xs text-[var(--color-wine)] italic">{m.wine}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Long description */}
        {event.longDescription && (
          <details className="mb-3 text-sm">
            <summary className="text-xs text-[var(--color-gold)] cursor-pointer">Read Stephen&apos;s Note</summary>
            <p className="mt-2 text-[var(--color-warm-gray)] italic leading-relaxed">{event.longDescription}</p>
          </details>
        )}

        {/* CTA */}
        {event.reservationUrl && event.status === 'upcoming' && (
          <a href={event.reservationUrl} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm px-5 py-2 inline-block">
            Get Tickets
          </a>
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [filter, setFilter] = useState('all');

  const upcoming = events.filter(e => e.status === 'upcoming');
  const past = events.filter(e => e.status === 'archived').filter(e => filter === 'all' || e.category === filter);

  return (
    <div className="bg-[var(--color-cream)]">
      {/* Hero */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img src="/images/dining-room.jpeg" alt="Heirloom Cafe dining room" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="absolute bottom-8 left-0 right-0 text-center font-[family-name:var(--font-serif)] text-4xl text-[var(--color-cream)]">Events</h1>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Instagram section */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-warm-gray)] mb-4">Stay updated through our instagram:</p>
          <a href="https://www.instagram.com/heirloomcafe/" target="_blank" rel="noopener noreferrer" className="btn-gold inline-block mb-6">
            @heirloomcafe
          </a>
          <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md">
            <img src="/images/instagram-grid.jpeg" alt="Heirloom Cafe Instagram highlights" className="w-full" />
          </div>
        </div>

        {/* Upcoming */}
        {upcoming.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)] mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {upcoming.map(e => <EventCard key={e.id} event={e} />)}
            </div>
          </section>
        )}

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                filter === cat ? 'bg-[var(--color-sage)] text-white' : 'bg-[var(--color-parchment)] text-[var(--color-warm-gray)] hover:bg-[var(--color-sage)] hover:text-white'
              }`}
            >
              {catLabels[cat]}
            </button>
          ))}
        </div>

        {/* Past events */}
        <section>
          <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)] mb-6">Past Events</h2>
          <div className="space-y-4">
            {past.map(e => <EventCard key={e.id} event={e} isPast />)}
          </div>
        </section>
      </div>
    </div>
  );
}
