"use client";

import { useState } from "react";

function ProduceIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 22 C5 11 39 9 39 22 C39 33 5 35 5 22Z" />
      <path d="M11 22 C11 19 15 19 15 22 C15 25 11 25 11 22Z" />
      <path d="M20 21 C20 18 24 18 24 21 C24 24 20 24 20 21Z" />
      <path d="M29 22 C29 19 33 19 33 22 C33 25 29 25 29 22Z" />
    </svg>
  );
}

function ForagedIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 22 Q22 5 37 22Z" />
      <path d="M17 22 L18 37 Q22 39 26 37 L27 22" />
      <path d="M11 22 L16 32" />
      <path d="M22 22 L22 34" />
      <path d="M33 22 L28 32" />
    </svg>
  );
}

function DairyIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 20 L14 36 Q14 41 22 41 Q30 41 30 36 L30 20" />
      <path d="M14 20 Q14 17 18 15 L18 11" />
      <path d="M30 20 Q30 17 26 15 L26 11" />
      <path d="M18 11 L18 8 M26 11 L26 8" />
      <path d="M17 8 L27 8" />
      <path d="M15 30 Q22 28 29 30" />
    </svg>
  );
}

function SeafoodIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 22 Q22 10 36 22 Q22 34 10 22Z" />
      <path d="M10 22 L4 15 M10 22 L4 29" />
      <circle cx="29" cy="19" r="1.5" />
      <path d="M19 12 Q22 10 25 12" />
    </svg>
  );
}

interface PartnerProps {
  name: string;
  description: string;
}

function Partner({ name, description }: PartnerProps) {
  return (
    <div>
      <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
        <span className="font-semibold text-[var(--color-charcoal)]">{name}</span>
        {' \u2014 '}{description}
      </p>
    </div>
  );
}

interface CategoryProps {
  icon: React.ReactNode;
  heading: string;
  partners: PartnerProps[];
}

function Category({ icon, heading, partners }: CategoryProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[var(--color-warm-gray)]">{icon}</span>
        <h3 className="font-[family-name:var(--font-serif)] text-base text-[var(--color-wine)]">
          {heading}
        </h3>
        <div className="flex-1 h-px bg-[var(--color-cream)]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        {partners.map((p) => (
          <Partner key={p.name} name={p.name} description={p.description} />
        ))}
      </div>
    </div>
  );
}

export default function FarmersPartners() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="pt-14 mt-2 border-t" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/images/vegetables-illustration.png"
          alt=""
          aria-hidden="true"
          className="w-16 h-16 object-contain flex-shrink-0"
        />
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)]">
          Our Farmers &amp; Partners
        </h2>
      </div>

      {/* Opening narrative */}
      <div className="space-y-4 text-[var(--color-warm-gray)] leading-relaxed text-[15px] mb-6">
        <p>A menu that changes with the seasons begins long before the kitchen. It begins in the fields of Capay Valley and Half Moon Bay, on the foggy coast at Davenport, and along the back roads of Sonoma and Marin. For years, we have built relationships with the farmers, foragers, fishermen, and ranchers whose work makes ours possible: small, family-run operations, many of them organic pioneers, all of them within a short drive of our dining room.</p>
        <p>What arrives at our door each morning decides what appears on the menu each night. It is a simple arrangement, and we wouldn&rsquo;t have it any other way.</p>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(v => !v)}
        className="mb-8 flex items-center gap-1 text-xs text-[var(--color-gold)] hover:text-[var(--color-gold-hover)] transition-colors"
      >
        <svg className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        {expanded ? 'Hide our farmers and partners' : 'Meet our farmers and partners'}
      </button>

      {/* Partner listings */}
      {expanded && (
        <>
          <div className="space-y-12 mb-12">
            <Category
              icon={<ProduceIcon />}
              heading="Produce"
              partners={[
                { name: "Iacopi Farms", description: "A third-generation family farm in Half Moon Bay, dry-farming since 1962 and best known for the heirloom Italian shelling beans — butter, cranberry, borlotti, gigante, cannellini — their family carried over from Lucca in the 1930s." },
                { name: "Riverdog Farm", description: "Tim Mueller and Trini Campbell have farmed the Capay Valley since 1990, growing more than eighty certified organic crops across 450 acres alongside pasture-raised chicken and pork." },
                { name: "Terra Firma Farm", description: "Farming organically in Winters since the late 1980s, Terra Firma was among the original CCOF members and a founding force behind the Bay Area CSA movement." },
                { name: "County Line Harvest", description: "Begun in 2000 by David Retsky on six acres at the Marin–Sonoma county line, County Line grows the baby lettuces and specialty greens that anchor our salads through every season." },
                { name: "Swanton Berry Farm", description: "Jim Cochran founded Swanton in Davenport in 1983 as California's first certified organic strawberry farm — and, famously, the first organic farm in the country to unionize." },
                { name: "Dwelley Family Farms", description: "Three generations of the Dwelley family have farmed Brentwood since 1921, bringing us stone fruit, apples, and sweet corn at the height of their seasons." },
              ]}
            />
            <Category
              icon={<ForagedIcon />}
              heading="Foraged"
              partners={[
                { name: "Wine Forest Wild Foods", description: "Connie Green's Napa foraging company, one of the oldest wild-food purveyors in the country, brings us chanterelles, porcini, and whatever else the forest offers that week." },
              ]}
            />
            <Category
              icon={<DairyIcon />}
              heading="Dairy"
              partners={[
                { name: "Straus Family Creamery", description: "Albert Straus founded his Marshall creamery on Tomales Bay in 1994 as the first certified organic dairy west of the Mississippi." },
                { name: "Bellwether Farms", description: "A family-owned Sonoma County creamery since 1986 and the first sheep dairy west of the Rockies, known for sheep-milk cheeses and Jersey cow yogurt." },
              ]}
            />
            <Category
              icon={<SeafoodIcon />}
              heading="Meat, Poultry &amp; Seafood"
              partners={[
                { name: "Liberty Ducks", description: "Fourth-generation duck farmer Jim Reichardt raises a slower-growing Pekin breed near Petaluma, producing a meatier, richer bird than you'll find almost anywhere else." },
                { name: "Sonoma County Meat Co.", description: "Founded in 2014 by rancher-butchers Rian Rinn and Jenine Alexander, this Santa Rosa shop sources regeneratively raised beef, pork, and lamb from within fifty miles and does all of its butchery, smoking, and sausage-making in-house." },
                { name: "Four Star Seafood & Provisions", description: "Started in 2015 by two chefs who wanted better fish, Four Star works directly with fishermen along the California coast, cutting out the middlemen so seafood reaches our kitchen just days out of the water." },
              ]}
            />
          </div>

        </>
      )}
    </section>
  );
}
