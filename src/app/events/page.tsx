import { getEvents } from "@/lib/queries";
import EventsClient from "./EventsClient";

export const revalidate = 60; // refresh from Sanity every 60 seconds

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="bg-[var(--color-cream)]">
      {/* Hero */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img src="/images/dining-room.jpeg" alt="Heirloom Cafe dining room" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="absolute bottom-8 left-0 right-0 text-center font-[family-name:var(--font-serif)] text-4xl text-[var(--color-cream)]">Events</h1>
        <a href="#upcoming" className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-1 text-[var(--color-cream)] opacity-70 hover:opacity-100 transition-opacity z-10">
          <span className="text-xs tracking-widest uppercase">Upcoming Events</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="space-y-4 text-[var(--color-warm-gray)] leading-relaxed text-[15px] mb-12">
          <p>At Heirloom Caf&eacute;, events are designed to bring together exceptional food, thoughtful wine, and meaningful conversation. From intimate winemaker dinners to educational tastings and philosophy-driven wine classes, each gathering is created to be both memorable and deeply personal.</p>

          <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] pt-2">Winemaker Dinners</h2>
          <p>Our winemaker dinners are some of the most special evenings we host &mdash; multi-course, family-style dinners paired with wines from celebrated producers and often poured alongside rare library vintages not easily found elsewhere. These dinners offer guests the chance to experience world-class wines in context: alongside thoughtfully prepared seasonal dishes and in conversation with the people behind the bottles.</p>

          <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] pt-2">Saturday Wine Tastings, Third Saturday of the Month</h2>
          <p>Our Saturday tastings are designed to be relaxed, approachable, and community-focused. Guests are invited to walk around, pour at their own pace, and explore a rotating selection of wines spanning different regions, styles, vintages, and price points. Part tasting room, part retail shop, and part neighborhood gathering space, these tastings are meant to be informal and welcoming &mdash; whether you&rsquo;re stopping in for a quick glass, discovering something new for your cellar, or spending the afternoon with friends.</p>

          <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] pt-2">Wine Classes &amp; Educational Experiences</h2>
          <p>Education has always been central to our wine program. We offer guided classes ranging from focused regional deep dives &mdash; like White and Red Burgundy seminars &mdash; to broader explorations of philosophy, aesthetics, and sensory experience through wine and food. These classes are designed to go beyond tasting notes. They explore terroir, history, producers, and the emotional and cultural dimensions of food and wine.</p>

          <h2 className="font-[family-name:var(--font-serif)] text-xl text-[var(--color-charcoal)] pt-2">A Place for Connection</h2>
          <p>More than events, these gatherings are an extension of what Heirloom Caf&eacute; is meant to be: a place where food and wine create connection. We believe great hospitality lives in shared experiences, around a communal table, over a glass of wine, and in the conversations that follow.</p>
        </div>

        {/* Instagram section */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-warm-gray)] mb-4">Stay updated through our instagram:</p>
          <a href="https://www.instagram.com/heirloomcafe/" target="_blank" rel="noopener noreferrer" className="btn-gold inline-block mb-6">
            @heirloomcafe
          </a>
          <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md">
            <img src="/images/instagram-grid.jpeg" alt="Heirloom Cafe Instagram highlights" className="w-full" />
          </div>
        </div>

        {/* Events — interactive filtering handled client-side */}
        <EventsClient events={events} />
      </div>
    </div>
  );
}
