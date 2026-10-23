export interface ItineraryDay {
  day: number;
  title: string;
  distance?: string;
  altitude?: string;
  duration?: string;
  description: string;
  highlights?: string[];
}

export interface TrekFAQ {
  question: string;
  answer: string;
}

export interface Trek {
  id: string;
  slug: string;
  name: string;
  heroHeadline: string;
  tagline: string;
  description: string;
  longDescription: string;
  region: string;
  state: string;
  difficulty: "Easy" | "Easy to Moderate" | "Moderate" | "Moderate to Strenuous" | "Strenuous";
  durationDays: number;
  durationString: string;
  maxAltitudeFeet: number;
  maxAltitudeString: string;
  bestSeason: string;
  distanceKm: number;
  distanceString: string;
  basecamp: string;
  startingPrice?: string;
  heroImage: string;
  cardImage: string;
  galleryImages: string[];
  sliderPriority: number; // 1 to 5 for initial hero slider, remaining for extended
  featured: boolean;
  highlights: string[];
  itinerary: ItineraryDay[];
  fitnessRequirement: string;
  inclusions: string[];
  exclusions: string[];
  packingList: {
    category: string;
    items: string[];
  }[];
  faqs: TrekFAQ[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredTrek: string;
  departureDate: string;
  travelerCount: number;
  message?: string;
  consent: boolean;
}

export interface InquirySubmission extends InquiryFormData {
  id: string;
  createdAt: string;
  status: "new" | "contacted" | "confirmed" | "archived";
}
