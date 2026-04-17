"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/dinner", label: "Dinner" },
  { href: "/wine", label: "Wine" },
  { href: "/stephens-wine-database", label: "Wine Database" },
  { href: "/producers", label: "Producers" },
  { href: "/events", label: "Events" },
  { href: "/press", label: "Press" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      {/* Top gold stripe */}
      <div className="h-2 bg-[var(--color-gold)]" />

      {/* Sage green nav bar */}
      <div className="bg-[var(--color-sage)]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="font-[family-name:var(--font-serif)] text-xl tracking-wide text-[var(--color-cream)] hover:text-white transition-colors">
            heirloom caf&eacute;
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 text-[13px]">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[var(--color-cream)] hover:text-white transition-colors pb-0.5 ${
                  pathname === l.href || pathname.startsWith(l.href + '/') ? 'border-b border-[var(--color-cream)]' : ''
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[var(--color-cream)]" aria-label="Menu">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {open ? <path d="M6 18 18 6M6 6l12 12" /> : <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="lg:hidden px-6 pb-4 flex flex-col gap-3 text-sm border-t border-white/10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-[var(--color-cream)] hover:text-white py-1 ${
                  pathname === l.href ? 'font-semibold' : ''
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Bottom gold stripe */}
      <div className="h-2 bg-[var(--color-gold)]" />
    </header>
  );
}
