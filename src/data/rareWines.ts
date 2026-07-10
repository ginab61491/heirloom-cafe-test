export interface RareWine {
  name: string;
  price: number;
}

export interface WineGroup {
  producer?: string; // named producer block, e.g. "Jacques Selosse, Avize"
  wines: RareWine[];
}

export interface WineSection {
  section: string;
  groups: WineGroup[];
}

export interface WineCategory {
  category: string;
  sections: WineSection[];
}

export const rareWineList: WineCategory[] = [
  {
    category: 'Sparkling',
    sections: [
      {
        section: 'Sparkling',
        groups: [
          {
            wines: [
              { name: "2015 Cava Gran Reserva Brut Nature 'Clos Nostre Seyor,' Mestres", price: 125 },
              { name: "2009 Cava Gran Reserva Brut Nature 'Clos Damiana,' Mestres", price: 200 },
            ],
          },
        ],
      },
      {
        section: 'Champagne',
        groups: [
          {
            wines: [
              { name: "B '18 Rosé Extra Brut 1er Cru 'Anthocyanes,' Pascal Doquet", price: 155 },
              { name: "B '10 Côte des Bar Brut 'Prestige,' Réaut", price: 170 },
              { name: "2011 Côte des Bar Extra Brut 'Sol Dièse Sans Soufre,' Réaut", price: 215 },
              { name: "2002 Brut Nature 'Sensation,' Vincent Couche", price: 280 },
              { name: "2015 Extra Brut Grand Cru '1522,' Philipponnat", price: 300 },
              { name: "2013 Extra Brut Grand Cru 'Clos des Goisses,' Philipponnat", price: 500 },
            ],
          },
        ],
      },
      {
        section: 'Champagne — Blanc de Blancs',
        groups: [
          {
            wines: [
              { name: "2015 Grand Cru Mesnil sur Oger, Michel Gonet", price: 165 },
              { name: "N.V. Brut À Epernay 'Craie,' Saint-Chamant", price: 180 },
              { name: "B '15 Côte des Bar Extra Brut 'Merci Natures,' Réaut", price: 200 },
              { name: "2014 Extra Brut 1er Cru Blanc de Blancs 'Chaillots Gillis,' Maillart", price: 215 },
              { name: "2010 Extra Brut 1er Cru 'Côte,' Domaine les Monts Fournois", price: 240 },
              { name: "2015 Brut Grand Cru, Brigitte Fallon", price: 275 },
              { name: "N.V. Brut Grand Cru 'Avysia,' Brigitte Fallon", price: 275 },
              { name: "B '20 Extra Brut 'Les Pierrières – 48m,' Ulysse Collin", price: 450 },
            ],
          },
        ],
      },
      {
        section: 'Champagne — Blanc de Noirs',
        groups: [
          {
            wines: [
              { name: "N.V. Extra Brut 1er Cru Blanc de Noirs 'Montchenot,' Maillart", price: 165 },
              { name: "B '17 Extra Brut Grand Cru 'Diapason,' Pascal Doquet", price: 200 },
              { name: "2012 Extra Brut, Roger Coulon", price: 250 },
              { name: "2021 Roses de Jeanne 'Côte de Val Vilaine,' Bouchard", price: 275 },
              { name: "B '20 Extra Brut 'Les Maillons – 48m,' Ulysse Collin", price: 425 },
            ],
          },
          {
            producer: 'Jacques Selosse, Avize',
            wines: [
              { name: "N.V. Extra Brut Blanc de Noirs Ville sur Arce 'Largillier,' Guillaume", price: 650 },
              { name: "N.V. Extra Brut Blanc de Blancs Grand Cru 'V.O.'", price: 700 },
              { name: "N.V. Extra Brut 1er Cru Lieux Dits Mareuil-sur-Ay 'Sous le Mont'", price: 1000 },
              { name: "N.V. Extra Brut Grand Cru Lieux Dits Ambonnay 'Le Bout du Clos'", price: 1100 },
              { name: "2013 Extra Brut 1er Cru 'Millésime'", price: 2200 },
            ],
          },
          {
            producer: 'Bérêche & Fils, À Ludes',
            wines: [
              { name: "N.V. Brut Réserve VV", price: 115 },
              { name: "2020 Extra Brut Pinot Munier 'Rive Gauche'", price: 180 },
              { name: "2019 Rosé 'Campania Remensis'", price: 185 },
              { name: "2020 Blanc de Blancs Ludes 1er Cru 'Les Beaux Regards'", price: 210 },
              { name: "2015 Extra Brut Ludes 1er Cru 'Le Cran'", price: 325 },
              { name: "2015 Extra Brut Grand Cru 'Aÿ'", price: 400 },
            ],
          },
        ],
      },
    ],
  },
  {
    category: 'White',
    sections: [
      {
        section: 'Loire & Bordeaux',
        groups: [
          {
            wines: [
              { name: "2024 Anjou Blanc, Thibaud Boudignon", price: 105 },
              { name: "2022 Anjou 'Clau de Nell,' Anne Claude Leflaive", price: 115 },
              { name: "2021 Savennières 'Les Vieux Clos,' Joly", price: 125 },
              { name: "2023 Bordeaux Blanc 'Marie-Cécile,' Château le Puy", price: 145 },
              { name: "2003 Vouvray Demi-Sec 'Clos Naudin'", price: 160 },
              { name: "2020 Saumur 'Clos Romans,' Domaine des Roches Neuves", price: 165 },
              { name: "2002 Vouvray Moelleux 'Clos du Bourg,' Huet", price: 175 },
              { name: "2020 Vin de France 'Panthalassa,' Fosse-Sèche", price: 180 },
              { name: "2023 Bordeaux Blanc 'Les Champs Libres,' Lafleur", price: 185 },
              { name: "2014 Anjou Blanc, Thibaud Boudignon", price: 200 },
              { name: "2005 Vouvray Moelleux 1ère Trie 'Clos du Bourg,' Huet", price: 225 },
              { name: "2016 Blanc Fumé de Pouilly, Dagueneau", price: 250 },
            ],
          },
          {
            producer: 'Alphonse Mellot, Sancerre',
            wines: [
              { name: "2021 Sancerre 'La Demoiselle'", price: 140 },
              { name: "2013 Sancerre 'Les Romains'", price: 200 },
              { name: "2010 Sancerre 'La Moussière'", price: 230 },
              { name: "2010 Sancerre 'La Demoiselle'", price: 275 },
            ],
          },
        ],
      },
      {
        section: 'Burgundy — Chablis',
        groups: [
          {
            wines: [
              { name: "2018 Chablis, Vincent Dauvissat", price: 170 },
              { name: "2018 Chablis Grand Cru 'Vaudésir,' Michel", price: 180 },
              { name: "2012 Chablis Grand Cru 'Blanchot,' Defaix", price: 190 },
              { name: "2019 Chablis 1er Cru 'Vaillons,' Vincent Dauvissat", price: 240 },
              { name: "2015 Chablis Grand Cru 'Les Preuses,' Vincent Dauvissat", price: 425 },
              { name: "2020 Chablis 1er Cru 'Forêt,' Raveneau", price: 550 },
              { name: "2020 Chablis 1er Cru 'Montée de Tonnerre,' Raveneau", price: 625 },
            ],
          },
        ],
      },
      {
        section: 'Burgundy — Côte d\'Or',
        groups: [
          {
            wines: [
              { name: "2022 Bourgogne Blanc 'Les Champlains,' Bize", price: 92 },
              { name: "2021 Mâcon-Cruzille 'Les Genièvrières,' Guillot-Broux", price: 110 },
              { name: "2021 Bourgogne Blanc, Antoine Lepetit de la Bigne", price: 125 },
              { name: "2022 Savigny-les-Beaune 1er Cru 'Aux Vergelesses,' Bize", price: 215 },
              { name: "2014 Meursault 1er Cru 'Santenot,' Bitouzet-Prieur", price: 275 },
              { name: "2023 Chassagne-Montrachet 'Chambrées'", price: 295 },
              { name: "2020 Meursault-Blagny 1er Cru Monopole 'La Genelotte,' Chérisey", price: 350 },
              { name: "2017 Meursault 1er Cru 'Charmes,' Bitouzet-Prieur", price: 350 },
              { name: "2023 Meursault, Domaine Coche-Dury", price: 1300 },
            ],
          },
          {
            producer: 'Pierre-Yves Colin-Morey, Chassagne-Montrachet',
            wines: [
              { name: "2022 Bourgogne Blanc", price: 95 },
              { name: "2021 Bourgogne 'Au Bout du Monde'", price: 115 },
              { name: "2022 Chassagne-Montrachet 'VV'", price: 240 },
              { name: "2022 Meursault", price: 275 },
            ],
          },
          {
            producer: 'Jean-Marc Pillot, Chassagne-Montrachet',
            wines: [
              { name: "2023 Montagny 1er Cru 'Les Gouresses'", price: 110 },
              { name: "2020 Chassagne-Montrachet 'Les Masures'", price: 170 },
              { name: "2019 Chassagne-Montrachet 1er Cru 'Les Macherelles'", price: 240 },
              { name: "2019 Chassagne-Montrachet 1er Cru 'Clos Saint Marc'", price: 350 },
              { name: "2017 Chevalier-Montrachet Grand Cru", price: 775 },
            ],
          },
          {
            producer: 'Jacques Carillon, Puligny-Montrachet',
            wines: [
              { name: "2020 Chassagne-Montrachet", price: 180 },
              { name: "2018 Puligny-Montrachet", price: 230 },
              { name: "2015 Chassagne-Montrachet 1er Cru 'Les Macherelles'", price: 350 },
              { name: "2011 Puligny-Montrachet 1er Cru 'Les Perrières'", price: 425 },
            ],
          },
          {
            producer: 'Gerard Prudhon, Saint-Aubin',
            wines: [
              { name: "2019 Saint-Aubin 1er Cru 'En Remilly'", price: 86 },
              { name: "2017 Saint-Aubin 1er Cru 'En Remilly'", price: 96 },
              { name: "2020 Saint-Aubin 1er Cru 'Chatenière'", price: 105 },
              { name: "2020 Chassagne-Montrachet 1er Cru 'Les Chenevottes'", price: 115 },
              { name: "2019 Puligny-Montrachet 'Les Enseignères'", price: 145 },
              { name: "2018 Puligny-Montrachet 1er Cru 'La Garenne'", price: 160 },
            ],
          },
        ],
      },
      {
        section: 'Jura, Rhône & Alsace',
        groups: [
          {
            wines: [
              { name: "2021 Arbois Chardonnay 'En Flandre,' Domaine de la Touraize", price: 100 },
              { name: "2024 Alsace Pinot Blanc 'L'abeille et le Papillon,' Yura", price: 120 },
              { name: "N.V. Arbois-Pupillin Savagnin, Domaine de la Renardière", price: 130 },
              { name: "2018 Côtes du Rhône Blanc 'Les Peyrouses,' Gilles", price: 130 },
              { name: "2023 Gigondas Blanc 'Clos des Hospices,' Domaine Santa Duc", price: 140 },
              { name: "2009 Riesling 'Frédéric Émile,' Trimbach", price: 165 },
              { name: "2013 Arbois 'Vin Jaune,' Puffeney", price: 225 },
            ],
          },
        ],
      },
      {
        section: 'Germany & Italy',
        groups: [
          {
            wines: [
              { name: "2015 Sauvignon Blanc Venezia Giulia, Kante", price: 130 },
              { name: "2016 Timorasso 'Ça Va Sans Dire,' Cascina Baricchi", price: 155 },
              { name: "2019 Riesling 'Abts E® GG,' Keller", price: 550 },
            ],
          },
        ],
      },
      {
        section: 'North America',
        groups: [
          {
            wines: [
              { name: "2023 Sauvignon Blanc Mendocino 'Lolonis,' Lioco", price: 92 },
              { name: "2022 Eola-Amity Hills Chardonnay 'Koosah,' Granville", price: 125 },
              { name: "2023 Chardonnay Russian River 'Wester Reach,' DuMol", price: 130 },
              { name: "2022 Chardonnay Santa Cruz Mts 'Kimari,' Lioco", price: 130 },
              { name: "2023 Chardonnay Eola-Amity Hills, Niew Vineyards", price: 135 },
              { name: "2023 Chardonnay West Sonoma Coast 'Marena,' Ceritas", price: 145 },
              { name: "2013 Chardonnay Sonoma 'Hanzell,' Lioco", price: 145 },
            ],
          },
        ],
      },
    ],
  },
  {
    category: 'Red',
    sections: [
      {
        section: 'Burgundy',
        groups: [
          {
            wines: [
              { name: "2021 Chorey-Les-Beaune, Tollot-Beaut", price: 130 },
              { name: "2023 Bourgogne Rouge, Marquis d'Angerville", price: 140 },
              { name: "2020 Savigny-Les-Beaune, Bize", price: 145 },
              { name: "2021 Savigny-Les-Beaune 1er Cru 'Les Lavieres,' Tollot-Beaut", price: 175 },
              { name: "2017 Gevrey-Chambertin VV, Harmand-Geoffroy", price: 175 },
              { name: "2018 Savigny-Les-Beaune 'Aux Grands Liards,' Bize", price: 180 },
              { name: "2013 Corton Grand Cru 'Bressandes,' Tollot-Beaut", price: 190 },
              { name: "2016 Volnay 1er Cru 'Pitures,' Bitouzet-Prieur", price: 220 },
              { name: "2017 Savigny-Les-Beaune 1er Cru 'Les Marconnets,' Bize", price: 260 },
              { name: "2013 Grand Cru Mazis-Chambertin, Harmand-Geoffroy", price: 950 },
              { name: "2022 'Grands Échézeaux,' Domaine de la Romanée-Conti", price: 3000 },
              { name: "2022 'La Tâche - Monopole,' Domaine de la Romanée-Conti", price: 5000 },
            ],
          },
          {
            producer: 'Edmond Cornu, Ladoix-Serrigny',
            wines: [
              { name: "2016 Ladoix 1er Cru 'Le Bois Roussot'", price: 84 },
              { name: "2013 Ladoix 1er Cru 'La Corvée'", price: 115 },
              { name: "2010 Aloxe-Corton 1er Cru 'Les Valozières'", price: 160 },
              { name: "2010 Corton Grand Cru 'Bressandes'", price: 215 },
            ],
          },
          {
            producer: 'Régis Forey, Vosne-Romanée',
            wines: [
              { name: "2022 Bourgogne Rouge", price: 76 },
              { name: "2016 Morey-Saint-Denis", price: 160 },
              { name: "2014 Vosne-Romanée", price: 185 },
              { name: "2015 Nuits-Saint-Georges 1er Cru 'Les Perrières'", price: 260 },
              { name: "2012 Grand Cru Clos Vougeot", price: 675 },
            ],
          },
          {
            producer: 'Jerôme Chézeaux, Prémeaux-Prissey',
            wines: [
              { name: "2018 Nuits-Saint-Georges", price: 155 },
              { name: "2017 Vosne-Romanée", price: 175 },
              { name: "2017 Nuits-Saint-Georges 1er Cru 'Boudots'", price: 260 },
              { name: "2015 Vosne-Romanée 1er Cru 'Les Suchots'", price: 325 },
            ],
          },
          {
            producer: 'Hubert Lignier, Morey-Saint-Denis',
            wines: [
              { name: "2019 Bourgogne 'Grand Chaliot'", price: 125 },
              { name: "2021 Volnay", price: 175 },
              { name: "2015 Gevrey-Chambertin", price: 240 },
              { name: "2017 Morey-Saint-Denis 'Trilogie'", price: 275 },
              { name: "2018 Gevrey-Chambertin 'Les Seuvrées'", price: 295 },
              { name: "2021 Grand Cru Charmes-Chambertin", price: 1100 },
            ],
          },
          {
            producer: 'Ghislaine Barthod, Chambolle-Musigny',
            wines: [
              { name: "2018 Bourgogne Rouge 'Les Bon Batons'", price: 155 },
              { name: "2018 Chambolle-Musigny", price: 250 },
              { name: "2017 Chambolle-Musigny 1er Cru 'Les Baudes'", price: 360 },
              { name: "2009 Chambolle-Musigny 1er Cru 'Les Cras'", price: 650 },
            ],
          },
          {
            producer: 'Jean-Marie Fourrier, Gevrey-Chambertin',
            wines: [
              { name: "2017 Gevrey-Chambertin 'Vieilles Vignes'", price: 250 },
              { name: "2015 Gevrey-Chambertin 'Vieilles Vignes'", price: 325 },
              { name: "2011 Gevrey-Chambertin 1er Cru 'Clos Saint Jacques'", price: 1150 },
              { name: "2015 Griotte-Chambertin Grand Cru", price: 2250 },
            ],
          },
        ],
      },
      {
        section: 'Rhône Valley & Bordeaux',
        groups: [
          {
            wines: [
              { name: "2019 Saint-Joseph, Chave", price: 185 },
              { name: "2014 Côte-Rôtie 'La Chavaroche,' Levet", price: 240 },
              { name: "2014 Alpilles, Domaine de Trévallon", price: 275 },
              { name: "2010 Côte-Rôtie 'La Chavaroche,' Levet", price: 335 },
              { name: "2020 Cornas, Clape", price: 350 },
              { name: "2006 Châteauneuf-du-Pape (oenotheque), Château de Beaucastel", price: 350 },
              { name: "2017 Saint-Joseph 'Clos Florentin,' Chave", price: 375 },
              { name: "2018 Côte-Rôtie, Jamet", price: 400 },
              { name: "2015 Hermitage, Chave", price: 615 },
              { name: "2010 Cornas 'Reynard,' Allemand", price: 775 },
              { name: "2014 Pauillac, Château Chantecler", price: 250 },
              { name: "1989 Pauillac, Château Clerc Milon", price: 350 },
            ],
          },
        ],
      },
      {
        section: 'Germany',
        groups: [
          {
            wines: [
              { name: "2021 Mosel Spätburgunder Pinot Noir 'Ardoise,' Daniel Twardowski", price: 195 },
            ],
          },
        ],
      },
      {
        section: 'Italy',
        groups: [
          {
            wines: [
              { name: "2020 Sicilia Nero d'Avola Riserva 'Vrucara,' Feudo Montoni", price: 135 },
              { name: "2018 Barolo 'Massara,' Castello di Verduno", price: 145 },
              { name: "2013 Bramaterra, Le Pianelle", price: 160 },
              { name: "2017 Barbaresco Riserva 'Rose delle Casasse,' Cascina Baricchi", price: 180 },
              { name: "2016 Toscana Rosso 'Baron Ugo,' Monteraponi", price: 240 },
              { name: "2008 Barbaresco Riserva 'Quindicianni,' Cascina Baricchi", price: 270 },
              { name: "2018 'Le Pergole Torte,' Montevertine", price: 350 },
              { name: "2010 Barolo Riserva 'Vignarionda,' Oddero", price: 625 },
            ],
          },
          {
            producer: "Castell'in Villa, Siena, Tuscany",
            wines: [
              { name: "2017 Chianti Classico Riserva", price: 145 },
              { name: "2013 Chianti Classico Riserva", price: 200 },
              { name: "2006 Chianti Classico Riserva", price: 325 },
            ],
          },
          {
            producer: 'Ferrando Carema, Ivrea',
            wines: [
              { name: "2018 Carema 'Etichetta Nera'", price: 210 },
              { name: "2013 Carema 'Etichetta Nera'", price: 265 },
              { name: "2009 Carema 'Etichetta Nera'", price: 375 },
            ],
          },
          {
            producer: 'Fratelli Brovia, Castiglione Falletto, Barolo',
            wines: [
              { name: "2016 Barolo", price: 130 },
              { name: "2013 Barolo 'Villero'", price: 295 },
              { name: "2009 Barolo 'Ca'Mia'", price: 350 },
            ],
          },
          {
            producer: "Cantina Cappellano, Serralunga d'Alba, Barolo",
            wines: [
              { name: "2014 Nebbiolo d'Alba", price: 225 },
              { name: "2018 Barbera d'Alba", price: 250 },
              { name: "2015 Barolo 'Piè Rupestris'", price: 400 },
            ],
          },
        ],
      },
      {
        section: 'North America',
        groups: [
          {
            wines: [
              { name: "2011 Syrah Edna Valley 'Sonnies,' Qupé", price: 105 },
              { name: "2001 Merlot Napa Valley 'Reserve,' Havens", price: 135 },
              { name: "1998 Syrah Santa Maria Valley 'Los Olivos,' Qupé", price: 140 },
              { name: "2023 Pinot Noir Santa Cruz Mts 'Mindego Ridge,' Ceritas", price: 150 },
              { name: "1995 Cabernet Sauvignon 'Soleil,' Taken From Granite", price: 170 },
              { name: "2014 'Cain Five,' Cain", price: 180 },
              { name: "2013 Refosco Napa 'Matthiasson Vineyard,' Matthiasson", price: 190 },
              { name: "2006 'Cain Five,' Cain", price: 220 },
              { name: "2014 Napa Valley Red Wine, Matthiasson", price: 250 },
              { name: "2012 Cabernet Sauvignon 'Peter Martin Ray,' Ceritas", price: 350 },
            ],
          },
        ],
      },
    ],
  },
  {
    category: 'Magnums',
    sections: [
      {
        section: 'White',
        groups: [
          {
            wines: [
              { name: "2019 Muscadet Sèvre et Maine 'Clisson,' Pépière", price: 150 },
              { name: "2016 Meursault 1er Cru 'Perrières,' Bitouzet-Prieur", price: 575 },
              { name: "2018 Riesling 'Kirchspiel GG,' Keller", price: 675 },
            ],
          },
        ],
      },
      {
        section: 'Red',
        groups: [
          {
            wines: [
              { name: "2013 Vallée d'Aoste Fumin 'Vigne Merletta,' Grosjean", price: 170 },
              { name: "2013 Saint Joseph 'Cuvée Tour Joviac,' Becheras", price: 210 },
              { name: "2017 Côtes du Rhône 'Les Peyrouses,' Gilles", price: 265 },
              { name: "2016 Margaux, Château Moulin de Tricot", price: 285 },
              { name: "2011 Cabernet Sauvignon 'Clajeux,' Arnot-Roberts", price: 300 },
              { name: "2017 Pernand Vergelesses 1er Cru 'Ile des Vergelesses,' Rollin", price: 325 },
              { name: "2006 Rioja 'Viña Tondonia Reserva,' López de Heredia", price: 335 },
              { name: "2013 Cornas 'Granit 60,' Vincent Paris", price: 415 },
            ],
          },
        ],
      },
    ],
  },
]
