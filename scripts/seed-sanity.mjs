/**
 * Seed script — imports all current data into Sanity.
 * Run once from the project root:
 *   node scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client'
import { randomBytes } from 'crypto'

const key = () => randomBytes(6).toString('hex')

const client = createClient({
  projectId: 'b0dm3p64',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

// ─── Menu data ────────────────────────────────────────────────────────────────

const prixFixe = {
  price: 65,
  withPairings: 100,
  courses: [
    { dish: "Fennel, Napa cabbage, arugula, cara cara, walnuts, feta, chives, lemon vinaigrette", pairing: "2024 Douro Branco 'Redoma,' Niepoort" },
    { dish: "Liberty Farms duck confit, pea purée, farro, Nantes carrots, braised radish, dijon-roasted garlic", pairing: "2016 Gattinara 'Osso,' Monsecco" },
    { dish: "Polenta cake, whipped crème fraîche, vanilla-poached rhubarb", pairing: "2023 Tokaji 'Édes Cuvée,' 3 Gracia" },
  ],
}

const aLaCarte = [
  { name: "CA Caviar Company white sturgeon caviar 1oz, potato chips, crème fraîche, chives", price: 95 },
  { name: "Selection of domestic & imported cheeses, crostini", price: 18 },
  { name: "Artichoke soup, cashew cream, crispy artichokes, mint, lemon butter", price: 14 },
  { name: "Little gem lettuces, English peas, watermelon radish, sieved egg, Dijon vinaigrette, fine herbs", price: 18 },
  { name: "Chilled asparagus, charred spring onion ricotta, frisee, almonds, salsa rustica, pickled shallots", price: 20 },
  { name: "House smoked Mt. Lassen trout toast, sauce gribiche, watercress, pickled cauliflower", price: 20 },
  { name: "Hamachi crudo, chive aioli, crispy shallots, fresno chili, radish", price: 22 },
  { name: "Bacon and onion tart", price: 17 },
  { name: "House made fettuccini, morel mushrooms, English peas, leek cream, chives, Parmesan", price: 38 },
  { name: "Northern halibut, cauliflower puree, asparagus, maitake mushrooms, lemon, shallots", price: 42 },
  { name: "White wine braised short rib, butter beans, Bloomsdale spinach, harissa, bread crumbs", price: 42 },
  { name: "Nantes carrots, lime yogurt, almond salsa macha", price: 14 },
  { name: "Roasted garnet yams, romanesco, tahini, pickled fresno, salsa verde", price: 14 },
  { name: "Bernal Bakery country bread with Straus Creamery butter", price: 7 },
  { name: "Castelvetrano olives, Marcona almonds", price: 7 },
]

// ─── Wine data ────────────────────────────────────────────────────────────────

const wineList = [
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
]

// ─── Events data ──────────────────────────────────────────────────────────────

const events = [
  {
    title: 'Winemaker Dinner: Cathy and Grace Corison',
    date: '2026-08-03',
    time: '6:15 PM',
    price: '$250/person',
    status: 'upcoming',
    category: 'winemaker-dinner',
    highlight: true,
    reservationUrl: 'https://resy.com/cities/san-francisco-ca/venues/heirloom-cafe/events/cathy-and-grace-corison-dinner-2026-08-03',
    description: 'Cathy and Grace Corison join us for a winemaker dinner at Heirloom Café. Cathy Corison is one of the pivotal figures in California winemaking — in 1987 she became the first woman winemaker/proprietor in the Napa Valley. We have worked with her wines almost since Heirloom opened. We will taste through a selection of Corison wines ending with the famous Kronos Vineyard from 2005. Served family-style at communal tables; limited bar seating available on a first-come, first-served basis.',
    longDescription: 'Stephen writes: "I cannot think of a more quintessentially Napa wine than Corison Cabernet. Rather than a style belonging to the past, it is a style enmeshed in the present moment — non-interventionist winemaking that allows the terroir and vintage to have a voice. These wines are the only Napa Cabernet that I purchase every year. It is a privilege and an honor to host Cathy and Grace."',
    menu: [
      { course: 'local salmon/halibut crudo, basil aioli, pickled Fresno, crispy shallot', wine: '2024 Corazón Cabernet Sauvignon Rosé' },
      { course: 'baba ghanoush, tomatoes, cucumbers, onions / grilled squash and parmesan tart', wine: '2024 Corazón Wirz Vineyard Riesling / 2024 Corazón Moon Mountain Gewurztraminer' },
      { course: 'house smoked pork chop, broccoli di ciccio / spätzle, white wine crème fraîche', wine: '2022 Napa Valley Cabernet Sauvignon / 2018 Napa Valley Cabernet Sauvignon' },
      { course: 'bavette steak, roasted garlic whipped potatoes, creamed kale, steak jus', wine: '2009 Napa Valley Cabernet Sauvignon / 2012 Napa Valley Cabernet Sauvignon' },
      { course: 'aged clothbound cheddar, crostini', wine: '2005 Kronos Vineyard Cabernet Sauvignon' },
    ],
  },
  {
    title: 'Saturday Wine Tastings',
    date: '2026-07-19',
    time: '11:00 AM - 2:00 PM',
    price: '$20',
    status: 'upcoming',
    category: 'tasting',
    highlight: true,
    recurring: 'Third Saturday of each month through August (Jul 19, Aug 15)',
    description: 'Saturday Wine Tastings are back for the summer! Approximately 15 different bottles arranged around the room. $20 gets you a glass to self-pour and taste at your own pace. Cheese available (cash donations appreciated). Arrive by 1:30 PM to taste the full lineup. No ceremony, no pressure — just great wine.',
  },
  {
    title: 'Saturday Wine Tastings',
    date: '2026-08-15',
    time: '11:00 AM - 2:00 PM',
    price: '$20',
    status: 'upcoming',
    category: 'tasting',
    highlight: true,
    recurring: 'Third Saturday of each month through August (Jul 19, Aug 15)',
    description: 'Saturday Wine Tastings are back for the summer! Approximately 15 different bottles arranged around the room. $20 gets you a glass to self-pour and taste at your own pace. Cheese available (cash donations appreciated). Arrive by 1:30 PM to taste the full lineup. No ceremony, no pressure — just great wine.',
  },
  {
    title: 'Winemaker Dinner: Julie Gonet-Medeville',
    date: '2026-03-17',
    time: '6:15 PM',
    price: '$200/person',
    status: 'archived',
    category: 'winemaker-dinner',
    description: 'First winemaker dinner of 2026 featuring Julie Gonet-Medeville, whose family has been producing Sauternes since the early 1700s. Julie and husband Xavier Gonet are 8th generation Champagne.',
    menu: [
      { course: 'Hamachi crudo, herb aioli, crispy shallots', wine: 'N.V. Gonet-Medeville Grand Cru Extra Brut Rose' },
      { course: 'Frisee salad, shaved fennel, citrus, brioche croutons', wine: 'N.V. Gonet-Medeville 1er Cru Brut Tradition' },
      { course: 'House-made gnocchi, Dungeness crab, chives, white wine', wine: '2019 Bouzy Grand Cru Extra Brut Blanc de Noirs "Les Savelons"' },
      { course: 'Duck confit, pea puree, farro, roasted Nantes carrots', wine: '2022 Chateau Respide-Medeville Graves Rouge' },
      { course: 'Cheese, crostini', wine: '2022 Chateau Les Justices Sauternes' },
    ],
  },
  {
    title: 'Winemaker Dinner: Elk Cove Vineyards',
    date: '2026-04-06',
    time: 'Evening',
    price: 'Ticketed',
    status: 'archived',
    category: 'winemaker-dinner',
    description: "Elk Cove Vineyards of the Willamette Valley at Heirloom. A multi-course winemaker dinner featuring wines from one of Oregon's pioneering Pinot Noir estates.",
  },
  {
    title: 'Finding Your Subjective Self: Philosophy, Wine & Food',
    date: '2026-03-08',
    endDate: '2026-03-29',
    time: '2:00 PM - 4:00 PM',
    price: '$80',
    status: 'archived',
    category: 'class',
    description: 'A philosophy class merging aesthetics, wine, food, and subjective sensory experience. Stephen explores writings from Deleuze, Nietzsche, Adorno, Proust, and Husserl.',
    longDescription: 'Stephen writes: "Wine and food have stood not only as realms to be explored because of the joy and pleasure they bring through taste, but also as gate-keepers to a world of presence and subjective sensory experience. My hope for this class is to bring about an awareness, a way of thinking, that will let you learn something about yourself, and perhaps, humankind in general."',
  },
  {
    title: "Valentine's Day Dinner",
    date: '2026-02-14',
    time: 'Evening',
    price: 'Special prix fixe',
    status: 'archived',
    category: 'special-event',
    description: "An exquisite Valentine's dinner at Heirloom Cafe. Special multi-course prix fixe with wine pairings.",
  },
  {
    title: "New Year's Eve Celebration",
    date: '2025-12-31',
    time: 'Evening',
    price: 'Special prix fixe',
    status: 'archived',
    category: 'special-event',
    description: "Ring in 2026 at Heirloom with a special New Year's Eve dinner.",
  },
]

// ─── Import ───────────────────────────────────────────────────────────────────

async function seed() {
  console.log('Deleting existing data...')
  const types = ['prixFixeMenu', 'aLaCarteItem', 'wineList', 'event']
  for (const type of types) {
    const ids = await client.fetch(`*[_type == "${type}"]._id`)
    for (const id of ids) {
      await client.delete(id)
    }
  }
  console.log('✓ Cleared\n')

  // Prix fixe menu — add _key to each course
  console.log('Creating prix fixe menu...')
  await client.create({
    _type: 'prixFixeMenu',
    price: prixFixe.price,
    withPairings: prixFixe.withPairings,
    courses: prixFixe.courses.map(c => ({ _key: key(), ...c })),
  })
  console.log('✓ Prix fixe menu created')

  // À la carte items
  console.log('\nCreating à la carte items...')
  for (let i = 0; i < aLaCarte.length; i++) {
    await client.create({ _type: 'aLaCarteItem', ...aLaCarte[i], order: i + 1, available: true })
    console.log(`  ✓ ${aLaCarte[i].name.slice(0, 50)}...`)
  }

  // Wine list — add _key to sections and wines
  console.log('\nCreating wine list...')
  await client.create({
    _type: 'wineList',
    sections: wineList.map(section => ({
      _key: key(),
      category: section.category,
      wines: section.wines.map(w => ({ _key: key(), ...w })),
    })),
  })
  console.log('✓ Wine list created')

  // Events — add _key to menu courses
  console.log('\nCreating events...')
  for (const event of events) {
    await client.create({
      _type: 'event',
      ...event,
      menu: event.menu ? event.menu.map(m => ({ _key: key(), ...m })) : undefined,
    })
    console.log(`  ✓ ${event.title}`)
  }

  console.log('\nDone! All data imported into Sanity.')
}

seed().catch(err => {
  console.error('Error:', err.message)
  process.exit(1)
})
