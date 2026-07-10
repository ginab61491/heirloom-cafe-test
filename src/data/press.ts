export interface PressItem {
  source: string;
  title?: string;
  note?: string;
  author?: string;
  quote?: string;
  quote2?: string;
  quote3?: string;
  url?: string;
  year?: number;
  isFeature?: boolean;
}

// Order: Wine & Spirits first, The Philosopher Who Chose Wine second,
// Bon Appetit third, SF Chronicle fourth (with editorial note), then remaining items newest-first by year.
export const pressItems: PressItem[] = [
  {
    source: "Wine & Spirits Magazine",
    quote: "If this spot flies a bit under the radar, that may be because devotees don't want to clue the rest of the world into the mid-2000s German Rieslings and Vouvrays that owner Matt Straus offers for less than $100.",
    quote2: "California takes on French bistro classics, like duck confit salad and bacon-and-onion tart, are completely satisfying.",
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
    source: "San Francisco Examiner",
    title: "Top Taste Treats of 2010",
    author: "Patricia Unterman",
    quote: "\u2026crafts a handful of hyper-local dishes to pair with really nice wines.",
    url: "https://www.sfexaminer.com/lifestyles/top-taste-treats-of-2010/article_5e59e026-0c20-51d0-bd95-656977ede948.html",
    year: 2010,
  },
  {
    source: "Bon App\u00e9tit",
    quote: "\u2026serves new takes on simple fare like marinated-beet salad.",
  },
  {
    source: "San Francisco Chronicle",
    author: "Michael Bauer",
    quote: "\u2026it feels as if you\u2019re eating in someone\u2019s home.",
    quote2: "His menu is as well chosen and focused as the wines.",
  },
  {
    source: "San Francisco Chronicle",
    author: "Esther Mobley",
    quote: "Heirloom is one of those restaurants that deals in comfort, not novelty.",
    url: "https://www.sfchronicle.com/food/wine/article/heirloom-cafe-restaurant-sf-17809207.php",
    year: 2023,
  },
  {
    source: "The New York Times",
    title: "36 Hours in San Francisco",
    note: "Named in the Times\u2019 iconic \u201836 Hours\u2019 travel series \u2014 the paper\u2019s guide to a city\u2019s essential experiences.",
    url: "https://www.nytimes.com/2015/11/01/travel/what-to-do-in-36-hours-in-san-francisco.html",
    year: 2015,
  },
  {
    source: "Financial Times",
    title: "Best Restaurants of 2013",
    note: "One of only two American restaurants named worldwide in the Financial Times\u2019 annual global best restaurants list.",
    author: "Nicholas Lander",
    url: "https://www.ft.com/content/e2ea17fc-66dd-11e2-a805-00144feab49a",
    year: 2013,
  },
  {
    source: "Food and Wine",
    title: "Top Sommeliers of 2011",
    note: "Founder Matt Straus named among the country\u2019s top sommeliers.",
    author: "Matt Straus",
    year: 2011,
  },
  {
    source: "SF Gate",
    title: "Heirloom Cafe Has Promising Start",
    note: "An early review welcoming Heirloom Caf\u00e9 to the Mission District.",
    url: "https://www.sfgate.com/restaurants/diningout/article/heirloom-cafe-has-promising-start-2299815.php",
  },
  {
    source: "DiRoNA",
    title: "Distinguished Restaurants of North America",
    note: "Distinguished Restaurants of North America Award Recipient.",
    url: "https://dirona.com/restaurants/heirloom-cafe/",
  },
];
