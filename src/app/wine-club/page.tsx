"use client";

import { useState } from "react";

export default function WineClubPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[var(--color-earth)] mb-8 text-center">
        Join the Heirloom Wine Club
      </h1>

      <div className="space-y-5 text-[var(--color-earth-light)] leading-relaxed mb-12">
        <p>
          For nearly 15 years, the Heirloom Wine Club has been one of the most rewarding parts of our restaurant&rsquo;s wine program. It gives us the opportunity to share the wines, winemakers, and regions we are most passionate about, bringing exceptional bottles from our cellar to your table.
        </p>
        <p>
          Each quarterly selection is thoughtfully curated to highlight both the producers and terroirs we have championed for more than 15 years, while also introducing members to exciting new regions, varietals, and emerging winemakers that may be less familiar. These are the wines that have inspired us most over the past few months. They are the same bottles we&rsquo;re opening at home and enjoying ourselves.
        </p>
      </div>

      <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl p-6 sm:p-8 mb-8">
        <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-earth)] mb-4">How the Club Works</h3>
        <p className="text-sm text-[var(--color-earth-light)] mb-4">Members receive one curated case of wine every quarter: March, June, September, and December.</p>
        <p className="text-sm text-[var(--color-earth-light)] mb-3">Each shipment includes:</p>
        <ul className="space-y-2 text-sm text-[var(--color-earth-light)] list-disc list-inside mb-4">
          <li>12 bottles total</li>
          <li>6 different wines</li>
          <li>2 bottles of each selection</li>
        </ul>
        <p className="text-sm text-[var(--color-earth-light)]">Most cases include a balanced mix of three white wines and three red wines, though we occasionally include a ros&eacute; or sparkling wine to keep things fresh and exciting.</p>
      </div>

      <div className="bg-[var(--color-warm-white)] border border-[var(--color-cream-dark)] rounded-xl p-6 sm:p-8 mb-12">
        <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-earth)] mb-4">Membership</h3>
        <p className="text-sm text-[var(--color-earth-light)] mb-5">We offer two membership levels:</p>
        <div className="space-y-4 mb-5">
          <div>
            <p className="font-medium text-[var(--color-earth)]">Collector Tier</p>
            <p className="text-sm text-[var(--color-earth-light)]">Average of $55 per bottle &mdash; $660 per quarterly case</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-earth)]">Classic Tier</p>
            <p className="text-sm text-[var(--color-earth-light)]">Average of $35 per bottle &mdash; $420 per quarterly case</p>
          </div>
        </div>
        <p className="text-sm text-[var(--color-earth-light)]">Both tiers are carefully selected with the same philosophy of quality, discovery, and drinkability, simply at different price points.</p>
      </div>

      <div className="text-center mb-12">
        <p className="text-sm text-[var(--color-earth-light)] mb-2">We maintain only a limited number of memberships in each tier to ensure every selection remains personal and thoughtfully curated.</p>
        <p className="text-sm text-[var(--color-earth-light)]">If you&rsquo;re interested in joining the Heirloom Wine Club or would like to learn more, we&rsquo;d love to hear from you.</p>
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
            <option>Classic Tier ($35 average bottle — $420/quarter)</option>
            <option>Collector Tier ($55 average bottle — $660/quarter)</option>
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
