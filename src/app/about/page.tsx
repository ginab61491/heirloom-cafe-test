import ReadMore from "@/components/ReadMore";

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-cream)]">
      {/* Top section: side by side */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          <div className="rounded-lg overflow-hidden">
            <img src="/images/storefront-window.jpeg" alt="Heirloom Cafe storefront with gold lettering" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-charcoal)] mb-6">
              Heirloom Caf&eacute;
            </h1>
            <div className="text-[var(--color-warm-gray)] leading-relaxed">
              {/* First paragraph — larger */}
              <p className="text-[17px] mb-4">For more than sixteen years, Heirloom Caf&eacute; has been a neighborhood dining room in the heart of San Francisco&rsquo;s Mission District, a place built on the belief that exceptional food, mature wine, and genuine hospitality should feel both special and approachable.</p>
              {/* Rest — collapsed */}
              <ReadMore>
                <div className="space-y-4 text-[15px]">
                  <p>When Matt Straus opened Heirloom Caf&eacute; in 2010, he did so with two clear ambitions: to offer a wide variety of aged wines from a carefully managed cellar, and to serve simple, deeply satisfying food at reasonable prices. From the beginning, the restaurant was designed to feel intimate and personal. Less like dining out, and more like being welcomed into someone&rsquo;s home. That spirit remains at the center of everything we do.</p>
                  <p>For years, we have carefully identified and sourced wines from favorite producers across California and some of Europe&rsquo;s most storied wine regions, allowing them the time they need to evolve. Every night, we are thrilled to offer wines that speak to both the producer and the terroir from which they come.</p>
                  <p>In the kitchen, our philosophy is equally focused: concise, seasonal, selective, and delicious. The menu reflects a deep respect for ingredients and technique: simple food, prepared exceptionally well, with warmth and intention behind every plate.</p>
                  <p>In 2021, Matt moved to Great Barrington, Massachusetts to begin a new chapter with Heirloom Lodge, passing the majority ownership of Heirloom Caf&eacute; to longtime collaborators Josh DeClercq and Stephen Hallenbeck.</p>
                  <p>Together, Josh and Stephen represent the next chapter of Heirloom. One grounded in the same ideals, but with fresh energy and a deeper connection to the community that has supported the restaurant for over a decade. Between them, and alongside longtime team member Amy, they bring more than 30 years of Heirloom experience to the table.</p>
                  <p>Josh leads the kitchen and runs the dining room most nights, bringing his love of Mediterranean cooking, exceptional ingredients, and beautifully executed simplicity to every service. Stephen oversees the wine program; teaching classes, hosting tastings, managing the Wine Club, and caring for the cellar that remains the soul of the restaurant.</p>
                  <p>The ethos of Heirloom remains unchanged. We see the restaurant not just as a place to eat and drink, but as a vibrant part of the Mission and the greater San Francisco community. It is a place to gather often, celebrate generously, and return to again and again. The tables still fill with friends, families, first dates, anniversaries, and regular Tuesday dinners that somehow become memorable.</p>
                  <p>For us, the word heirloom has always meant more than tomatoes and seeds. It also means something treasured, something cared for, passed down, and made more meaningful over time.</p>
                  <p>That is what this restaurant has become.</p>
                  <p>And we&rsquo;re honored to keep setting the table.</p>
                </div>
              </ReadMore>
            </div>
          </div>
        </div>

        {/* Team bios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* Stephen */}
          <div>
            <div className="rounded-lg overflow-hidden mb-4 aspect-[4/3]">
              <img src="/images/stephen.jpeg" alt="Stephen Hallenbeck" className="w-full h-full object-cover object-top" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)] mb-3">Stephen Hallenbeck</h2>
            <div className="text-[var(--color-warm-gray)] leading-relaxed">
              {/* First paragraph — larger */}
              <p className="text-[17px] mb-3">Stephen likes to joke that he&rsquo;s one of San Francisco&rsquo;s great wine drinkers, and anyone who&rsquo;s shared a bottle with him would be hard-pressed to disagree. Equal parts sommelier, storyteller, and host, he has a rare talent for making both a glass of wine and the people around it feel instantly more alive.</p>
              {/* Rest — collapsed */}
              <ReadMore>
                <div className="space-y-3 text-[15px]">
                  <p>After a brief detour into the fringes of philosophy, Stephen moved to San Francisco in 2008 to attend the California Culinary Academy, bringing with him an early fascination with wine that first took root back in Washington, D.C. He began his culinary career in the kitchens of beloved neighborhood institutions like La Ciccia before joining Heirloom Caf&eacute; as a garde manger cook, before the restaurant had floors, kitchen equipment, or even the shape of what it would become.</p>
                  <p>That was 2010, and Stephen was one of the original team members helping build Heirloom from the ground up. Drawn by a job posting that spoke as much about the wine program as the food, he found himself pulled naturally from the kitchen to the front of house, apprenticing under founder Matt Straus and helping shape the restaurant&rsquo;s cellar and philosophy around wine.</p>
                  <p>In 2013, Stephen left briefly for Pittsburgh to earn his Master&rsquo;s in Philosophy from Duquesne University, because apparently discussing metaphysics and decanting Burgundy require similar levels of patience. He returned to San Francisco and to Heirloom, bringing with him a deeper appreciation for the way food and wine create presence: the kind that asks you to slow down, pay attention, and be fully at the table.</p>
                  <p>Along the way, he taught culinary classes at Williams Sonoma, helped run the farm-to-table catering company Farmhand Kitchen, and managed acclaimed wine programs at places like The Commissary. But Heirloom kept calling him home.</p>
                  <p>In 2021, after the pandemic reshaped the restaurant world, Stephen returned once again, this time as co-owner of Heirloom Caf&eacute; alongside Chef Joshua DeClercq. Today, he leads the wine program, curates tastings, teaches classes, manages the Wine Club, and tends to the cellar with the same curiosity and hospitality that first brought him through the door.</p>
                  <p>For Stephen, wine and food are more than pleasures to be consumed; they are invitations to gather, to connect, and to experience something fleeting and unforgettable. Because in his mind, there&rsquo;s still nothing more magical than friends and family around a table, with delicious food, great wine, and just enough time to enjoy both.</p>
                </div>
              </ReadMore>
            </div>
          </div>

          {/* Josh */}
          <div>
            <div className="rounded-lg overflow-hidden mb-4 aspect-[4/3]">
              <img src="/images/josh.jpeg" alt="Josh DeClercq" className="w-full h-full object-cover object-top" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)] mb-3">Josh DeClercq</h2>
            <div className="text-[var(--color-warm-gray)] leading-relaxed">
              {/* First two paragraphs — larger */}
              <div className="space-y-3 text-[17px] mb-3">
                <p>Josh DeClercq&rsquo;s culinary story starts where all great food stories should: in a neighborhood tavern, surrounded by the sounds of a busy kitchen and the smell of something good on the grill. Growing up in Madison, Wisconsin, Josh got his start at his grandparents&rsquo; tavern, bussing tables on weekends at just 12 years old. By 15, he had worked his way onto the grill station and realized cooking was, in his words, &ldquo;what&rsquo;s up.&rdquo;</p>
                <p>It wasn&rsquo;t just the food that hooked him, it was the culture. The energy of the kitchen, the camaraderie, the pride that came with doing hard work well. It made him feel significant. From that point on, there was no real question about what came next.</p>
              </div>
              {/* Rest — collapsed */}
              <ReadMore>
                <div className="space-y-3 text-[15px]">
                  <p>In 2006, Josh &ldquo;mobbed&rdquo; to San Francisco to attend the California Culinary Academy, diving headfirst into the city&rsquo;s restaurant scene while working at Pizzeria Delfina. Before graduating, he made his way to Delfina, drawn to the pasta station because it looked like &ldquo;mad fun,&rdquo; fast-paced, demanding, and exactly where he wanted to be. It was there he sharpened his philosophy around food: simple, delicious, and executed with precision.</p>
                  <p>From there, Josh moved to Foreign Cinema, where the scale and energy of high-volume service deepened his love for Mediterranean cuisine and taught him what was possible when working with the &ldquo;dopest&rdquo; ingredients around. He later joined the now-shuttered Baker &amp; Banker, continuing to refine his craft while building the foundation for what would come next.</p>
                  <p>As fate would have it, Heirloom Caf&eacute; opened on the exact same day Josh&rsquo;s daughter was born in 2010. A coincidence that feels a little too poetic not to mean something. Just one year later, he was offered the role of Chef at Heirloom, stepping into his first true leadership position and, for the first time, having full creative control of a kitchen.</p>
                  <p>Over the next 15 years, Josh built his career across multiple restaurants and roles, but Heirloom remained the throughline. In 2021, he returned as Chef de Cuisine, bringing with him years of experience, sharper instincts, and an even deeper commitment to the kind of food he loves most: thoughtful, ingredient-driven cooking rooted in warmth and hospitality.</p>
                  <p>Today, Josh is a co-owner and continues to lead the kitchen with the same passion that started on a grill station in Wisconsin all those years ago. He spends his time creating food that feels both elevated and familiar, and building the kind of restaurant where people return not just for the meal, but for the feeling of being there.</p>
                </div>
              </ReadMore>
            </div>
          </div>
        </div>

        {/* Bottom gold frame with contact */}
        <div className="gold-frame bg-[var(--color-warm-white)] relative text-center">
          <div className="gold-frame-inner absolute inset-0" />
          <div className="relative z-10 space-y-2 text-sm text-[var(--color-warm-gray)] mb-6">
            <p>2500 Folsom Street, San Francisco</p>
            <p>Tuesday &ndash; Thursday, 5:45 &ndash; 9:30 PM</p>
            <p>Friday &ndash; Saturday, 5:45 &ndash; 10:00 PM</p>
            <p>415 821 2500</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <a href="https://resy.com/cities/sf/heirloom-cafe" target="_blank" rel="noopener noreferrer" className="btn-gold">Make a Reservation</a>
            <a href="mailto:stephen@heirloom-sf.com?subject=Mailing List" className="btn-gold">Join our Mailing List!</a>
          </div>
        </div>
      </div>
    </div>
  );
}
