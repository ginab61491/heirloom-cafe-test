import { getPrixFixe, getALaCarte, getWineList } from "@/lib/queries";

export default async function DinnerPage() {
  const [prixFixe, aLaCarte, wineList] = await Promise.all([
    getPrixFixe(),
    getALaCarte(),
    getWineList(),
  ]);
  return (
    <div className="bg-[var(--color-cream)]">
      {/* Hero — crossfade slideshow */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img src="/images/dish-soup.jpeg"    alt="Dish" className="menu-slide" />
        <img src="/images/dish-chicken.jpeg" alt="Dish" className="menu-slide" />
        <img src="/images/dish-salmon.jpeg"  alt="Dish" className="menu-slide" />
        <img src="/images/dish-steak.jpeg"   alt="Dish" className="menu-slide" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="font-[family-name:var(--font-serif)] text-4xl text-[var(--color-charcoal)] mb-10 text-center">
          Dinner
        </h1>

        {/* Menu in gold frame */}
        <div className="gold-frame bg-[var(--color-warm-white)] relative mb-12">
          <div className="gold-frame-inner absolute inset-0" />

          {/* Prix Fixe */}
          <div className="mb-10 relative z-10">
            <h2 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-charcoal)] mb-1 text-center font-bold">
              In-house menu
            </h2>
            <p className="text-center text-xs text-[var(--color-warm-gray)] mb-6">
              ${prixFixe.price} / ${prixFixe.withPairings} with wine pairings
            </p>
            <div className="space-y-6">
              {prixFixe.courses.map((course, i) => (
                <div key={i} className="text-center">
                  <p className="text-[var(--color-charcoal)] leading-relaxed tracking-wide">{course.dish}</p>
                  <p className="text-sm text-[var(--color-wine)] italic mt-1">{course.pairing}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gold divider */}
          <div className="w-20 h-px bg-[var(--color-gold)] mx-auto mb-10" />

          {/* A La Carte */}
          <div className="relative z-10">
            <h2 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-charcoal)] mb-6 text-center font-bold">
              A la carte
            </h2>
            <div className="space-y-4">
              {aLaCarte.map((item, i) => (
                <div key={i} className="flex justify-between gap-4 leading-relaxed" style={{ lineHeight: '2' }}>
                  <p className="text-[var(--color-charcoal)] tracking-wide">{item.name}</p>
                  <p className="text-[var(--color-gold)] font-semibold flex-shrink-0">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wine by the Glass in gold frame */}
        <div className="gold-frame bg-[var(--color-warm-white)] relative">
          <div className="gold-frame-inner absolute inset-0" />
          <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] mb-8 text-center relative z-10">
            Wine
          </h2>
          {wineList.map((section) => (
            <div key={section.category} className="mb-6 relative z-10">
              <h3 className="font-[family-name:var(--font-serif)] text-base text-[var(--color-wine)] mb-3">
                {section.category}
              </h3>
              <div className="space-y-2">
                {section.wines.map((wine, i) => (
                  <div key={i} className="flex justify-between gap-4">
                    <p className="text-[var(--color-charcoal)] text-sm leading-relaxed tracking-wide">{wine.name}</p>
                    <p className="text-[var(--color-gold)] text-sm flex-shrink-0 font-semibold">
                      {wine.glass ? `${wine.glass}/${wine.bottle}` : wine.bottle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
