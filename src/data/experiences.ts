export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  span: string; // Tailwind grid span for editorial masonry layout
}

export const FEATURED_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-peaks",
    title: "The Sacred Sanctuaries & Himalayan Peaks",
    category: "High Altitude Horizons",
    description:
      "Gaze upon 7,000-meter giants—Nanda Devi, Kamet, Chaukhamba, and Trishul—standing sentinel over the Garhwal skies.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    id: "exp-meadows",
    title: "Endless Bugyals (Alpine Meadows)",
    category: "High Pastures",
    description:
      "Vast expanses of velvet green turf rolling toward infinity, carpeted in wild alpine flowers during spring and pristine snow in winter.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: "exp-forests",
    title: "Primeval Oak & Rhododendron Canopies",
    category: "Forest Trails",
    description:
      "Wander through moss-draped ancient forests where scarlet rhododendrons ignite the slopes and mountain streams sing.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    id: "exp-campsites",
    title: "Starlit Wilderness Campsites",
    category: "Wild Solitude",
    description:
      "Fall asleep beneath unpolluted Himalayan skies glittering with the Milky Way, warmed by freshly brewed mountain teas and quiet stories.",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-6 md:row-span-1",
  },
  {
    id: "exp-culture",
    title: "Living Garhwali Mountain Culture",
    category: "Heritage & People",
    description:
      "Step into stone-and-timber hamlets, savor wholesome organic mountain grains, and share smiles with generous mountain folk.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop",
    span: "md:col-span-6 md:row-span-1",
  },
];
