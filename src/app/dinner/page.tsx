import { prixFixe, aLaCarte } from "@/data/menu";
import { wineList } from "@/data/wines";

export default function DinnerPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-[var(--color-earth)] mb-2 text-center">
        Dinner
      </h1>
      <p className="text-center text-sm text-[var(--color-earth-light)] mb-12">
        Tuesday &ndash; Saturday, 5:45 &ndash; 9:30 PM
      </p>

      {/* Prix Fixe */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)] mb-1 text-center">
          Prix Fixe
        </h2>
        <p className="text-center text-sm text-[var(--color-earth-light)] mb-6">
          ${prixFixe.price} / ${prixFixe.withPairings} with wine pairings
        </p>
        <div className="space-y-6">
          {prixFixe.courses.map((course, i) => (
            <div key={i} className="text-center">
              <p className="text-[var(--color-earth)] leading-relaxed">{course.dish}</p>
              <p className="text-sm text-[var(--color-sage)] italic mt-1">{course.pairing}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-16 h-px bg-[var(--color-cream-dark)] mx-auto mb-14" />

      {/* A La Carte */}
      <section className="mb-14">
        <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)] mb-6 text-center">
          &Agrave; La Carte
        </h2>
        <div className="space-y-3">
          {aLaCarte.map((item, i) => (
            <div key={i} className="flex justify-between gap-4">
              <p className="text-[var(--color-earth)] leading-relaxed">{item.name}</p>
              <p className="text-[var(--color-earth-light)] flex-shrink-0">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-16 h-px bg-[var(--color-cream-dark)] mx-auto mb-14" />

      {/* Wine by the Glass */}
      <section>
        <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-earth)] mb-8 text-center">
          Wine
        </h2>
        {wineList.map((section) => (
          <div key={section.category} className="mb-8">
            <h3 className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-sage)] mb-3">
              {section.category}
            </h3>
            <div className="space-y-2">
              {section.wines.map((wine, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <p className="text-[var(--color-earth)] text-sm leading-relaxed">{wine.name}</p>
                  <p className="text-[var(--color-earth-light)] text-sm flex-shrink-0">
                    {wine.glass ? `${wine.glass}/${wine.bottle}` : wine.bottle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
