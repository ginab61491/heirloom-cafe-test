export interface EventMenuItem {
  course: string;
  wine: string;
}

export interface HeirloomEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  time: string;
  price: string;
  status: 'upcoming' | 'archived';
  category: 'tasting' | 'class' | 'winemaker-dinner' | 'special-event' | 'wine-offer';
  description: string;
  longDescription?: string;
  recurring?: string;
  reservationUrl?: string | null;
  highlight?: boolean;
  menu?: EventMenuItem[];
}

export const events: HeirloomEvent[] = [
  {
    id: 'saturday-tasting-apr-2026',
    title: 'Saturday Morning Tasting',
    date: '2026-04-18',
    time: '11:00 AM - 2:00 PM',
    price: '$20',
    status: 'upcoming',
    category: 'tasting',
    description: 'Saturday Morning Tastings are back for the summer! Approximately 15 different bottles arranged around the room. $20 gets you a glass to self-pour and taste at your own pace. Cheese available (cash donations appreciated). Arrive by 1:30 PM to taste the full lineup. No ceremony, no pressure — just great wine.',
    recurring: 'Third Saturday of each month through August (May 16, Jun 20, Jul 18, Aug 15)',
    reservationUrl: 'https://resy.com/cities/san-francisco-ca/venues/heirloom-cafe',
    highlight: true,
  },
  {
    id: 'gonet-medeville-dinner',
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
    id: 'elk-cove-dinner',
    title: 'Winemaker Dinner: Elk Cove Vineyards',
    date: '2026-04-06',
    time: 'Evening',
    price: 'Ticketed',
    status: 'archived',
    category: 'winemaker-dinner',
    description: 'Elk Cove Vineyards of the Willamette Valley at Heirloom. A multi-course winemaker dinner featuring wines from one of Oregon\'s pioneering Pinot Noir estates.',
  },
  {
    id: 'wine-classes-spring-2026',
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
    id: 'valentines-2026',
    title: "Valentine's Day Dinner",
    date: '2026-02-14',
    time: 'Evening',
    price: 'Special prix fixe',
    status: 'archived',
    category: 'special-event',
    description: 'An exquisite Valentine\'s dinner at Heirloom Cafe. Special multi-course prix fixe with wine pairings.',
  },
  {
    id: 'nye-2025',
    title: "New Year's Eve Celebration",
    date: '2025-12-31',
    time: 'Evening',
    price: 'Special prix fixe',
    status: 'archived',
    category: 'special-event',
    description: 'Ring in 2026 at Heirloom with a special New Year\'s Eve dinner.',
  },
  {
    id: 'burgundy-offer-spring-2026',
    title: 'Limited Time Burgundy Double Offer',
    date: '2026-03-19',
    time: '',
    price: '',
    status: 'archived',
    category: 'wine-offer',
    description: 'Two great Burgundy producers, two great offers to ring in Spring.',
  },
];
