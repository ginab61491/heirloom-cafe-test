export interface PressItem {
  source: string;
  title?: string;
  author?: string;
  quote?: string;
  url?: string;
  year?: number;
  isFeature?: boolean;
}

// Order: Wine & Spirits first, The Philosopher Who Chose Wine second,
// Foursquare/Eater third, then remaining items newest-first by year.
export const pressItems: PressItem[] = [
  {
    source: "Wine & Spirits Magazine",
    quote: "If this spot flies a bit under the radar, that may be because devotees don't want to clue the rest of the world into the mid-2000s German Rieslings and Vouvrays that owner Matt Straus offers for less than $100.",
    url: "https://www.wineandspiritsmagazine.com/reviews/restaurant/heirloom-cafe",
  },
  {
    source: "Drink Revel Wine",
    title: "The Philosopher Who Chose Wine",
    quote: "There is a man in San Francisco who once went to Pittsburgh to study philosophy and came back to pour Burgundy. This is not a tragedy. This is, in fact, the origin story of one of the city's most quietly extraordinary wine programs.",
    url: "https://www.drinkrevelwine.com/blogs/news/heirloom-cafe-2500-folsom-in-sf?srsltid=AfmBOoowN_7w-sFqiyFkLRGbvzbPIvJk0qNKiczgE2jmwtAQbTak1oSN",
    year: 2026,
    isFeature: true,
  },
  {
    source: "Foursquare / Eater",
    quote: "Go for the super-value tasting menu, or choose from dishes like duck breast salad with figs, or the excellent off-menu burger; don't miss the pairings from a seriously well-stocked cellar.",
    url: "https://foursquare.com/v/heirloom-caf%C3%A9/4be39634b02ec9b68f0f50c0",
  },
  {
    source: "The New York Times",
    title: "36 Hours in San Francisco",
    url: "https://www.nytimes.com/2015/11/01/travel/what-to-do-in-36-hours-in-san-francisco.html",
    year: 2015,
  },
  {
    source: "Financial Times",
    title: "Best Restaurants of 2013",
    author: "Nicholas Lander",
    year: 2013,
  },
  {
    source: "Food and Wine",
    title: "Top Sommeliers of 2011",
    author: "Matt Straus",
    year: 2011,
  },
  {
    source: "Bon Appetit",
    title: "San Francisco Travel Guide",
    quote: "This charming bistro has high ceilings, old wood floors, and a bar overlooking the open kitchen.",
  },
  {
    source: "San Francisco Chronicle",
    author: "Michael Bauer",
  },
  {
    source: "San Francisco Examiner",
    author: "Patricia Unterman",
  },
  {
    source: "DiRoNA",
    title: "Distinguished Restaurants of North America",
    url: "https://dirona.com/heirloom-cafe/",
  },
  {
    source: "tablehopper",
    quote: "The vibe is relaxed and comfortable — with jazz playing and soft candlelight — making this an on-point date restaurant.",
    url: "https://www.tablehopper.com/regular/heirloom-cafe/",
  },
];
