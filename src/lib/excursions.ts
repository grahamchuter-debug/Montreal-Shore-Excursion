export type FitnessLevel = "Easy" | "Moderate" | "Difficult";
export type ReturnConfidence = "High" | "Moderate" | "Tight";

export type CruiseSnapshotFields = {
  timeInPort?: string;
  bestFor?: string;
  activityLevel?: string;
  familyFriendly?: string;
  returnToShip?: string;
  popularTypes?: string;
};

export type Excursion = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  fitness: FitnessLevel;
  distanceFromTerminal: string;
  transferRequired: boolean;
  transferNote: string;
  walkingRequired: string;
  bestFor: string[];
  returnConfidence: ReturnConfidence;
  returnNote: string;
  weatherConsiderations: string;
  cruiseSnapshot: string;
  snapshotFields: CruiseSnapshotFields;
  description: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  heroImage?: string;
  heroImageAlt?: string;
};

export const excursions: Excursion[] = [
  {
    slug: "old-montreal-walking-tour",
    path: "/old-montreal-walking-tour",
    title: "Old Montréal Walking Tour from Cruise Port",
    shortTitle: "Old Montréal Walking Tour",
    summary:
      "Guided walk through cobblestone streets, Place d'Armes, Notre-Dame Basilica exterior, and Place Jacques-Cartier — the essential French Canadian port-day experience.",
    duration: "2.5–3.5 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Alexandra Pier and Iberville Terminal sit at the Old Port — Old Montréal begins roughly 5–15 minutes on foot.",
    transferRequired: false,
    transferNote:
      "Most ships dock within walking distance of Old Montréal. Tours typically meet at the pier or Place d'Armes.",
    walkingRequired: "Moderate — 1.5–2.5 miles on cobblestones typical",
    bestFor: [
      "First-time Montréal visitors",
      "French Canadian culture enthusiasts",
      "Passengers with 4+ hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Walking tours in Old Montréal stay close to the terminal. Build 30–45 minutes before all-aboard for independent exploration after the tour.",
    weatherConsiderations:
      "Cobblestones become slippery when wet. Summer heat reflects off stone buildings — carry water. Winter calls require warm layers and traction footwear.",
    cruiseSnapshot:
      "Old Montréal is the reason most cruise passengers choose this port — European-style streets, bilingual guides, and Notre-Dame Basilica minutes from the ship.",
    snapshotFields: {
      timeInPort: "4–8 hours recommended",
      bestFor: "History, architecture, French culture",
      activityLevel: "Easy — mostly flat cobblestones",
      familyFriendly: "Excellent — engaging plazas and street performers",
      returnToShip: "High on organised tours",
      popularTypes: "Small-group walking tours, private guides",
    },
    description: [
      "Old Montréal (Vieux-Montréal) is the historic heart of the city — fortified walls, 18th-century stone buildings, and a bilingual atmosphere that feels distinctly French Canadian. For cruise passengers, it is often the first and best use of limited port time.",
      "Guided walking tours typically cover Place d'Armes, the exterior of Notre-Dame Basilica, Rue Saint-Paul's galleries and cafés, and Place Jacques-Cartier with its artists and terrace restaurants. Guides explain Montréal's founding as a fur-trading post, its Catholic heritage, and the blend of French and English influences.",
      "Because most Canada & New England ships dock at Alexandra Pier or the Iberville Cruise Terminal in the Old Port, organised walks eliminate transfer stress entirely. Independent walkers can follow the same route using our Old Montréal from cruise port guide.",
    ],
    highlights: [
      "Place d'Armes and Notre-Dame Basilica square",
      "Rue Saint-Paul heritage street",
      "Place Jacques-Cartier plaza",
      "Old Port waterfront and Clock Tower views",
      "Bilingual local guide context",
    ],
    faqs: [
      {
        question: "Can you walk Old Montréal from the cruise terminal?",
        answer:
          "Yes — most ships dock within 5–15 minutes of Place d'Armes. See our walking from cruise port guide for route detail.",
      },
      {
        question: "Does the walking tour include Notre-Dame Basilica interior?",
        answer:
          "Some tours include timed basilica entry; others cover the exterior only. Ask when enquiring — interior visits add 30–45 minutes.",
      },
      {
        question: "Is Old Montréal suitable for limited mobility?",
        answer:
          "Cobblestones and curbs challenge wheelchairs. Some operators offer modified routes — enquire about accessibility before booking.",
      },
    ],
    relatedSlugs: [
      "notre-dame-basilica-tour",
      "montreal-city-highlights-tour",
      "montreal-food-tour",
    ],
  },
  {
    slug: "montreal-city-highlights-tour",
    path: "/montreal-city-highlights-tour",
    title: "Montréal City Highlights Tour from Cruise Port",
    shortTitle: "City Highlights Tour",
    summary:
      "Coach and walking overview — Old Montréal, Mount Royal lookout, Olympic Stadium district, and St. Joseph's Oratory on a single cruise-timed itinerary.",
    duration: "4–5 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Multi-district tour covering Old Montréal, downtown, and Mount Royal — all transfers included.",
    transferRequired: true,
    transferNote:
      "Highlights tours include coach pickup at Alexandra Pier or Iberville Terminal.",
    walkingRequired: "Light — short walks at each stop",
    bestFor: [
      "First-time Montréal visitors",
      "Passengers wanting broad city coverage",
      "Those with 6+ hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Highlights tours are calibrated to standard 6–8 hour port windows with proven return timing to the Old Port terminals.",
    weatherConsiderations:
      "Mix of coach time, outdoor lookout stops, and Old Montréal walking. Layers recommended year-round; Mount Royal summit is windier than the waterfront.",
    cruiseSnapshot:
      "The essential Montréal port day — Old Montréal's French heritage, a Mount Royal panorama, and modern landmarks when you want the broadest single-excursion overview.",
    snapshotFields: {
      timeInPort: "6–8 hours ideal",
      bestFor: "First visits, comprehensive overview",
      activityLevel: "Easy",
      familyFriendly: "Excellent",
      returnToShip: "High",
      popularTypes: "Coach highlights tours, small-group vans",
    },
    description: [
      "Montréal highlights tours compress the city's must-sees into one cruise-timed itinerary — typically Old Montréal on foot, a Mount Royal lookout photo stop, and drive-by or brief visits to landmarks such as Olympic Stadium, St. Joseph's Oratory, or the Plateau neighbourhood depending on the operator.",
      "This is the recommended choice for first-time visitors with 6–8 hours ashore who want one organised experience rather than piecing together multiple bookings. Guides connect French Canadian identity to Montréal's modern role as a festival city and St. Lawrence gateway.",
      "Highlights tours deliberately skip Québec City and the Laurentians — those require dedicated longer windows. Instead they maximise Old Montréal and scenic viewpoints with predictable, high-confidence return timing.",
    ],
    highlights: [
      "Old Montréal walking core",
      "Mount Royal scenic lookout",
      "Olympic Stadium or Oratory photo stops",
      "French Canadian cultural commentary",
      "Single-booking port day simplicity",
    ],
    faqs: [
      {
        question: "How is this different from the Old Montréal walking tour?",
        answer:
          "Highlights tours add coach transport to Mount Royal and other districts. The walking tour stays entirely in Old Montréal.",
      },
      {
        question: "Does this include Québec City?",
        answer:
          "No — Québec City is a separate full-day excursion, usually better as a pre/post-cruise extension.",
      },
      {
        question: "Best excursion for first-time visitors?",
        answer:
          "Yes — along with the Old Montréal walking tour, this is a top recommendation for a first Montréal port call.",
      },
    ],
    relatedSlugs: [
      "old-montreal-walking-tour",
      "mount-royal-scenic-tour",
      "notre-dame-basilica-tour",
    ],
  },
  {
    slug: "notre-dame-basilica-tour",
    path: "/notre-dame-basilica-tour",
    title: "Notre-Dame Basilica Tour from Montréal Cruise Port",
    shortTitle: "Notre-Dame Basilica Tour",
    summary:
      "Timed visit to Montréal's Gothic Revival masterpiece — blue vaulted interior, sacred art, and Place d'Armes context on a cruise-scheduled tour.",
    duration: "2–3 hours (with Old Montréal context)",
    fitness: "Easy",
    distanceFromTerminal:
      "Notre-Dame Basilica sits in Place d'Armes — roughly 10–15 minutes on foot from Alexandra Pier.",
    transferRequired: false,
    transferNote:
      "Walking access from the Old Port terminals. Some tours combine basilica entry with a broader Old Montréal walk.",
    walkingRequired: "Minimal — short walk from pier; standing during interior visit",
    bestFor: [
      "Architecture and sacred art enthusiasts",
      "Photography-focused visitors",
      "Passengers combining with Old Montréal",
    ],
    returnConfidence: "High",
    returnNote:
      "Basilica visits use timed entry slots — organised tours coordinate tickets and return pacing. Allow 30–45 minutes buffer before all-aboard.",
    weatherConsiderations:
      "Interior visit is climate-controlled. Exterior queues in summer heat or winter cold — dress for the season while waiting.",
    cruiseSnapshot:
      "Notre-Dame Basilica is Montréal's most photographed interior — deep blue ceilings, gold stars, and a French Catholic heritage that defines the city's identity.",
    snapshotFields: {
      timeInPort: "4–6 hours recommended",
      bestFor: "Architecture, history, photography",
      activityLevel: "Easy",
      familyFriendly: "Good — awe-inspiring for all ages; quiet respect required inside",
      returnToShip: "High",
      popularTypes: "Guided basilica + Old Montréal combos",
    },
    description: [
      "Notre-Dame Basilica of Montréal dominates Place d'Armes with a neo-Gothic facade and an interior unlike almost any church in North America — deep blue vaulted ceilings studded with gold stars, intricate wood carvings, and stained glass telling the story of the city's Catholic founders.",
      "Cruise-focused tours typically secure timed admission (required for interior visits) and pair the basilica with a short Old Montréal orientation. Self-guided visitors can book tickets directly but should watch the clock against all-aboard time.",
      "The basilica sits at the geographic and cultural centre of Old Montréal — minutes from the cruise terminals and surrounded by cafés, galleries, and the Pointe-à-Callière archaeology museum.",
    ],
    highlights: [
      "Blue vaulted nave and sacred art",
      "Place d'Armes historic square",
      "Timed entry coordination",
      "Old Montréal street context",
      "French Canadian Catholic heritage",
    ],
    faqs: [
      {
        question: "Do you need tickets for Notre-Dame Basilica?",
        answer:
          "Yes — interior visits require timed tickets purchased in advance. Organised tours typically include entry.",
      },
      {
        question: "How long should you allow inside?",
        answer:
          "Plan 30–45 minutes for the interior plus time in Place d'Armes. A full Old Montréal walk adds 1–2 hours.",
      },
      {
        question: "Is photography allowed inside?",
        answer:
          "Personal photography is generally permitted without flash. Respect ongoing services and staff guidance.",
      },
    ],
    relatedSlugs: [
      "old-montreal-walking-tour",
      "montreal-city-highlights-tour",
      "montreal-food-tour",
    ],
  },
  {
    slug: "mount-royal-scenic-tour",
    path: "/mount-royal-scenic-tour",
    title: "Mount Royal Scenic Tour from Montréal Cruise Port",
    shortTitle: "Mount Royal Scenic Tour",
    summary:
      "Coach to Kondiaronk Belvedere or Camilien-Houde lookout for panoramic city and St. Lawrence River views — Montréal's essential scenic excursion.",
    duration: "3–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Mount Royal summit is roughly 4 km (2.5 miles) from the Old Port — 15–20 minutes by coach.",
    transferRequired: true,
    transferNote:
      "Coach or van transport required. Some tours combine Mount Royal with Old Montréal on foot.",
    walkingRequired: "Minimal at lookout — optional short trail walks",
    bestFor: [
      "Photography enthusiasts",
      "Scenic overview seekers",
      "Passengers with 5+ hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Mount Royal tours use fixed coach schedules with return built around Old Port terminal proximity. Traffic on Parc Avenue is usually manageable on port days.",
    weatherConsiderations:
      "Summit is significantly windier and cooler than the waterfront. Fog can obscure views in spring and autumn — morning calls often have clearer sightlines.",
    cruiseSnapshot:
      "Mount Royal gives you the postcard view — downtown towers, the St. Lawrence River, and on clear days the Laurentian foothills beyond the city.",
    snapshotFields: {
      timeInPort: "5–7 hours recommended",
      bestFor: "Scenery, photography, city orientation",
      activityLevel: "Easy",
      familyFriendly: "Excellent",
      returnToShip: "High",
      popularTypes: "Coach scenic tours, combo with Old Montréal",
    },
    description: [
      "Mount Royal (Mont-Royal) is the hill that gave Montréal its name — a protected park designed by Frederick Law Olmsted with lookouts over the city, river, and surrounding landscape. For cruise passengers, a coach to Kondiaronk Belvedere delivers the iconic skyline photo without a strenuous hike.",
      "Scenic tours typically combine the lookout with Old Montréal walking or a drive through the Plateau and downtown. Fall foliage calls (September–October) make this excursion especially rewarding on Canada & New England itineraries.",
      "Independent visitors can taxi to the belvedere but coordinating return timing against all-aboard is easier on an organised tour with pier pickup.",
    ],
    highlights: [
      "Kondiaronk Belvedere panorama",
      "St. Lawrence River and skyline views",
      "Frederick Law Olmsted parkland",
      "Fall foliage on autumn calls",
      "Combo options with Old Montréal",
    ],
    faqs: [
      {
        question: "Can you walk to Mount Royal from the cruise port?",
        answer:
          "The summit is 4+ km uphill — not realistic on a port day. Coach or taxi is required.",
      },
      {
        question: "Is Mount Royal worth it on a short port call?",
        answer:
          "On 4-hour calls, prioritise Old Montréal instead. With 6+ hours, a Mount Royal + Old Montréal combo works well.",
      },
      {
        question: "Best season for Mount Royal views?",
        answer:
          "Late September and October offer fall colour. Summer haze can soften distant views — morning is clearest.",
      },
    ],
    relatedSlugs: [
      "montreal-city-highlights-tour",
      "old-montreal-walking-tour",
      "laurentians-day-trip",
    ],
  },
  {
    slug: "montreal-food-tour",
    path: "/montreal-food-tour",
    title: "Montréal Food Tour from Cruise Port",
    shortTitle: "Montréal Food Tour",
    summary:
      "Taste poutine, Montreal-style bagels, smoked meat, and French Canadian specialties on a guided culinary walk through Old Montréal and beyond.",
    duration: "3–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Food tours typically start in Old Montréal or Jean-Talon Market — transfer varies by itinerary.",
    transferRequired: true,
    transferNote:
      "Old Montréal food walks meet near the pier. Market-focused tours include metro or coach to Jean-Talon.",
    walkingRequired: "Moderate — standing and walking between tasting stops",
    bestFor: [
      "Food-focused travellers",
      "French Canadian culture enthusiasts",
      "Couples and small groups",
    ],
    returnConfidence: "High",
    returnNote:
      "Food tours pace tastings around fixed end times with return to the Old Port. Avoid heavy pre-tour breakfasts — portions add up.",
    weatherConsiderations:
      "Winter food tours exist but outdoor walking between stops requires warm layers. Summer tours may include ice cream or market fruit — stay hydrated.",
    cruiseSnapshot:
      "Montréal is one of North America's great food cities — poutine, bagels, smoked meat, and French bistro culture on a plate, timed for your port window.",
    snapshotFields: {
      timeInPort: "5–7 hours recommended",
      bestFor: "Food, culture, walking",
      activityLevel: "Easy to moderate",
      familyFriendly: "Good for teens; dietary options vary by operator",
      returnToShip: "High",
      popularTypes: "Small-group tasting walks, market tours",
    },
    description: [
      "Montréal's food identity blends French technique, Jewish deli tradition, and Québécois comfort cooking. Guided food tours introduce cruise passengers to poutine, smoked meat sandwiches, Montreal bagels (distinct from New York style), maple treats, and craft chocolate in manageable tasting portions.",
      "Old Montréal routes focus on historic streets and waterfront cafés. Longer port days may include Jean-Talon Market in Little Italy — one of the continent's great public markets — with metro transfer included.",
      "Food tours pair naturally with French Canadian culture — guides explain why Montréal eats differently from the rest of Canada and how bilingual dining etiquette works (bonjour when entering, merci when leaving).",
    ],
    highlights: [
      "Poutine and smoked meat tastings",
      "Montreal-style bagel sampling",
      "Old Montréal café culture",
      "Optional Jean-Talon Market visit",
      "French Canadian culinary history",
    ],
    faqs: [
      {
        question: "Can food tours accommodate dietary restrictions?",
        answer:
          "Many operators offer vegetarian options. Vegan, gluten-free, and allergy needs require advance notice — mention when enquiring.",
      },
      {
        question: "Is Jean-Talon Market realistic on a port day?",
        answer:
          "On 6+ hour calls with a market-focused tour, yes. Shorter calls should stick to Old Montréal food walks.",
      },
      {
        question: "How much food is included?",
        answer:
          "Tastings typically replace lunch — arrive hungry but not starving. Water is usually provided between stops.",
      },
    ],
    relatedSlugs: [
      "old-montreal-walking-tour",
      "montreal-bike-tour",
      "montreal-city-highlights-tour",
    ],
  },
  {
    slug: "montreal-bike-tour",
    path: "/montreal-bike-tour",
    title: "Montréal Bike Tour from Cruise Port",
    shortTitle: "Montréal Bike Tour",
    summary:
      "Cycle the Old Port waterfront, Lachine Canal path, and Old Montréal on a guided bike tour — one of North America's most bike-friendly cities.",
    duration: "3–4 hours",
    fitness: "Moderate",
    distanceFromTerminal:
      "Tours depart from the Old Port — bike rental and route briefing near Alexandra Pier.",
    transferRequired: false,
    transferNote:
      "Equipment and guide provided at the waterfront. No coach transfer needed.",
    walkingRequired: "Minimal — cycling replaces walking for most of the tour",
    bestFor: [
      "Active travellers",
      "Cyclists wanting city coverage",
      "Passengers with 5+ hours ashore",
    ],
    returnConfidence: "High",
    returnNote:
      "Guided bike tours use dedicated paths away from heavy traffic. Build 30 minutes before all-aboard to return equipment and freshen up.",
    weatherConsiderations:
      "Rain cancels most bike tours. Spring and fall require layers; summer afternoon heat favours morning departures.",
    cruiseSnapshot:
      "Montréal's flat waterfront paths and extensive bike lanes make cycling a smart way to cover more ground than walking — without leaving the Old Port area far behind.",
    snapshotFields: {
      timeInPort: "5–7 hours recommended",
      bestFor: "Active sightseeing, waterfront paths",
      activityLevel: "Moderate",
      familyFriendly: "Teens and fit families; age minimums apply",
      returnToShip: "High",
      popularTypes: "Guided bike tours, canal path routes",
    },
    description: [
      "Montréal consistently ranks among the most bicycle-friendly cities in North America — flat waterfront trails, the Lachine Canal bike path, and protected lanes through Old Montréal let guided groups cover ground efficiently on a port day.",
      "Typical routes include the Old Port Clock Tower, Cité Mémoire projections zone, Lachine Canal, and historic Old Montréal streets where cycling is permitted. Helmets and bikes are provided; no personal cycling gear needed.",
      "Bike tours suit active passengers who find walking tours too slow but want more immersion than a coach highlights tour. Not ideal for 4-hour port calls or passengers uncomfortable on two wheels.",
    ],
    highlights: [
      "Old Port waterfront cycling",
      "Lachine Canal scenic path",
      "Old Montréal historic streets",
      "Equipment included",
      "More coverage than walking alone",
    ],
    faqs: [
      {
        question: "Is Montréal safe for cycling?",
        answer:
          "Guided tours use established paths and low-traffic routes. Independent cycling without local knowledge is less recommended on a port day.",
      },
      {
        question: "What fitness level is required?",
        answer:
          "Moderate — you should be comfortable on a bike for 2+ hours with occasional stops.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "Most operators cancel or offer alternatives in wet weather. Have a backup plan such as an Old Montréal walking tour.",
      },
    ],
    relatedSlugs: [
      "old-montreal-walking-tour",
      "st-lawrence-river-cruise",
      "montreal-food-tour",
    ],
  },
  {
    slug: "st-lawrence-river-cruise",
    path: "/st-lawrence-river-cruise",
    title: "St. Lawrence River Cruise from Montréal Cruise Port",
    shortTitle: "St. Lawrence River Cruise",
    summary:
      "See Montréal from the water — harbour cruise along the St. Lawrence with Old Port, Jacques-Cartier Bridge, and skyline views.",
    duration: "1.5–2 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "River cruises depart from the Old Port — 5–10 minutes on foot from Alexandra Pier.",
    transferRequired: false,
    transferNote:
      "Walk to the Old Port quay. Some packages include commentary in French and English.",
    walkingRequired: "Minimal — short walk to boarding point",
    bestFor: [
      "Scenic relaxation",
      "Photography from the water",
      "Short port calls wanting a unique perspective",
    ],
    returnConfidence: "High",
    returnNote:
      "Fixed departure schedules make timing predictable. Pair with Old Montréal walking on longer port days.",
    weatherConsiderations:
      "River wind is cooler than on land — bring a layer even in summer. Rough conditions may cancel sailings.",
    cruiseSnapshot:
      "You arrived by ship — seeing Montréal from the St. Lawrence gives fresh perspective on the skyline, Old Port, and the river that defines this cruise region.",
    snapshotFields: {
      timeInPort: "3–6 hours (pairs with other activities)",
      bestFor: "Scenery, relaxation, photography",
      activityLevel: "Easy — seated cruise",
      familyFriendly: "Excellent",
      returnToShip: "High",
      popularTypes: "Harbour cruises, narrated sightseeing boats",
    },
    description: [
      "A St. Lawrence River cruise complements your ship arrival with views you cannot get on foot — the Old Port Clock Tower, Jacques-Cartier Bridge, Habitat 67, and the downtown skyline from mid-river. Sailings typically last 60–90 minutes with bilingual commentary.",
      "This excursion fits short port windows or acts as a relaxed anchor for longer days combined with Old Montréal walking or lunch at Place Jacques-Cartier. Departures are scheduled, not on-demand — confirm times against your ship's all-aboard.",
      "Evening and dinner cruises exist for pre/post-cruise stays but are rarely compatible with standard daytime port calls unless your ship overnights.",
    ],
    highlights: [
      "Old Port and Clock Tower from the water",
      "Jacques-Cartier Bridge views",
      "Downtown skyline panorama",
      "Bilingual river commentary",
      "Pairs with Old Montréal on foot",
    ],
    faqs: [
      {
        question: "Where do river cruises depart?",
        answer:
          "Old Port quays near Jacques-Cartier Basin — a short walk from most cruise terminals.",
      },
      {
        question: "Can you combine a river cruise with a walking tour?",
        answer:
          "Yes — on 6+ hour calls, a morning river cruise plus afternoon Old Montréal walk works well.",
      },
      {
        question: "Is this the same as your cruise ship?",
        answer:
          "No — these are small sightseeing vessels on a fixed route within the harbour area, not open-ocean sailing.",
      },
    ],
    relatedSlugs: [
      "old-montreal-walking-tour",
      "montreal-bike-tour",
      "montreal-city-highlights-tour",
    ],
  },
  {
    slug: "pre-post-cruise-montreal-tour",
    path: "/pre-post-cruise-montreal-tour",
    title: "Pre/Post Cruise Montréal Tour",
    shortTitle: "Pre/Post Cruise Tour",
    summary:
      "Extended city tour for embarkation or disembarkation days — Old Montréal, Mount Royal, markets, and luggage-friendly pacing without all-aboard pressure.",
    duration: "4–8 hours (flexible)",
    fitness: "Easy",
    distanceFromTerminal:
      "Pickup from Old Port terminal, downtown hotel, or YUL airport depending on your schedule.",
    transferRequired: true,
    transferNote:
      "Tours coordinate with hotel check-in/out, luggage storage, and airport transfers on request.",
    walkingRequired: "Light to moderate — paced for luggage-day comfort",
    bestFor: [
      "Embarkation day before boarding",
      "Disembarkation day after leaving ship",
      "Passengers staying overnight in Montréal",
    ],
    returnConfidence: "High",
    returnNote:
      "Without ship deadlines, pre/post tours offer relaxed pacing. Disembarkation tours should still allow airport buffer if flying same day.",
    weatherConsiderations:
      "Same seasonal advice as standard tours — layers year-round. Luggage storage locations may be unheated in winter.",
    cruiseSnapshot:
      "Montréal is a major embarkation and disembarkation city — extend your port experience without watching the clock for all-aboard.",
    snapshotFields: {
      timeInPort: "Flexible — half or full day",
      bestFor: "Pre/post cruise stays, embark/disembark days",
      activityLevel: "Easy to moderate",
      familyFriendly: "Excellent",
      returnToShip: "N/A — ship timing replaced by flight or hotel",
      popularTypes: "Private tours, custom itineraries, airport transfers",
    },
    description: [
      "Many Canada & New England cruises start or end in Montréal — passengers often have a full day before check-in or after disembarkation without the pressure of all-aboard. Pre/post cruise tours cover Old Montréal, Mount Royal, Jean-Talon Market, or Québec City extensions at a human pace.",
      "Operators can meet you at your hotel, the cruise terminal with luggage, or Montréal-Trudeau Airport (YUL). Luggage storage in Old Montréal and downtown simplifies sightseeing between checkout and boarding.",
      "See our pre/post cruise guide for hotel area recommendations and when to add a Québec City overnight.",
    ],
    highlights: [
      "Flexible timing without all-aboard",
      "Hotel and airport pickup options",
      "Luggage-friendly pacing",
      "Old Montréal and beyond",
      "Québec City extension planning",
    ],
    faqs: [
      {
        question: "Can you store luggage during a pre-cruise tour?",
        answer:
          "Yes — downtown and Old Port storage facilities accept bags for hourly or daily rates. Many tours coordinate drop-off.",
      },
      {
        question: "Is same-day airport transfer included?",
        answer:
          "Often available as an add-on. YUL is roughly 25–40 minutes from downtown depending on traffic.",
      },
      {
        question: "Should you book Québec City on disembarkation day?",
        answer:
          "Only if staying overnight — same-day Québec City plus YUL flight is unrealistic. See our Québec City timing guide.",
      },
    ],
    relatedSlugs: [
      "montreal-city-highlights-tour",
      "quebec-city-from-montreal",
      "laurentians-day-trip",
    ],
  },
  {
    slug: "quebec-city-from-montreal",
    path: "/quebec-city-from-montreal",
    title: "Québec City Day Trip from Montréal Cruise Port",
    shortTitle: "Québec City Day Trip",
    summary:
      "Full-day coach to Québec City's UNESCO Old Town — Place Royale, Petit-Champlain, and Montmorency Falls when port time allows.",
    duration: "10–12 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Québec City is roughly 250 km (155 miles) northeast — about 3 hours each way by coach.",
    transferRequired: true,
    transferNote:
      "Dedicated full-day coach from Montréal. Not compatible with most standard port windows.",
    walkingRequired: "Moderate — walking in Old Québec on cobblestones",
    bestFor: [
      "Exceptionally long port days (10+ hours)",
      "Pre/post cruise extensions",
      "Repeat Montréal visitors",
    ],
    returnConfidence: "Tight",
    returnNote:
      "Honest assessment: Québec City requires 6+ hours on the road alone. Standard 6–8 hour port calls cannot accommodate this safely. Better as a pre/post-cruise extension.",
    weatherConsiderations:
      "Coach travel in winter can face snow delays. Old Québec is hillier and colder than Montréal waterfront — extra layers essential.",
    cruiseSnapshot:
      "Québec City is one of North America's most historic cities — but the 3-hour drive each way makes same-day shore excursions risky unless your ship grants exceptional time ashore.",
    snapshotFields: {
      timeInPort: "10+ hours minimum for same-day; pre/post recommended",
      bestFor: "History, UNESCO Old Town, French heritage",
      activityLevel: "Easy coach; moderate walking in Old Québec",
      familyFriendly: "Good on longer days; tiring for young children",
      returnToShip: "Tight on port days — Moderate on pre/post",
      popularTypes: "Full-day coach tours",
    },
    description: [
      "Québec City predates Montréal as a fortified capital — cobblestone streets, Château Frontenac, Place Royale, and Petit-Champlain form a UNESCO World Heritage site that feels more European than anywhere else in North America.",
      "The challenge for cruise passengers is distance: roughly three hours each way from Montréal means six hours of travel before any sightseeing. On a typical 8-hour port call, that leaves insufficient time with acceptable return margin.",
      "We recommend Québec City as a pre- or post-cruise extension — stay one or two nights after disembarkation or before embarkation rather than attempting it on a standard port day. See our dedicated Québec City timing guide for full analysis.",
    ],
    highlights: [
      "Old Québec UNESCO district",
      "Place Royale and Petit-Champlain",
      "Château Frontenac viewpoints",
      "Montmorency Falls (itinerary dependent)",
      "French North American heritage",
    ],
    faqs: [
      {
        question: "Can you visit Québec City on a normal cruise port day?",
        answer:
          "Only if your effective time ashore exceeds 10 hours and you accept tight return margins. Most passengers should not attempt it.",
      },
      {
        question: "What is the better alternative?",
        answer:
          "Add 1–2 nights in Québec City after your cruise. Our pre/post cruise guide explains logistics.",
      },
      {
        question: "Is the drive scenic?",
        answer:
          "The Autoroute 20 follows the St. Lawrence with rural Québec landscape — fall foliage makes autumn departures especially beautiful.",
      },
    ],
    relatedSlugs: [
      "pre-post-cruise-montreal-tour",
      "laurentians-day-trip",
      "montreal-city-highlights-tour",
    ],
  },
  {
    slug: "laurentians-day-trip",
    path: "/laurentians-day-trip",
    title: "Laurentians Day Trip from Montréal Cruise Port",
    shortTitle: "Laurentians Day Trip",
    summary:
      "Escape to the Laurentian Mountains — scenic villages, Lac des Sables, and Mont-Tremblant area landscapes on a full-day excursion from Montréal.",
    duration: "8–10 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Laurentians region begins roughly 80 km north — 1–1.5 hours by coach from Montréal.",
    transferRequired: true,
    transferNote:
      "Full-day coach from Old Port or downtown pickup. Requires extended port time.",
    walkingRequired: "Light — village strolls and optional lake cruise",
    bestFor: [
      "Nature and scenery lovers",
      "Repeat Montréal visitors",
      "Passengers with 8+ hours ashore",
    ],
    returnConfidence: "Moderate",
    returnNote:
      "Full-day format needs 8+ effective hours ashore. Traffic on Autoroute 15 can delay returns — build 60 minutes before all-aboard.",
    weatherConsiderations:
      "Mountains are cooler than the city. Fall colour peaks mid-September to mid-October. Winter visits involve snow scenery but shorter daylight.",
    cruiseSnapshot:
      "Trade cobblestones for pine forests — the Laurentians offer lakes, villages, and mountain air when you have a full port day and have already seen Old Montréal.",
    snapshotFields: {
      timeInPort: "8+ hours required",
      bestFor: "Scenery, nature, fall foliage",
      activityLevel: "Easy",
      familyFriendly: "Good — lake cruises appeal to children",
      returnToShip: "Moderate — highway dependent",
      popularTypes: "Full-day coach tours, village stops",
    },
    description: [
      "The Laurentian Mountains north of Montréal offer a contrast to the urban port experience — lakes, ski-country villages, and autumn maple colour that defines Québec's landscape. Typical tours include St-Sauveur, Mont-Tremblant village, or a Lac des Sables boat ride.",
      "This is a full-day commitment: 2–3 hours round-trip driving plus stops. Passengers with 6-hour port windows should prioritise Old Montréal instead. The excursion suits repeat visitors or those who have already explored the city on a previous call.",
      "Fall foliage season aligns with peak Canada & New England cruising — September and October departures make this excursion especially popular.",
    ],
    highlights: [
      "Laurentian mountain scenery",
      "Picturesque village stops",
      "Optional Lac des Sables cruise",
      "Fall foliage on autumn calls",
      "Contrast to urban Montréal",
    ],
    faqs: [
      {
        question: "Is the Laurentians trip realistic on a port day?",
        answer:
          "Only with 8+ effective hours ashore. Shorter calls should stay in Old Montréal.",
      },
      {
        question: "How does this compare to Québec City?",
        answer:
          "Laurentians is closer (1–1.5 hours vs 3 hours) but still a full-day format. Québec City offers historic urban sightseeing; Laurentians offers nature.",
      },
      {
        question: "Best season for Laurentians tours?",
        answer:
          "September and October for fall colour. Summer for lake activities. Winter for snow scenery on longer pre/post stays.",
      },
    ],
    relatedSlugs: [
      "mount-royal-scenic-tour",
      "quebec-city-from-montreal",
      "montreal-city-highlights-tour",
    ],
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getRelatedExcursions(slug: string): Excursion[] {
  const excursion = getExcursion(slug);
  if (!excursion) return [];
  return excursion.relatedSlugs
    .map((s) => getExcursion(s))
    .filter((e): e is Excursion => e !== undefined);
}

export const staticGuidePaths = [
  "/montreal-cruise-port-guide",
  "/best-montreal-shore-excursions",
  "/things-to-do-in-montreal-from-a-cruise-ship",
  "/one-day-in-montreal-from-a-cruise-ship",
  "/walking-montreal-from-cruise-port",
  "/old-montreal-from-cruise-port",
  "/french-canadian-culture-montreal-cruise-guide",
  "/notre-dame-basilica-montreal-guide",
  "/mount-royal-from-cruise-port",
  "/montreal-food-tour-guide",
  "/quebec-city-from-montreal-cruise-port",
  "/montreal-pre-post-cruise-guide",
  "/best-time-to-visit-montreal",
  "/montreal-cruise-ship-schedule",
  "/montreal-cruise-planner",
  "/faq",
  "/enquire",
  "/excursions",
];
