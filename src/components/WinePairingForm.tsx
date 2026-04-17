"use client";

import { useState } from "react";

interface WinePairingFormProps {
  onSubmit: (dish: string, color: string, budget: string) => void;
  isLoading: boolean;
  currentDish: string;
}

const colors = ["No preference", "Red", "White", "Rosé", "Sparkling"];
const budgets = ["No preference", "Under $15", "$15-30", "$30-60", "$60+"];

export default function WinePairingForm({ onSubmit, isLoading, currentDish }: WinePairingFormProps) {
  const [dish, setDish] = useState(currentDish);
  const [color, setColor] = useState("No preference");
  const [budget, setBudget] = useState("No preference");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dish.trim()) return;
    onSubmit(dish.trim(), color, budget);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="dish" className="block text-sm font-medium text-[var(--color-earth)] mb-2">
          What are you eating?
        </label>
        <input
          id="dish"
          type="text"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
          placeholder="e.g. pan-seared halibut with lemon butter and roasted fennel"
          className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-[var(--color-earth)] placeholder:text-[var(--color-earth-light)] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)] focus:border-transparent transition-shadow"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="color" className="block text-sm font-medium text-[var(--color-earth)] mb-2">
            Wine preference
          </label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-[var(--color-earth)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)] focus:border-transparent"
          >
            {colors.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[var(--color-earth)] mb-2">
            Budget
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] text-[var(--color-earth)] focus:outline-none focus:ring-2 focus:ring-[var(--color-sage-light)] focus:border-transparent"
          >
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading || !dish.trim()}
        className="w-full py-3 px-6 rounded-lg bg-[var(--color-sage)] text-white font-medium hover:bg-[var(--color-sage-dark)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Finding the perfect pairing..." : "Find My Pairing"}
      </button>
    </form>
  );
}
