import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-sage) 0%, var(--color-parchment) 50%, var(--color-cream) 100%)' }}>
        <div className="text-center px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-6xl sm:text-7xl text-[var(--color-charcoal)] mb-2 leading-tight">
            heirloom caf&eacute;
          </h1>
          <p className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-warm-gray)] italic mb-2">
            2500 Folsom Street, San Francisco
          </p>
          <p className="text-sm text-[var(--color-warm-gray)] mb-10">
            Tuesday &ndash; Saturday, 5:45 &ndash; 9:30 PM
          </p>
          <a href="https://resy.com/cities/sf/heirloom-cafe" target="_blank" rel="noopener noreferrer" className="btn-gold text-lg px-10 py-4">
            Make a Reservation
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="text-[var(--color-warm-gray)] leading-relaxed text-lg">
          Our wine cellar and our love of mature wines are the foundation of our restaurant.
          The kitchen is dedicated to a menu that is concise, seasonal, highly selective,
          and exceedingly tasteful.
        </p>
      </section>

      {/* Feature cards */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Link href="/dinner" className="group">
            <div className="gold-frame bg-[var(--color-warm-white)] text-center py-10 px-6 hover:shadow-lg transition-shadow relative">
              <div className="gold-frame-inner absolute inset-0" />
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] mb-2">Dinner Menu</h3>
              <p className="text-sm text-[var(--color-warm-gray)]">View our current seasonal menu</p>
            </div>
          </Link>
          <Link href="/wine" className="group">
            <div className="gold-frame bg-[var(--color-warm-white)] text-center py-10 px-6 hover:shadow-lg transition-shadow relative">
              <div className="gold-frame-inner absolute inset-0" />
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] mb-2">Our Wines</h3>
              <p className="text-sm text-[var(--color-warm-gray)]">Explore our carefully aged cellar</p>
            </div>
          </Link>
          <Link href="/producers" className="group">
            <div className="gold-frame bg-[var(--color-warm-white)] text-center py-10 px-6 hover:shadow-lg transition-shadow relative">
              <div className="gold-frame-inner absolute inset-0" />
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] mb-2">The Producers</h3>
              <p className="text-sm text-[var(--color-warm-gray)]">Meet the winemakers behind our cellar</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
