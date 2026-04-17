export interface ProducerWineRating {
  score: string;
  reviewer: string;
  vintage?: string;
}

export interface HeirloomProducer {
  id: string;
  name: string;
  region: string;
  subRegion?: string;
  country: string;
  appellations: string[];
  founded?: string;
  history: string;
  knownFor: string;
  whatMakesThemSpecial: string;
  standoutLine?: string;
  signatureVarietals?: string[];
  grapeVarieties: string[];
  wineStyle?: string;
  winemakingPhilosophy: string;
  avgCostRange: string;
  avgRetailRange?: string;
  valueTier?: 'exceptional-value' | 'fair-price' | 'worth-the-splurge' | 'special-occasion';
  websiteUrl?: string;
  importerUrl?: string;
  notablePress: Array<{ quote: string; source: string; trusted: boolean }>;
  heirloomWines: Array<{
    name: string;
    vintage: string;
    priceGlass?: number;
    priceBottle?: number;
    tastingNotes?: string;
    ratings?: ProducerWineRating[];
    drinkWindow?: string;
  }>;
  colorAccent: string;
}

export const heirloomProducers: HeirloomProducer[] = [
  {
    id: "bechtold",
    name: "Bechtold",
    region: "Alsace",
    country: "France",
    appellations: ["Crémant d'Alsace"],
    founded: "1640s",
    history: "One of the oldest documented winegrowing families in Alsace, with records tracing to the 1640s in Dahlenheim. Jean-Marie Bechtold converted to organic farming in 2000, and the estate is now run by his son with the same low-intervention philosophy.",
    knownFor: "Organic Crémant d'Alsace of uncommon depth. Their sparkling wines undergo extended lees aging and are made with a restraint rare in the appellation.",
    whatMakesThemSpecial: "One of the very few Alsatian estates bottling Crémant with the seriousness typically reserved for Champagne grower-producers. The wines spend well over the minimum on lees and show real autolytic complexity.",
    grapeVarieties: ["Auxerrois", "Pinot Blanc", "Riesling", "Pinot Gris"],
    winemakingPhilosophy: "Certified organic (Ecocert). Native yeast fermentation, minimal sulfur, extended lees contact for Crémant.",
    avgCostRange: "$15–$25",
    websiteUrl: "https://www.bechtold.fr",
    notablePress: [{ quote: "Excellent value Crémant with genuine complexity", source: "The Wine Front (Australia)", trusted: false }],
    heirloomWines: [{ name: "Crémant d'Alsace Extra Brut", vintage: "NV", priceGlass: 17, priceBottle: 68 }],
    colorAccent: "#E8DFD0"
  },
  {
    id: "bertrand-delespierre",
    name: "Bertrand-Delespierre",
    region: "Champagne",
    country: "France",
    appellations: ["Champagne Premier Cru"],
    history: "A small récoltant-manipulant in the Montagne de Reims, farming Premier Cru vineyards around Verzenay and Mailly. Family operation with limited production.",
    knownFor: "Pinot Noir-dominant grower Champagne from Premier Cru Montagne de Reims villages. Serious, vinous, structured.",
    whatMakesThemSpecial: "This is Champagne made by the farmer who grows the grapes, not a brand that buys fruit. The wines reflect specific Montagne de Reims terroir with a richness that belies their modest price.",
    grapeVarieties: ["Pinot Noir", "Chardonnay"],
    winemakingPhilosophy: "Traditional method, extended lees aging, low dosage.",
    avgCostRange: "$30–$45",
    notablePress: [],
    heirloomWines: [{ name: "Champagne 1er Cru", vintage: "NV", priceGlass: 28, priceBottle: 112 }],
    colorAccent: "#D4C5B0"
  },
  {
    id: "maillart",
    name: "Nicolas Maillart",
    region: "Champagne",
    country: "France",
    appellations: ["Champagne Premier Cru"],
    founded: "1753",
    history: "Family estate in Écueil on the northern flank of the Montagne de Reims, with roots to 1753. Nicolas represents the current generation, having taken full control in the early 2000s and shifted toward parcel-specific bottlings.",
    knownFor: "Premier Cru grower Champagne with a house style that balances ripe Montagne de Reims fruit with chalky minerality. Increasingly recognized for single-vineyard cuvées.",
    whatMakesThemSpecial: "Nicolas was among the early Montagne de Reims growers to adopt Burgundian thinking, vinifying parcels separately in barrel and bottling lieu-dit wines. His entry-level Premier Cru already shows this precision.",
    grapeVarieties: ["Pinot Noir", "Chardonnay", "Pinot Meunier"],
    winemakingPhilosophy: "Sustainable viticulture (HVE Level 3). Partial barrel fermentation, malolactic for some cuvées, moderate dosage.",
    avgCostRange: "$35–$65",
    websiteUrl: "https://www.champagne-maillart.fr",
    notablePress: [{ quote: "A grower to watch in the Montagne de Reims", source: "Peter Liem, Champagne Guide", trusted: true }],
    heirloomWines: [{ name: "Champagne 1er Cru", vintage: "NV", priceBottle: 70 }],
    colorAccent: "#C9B8A0"
  },
  {
    id: "dumez",
    name: "Dumez",
    region: "Champagne",
    country: "France",
    appellations: ["Champagne Premier Cru"],
    history: "Small grower-producer in the Premier Cru village of Chigny-les-Roses on the Montagne de Reims. Limited production, primarily sold locally and through specialized importers.",
    knownFor: "Rosé Champagne from Premier Cru Montagne de Reims fruit. Small production, limited international availability.",
    whatMakesThemSpecial: "A genuinely small-scale grower making rosé Champagne in quantities that larger houses would consider a rounding error. The kind of producer you discover through a sommelier, not through marketing.",
    grapeVarieties: ["Pinot Noir", "Chardonnay"],
    winemakingPhilosophy: "Traditional method, saignée rosé.",
    avgCostRange: "$30–$50",
    notablePress: [],
    heirloomWines: [{ name: "Champagne Rosé 1er Cru", vintage: "NV", priceBottle: 70 }],
    colorAccent: "#DEC5C5"
  },
  {
    id: "le-pianelle",
    name: "Le Pianelle",
    region: "Piedmont",
    country: "Italy",
    appellations: ["Coste della Sesia"],
    founded: "2003",
    history: "A small estate in the Alto Piemonte, specifically the Coste della Sesia zone between Gattinara and Bramaterra. Founded by Antonella Bondi, who revived abandoned hillside vineyards planted to Nebbiolo, Croatina, and Vespolina.",
    knownFor: "Alto Piemonte wines with a feminine, floral elegance. Their rosato from Nebbiolo and Croatina is a sommelier favorite for its combination of structure and drinkability.",
    whatMakesThemSpecial: "One of the new wave of small producers bringing attention back to Alto Piemonte's high-altitude Nebbiolo vineyards. The rosato has become a cult sommelier pour — serious pink wine with real structure.",
    grapeVarieties: ["Nebbiolo", "Croatina", "Vespolina"],
    winemakingPhilosophy: "Organic practices (not certified). Native yeast, large oak, minimal intervention.",
    avgCostRange: "$18–$35",
    notablePress: [{ quote: "Among the most compelling new estates in Alto Piemonte", source: "Ian D'Agata, Vinous", trusted: true }],
    heirloomWines: [{ name: "Coste della Sesia Rosato", vintage: "2023", priceGlass: 17, priceBottle: 68 }],
    colorAccent: "#D9C4B8"
  },
  {
    id: "tatomer",
    name: "Tatomer",
    region: "California",
    country: "USA",
    appellations: ["Edna Valley"],
    founded: "2012",
    history: "Founded by Graham Tatomer, a UC Davis graduate who became obsessed with Austrian and Alsatian varieties while working at Sine Qua Non. He sources Grüner Veltliner and Riesling from the cool, fog-influenced Edna Valley on California's Central Coast.",
    knownFor: "Some of the most convincing Grüner Veltliner made outside Austria. His Edna Valley bottlings have the peppery snap and mineral tension of Kamptal wines at a fraction of the price.",
    whatMakesThemSpecial: "Tatomer proved that Grüner Veltliner has a future in California when nearly everyone else was ignoring it. The Paragon Vineyard bottling specifically shows the grape can be serious in the right California site.",
    grapeVarieties: ["Grüner Veltliner", "Riesling"],
    winemakingPhilosophy: "Whole-cluster pressing, native yeast, stainless steel, no malolactic. Minimalist approach to let the grape and site express themselves.",
    avgCostRange: "$20–$35",
    websiteUrl: "https://www.tatomer.com",
    notablePress: [
      { quote: "California's most convincing case for Grüner Veltliner", source: "Wine Enthusiast", trusted: true },
      { quote: "One of the most exciting young winemakers on the Central Coast", source: "Jon Bonné, The New California Wine", trusted: true }
    ],
    heirloomWines: [{ name: "Grüner Veltliner 'Paragon' Edna Valley", vintage: "2022", priceGlass: 15, priceBottle: 60 }],
    colorAccent: "#C5D4C0"
  },
  {
    id: "mittnacht",
    name: "Mittnacht",
    region: "Alsace",
    country: "France",
    appellations: ["Alsace"],
    founded: "1930s",
    history: "Domaine Mittnacht Frères in Hunawihr, with vineyards across several Grand Cru sites. The estate has been biodynamic since 1999 under Christophe Mittnacht, making them early adopters in the region.",
    knownFor: "Biodynamic Alsatian wines with purity and precision. Their Rieslings from Grand Cru Rosacker and Muehlforst are benchmarks for the organic/biodynamic movement in Alsace.",
    whatMakesThemSpecial: "Mittnacht was farming biodynamically in Alsace before it was fashionable, and their wines show the payoff: crystalline fruit, racy acidity, and a sense of place that conventional farming rarely achieves in the region.",
    grapeVarieties: ["Riesling", "Pinot Gris", "Gewurztraminer", "Muscat"],
    winemakingPhilosophy: "Certified biodynamic (Biodyvin). Native yeast, extended lees aging, minimal sulfur.",
    avgCostRange: "$15–$30",
    websiteUrl: "https://www.mittnacht.fr",
    notablePress: [{ quote: "A producer of real conviction in Alsace", source: "Jancis Robinson", trusted: true }],
    heirloomWines: [{ name: "Alsace Riesling 'd'étoiles'", vintage: "2024", priceGlass: 16, priceBottle: 64 }],
    colorAccent: "#D0D8C4"
  },
  {
    id: "fattoria-prunecchio",
    name: "Fattoria di Prunecchio",
    region: "Tuscany",
    country: "Italy",
    appellations: ["Toscana IGT"],
    history: "A small estate in the Tuscan hills producing white wines from traditional Tuscan varieties. Limited international documentation.",
    knownFor: "White Tuscan blends with an emphasis on indigenous grape varieties. A lesser-known producer in a region dominated by red wine.",
    whatMakesThemSpecial: "In a region where Sangiovese is king, this is a producer quietly making serious white wine from local grapes. The kind of discovery that makes Italian wine endlessly interesting.",
    grapeVarieties: ["Trebbiano", "Malvasia"],
    winemakingPhilosophy: "Traditional Tuscan methods.",
    avgCostRange: "$15–$25",
    notablePress: [],
    heirloomWines: [{ name: "Bianco Toscano 'Prunecchio'", vintage: "2021", priceGlass: 16, priceBottle: 64 }],
    colorAccent: "#E0D5C0"
  },
  {
    id: "niepoort",
    name: "Niepoort",
    region: "Douro",
    country: "Portugal",
    appellations: ["Douro DOC", "Porto DOC"],
    founded: "1842",
    history: "Founded by Eduard Niepoort in 1842, now run by the fifth generation under Dirk Niepoort, who transformed the house from a traditional Port shipper into one of Portugal's most innovative table wine producers. The family owns quintas across the Douro.",
    knownFor: "Bridging the world of traditional Port with cutting-edge Douro table wines. Dirk Niepoort is widely considered one of Portugal's most important winemakers, producing everything from entry-level Fabelhaft to the iconic Charme and Batuta.",
    whatMakesThemSpecial: "Dirk Niepoort didn't just modernize his family's Port house — he helped define what Douro table wine could be. The Redoma wines (white and red) are benchmarks for the region: complex, age-worthy, and reasonably priced for their quality.",
    grapeVarieties: ["Touriga Nacional", "Touriga Franca", "Tinta Roriz", "Rabigato", "Códega do Larinho", "Viosinho"],
    winemakingPhilosophy: "Biodynamic practices across owned vineyards. Old-vine focus, granite lagares for top wines, mix of traditional and modern techniques.",
    avgCostRange: "$15–$120",
    websiteUrl: "https://www.niepoort-vinhos.com",
    notablePress: [
      { quote: "Dirk Niepoort is Portugal's most restless winemaker", source: "Jancis Robinson", trusted: true },
      { quote: "Redoma is one of the Douro's great white wines", source: "Wine Advocate", trusted: true }
    ],
    heirloomWines: [{ name: "Douro Branco 'Redoma'", vintage: "2024", priceGlass: 17, priceBottle: 68 }],
    colorAccent: "#C4B8A4"
  },
  {
    id: "bott-frigyes",
    name: "Bott Frigyes",
    region: "Southern Slovakia (Tokaj-adjacent)",
    country: "Slovakia",
    appellations: ["Malokarpatská"],
    history: "A small family winery in the ethnic Hungarian region of southern Slovakia. Frigyes Bott works with Furmint and other local varieties in a region with strong historical ties to the Tokaj tradition.",
    knownFor: "Furmint from the Carpathian foothills — the same grape as Tokaj but from the Slovak side of the border. A producer operating in relative obscurity outside Central European wine circles.",
    whatMakesThemSpecial: "This is Furmint from outside Tokaj's famous vineyards, offering a different expression of a great grape at a price that Tokaj's top producers can no longer match. A genuine discovery wine.",
    grapeVarieties: ["Furmint"],
    winemakingPhilosophy: "Small-production, artisanal approach.",
    avgCostRange: "$18–$30",
    notablePress: [],
    heirloomWines: [{ name: "Furmint", vintage: "2023", priceGlass: 20, priceBottle: 80 }],
    colorAccent: "#D5CDB8"
  },
  {
    id: "fosse-seche",
    name: "Château de Fosse-Sèche",
    region: "Loire",
    country: "France",
    appellations: ["Saumur"],
    founded: "1998",
    history: "Guillaume and Adélaïde Pire acquired this 15th-century estate in the southern Saumur appellation in 1998 and converted to biodynamics. The property includes 30 hectares of vines within a 150-hectare biodiversity estate with forests, hedgerows, and ponds.",
    knownFor: "Biodynamic Chenin Blanc and Cabernet Franc from Saumur that punch well above their appellation's reputation. The estate's holistic approach to farming produces wines with uncommon energy and minerality.",
    whatMakesThemSpecial: "This is not just a vineyard — it's a functioning biodynamic ecosystem where the vines are one part of a much larger natural landscape. The wines taste like it: alive, textured, and profoundly site-specific.",
    grapeVarieties: ["Chenin Blanc", "Cabernet Franc"],
    winemakingPhilosophy: "Certified biodynamic (Demeter). Native yeast, gravity flow, foudre and amphora aging. Minimal sulfur at bottling.",
    avgCostRange: "$18–$40",
    websiteUrl: "https://www.chateaudefosseseche.com",
    notablePress: [{ quote: "A model for biodynamic viticulture in the Loire", source: "Decanter", trusted: true }],
    heirloomWines: [{ name: "Loire Chenin 'Arcane'", vintage: "2022", priceGlass: 21, priceBottle: 84 }],
    colorAccent: "#BDC8B3"
  },
  {
    id: "buisson",
    name: "Buisson-Charles",
    region: "Burgundy",
    country: "France",
    appellations: ["Meursault", "Bourgogne"],
    founded: "1920s",
    history: "A respected Meursault domaine now in its fourth generation. Patrick Essa (Catherine Buisson's husband) manages the winemaking, producing village and premier cru Meursault alongside excellent Bourgogne Blanc.",
    knownFor: "Meursault of finesse and precision at prices below the village's celebrity domaines. Their Bourgogne Blanc is widely regarded as one of the best-value white Burgundies on the market.",
    whatMakesThemSpecial: "The Bourgogne Blanc here is made from parcels on the edge of Meursault's village appellation — essentially declassified Meursault. Sommeliers know this, which is why it appears on so many by-the-glass programs.",
    grapeVarieties: ["Chardonnay"],
    winemakingPhilosophy: "Traditional Burgundian vinification. Barrel fermentation in a mix of new and used oak, batonnage, 12-15 months élevage.",
    avgCostRange: "$20–$70",
    notablePress: [{ quote: "One of the most reliable sources of good-value Meursault", source: "Allen Meadows, Burghound", trusted: true }],
    heirloomWines: [{ name: "Bourgogne Blanc", vintage: "2023", priceGlass: 22, priceBottle: 88 }],
    colorAccent: "#D8D0C0"
  },
  {
    id: "mas-de-daumas-gassac",
    name: "Mas de Daumas Gassac",
    region: "Languedoc",
    country: "France",
    appellations: ["IGP Pays d'Hérault"],
    founded: "1978",
    history: "Founded by Aimé and Véronique Guibert after geologist Henri Enjalbert identified their Aniane property as having soil comparable to a Bordeaux Grand Cru. The estate became known as the 'Grand Cru of the Languedoc' and proved that southern France could produce age-worthy wines of the highest caliber.",
    knownFor: "The original 'Grand Cru du Languedoc.' The red (Cabernet-dominated) and white (a kaleidoscopic blend) are among the most distinctive wines in France, defying easy classification.",
    whatMakesThemSpecial: "Daumas Gassac's blanc is one of wine's great eccentrics — a blend of dozens of grape varieties, some nearly extinct, that tastes like no other white wine. It's a living encyclopedia of Mediterranean viticulture in a single bottle.",
    grapeVarieties: ["Cabernet Sauvignon", "Viognier", "Chardonnay", "Petit Manseng", "Chenin Blanc", "Muscat"],
    winemakingPhilosophy: "Organic practices. Gravity-fed cellar, native yeast, no new oak for whites. The estate preserves 40+ grape varieties.",
    avgCostRange: "$20–$50",
    websiteUrl: "https://www.daumas-gassac.com",
    notablePress: [
      { quote: "The Lafite of the Languedoc", source: "GaultMillau (original designation)", trusted: true },
      { quote: "A visionary estate that changed perceptions of southern France", source: "Jancis Robinson", trusted: true }
    ],
    heirloomWines: [{ name: "Blanc", vintage: "2023", priceBottle: 64 }],
    colorAccent: "#C8C0AA"
  },
  {
    id: "du-petit-thouars",
    name: "Château du Petit Thouars",
    region: "Loire",
    country: "France",
    appellations: ["Chinon"],
    founded: "15th century",
    history: "A historic estate in Chinon with roots to the 15th century, currently run by Sébastien du Petit Thouars. The château and its vineyards sit above the Vienne river on limestone and tufa soils typical of the best Chinon sites.",
    knownFor: "Classic Chinon Cabernet Franc with the limestone elegance and herbal precision that defines the appellation at its best. The wines are structured enough to age but approachable young.",
    whatMakesThemSpecial: "This is Cabernet Franc from one of Chinon's historic estates, made in a style that bridges old and new. 'L'Epée' (The Sword) is their signature cuvée — named for the estate's martial history — and it delivers the grape's signature violet and graphite character.",
    grapeVarieties: ["Cabernet Franc"],
    winemakingPhilosophy: "Sustainable viticulture. Traditional vinification with temperature control, aging in a mix of tank and barrel.",
    avgCostRange: "$12–$25",
    notablePress: [{ quote: "A reliable source of classic Chinon at fair prices", source: "The Wine Advocate", trusted: true }],
    heirloomWines: [{ name: "Chinon 'L'Epée'", vintage: "2019", priceGlass: 15, priceBottle: 60 }],
    colorAccent: "#C0B8A8"
  },
  {
    id: "newfound",
    name: "Newfound Wines",
    region: "California",
    country: "USA",
    appellations: ["California"],
    founded: "2017",
    history: "Founded by Matt and Emily Smith, a husband-wife team making wines from sourced fruit across California's diverse regions. Matt previously worked at Pax Wines and Wind Gap.",
    knownFor: "Small-production California wines that prioritize site expression over varietal power. Their 'Gravels' red blend draws from multiple California sources to create a wine of unexpected complexity at a modest price.",
    whatMakesThemSpecial: "Newfound represents the new California — winemakers who trained at established estates, then launched their own projects focused on balance, restraint, and value. The wines show what happens when serious talent works with modest pricing ambitions.",
    grapeVarieties: ["Carignan", "Mourvèdre", "Syrah", "Grenache"],
    winemakingPhilosophy: "Minimal intervention. Native yeast, neutral oak, whole-cluster when appropriate. No fining or filtration on most wines.",
    avgCostRange: "$18–$30",
    websiteUrl: "https://www.newfoundwines.com",
    notablePress: [{ quote: "Pax Mahle protégé making serious value wines", source: "VinePair", trusted: false }],
    heirloomWines: [{ name: "California Red 'Gravels'", vintage: "2022", priceGlass: 16, priceBottle: 64 }],
    colorAccent: "#C8B8A0"
  },
  {
    id: "robin",
    name: "Domaine Robin",
    region: "Northern Rhône",
    country: "France",
    appellations: ["Crozes-Hermitage"],
    history: "A family estate in Crozes-Hermitage producing Syrah in the northern Rhône style. Limited international documentation but carried by respected importers.",
    knownFor: "Crozes-Hermitage with the peppery, savory character of the northern Rhône at a price that makes it ideal for restaurant by-the-glass programs.",
    whatMakesThemSpecial: "'Papillon' (Butterfly) is a Crozes-Hermitage that drinks above its station — offering a window into northern Rhône Syrah for diners who might not order a $100 Hermitage. Exactly the kind of wine Stephen pours to educate palates.",
    grapeVarieties: ["Syrah"],
    winemakingPhilosophy: "Traditional northern Rhône vinification.",
    avgCostRange: "$15–$25",
    notablePress: [],
    heirloomWines: [{ name: "Crozes-Hermitage 'Papillon'", vintage: "2023", priceGlass: 17, priceBottle: 68 }],
    colorAccent: "#B8A8A0"
  },
  {
    id: "piemaggio",
    name: "Piemaggio",
    region: "Tuscany",
    country: "Italy",
    appellations: ["Chianti Classico"],
    history: "A small Chianti Classico estate in the heart of the DOCG zone. The 'Fioraie' bottling represents their entry into quality-focused Sangiovese.",
    knownFor: "Chianti Classico that delivers the appellation's cherry-and-earth character with enough polish to drink beautifully by the glass. A genuine value in a region prone to pricing inflation.",
    whatMakesThemSpecial: "In a Chianti Classico landscape dominated by large estates and luxury bottlings, Piemaggio offers the kind of honest, food-friendly Sangiovese that the appellation was built on. Nothing fancy — just good wine at the right price.",
    grapeVarieties: ["Sangiovese"],
    winemakingPhilosophy: "Traditional Tuscan winemaking with a focus on Sangiovese purity.",
    avgCostRange: "$15–$30",
    notablePress: [],
    heirloomWines: [{ name: "Chianti Classico 'Fioraie'", vintage: "2022", priceGlass: 19, priceBottle: 76 }],
    colorAccent: "#D0B8A0"
  },
  {
    id: "courbet",
    name: "Domaine Courbet",
    region: "Jura",
    country: "France",
    appellations: ["Côtes du Jura"],
    history: "A small family domaine in the Jura, one of France's most distinctive and idiosyncratic wine regions. The estate works primarily with Trousseau, a fragile, pale-skinned red grape native to the region.",
    knownFor: "Jura Trousseau with the translucent color and surprising depth that makes this grape one of the most exciting varieties for sommeliers and natural wine enthusiasts.",
    whatMakesThemSpecial: "Trousseau is one of wine's great under-the-radar grapes — pale as rosé, savory as Pinot Noir, and with a wild, herbal character all its own. Courbet's version is a perfect introduction for diners curious about Jura wines.",
    grapeVarieties: ["Trousseau", "Savagnin", "Chardonnay"],
    winemakingPhilosophy: "Low-intervention winemaking in the Jura tradition.",
    avgCostRange: "$20–$35",
    notablePress: [],
    heirloomWines: [{ name: "Côtes du Jura Trousseau", vintage: "2024", priceGlass: 20, priceBottle: 80 }],
    colorAccent: "#C0B0A0"
  },
  {
    id: "prudhon",
    name: "Henri Prudhon et Fils",
    region: "Burgundy",
    country: "France",
    appellations: ["Saint-Aubin", "Bourgogne"],
    founded: "1890s",
    history: "A respected Saint-Aubin domaine run by the Prudhon family for over a century. Géraldine Prudhon now leads the estate, producing village and premier cru wines that have earned a devoted following among Burgundy insiders.",
    knownFor: "Saint-Aubin of real premier cru quality at prices well below neighboring Puligny and Chassagne. Their 'Les Charmeaux' Bourgogne rouge is a benchmark for value red Burgundy.",
    whatMakesThemSpecial: "Saint-Aubin is Burgundy's great secret — premier cru quality at village prices, because the name doesn't carry the cachet of Puligny. Prudhon is one of the village's finest producers, and their wines consistently over-deliver.",
    grapeVarieties: ["Pinot Noir", "Chardonnay"],
    winemakingPhilosophy: "Traditional Burgundian winemaking. Destemming, barrel fermentation and aging in a mix of oak.",
    avgCostRange: "$20–$60",
    notablePress: [{ quote: "Prudhon remains one of Saint-Aubin's top addresses", source: "Allen Meadows, Burghound", trusted: true }],
    heirloomWines: [{ name: "Bourgogne Rouge 'Les Charmeaux'", vintage: "2022", priceGlass: 21, priceBottle: 84 }],
    colorAccent: "#D4C0B0"
  },
  {
    id: "moulin-de-tricot",
    name: "Château Moulin de Tricot",
    region: "Bordeaux",
    country: "France",
    appellations: ["Margaux"],
    history: "A small, lesser-known property within the prestigious Margaux appellation. Not a classified growth, but producing Margaux at an accessible price point that is rare for this commune.",
    knownFor: "Affordable Margaux. In an appellation where classified growths start at $50 and climb into the hundreds, Moulin de Tricot offers the elegance and perfume of the commune at a fraction of the price.",
    whatMakesThemSpecial: "This is one of the least expensive ways to experience authentic Margaux character — the floral perfume, the silky tannins, the cedar and violet complexity — without the classified growth price tag. Stephen's 2019 vintage has had time in bottle to soften and integrate.",
    grapeVarieties: ["Cabernet Sauvignon", "Merlot"],
    winemakingPhilosophy: "Traditional Bordeaux vinification.",
    avgCostRange: "$18–$30",
    notablePress: [],
    heirloomWines: [{ name: "Margaux", vintage: "2019", priceGlass: 23, priceBottle: 92 }],
    colorAccent: "#B8A8A8"
  },
  {
    id: "raptor-ridge",
    name: "Raptor Ridge",
    region: "Willamette Valley",
    country: "USA",
    appellations: ["Willamette Valley"],
    founded: "1995",
    history: "Founded by Scott Shull in the Chehalem Mountains AVA. The estate is named for the red-tailed hawks (raptors) that circle above the vineyards. Shull studied at UC Davis and worked in the wine industry before launching his own label.",
    knownFor: "Willamette Valley Pinot Noir with a balance of fruit purity and earthy complexity that reflects the Chehalem Mountains terroir. Consistent quality across multiple tiers.",
    whatMakesThemSpecial: "Raptor Ridge offers the elegance of Willamette Pinot Noir without the cult pricing that many Oregon producers have adopted. Their wines are designed for the dinner table, not the auction house.",
    grapeVarieties: ["Pinot Noir", "Pinot Gris", "Grüner Veltliner"],
    winemakingPhilosophy: "Sustainable farming (LIVE certified). Small-lot fermentation, native yeast, French oak aging.",
    avgCostRange: "$20–$45",
    websiteUrl: "https://www.raptorridgewinery.com",
    notablePress: [{ quote: "Consistently well-made Willamette Pinot at fair prices", source: "Wine Spectator", trusted: true }],
    heirloomWines: [{ name: "Willamette Pinot Noir", vintage: "2021", priceBottle: 44 }],
    colorAccent: "#A8B8A0"
  },
  {
    id: "monsecco",
    name: "Monsecco",
    region: "Piedmont",
    country: "Italy",
    appellations: ["Gattinara DOCG"],
    history: "A small producer in the Gattinara zone of northern Piedmont, making Nebbiolo-based wines from the high-altitude vineyards north of the Langhe. Limited international documentation.",
    knownFor: "Gattinara — Nebbiolo from volcanic soils at elevations higher than Barolo, producing wines of austerity, minerality, and remarkable longevity. A style that appeals to sommeliers who love Nebbiolo's sterner side.",
    whatMakesThemSpecial: "If Barolo is Nebbiolo in its most opulent form, Gattinara is the grape at its most austere and intellectual. Monsecco's 'Osso' is a wine for people who love structure, mineral tension, and the patience to let a wine reveal itself over hours in the glass.",
    grapeVarieties: ["Nebbiolo (locally Spanna)"],
    winemakingPhilosophy: "Traditional Alto Piemonte winemaking. Extended maceration, large cask aging.",
    avgCostRange: "$30–$55",
    notablePress: [],
    heirloomWines: [{ name: "Gattinara 'Osso'", vintage: "2016", priceBottle: 0 }],
    colorAccent: "#C0A898"
  },
  {
    id: "3-gracia",
    name: "3 Gracia",
    region: "Tokaj",
    country: "Hungary",
    appellations: ["Tokaji"],
    history: "A small producer in the Tokaj region of northeastern Hungary, producing sweet wines from the traditional Tokaji grape varieties. Limited international documentation.",
    knownFor: "Sweet Tokaji wines made in a modern style. The 'Édes Cuvée' (édes means sweet in Hungarian) is a late-harvest blend of Tokaj's indigenous varieties.",
    whatMakesThemSpecial: "Tokaji Aszú is one of the world's great sweet wines, but full-blown Aszú has become increasingly expensive and hard to find. Producers like 3 Gracia offer a gateway to Tokaj's honeyed, botrytis-laced character at a more accessible price point.",
    grapeVarieties: ["Furmint", "Hárslevelű", "Sárgamuskotály"],
    winemakingPhilosophy: "Traditional Tokaji vinification with botrytis-affected grapes.",
    avgCostRange: "$15–$35",
    notablePress: [],
    heirloomWines: [{ name: "Tokaji 'Édes Cuvée'", vintage: "2023", priceBottle: 0 }],
    colorAccent: "#D4C8A8"
  }
];
