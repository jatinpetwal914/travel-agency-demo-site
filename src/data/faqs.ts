export interface FAQItem {
  id: string;
  category: "General" | "Booking & Policies" | "Preparation" | "Safety";
  question: string;
  answer: string;
}

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    id: "faq-beginners",
    category: "General",
    question: "Which trek should beginners choose?",
    answer:
      "For those stepping onto Himalayan trails for the first time, we recommend Kedarkantha (celebrated for its gradual gradient and iconic winter summit), Dayara Bugyal (gentle rolling alpine meadows with modest daily ascents), or Chopta–Tungnath & Chandrashila (a shorter 4-day itinerary with spectacular rewards). Each offers dependable trail infrastructure, gradual acclimatization, and manageable walking hours.",
  },
  {
    id: "faq-included",
    category: "General",
    question: "What is included in a trek package?",
    answer:
      "Standard Hinter Roots packages include certified wilderness trek leaders, licensed local mountain guides, all-weather high-altitude camping tents (twin sharing), sub-zero sleeping bags with thermal fleece liners, nutritious vegetarian mountain meals (breakfast, packed/hot lunch, tea & snacks, dinner), emergency medical kits with pulse oximeters and oxygen cylinders, and all necessary state forest department permits.",
  },
  {
    id: "faq-packing",
    category: "Preparation",
    question: "What should I pack for a Himalayan trek?",
    answer:
      "Essential equipment includes waterproof high-ankle trekking boots with vibram grip, a 40–50L backpack with rain cover, a three-layer clothing system (merino wool/synthetic thermals, mid-layer fleece, and a down jacket rated for negative temperatures), windproof/waterproof shell, UV400 polarized sunglasses, headlamp with spare batteries, and personal water purification/bottles. Detailed packing checklists are provided on each trek detail page.",
  },
  {
    id: "faq-booking",
    category: "Booking & Policies",
    question: "How do I book a trek with Hinter Roots?",
    answer:
      "Booking follows a straightforward four-step process: (1) Browse our catalog and select your preferred trek and dates, (2) Submit an inquiry form or message us directly via WhatsApp, (3) Receive an itinerary consultation, availability confirmation, and medical declaration checklist, and (4) Confirm your reservation through our secure booking invoice.",
  },
  {
    id: "faq-weather",
    category: "Safety",
    question: "What happens if weather conditions change during the trek?",
    answer:
      "Mountain weather in the Himalayas can be dynamic. Our trek leaders monitor local meteorological updates daily and coordinate with base stations. In case of unexpected blizzards, heavy rain, or impassable trails, itineraries may be adjusted, delayed, or rerouted to a safe alternate ridge to prioritize team safety above summit goals.",
  },
  {
    id: "faq-custom",
    category: "Booking & Policies",
    question: "Are private or customized treks available?",
    answer:
      "Yes. Hinter Roots specializes in private, bespoke expeditions for families, photography groups, alpine clubs, and corporate teams. Custom departures allow flexible pace, private camps, tailored culinary requests, and personalized pickup/drop transfers.",
  },
  {
    id: "faq-cancellation",
    category: "Booking & Policies",
    question: "What is the cancellation and refund policy?",
    answer:
      "Cancellations made 30 days or more prior to departure receive an 85% refund (or 100% trek voucher credit valid for 12 months). Cancellations between 15–29 days prior receive a 50% voucher credit. Cancellations made within 14 days of departure are non-refundable due to pre-booked mountain permits, mule logistics, and guide reservations. Detailed policy terms are accessible in our Policies section.",
  },
];
