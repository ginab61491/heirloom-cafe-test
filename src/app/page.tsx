import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1">
      {/* Full-screen hero */}
      <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden">
        <img
          src="/images/hero-overhead-table.jpeg"
          alt="Overhead view of a beautifully set table at Heirloom Cafe"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
        <div className="relative text-center px-6 pb-16 z-10">
          <h1 className="font-[family-name:var(--font-serif)] text-5xl sm:text-7xl text-[var(--color-cream)] mb-3 leading-tight drop-shadow-lg">
            heirloom caf&eacute;
          </h1>
          <p className="text-[var(--color-cream)] text-lg sm:text-xl mb-8 opacity-90 tracking-wide">
            Aged wines. Seasonal food. Simple pleasures.
          </p>
          <a href="https://resy.com/cities/sf/heirloom-cafe" target="_blank" rel="noopener noreferrer" className="btn-gold text-lg px-10 py-4 animate-[pulse_8s_ease-in-out_infinite]">
            Make a Reservation
          </a>
          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-[var(--color-cream)] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Three section previews */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Menu card — photo slideshow */}
          <Link href="/dinner" className="group block">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-3">
              <img src="/images/dish-soup.jpeg"    alt="Dish" className="menu-slide group-hover:scale-105 transition-transform duration-500" />
              <img src="/images/dish-chicken.jpeg" alt="Dish" className="menu-slide group-hover:scale-105 transition-transform duration-500" />
              <img src="/images/dish-salmon.jpeg"  alt="Dish" className="menu-slide group-hover:scale-105 transition-transform duration-500" />
              <img src="/images/dish-steak.jpeg"   alt="Dish" className="menu-slide group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-10" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-gold)] transition-colors duration-300 rounded-lg m-2 z-10" />
            </div>
            <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] mb-1">The Menu</h3>
            <p className="text-sm text-[var(--color-warm-gray)]">Seasonal, intentional, exceedingly tasteful</p>
          </Link>

          {/* Cellar & Story cards */}
          {[
            { href: "/wine", img: "/images/cellar.jpg", title: "The Cellar", desc: "Aged wines from California and Europe" },
            { href: "/about", img: "/images/front-door.jpg", title: "The Story", desc: "A neighborhood restaurant, a personal cellar" },
          ].map((card) => (
            <Link key={card.href} href={card.href} className="group block">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-3">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-gold)] transition-colors duration-300 rounded-lg m-2" />
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] mb-1">{card.title}</h3>
              <p className="text-sm text-[var(--color-warm-gray)]">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
