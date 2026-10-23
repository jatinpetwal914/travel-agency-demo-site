import { Trek } from "@/types/trek";

export const TREKS: Trek[] = [
  {
    id: "kuari-pass",
    slug: "kuari-pass",
    name: "Kuari Pass Trek",
    heroHeadline: "KUARI PASS",
    tagline: "The Curzon Trail across the amphitheatre of Nanda Devi",
    description:
      "Walk through the magnificent Garhwal Himalayas, explore sweeping mountain meadows, and discover breathtaking views of the Himalayan peaks.",
    longDescription:
      "First pioneered by Lord Curzon in 1905, the Kuari Pass (12,516 ft) is one of the grandest vantage points in the Indian Himalayas. Located in the Chamoli district of Uttarakhand, this trek treats adventurers to unbroken 360-degree panoramas of India's second-highest summit, Nanda Devi (7,816 m), along with Kamet, Dronagiri, Hathi-Ghodi Parvat, and Trishul. The trail winds through ancient oak and rhododendron forests, opening up into golden bugyals (high-altitude alpine pastures) at Gorson and Khullara.",
    region: "Garhwal Himalayas",
    state: "Uttarakhand",
    difficulty: "Moderate",
    durationDays: 6,
    durationString: "6 Days / 5 Nights",
    maxAltitudeFeet: 12516,
    maxAltitudeString: "12,516 ft (3,815 m)",
    bestSeason: "Dec – Mar (Winter snow) | Apr – Jun & Sep – Nov (Clear skies)",
    distanceKm: 33,
    distanceString: "33 km",
    basecamp: "Joshimath / Dhak Village",
    startingPrice: "₹9,999*",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    ],
    sliderPriority: 1,
    featured: true,
    highlights: [
      "Unrivaled close-up views of Mt. Nanda Devi, Kamet, Dronagiri, and Trishul",
      "Expansive alpine walk across the famed Gorson Bugyal meadows",
      "Enchanting canopy walks through golden oak, deodar, and vibrant rhododendron woodlands",
      "Spectacular starlit wilderness campsites at Khullara and Chitrakantha",
      "Rich cultural immersion walking past terraced Himalayan hamlet villages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive from Haridwar / Rishikesh to Joshimath",
        distance: "255 km drive",
        altitude: "6,150 ft",
        duration: "9-10 hrs",
        description:
          "Ascend along the sacred confluence rivers (Panch Prayag) of the Alaknanda and Bhagirathi. Evening briefing in Joshimath with gear check.",
      },
      {
        day: 2,
        title: "Drive to Dhak Village (12 km) & Trek to Gulling Top Campsite",
        distance: "6 km trek",
        altitude: "9,600 ft",
        duration: "4-5 hrs",
        description:
          "Begin with an invigorating climb from Dhak through terraced wheat fields and apple orchards. Enter tranquil oak groves before reaching the open clearing at Gulling.",
      },
      {
        day: 3,
        title: "Trek from Gulling to Khullara Meadow",
        distance: "5 km trek",
        altitude: "11,120 ft",
        duration: "4 hrs",
        description:
          "Trek through thick conifer and rhododendron forests that give way to sweeping high-altitude pastures. Mt. Dronagiri dominates the skyline.",
      },
      {
        day: 4,
        title: "Summit Day: Khullara to Kuari Pass & return to Khullara",
        distance: "9 km trek",
        altitude: "12,516 ft",
        duration: "6-7 hrs",
        description:
          "Early morning push across the ridge toward Kuari Pass. Witness sunrise igniting Nanda Devi and Kamet in fiery crimson. Celebrate atop the pass before descending back to camp.",
      },
      {
        day: 5,
        title: "Trek Khullara to Auli via Gorson Bugyal; Drive to Joshimath",
        distance: "8 km trek + 15 km drive",
        altitude: "8,200 ft",
        duration: "5 hrs",
        description:
          "A gentle downhill traverse over the famous undulating Gorson Bugyal with ski slopes in view. Board vehicle from Auli to Joshimath for a warm farewell dinner.",
      },
      {
        day: 6,
        title: "Drive Joshimath to Rishikesh / Dehradun Departure",
        distance: "255 km drive",
        altitude: "1,120 ft",
        duration: "9 hrs",
        description:
          "Descend the Himalayan foothills with lasting memories and newfound mountain companions. Drop-off by late evening.",
      },
    ],
    fitnessRequirement:
      "Moderate physical stamina required. Recommended to be comfortable jogging 4-5 km in 30 minutes, or engaging in regular aerobic training for 3-4 weeks prior to departure.",
    inclusions: [
      "Experienced wilderness trek leader certified in Wilderness First Aid",
      "Local Himalayan support staff, mountain guides, and camp kitchen crew",
      "Nutritious, vegetarian, high-energy mountain meals (Breakfast, Packed Lunch, Evening Snacks, Dinner)",
      "High-grade all-weather four-season dome tents on twin sharing",
      "Sub-zero sleeping bags, insulated mats, dining tent, and dry toilet tents",
      "First aid medical kit, pulse oximeter, and emergency oxygen cylinder",
      "Forest department permits and camping entry passes",
    ],
    exclusions: [
      "Transportation to and from Haridwar/Rishikesh base (arranged on shared cost basis)",
      "Personal trekking gear (boots, trekking poles, down jackets, backpacks)",
      "Personal porterage / mule charges for carrying offloaded backpacks",
      "Travel or medical insurance covering high-altitude trekking",
      "Any costs arising from unforeseen road blocks, landslides, or early evacuation",
    ],
    packingList: [
      {
        category: "Footwear & Trek Gear",
        items: [
          "Sturdy ankle-support waterproof trekking boots with good vibram tread",
          "40-50L comfortable backpack with rain cover",
          "Adjustable trekking poles with carbide tips",
          "3-4 pairs of synthetic moisture-wicking and woolen socks",
        ],
      },
      {
        category: "Clothing & Layering",
        items: [
          "2 quick-dry base layer thermals (top and bottom)",
          "2-3 moisture-wicking synthetic t-shirts / trekking shirts",
          "1 heavy fleece or mid-layer jacket",
          "1 high-loft down jacket (rated for -5°C to -10°C)",
          "2 quick-dry trekking pants",
          "Waterproof windcheater / poncho",
          "Woolen beanie and UV protective sun cap",
          "Insulated fleece-lined waterproof gloves",
        ],
      },
      {
        category: "Essentials & Hygiene",
        items: [
          "Polarized sunglasses with 100% UV400 protection",
          "2 x 1L reusable water bottles or hydration bladder with insulation",
          "LED headlamp with extra batteries",
          "Biodegradable wet wipes, hand sanitizer, and SPF 50+ sunscreen",
          "Personal first-aid kit with altitude medication (Diamox upon medical advice)",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Kuari Pass suitable for first-time Himalayan trekkers?",
        answer:
          "Yes. With a well-structured itinerary and moderate daily ascents of 4-6 hours, Kuari Pass is widely considered one of the best introductory high-altitude treks for individuals with basic physical fitness.",
      },
      {
        question: "Can Kuari Pass be trekked in winter?",
        answer:
          "Absolutely. In winter (December through March), the trail transforms into a wonderland of knee-deep snow, offering one of India's premier snow-trekking experiences with crisp Himalayan views.",
      },
      {
        question: "What is the network connectivity on the trek?",
        answer:
          "Joshimath has dependable 4G mobile connectivity (Jio, Airtel). As you trek beyond Dhak Village toward Khullara, mobile signals become intermittent or absent. We carry satellite/radio communications for operations.",
      },
    ],
  },
  {
    id: "kedarkantha",
    slug: "kedarkantha",
    name: "Kedarkantha Trek",
    heroHeadline: "KEDARKANTHA",
    tagline: "The quintessential winter summit of the Western Garhwal",
    description:
      "Discover a legendary Himalayan summit trail through peaceful forests, beautiful campsites, and spectacular mountain scenery.",
    longDescription:
      "Perched inside the Govind Pashu Vihar National Park in Western Garhwal, Kedarkantha (12,500 ft) is famed as India's crown jewel winter summit. Famous for its symmetrical pyramid-shaped peak, the trail starts at Sankri village and weaves through mystical pine forests, frozen highland tarns like Juda Ka Talab, and pristine snow-clad clearings. The pre-dawn summit push rewards trekkers with an unforgettable 360-degree sunrise view over Swargarohini, Black Peak (Kalanag), and Bandarpoonch ranges.",
    region: "Govind Pashu Vihar",
    state: "Uttarakhand",
    difficulty: "Easy to Moderate",
    durationDays: 6,
    durationString: "6 Days / 5 Nights",
    maxAltitudeFeet: 12500,
    maxAltitudeString: "12,500 ft (3,810 m)",
    bestSeason: "Dec – Apr (Premier Snow Summit) | May – Jun & Oct – Nov",
    distanceKm: 20,
    distanceString: "20 km",
    basecamp: "Sankri Village",
    startingPrice: "₹8,999*",
    heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    ],
    sliderPriority: 2,
    featured: true,
    highlights: [
      "Thrilling pre-dawn summit ridge push to 12,500 ft with microspikes and gaiters",
      "The mystical frozen alpine lake of Juda Ka Talab ringed by towering pine trees",
      "Unbroken amphitheatre views of Bandarpoonch, Swargarohini, and Kalanag massifs",
      "Scenic campsites surrounded by thick snowfall and starry mountain skies",
      "Cozy wooden homestay culture in the historic gateway village of Sankri",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive from Dehradun to Sankri Basecamp",
        distance: "210 km drive",
        altitude: "6,400 ft",
        duration: "8-9 hrs",
        description:
          "Picturesque drive through Mussoorie, Nainbagh, and along the roaring Tons River into Govind National Park. Night stay at Sankri guest house.",
      },
      {
        day: 2,
        title: "Trek from Sankri to Juda Ka Talab",
        distance: "4 km trek",
        altitude: "9,100 ft",
        duration: "4-5 hrs",
        description:
          "Gradual ascent through fragrant cedar and pine forests. Reach the sacred mountain lake of Juda Ka Talab by afternoon.",
      },
      {
        day: 3,
        title: "Trek from Juda Ka Talab to Kedarkantha Base Camp",
        distance: "3.5 km trek",
        altitude: "10,600 ft",
        duration: "3 hrs",
        description:
          "A short but scenic climb above the tree line into wide snowy shoulders. Campsite offers grand views of the triangular summit.",
      },
      {
        day: 4,
        title: "Summit Push (12,500 ft) & Descent to Hargaon Camp",
        distance: "6 km trek",
        altitude: "12,500 ft",
        duration: "6-7 hrs",
        description:
          "Early 3:30 AM start under star-filled skies. Reach the Trishul-crowned summit at dawn for sunrise. Descend down to Hargaon clearing.",
      },
      {
        day: 5,
        title: "Trek from Hargaon to Sankri Village",
        distance: "6 km trek",
        altitude: "6,400 ft",
        duration: "4 hrs",
        description:
          "Leisurely descent through pine forests back into Sankri. Celebration dinner with authentic Garhwali hospitality.",
      },
      {
        day: 6,
        title: "Drive from Sankri to Dehradun Departure",
        distance: "210 km drive",
        altitude: "1,466 ft",
        duration: "8-9 hrs",
        description:
          "Morning departure following the Tons and Yamuna valleys back to Dehradun Railway Station / Airport.",
      },
    ],
    fitnessRequirement:
      "Accessible for beginners with decent stamina. 3-4 weeks of brisk walking, climbing stairs, or cycling is ideal preparation.",
    inclusions: [
      "Certified mountain guides, cooks, and wilderness safety staff",
      "Microspikes and gaiters for safe winter snow trekking",
      "All-weather high-altitude tents and sleeping bags rated to -10°C",
      "Warm, wholesome mountain meals prepared fresh at every camp",
      "Govind Wildlife Sanctuary permits and forest toll fees",
    ],
    exclusions: [
      "Transport from Dehradun to Sankri and back (arranged collaboratively)",
      "Offloading fees if you require mules/porters for your personal rucksack",
      "Trekking gear rental (can be hired in Sankri)",
      "Travel insurance",
    ],
    packingList: [
      {
        category: "Clothing",
        items: [
          "Down feather jacket rated for freezing temperatures",
          "Thermal innerwear (top + bottom)",
          "Fleece jackets and windproof trekking pants",
          "Waterproof insulated snow gloves and inner fleece gloves",
          "Woolen cap and balaclava",
        ],
      },
      {
        category: "Gear",
        items: [
          "50L backpack with sturdy waist belt",
          "Good ankle-length snow-ready trekking boots",
          "UV 400 snow sunglasses to prevent snow blindness",
          "LED Headlamp with extra lithium batteries",
        ],
      },
    ],
    faqs: [
      {
        question: "When does Kedarkantha receive peak snowfall?",
        answer:
          "Snowfall generally starts around mid-December and remains deep across the trail and summit until late April.",
      },
      {
        question: "Is there electricity at the campsites?",
        answer:
          "No, there is no electricity once you leave Sankri basecamp. We advise carrying a 10,000–20,000 mAh power bank kept warm inside your sleeping bag.",
      },
    ],
  },
  {
    id: "chopta-tungnath",
    slug: "chopta-tungnath",
    name: "Chopta–Tungnath & Chandrashila Trek",
    heroHeadline: "CHOPTA TUNGNATH",
    tagline: "To the world's highest Shiva shrine and the Moon Rock summit",
    description:
      "Experience scenic Himalayan trails, alpine landscapes, and the unforgettable journey toward one of the region's celebrated mountain shrines.",
    longDescription:
      "Often referred to as the 'Mini Switzerland of Uttarakhand', Chopta (8,790 ft) serves as the idyllic trailhead to Tungnath (12,073 ft)—the highest of the sacred Panch Kedar temples, dedicated over a millennium ago—and continues to the rocky pinnacle of Chandrashila (13,100 ft). The route takes you from deep rhododendron and deodar woodlands onto sweeping alpine slopes, culminating in a jaw-dropping amphitheatre of Himalayan giants including Nanda Devi, Chaukhamba, Trishul, and Kedar Dome.",
    region: "Rudraprayag / Chamoli",
    state: "Uttarakhand",
    difficulty: "Easy to Moderate",
    durationDays: 4,
    durationString: "4 Days / 3 Nights",
    maxAltitudeFeet: 13100,
    maxAltitudeString: "13,100 ft (4,000 m)",
    bestSeason: "Year-round | Apr – Jun (Rhododendron blooms) | Dec – Mar (Snow)",
    distanceKm: 12,
    distanceString: "12 km",
    basecamp: "Sari Village / Chopta",
    startingPrice: "₹7,499*",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1600&auto=format&fit=crop",
    ],
    sliderPriority: 3,
    featured: true,
    highlights: [
      "Pristine high-altitude sacred emerald lake of Deoriatal reflecting Mt. Chaukhamba",
      "The historic 1,000+ year-old Tungnath Temple at 12,073 ft",
      "Chandrashila 'Moon Rock' summit at 13,100 ft with 360-degree panorama of Garhwal peaks",
      "Spectacular spring rhododendron forests blooming in scarlet, pink, and white",
      "Rich birdwatching terrain hosting the vibrant Himalayan Monal (state bird of Uttarakhand)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive from Rishikesh to Sari Village; Trek to Deoriatal",
        distance: "190 km drive + 2.5 km trek",
        altitude: "7,840 ft",
        duration: "7 hrs drive + 2 hrs trek",
        description:
          "Drive along the Mandakini and Alaknanda rivers to Sari village. Short stone-paved climb to the emerald mirror waters of Deoriatal.",
      },
      {
        day: 2,
        title: "Trek Deoriatal to Chopta through Rohini Bugyal",
        distance: "14 km trek",
        altitude: "8,790 ft",
        duration: "6-7 hrs",
        description:
          "Enchanting ridge trek through thick oak, maple, and rhododendron canopies, crossing remote meadows to Chopta base.",
      },
      {
        day: 3,
        title: "Chopta to Tungnath & Chandrashila Summit (13,100 ft) & return",
        distance: "8 km trek",
        altitude: "13,100 ft",
        duration: "5-6 hrs",
        description:
          "Climb the well-laid stone trail to Tungnath Temple, then ascend the rocky ridge to Chandrashila peak. Return to Chopta camp.",
      },
      {
        day: 4,
        title: "Drive Chopta to Rishikesh / Dehradun Departure",
        distance: "205 km drive",
        altitude: "1,120 ft",
        duration: "7-8 hrs",
        description:
          "Scenic return journey through Rudraprayag and Devprayag sacred sangams to Rishikesh.",
      },
    ],
    fitnessRequirement:
      "Ideal for beginners, families, and photographers. A basic cardiovascular routine is sufficient.",
    inclusions: [
      "Certified mountain guides and support crew",
      "All meals from Day 1 dinner to Day 4 breakfast",
      "Tent / lodge accommodations in Sari / Deoriatal / Chopta",
      "Sanctuary permits and local ecological fees",
    ],
    exclusions: [
      "Transportation to and from Rishikesh",
      "Personal gear and porterage",
      "Temple donations or personal offerings",
    ],
    packingList: [
      {
        category: "Clothing",
        items: [
          "Windproof and fleece jacket",
          "Comfortable walking trousers",
          "Sunhat and warm woolen beanie",
          "Trekking shoes with decent grip",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Tungnath temple open during winter?",
        answer:
          "The temple doors are traditionally closed from November through April, but the trail to Tungnath and Chandrashila remains open and becomes a premier winter snow trekking destination.",
      },
    ],
  },
  {
    id: "har-ki-dun",
    slug: "har-ki-dun",
    name: "Har Ki Dun Valley Trek",
    heroHeadline: "HAR KI DUN",
    tagline: "The Valley of the Gods in the cradle of the Western Himalayas",
    description:
      "Explore a timeless Himalayan valley surrounded by mountain villages, forests, rivers, and extraordinary natural beauty.",
    longDescription:
      "Har Ki Dun (11,800 ft), or the 'Valley of the Gods', is steeped in ancient Indian mythology as the historic trail taken by the Pandavas on their ascent to heaven. Nestled deep inside the Tons River valley near the border of Himachal Pradesh, this cradle-shaped hanging valley offers an enchanting glimpse into remote Himalayan life. You will cross ancient timber-and-stone villages like Osla and Gangad, traversing golden meadows, roaring glacial streams, and looking up at the imposing sheer face of Mt. Swargarohini and Jaundhar Glacier.",
    region: "Garhwal / Tons Valley",
    state: "Uttarakhand",
    difficulty: "Moderate",
    durationDays: 7,
    durationString: "7 Days / 6 Nights",
    maxAltitudeFeet: 11800,
    maxAltitudeString: "11,800 ft (3,600 m)",
    bestSeason: "Apr – Jun (Lush spring) | Sep – Dec (Crisp autumn & snow)",
    distanceKm: 47,
    distanceString: "47 km",
    basecamp: "Sankri Village",
    startingPrice: "₹11,499*",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
    ],
    sliderPriority: 4,
    featured: true,
    highlights: [
      "Dramatic close encounters with the sacred multi-tiered massif of Swargarohini",
      "Crossing centuries-old traditional Himalayan wooden villages of Osla, Gangad, and Taluka",
      "Vast alpine river valley dotted with wild walnut groves and golden wheat terraces",
      "Optional exploration to the edge of the dramatic Jaundhar Glacier basin",
      "Unique heritage and wood-carved architecture of the Someshwar / Duryodhana temple in Osla",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive from Dehradun to Sankri",
        distance: "210 km drive",
        altitude: "6,400 ft",
        duration: "8-9 hrs",
        description:
          "Scenic mountain drive through Govind Pashu Vihar sanctuary to our Sankri basecamp.",
      },
      {
        day: 2,
        title: "Drive Sankri to Taluka (12 km); Trek to Pauni Garaat",
        distance: "10 km trek",
        altitude: "8,200 ft",
        duration: "5-6 hrs",
        description:
          "Follow the Supin river gorge along shaded paths lined with chestnut, walnut, and pine trees.",
      },
      {
        day: 3,
        title: "Trek Pauni Garaat to Kalkattiyadhar via Osla Village",
        distance: "8 km trek",
        altitude: "9,800 ft",
        duration: "5 hrs",
        description:
          "Cross the historic bridge near Osla. Experience mountain village life before emerging onto the high grassy spur of Kalkattiyadhar.",
      },
      {
        day: 4,
        title: "Trek Kalkattiyadhar to Har Ki Dun Valley & return",
        distance: "10 km trek",
        altitude: "11,800 ft",
        duration: "6-7 hrs",
        description:
          "Ascend into the grand amphitheatre of Har Ki Dun. Stand directly in front of the colossal face of Swargarohini and Hata Peak.",
      },
      {
        day: 5,
        title: "Trek Kalkattiyadhar to Pauni Garaat",
        distance: "8 km trek",
        altitude: "8,200 ft",
        duration: "4 hrs",
        description:
          "Leisurely descent down the valley with time to interact with local weavers and artisans in Osla.",
      },
      {
        day: 6,
        title: "Trek Pauni Garaat to Taluka; Drive to Sankri",
        distance: "10 km trek + 12 km drive",
        altitude: "6,400 ft",
        duration: "5 hrs",
        description:
          "Final trek stretch beside the gushing Supin River. Vehicle pickup at Taluka back to Sankri.",
      },
      {
        day: 7,
        title: "Drive Sankri to Dehradun Departure",
        distance: "210 km drive",
        altitude: "1,466 ft",
        duration: "8-9 hrs",
        description: "Return to Dehradun by evening.",
      },
    ],
    fitnessRequirement:
      "Moderate endurance required due to sustained daily trail distances of 8-12 km. Prior cardiovascular fitness recommended.",
    inclusions: [
      "All meals, accommodations, and camping logistics",
      "Certified mountain guides, cooks, and helpers",
      "Forest sanctuary permits and fees",
      "Comprehensive first aid and oxygen cylinders",
    ],
    exclusions: [
      "Travel from Dehradun to Sankri return",
      "Personal equipment and offloading charges",
      "Insurance",
    ],
    packingList: [
      {
        category: "Essential",
        items: [
          "Comfortable broken-in trekking boots",
          "Warm thermal wear and fleece layers",
          "Raincoat / poncho",
          "Sun hat and polarized glasses",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Har Ki Dun open during monsoon?",
        answer:
          "We generally do not run Har Ki Dun during peak monsoon (July–August) due to swollen river crossings and road blockages. The post-monsoon autumn months of September to November are prime.",
      },
    ],
  },
  {
    id: "dayara-bugyal",
    slug: "dayara-bugyal",
    name: "Dayara Bugyal Trek",
    heroHeadline: "DAYARA BUGYAL",
    tagline: "Endless velvet alpine meadows beneath the Bandarpoonch massif",
    description:
      "Discover expansive alpine meadows, peaceful mountain trails, and panoramic views across the Garhwal Himalayas.",
    longDescription:
      "Dayara Bugyal (12,057 ft) is considered one of the two most magnificent high-altitude alpine meadows (bugyals) in all of Asia. Spread over 28 square kilometers of gently rolling highland turf in the Uttarkashi district, Dayara feels like an endless green ocean in summer and transforms into a boundless white snow carpet in winter. The panorama from the Bakaria Top summit treats you to sweeping vistas of Bandarpoonch (6,316 m), Black Peak, Gangotri massifs, and Srikantha.",
    region: "Uttarkashi",
    state: "Uttarakhand",
    difficulty: "Easy to Moderate",
    durationDays: 5,
    durationString: "5 Days / 4 Nights",
    maxAltitudeFeet: 12057,
    maxAltitudeString: "12,057 ft (3,675 m)",
    bestSeason: "May – Nov (Green carpets & flowers) | Dec – Mar (Pristine snow)",
    distanceKm: 22,
    distanceString: "22 km",
    basecamp: "Raithal Village",
    startingPrice: "₹8,499*",
    heroImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
    ],
    sliderPriority: 5,
    featured: true,
    highlights: [
      "28 square kilometers of boundless rolling alpine pastureland",
      "Spectacular view of Bandarpoonch summit towering straight overhead",
      "Sunrise from Bakaria Top, the highest point of Dayara Bugyal at 12,057 ft",
      "Charming basecamp experience in the traditional Garhwali stone village of Raithal",
      "One of the friendliest introductory treks for children, families, and mountain photographers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive from Dehradun to Raithal Basecamp",
        distance: "185 km drive",
        altitude: "7,100 ft",
        duration: "7 hrs",
        description:
          "Drive along the Bhagirathi river through Uttarkashi and Bhatwari to the idyllic hamlet of Raithal.",
      },
      {
        day: 2,
        title: "Trek Raithal to Gui Campsite",
        distance: "4.5 km trek",
        altitude: "9,500 ft",
        duration: "4 hrs",
        description:
          "Gentle ascent under lush oak and rhododendron forest canopy. Arrive at Gui meadow surrounded by shepherd huts (chhanis).",
      },
      {
        day: 3,
        title: "Trek Gui to Dayara Bugyal Campsite",
        distance: "3.5 km trek",
        altitude: "10,800 ft",
        duration: "3 hrs",
        description:
          "Break out of the tree line into the vast open meadows of Dayara. Watch grazing cattle and panoramic mountain horizons.",
      },
      {
        day: 4,
        title: "Explore Bakaria Top (12,057 ft) & descend to Gui / Raithal",
        distance: "7 km trek",
        altitude: "12,057 ft",
        duration: "5 hrs",
        description:
          "Climb to the ridge apex of Bakaria Top for an overwhelming 360-degree panorama of Garhwal giants. Descend to Raithal.",
      },
      {
        day: 5,
        title: "Drive Raithal to Dehradun Departure",
        distance: "185 km drive",
        altitude: "1,466 ft",
        duration: "7 hrs",
        description: "Descend to Dehradun with unforgettable memories.",
      },
    ],
    fitnessRequirement:
      "Beginner-friendly. Suitable for novice trekkers with normal mobility and light training.",
    inclusions: [
      "Certified guide, cook, and camp logistics",
      "High-quality camping gear and warm sub-zero sleeping bags",
      "All meals from Day 1 dinner to Day 5 breakfast",
      "Forest sanctuary entry permits",
    ],
    exclusions: [
      "Transport to and from Dehradun",
      "Personal porterage and gear",
      "Insurance",
    ],
    packingList: [
      {
        category: "Clothing",
        items: [
          "Trekking shoes, fleece jacket, windbreaker, woolen cap, sun hat, UV sunglasses",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Dayara Bugyal good for winter snow treks?",
        answer:
          "Yes! In winter, the gentle slopes of Dayara Bugyal become one of the top natural snowfields in India, ideal for snow camping and beginner winter mountaineering.",
      },
    ],
  },
  {
    id: "gulabi-kantha",
    slug: "gulabi-kantha",
    name: "Gulabi Kantha Trek",
    heroHeadline: "GULABI KANTHA",
    tagline: "Hidden rhododendron ridges gazing upon the sacred Yamunotri peaks",
    description:
      "Traverse hidden rhododendron ridges, pristine meadows, and panoramic vantages facing the Yamunotri valley peaks.",
    longDescription:
      "Gulabi Kantha (10,800 ft) is an undiscovered gem nestled in the Rawai region of Uttarkashi, overlooking the sacred Yamunotri shrine valley. Famed for its dense blooms of wild pink rhododendrons during springtime, this untouched ridge trail remains free from commercial trekking crowds. Trekkers are rewarded with rare, unobstructed vantage points of Bandarpoonch, Kalindi, Shrikhand, and the Yamunotri mountain peaks.",
    region: "Yamunotri / Uttarkashi",
    state: "Uttarakhand",
    difficulty: "Easy to Moderate",
    durationDays: 5,
    durationString: "5 Days / 4 Nights",
    maxAltitudeFeet: 10800,
    maxAltitudeString: "10,800 ft (3,300 m)",
    bestSeason: "Apr – Jun (Vibrant blooming) | Oct – Dec (Snow & clear vistas)",
    distanceKm: 24,
    distanceString: "24 km",
    basecamp: "Hanumanchatti / Nisni",
    startingPrice: "₹8,999*",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    ],
    sliderPriority: 6,
    featured: false,
    highlights: [
      "Offbeat and pristine trail away from commercial crowds",
      "Abundant wild pink and scarlet rhododendron forests",
      "Unbroken sightlines of the Yamunotri and Bandarpoonch massifs",
      "Authentic Rawai hill village hospitality and customs",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive Dehradun to Hanumanchatti / Nisni Village",
        distance: "175 km drive",
        altitude: "6,800 ft",
        duration: "7 hrs",
        description: "Scenic valley drive through Barkot up to the Yamuna headwaters.",
      },
      {
        day: 2,
        title: "Trek Nisni to Seema Campsite",
        distance: "6 km trek",
        altitude: "8,900 ft",
        duration: "4 hrs",
        description: "Climb through ancient oak and pine forests into secluded mountain clearings.",
      },
      {
        day: 3,
        title: "Trek Seema to Gulabi Kantha Top & return to camp",
        distance: "8 km trek",
        altitude: "10,800 ft",
        duration: "5 hrs",
        description: "Ridge walk toward the summit ridge with sweeping views of the Yamunotri range.",
      },
      {
        day: 4,
        title: "Trek back to Nisni / Hanumanchatti",
        distance: "6 km trek",
        altitude: "6,800 ft",
        duration: "3 hrs",
        description: "Descend into the valley with village visits and cultural interactions.",
      },
      {
        day: 5,
        title: "Drive Hanumanchatti to Dehradun Departure",
        distance: "175 km drive",
        altitude: "1,466 ft",
        duration: "7 hrs",
        description: "Return transfer to Dehradun.",
      },
    ],
    fitnessRequirement: "Easy to moderate. Suitable for beginners with regular lifestyle activity.",
    inclusions: [
      "Professional Himalayan trek leaders and kitchen crew",
      "All meals and all-weather camping equipment",
      "Forest entry permissions",
    ],
    exclusions: ["Transit to basecamp", "Personal items", "Insurance"],
    packingList: [
      {
        category: "Basics",
        items: ["Trekking shoes, warm fleece, thermal layers, rain shell, water bottle"],
      },
    ],
    faqs: [
      {
        question: "Why choose Gulabi Kantha over more popular treks?",
        answer:
          "Gulabi Kantha offers pristine wilderness solitude, untouched trails, and breathtaking mountain vistas without the crowded campsites of mainstream trails.",
      },
    ],
  },
  {
    id: "rudranath",
    slug: "rudranath",
    name: "Rudranath Trek",
    heroHeadline: "RUDRANATH",
    tagline: "An evocative journey to the mystical fourth Kedar shrine",
    description:
      "An evocative trek through dense rhododendron groves and high meadows to the mystical fourth Kedar shrine.",
    longDescription:
      "Rudranath (11,800 ft) is revered as the fourth of the holy Panch Kedar temples, where the face (Mukh) of Lord Shiva is worshipped in a natural stone rock sanctuary. Renowned as the most physically challenging and spiritually awe-inspiring among the Panch Kedars, the route begins near Gopeshwar/Sagar village and passes through the dense Kedarnath Wildlife Sanctuary. Trekkers journey through ancient primeval forests, cross the high-altitude bugyals of Panar and Pitradhar, and look across to the sheer precipices of Nanda Devi, Trishul, and Chaukhamba.",
    region: "Chamoli",
    state: "Uttarakhand",
    difficulty: "Moderate to Strenuous",
    durationDays: 6,
    durationString: "6 Days / 5 Nights",
    maxAltitudeFeet: 11800,
    maxAltitudeString: "11,800 ft (3,600 m)",
    bestSeason: "May – Jun & Sep – Oct",
    distanceKm: 40,
    distanceString: "40 km",
    basecamp: "Sagar Village / Gopeshwar",
    startingPrice: "₹10,999*",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1600&auto=format&fit=crop",
    ],
    sliderPriority: 7,
    featured: false,
    highlights: [
      "Spiritual pilgrimage to the ancient stone shrine of the Fourth Kedar",
      "Traversing the sacred alpine ridge of Pitradhar (13,000 ft)",
      "Vast untouched meadow landscapes of Panar Bugyal with views of Trishul",
      "Immersion in pristine old-growth oak and birch ecosystems within the Kedarnath Wildlife Sanctuary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive Rishikesh to Sagar Village (via Gopeshwar)",
        distance: "220 km drive",
        altitude: "6,560 ft",
        duration: "8 hrs",
        description: "Ascend along the Alaknanda to Chamoli and Sagar village.",
      },
      {
        day: 2,
        title: "Trek Sagar Village to Pun Bugyal / Lyti Kharak",
        distance: "8 km steep trek",
        altitude: "9,500 ft",
        duration: "5-6 hrs",
        description: "Continuous climb through dense mossy oak and rhododendron forests.",
      },
      {
        day: 3,
        title: "Trek Lyti Kharak to Panar Bugyal",
        distance: "5 km trek",
        altitude: "11,500 ft",
        duration: "4 hrs",
        description: "Emerge above the tree line onto the majestic wind-swept pastures of Panar.",
      },
      {
        day: 4,
        title: "Trek Panar Bugyal via Pitradhar to Rudranath Temple",
        distance: "8 km trek",
        altitude: "11,800 ft",
        duration: "5 hrs",
        description:
          "Cross the sacred ridge of Pitradhar (13,000 ft) before dropping down to the secluded stone shrine of Rudranath.",
      },
      {
        day: 5,
        title: "Trek Rudranath to Mandal Village via Ansuya Devi",
        distance: "14 km trek",
        altitude: "5,500 ft",
        duration: "7 hrs",
        description: "Long downhill trek through the sacred forest of Ansuya Devi to Mandal.",
      },
      {
        day: 6,
        title: "Drive Mandal / Gopeshwar to Rishikesh Departure",
        distance: "230 km drive",
        altitude: "1,120 ft",
        duration: "8 hrs",
        description: "Transfer back to Rishikesh.",
      },
    ],
    fitnessRequirement:
      "Strenuous climb requiring strong knee conditioning and aerobic fitness due to sustained steep ascents.",
    inclusions: [
      "Licensed mountain guide, porters, camp cook, and equipment",
      "Nutritious mountain meals and tent/homestay logistics",
      "Sanctuary permissions",
    ],
    exclusions: ["Personal porters", "Transport to Sagar", "Insurance"],
    packingList: [
      {
        category: "Equipment",
        items: [
          "Trekking poles (essential for steep descents)",
          "Ankle-support waterproof boots",
          "Warm fleece and down jacket",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is Rudranath considered tough?",
        answer:
          "The first two days feature steep, relentless ascents gaining over 1,500 vertical meters without gentle switchbacks. High physical conditioning is strongly advised.",
      },
    ],
  },
  {
    id: "rudranath-kalpeshwar",
    slug: "rudranath-kalpeshwar",
    name: "Rudranath + Kalpeshwar Trek",
    heroHeadline: "RUDRANATH & KALPESHWAR",
    tagline: "The dual sacred sanctuary trail across the serene Urgam Valley",
    description:
      "A profound dual-shrine pilgrimage and wilderness trek across the high ridges and sacred stone temples of Urgam Valley.",
    longDescription:
      "Combining the mystical face of Shiva at Rudranath (11,800 ft) with Kalpeshwar (7,217 ft)—the fifth Kedar where Lord Shiva's hair (Jata) is revered in an ancient rock cave—this expedition creates a holistic traverse of Chamoli's spiritual highlands. Trekkers cross high bugyals, traverse through remote Shepherd trails of Dumak and Lyte, and descend into the fairytale apple orchards and stepped terrace farms of the Urgam Valley.",
    region: "Chamoli / Urgam Valley",
    state: "Uttarakhand",
    difficulty: "Moderate to Strenuous",
    durationDays: 8,
    durationString: "8 Days / 7 Nights",
    maxAltitudeFeet: 12500,
    maxAltitudeString: "12,500 ft (3,810 m)",
    bestSeason: "May – Jun & Sep – Oct",
    distanceKm: 56,
    distanceString: "56 km",
    basecamp: "Sagar Village (Start) / Helang (End)",
    startingPrice: "₹14,499*",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
    ],
    sliderPriority: 8,
    featured: false,
    highlights: [
      "Comprehensive journey covering two celebrated Panch Kedar shrines in one grand loop",
      "Crossing from the high ridges of Rudranath into the enchanting Urgam Valley",
      "Night stays in traditional remote Himalayan hamlets of Dumak and Devgram",
      "Visit to the timeless Kalpeshwar cave temple and the sacred wishing tree (Kalpavriksha)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive Rishikesh to Sagar Village",
        distance: "220 km",
        altitude: "6,560 ft",
        duration: "8 hrs",
        description: "Scenic drive into Chamoli district.",
      },
      {
        day: 2,
        title: "Trek Sagar to Panar Bugyal",
        distance: "12 km",
        altitude: "11,500 ft",
        duration: "7 hrs",
        description: "Climb through the dense Kedarnath sanctuary forest onto alpine meadows.",
      },
      {
        day: 3,
        title: "Trek Panar Bugyal to Rudranath Temple",
        distance: "8 km",
        altitude: "11,800 ft",
        duration: "5 hrs",
        description: "Ridge walk past Pitradhar to the revered shrine of Rudranath.",
      },
      {
        day: 4,
        title: "Trek Rudranath to Dumak Village",
        distance: "14 km",
        altitude: "7,800 ft",
        duration: "7 hrs",
        description: "Wild descent across Tolli meadows into the charming rustic hamlet of Dumak.",
      },
      {
        day: 5,
        title: "Trek Dumak to Urgam Valley (Devgram)",
        distance: "12 km",
        altitude: "6,800 ft",
        duration: "6 hrs",
        description: "Cross the Kalpganga river into the lush green terraces of Urgam.",
      },
      {
        day: 6,
        title: "Visit Kalpeshwar Temple & local explorations",
        distance: "4 km",
        altitude: "7,217 ft",
        duration: "3 hrs",
        description: "Offer prayers at the Fifth Kedar; visit ancient stone watermills and shrines.",
      },
      {
        day: 7,
        title: "Trek Urgam to Helang; Drive to Joshimath / Pipalkoti",
        distance: "8 km trek + 20 km drive",
        altitude: "4,500 ft",
        duration: "4 hrs",
        description: "Gradual descent along the river gorge and drive to hotel.",
      },
      {
        day: 8,
        title: "Drive to Rishikesh Departure",
        distance: "235 km",
        altitude: "1,120 ft",
        duration: "8 hrs",
        description: "Drop off in Rishikesh.",
      },
    ],
    fitnessRequirement: "High physical endurance for multi-day consecutive trekking with variable terrain.",
    inclusions: [
      "All expedition logistics, wilderness guides, camp meals, and permissions",
    ],
    exclusions: ["Personal gear", "Travel to Rishikesh", "Emergency evacuation insurance"],
    packingList: [
      {
        category: "Trek Pack",
        items: ["Multi-day backpack, sturdy footwear, thermal layers, rain protection"],
      },
    ],
    faqs: [
      {
        question: "Is this trek suitable for seniors?",
        answer:
          "Due to lengthy daily distances and elevation fluctuations, seniors should only consider this if they have previous high-altitude multi-day trekking experience.",
      },
    ],
  },
  {
    id: "roopkund",
    slug: "roopkund",
    name: "Roopkund Trek",
    heroHeadline: "ROOPKUND",
    tagline: "The legendary mystery lake beneath the towering walls of Mt. Trishul",
    description:
      "A legendary high-altitude expedition across Bedni Bugyal and Ali Bugyal toward the iconic glacial tarn beneath Trishul.",
    longDescription:
      "Roopkund (15,750 ft) is one of the most celebrated and historic high-altitude trails in the entire Himalayas. Set inside a glacial amphitheatre beneath the towering 23,000 ft peaks of Mt. Trishul and Nanda Ghunti, this expedition is famous for taking trekkers across Asia's most spectacular twin alpine meadows: Ali Bugyal and Bedni Bugyal. While environmental conservation directives govern visits to the tarn itself, the trek across the high ridges of Bhagwabasa, Bedni, and Ali remains one of the pinnacle Himalayan wilderness journeys.",
    region: "Chamoli",
    state: "Uttarakhand",
    difficulty: "Strenuous",
    durationDays: 8,
    durationString: "8 Days / 7 Nights",
    maxAltitudeFeet: 15750,
    maxAltitudeString: "15,750 ft (4,800 m)",
    bestSeason: "May – Jun & Sep – Oct",
    distanceKm: 53,
    distanceString: "53 km",
    basecamp: "Lohajung Village",
    startingPrice: "₹14,999*",
    heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2000&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
    ],
    sliderPriority: 9,
    featured: true,
    highlights: [
      "Crossing the legendary twin emerald meadows of Ali Bugyal and Bedni Bugyal",
      "Unbelievable close-up vistas of Mt. Trishul (7,120 m) and Nanda Ghunti (6,309 m)",
      "High alpine glacial amphitheatre experience at Bhagwabasa and Junargali Ridge",
      "Rich folklore and traditional mountain worship of Goddess Nanda Devi",
    ],
    itinerary: [
      {
        day: 1,
        title: "Drive Kathgodam / Rishikesh to Lohajung Basecamp",
        distance: "210 km drive",
        altitude: "7,600 ft",
        duration: "8 hrs",
        description: "Scenic Himalayan drive along Pindar river into the heart of Garhwal.",
      },
      {
        day: 2,
        title: "Trek Lohajung to Didna Village",
        distance: "7.5 km trek",
        altitude: "8,050 ft",
        duration: "5 hrs",
        description: "Descent to the Neel Ganga river bed and ascent into Didna village.",
      },
      {
        day: 3,
        title: "Trek Didna to Ali Bugyal",
        distance: "10.5 km trek",
        altitude: "11,320 ft",
        duration: "6 hrs",
        description: "Climb through ancient oak forest into the vast green expanses of Ali Bugyal.",
      },
      {
        day: 4,
        title: "Trek Ali Bugyal to Ghora Lotani via Bedni Bugyal",
        distance: "7 km trek",
        altitude: "12,760 ft",
        duration: "5 hrs",
        description: "Traverse high meadows past the sacred Bedni Kund under Trishul's watch.",
      },
      {
        day: 5,
        title: "Trek Ghora Lotani to Bhagwabasa",
        distance: "4 km trek",
        altitude: "14,100 ft",
        duration: "4 hrs",
        description: "Ascend past Kalu Vinayak stone shrine into barren glacial moraines.",
      },
      {
        day: 6,
        title: "Summit Push to Roopkund & Junargali (15,750 ft); Descend to Bedni",
        distance: "10 km trek",
        altitude: "15,750 ft",
        duration: "8 hrs",
        description: "Early morning snow trek to the glacial basin before dropping back down.",
      },
      {
        day: 7,
        title: "Trek Bedni Bugyal to Wan Village; Drive to Lohajung",
        distance: "10 km trek + 15 km drive",
        altitude: "7,600 ft",
        duration: "6 hrs",
        description: "Walk under ancient cypress trees down to Wan village and return to Lohajung.",
      },
      {
        day: 8,
        title: "Drive Lohajung to Kathgodam / Rishikesh Departure",
        distance: "210 km drive",
        altitude: "1,120 ft",
        duration: "8 hrs",
        description: "Farewell Himalayan views on journey home.",
      },
    ],
    fitnessRequirement:
      "High endurance required. Trekkers should be capable of running 5 km in under 28 minutes and possess acclimatization awareness.",
    inclusions: [
      "Experienced high-altitude expedition team, guides, and cook",
      "Four-season alpine tents, sub-zero sleeping bags, crampons/microspikes",
      "Nutritious high-altitude meals and snacks",
      "Permits, safety equipment, and emergency oxygen",
    ],
    exclusions: ["Transit to Lohajung", "Personal porterage", "High-altitude medical insurance"],
    packingList: [
      {
        category: "Expedition Wear",
        items: [
          "Heavy down jacket, waterproof shell pants and jacket, mountaineering boots, glacier glasses",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the status of trekking to Roopkund?",
        answer:
          "High-altitude trails in the Bugyal zones are operated in strict compliance with Uttarakhand High Court conservation guidelines and local forest permissions, prioritizing leave-no-trace ethics and responsible eco-camping.",
      },
    ],
  },
];

export const BRAND_INFO = {
  name: "HINTER ROOTS",
  tagline: "Find Your Way Beyond the Ordinary.",
  secondaryTagline: "Rooted in Nature. Driven by Adventure.",
  phone: "+91 98765 43210", // Configurable placeholder as required
  whatsappNumber: "919876543210", // Configurable placeholder for direct WhatsApp click
  email: "adventures@hinterroots.com",
  baseOffice: "Joshimath & Rishikesh, Uttarakhand, India",
  instagram: "https://instagram.com/hinterroots",
  facebook: "https://facebook.com/hinterroots",
  youtube: "https://youtube.com/hinterroots",
};
