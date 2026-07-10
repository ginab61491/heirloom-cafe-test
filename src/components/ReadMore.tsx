"use client";

import { useState } from "react";

export default function ReadMore({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {expanded ? (
        <>
          {children}
          <button
            onClick={() => setExpanded(false)}
            className="mt-3 flex items-center gap-1 text-xs text-[var(--color-gold)] hover:text-[var(--color-gold-hover)] transition-colors"
          >
            <svg className="w-3 h-3 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            Show less
          </button>
        </>
      ) : (
        <button
          onClick={() => setExpanded(true)}
          className="mt-3 flex items-center gap-1 text-xs text-[var(--color-gold)] hover:text-[var(--color-gold-hover)] transition-colors"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          Read more
        </button>
      )}
    </div>
  );
}
