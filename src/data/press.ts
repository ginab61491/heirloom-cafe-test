export interface PressQuote {
  source: string;
  title?: string;
  author?: string;
  quote: string | null;
  url?: string | null;
  trusted: boolean;
  isFeature?: boolean;
  year?: number;
}

export const pressQuotes: PressQuote[] = [
  {
    source: "The New York Times Travel",
    title: "36 Hours in San Francisco",
    quote: null,
    url: null,
    trusted: true,
  },
  {
    source: "Financial Times",
    title: "Best Restaurants of 2013",
    author: "Nicholas Lander",
    quote: null,
    url: null,
    trusted: true,
  },
  {
    source: "Food and Wine",
    title: "Top Sommeliers of 2011",
    author: "Matt Straus",
    quote: null,
    url: null,
    trusted: true,
  },
  {
    source: "Bon Appetit",
    title: "San Francisco Travel Guide",
    quote: "This charming bistro has high ceilings, old wood floors, and a bar overlooking the open kitchen...",
    url: null,
    trusted: true,
  },
  {
    source: "San Francisco Chronicle",
    title: "Review",
    author: "Michael Bauer",
    quote: null,
    url: null,
    trusted: true,
  },
  {
    source: "San Francisco Examiner",
    title: "Review",
    author: "Patricia Unterman",
    quote: null,
    url: null,
    trusted: true,
  },
  {
    source: "Wine & Spirits Magazine",
    quote: "If this spot flies a bit under the radar, that may be because devotees don't want to clue the rest of the world into the mid-2000s German Rieslings and Vouvrays that owner Matt Straus offers for less than $100.",
    url: "https://www.wineandspiritsmagazine.com/reviews/restaurant/heirloom-cafe",
    trusted: true,
  },
  {
    source: "DiRoNA",
    title: "Distinguished Restaurants of North America",
    quote: "Heirloom Cafe offers a refined dining experience that seamlessly combines modern California cuisine with exceptional service. The ambiance, with its combination of modern elegance and rustic touches, creates a welcoming environment.",
    url: "https://dirona.com/heirloom-cafe/",
    trusted: true,
  },
  {
    source: "tablehopper",
    quote: "These are just a few details that hail from another decade on the list of charms Heirloom Cafe has to offer. The vibe is relaxed and comfortable — with jazz playing and soft candlelight — making this an on-point date restaurant.",
    url: "https://www.tablehopper.com/regular/heirloom-cafe/",
    trusted: true,
  },
  {
    source: "Foursquare / Eater",
    quote: "Go for the super-value tasting menu, or choose from dishes like duck breast salad with figs, or the excellent off-menu burger; don't miss the pairings from a seriously well-stocked cellar.",
    url: "https://foursquare.com/v/heirloom-caf%C3%A9/4be39634b02ec9b68f0f50c0",
    trusted: false,
  },
  {
    source: "The Philosopher Who Chose Wine",
    title: "2026 Feature Article",
    quote: "There is a man in San Francisco who once went to Pittsburgh to study philosophy and came back to pour Burgundy. This is not a tragedy. This is, in fact, the origin story of one of the city's most quietly extraordinary wine programs.",
    url: null,
    trusted: true,
    isFeature: true,
    year: 2026,
  },
];
