export interface Wine {
  wine: string;
  vintage: string;
  style: string;
  dateTasted: string;
}

export interface Producer {
  name: string;
  slug: string;
  region: string;
  country: string;
  wines: Wine[];
  descriptor?: string;
  tags?: string[];
  priceTier?: string;
  qualityTier?: string;
  trustBadge?: string;
  philosophy?: string;
  founded?: number;
  winemaker?: string;
  hectares?: number;
  sources?: string[];
}

export const producers: Producer[] = [
  {
    "name": "Zahel",
    "region": "Vienna",
    "country": "Austria",
    "wines": [
      {
        "wine": "Original Eigenbau",
        "vintage": "2022",
        "style": "White",
        "dateTasted": "2026-02-07"
      }
    ],
    "slug": "zahel",
    "descriptor": "Historic Vienna winery, Gemischter Satz pioneer",
    "philosophy": "Weingut Zahel has been producing wine in Vienna since 1724 and is now in its fourth generation under Richard Zahel and his nephew Alex. In 2003, Richard was the first to market the 'Gemischter Satz,' Vienna's traditional field blend, as a serious wine. Zahel is the only winery in Vienna with vineyards in all of the city's growing districts, and also operates a cherished Heuriger (wine tavern) dating to 1930.",
    "founded": 1724,
    "winemaker": "Richard Zahel and Alex Zahel",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Historic Estate"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Zahel official website: zahel.at",
      "France+Western: Alexander Zahel Vienna profile",
      "The Vienna Review: Heuriger Zahel"
    ]
  },
  {
    "name": "Bechtold",
    "region": "Alsace",
    "country": "France",
    "wines": [
      {
        "wine": "Crémant d’Alsace Extra Brut",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": "2026-03-07"
      }
    ],
    "slug": "bechtold",
    "descriptor": "Fourth-generation organic Alsace, Grand Cru Engelberg",
    "philosophy": "Jean-Marie Bechtold is the fourth generation to steward this traditional domaine in Dahlenheim, west of Strasbourg. He began working with his father in 1980 and took the reins in 1995. The estate holds 12 hectares including impressive holdings in the Grand Cru Engelberg site, and is the only organic grower in Dahlenheim. All vineyards are certified organic and biodynamic.",
    "winemaker": "Jean-Marie Bechtold",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Biodynamic",
      "Organic",
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Rosenthal Wine Merchant: Domaine Bechtold producer profile",
      "Imbibe Magazine: Drink of the Week — Domaine Bechtold Cremant d'Alsace"
    ]
  },
  {
    "name": "La Rogerie",
    "region": "Alsace",
    "country": "France",
    "wines": [
      {
        "wine": "Niedermorschwihr Reserve Perpetuelle Pinots",
        "vintage": "NV",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "la-rogerie",
    "descriptor": "Champagne-Alsace dual-terroir project, old vines",
    "philosophy": "La Rogerie is a dual-region domaine created by husband-and-wife team Francois Petit (from Avize in Champagne's Cote des Blancs) and Justine Boxler (of the renowned Albert Boxler estate in Alsace). They met while studying in Strasbourg in 2011 and combined their two-hectare holdings in each region, installing separate cellars in 2015. Their Alsace vines were planted between 1937 and 1961 and are entirely massale selection.",
    "founded": 2015,
    "winemaker": "Francois Petit and Justine Boxler",
    "priceTier": "Premium",
    "qualityTier": "Emerging",
    "tags": [
      "Family-Owned",
      "Emerging",
      "Hard to Find"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Wine Source Group: Domaine La Rogerie, Niedermorschwihr",
      "Wineanorak.com: The Petit-Boxler family and their new Champagne-Alsace venture",
      "Thatcher's Wine: Justine & Francois Petit-Boxler — Domaine La Rogerie"
    ]
  },
  {
    "name": "Alex Foillard",
    "region": "Beaujolais",
    "country": "France",
    "wines": [
      {
        "wine": "Brouilly",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": "2025-11-01"
      }
    ],
    "slug": "alex-foillard",
    "descriptor": "Next-generation Beaujolais, natural wine heritage",
    "philosophy": "Son of 'Gang of Four' member Jean Foillard, Alex grew up immersed in natural winemaking principles. After studying agriculture in Montpellier and viticulture in Beaune, he purchased a hectare each in Brouilly and Cote-de-Brouilly, producing his first vintage in 2016. He works his vines organically, using whole-cluster fermentation with natural yeasts and no fining, filtration, or additives beyond minimal sulfur at bottling.",
    "founded": 2016,
    "winemaker": "Alex Foillard",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Organic",
      "Natural Wine",
      "Emerging"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Kermit Lynch Wine Merchant: Alex Foillard Brouilly listing",
      "Golden Age Wine: Jean and Alex Foillard profile",
      "Hart & Cru: Alex Foillard producer page"
    ]
  },
  {
    "name": "Anita",
    "region": "Beaujolais",
    "country": "France",
    "wines": [
      {
        "wine": "Morgon ‘Château-Gaillard’",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "anita",
    "descriptor": "Rising Beaujolais star, old-vine terroir focus",
    "philosophy": "Domaine Anita was founded in 2015 by former professional cyclist Anita Kuhnel, who grew up in nearby Bresse. The domaine now encompasses 18 hectares across the crus of Chenas, Fleurie, Morgon, and Moulin-a-Vent, with extremely dense plantings of 10,000 vines per hectare and vine ages ranging from 40 to over 100 years. She uses sustainable viticultural practices, including horse ploughing in select vineyards.",
    "founded": 2015,
    "winemaker": "Anita Kuhnel",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Emerging"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Define Wine: Domaine Anita wholesale producer page",
      "Elevage Wine: Domaine Anita producer profile",
      "Decanter: Domaine Anita Chateau Gaillard Morgon 2019 review"
    ]
  },
  {
    "name": "Château Thivin",
    "region": "Beaujolais",
    "country": "France",
    "wines": [
      {
        "wine": "Côte de Brouilly",
        "vintage": "2022",
        "style": "Red",
        "dateTasted": "2025-10-18"
      }
    ],
    "slug": "ch-teau-thivin",
    "descriptor": "Historic Cote de Brouilly benchmark, six generations",
    "philosophy": "The Geoffray family purchased this 12th-century estate in 1877 and was instrumental in creating the Cote de Brouilly appellation in 1938 as a separate designation. They were the first to bottle wines from Cote de Brouilly rather than selling in bulk to negociants. Now in its sixth generation under Claude-Edouard Geoffray, the estate practices steadfastly organic viticulture on the appellation's steep slopes, where gradients often exceed 40%.",
    "founded": 1877,
    "winemaker": "Claude-Edouard Geoffray",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Chateau Thivin official website: chateau-thivin.com",
      "Opening a Bottle: Essential Winemakers of France — Chateau Thivin",
      "Kermit Lynch Wine Merchant: Chateau Thivin listings"
    ]
  },
  {
    "name": "Jean Foillard",
    "region": "Beaujolais",
    "country": "France",
    "wines": [
      {
        "wine": "Cuvée Corcelette",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": "2025-11-15"
      }
    ],
    "slug": "jean-foillard",
    "descriptor": "Gang of Four co-founder, Morgon natural wine icon",
    "philosophy": "Jean Foillard has led his family domaine in Morgon since 1980 and is a founding member of Beaujolais's celebrated 'Gang of Four,' alongside Marcel Lapierre, Guy Breton, and Jean-Paul Thevenet. Their shared commitment to old vines, organic farming, late harvesting, and zero chaptalization helped redefine Beaujolais as serious wine. His methode ancienne includes whole-cluster vinification, aging in neutral oak, and no sulfur or filtration.",
    "founded": 1980,
    "winemaker": "Jean Foillard",
    "priceTier": "Premium",
    "qualityTier": "Legendary",
    "tags": [
      "Organic",
      "Natural Wine",
      "Family-Owned",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Grape Collective: The Origins of Natural Wine — Conversation with Lapierre and Foillard",
      "Verve Wine: Natural Wine Starts Here — Why the Beaujolais Gang of Four Still Matter",
      "Kermit Lynch Wine Merchant: Jean Foillard Morgon listings"
    ]
  },
  {
    "name": "Chateau Moulin de Tricot",
    "region": "Bordeaux",
    "country": "France",
    "wines": [
      {
        "wine": "Haut Médoc",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "chateau-moulin-de-tricot",
    "descriptor": "Small family Haut-Medoc on Margaux gravel",
    "philosophy": "Established in the 19th century, Chateau Moulin de Tricot is a tiny property now owned by Bruno Rey. The family holds just under five hectares on a gravelly outcropping in the commune of Arsac, split between the Margaux and Haut-Medoc appellations. All grapes are hand-harvested with strict vineyard triage, and wines are vinified using traditional methods with temperature-controlled stainless steel fermentation.",
    "winemaker": "Bruno Rey",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "limited",
    "sources": [
      "Skurnik Wines & Spirits: Chateau Moulin de Tricot producer profile",
      "GNARLY VINES: Chateau Moulin de Tricot Haut-Medoc listing"
    ]
  },
  {
    "name": "Agnès Paquet",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Santenay 1er Cru ‘La Comme’",
        "vintage": "2020",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "agn-s-paquet",
    "descriptor": "Organic Hautes Côtes de Beaune pioneer",
    "philosophy": "Agnès Paquet established her domaine in 2000 in the village of Meloisey, Hautes Côtes de Beaune, from vineyards her family has owned since the 1950s. She achieved full organic certification with the 2021 vintage across all 13 hectares after eliminating herbicides in 2004. Her micro-production wines have earned placements at multiple three-Michelin-star restaurants in France.",
    "founded": 2000,
    "winemaker": "Agnès Paquet",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Becky Wasserman portfolio",
      "Wine Review Online Hautes Côtes feature",
      "Burgundywine.com producer profile"
    ]
  },
  {
    "name": "Bachelet-Monnot",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Maranges 1er Cru ‘La Fussière’",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "bachelet-monnot",
    "descriptor": "Rising Maranges estate, white Burgundy specialists",
    "philosophy": "Founded in 2005 by brothers Marc and Alexandre Bachelet in Dezize-lès-Maranges, combining family vineyards and long-term leases from both the Bachelet and Monnot sides. They farm without herbicides, plough regularly, and practice strict de-budding for low yields. Wines are aged twelve months in barrel with roughly 25% new oak, then six to eight months in tank or concrete on lees before bottling.",
    "founded": 2005,
    "winemaker": "Marc Bachelet & Alexandre Bachelet",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Best Value",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Skurnik Wines importer profile",
      "Berry Bros. & Rudd producer page",
      "Grand Cru Selections portfolio"
    ]
  },
  {
    "name": "Barthod",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Bourgogne ‘Les Bons Bâtons’",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "barthod",
    "descriptor": "Chambolle-Musigny premier cru benchmark",
    "philosophy": "Domaine Ghislaine Barthod, founded in the late 1920s as Barthod-Noellat, covers 5.86 hectares in Chambolle-Musigny with an extraordinary range of 11 separate premier cru bottlings. Ghislaine Barthod, who took full control in 1986, is now considered a standard bearer for the wines of Chambolle-Musigny. Her partner Louis Boillot works alongside her at the domaine.",
    "founded": 1928,
    "winemaker": "Ghislaine Barthod",
    "priceTier": "Premium",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Skurnik Wines importer profile",
      "Berry Bros. & Rudd producer page",
      "Lay & Wheeler producer page"
    ]
  },
  {
    "name": "Berthaut-Gerbet",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Hautes Côtes de Nuits",
        "vintage": "2023",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "berthaut-gerbet",
    "descriptor": "Fixin revivalist with Grand Cru range",
    "philosophy": "Amélie Berthaut unified her father Denis Berthaut's Fixin domaine with her mother's Vosne-Romanée vineyards (Domaine François Gerbet) in 2015, creating an 18-hectare estate spanning the Côte de Nuits. She converted fully to organic viticulture and practices softer extraction with increased whole-cluster use compared to her father's generation. Holdings include grands crus Échezeaux and Clos de Vougeot.",
    "founded": 2015,
    "winemaker": "Amélie Berthaut",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Family-Owned",
      "Emerging",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Becky Wasserman portfolio",
      "Bowler Wine importer profile",
      "Chambers Street Wines producer notes"
    ]
  },
  {
    "name": "Bitouzet-Prieur",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Bourgogne Blanc",
        "vintage": "2017",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Meursault 1er Cru ‘Les Santenots’",
        "vintage": "2014",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "bitouzet-prieur",
    "descriptor": "Traditional Volnay estate with Meursault holdings",
    "philosophy": "Born from the marriage of Vincent Bitouzet of Volnay and Ann Prieur of Meursault, with Bitouzet family roots in Volnay since 1804. François Bitouzet took charge in 2005, continuing his father's organic viticulture across 13.55 hectares producing 17 cuvées, split 60% Pinot Noir and 40% Chardonnay. Fermentation uses only indigenous yeasts, and the domaine holds premier cru parcels in Volnay (Taillepieds, Clos des Chênes, Caillerets) and Meursault.",
    "founded": 1804,
    "winemaker": "François Bitouzet",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Berry Bros. & Rudd producer page",
      "Rosenthal Wine Merchant portfolio",
      "Skurnik Wines importer profile"
    ]
  },
  {
    "name": "Buisson-Charles",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Bourgogne Aligoté Hors Classe",
        "vintage": "2022",
        "style": "White",
        "dateTasted": "2025-10-18"
      },
      {
        "wine": "A Gauche du Serein",
        "vintage": "2022",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "buisson-charles",
    "descriptor": "Old-vine Meursault estate, zero-addition winemaking",
    "philosophy": "A four-generation Meursault estate now run by Catherine Buisson and her husband Patrick Essa, covering approximately 6 hectares with an average vine age around 60 years and some vines exceeding 90 years. No chaptalization, acidification, or SO2 is added during vinification, and wines are bottled without fining or filtration. They deliberately pick later than most peers to extend the vegetative cycle, resulting in richer wines with remarkable acidity.",
    "winemaker": "Patrick Essa & Catherine Buisson",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Natural Wine",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Martines Wines importer profile",
      "Grandi Bottiglie producer feature",
      "French Wine Centre portfolio"
    ]
  },
  {
    "name": "Chezeaux",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Nuits-Saint-Georges",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "chezeaux",
    "descriptor": "Classic Nuits-Saint-Georges from Prémeaux-Prissey",
    "philosophy": "The Chezeaux domaine traces to Julien Missery's estate from 1930 in Prémeaux-Prissey. Bernard Chezeaux took ownership in 1971, and Jérome joined in 1987, transitioning from selling to négociants to estate-bottling. The domaine holds approximately 11 hectares across 16 appellations in the Côte de Nuits, farmed under lutte raisonnée principles.",
    "founded": 1930,
    "winemaker": "Jérome Chezeaux",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Rosenthal Wine Merchant portfolio"
    ]
  },
  {
    "name": "Clos des Rocs",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Pouilly-Loché ‘En Chantone’",
        "vintage": "2021",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "clos-des-rocs",
    "descriptor": "Pouilly-Loché monopole specialist in Mâconnais",
    "philosophy": "Seventh-generation vigneron Olivier Giroux purchased this estate (formerly Domaine Saint-Philibert) in 2002 in Loché. The 8.6-hectare domaine controls nearly 30% of the entire 32-hectare Pouilly-Loché appellation. No chemical products are used in the vineyard, all grapes are manually harvested, and fermentation relies exclusively on indigenous yeasts. Giroux helped spearhead the process for new premier cru designations in Pouilly-Loché.",
    "founded": 2002,
    "winemaker": "Olivier Giroux",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Flintwines importer profile",
      "Bourgogne-info.eu interview"
    ]
  },
  {
    "name": "Cornu",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Ladoix 1er Cru ‘Le Bois Roussot’",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Aloxe-Corton 1er Cru ‘Les Valozières’",
        "vintage": "2010",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "cornu",
    "descriptor": "Ladoix specialist since 1875",
    "philosophy": "The Cornu family has produced wines from Ladoix since 1875, at the boundary of the Côte de Beaune and Côte de Nuits. The 16.5-hectare estate is predominantly Pinot Noir (13.5 ha) with holdings in Chorey-lès-Beaune, Savigny-lès-Beaune, Aloxe-Corton, and Ladoix-Serrigny. Certified Agriculture Raisonnée since 2007 and Haute Valeur Environnementale since 2019.",
    "founded": 1875,
    "winemaker": "Pierre Cornu",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Bourgogne-info.eu interview",
      "Bourgogne-wines.com producer listing"
    ]
  },
  {
    "name": "David Moreau",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Santenay ‘Cuvée S’",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": "2024-11-03"
      },
      {
        "wine": "Santenay ‘Cuvée S’",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": "2024-12-08"
      }
    ],
    "slug": "david-moreau",
    "descriptor": "Young Santenay organic grower, DRC-trained",
    "philosophy": "Fourth-generation Santenay winemaker who studied at the Beaune Lycée Viticole and completed an oenology degree at Dijon University, with internships at Domaine de la Romanée-Conti, Hubert Lamy, Château de Beaucastel, and Neudorf Vineyards (New Zealand). His first vintage was 2009 across 5 hectares farmed organically. He uses native yeasts for fermentation and reserves sulfur use exclusively for bottling.",
    "founded": 2009,
    "winemaker": "David Moreau",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Family-Owned",
      "Emerging",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Becky Wasserman portfolio",
      "Burgundy-Report domaine profile",
      "Chambers Street Wines producer notes"
    ]
  },
  {
    "name": "Domaine Berthelemot",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Meursault",
        "vintage": "2017",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "domaine-berthelemot",
    "descriptor": "Modern Meursault estate, organic since 2021",
    "philosophy": "Founded in 2006 by Brigitte Berthelemot, uniting the mature holdings of the Jean Garaudet and Yves Darviot estates across 15 hectares of Côte de Beaune appellations including Meursault, Puligny-Montrachet, Beaune, and Pommard. Now managed by her son Thomas with winemaker Marc Cugney. Certified organic since the 2021 vintage and HVE Level 3 since 2015, with biodynamic preparations used in the vineyard.",
    "founded": 2006,
    "winemaker": "Marc Cugney",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Jasper Morris Inside Burgundy",
      "Boutinot portfolio",
      "Domaine Berthelemot official site"
    ]
  },
  {
    "name": "Domaine Forey Pere & Fils",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Nuits-Saint-Georges",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "domaine-forey-pere-fils",
    "descriptor": "Historic Vosne-Romanée estate, bordering La Tâche",
    "philosophy": "Founded in 1840 and now led by father and son Régis and Quentin Forey in Vosne-Romanée. The domaine exploits about 10 hectares, with premier cru holdings including Les Gaudichots (bordering La Tâche) and Petits Monts (above Richebourg) in Vosne-Romanée, plus Les Perrières and Les Saints-Georges in Nuits-Saint-Georges. Régis makes concentrated, old-school Pinot Noir in a traditional style.",
    "founded": 1840,
    "winemaker": "Régis Forey & Quentin Forey",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Gibson Family Group importer profile",
      "Winehog producer archives"
    ]
  },
  {
    "name": "Domaine Michelot",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Nuits-Saint-Georges 1er Cru ‘Aux Chaignots’",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "domaine-michelot",
    "descriptor": "Under-the-radar Meursault icon, old-vine purity",
    "philosophy": "Six-generation family estate managing 19 hectares primarily in Meursault, with premier cru parcels including Genevrières, Charmes, Poruzots, and Les Perrières. Now run by Véronique Michelot and Jean-François Mestre. Wines are crafted unfined and unfiltered with carefully restrained new oak. Notably, Raphaël Coche of Domaine Coche-Dury has publicly expressed puzzlement at why Michelot is not better known.",
    "winemaker": "Jean-François Mestre",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Best Value",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Brunswick Fine Wines importer profile",
      "Burgundy-Report tasting notes",
      "Hedonism Wines producer page"
    ]
  },
  {
    "name": "Domaine Rollin",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Savigny-Les-Beaune ‘Aux Grands Liards’",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Pernand-Vergelesses Blanc",
        "vintage": "2019",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "domaine-rollin",
    "descriptor": "Four-generation Pernand-Vergelesses estate",
    "philosophy": "Fourth-generation domaine in Pernand-Vergelesses, now run by Simon Rollin and his wife Caroline since 2003. They cultivate 8 hectares of their own vines plus 6 in métayage across five communes (Pernand-Vergelesses, Savigny-lès-Beaune, Echevronne, Aloxe-Corton, Chorey-lès-Beaune) and fourteen appellations, producing around 60,000 bottles annually. Low-intervention cellar work with minimal sulfur additions.",
    "winemaker": "Simon Rollin",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Berry Bros. & Rudd producer page",
      "Domaine Rollin official site"
    ]
  },
  {
    "name": "Esmonin",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Gevrey-Chambertin ‘Clos Prieur’",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "esmonin",
    "descriptor": "Under-the-radar Gevrey-Chambertin specialist",
    "philosophy": "Domaine Frédéric Esmonin is a family collaboration between Frédéric and his father André in Gevrey-Chambertin, working just under 10 acres of vineyards. After a short cold maceration, wines are aged 14 to 17 months in carefully selected French oak from Allier and Nevers forests. The domaine remains below the radar of top Burgundy collectors, keeping pricing relatively accessible for the quality level.",
    "winemaker": "Frédéric Esmonin",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Monsieur Touton Selection portfolio",
      "Wine-Searcher producer page"
    ]
  },
  {
    "name": "Forey",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Nuits-Saint-Georges",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Vosne-Romanée",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Morey-Saint-Denis",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Nuits Saint Georges",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "forey",
    "descriptor": "Traditional Vosne-Romanée, storied premier crus",
    "philosophy": "Domaine Forey Père & Fils, founded in 1840, is now helmed by Régis and Quentin Forey in the heart of Vosne-Romanée. Holdings include premier cru Les Gaudichots adjacent to La Tâche and Petits Monts above Richebourg. The domaine exploits about 10 hectares, five as proprietor and five through fermage and métayage. Régis produces concentrated, traditionally styled Pinot Noir.",
    "founded": 1840,
    "winemaker": "Régis Forey & Quentin Forey",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Gibson Family Group importer profile"
    ]
  },
  {
    "name": "Francois Carillon",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Puligny-Montrachet",
        "vintage": "2020",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "francois-carillon",
    "descriptor": "16th-generation Puligny-Montrachet purist",
    "philosophy": "François Carillon is the 16th generation of a winemaking family tracing its roots in Burgundy to 1520. He established his own domaine in 2010 after his father Louis Carillon's retirement, now covering around 14 hectares primarily in Puligny, Chassagne, and Saint-Aubin. Vineyards are farmed to lutte intégrée principles with ploughing by horse or tractor, no weedkillers, and a mushroom-based top-dressing. Holdings include Chevalier-Montrachet Grand Cru.",
    "founded": 2010,
    "winemaker": "François Carillon",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Vineyard Brands portfolio",
      "Corney & Barrow producer page",
      "Decanter wine reviews"
    ]
  },
  {
    "name": "Gallois",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Gevrey-Chambertin 1er Cru ‘La Combe aux Moines’",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "gallois",
    "descriptor": "Artisan Gevrey-Chambertin with Grand Cru",
    "philosophy": "Domaine Gallois has existed in Gevrey-Chambertin since 1901, established by Dominique Gallois's great-grandfather Mr. Bizot. The domaine extends over 4 hectares producing seven appellations including Grand Cru Charmes-Chambertin and several Gevrey-Chambertin premiers crus (Combe aux Moines, Petits Cazetiers, Les Goulots). Dominique Gallois is opposed to all pesticides and herbicides, preferring a laissez-faire approach that allows the terroir to express itself.",
    "founded": 1901,
    "winemaker": "Dominique Gallois",
    "priceTier": "Premium",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Hard to Find"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Domaine Gallois official site",
      "Berry Bros. & Rudd Gevrey-Chambertin profile"
    ]
  },
  {
    "name": "Henri Prudhon",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Saint-Aubin 1er Cru ‘En Remilly’",
        "vintage": "2017",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Saint-Aubin 1er Cru ‘En Remilly’",
        "vintage": "2018",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Saint-Aubin 1er Cru ‘En Remilly’",
        "vintage": "2019",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "henri-prudhon",
    "descriptor": "Saint-Aubin premier cru specialist, family estate",
    "philosophy": "Henri Prudhon established the estate in Saint-Aubin in 1945, now grown to 14 hectares across Saint-Aubin, Chassagne-Montrachet, and Puligny-Montrachet. Currently directed by grandsons Vincent and Philippe Prudhon, producing eight white premiers crus and three red premiers crus. White wines are pressed pneumatically and racked into barrel; reds are destemmed with cold maceration. New oak usage is restrained, between 10% and one-third depending on the cuvée.",
    "founded": 1945,
    "winemaker": "Vincent Prudhon & Philippe Prudhon",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Henri Prudhon official site",
      "Some Good Wine producer feature"
    ]
  },
  {
    "name": "Jane et Sylvain",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Gevrey Chambertin 1er Cru ‘Fonteny’",
        "vintage": "2014",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "jane-et-sylvain",
    "descriptor": "Tiny organic Gevrey with premier cru Fontenys",
    "philosophy": "Jane and Sylvain Raphanau produce tiny quantities from just 4 hectares in and around Gevrey-Chambertin, having farmed organically since 2003. They use biodynamic preparations, wild-yeast fermentations with variable whole-cluster inclusion, and aging in used barrels of three to ten years with minimal SO2. Their finest parcel is at the top of premier cru Fontenys, separated from Grand Cru Ruchottes by only a dirt track.",
    "winemaker": "Sylvain Raphanau",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Hard to Find",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Chambers Street Wines producer notes",
      "Rock Juice importer",
      "Verve Wine producer page"
    ]
  },
  {
    "name": "Jean-Marc Pillot",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Bourgogne Blanc ‘Le Haut des Champs’",
        "vintage": "2016",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Chassagne-Montrachet ‘Les Masures’",
        "vintage": "2020",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "jean-marc-pillot",
    "descriptor": "Chassagne-Montrachet veteran, whites and reds",
    "philosophy": "Fourth-generation Chassagne-Montrachet vigneron who assumed direction of the domaine in 1991. The estate holds around 11 hectares of vineyards in Chassagne with parcels in Puligny, Santenay, and Meursault. Known for both premier cru whites (Baudines, Chenevottes, Vergers, Caillerets) and reds (Clos Saint-Jean, Morgeot). His son Antonin has joined and they are actively converting to organic farming.",
    "winemaker": "Jean-Marc Pillot & Antonin Pillot",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Lay & Wheeler producer page",
      "Wine-Searcher producer profile"
    ]
  },
  {
    "name": "Jérome Chezeaux",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Nuits-Saint-Georges",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "j-rome-chezeaux",
    "descriptor": "Nuits-Saint-Georges estate with elite lieu-dits",
    "philosophy": "Jérome Chezeaux joined the family winery in 1987 in Prémeaux-Prissey, building on an estate founded in 1930. The domaine holds approximately 11 hectares across 16 appellations in the Côte de Nuits. His daughter Lyse joined full-time in 2019, expanding single-vineyard bottlings. Cellar practices emphasize purity: full destemming, natural fermentation, one racking during élevage, and modest new oak (10-30%).",
    "founded": 1930,
    "winemaker": "Jérome Chezeaux & Lyse Chezeaux",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Wine.com producer listing"
    ]
  },
  {
    "name": "Lignier",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Bourgogne Rouge ‘Grand Chaliot’",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "lignier",
    "descriptor": "Organic Morey-Saint-Denis with Grand Cru depth",
    "philosophy": "Domaine Hubert Lignier's roots trace to 1885 in Morey-Saint-Denis. Laurent Lignier now manages the 7.5-hectare estate, having achieved organic certification in 2019 after removing synthetic products in 2007. The domaine produces 32 appellations including grands crus Charmes-Chambertin, Griotte-Chambertin, and Clos de la Roche, plus ten premiers crus. Wines are aged around twenty months in barrel and bottled by gravity without filtration or clarification.",
    "founded": 1885,
    "winemaker": "Laurent Lignier",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Domaine Hubert Lignier official site"
    ]
  },
  {
    "name": "Michel Briday",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Rully 1er Cru ‘La Pucelle’",
        "vintage": "2013",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "michel-briday",
    "descriptor": "Côte Chalonnaise benchmark, Rully focus",
    "philosophy": "Founded in 1976 by Michel and Lucette Briday, now managed by son Stéphane and daughter-in-law Sandrine across 38 acres in Rully, Bouzeron, and Mercurey. The domaine has become a gold standard for Rully and the Côte Chalonnaise, with whites accounting for 60% of production and reds 40%. Their philosophy centers on minimal intervention, respect for terroir, and wines with explosive fruit, freshness, and minerality.",
    "founded": 1976,
    "winemaker": "Stéphane Briday",
    "priceTier": "Budget",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Vineyard Brands portfolio",
      "Bourgogne-info.eu interview"
    ]
  },
  {
    "name": "Paquet",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Santenay 1er Cru ‘La Comme’",
        "vintage": "2020",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "paquet",
    "descriptor": "Organic Santenay from Hautes Côtes de Beaune",
    "philosophy": "Agnès Paquet established her domaine in 2000 in Meloisey, Hautes Côtes de Beaune, working 13 hectares of organically certified vineyards (certified from 2021 vintage). The Paquet family has owned properties in Burgundy since the early 1950s. She eliminated herbicides in 2004 and has built a following at France's top restaurants for her characterful, terroir-driven wines.",
    "founded": 2000,
    "winemaker": "Agnès Paquet",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Becky Wasserman portfolio",
      "Wine Review Online Hautes Côtes feature"
    ]
  },
  {
    "name": "Pascal Prunier-Bonheur",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Auxey-Duresses ‘Les Crais’",
        "vintage": "2020",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Meursault ‘Les Grands Charrons’",
        "vintage": "2020",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "pascal-prunier-bonheur",
    "descriptor": "Auxey-Duresses artisan, sustainable farming",
    "philosophy": "Founded in 1983 by Pascal Prunier and Christine Bonheur, the estate covers 8 hectares across Saint-Romain, Auxey-Duresses, Meursault, Monthelie, Pommard, and Beaune. They practice sustainable viticulture guided by soil management and lunar calendar principles. Reds undergo destemmed cold maceration with ambient yeast fermentation; whites age 11-15 months and reds 15-18 months in barrel.",
    "founded": 1983,
    "winemaker": "Pascal Prunier",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Becky Wasserman portfolio",
      "Domaine Prunier-Bonheur official site"
    ]
  },
  {
    "name": "Pillot",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Chassagne-Montrachet 1er Cru ‘Clos Saint Jean’",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "pillot",
    "descriptor": "Chassagne-Montrachet family, premier cru depth",
    "philosophy": "The Pillot family has tended vineyards in Chassagne-Montrachet for four generations. Jean-Marc Pillot assumed direction in 1991, working around 11 hectares of estate vineyards. The domaine is known for both premier cru whites (Baudines, Vergers, Maltroie, Caillerets) and reds (Clos Saint-Jean, Morgeot, Macherelles). A purpose-built modern winery houses the vinification while organic conversion is underway in the vineyards.",
    "winemaker": "Jean-Marc Pillot & Antonin Pillot",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Lay & Wheeler producer page"
    ]
  },
  {
    "name": "Prudhon",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Saint Aubin 1er Cru",
        "vintage": "2019",
        "style": "White",
        "dateTasted": "2025-10-18"
      },
      {
        "wine": "Saint Aubin 1er Cru",
        "vintage": "2020",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Saint Aubin 1er Cru",
        "vintage": "2022",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Saint Aubin 1er Cru ‘Les Perrières’",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "prudhon",
    "descriptor": "Saint-Aubin premier cru multi-generational estate",
    "philosophy": "The Prudhon estate was established in Saint-Aubin in 1945 and has grown to 14 hectares across Saint-Aubin, Chassagne-Montrachet, and Puligny-Montrachet. Now run by brothers Vincent and Philippe Prudhon, the domaine produces an extensive range of Saint-Aubin premiers crus. Winemaking is gentle and traditional with restrained new oak, allowing the minerality of the terroirs to come through.",
    "founded": 1945,
    "winemaker": "Vincent Prudhon & Philippe Prudhon",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant portfolio",
      "Henri Prudhon official site"
    ]
  },
  {
    "name": "Regis Bouvier",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Marssannay ‘Les Longeroies’",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": "2024-10-24"
      }
    ],
    "slug": "regis-bouvier",
    "descriptor": "Marsannay master of all three colors",
    "philosophy": "Régis Bouvier is recognized for mastering all three Burgundy colors in Marsannay - red, white, and rosé - through reasonable yields and high-quality terroir. His lieu-dit vineyards including Les Longeroies and Clos du Roy are considered premier cru quality, and some may receive official classification. His Bourgogne Rouge En Montre Cul is cultivated on steep slopes well above typical Bourgogne quality.",
    "winemaker": "Régis Bouvier",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Kermit Lynch Wine Merchant portfolio",
      "Empire Wine retailer notes"
    ]
  },
  {
    "name": "René Bouvier",
    "region": "Burgundy",
    "country": "France",
    "wines": [
      {
        "wine": "Gevrey-Chambertin",
        "vintage": "2023",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "ren-bouvier",
    "descriptor": "Organic Marsannay benchmark with Grand Cru range",
    "philosophy": "Founded in 1910 by Henri Bouvier, now managed by third-generation Bernard Bouvier in Brochon. The 30-hectare domaine spans Marsannay and Gevrey-Chambertin with grands crus including Clos de Vougeot, Charmes-Chambertin, and Clos Saint-Denis. Bernard farms entirely organically and credits the conversion with revealing the true terroir expression in his wines. The estate produces about twenty appellations across the Côte de Nuits.",
    "founded": 1910,
    "winemaker": "Bernard Bouvier",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Howard Ripley importer profile",
      "Grands Bourgognes producer page",
      "René Bouvier official site"
    ]
  },
  {
    "name": "Clement Lavalle",
    "region": "Chablis",
    "country": "France",
    "wines": [
      {
        "wine": "Chablis",
        "vintage": "2022",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "clement-lavalle",
    "trustBadge": "limited",
    "qualityTier": "Emerging",
    "priceTier": "Moderate"
  },
  {
    "name": "La Manufacture",
    "region": "Chablis",
    "country": "France",
    "wines": [
      {
        "wine": "Champ du Puits",
        "vintage": "2023",
        "style": "White",
        "dateTasted": "2025-10-18"
      }
    ],
    "slug": "la-manufacture",
    "descriptor": "Chablis negociant project, heritage family roots",
    "philosophy": "La Manufacture was founded by Benjamin Laroche, a native of Chablis whose family has had vineyards in the area since 1663. Rather than farming his own vines, Laroche works with passionate growers, selecting fruit and crafting wines that reflect the Kimmeridgian clay and limestone terroir of Chablis. The name means 'precise,' reflecting their meticulous approach from vineyard selection to bottling.",
    "winemaker": "Benjamin Laroche",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Best Value"
    ],
    "trustBadge": "limited",
    "sources": [
      "Wine Establishment: La Manufacture brand page",
      "Decanter: Benjamin Laroche La Manufacture Chablis 1er Cru Vaillons 2015 review",
      "Stem Wine Group: La Manufacture Chablis 2023"
    ]
  },
  {
    "name": "Brigitte Fallon",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Brut Grand Cru",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "brigitte-fallon",
    "descriptor": "Ultra-rare Avize Blanc de Blancs from Selosse protégé",
    "philosophy": "Brigitte Fallon is the wife of Michel Fallon, who served as Anselme Selosse's primary assistant for over 30 years. Her debut cuvée 'Avysia' is a Blanc de Blancs from Grand Cru Avize fruit, built on a perpetual reserve that has been accumulating since 2014. Production is extremely limited, with the first release based largely on the 2019 vintage.",
    "founded": 2023,
    "winemaker": "Brigitte Fallon",
    "priceTier": "Premium",
    "qualityTier": "Emerging",
    "tags": [
      "Hard to Find",
      "Family-Owned"
    ],
    "trustBadge": "limited",
    "sources": [
      "Martines Wines importer profile",
      "Premier Champagne retailer notes",
      "Thatcher's Wine portfolio"
    ]
  },
  {
    "name": "Cedric Bouchard",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Roses de Jeanne ‘Côte de Val Vilaine’",
        "vintage": "2021",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "cedric-bouchard",
    "descriptor": "Single-vineyard zero-dosage Champagne visionary",
    "philosophy": "Cédric Bouchard established Roses de Jeanne in 2000 in Celles-sur-Ource in the Côte des Bar, after working as a sommelier and caviste in Paris. He was the first grower in the Aube to bottle single-vineyard, single-variety, single-vintage champagnes, all produced at zero dosage. Yields are among the lowest in Champagne, only free-run juice is used, and all fermentations employ indigenous yeast. Named Champagne's finest winemaker by Gault & Millau in 2008.",
    "founded": 2000,
    "winemaker": "Cédric Bouchard",
    "priceTier": "Premium",
    "qualityTier": "Legendary",
    "tags": [
      "Organic",
      "Natural Wine",
      "Hard to Find",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Decanter producer profile",
      "Polaner Selections portfolio",
      "Berry Bros. & Rudd producer page"
    ]
  },
  {
    "name": "Domaine Les Monts Fournois",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Extra Brut 1er Cru ‘Côte Vertus’",
        "vintage": "2010",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "domaine-les-monts-fournois",
    "descriptor": "Bérêche family Grand Cru Champagne project",
    "philosophy": "Founded by Raphaël and Vincent Bérêche (of Bérêche et Fils) with their cousin Juliette Alips as winemaker. The domaine focuses on single-vineyard Grand Cru and Premier Cru Champagnes sourced from family friends' growers across the Côte des Blancs, Montagne de Reims, and Vallée de la Marne. The inaugural release of their monopole will be the 2022 vintage. Juliette trained at Louis Latour, G.D. Vajra, and Louis Roederer.",
    "winemaker": "Juliette Alips",
    "priceTier": "Premium",
    "qualityTier": "Emerging",
    "tags": [
      "Hard to Find",
      "Family-Owned"
    ],
    "trustBadge": "limited",
    "sources": [
      "Sotheby's Wine producer profile",
      "Wilson Daniels portfolio",
      "Wine Source Group feature"
    ]
  },
  {
    "name": "Hervé Brisson",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Les Aulnes",
        "vintage": "2022",
        "style": "Sparkling",
        "dateTasted": "2025-12-06"
      },
      {
        "wine": "Extra Brut ‘Le Long du Chemin’",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "herv-brisson",
    "descriptor": "Organic Vallée du Petit Morin micro-producer",
    "philosophy": "Family estate since 1952 in the Vallée du Petit Morin, covering just 3.35 hectares predominantly planted to Chardonnay (3.05 ha) with a small plot of Meunier. Certified organic (AB) since the 2019 harvest after farming organically from 2016. Average vine age exceeds 40 years, with the oldest parcel dating to 1952. Wines are aged in oak barrels and sandstone tanks, vinified without filtration or clarification, with minimal sulfites.",
    "founded": 1952,
    "winemaker": "Hervé Brisson",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Hard to Find",
      "Natural Wine"
    ],
    "trustBadge": "moderate",
    "sources": [
      "RAW WINE producer profile",
      "Gault & Millau producer listing",
      "Flatiron Wines retailer notes"
    ]
  },
  {
    "name": "Jacques Lassaigne",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Les Vignes de Montgueux",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": "2025-11-15"
      }
    ],
    "slug": "jacques-lassaigne",
    "descriptor": "Hand-disgorged Montgueux Blanc de Blancs pioneer",
    "philosophy": "The family has held vineyards in Montgueux since the 1950s when Jacques Lassaigne replanted abandoned village vineyards. Son Emmanuel quit a manufacturing career in 1999 to return home and began crafting single-parcel wines. The 4.7-hectare estate sits on a limestone vein nearly identical to Le Mesnil-sur-Oger. All fermentations use only indigenous yeast with minimal sulfur at pressing and none added thereafter. Emmanuel disgorges every bottle by hand.",
    "founded": 1964,
    "winemaker": "Emmanuel Lassaigne",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Hard to Find",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Decanter producer profile",
      "Jenny and François Selections portfolio",
      "K&L Wines blog"
    ]
  },
  {
    "name": "Marc Hébrart",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Champagne Brut Mareuil-Sur-Aÿ 1er Cru ‘Sélection’",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": "2024-06-01"
      }
    ],
    "slug": "marc-h-brart",
    "descriptor": "Premier Cru Mareuil-sur-Aÿ, Special Club member",
    "philosophy": "Marc Hébrart founded his Champagne estate in Mareuil-sur-Aÿ in 1963, and son Jean-Paul took over in 1997. The estate farms 14 hectares across 65 parcels in six villages (including Grand Cru Aÿ and Chouilly), planted 70% Pinot Noir and 30% Chardonnay. Each parcel is vinified separately; a member of the Special Club since 1985. Peter Liem describes the wines as 'full and generous without being weighty, complex and soil-driven.'",
    "founded": 1963,
    "winemaker": "Jean-Paul Hébrart",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Skurnik Wines importer profile",
      "Club Trésors de Champagne listing",
      "Lea & Sandeman producer page"
    ]
  },
  {
    "name": "Marguet",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Brut Nature Grand Cru ‘Ambonnay’",
        "vintage": "2018",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "marguet",
    "descriptor": "Biodynamic Ambonnay Grand Cru, horse-ploughed",
    "philosophy": "Fifth-generation Champagne family in Ambonnay since 1870, now led by Benoît Marguet-Bonnerave. Converted to biodynamic viticulture in 2009, certified organic by Ecocert and biodynamic by Demeter. Farms 10 hectares with an average vine age of 40 years in Grand Cru Ambonnay and Bouzy, ploughing all vineyards by horse. Juices move by gravity in the cellar, each cru ferments individually in old barrels with long lees aging.",
    "founded": 1870,
    "winemaker": "Benoît Marguet",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Biodynamic",
      "Organic",
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Berry Bros. & Rudd producer page",
      "Chambers Street Wines producer notes",
      "Kellogg Selections portfolio"
    ]
  },
  {
    "name": "Michel Fallon",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Brut Grand Cru ‘Ozanne’",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "michel-fallon",
    "descriptor": "Ultra-rare Avize Grand Cru, Selosse-mentored",
    "philosophy": "Michel Fallon spent over 30 years as Anselme Selosse's primary assistant, touching every aspect of production. In 2008, Selosse allowed him to purchase a small portion of Avize harvest and make wine in the Selosse cellar, resulting in the cuvée 'Ozanne' (named for the ancient title of Avize village). Michel has since acquired a one-hectare plot in Avize, producing around 900 bottles. Extremely limited production with hallmark Selosse-influenced craftsmanship.",
    "founded": 2008,
    "winemaker": "Michel Fallon",
    "priceTier": "Luxury",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Hard to Find",
      "Age-Worthy"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Martines Wines importer profile",
      "Vinum Fine Wines feature",
      "SommPicks retailer notes"
    ]
  },
  {
    "name": "Michel Gonet",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Extra Brut ‘Les 3 Terroirs’",
        "vintage": "2019",
        "style": "Sparkling",
        "dateTasted": ""
      },
      {
        "wine": "Grand Cru ‘Mesnil sur Oger’",
        "vintage": "2015",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "michel-gonet",
    "descriptor": "Seven-generation Avize Blanc de Blancs house",
    "philosophy": "Michel Gonet comes from a family of Champagne growers established since 1802, striking out independently in Avize in 1973. The estate holds around 40 hectares, planted 80% to Chardonnay on the Côte des Blancs. The house produces over 10 cuvées including single-vineyard releases like Les Hautes Mottes. Described as combining 'weight, texture and verve better than many much more expensive Grandes Marques.'",
    "founded": 1973,
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Gault & Millau producer listing",
      "Champagne.fr directory",
      "Wine-Searcher merchant page"
    ]
  },
  {
    "name": "Nicolas Maillart",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Extra Brut 1er Cru ‘Platine’",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": ""
      },
      {
        "wine": "Extra Brut Grand Cru ‘Rosé’",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "nicolas-maillart",
    "descriptor": "Tenth-generation Écueil, all-wood fermentation",
    "philosophy": "Tenth generation of vine growers in the northern Montagne de Reims, with family roots dating to 1753. Nicolas took over in Écueil in 2003 and manages around 15 hectares, all Premier Cru or Grand Cru classified. All Champagnes are fermented and aged exclusively in old oak barrels, minimally sulfured, and bottled unfiltered with very low dosage. He ripens grapes up to two weeks longer than the regional norm. Named 'Best Champagne Grower of the Year' by Richard Juhlin in 2021.",
    "founded": 2003,
    "winemaker": "Nicolas Maillart",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Kermit Lynch Wine Merchant portfolio",
      "Club Oenologique producer profile",
      "Lea & Sandeman producer page"
    ]
  },
  {
    "name": "Pascal Doquet",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Arpège",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": "2026-01-03"
      },
      {
        "wine": "Grand Cru ‘Diapason’",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "pascal-doquet",
    "descriptor": "Organic Vertus terroir purist, Brut Nature pioneer",
    "philosophy": "Pascal Doquet established his eponymous domaine in 2004 after running the family estate since 1995. Farms just under 9 hectares including prime parcels in Vertus, Le Mont Aimé, and Le Mesnil-sur-Oger. Certified organic since 2010 and serves as president of the Association Champagnes Biologiques. All wines vinified without filtration since 2012, aged in 19th-century chalk cellars, with dosage exclusively from organic concentrated grapemust, resulting in Extra Brut or Brut Nature expressions.",
    "founded": 2004,
    "winemaker": "Pascal Doquet",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Family-Owned",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Schatzi Wines importer profile",
      "RAW WINE producer profile",
      "Full Pour magazine feature"
    ]
  },
  {
    "name": "Paul Bara",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Brut Reserve Grand Cru",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": "2025-11-13"
      }
    ],
    "slug": "paul-bara",
    "descriptor": "Historic Bouzy Grand Cru récoltant-manipulant",
    "philosophy": "Founded in 1833 in Bouzy, now in its sixth generation under Chantale Bara. All 11 hectares are located exclusively in Grand Cru Bouzy, planted 9.5 hectares to Pinot Noir and 1.5 to Chardonnay, with average vine age of 35-40 years. A committed récoltant-manipulant producing exclusively from estate fruit. Malolactic fermentation has been strictly avoided since 1990 to preserve freshness; wines aged in stainless steel and tiled tanks.",
    "founded": 1833,
    "winemaker": "Chantale Bara",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Kermit Lynch Wine Merchant portfolio",
      "Kellogg Selections portfolio",
      "Champagne Characters producer page"
    ]
  },
  {
    "name": "Paul Déthune",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Extra Brut Grand Cru ‘L’Ancienne’",
        "vintage": "2014",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "paul-d-thune",
    "descriptor": "Organic Ambonnay Grand Cru since 1610",
    "philosophy": "The Déthune family has held vineyards in Grand Cru Ambonnay since 1610, making their own Champagne since the 1930s. Pierre Déthune and wife Sophie now manage 7 hectares planted 70% Pinot Noir and 30% Chardonnay, producing about 50,000 bottles annually. All wines are fermented and aged in oak barrels in 17th-century chalk cellars. Holds the highest level HVE certification for sustainable viticulture.",
    "founded": 1610,
    "winemaker": "Pierre Déthune",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Thorman Hunt importer profile",
      "Champagne Paul Déthune official site",
      "Black Dog Wines producer page"
    ]
  },
  {
    "name": "Pierre Deville",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Extra Brut Verzy Grand Cru ‘Copin’",
        "vintage": "2018",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "pierre-deville",
    "descriptor": "Fourth-generation Verzy Grand Cru, natural methods",
    "philosophy": "The Pierre Deville label was established in 1963, now in its fourth generation under Alban Corbeaux, who took over in 2017. The 5-hectare estate is concentrated in Grand Cru Verzy, planted 60% Chardonnay and 40% Pinot Noir. Since 2016, Alban has worked organically and biodynamically with minimal intervention, using indigenous yeasts and strictly limited sulfur. Extremely limited production single-vineyard cuvées from old vine lieu-dits.",
    "founded": 1963,
    "winemaker": "Alban Corbeaux",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Natural Wine",
      "Family-Owned",
      "Hard to Find"
    ],
    "trustBadge": "limited",
    "sources": [
      "La Cave de French Theory retailer",
      "Amitié Wines importer profile",
      "GLUGULP retailer page"
    ]
  },
  {
    "name": "Roger Coulon",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Extra Brut",
        "vintage": "2012",
        "style": "Sparkling",
        "dateTasted": ""
      },
      {
        "wine": "Extra Brut",
        "vintage": "2008",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "roger-coulon",
    "descriptor": "Ninth-generation Vrigny, Pinot Meunier champion",
    "philosophy": "A family estate in Vrigny dating to 1806, now led by ninth-generation Isabelle and Eric Coulon. The 11-hectare estate spans 115 parcels in the northern Montagne de Reims, planted 40% Pinot Meunier, 30% Pinot Noir, and 30% Chardonnay, with average vine age of 38 years. Farmed organically under agroforestry principles; about one-third vinified in tank and two-thirds in barrel. Indigenous yeasts, no filtration or fining. Increasingly compared to elite growers like Egly-Ouriet and Selosse.",
    "founded": 1806,
    "winemaker": "Eric Coulon",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Natural Wine",
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Lea & Sandeman spotlight feature",
      "Berry Bros. & Rudd producer page",
      "Effervescence LA retailer"
    ]
  },
  {
    "name": "Stéphane Coquillette",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Brut Zéro ‘Cuvée Louis’",
        "vintage": "2013",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "st-phane-coquillette",
    "descriptor": "Chouilly Grand Cru grower, all estate fruit",
    "philosophy": "Fourth-generation Champagne maker based in Grand Cru Chouilly, whose grandparents established Champagne Saint-Chamant in 1930. Stéphane manages 6.5 hectares across 10 parcels in four villages, including Grand Cru sites in Chouilly and Aÿ, and Premier Cru Cuis and Mareuil-sur-Aÿ. All vineyard work is done by hand, all champagnes come exclusively from estate vineyards, and are pressed, aged, and bottled at the property. Organic practices but uncertified.",
    "winemaker": "Stéphane Coquillette",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Kellogg Selections portfolio",
      "Champagne de Vigneron producer page",
      "Martines Wines importer profile"
    ]
  },
  {
    "name": "Ulysse Collin",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Extra Brut ‘Les Maillons’",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "ulysse-collin",
    "descriptor": "Single-vineyard Champagne, Selosse disciple",
    "philosophy": "Olivier Collin founded his estate in 2003 in Congy after reclaiming 4.5 hectares of family vineyards that had been rented to a négociant, inspired by a formative stage with Anselme Selosse. The only estate in Champagne to release exclusively single-vineyard expressions (Les Pierrières, Les Maillons, Les Roises, Les Enfers). Wines ferment in a mix of old and new Burgundian barrels with indigenous yeast, aged 36 to 124 months on lees, and are never fined or filtered.",
    "founded": 2003,
    "winemaker": "Olivier Collin",
    "priceTier": "Luxury",
    "qualityTier": "Legendary",
    "tags": [
      "Natural Wine",
      "Hard to Find",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Louis Dressner Selections portfolio",
      "Bowler Wine importer profile",
      "Chambers Street Wines producer notes"
    ]
  },
  {
    "name": "Vincent Couche",
    "region": "Champagne",
    "country": "France",
    "wines": [
      {
        "wine": "Brut Nature ‘Elegance’",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": ""
      },
      {
        "wine": "Brut Nature ‘Sensation’",
        "vintage": "2002",
        "style": "Sparkling",
        "dateTasted": ""
      }
    ],
    "slug": "vincent-couche",
    "descriptor": "First Demeter-certified Champagne biodynamic estate",
    "philosophy": "Vincent Couche established his domaine in 1996 in Buxeuil in the Côte des Bar, practicing biodynamic agriculture from the start in 1999. The estate became the first in all of Champagne to receive Demeter biodynamic certification in 2008. He farms just under 14 hectares across two distinct terroirs: chalky Montgueux slopes for Chardonnay and Kimmeridgian soils of Buxeuil for Pinot Noir, producing approximately 100,000 bottles annually.",
    "founded": 1996,
    "winemaker": "Vincent Couche",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Biodynamic",
      "Organic",
      "Family-Owned"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Vincent Couche official site",
      "Glass of Bubbly producer feature",
      "La Boutique Dorée retailer"
    ]
  },
  {
    "name": "Domaine Courbet",
    "region": "Jura",
    "country": "France",
    "wines": [
      {
        "wine": "Côtes du Jura Tradition",
        "vintage": "2022",
        "style": "White",
        "dateTasted": "2025-12-06"
      },
      {
        "wine": "Trousseau de la Vallée",
        "vintage": "2024",
        "style": "Red",
        "dateTasted": "2026-02-07"
      }
    ],
    "slug": "domaine-courbet",
    "descriptor": "Biodynamic Jura, Chateau-Chalon terroir specialist",
    "philosophy": "Founded in 1869, Domaine Courbet is now run by father-and-son team Jean-Marie and Damien Courbet across 7.5 hectares, with half on the slopes below Chateau-Chalon. Since 2005, the estate has been farmed biodynamically. Damien, who joined in 2003 after working in California, has modernized winemaking by eschewing chaptalization, introducing concrete vessels, insisting on indigenous yeasts, and lowering sulfur additions.",
    "founded": 1869,
    "winemaker": "Damien Courbet",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Biodynamic",
      "Family-Owned",
      "Historic Estate"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Beaune Imports: Domaine Courbet producer profile",
      "Grand Cru Selections: Croix et Courbet producer page",
      "Coeur Wine Co.: Domaine Courbet producer profile"
    ]
  },
  {
    "name": "Catherine et Pierre Breton",
    "region": "Loire",
    "country": "France",
    "wines": [
      {
        "wine": "La Dilettante",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": "2026-02-07"
      }
    ],
    "slug": "catherine-et-pierre-breton",
    "descriptor": "Loire natural wine pioneers, biodynamic Bourgueil",
    "philosophy": "Pierre Breton was one of the first in the Loire Valley to practice organic and biodynamic viticulture, beginning conversion in 1990. In 1994, they released their first zero-sulfur cuvee, 'Nuits d'Ivresses,' as an homage to natural wine pioneer Jules Chauvet. Now a family affair with son Paul and daughter France, they farm 17 hectares across Bourgueil, Chinon, and Vouvray, vinifying with indigenous yeasts and minimal intervention.",
    "founded": 1990,
    "winemaker": "Pierre Breton and Catherine Breton",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Biodynamic",
      "Organic",
      "Natural Wine",
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Kermit Lynch Wine Merchant: Catherine & Pierre Breton grower page",
      "Domaine Breton official website: domainebreton.net",
      "Chabrol Wines: Catherine et Pierre Breton star winemakers of the Loire"
    ]
  },
  {
    "name": "Château du Petit Thouars",
    "region": "Loire",
    "country": "France",
    "wines": [
      {
        "wine": "Chinon ‘L’Epée’",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "ch-teau-du-petit-thouars",
    "descriptor": "Historic Loire Chinon estate, 12th generation",
    "philosophy": "The 150-hectare estate has been in the du Petit Thouars family since 1636, when diplomat George purchased the property. While records of winemaking date back centuries, viticulture faded during the 20th century until Yves du Petit Thouars, former General Manager of Baccarat, replanted 15 hectares of Cabernet Franc in 1975. Now run by twelfth-generation Sebastien, the estate achieved organic certification in 2022.",
    "founded": 1636,
    "winemaker": "Sebastien du Petit Thouars",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Historic Estate"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant: Chateau du Petit Thouars producer profile",
      "The Good Life France: Chateau du Petit Thouars Wines of the Loire",
      "Chateau du Petit Thouars official website: chateaudptwines.com"
    ]
  },
  {
    "name": "Domaine des Closiers",
    "region": "Loire",
    "country": "France",
    "wines": [
      {
        "wine": "Saumur Champigny ‘Les Coudraies’",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "domaine-des-closiers",
    "descriptor": "Rising Saumur-Champigny star, Clos Rougeard heir",
    "philosophy": "Founded in 2018 by Anatole de la Brosse, a former management consultant who studied oenology, Domaine des Closiers immediately converted its 15 hectares to organic and biodynamic viticulture. Consulting with Michel Chevre and Nady Foucault of the legendary Clos Rougeard, the domaine focuses almost exclusively on Cabernet Franc across three cuvees. French wine press has already drawn comparisons to Clos Rougeard.",
    "founded": 2018,
    "winemaker": "Anatole de la Brosse",
    "priceTier": "Premium",
    "qualityTier": "Emerging",
    "tags": [
      "Biodynamic",
      "Organic",
      "Emerging"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Rare Wine Co.: Domaine des Closiers producer profile",
      "Polaner Selections: Domaine des Closiers producer page",
      "Berry Bros. & Rudd: Domaine des Closiers wine range"
    ]
  },
  {
    "name": "Foreau",
    "region": "Loire",
    "country": "France",
    "wines": [
      {
        "wine": "Vouvray Sec",
        "vintage": "2020",
        "style": "White",
        "dateTasted": "2025-11-15"
      },
      {
        "wine": "Vouvray Sec ‘Clos Naudin’",
        "vintage": "2017",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "foreau",
    "descriptor": "Legendary Vouvray Chenin Blanc benchmark",
    "philosophy": "The Foreau family has produced Vouvray from the Clos Naudin estate since Armand Foreau purchased it in 1923, digging the cellar by hand. Philippe assumed direction in 1983 and is widely recognized, alongside Domaine Huet, as producing the greatest Chenin Blancs in Vouvray. His son Vincent took over in 2016, continuing to farm 11.5 hectares of Chenin Blanc with the same exacting standards.",
    "founded": 1923,
    "winemaker": "Vincent Foreau",
    "priceTier": "Premium",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant: Philippe Foreau Domaine du Clos Naudin profile",
      "Down to Earth Wines: The Living Legend of Vouvray — Philippe Foreau and the Clos Naudin",
      "Vintage and Vine: Clos Naudin profile"
    ]
  },
  {
    "name": "Fosse-Sèche",
    "region": "Loire",
    "country": "France",
    "wines": [
      {
        "wine": "Arcane",
        "vintage": "2022",
        "style": "White",
        "dateTasted": "2026-01-17"
      },
      {
        "wine": "Gondwana",
        "vintage": "2022",
        "style": "Red",
        "dateTasted": "2026-01-17"
      }
    ],
    "slug": "fosse-s-che",
    "descriptor": "Biodynamic Saumur estate, biodiversity champion",
    "philosophy": "Chateau de Fosse-Seche traces its winemaking history to Benedictine monks around the 10th century. Guillaume Pire and his mother Francoise arrived in 1998, with twin brother Adrien joining in 2010. Certified biodynamic since 2013, the estate devotes one-third of its land to vines and two-thirds to biodiversity preservation, hosting 30 types of flowers, 60 species of birds, and 116 species of insects.",
    "winemaker": "Guillaume Pire and Adrien Pire",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Biodynamic",
      "Organic",
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Chateau de Fosse-Seche official website: fossasicca.com",
      "Wine Pace: Fosse-Seche, Biodiversity Realm in Saumur",
      "French Libation: Chateau de Fosse-Seche producer profile"
    ]
  },
  {
    "name": "La Taille aux Loups",
    "region": "Loire",
    "country": "France",
    "wines": [
      {
        "wine": "Brut Tradition",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": "2026-02-21"
      }
    ],
    "slug": "la-taille-aux-loups",
    "descriptor": "Montlouis master, Burgundian-style Chenin Blanc",
    "philosophy": "Former wine broker Jacky Blot acquired the estate in 1992 and was instrumental, alongside Francois Chidaine, in establishing Montlouis-sur-Loire as a world-class appellation distinct from neighboring Vouvray. His winemaking was almost fanatically Burgundian in its precision, with 25 hectares of Chenin Blanc planted on limestone hillsides. Following Jacky's death in May 2023, his son Jean-Philippe Blot has taken over the estate.",
    "founded": 1992,
    "winemaker": "Jean-Philippe Blot",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Skurnik Wines & Spirits: Domaine de la Taille aux Loups producer profile",
      "Decanter: Is Jacky Blot the Loire's Most Talented Winemaker?",
      "Hart & Cru: Jacky Blot grower story"
    ]
  },
  {
    "name": "Les Mainsons Rouges",
    "region": "Loire",
    "country": "France",
    "wines": [
      {
        "wine": "Bourgueil ‘Clos de Pavée’",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "les-mainsons-rouges",
    "trustBadge": "limited",
    "qualityTier": "Emerging",
    "priceTier": "Moderate"
  },
  {
    "name": "Paul Prieur",
    "region": "Loire",
    "country": "France",
    "wines": [
      {
        "wine": "Sancerre Mise d’Hiver",
        "vintage": "2023",
        "style": "White",
        "dateTasted": "2025-11-15"
      }
    ],
    "slug": "paul-prieur",
    "descriptor": "Multi-generational organic Sancerre grower",
    "philosophy": "The Prieur family has been producing wine in Verdigny, Sancerre for 11 generations and was among the first in the appellation to bottle their entire production. Today Luc Prieur leads the estate, having taken over from his father Didier in 2012. Their 14.5 hectares of Sauvignon Blanc are cultivated in an artisanal and fully organic manner, with the first officially certified vintage in 2022.",
    "winemaker": "Luc Prieur",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Historic Estate"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "T. Edward Wines & Spirits: Domaine Paul Prieur producer profile",
      "Wines With Conviction: Domaine Paul Prieur & Fils",
      "Thorman Hunt: Domaine Paul Prieur et Fils grower page"
    ]
  },
  {
    "name": "Pépière",
    "region": "Loire",
    "country": "France",
    "wines": [
      {
        "wine": "Muscadet Sèvre et Maine ‘Les Gras Moutons’",
        "vintage": "2021",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "p-pi-re",
    "descriptor": "Benchmark Muscadet, old-vine Melon de Bourgogne",
    "philosophy": "Marc Ollivier, a former engineer, purchased the estate in 1984 and became one of the finest vignerons in the Loire. He is the only grower in Muscadet who did not have a single clonal selection in his vineyards, relying entirely on original stock. Hand-harvesting, natural yeasts, and sur-lie aging define the approach across roughly 45 hectares of granite, gneiss, and gabbro soils. Marc retired after the 2019 vintage.",
    "founded": 1984,
    "priceTier": "Budget",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "The Wine Doctor: Domaine de la Pepiere profile",
      "Louis Dressner Selections: Domaine de la Pepiere producer page",
      "Primal Wine: Domaine de la Pepiere Muscadet profile"
    ]
  },
  {
    "name": "Alain Garillot",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Crozes-Hermitage",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "alain-garillot",
    "descriptor": "Benchmark Crozes-Hermitage, old-school methods",
    "philosophy": "Alain Graillot left a career in agricultural chemicals in Paris to buy a vineyard in Pont-de-l'Isere in 1985, when Crozes-Hermitage was largely unknown. Dedicated to old-school winemaking with no destemming and no new oak barrels, he helped establish Crozes-Hermitage as a serious appellation. After his passing in 2022, his sons Antoine and Maxime continue the estate with the same low-intervention philosophy.",
    "founded": 1985,
    "winemaker": "Maxime Graillot and Antoine Graillot",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Wine Spectator obituary: Alain Graillot, Who Led Crozes-Hermitage to Prominence",
      "Skurnik Wines & Spirits: Alain Graillot producer profile",
      "Wanderlust Wine: Alain Graillot winery profile"
    ]
  },
  {
    "name": "Chambeyron-Manin",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Côte-Rôtie",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "chambeyron-manin",
    "descriptor": "Micro-production Cote Brune old-vine Serine",
    "philosophy": "Domaine Christiane Chambeyron-Manin is a third-generation micro-winery in Cote-Rotie now run by Veronique Manin. The estate farms just half a hectare of exclusively Serine, the pre-clonal Syrah, on the hill of Cote Brune, producing fewer than 165 cases annually. The domaine was renamed in honor of Veronique's mother Christiane, continuing the legacy begun by grandfather Marius Chambeyron who built the estate from 1948 to 1992.",
    "founded": 1948,
    "winemaker": "Veronique Manin",
    "priceTier": "Premium",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Hard to Find"
    ],
    "trustBadge": "moderate",
    "sources": [
      "McCarus Beverage Company: Chambeyron-Manin producer profile",
      "The Wine Trust: Chambeyron-Manin Cote-Rotie",
      "Vinous: Christiane Chambeyron-Manin tasting notes"
    ]
  },
  {
    "name": "Chave",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Saint-Joseph",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "chave",
    "descriptor": "Legendary Hermitage dynasty since 1481",
    "philosophy": "The Chave family has produced wine in the Northern Rhone for 16 generations, with methods rooted in traditional farming, low yields, and minimal manipulation. Jean-Louis, who studied oenology at UC Davis, took over from his father Gerard in 1992 and continues to blend multiple parcels into a single Hermitage rather than releasing individual cru bottlings. As Jean-Louis has stated: 'Hermitage is an expression of this place, not of a grape.'",
    "founded": 1481,
    "winemaker": "Jean-Louis Chave",
    "priceTier": "Luxury",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "The Wine Cellar Insider: Jean Louis Chave Hermitage Complete Guide",
      "Rare Wine Co.: Jean-Louis Chave producer profile",
      "Shiverick Imports: Jean-Louis Chave profile",
      "Oxford Companion to Wine: Hermitage entry"
    ]
  },
  {
    "name": "Domaine Jamet",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Syrah IGP ‘Collines Rhodaniennes’",
        "vintage": "2018",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "domaine-jamet",
    "descriptor": "Traditional whole-cluster Cote-Rotie benchmark",
    "philosophy": "Founded in 1950 by Joseph Jamet with just 0.35 hectares, the domaine began estate-bottling in 1976. Now under Jean-Paul Jamet and his son Loic, Jamet remains one of the few producers adhering to whole-cluster fermentation and blending multiple lieux-dits into a single Cote-Rotie. Their approach is resolutely traditional, prioritizing terroir expression over modern extraction techniques.",
    "founded": 1950,
    "winemaker": "Jean-Paul Jamet and Loic Jamet",
    "priceTier": "Luxury",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "The Wine Cellar Insider: Domaine Jamet Cote Rotie Complete Guide",
      "Rare Wine Co.: Jean-Paul Jamet Rhone Historian",
      "Kermit Lynch Wine Merchant: Domaine Jamet collection page"
    ]
  },
  {
    "name": "Etienne Becheras",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Crozes-Hermitage",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Saint Joseph ‘Tour Joviac’",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "etienne-becheras",
    "descriptor": "Organic Northern Rhone terrace specialist",
    "philosophy": "Etienne Becheras farms an organically managed polycultural domaine of 12 hectares principally within the village of Arras on the western bank of the Rhone. His vineyards are situated on long terraces supported by hand-constructed stone walls, requiring almost all work to be done by hand. He produces compelling Saint-Joseph and a small amount of Crozes-Hermitage from old vines on steep hillside sites.",
    "winemaker": "Etienne Becheras",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Rosenthal Wine Merchant: Etienne Becheras producer profile",
      "Cream Wine: Etienne Becheras brand page"
    ]
  },
  {
    "name": "Faury",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Saint-Joseph ‘La Gloriette’ (VV)",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "faury",
    "descriptor": "Artisanal Condrieu and Saint-Joseph family estate",
    "philosophy": "Philippe Faury took over the family domaine in 1979 when it was still selling wine, peaches, and cherries to a local clientele. He expanded holdings to over 11 hectares and began international sales. Since 2006, his son Lionel has taken the reins, though father and son still work side by side. The domaine now covers approximately 17 hectares across Saint-Joseph, Cote-Rotie, and Condrieu.",
    "founded": 1979,
    "winemaker": "Lionel Faury",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Kermit Lynch Wine Merchant: Lionel Faury Condrieu listings",
      "Fava Beans and Chianti: The Northern Rhone — Georges Vernay and Domaine Faury"
    ]
  },
  {
    "name": "Gilles",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Cornas",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Cornas",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Cornas",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "gilles",
    "descriptor": "Rising Cornas talent, Robert Michel protege",
    "philosophy": "Guillaume Gilles trained with Jean-Louis Chave and Robert Michel between 2000 and 2004 before establishing his own domaine in 2007, when he acquired parcels from the retiring Michel. He works three hectares entirely by hand with an organic philosophy, using whole-cluster fermentation with native yeasts in concrete tanks. Wines are aged in old demi-muids and bottled without fining or filtering, producing roughly 5,000 bottles of Cornas annually.",
    "founded": 2007,
    "winemaker": "Guillaume Gilles",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Emerging",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant: Guillaume Gilles producer profile",
      "Hogshead Wine Blog: Killer Cornas from Guillaume Gilles",
      "Chambers Street Wines: 2021 Northern Rhone releases"
    ]
  },
  {
    "name": "Guillaume Gilles",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Cornas",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": "2025-10-18"
      }
    ],
    "slug": "guillaume-gilles",
    "descriptor": "Rising Cornas talent, Robert Michel protege",
    "philosophy": "Guillaume Gilles trained with Jean-Louis Chave and Robert Michel between 2000 and 2004 before establishing his own domaine in 2007, when he acquired parcels from the retiring Michel. He works three hectares entirely by hand with an organic philosophy, using whole-cluster fermentation with native yeasts in concrete tanks. Wines are aged in old demi-muids and bottled without fining or filtering, producing roughly 5,000 bottles of Cornas annually.",
    "founded": 2007,
    "winemaker": "Guillaume Gilles",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Emerging",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant: Guillaume Gilles producer profile",
      "Hogshead Wine Blog: Killer Cornas from Guillaume Gilles",
      "Chambers Street Wines: 2021 Northern Rhone releases"
    ]
  },
  {
    "name": "Jamet",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Côte-Rôtie",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "jamet",
    "descriptor": "Traditional whole-cluster Cote-Rotie benchmark",
    "philosophy": "Founded in 1950 by Joseph Jamet with just 0.35 hectares, the domaine began estate-bottling in 1976. Now under Jean-Paul Jamet and his son Loic, Jamet remains one of the few producers adhering to whole-cluster fermentation and blending multiple lieux-dits into a single Cote-Rotie. Their approach is resolutely traditional, prioritizing terroir expression over modern extraction techniques.",
    "founded": 1950,
    "winemaker": "Jean-Paul Jamet and Loic Jamet",
    "priceTier": "Luxury",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "The Wine Cellar Insider: Domaine Jamet Cote Rotie Complete Guide",
      "Rare Wine Co.: Jean-Paul Jamet Rhone Historian",
      "Kermit Lynch Wine Merchant: Domaine Jamet collection page"
    ]
  },
  {
    "name": "Levet",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Condrieu",
        "vintage": "2019",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Côte-Rôtie ‘Les Journaries’",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Côte-Rôtie ‘La Chavaroche’",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Côte-Rôtie ‘La Chavaroche’",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "levet",
    "descriptor": "Traditional family Cote-Rotie from 1936",
    "philosophy": "The Levet family has farmed Cote-Rotie since 1936, when Nicole Levet's grandfather first purchased vines. Marius Chambeyron, Nicole's father, famously painted his name on giant rocks in his vineyards as a mark of pride. Agnes Levet has expertly managed vineyard and cellar work since 2004, continuing the family tradition across 3.5 hectares in six well-placed lieux-dits on both Cote Blonde and Cote Brune.",
    "founded": 1936,
    "winemaker": "Agnes Levet",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "The Wine Cellar Insider: Domaine Bernard Levet Cote Rotie Complete Guide",
      "Rosenthal Wine Merchant: Vignobles Levet producer profile",
      "Unicorn Auctions: Vignobles Levet review"
    ]
  },
  {
    "name": "Vignobles Verzier-Chante Perdrix",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Condrieu ‘Authentic’",
        "vintage": "2022",
        "style": "White",
        "dateTasted": "2024-10-13"
      }
    ],
    "slug": "vignobles-verzier-chante-perdrix",
    "descriptor": "Organic Northern Rhone multi-appellation family estate",
    "philosophy": "The Verzier family has farmed the slopes of the Northern Rhone since 1828. Philippe Verzier took over the domaine at 19 after his father's heart attack and now works 10 hectares across Saint-Joseph, Condrieu, Cote-Rotie, and Collines Rhodaniennes. Although the vineyards have been farmed organically since the mid-1960s, certification was not sought until 2010 by Philippe and his wife Isabelle.",
    "founded": 1828,
    "winemaker": "Philippe Verzier",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Historic Estate",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Vignobles Verzier-Chante Perdrix official website",
      "Beaune Imports: Domaine Verzier producer profile",
      "Decanter: Vignobles Verzier Chante-Perdrix Saint-Joseph Empreinte review"
    ]
  },
  {
    "name": "Vincent Paris",
    "region": "Northern Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Cornas ‘Granit 30’",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "vincent-paris",
    "descriptor": "Old-vine Cornas specialist on granite",
    "philosophy": "A protege of his uncle Robert Michel, Vincent Paris inherited century-old Syrah vines in the La Geynale vineyard and founded his domaine in 1997. He farms eight hectares in Cornas and nine in Crozes-Hermitage, producing three Cornas cuvees that rival the appellation's greatest wines. Paris currently serves as co-president of the Cornas appellation.",
    "founded": 1997,
    "winemaker": "Vincent Paris",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Opening a Bottle: Essential Winemakers of France — Vincent Paris",
      "Berry Bros. & Rudd: Domaine Vincent Paris producer profile",
      "Fine Wine Library: Top Single Vineyard Cornas from Vincent Paris"
    ]
  },
  {
    "name": "Santa Duc",
    "region": "Rhône",
    "country": "France",
    "wines": [
      {
        "wine": "Gigondas Blanc",
        "vintage": "2023",
        "style": "White",
        "dateTasted": "2025-10-18"
      },
      {
        "wine": "Aux Lieux Dits",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "santa-duc",
    "descriptor": "Six-generation biodynamic Gigondas benchmark",
    "philosophy": "Established in 1874, Domaine Santa Duc sits at the foot of the Dentelles de Montmirail in Gigondas and has been in the same family for six generations. Yves Gras took over from his father Edmond in 1985 and elevated the estate to international renown. His son Benjamin converted the entire estate to biodynamic viticulture in 2016, producing powerful yet refined wines from 13 hectares in Gigondas and 6 hectares in Chateauneuf-du-Pape.",
    "founded": 1874,
    "winemaker": "Benjamin Gras",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Biodynamic",
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Domaine Santa Duc official website: santaduc.fr",
      "Grands Bourgognes: Estate Santa Duc — Biodynamic Precision from Gigondas",
      "The Wine Cellar Insider: Domaine Santa Duc Chateauneuf du Pape Complete Guide"
    ]
  },
  {
    "name": "Blard & Fils",
    "region": "Savoie",
    "country": "France",
    "wines": [
      {
        "wine": "Lébraz",
        "vintage": "2022",
        "style": "White",
        "dateTasted": "2025-10-18"
      }
    ],
    "slug": "blard-fils",
    "descriptor": "Five-generation organic Savoie white wine specialist",
    "philosophy": "Jean-Noel and Thomas Blard, father and son, have elevated this five-generation Savoie domaine over the past two decades while transitioning to organic and natural practices. The entire vineyard achieved organic certification in 2020, and all wines are now made without added yeast, relying on spontaneous fermentation with reduced sulfur levels. Their wines appear on menus at Michelin-starred restaurants including the three-star Flocons de Sel in Megeve.",
    "winemaker": "Thomas Blard",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Natural Wine",
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Blard et Fils official website: blardetfils.fr",
      "The Living Vine: Blard & Fils portfolio page",
      "Vignerons d'Exception: Domaine Blard Grands vins de Savoie"
    ]
  },
  {
    "name": "Domaine Louis Magnin",
    "region": "Savoie",
    "country": "France",
    "wines": [
      {
        "wine": "Vin de Savoie ‘Chignin Bergeron’",
        "vintage": "2014",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "domaine-louis-magnin",
    "descriptor": "Biodynamic Savoie Mondeuse benchmark producer",
    "philosophy": "Louis and Beatrice Magnin devote 55% of their eight hectares to the Mondeuse grape, all planted within the Arbin sector of Savoie's Combe de Savoie. The remaining vineyards are planted to Roussanne (locally called 'Bergeron'), Altesse, and Gamay. Certified organic since 2012 with certain parcels treated biodynamically, the Magnins produce the benchmark expression of Mondeuse in Savoie.",
    "winemaker": "Louis Magnin and Beatrice Magnin",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Biodynamic",
      "Organic",
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant: Domaine Louis Magnin producer profile",
      "Natural Wine Co.: Domaine Louis Magnin producer page"
    ]
  },
  {
    "name": "Domaine des Tours",
    "region": "Vaucluse",
    "country": "France",
    "wines": [
      {
        "wine": "Réserve",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": "2025-11-01"
      }
    ],
    "slug": "domaine-des-tours",
    "descriptor": "Emmanuel Reynaud's Vaucluse, Rayas pedigree",
    "philosophy": "Domaine des Tours belongs to Emmanuel Reynaud, who also owns the famed Chateau Rayas in Chateauneuf-du-Pape. The domaine extends over 40 hectares of old-vine Grenache alongside Syrah, Cinsault, Merlot, and white varieties, all horse-ploughed, hand-harvested, and vinified with minimal intervention. Wines undergo whole-cluster fermentation with native yeasts in underground concrete tanks, followed by aging in old oak, and are bottled unfined and unfiltered.",
    "winemaker": "Emmanuel Reynaud",
    "priceTier": "Premium",
    "qualityTier": "Legendary",
    "tags": [
      "Organic",
      "Family-Owned",
      "Hard to Find",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Sotheby's Wine: Chateau des Tours from Emmanuel Reynaud",
      "Vins et Millesimes: Domaine des Tours profile"
    ]
  },
  {
    "name": "Bott Frigyes",
    "region": "Tokaj",
    "country": "Hungary",
    "wines": [
      {
        "wine": "Furmint",
        "vintage": "2023",
        "style": "White",
        "dateTasted": "2026-02-07"
      }
    ],
    "slug": "bott-frigyes",
    "descriptor": "Biodynamic volcanic wines from Hungarian-Slovak border",
    "philosophy": "Frigyes Bott and his son Frici cultivate 10 hectares of vineyards on volcanic soils next to the River Garam in southern Slovakia's ethnic Hungarian region. Working biodynamically with spontaneous fermentation, extended lees aging in old barrels and amphorae, and no temperature control, they bottle unfined and unfiltered with minimal sulfites, producing wines from Furmint, Harslevelu, and other varieties.",
    "founded": 2005,
    "winemaker": "Frigyes Bott",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Biodynamic",
      "Natural Wine",
      "Hard to Find"
    ],
    "trustBadge": "limited",
    "sources": [
      "Danch & Granger Selections producer profile",
      "Budapest Business Journal feature",
      "Cardwell Cellars blog"
    ]
  },
  {
    "name": "Cantina Sociale Cooperativa",
    "region": "Alto Piemonte",
    "country": "Italy",
    "wines": [
      {
        "wine": "Gattinara",
        "vintage": "2014",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "cantina-sociale-cooperativa",
    "descriptor": "Heroic cooperative preserving alpine Carema Nebbiolo",
    "philosophy": "Founded in 1960 by 10 viticulturists, the Cantina dei Produttori Nebbiolo di Carema is a cooperative of about 80 growers cultivating Picotener (the local Nebbiolo clone) on distinctive terraced vineyards with stone pillars called pilun. Recognized as a Slow Food Presidium in 2014, the cooperative preserves both the wine and the traditional alpine viticultural landscape.",
    "founded": 1960,
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Historic Estate",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Cantina dei Produttori Nebbiolo di Carema official website",
      "Coeur Wine Co. producer profile",
      "Slow Food Presidium documentation"
    ]
  },
  {
    "name": "Carema",
    "region": "Alto Piemonte",
    "country": "Italy",
    "wines": [
      {
        "wine": "Erbaluce di Caluso",
        "vintage": "2021",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Etichetta Bianca",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "carema",
    "descriptor": "Alpine terraced Nebbiolo appellation cooperative",
    "philosophy": "The Carema DOC, registered since 1967, represents one of the northernmost expressions of Nebbiolo in Piedmont. Grown on ancient terraced vineyards at the border of Piedmont and Valle d'Aosta, the local Picotener clone produces wines of marked longevity, lasting 20-30 years, with a ruby red color tending toward garnet and aromas of macerated rose.",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Historic Estate",
      "Age-Worthy",
      "Best Value"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Carema DOC official documentation",
      "La Carta Wine producer profile"
    ]
  },
  {
    "name": "Cascina Preziosa",
    "region": "Alto Piemonte",
    "country": "Italy",
    "wines": [
      {
        "wine": "Spanna ‘Coste della Sesia’",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "cascina-preziosa",
    "descriptor": "Revived Napoleonic-era Alto Piemonte estate",
    "philosophy": "A historic estate tracing its roots to the Napoleonic era, with a map from 1806 attesting to its existence in Castellengo. Owner Gianni Selva Bonino, with consultant Cristiano Garella, has meticulously restored the vineyards, observing organic practices across three hectares of Nebbiolo, Barbera, and Vespolina.",
    "winemaker": "Gianni Selva Bonino",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Organic",
      "Historic Estate",
      "Emerging",
      "Hard to Find"
    ],
    "trustBadge": "limited",
    "sources": [
      "The Piedmont Guy producer profile",
      "Alto Piemonte Italia producer page",
      "Free Run Wine Merchants producer profile"
    ]
  },
  {
    "name": "Conti",
    "region": "Alto Piemonte",
    "country": "Italy",
    "wines": [
      {
        "wine": "Boca ‘Il Rosso delle Donne’",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "conti",
    "descriptor": "Sister-run organic Boca DOC revival estate",
    "philosophy": "The company history begins in 1963 when Ermanno Conti chose to carry on his ancestors' winemaking tradition in the tiny Boca DOC. Since 2006, his three daughters Elena, Anna, and Paola have run the estate, rigorously applying organic standards with indigenous yeasts, manual harvest, and minimal sulfur throughout elevage and at bottling.",
    "founded": 1963,
    "winemaker": "Elena, Anna & Paola Conti",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Natural Wine"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Rosenthal Wine Merchant grower page",
      "Castello Conti official website",
      "Cream Wine Company producer profile"
    ]
  },
  {
    "name": "Le Pianelle",
    "region": "Alto Piemonte",
    "country": "Italy",
    "wines": [
      {
        "wine": "al posto dei fiori",
        "vintage": "2023",
        "style": "Rosé",
        "dateTasted": "2025-10-18"
      }
    ],
    "slug": "le-pianelle",
    "descriptor": "Restored Alto Piemonte Nebbiolo from abandoned vineyards",
    "philosophy": "Founded by Dieter Heuskel and Peter Dipoli, who acquired their first plot of abandoned vineyard in Brusnengo in December 2004. They have expanded to five hectares across Brusnengo, Forte, and Lessona, focusing on Nebbiolo alongside autochthonous varieties Croatina and Vespolina to revive forgotten Alto Piemonte terroirs.",
    "founded": 2004,
    "winemaker": "Dieter Heuskel & Peter Dipoli",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Emerging",
      "Hard to Find"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Le Pianelle official website",
      "K&L Wines On the Trail blog on Alto Piemonte"
    ]
  },
  {
    "name": "Rovellotti",
    "region": "Alto Piemonte",
    "country": "Italy",
    "wines": [
      {
        "wine": "Colline Novaresi Bianco ‘Vitigno Innominabile il Criccone’",
        "vintage": "2018",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Ghemme Riserva ‘Costa del Salmino’",
        "vintage": "2013",
        "style": "Red",
        "dateTasted": ""
      },
      {
        "wine": "Ghemme Riserva ‘Costa del Salmino’",
        "vintage": "2015",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "rovellotti",
    "descriptor": "Medieval castle Ghemme estate with centuries-old heritage",
    "philosophy": "The Rovellotti family has inhabited the fortified town of Ghemme since at least the late 15th century. Founded by Antonello and Paolo Rovellotti in 1972 within the ancient Rettuario Gotico, the estate farms 15 hectares in the Baraggiola subzone, collaborating with the University of Milan since the 1980s to re-establish natural ecological balance.",
    "founded": 1972,
    "winemaker": "Antonello Rovellotti",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant grower page",
      "Skurnik Wines producer profile",
      "Rovellotti official website"
    ]
  },
  {
    "name": "Casa Setaro",
    "region": "Campania",
    "country": "Italy",
    "wines": [
      {
        "wine": "Terramatta",
        "vintage": "2024",
        "style": "Red",
        "dateTasted": "2025-12-06"
      }
    ],
    "slug": "casa-setaro",
    "descriptor": "Organic Vesuvius estate with pre-phylloxera vines",
    "philosophy": "Fourth-generation Massimo Setaro founded the estate in 2004, beginning with family pre-phylloxera holdings on Vesuvio's southern slopes in Trecase. Certified organic and incorporating biodynamic principles, Casa Setaro works to revolutionize the style and perception of Lacryma Christi del Vesuvio while reviving native vines at risk of extinction such as Caprettone.",
    "founded": 2004,
    "winemaker": "Massimo Setaro",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned",
      "Historic Estate"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant grower page",
      "Casa Setaro official website",
      "The Silk Road Magazine feature"
    ]
  },
  {
    "name": "Passo delle Tortore",
    "region": "Campania",
    "country": "Italy",
    "wines": [
      {
        "wine": "Greco di Tufo ‘Le Arcaie’",
        "vintage": "2021",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "passo-delle-tortore",
    "descriptor": "Young Irpinia project by four partners",
    "philosophy": "Conceived by four young entrepreneurs and a winemaker trained in France, Passo delle Tortore aims to produce wines of extreme precision from the cool hills of Irpinia between Avellino and Benevento. Winemaker Francesco de Pierro seeks tension, minerality, and sapidity as common denominators, producing Aglianico and Fiano wines that reflect the terroir's intrinsic complexity.",
    "founded": 2012,
    "winemaker": "Francesco de Pierro",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Emerging"
    ],
    "trustBadge": "limited",
    "sources": [
      "Jan D'Amore Wine importer page",
      "The Authentic Irpinia producer listing"
    ]
  },
  {
    "name": "Nicola Gatta",
    "region": "Lombardy",
    "country": "Italy",
    "wines": [
      {
        "wine": "Cuvée Nature",
        "vintage": "NV",
        "style": "Sparkling",
        "dateTasted": "2025-10-18"
      }
    ],
    "slug": "nicola-gatta",
    "descriptor": "Biodynamic metodo classico sparkling from Franciacorta",
    "philosophy": "Born into a winemaking family in Gussago on the eastern edge of Franciacorta, Nicola Gatta began his own project in 2005, renting five hectares from his family. He renounced the Franciacorta DOCG to maintain creative freedom, practicing biodynamic farming with spontaneous fermentation, zero sugar dosage, and lees aging guided by the lunar calendar.",
    "founded": 2005,
    "winemaker": "Nicola Gatta",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Biodynamic",
      "Natural Wine",
      "Hard to Find"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Nicola Gatta official website",
      "FYT Wine producer profile",
      "Strade Bianche Wines producer profile"
    ]
  },
  {
    "name": "Altre Vie",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Barolo",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": "2025-10-18"
      },
      {
        "wine": "Roero Arneis ‘Anfora’",
        "vintage": "2022",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "altre-vie",
    "descriptor": "Amphora-aged Langhe collaboration project",
    "philosophy": "AltreVie is a joint venture between Gian Luca Colombo and Federico Scarzello, combining artistic and scientific approaches to winemaking. They source exceptional vineyards across Langhe and Roero, aging wines in amphora to emphasize purity and terroir expression.",
    "winemaker": "Gian Luca Colombo & Federico Scarzello",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Natural Wine",
      "Emerging"
    ],
    "trustBadge": "limited",
    "sources": [
      "Artisanal Cellars producer profile",
      "Classica Wine Merchant producer page"
    ]
  },
  {
    "name": "Brovia",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Barolo",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "brovia",
    "descriptor": "Classic Castiglione Falletto Barolo estate",
    "philosophy": "Founded in 1863 by Giacinto Brovia, this fourth-generation estate in Castiglione Falletto vinifies Nebbiolo in the classic style with extended macerations of a month or more. The wines are aged in large Slavonian and French oak barrels, reflecting a steadfast commitment to traditional Barolo winemaking.",
    "founded": 1863,
    "winemaker": "Alex Sanchez",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Skurnik Wines producer profile",
      "Rosenthal Wine Merchant grower page",
      "Berry Bros. & Rudd producer profile"
    ]
  },
  {
    "name": "Cappellano",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Barbera d’Alba",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "cappellano",
    "descriptor": "Legendary traditionalist Serralunga Barolo estate",
    "philosophy": "Founded in 1870 by Filippo Cappellano, the estate became legendary under Teobaldo Cappellano, who scaled back to just four hectares and fewer than 800 cases per year to focus on uncompromising quality. Now run by his son Augusto, Cappellano continues producing iconic Barolo and the family's renowned Barolo Chinato from a secret recipe.",
    "founded": 1870,
    "winemaker": "Augusto Cappellano",
    "priceTier": "Luxury",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant grower page",
      "Rare Wine Co. producer profile",
      "Decanter obituary for Teobaldo Cappellano"
    ]
  },
  {
    "name": "Cascina Baricchi",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Barbaresco Riserva ‘Rose delle Casasse’",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "cascina-baricchi",
    "descriptor": "Rare Nebbiolo Rosé clone Barbaresco specialist",
    "philosophy": "Run by Natale Simonetta, who studied under Bruno Giacosa, Cascina Baricchi is believed to be the only producer of a Barbaresco made entirely from the rare Nebbiolo Rosé clone. Wines are produced in traditional style with long macerations, natural yeasts, and a minimum of five years aging in large neutral botti before bottling.",
    "founded": 1979,
    "winemaker": "Natale Simonetta",
    "priceTier": "Premium",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Age-Worthy",
      "Hard to Find"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Polaner Selections producer profile",
      "Rare Wine Co. producer profile",
      "Bliss Wine Imports producer page"
    ]
  },
  {
    "name": "Castello di Perno",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Castelletto Barolo",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "castello-di-perno",
    "descriptor": "Organic Monforte estate in medieval castle",
    "philosophy": "Founded in 2012 by Milanese lawyer Gregorio Gitti, Castello di Perno farms 14 hectares organically across Monforte d'Alba, Nizza, and Alta Langa. The estate's neoclassical approach respects traditional terroir knowledge while interpreting it through a modern sensibility, producing wines from the Gramolere and Perno crus.",
    "founded": 2012,
    "priceTier": "Premium",
    "qualityTier": "Emerging",
    "tags": [
      "Organic",
      "Historic Estate",
      "Hard to Find"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Crescendo Wines producer profile",
      "K&L Wines On the Trail blog",
      "Castello di Perno official website"
    ]
  },
  {
    "name": "Castello di Verduno",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Massara",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": "2026-01-17"
      }
    ],
    "slug": "castello-di-verduno",
    "descriptor": "Royal heritage Verduno Barolo and Pelaverga",
    "philosophy": "Acquired by King Carlo Alberto of Savoy in 1838 for Barolo production, the estate has been owned by the Burlotto family since 1909. With 10 hectares split between Verduno and Barbaresco, the wines are vinified traditionally by Mario Andrion, retaining a rare elegance and purity rather than rustic power.",
    "founded": 1838,
    "winemaker": "Mario Andrion",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Polaner Selections producer profile",
      "Oliver McCrum Wines producer page",
      "Castello di Verduno official website"
    ]
  },
  {
    "name": "Cavallotto",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Vigna Cuculo",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": "2025-11-01"
      }
    ],
    "slug": "cavallotto",
    "descriptor": "Traditionalist Bricco Boschis Barolo benchmark",
    "philosophy": "Since Giacomo Cavallotto acquired the 23-hectare Bricco Boschis vineyard in 1928, the family has been a beacon of traditional Barolo winemaking. Now in the fifth generation with Alfio, Giuseppe, and Laura Cavallotto, the estate has been producing age-worthy, full-bodied Barolo since its inaugural 1948 vintage.",
    "founded": 1928,
    "winemaker": "Alfio Cavallotto",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Skurnik Wines producer profile",
      "Cavallotto official website history page",
      "Berkeley and Stuart producer profile"
    ]
  },
  {
    "name": "De Forville",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Barbaresco ‘Loreto’",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "de-forville",
    "descriptor": "Historic Belgian-origin Barbaresco family estate",
    "philosophy": "The De Forville family emigrated from Belgium to Piedmont in 1848, establishing themselves in Barbaresco in 1860 under Gioacchino De Forville. Now in its fifth generation with Valter and Paolo Anfosso, the estate ferments in temperature-controlled stainless steel and ages in large wood barrels, bottling Barbaresco without filtration after extended barrel aging.",
    "founded": 1860,
    "winemaker": "Valter & Paolo Anfosso",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant grower page",
      "Skurnik Wines producer profile",
      "De Forville official website"
    ]
  },
  {
    "name": "La Colombera",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Timorasso ‘Il Montino’",
        "vintage": "2021",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "la-colombera",
    "descriptor": "Pioneering Timorasso champion of Colli Tortonesi",
    "philosophy": "Run by Elisa Semino with her father Piercarlo and brother Lorenzo, La Colombera was among the first to revive the ancient Timorasso grape in the Colli Tortonesi. Their first Timorasso harvest was in 1997, and the Derthona label debuted in 2000, using only copper and sulphur in the vineyard with no herbicides.",
    "winemaker": "Elisa Semino",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Organic"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "La Colombera official website",
      "The Chosen Table feature article",
      "Wine Enthusiast review"
    ]
  },
  {
    "name": "Lapo Berti",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Langhe Nebbiolo",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "lapo-berti",
    "descriptor": "Organic La Morra artisan Barolo project",
    "philosophy": "After apprenticeships with Roberto Voerzio and Enzo Boglietti in Piedmont and producers in Burgundy, Tuscan-born Lapo Berti settled in La Morra in 2012 to start his own project. Farming is strictly organic with indigenous yeasts, long fermentations, no fining or filtration, and only minuscule amounts of sulfites at bottling.",
    "founded": 2012,
    "winemaker": "Lapo Berti",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Organic",
      "Natural Wine",
      "Emerging"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Sager and Wine importer profile",
      "RAW WINE producer profile",
      "MFW Wine Co. producer page"
    ]
  },
  {
    "name": "Nada Fiorenzo",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Barbaresco Manzola",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "nada-fiorenzo",
    "descriptor": "Artisan Treiso Barbaresco family estate",
    "philosophy": "The history begins in 1921 when Carlo Nada purchased a farmhouse and began producing wine. In the late 1970s, Bruno Nada persuaded his father Fiorenzo to stop selling grapes and start bottling their own wine, producing the first bottle in 1982. Fourth-generation winemaker Danilo Nada continues the legacy, farming without pesticides or herbicides.",
    "founded": 1982,
    "winemaker": "Danilo Nada",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Organic"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Tellitalia Imports producer profile",
      "Word on the Grapevine feature article",
      "Terra Firma Wine Company grower page"
    ]
  },
  {
    "name": "San Fereolo",
    "region": "Piedmont",
    "country": "Italy",
    "wines": [
      {
        "wine": "Dogliani Dolcetto ‘San Fereolo’",
        "vintage": "2006",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "san-fereolo",
    "descriptor": "Biodynamic Dogliani Dolcetto reference estate",
    "philosophy": "Nicoletta Bocca left Milan in 1992 to become a winemaker in Dogliani, converting to organic practices in 2004 and achieving Demeter-certified biodynamic status. San Fereolo is considered one of the greatest references for the terroir of Dogliani, producing some of Piedmont's most profound expressions of Dolcetto from 12 hectares.",
    "founded": 1992,
    "winemaker": "Nicoletta Bocca",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Biodynamic",
      "Organic",
      "Natural Wine"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant grower page",
      "Chambers Street Wines feature article",
      "Primal Wine producer profile"
    ]
  },
  {
    "name": "Benanti",
    "region": "Sicily",
    "country": "Italy",
    "wines": [
      {
        "wine": "Etna Bianco",
        "vintage": "2024",
        "style": "White",
        "dateTasted": "2026-03-07"
      }
    ],
    "slug": "benanti",
    "descriptor": "Pioneering modern Etna viticulture reference estate",
    "philosophy": "In 1988, Cavaliere Giuseppe Benanti established the modern winery, becoming the universal precursor of contemporary Etna viticulture. Benanti was the first Etna winery with a presence on all slopes of the volcano, and in 2007 their Pietra Marina became the first Etna wine to receive Gambero Rosso's Tre Bicchieri, the same year the estate was named Italian Winery of the Year.",
    "founded": 1988,
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Benanti official website",
      "Wine Spectator obituary for Giuseppe Benanti",
      "Decanter sponsored feature"
    ]
  },
  {
    "name": "Occhipinti",
    "region": "Sicily",
    "country": "Italy",
    "wines": [
      {
        "wine": "Bianco ‘SP68’",
        "vintage": "2023",
        "style": "White",
        "dateTasted": ""
      },
      {
        "wine": "Rosso ‘SP68’",
        "vintage": "2023",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "occhipinti",
    "descriptor": "Iconic Sicilian natural wine and biodynamic pioneer",
    "philosophy": "Arianna Occhipinti, niece of COS co-founder Giusto Occhipinti, released her first vintage in 2006 at age 22 and has become a seminal figure for a new generation of wine lovers. She farms 22 hectares biodynamically in the Cerasuolo di Vittoria DOCG, producing over 120,000 bottles annually of Nero d'Avola and Frappato through a regenerative, organic approach.",
    "founded": 2004,
    "winemaker": "Arianna Occhipinti",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Biodynamic",
      "Organic",
      "Natural Wine"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Wikipedia article on Arianna Occhipinti",
      "K&L Wines feature article",
      "Palate Press feature article"
    ]
  },
  {
    "name": "Antico Lamole",
    "region": "Tuscany",
    "country": "Italy",
    "wines": [
      {
        "wine": "Lama della Villa Toscana IGT",
        "vintage": "2014",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "antico-lamole",
    "descriptor": "High-altitude organic Chianti Classico from Lamole",
    "philosophy": "Antico Lamole produces pure Sangiovese wines from the high-altitude terraced vineyards of Lamole, one of the smallest UGAs in Chianti Classico. The vineyards sit at over 500 meters elevation on distinctive macigno toscano sandstone soils, producing wines of marked elegance and aromatic lift.",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic"
    ],
    "trustBadge": "limited",
    "sources": [
      "Terra Firma Wine Company product listing",
      "Chianti Classico UGA documentation"
    ]
  },
  {
    "name": "Le Boncie",
    "region": "Tuscany",
    "country": "Italy",
    "wines": [
      {
        "wine": "Chiesamonti",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": "2026-03-07"
      }
    ],
    "slug": "le-boncie",
    "descriptor": "Biodynamic single-estate Sangiovese from Castelnuovo",
    "philosophy": "Giovanna Morganti inherited the four-hectare family farm in the 1980s and dedicated herself to biodynamic viticulture in the southern tier of Chianti Classico. After studying oenology and working on a project to preserve 300 traditional Tuscan grape varieties at San Felice, she produces tiny quantities using spontaneous fermentation with indigenous yeasts in open vats.",
    "winemaker": "Giovanna Morganti",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Biodynamic",
      "Organic",
      "Natural Wine",
      "Family-Owned",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rosenthal Wine Merchant grower page",
      "Bottiglieria Vini Belli producer profile",
      "Cream Wine Company producer profile"
    ]
  },
  {
    "name": "Piemaggio",
    "region": "Tuscany",
    "country": "Italy",
    "wines": [
      {
        "wine": "Le Fioraie Chianti Classico Riserva",
        "vintage": "2016",
        "style": "Red",
        "dateTasted": "2026-03-07"
      },
      {
        "wine": "Chianti Classico Riserva ‘Le Fioraie’",
        "vintage": "2015",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "piemaggio",
    "descriptor": "Medieval-origin Castellina Chianti Classico estate",
    "philosophy": "Founded in 1954 by Larissa Karaban, Piemaggio takes its name from an ancient farmhouse dating to the 11th century, with remains of an old church on the estate's highest hillside. The 12-hectare estate in Castellina produces about 34,000 bottles annually, with Sangiovese covering 10 hectares alongside traditional varieties Colorino, Canaiolo, and Ciliegiolo.",
    "founded": 1954,
    "winemaker": "Michele Neri",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Rosenthal Wine Merchant grower page",
      "Piemaggio official website",
      "Kysela Pere et Fils producer profile"
    ]
  },
  {
    "name": "Les Petits Riens",
    "region": "Valle d’Aosta",
    "country": "Italy",
    "wines": [
      {
        "wine": "Petit Bout de Lune",
        "vintage": "2016",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "les-petits-riens",
    "descriptor": "Tiny high-altitude natural wine from Aosta",
    "philosophy": "Fabien, trained as an enologist in Burgundy and mentored by Swiss biodynamic pioneer Marie-Therese Chappaz, and Stefania farm 2.5 hectares between 600 and 800 meters in the hills of Aosta. They produce between 150 and 700 bottles per vintage across seven to eight cuvees, harvesting by hand with minimal intervention, indigenous yeasts, and very little sulfur.",
    "winemaker": "Fabien & Stefania",
    "priceTier": "Premium",
    "qualityTier": "Emerging",
    "tags": [
      "Natural Wine",
      "Organic",
      "Hard to Find"
    ],
    "trustBadge": "limited",
    "sources": [
      "Les Petits Riens official website",
      "Maree Haute producer profile",
      "Ceri Smith producer page"
    ]
  },
  {
    "name": "Prá",
    "region": "Veneto",
    "country": "Italy",
    "wines": [
      {
        "wine": "Soave Classico ‘Staforte’",
        "vintage": "2017",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "pr",
    "descriptor": "Leading organic Soave Classico screw-cap pioneer",
    "philosophy": "Graziano Pra and his brother Sergio started the winery in 1983 in a rented facility, growing it over four decades into an influential 40-hectare certified organic estate. A founding member of Gli Svitati, Pra pioneered screw-cap closures in Italy to preserve aromatics, producing complex mineral-driven Garganega wines capable of 10-20 years of evolution.",
    "founded": 1983,
    "winemaker": "Graziano Prá",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Family-Owned",
      "Best Value",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Wine Spectator feature on Graziano Pra",
      "Polaner Selections producer profile",
      "Grapevine Adventures feature article"
    ]
  },
  {
    "name": "Niepoort",
    "region": "Douro",
    "country": "Portugal",
    "wines": [
      {
        "wine": "Redoma Branco",
        "vintage": "2024",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "niepoort",
    "descriptor": "Visionary fifth-generation Douro Port and table wine",
    "philosophy": "Founded in 1842 by Dutch immigrant Franciscus Marius van der Niepoort, the house was transformed by fifth-generation Dirk Niepoort, who joined in 1987 and pioneered the Douro's dry wine revolution with Redoma Tinto and Robustus. Now with sixth-generation Daniel as head winemaker, Niepoort remains at the forefront of both Port and still wine innovation in the Douro.",
    "founded": 1842,
    "winemaker": "Daniel Niepoort",
    "priceTier": "Premium",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Niepoort official website",
      "World of Fine Wine profile",
      "Monocle feature article"
    ]
  },
  {
    "name": "Wine & Soul",
    "region": "Douro",
    "country": "Portugal",
    "wines": [
      {
        "wine": "Manoella",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": "2026-01-17"
      },
      {
        "wine": "Vinho Branco ‘Guru’",
        "vintage": "2022",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "wine-soul",
    "descriptor": "Old-vine Douro field blend specialists",
    "philosophy": "Founded in 2001 by Sandra Tavares da Silva, recognized as the first female winemaker in the Douro, and her husband Jorge Serodio Borges. Working with old vines containing more than 40 mixed grape varieties in the Pinhao Valley, Wine & Soul produces benchmark Douro wines including Pintas, which received 98 points from Wine Spectator for the 2011 vintage.",
    "founded": 2001,
    "winemaker": "Sandra Tavares da Silva",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Wine-Searcher interview with Sandra Tavares",
      "Wine & Soul official website",
      "Corney and Barrow interview"
    ]
  },
  {
    "name": "Luis Seabra",
    "region": "Vinho Verde",
    "country": "Portugal",
    "wines": [
      {
        "wine": "Granito Cru",
        "vintage": "2023",
        "style": "White",
        "dateTasted": "2025-11-01"
      }
    ],
    "slug": "luis-seabra",
    "descriptor": "Former Niepoort winemaker crafting terroir-pure wines",
    "philosophy": "After a decade as winemaker at Niepoort producing some of the Douro's most acclaimed wines, Luis Seabra launched his own winery in 2013 to make wines following his own vision. Working with just 8 hectares across Douro, Vinho Verde, and Dao, he champions old vines and native yeasts, eliminating all variability except soil to express pure terroir.",
    "founded": 2013,
    "winemaker": "Luís Seabra",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Natural Wine",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Ole & Obrigado importer profile",
      "Wineanorak.com feature article",
      "Eric Asimov, The New York Times"
    ]
  },
  {
    "name": "Mestres",
    "region": "Cava",
    "country": "Spain",
    "wines": [
      {
        "wine": "Clos Nostre Senyor",
        "vintage": "2015",
        "style": "Sparkling",
        "dateTasted": "2026-03-07"
      }
    ],
    "slug": "mestres",
    "descriptor": "Oldest family Cava house since 1312",
    "philosophy": "The Mestres family has been rooted in Penedes since 1312, with the winery inaugurated in 1861 and underground caves completed in 1925. Mestres registered the first Brut Nature as Visol in 1948 and was the first to register the word CAVA in 1959, establishing themselves as the most historically significant Cava producer.",
    "founded": 1312,
    "priceTier": "Moderate",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Mestres official website",
      "Spanish Wine Lover feature article",
      "Winewise producer profile"
    ]
  },
  {
    "name": "Pardas",
    "region": "Penedès",
    "country": "Spain",
    "wines": [
      {
        "wine": "Aspriu",
        "vintage": "2014",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "pardas",
    "descriptor": "Terroir-driven indigenous variety Penedes revival",
    "philosophy": "Established in 1996 by oenologist Ramon Parera and agronomist Jordi Arnan at the medieval Can Comas estate, Celler Pardas leads a new approach in Penedes focused on terroir and indigenous grapes. They work with very old Sumoll and Xarel.lo vines in the Anoia Valley and are members of Corpinnat, the collective brand championing terroir-driven sparkling wines.",
    "founded": 1996,
    "winemaker": "Ramón Parera & Jordi Arnan",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Natural Wine"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Grape Collective interview with Ramon Parera",
      "Bowler Wine producer profile",
      "Spanish Wine Lover feature article"
    ]
  },
  {
    "name": "Goliardo",
    "region": "Rías Baixas",
    "country": "Spain",
    "wines": [
      {
        "wine": "Tinto",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "goliardo",
    "descriptor": "Heritage red grape revivalist of Rias Baixas",
    "philosophy": "Goliardo is the label of fifth-generation winemaker Rodrigo Mendez of Bodegas Forjas del Salnes, who proved that Rias Baixas could produce world-class red wines from nearly lost varieties. He has revitalized Caino, Espadeiro, Loureiro, and Brancellao, producing at least 18 different bottlings from the coastal Val do Salnes subzone.",
    "winemaker": "Rodrigo Méndez",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Ole & Obrigado importer profile",
      "Spanish Wine Lover feature article",
      "Decanter review"
    ]
  },
  {
    "name": "Pedralonga",
    "region": "Rías Baixas",
    "country": "Spain",
    "wines": [
      {
        "wine": "Albariño",
        "vintage": "2024",
        "style": "White",
        "dateTasted": "2025-11-01"
      }
    ],
    "slug": "pedralonga",
    "descriptor": "Biodynamic old-vine Albarino on granite",
    "philosophy": "In 1982, Francisco Alfonso planted this seven-and-a-half-hectare cru on a pure granitic hillside ten miles from the Atlantic. Now run by his son Miguel, Pedralonga was founded as a winery in 1997, converting to biodynamic practices in 2007, using no chemicals, pesticides, or synthetic fertilizers, with partial whole-cluster fermentation.",
    "founded": 1997,
    "winemaker": "Miguel Alfonso",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Biodynamic",
      "Organic",
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Bowler Wine producer profile",
      "Wines of Galicia producer guide",
      "Pedralonga official website"
    ]
  },
  {
    "name": "Zárate",
    "region": "Rías Baixas",
    "country": "Spain",
    "wines": [
      {
        "wine": "El Palomar",
        "vintage": "2023",
        "style": "White",
        "dateTasted": "2026-01-03"
      }
    ],
    "slug": "z-rate",
    "descriptor": "Historic pre-phylloxera Albarino pioneer estate",
    "philosophy": "Founded in 1707, Zarate is home to Rias Baixas' oldest documented Albarino vineyard, El Palomar, planted in 1850. Seventh-generation Eulogio Pomares has shifted to regenerative and biodynamic farming since taking over in 2000, working the soil manually and making his own biodynamic teas while pioneering single-parcel Albarino bottlings.",
    "founded": 1707,
    "winemaker": "Eulogio Pomares",
    "priceTier": "Premium",
    "qualityTier": "Legendary",
    "tags": [
      "Biodynamic",
      "Organic",
      "Family-Owned",
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Rare Wine Co. producer profile",
      "Polaner Selections producer profile",
      "Wines of Galicia producer guide"
    ]
  },
  {
    "name": "Drew",
    "region": "Anderson Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Pinot Noir ‘The Fog-Eater’",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "drew",
    "descriptor": "Ridge-top Anderson Valley cool-climate specialist",
    "philosophy": "Jason and Molly Drew started Drew in 2000 with a clear pursuit: crafting cool-climate wines that express site distinction and traditional varietal character. Jason's training spans UC Santa Cruz viticulture, University of Adelaide oenology, and winemaking stints at Joseph Phelps, Corison, and Babcock. In 2004 they purchased a 26-acre ridge-top property overlooking Anderson Valley and the Pacific Ocean in the Mendocino Ridge appellation.",
    "founded": 2000,
    "winemaker": "Jason Drew",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Drew Wines official website (drewwines.com)",
      "i-WineReview feature article (2021)",
      "Bowler Wine producer profile"
    ]
  },
  {
    "name": "Caraccioli",
    "region": "California",
    "country": "USA",
    "wines": [
      {
        "wine": "Brut Rosé",
        "vintage": "2014",
        "style": "Sparkling",
        "dateTasted": "2024-09-15"
      }
    ],
    "slug": "caraccioli",
    "descriptor": "Santa Lucia Highlands methode traditionnelle specialist",
    "philosophy": "Founded in 2006 by the Caraccioli family, the winery's sparkling program was built by founding winemaker Michel Salgues, who spent most of his career at Roederer Estate in Anderson Valley. Salgues established the techniques that form the foundation of Caraccioli's Brut Cuvee and Brut Rose, both produced from Santa Lucia Highlands fruit. After Salgues's passing in 2017, his legacy continues under the direction of Scott Caraccioli.",
    "founded": 2006,
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Caraccioli Cellars official website (caracciolicellars.com)",
      "Santa Lucia Highlands Wine Artisans member profile",
      "Wine Industry Advisor feature (2020)"
    ]
  },
  {
    "name": "Etude",
    "region": "California",
    "country": "USA",
    "wines": [
      {
        "wine": "Pinot Noir ‘Heirloom’",
        "vintage": "2012",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "etude",
    "descriptor": "Carneros-rooted Pinot Noir and Cabernet house",
    "philosophy": "Founded in 1982 by Tony Soter, who named the winery after the musical term for a focused technical study. Soter's vision was to produce world-class Pinot Noir from the cool-climate Carneros region while also crafting Napa Valley Cabernet Sauvignon. Though Soter sold the winery in 2001 and departed in 2002, the estate continues to produce wines from its Carneros vineyards under corporate ownership.",
    "founded": 1982,
    "priceTier": "Premium",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Historic Estate",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "The Napa Wine Project winery profile",
      "California Winery Advisor profile",
      "Prince of Pinot winery profile"
    ]
  },
  {
    "name": "Lioco",
    "region": "California",
    "country": "USA",
    "wines": [
      {
        "wine": "Demuth Chardonnay",
        "vintage": "2016",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "lioco",
    "descriptor": "Minimalist California Chardonnay and Pinot Noir",
    "philosophy": "Conceived in 2005 in the alley behind Spago Beverly Hills by wine director Kevin O'Connor and wine salesman Matt Licklider, who were critical of the heavy-handed California wines of the day. LIOCO seeks nuance over sheer power, specializing in minimal-intervention Chardonnay, Pinot Noir, and Carignan from vineyards spanning five California counties. Matt and Sara Licklider assumed sole ownership in 2017.",
    "founded": 2005,
    "winemaker": "Matt Licklider",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Best Value",
      "Natural Wine"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "LIOCO Wine Company official website (liocowine.com)",
      "Skurnik Wines & Spirits producer profile",
      "Flintwines producer profile"
    ]
  },
  {
    "name": "Mantha Wine",
    "region": "California",
    "country": "USA",
    "wines": [
      {
        "wine": "Semillon",
        "vintage": "2022",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "mantha-wine",
    "descriptor": "Small-production California artisan winery",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Emerging"
    ],
    "trustBadge": "limited"
  },
  {
    "name": "Lenz",
    "region": "Long Island",
    "country": "USA",
    "wines": [
      {
        "wine": "Merlot",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": "2025-11-15"
      }
    ],
    "slug": "lenz",
    "descriptor": "Historic Long Island estate, French-style wines",
    "philosophy": "One of Long Island's pioneering wineries, originally planted in 1978 by Pat and Peter Lenz on a 30-acre farm in Peconic on the North Fork. The winery was joined in 1989 by winemaker Eric Fry, who presided over thirty years of quality improvements before his retirement. Lenz produces 100% estate-grown, French-style wines from its 70-acre vineyard, demonstrating Long Island's capacity for serious Merlot and Bordeaux-style wines.",
    "founded": 1978,
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Historic Estate",
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Lenz Winery official website (lenzwine.com)",
      "Wine Folly New York winery profile",
      "Northforker archives (Hargrave column, 2013)"
    ]
  },
  {
    "name": "Corison",
    "region": "Napa Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "St. Helena Cabernet",
        "vintage": "2018",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "corison",
    "descriptor": "Benchland Cabernet Sauvignon icon of Napa",
    "philosophy": "Founded in 1987 by Cathy Corison, one of Napa Valley's most respected Cabernet Sauvignon producers. After earning her MS in Enology from UC Davis and a decade at Chappellet Vineyard, Corison began buying grapes and barrels to craft her own vision of elegant, age-worthy Cabernet from benchland vineyards between Rutherford and St. Helena. Named San Francisco Chronicle Winemaker of the Year in 2011.",
    "founded": 1987,
    "winemaker": "Cathy Corison",
    "priceTier": "Premium",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Age-Worthy",
      "Historic Estate"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Corison Winery official website (corison.com)",
      "Wikipedia article on Cathy Corison",
      "Berry Bros & Rudd producer profile"
    ]
  },
  {
    "name": "Di Costanzo",
    "region": "Napa Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Cabernet Sauvignon Napa Valley Coombsville ‘Caldwell’",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "di-costanzo",
    "descriptor": "Single-vineyard Napa Cabernet of purity",
    "philosophy": "The independent wine project of husband and wife Erin and Massimo Di Costanzo, launched with the 2010 vintage. Massimo trained at Tignanello in Italy, with Adi Badenhorst in South Africa, and spent time as assistant winemaker at Screaming Eagle before working with Philippe Melka. Di Costanzo produces single-vineyard Napa Valley Cabernet Sauvignons emphasizing balance, elegance, and purity of fruit.",
    "founded": 2010,
    "winemaker": "Massimo Di Costanzo",
    "priceTier": "Luxury",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Di Costanzo official website (mdcwines.com)",
      "Club Oenologique feature article",
      "The Napa Wine Project winery profile"
    ]
  },
  {
    "name": "Matthiasson",
    "region": "Napa Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Village Cabernet",
        "vintage": "2022",
        "style": "Red",
        "dateTasted": "2025-11-01"
      }
    ],
    "slug": "matthiasson",
    "descriptor": "Napa's viticultural polymath and varietal explorer",
    "philosophy": "Co-founded in 2003 by Steve and Jill Matthiasson, the winery combines famous varieties with ones virtually unheard of in California to craft unique blends and varietal wines. Steve Matthiasson is one of Napa's top viticultural consultants, having worked with Araujo, Dalla Valle, Spottswoode, and Stag's Leap Wine Cellars. He is a co-author of the California Code of Sustainable Winegrowing and was named Winemaker of the Year by both Food and Wine Magazine and the San Francisco Chronicle.",
    "founded": 2003,
    "winemaker": "Steve Matthiasson",
    "priceTier": "Premium",
    "qualityTier": "Legendary",
    "tags": [
      "Family-Owned",
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Matthiasson Wines official website (matthiasson.com)",
      "Wikipedia article on Steve Matthiasson",
      "T. Edward Wines producer profile"
    ]
  },
  {
    "name": "Outward",
    "region": "San Luis Obispo Coast",
    "country": "USA",
    "wines": [
      {
        "wine": "Chardonnay ‘Bassi Vineyard’",
        "vintage": "2023",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "outward",
    "descriptor": "Biodynamic Central Coast coastal-influence specialist",
    "philosophy": "Founded in 2016 by Natalie Siddique and Ryan Pace, a couple who met while rock climbing -- the name honors their shared love of the outdoors. Ryan comes from a wine family (his father managed Stag's Leap Wine Cellars) and studied viticulture at Cal Poly. Outward farms about six acres across San Luis Obispo Coast and Santa Ynez Valley sites, sourcing organically farmed grapes from other coastal-influenced vineyards for small-lot, site-specific wines.",
    "founded": 2016,
    "winemaker": "Ryan Pace",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Organic",
      "Biodynamic",
      "Emerging"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Outward Wines official website (outwardwines.com)",
      "VinePair Next Wave Awards: Winery of the Year (2024)",
      "Wineanorak.com California exploration feature (2024)"
    ]
  },
  {
    "name": "Di Costanzo Costa",
    "region": "Santa Barbara",
    "country": "USA",
    "wines": [
      {
        "wine": "Pinot Noir Sta. Rita Hills ‘Bentrock’",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "di-costanzo-costa",
    "descriptor": "Di Costanzo's Sta. Rita Hills Pinot Noir project",
    "philosophy": "Costa is a wine line within Massimo Di Costanzo's portfolio, extending his single-vineyard philosophy to Sta. Rita Hills Pinot Noir. The debut 2021 vintage was sourced from Bentrock Vineyard, one of the most acclaimed sites in Santa Barbara County. The same winemaking principles of balance, elegance, and purity apply, with all grapes destemmed and punched down by hand in small-lot fermenters.",
    "founded": 2021,
    "winemaker": "Massimo Di Costanzo",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Di Costanzo official website wines page (mdcwines.com/wines)",
      "Hi-Time Wine Cellars product listing",
      "CellarTracker community notes for 2021 vintage"
    ]
  },
  {
    "name": "Âmevive",
    "region": "Santa Barbara",
    "country": "USA",
    "wines": [
      {
        "wine": "Sundrop",
        "vintage": "2024",
        "style": "White",
        "dateTasted": "2025-10-18"
      },
      {
        "wine": "Ravie",
        "vintage": "2024",
        "style": "Red",
        "dateTasted": "2025-10-18"
      }
    ],
    "slug": "mevive",
    "descriptor": "Regenerative organic Santa Barbara terroir wines",
    "philosophy": "Founded by Alice Anderson and her partner Topher de Felice, with a first vintage in 2019. The name translates from French as 'living soul.' Alice graduated from Cal Poly with a BS in Wine and Viticulture, then trained at Amisfield and Rippon in New Zealand and at Pierre Gaillard in the Northern Rhone. Amevive farms a historic Santa Barbara vineyard using regenerative organic practices.",
    "founded": 2019,
    "winemaker": "Alice Anderson",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Organic",
      "Emerging",
      "Natural Wine"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Amevive official website (amevivewine.com)",
      "Polaner Selections producer profile",
      "Indigo Wine importer interview with Alice Anderson"
    ]
  },
  {
    "name": "Marine Layer",
    "region": "Sonoma",
    "country": "USA",
    "wines": [
      {
        "wine": "Lyra Pinot Noir",
        "vintage": "2022",
        "style": "Red",
        "dateTasted": "2025-10-18"
      },
      {
        "wine": "Picpoul",
        "vintage": "2024",
        "style": "White",
        "dateTasted": "2025-10-18"
      }
    ],
    "slug": "marine-layer",
    "descriptor": "Sonoma Coast fog-belt Pinot and Chardonnay",
    "philosophy": "Founded by Baron Ziegler following the sale of his previous venture, Banshee Wines, to Foley Family Wines. Ziegler partnered with winemaker Rob Fischer, who brings over 20 years of experience across Napa, Sonoma, Santa Barbara, Oregon, and New Zealand. Marine Layer sources exclusively from top Sonoma Coast vineyards, with its first release from the 2018 vintage.",
    "founded": 2018,
    "winemaker": "Rob Fischer",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Emerging"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Marine Layer Wines official website (marinelayerwines.com)",
      "NorthBay biz feature article (2022)",
      "Wine Industry Advisor launch announcement (2021)"
    ]
  },
  {
    "name": "Baker Lane",
    "region": "Sonoma Coast",
    "country": "USA",
    "wines": [
      {
        "wine": "Syrah",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": "2025-11-01"
      },
      {
        "wine": "Viognier",
        "vintage": "2021",
        "style": "White",
        "dateTasted": "2025-11-15"
      }
    ],
    "slug": "baker-lane",
    "descriptor": "Organic Sonoma Coast Syrah and Viognier",
    "philosophy": "Founded in 2003 by Stephen Singer, a central figure of the Bay Area wine and food scene for over 40 years. Baker Lane is nestled in a hidden valley west of Sebastopol, producing meticulously crafted organic Syrah, Viognier, and Pinot Noir from the Sonoma Coast. Winemaker Greg Adams, trained at Cal Poly and UC Davis with over 25 years of vineyard experience at Flowers, Stags Leap, and Lynmar, oversees the winemaking.",
    "founded": 2003,
    "winemaker": "Greg Adams",
    "priceTier": "Premium",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic",
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Baker Lane Vineyards official website (bakerlanevineyards.com)",
      "Sonoma County Tourism listing",
      "Wine.com producer profile"
    ]
  },
  {
    "name": "Darling",
    "region": "Sonoma Coast",
    "country": "USA",
    "wines": [
      {
        "wine": "Pinot Gris ‘La Cruz Vineyard’",
        "vintage": "2022",
        "style": "White",
        "dateTasted": "2025-01-25"
      }
    ],
    "slug": "darling",
    "descriptor": "First-generation natural Sonoma Coast winemakers",
    "philosophy": "Launched in 2017 with just two barrels of Syrah by first-generation winemakers Tom and Ashley Darling. The self-taught couple produces natural wines showcasing Sonoma Coast terroir from prestigious vineyards using low-intervention methods. They moved from the east coast to California, driven by a shared passion for wine discovered while visiting Virginia wineries.",
    "founded": 2017,
    "winemaker": "Tom Darling",
    "priceTier": "Moderate",
    "qualityTier": "Emerging",
    "tags": [
      "Natural Wine",
      "Emerging",
      "Family-Owned"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Darling Wines official website (darlingwines.com)",
      "Petaluma Gap Q&A with Tom & Ashley Darling",
      "DallasWineChick.com feature article"
    ]
  },
  {
    "name": "Spider Chase",
    "region": "Sonoma Coast",
    "country": "USA",
    "wines": [
      {
        "wine": "Cabernet Sauvignon ‘Waterhorse Ridge’",
        "vintage": "2017",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "spider-chase",
    "descriptor": "Rare coastal Bordeaux varieties from Fort Ross-Seaview",
    "philosophy": "Spider Chase is a wine line by Unturned Stone Productions, founded in 2010 by Erin Mitchell and Randy Czech. The Spider Chase wines feature a field blend of Cabernet Sauvignon, Cabernet Franc, Merlot, Petit Verdot, and Malbec from Waterhorse Ridge Vineyard in Fort Ross-Seaview -- Bordeaux varietals that are extremely uncommon on the Sonoma Coast. These vineyards sit above the fog line in one of the most remote AVAs in California.",
    "founded": 2010,
    "winemaker": "Erin Mitchell and Randy Czech",
    "priceTier": "Premium",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Natural Wine",
      "Hard to Find"
    ],
    "trustBadge": "moderate",
    "sources": [
      "Unturned Stone Productions official website (unturnedstonewine.com)",
      "RAW WINE marketplace listing",
      "Back Room Wines Napa product listings"
    ]
  },
  {
    "name": "00 VGR",
    "region": "Willamette Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Pinot Noir",
        "vintage": "2019",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "00-vgr",
    "descriptor": "Luxury Burgundian-method Oregon Pinot specialist",
    "philosophy": "Founded by Chris and Kathryn Hermann, 00 Wines applies Burgundian techniques to Willamette Valley Pinot Noir and Chardonnay. Chris Hermann's background in international wine law and his late father Dr. Richard Hermann's botanical research at Oregon State University inform their meticulous approach. The winery sources fruit from top Eola-Amity Hills and Dundee Hills sites, fermenting with native yeasts in a gravity-flow facility.",
    "founded": 2015,
    "winemaker": "Chris Hermann",
    "priceTier": "Luxury",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Decanter reviews of 00 Wines VGR Pinot Noir (multiple vintages)",
      "Flatiron Wines NYC producer profile",
      "Wine.com winery profile"
    ]
  },
  {
    "name": "Ayres",
    "region": "Willamette Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Pinot Noir Ribbon Ridge ‘Pioneer’",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "ayres",
    "descriptor": "Ribbon Ridge estate Pinot Noir specialist",
    "philosophy": "Founded by Brad McLeroy, who trained under Veronique Drouhin at Domaine Drouhin Oregon during a six-year apprenticeship. Ayres grows 18 acres of Pinot Noir in Willakenzie soils on Ribbon Ridge, the smallest Willamette Valley sub-AVA. No herbicides or pesticides have ever been used on the property, and cover crops are employed to prevent erosion.",
    "founded": 2006,
    "winemaker": "Brad McLeroy",
    "priceTier": "Premium",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Family-Owned",
      "Organic"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Ayres Vineyard official website (ayresvineyard.com)",
      "Polaner Selections producer profile",
      "Oregon Wine Board listing"
    ]
  },
  {
    "name": "Crowley",
    "region": "Willamette Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Phoebe Chardonnay",
        "vintage": "2022",
        "style": "White",
        "dateTasted": "2026-01-03"
      }
    ],
    "slug": "crowley",
    "descriptor": "Meticulous small-lot Willamette Valley artisan",
    "philosophy": "Tyson Crowley launched his label in 2005 with just four barrels, training under early Willamette Valley pioneers at Erath, Brickhouse, J.K. Carriere, Archery Summit, and Cameron Winery. The winery works exclusively with sustainably and dry-farmed, family-owned vineyards, maintaining close grower relationships to produce terroir-driven Pinot Noir and Chardonnay with minimal intervention.",
    "founded": 2005,
    "winemaker": "Tyson Crowley",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Best Value",
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Crowley Wines official website (crowleywines.com)",
      "Wine Bulletin feature article",
      "E & R Wine Shop producer profile"
    ]
  },
  {
    "name": "Flâneur",
    "region": "Willamette Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Willamette Valley Chardonnay ‘Constantin’",
        "vintage": "2020",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "fl-neur",
    "descriptor": "Design-driven Oregon estate exploring rare varietals",
    "philosophy": "Founded in 2013 by former architecture firm owner Marty Doerschlag, Flâneur takes its name from the 19th-century French term for a leisurely wanderer. The portfolio includes single-vineyard Pinot Noirs, Chardonnays, and lesser-seen varietals like Gruner Veltliner and Aligote. Winemaking is guided by dry farming, organic practices, native yeasts, and minimal interventions.",
    "founded": 2013,
    "winemaker": "Grant Coulter",
    "priceTier": "Premium",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Organic"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Flâneur Wines official website (flaneurwines.com)",
      "Oregon Wine Board listing",
      "PR Newswire feature (2019)"
    ]
  },
  {
    "name": "Haden Fig",
    "region": "Willamette Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Juliette Chardonnay",
        "vintage": "2023",
        "style": "White",
        "dateTasted": "2025-11-01"
      }
    ],
    "slug": "haden-fig",
    "descriptor": "Dry-farmed Willamette Pinot Noir purist",
    "philosophy": "Founded by Erin Nuccio, who apprenticed under Russ Raney of Evesham Wood after discovering his passion for Oregon Pinot Noir while working in east coast wine retail and distribution. Nuccio made his first vintage in 2007 from dry-farmed, low-yielding Willamette Valley vineyards. The winery continues to share a close relationship with Evesham Wood in the Eola-Amity Hills.",
    "founded": 2007,
    "winemaker": "Erin Nuccio",
    "priceTier": "Moderate",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Best Value"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Evesham Wood & Haden Fig official website (eveshamwood.com)",
      "T. Edward Wines producer profile",
      "Prince of Pinot winery profile"
    ]
  },
  {
    "name": "J.K. Carriere",
    "region": "Willamette Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Antoinette",
        "vintage": "2021",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "j-k-carriere",
    "descriptor": "Parrett Mountain estate Pinot pioneer",
    "philosophy": "Established in 1999 by Jim Prosser, the winery is named after his two grandfathers, J.K. Prosser and Paul Carriere. Before founding his own label, Prosser worked for eight producers in four countries including Domaine Georges Roumier in Burgundy. The estate is centered on a 40-acre Parrett Mountain property planted in 2007, with winemaking emphasizing whole-cluster fermentation and long elevage.",
    "founded": 1999,
    "winemaker": "Jim Prosser",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Family-Owned",
      "Age-Worthy"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "J.K. Carriere official website (jkcarriere.com)",
      "Oregon Wine History Archive",
      "Polaner Selections producer profile"
    ]
  },
  {
    "name": "Leah Jorgensen",
    "region": "Willamette Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Oregon Vin Rouge ‘Tour Rain’",
        "vintage": "2020",
        "style": "Red",
        "dateTasted": ""
      }
    ],
    "slug": "leah-jorgensen",
    "descriptor": "Oregon's premier Loire-inspired Cabernet Franc producer",
    "philosophy": "Leah Jorgensen is a fourth-generation Oregonian and 20-plus-year wine industry veteran who followed her passion for Loire Valley varieties to become Oregon's leading Cabernet Franc specialist. Her wines, centered around Cabernet Franc grown in Southern Oregon, are crafted with Old World sensibility while expressing their own distinct regional character. Named one of Food & Wine's '15 Women in Wine to Watch' in 2018.",
    "founded": 2011,
    "winemaker": "Leah Jorgensen",
    "priceTier": "Moderate",
    "qualityTier": "Well-Regarded",
    "tags": [
      "Emerging",
      "Family-Owned"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Leah Jorgensen Cellars official website (leahjorgensencellars.com)",
      "Food & Wine '15 Women in Wine to Watch' (March 2018)",
      "Crushed Grape Chronicles producer profile"
    ]
  },
  {
    "name": "Morgen Long",
    "region": "Willamette Valley",
    "country": "USA",
    "wines": [
      {
        "wine": "Chardonnay",
        "vintage": "2021",
        "style": "White",
        "dateTasted": ""
      }
    ],
    "slug": "morgen-long",
    "descriptor": "Oregon's singular Willamette Valley Chardonnay devotee",
    "philosophy": "Seth Morgen Long is the first and only Oregon winemaker exclusively focused on Willamette Valley Chardonnay. After fifteen years in the restaurant industry and formative work at Domaine de Montille in Burgundy, he began his own production in 2014. His intense focus on balance, reduction, acidity, and fruit development creates site-sensitive Chardonnays with energy and longevity.",
    "founded": 2014,
    "winemaker": "Seth Morgen Long",
    "priceTier": "Premium",
    "qualityTier": "Highly Acclaimed",
    "tags": [
      "Hard to Find"
    ],
    "trustBadge": "well-documented",
    "sources": [
      "Morgen Long official website (morgenlong.com)",
      "Polaner Selections producer profile",
      "Beaune Imports producer profile"
    ]
  }
];
