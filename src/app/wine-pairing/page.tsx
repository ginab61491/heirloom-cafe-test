"use client";

import { useState } from "react";
import WinePairingForm from "@/components/WinePairingForm";
import WinePairingResult from "@/components/WinePairingResult";

interface PairingResult {
  wine: string;
  explanation: string;
  sommNote: string;
}

export default function WinePairingPage() {
  const [result, setResult] = useState<PairingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentDish, setCurrentDish] = useState("");
  const [fromOurList, setFromOurList] = useState(true);

  async function handleSubmit(dish: string, color: string, budget: string) {
    setIsLoading(true);
    setError("");
    setResult(null);
    setCurrentDish(dish);

    try {
      const res = await fetch("/api/wine-pairing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dish, color, budget, fromOurList }),
      });

      if (!res.ok) throw new Error("Failed to get pairing");

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleTryAnother() {
    setResult(null);
    setError("");
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-12 sm:py-16">
      <div className="text-center mb-8">
        <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[var(--color-earth)] mb-3">
          Wine Pairing
        </h1>
        <p className="text-[var(--color-earth-light)]">
          Describe your dish and our AI sommelier will find the perfect match.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-[var(--color-cream-dark)] bg-[var(--color-warm-white)] p-1">
          <button
            onClick={() => setFromOurList(true)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              fromOurList
                ? "bg-[var(--color-sage)] text-white"
                : "text-[var(--color-earth-light)] hover:text-[var(--color-earth)]"
            }`}
          >
            From Our List
          </button>
          <button
            onClick={() => setFromOurList(false)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              !fromOurList
                ? "bg-[var(--color-sage)] text-white"
                : "text-[var(--color-earth-light)] hover:text-[var(--color-earth)]"
            }`}
          >
            From Anywhere
          </button>
        </div>
      </div>

      {!result ? (
        <WinePairingForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          currentDish={currentDish}
        />
      ) : (
        <WinePairingResult result={result} onTryAnother={handleTryAnother} />
      )}

      {error && (
        <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[var(--color-sage-light)] border-t-[var(--color-sage)] rounded-full animate-spin" />
          <p className="text-sm text-[var(--color-earth-light)] italic">
            Our sommelier is thinking...
          </p>
        </div>
      )}
    </div>
  );
}
