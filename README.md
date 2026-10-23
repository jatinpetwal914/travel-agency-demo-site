# HINTER ROOTS — Premium Himalayan Trekking & Adventure Travel Website

> **"Find Your Way Beyond the Ordinary."**  
> *Alternative Tagline: "Rooted in Nature. Driven by Adventure."*

A production-ready, cinematic Himalayan trekking and adventure travel web application built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**. 

Designed to recreate the visual luxury, edge-to-edge photography, and interactive destination-slider browsing experience of high-end travel brands, showcasing the Garhwal Himalayas across nine authentic expeditions.

---

## 🏔️ The 9 Curated Himalayan Expeditions

1. **Kuari Pass Trek** (`/treks/kuari-pass`) — The Curzon Trail with panoramic vistas of Mt. Nanda Devi, Kamet, and Dronagiri (12,516 ft).
2. **Kedarkantha Trek** (`/treks/kedarkantha`) — India's premier winter pyramid summit inside Govind National Park (12,500 ft).
3. **Chopta–Tungnath & Chandrashila Trek** (`/treks/chopta-tungnath`) — Ancient sacred Shiva shrine and the Moon Rock summit (13,100 ft).
4. **Har Ki Dun Valley Trek** (`/treks/har-ki-dun`) — Mythological Valley of the Gods with Swargarohini views and historic wooden villages (11,800 ft).
5. **Dayara Bugyal Trek** (`/treks/dayara-bugyal`) — 28 sq km of undulating velvet alpine meadows beneath Bandarpoonch (12,057 ft).
6. **Gulabi Kantha Trek** (`/treks/gulabi-kantha`) — Pristine rhododendron ridge trails overlooking the Yamunotri headwaters (10,800 ft).
7. **Rudranath Trek** (`/treks/rudranath`) — The evocative fourth Kedar rock sanctuary and primeval Kedarnath sanctuary forests (11,800 ft).
8. **Rudranath + Kalpeshwar Trek** (`/treks/rudranath-kalpeshwar`) — Dual-shrine sacred sanctuary loop through Urgam Valley (12,500 ft).
9. **Roopkund Trek** (`/treks/roopkund`) — Legendary high-altitude expedition across Bedni Bugyal and Ali Bugyal beneath Mt. Trishul (15,750 ft).

---

## 🎨 Design System & Palette

- **Deep Forest Green:** `#102820` (Primary luxury dark backdrop)
- **Dark Mountain Green:** `#18392F` (Supporting surface tint & card background)
- **Warm Ivory:** `#F4F0E7` (Body text & secondary heading accents)
- **Soft White:** `#FFFFFF` (Primary titles & contrast highlights)
- **Muted Stone:** `#B8B8A8` (Meta descriptions, subheadings, & subtle borders)
- **Restrained Antique Gold Accent:** `#C6A66B` (Badges, active slides, CTAs, & highlights)
- **Typography:** Classic luxury serif (`Cinzel`) for destination headings paired with modern geometric sans-serif (`Plus Jakarta Sans`) for readable editorial descriptions and navigation.

---

## ⚡ Key Features

- **Cinematic Destination Slider Hero:**
  - Full-viewport landscape photography with atmospheric gradients.
  - Oversized uppercase destination typography with staggered text reveals.
  - Floating upcoming destination cards on the right with elevation badges and click-to-activate transitions.
  - Circular arrow controls, numeric slide tracker (`01 / 05`), auto-play with interaction pause, touch swipe, and keyboard navigation (`←` / `→`).
  - Destination quick-switcher pills.
- **Trek Discovery & Grid Filter:** Interactive difficulty filter pills (`All`, `Easy to Moderate`, `Moderate`, `Moderate to Strenuous`, `Strenuous`) displaying cover photographs, altitudes, durations, best seasons, and detail links.
- **Dedicated Trek Pages for All 9 Treks:**
  - Full-width hero banner and breadcrumb navigation.
  - Verified stats bar (altitude, duration, grade, distance, basecamp, price).
  - Highlights checklist with mountain badges.
  - Interactive day-by-day itinerary timeline with distances, altitudes, and descriptions.
  - Fitness and physical preparation guides.
  - Inclusions and exclusions two-column breakdown.
  - Comprehensive packing checklists (clothing, footwear, gear, essentials).
  - Mountain safety and Leave No Trace environmental stewardship guidelines.
  - Trek-specific FAQs.
  - Contextual sticky booking form + direct WhatsApp chat CTA.
  - Related trek recommendations.
- **Working Booking & Inquiry System:**
  - Client-side and server-side validation.
  - Rate limiting & anti-spam protections.
  - File-based persistence in `.data/inquiries.json` (ready for Supabase database sync).
  - Generates verifiable inquiry reference IDs (e.g., `HR-17747676`).
  - Instant WhatsApp pre-filled chat integration with trek name, date, and party size.
- **Admin Dashboard (`/admin`):**
  - Live inspection of submitted inquiries with status tags (`new`, `contacted`, `confirmed`).
  - Central trek catalog preview and data inspector.
  - Centralized FAQ and verified testimonial manager.
- **Full SEO & Accessibility:**
  - Dynamic Open Graph and Twitter metadata for all pages.
  - Automated XML sitemap (`/sitemap.xml`) and `robots.txt`.
  - Accessible ARIA labels and semantic markup.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v18.17+` or `v20+` or `v22+`
- npm or pnpm or yarn

### 2. Run in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Run
```bash
npm run build
npm start
```

---

## 🛠️ Project Structure

```
├── .data/
│   └── inquiries.json           # Local storage for inquiries
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind directives, fonts, & custom styles
│   │   ├── layout.tsx           # Global RootLayout with Navbar, Footer & WhatsApp
│   │   ├── page.tsx             # Homepage with all 9 master sections
│   │   ├── sitemap.ts           # Dynamic XML sitemap
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   ├── about/page.tsx       # Brand story & mountain philosophy
│   │   ├── admin/page.tsx       # Inquiries & catalog management console
│   │   ├── contact/page.tsx     # Direct inquiry & basecamp information
│   │   ├── policies/page.tsx    # Privacy, terms, and cancellation policy
│   │   ├── treks/
│   │   │   ├── page.tsx         # Full 9-trek portfolio catalog
│   │   │   └── [slug]/page.tsx  # Dynamic individual trek detail pages
│   │   └── api/
│   │       └── inquiries/
│   │           └── route.ts     # Inquiries submission API & rate limiter
│   ├── components/
│   │   ├── Navbar.tsx           # Transparent sticky navigation
│   │   ├── HeroDestinationSlider.tsx # Cinematic destination slider
│   │   ├── DestinationImageCard.tsx # Floating cards on hero slider
│   │   ├── SliderControls.tsx   # Slider arrows & progress bar
│   │   ├── TrekCard.tsx         # Individual trek card with stats
│   │   ├── TrekGrid.tsx         # Filterable trek discovery section
│   │   ├── WhyHinterRoots.tsx   # Core brand differentiators
│   │   ├── FeaturedExperiences.tsx # Editorial photography showcase
│   │   ├── HowToBook.tsx        # 4-step booking process
│   │   ├── Testimonials.tsx     # Verified trekker reflections
│   │   ├── FAQAccordion.tsx     # Frequently asked questions
│   │   ├── BookingInquiryForm.tsx # Interactive validated inquiry form
│   │   ├── InquiryModal.tsx     # Popup modal for fast booking
│   │   ├── WhatsAppFloatingButton.tsx # Floating WhatsApp widget
│   │   └── Footer.tsx           # Final CTA banner and footer
│   ├── data/
│   │   ├── treks.ts             # Central repository of all 9 treks & brand info
│   │   ├── faqs.ts              # FAQ data source
│   │   ├── testimonials.ts      # Testimonial data source
│   │   └── experiences.ts       # Editorial experiences data
│   └── types/
│       └── trek.ts              # TypeScript interface definitions
├── .env.example                 # Example configuration template
├── tailwind.config.js           # Custom color palette and font definitions
└── package.json
```

---

## ⚙️ Configuration & Content Management

All trek itineraries, descriptions, altitudes, prices, and photographs are centralized in:
👉 `src/data/treks.ts`

To edit company details or WhatsApp phone numbers, update `BRAND_INFO` in `src/data/treks.ts`:
```ts
export const BRAND_INFO = {
  name: "HINTER ROOTS",
  tagline: "Find Your Way Beyond the Ordinary.",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210", // Phone number without '+' or spaces
  email: "adventures@hinterroots.com",
  baseOffice: "Joshimath & Rishikesh, Uttarakhand, India",
};
```
