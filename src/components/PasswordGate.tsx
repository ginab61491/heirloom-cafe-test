"use client";

import { useState, useEffect } from "react";

const CORRECT_PASSWORD = "chocolatechipcookie";
const STORAGE_KEY = "heirloom-stephen-auth";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "true") setAuthed(true);
    setChecking(false);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      setAuthed(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  }

  if (checking) return null;

  if (!authed) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-cream)]">
        <div className="max-w-sm w-full mx-auto px-6">
          <div className="gold-frame bg-[var(--color-warm-white)] relative text-center">
            <div className="gold-frame-inner absolute inset-0" />
            <div className="relative z-10">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)] mb-2">
                For Stephen Only
              </h2>
              <p className="text-sm text-[var(--color-warm-gray)] mb-6">
                Enter the password to continue.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="password"
                  value={input}
                  onChange={e => { setInput(e.target.value); setError(false); }}
                  placeholder="Password"
                  autoFocus
                  className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-400' : 'border-[var(--color-cream-dark)]'} bg-white text-[var(--color-charcoal)] text-center focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]`}
                />
                {error && <p className="text-sm text-red-500">Incorrect password.</p>}
                <button type="submit" className="btn-gold w-full">
                  Enter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
