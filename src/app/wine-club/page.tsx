"use client";

import { useState } from "react";

export default function WineClubPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[var(--color-earth)] mb-8 text-center">
        Wine Club
      </h1>

      <div className="space-y-5 text-[var(--color-earth-light)] leading-relaxed mb-12">
        <p>
          We source wines that over-deliver. Whether it&apos;s a village Chablis with the depth
          and concentration of a premier cru that costs twice as much, or a $25 Syrah from
          Mendocino that reminds us of really good C&ocirc;te-R&ocirc;tie, we&apos;re interested
          in the diamonds in the rough, the world-class wines with reasonable price tags.
        </p>
        <p>
          What we promise is that we&apos;ll offer only what we regard as the very best from
          around the world, and we&apos;ll deliver those wines to you at prices unmatched by
          any wine seller in the Bay Area or perhaps the rest of the country.
        </p>
      </div>

      <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl p-6 sm:p-8 mb-12">
        <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-earth)] mb-4">How It Works</h3>
        <ul className="space-y-2 text-sm text-[var(--color-earth-light)]">
          <li>A case of 12 bottles (two each of six wines) every three months</li>
          <li>Pickup at the restaurant, local delivery, or shipment</li>
          <li>Two tiers: $30 or $50 average bottle cost</li>
          <li>No commitment. Cancel up to two weeks before each delivery.</li>
        </ul>
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)] mb-2">Thank you!</h3>
          <p className="text-[var(--color-earth-light)]">We&apos;ll be in touch with details about your first shipment.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="space-y-4"
        >
          <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-earth)] mb-2">Sign Up</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              required
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-[var(--color-earth)] placeholder:text-[var(--color-earth-light)] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)]"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-[var(--color-earth)] placeholder:text-[var(--color-earth-light)] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)]"
            />
          </div>
          <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-[var(--color-earth)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)]">
            <option>$30 average bottle tier</option>
            <option>$50 average bottle tier</option>
          </select>
          <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-[var(--color-earth)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)]">
            <option>Pickup at restaurant</option>
            <option>Local delivery (SF)</option>
            <option>Ship to me</option>
          </select>
          <textarea
            placeholder="Delivery instructions or notes (optional)"
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-[var(--color-earth)] placeholder:text-[var(--color-earth-light)] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)]"
          />
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-[var(--color-sage)] text-white font-medium hover:bg-[var(--color-sage-dark)] transition-colors"
          >
            Join the Wine Club
          </button>
        </form>
      )}
    </div>
  );
}
