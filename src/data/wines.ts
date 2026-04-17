export interface Wine {
  name: string;
  glass?: number;
  bottle: number;
  halfBottle?: boolean;
}

export interface WineSection {
  category: string;
  wines: Wine[];
}

export const wineList: WineSection[] = [
  {
    category: "Sparkling",
    wines: [
      { name: "N.V. Crémant d'Alsace, Bechtold", glass: 17, bottle: 68 },
      { name: "N.V. Champagne 1er, Bertrand-Delespierre", glass: 28, bottle: 112 },
      { name: "N.V. Champagne 1er, Maillart 375ml", bottle: 70, halfBottle: true },
      { name: "N.V. Champagne Rosé 1er, Dumez 375ml", bottle: 70, halfBottle: true },
    ],
  },
  {
    category: "Rosé",
    wines: [
      { name: "2023 Coste della Sesia Rosato, Le Pianelle", glass: 17, bottle: 68 },
    ],
  },
  {
    category: "White",
    wines: [
      { name: "2022 Grüner Edna Valley 'Paragon,' Tatomer", glass: 15, bottle: 60 },
      { name: "2024 Alsace Riesling 'd'étoiles,' Mittnacht", glass: 16, bottle: 64 },
      { name: "2021 Bianco Toscano 'Prunecchio,' Fattoria", glass: 16, bottle: 64 },
      { name: "2024 Douro Branco 'Redoma,' Niepoort", glass: 17, bottle: 68 },
      { name: "2023 Slovakia Furmint, Bott Frigyes", glass: 20, bottle: 80 },
      { name: "2022 Loire Chenin 'Arcane,' Fosse-Sèche", glass: 21, bottle: 84 },
      { name: "2023 Bourgogne Blanc, Buisson", glass: 22, bottle: 88 },
      { name: "2023 Mas de Daumas Gassac Blanc 375mL", bottle: 64, halfBottle: true },
    ],
  },
  {
    category: "Red",
    wines: [
      { name: "2019 Chinon 'L'Epée,' du Petit Thouars", glass: 15, bottle: 60 },
      { name: "2022 California Red 'Gravels,' Newfound", glass: 16, bottle: 64 },
      { name: "2023 Crozes Hermitage 'Papillon,' Robin", glass: 17, bottle: 68 },
      { name: "2022 Chianti Classico 'Fioraie,' Piemaggio", glass: 19, bottle: 76 },
      { name: "2024 Côtes du Jura Trousseau, Courbet", glass: 20, bottle: 80 },
      { name: "2022 Bourgogne 'Les Charmeaux,' Prudhon", glass: 21, bottle: 84 },
      { name: "2019 Margaux, Château Moulin de Tricot", glass: 23, bottle: 92 },
      { name: "2021 Willamette Pinot Noir, Raptor 375mL", bottle: 44, halfBottle: true },
    ],
  },
];
