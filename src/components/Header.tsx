"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About", img: "/images/storefront-window.jpeg" },
  { href: "/dinner", label: "Dinner", img: "/images/steak-plating.jpeg" },
  { href: "/wine", label: "Wine", img: "/images/wine-shelf.jpeg" },
  { href: "/events", label: "Events", img: "/images/dining-room.jpeg" },
  { href: "/press", label: "Press", img: "/images/candlelit-table.jpeg" },
];

const stephenLinks = [
  { href: "/stephens-wine-database", label: "Producer Profiles v1" },
  { href: "/producers", label: "Producers v2" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [stephenOpen, setStephenOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
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
              {navLinks.map((l) => {
                const isActive = pathname === l.href || pathname.startsWith(l.href + '/');
                return (
                  <div key={l.href} className="relative" onMouseEnter={() => setHoveredNav(l.href)} onMouseLeave={() => setHoveredNav(null)}>
                    <Link
                      href={l.href}
                      className={`text-[var(--color-cream)] hover:text-white transition-colors pb-1 border-b-2 ${
                        isActive ? "border-[var(--color-gold)]" : "border-transparent"
                      } hover:border-[var(--color-gold)] transition-all duration-200`}
                    >
                      {l.label}
                    </Link>
                    {/* Hover thumbnail */}
                    {hoveredNav === l.href && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-20 h-[60px] rounded overflow-hidden shadow-lg opacity-0 animate-[fadeIn_0.2s_ease_forwards] pointer-events-none z-50">
                        <img src={l.img} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Stephen dropdown */}
              <div className="relative" onMouseEnter={() => setStephenOpen(true)} onMouseLeave={() => setStephenOpen(false)}>
                <button className={`text-[var(--color-cream)] hover:text-white transition-colors pb-1 border-b-2 ${
                  pathname.startsWith('/stephens-wine-database') || pathname.startsWith('/producers') ? "border-[var(--color-gold)]" : "border-transparent"
                } hover:border-[var(--color-gold)] transition-all duration-200 text-[13px]`}>
                  For Stephen Only
                </button>
                {stephenOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-[var(--color-sage-dark)] rounded shadow-lg py-1 min-w-[180px] z-50 animate-[fadeIn_0.15s_ease_forwards]">
                    {stephenLinks.map(l => (
                      <Link key={l.href} href={l.href} className="block px-4 py-2 text-[13px] text-[var(--color-cream)] hover:bg-[var(--color-sage)] hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile hamburger */}
            <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-[var(--color-cream)]" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom gold stripe */}
        <div className="h-2 bg-[var(--color-gold)]" />
      </header>

      {/* Full-screen mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-[var(--color-sage)] flex flex-col items-center justify-center">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-[var(--color-cream)] p-2" aria-label="Close">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-1">
            {navLinks.map((l, i) => (
              <div key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-[family-name:var(--font-serif)] text-2xl text-[var(--color-cream)] hover:text-white py-3 block ${
                    pathname === l.href ? "text-white" : ""
                  }`}
                >
                  {l.label}
                </Link>
                {i < navLinks.length - 1 && <div className="w-12 h-px bg-[var(--color-gold)] mx-auto opacity-40" />}
              </div>
            ))}
            <div className="w-12 h-px bg-[var(--color-gold)] mx-auto opacity-40" />
            <p className="text-xs text-[var(--color-cream)] opacity-50 uppercase tracking-widest mt-2 mb-1">For Stephen Only</p>
            {stephenLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-cream)] hover:text-white py-2 block opacity-80">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
}
