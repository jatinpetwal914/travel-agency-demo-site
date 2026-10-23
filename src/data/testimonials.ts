export interface Testimonial {
  id: string;
  name: string;
  location: string;
  trekName: string;
  quote: string;
  date: string;
  rating: number;
  avatar?: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Arjun & Radhika Sharma",
    location: "Bengaluru, India",
    trekName: "Kuari Pass Trek",
    quote:
      "Standing at Kuari Pass facing the towering golden walls of Nanda Devi at sunrise was life-altering. The Hinter Roots expedition team handled acclimatization with utmost care, and the warmth of the camp crew in sub-zero winds was unmatched.",
    date: "October 2025",
    rating: 5,
    verified: true,
  },
  {
    id: "test-2",
    name: "Dr. Vikramaditya Sen",
    location: "New Delhi, India",
    trekName: "Dayara Bugyal Trek",
    quote:
      "Trekking with Hinter Roots felt genuinely different from commercial group operators. Their local Garhwali guides knew every ridge, medicinal herb, and bird call. The leave-no-trace ethics were practiced meticulously.",
    date: "December 2025",
    rating: 5,
    verified: true,
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    location: "Vienna, Austria",
    trekName: "Har Ki Dun Valley Trek",
    quote:
      "The ancient wooden hamlets of Osla and the colossal amphitheatre of Swargarohini left me breathless. Clean camps, wholesome food, and the safety protocols were top-tier throughout the 7 days.",
    date: "May 2025",
    rating: 5,
    verified: true,
  },
  {
    id: "test-4",
    name: "Kavita Nair",
    location: "Mumbai, India",
    trekName: "Chopta–Tungnath & Chandrashila",
    quote:
      "Our first Himalayan trek as a family, and Hinter Roots made it effortless. Watching the crimson sunrise from Chandrashila at 13,100 ft was deeply spiritual and unforgettable.",
    date: "April 2025",
    rating: 5,
    verified: true,
  },
];
