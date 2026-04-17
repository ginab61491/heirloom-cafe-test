"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/dinner", label: "Dinner" },
  { href: "/wine", label: "Wine" },
  { href: "/producers", label: "Producers" },
  { href: "/wine-club", label: "Wine Club" },
  { href: "/press", label: "Press" },
  { href: "/events", label: "Events" },
  { href: "/stephens-wine-database", label: "Stephen's Database" },
  { href: "/wine-pairing", label: "AI Wine Pairing" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-cream-dark)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-serif)] text-xl tracking-wide text-[var(--color-earth)]">
          Heirloom Caf&eacute;
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 text-[13px] text-[var(--color-earth-light)]">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--color-earth)] transition-colors">
              {l.label}
            </Link>
          ))}
          <a
            href="https://resy.com/cities/sf/heirloom-cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded bg-[#630000] text-white text-[13px] font-medium hover:opacity-90 transition-opacity"
          >
            Reserve
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[var(--color-earth)]" aria-label="Menu">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? <path d="M6 18 18 6M6 6l12 12" /> : <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-[var(--color-cream-dark)] px-6 py-4 flex flex-col gap-3 text-sm text-[var(--color-earth-light)]">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-[var(--color-earth)]">
              {l.label}
            </Link>
          ))}
          <a
            href="https://resy.com/cities/sf/heirloom-cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 rounded bg-[#630000] text-white text-sm font-medium text-center"
          >
            Reserve a Table
          </a>
        </nav>
      )}
    </header>
  );
}
