import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/montreal-cruise-port-guide";

const faqs = [
  {
    question: "Where do cruise ships dock in Montréal?",
    answer:
      "Most large ships use Alexandra Pier and the adjacent Iberville Cruise Terminal in the Old Port (Vieux-Port). The terminals sit at the eastern edge of Old Montréal, within walking distance of Place d'Armes and the Notre-Dame Basilica.",
  },
  {
    question: "Can you walk from the Montréal cruise terminal to Old Montréal?",
    answer:
      "Yes — Old Montréal begins roughly 5–15 minutes on foot from Alexandra Pier. Place d'Armes, Rue Saint-Paul, and Place Jacques-Cartier are all reachable without a taxi on most port days.",
  },
  {
    question: "Do you need Canadian dollars in Montréal?",
    answer:
      "Yes. Canada uses Canadian dollars (CAD). Credit and debit cards are widely accepted; carry some cash for market stalls, tips, and small vendors. U.S. dollars may be accepted at tourist spots but exchange rates are unfavourable.",
  },
  {
    question: "Do you need to speak French in Montréal?",
    answer:
      "No — Montréal is officially bilingual and most tourism staff speak English. A polite bonjour when entering shops and merci when leaving is appreciated and part of local etiquette.",
  },
  {
    question: "What is the best shore excursion from Montréal?",
    answer:
      "First-time visitors usually choose an Old Montréal walking tour, city highlights tour, or Notre-Dame Basilica visit. Match choice to your hours ashore — see our best excursions ranking.",
  },
  {
    question: "How early should cruise passengers return to Alexandra Pier?",
    answer:
      "Build at least 30–45 minutes before your ship's all-aboard time. Summer festival traffic, René-Lévesque Boulevard congestion, and crowded Old Port quays can delay taxi and coach returns.",
  },
  {
    question: "Is Montréal weather unpredictable for port days?",
    answer:
      "Montréal has four distinct seasons. Spring and fall bring variable temperatures; summer can be hot and humid; winter calls require heavy layers. St. Lawrence river breezes cool the waterfront even on warm days.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Montréal Cruise Port Guide — Alexandra Pier, Transport & Tips",
  description:
    "Montréal cruise port guide for Alexandra Pier and Iberville Terminal — walking to Old Montréal, taxis, STM public transport, French/English, CAD currency, weather, tipping, and return-to-ship advice.",
  path,
});

export default function MontrealCruisePortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Montréal Cruise Port Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Montréal Cruise Port Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Montréal Cruise Port Guide" }]}
        />
        <PageHero
          eyebrow="Port authority"
          title="Montréal cruise port guide"
          subtitle="Alexandra Pier and Iberville Terminal, getting around, bilingual culture, and how cruise passengers reach Old Montréal."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Montréal is one of the most walkable major ports on Canada & New England routes — French Canadian heritage, cobblestone streets, and Notre-Dame Basilica minutes from the ship when you plan around all-aboard time."
            fields={{
              timeInPort: "6–9 hours typical; 4 hours suits Old Montréal only",
              bestFor: "Old Montréal, Notre-Dame Basilica, St. Lawrence riverfront",
              activityLevel: "Easy to moderate — cobblestones in Vieux-Montréal",
              familyFriendly: "Excellent with age-appropriate pacing",
              returnToShip: "High on organised tours; Moderate independent",
              popularTypes: "Walking tours, food tours, scenic coach tours",
            }}
          />

          <GuideSection title="Alexandra Pier and Iberville Cruise Terminal">
            <p>
              <strong>Location:</strong> Cruise ships dock along Alexandra Pier in the
              Old Port of Montréal (Vieux-Port), at the eastern edge of Old Montréal
              (Vieux-Montréal). The Iberville Cruise Terminal provides customs and
              immigration processing for most Canada &amp; New England embarkations,
              disembarkations, and day calls.
            </p>
            <p>
              <strong>Terminal layout:</strong> Facilities include customs halls,
              restrooms, and taxi stands outside the terminal building. Dining and
              shopping are limited inside — passengers typically walk to Old Montréal
              cafés or bring snacks for short port days. Signage directs toward Rue de
              la Commune and the Old Port promenade.
            </p>
            <p>
              <strong>Distance to highlights:</strong> Place d&apos;Armes and
              Notre-Dame Basilica sit roughly 800 metres (half a mile) west —
              10–15 minutes on foot. Place Jacques-Cartier and Rue Saint-Paul are
              another 5–10 minutes beyond. Mount Royal lookout requires coach or taxi
              — not walkable on a port day.
            </p>
            <p>
              <strong>Old Port access:</strong> The Clock Tower, Science Centre, and
              St. Lawrence riverfront paths begin at your feet. Many passengers combine
              a short riverfront stroll with an Old Montréal walking tour on the same
              port day.
            </p>
          </GuideSection>

          <GuideSection title="Walking from the cruise terminal">
            <p>
              Montréal rewards walkers more than almost any other major cruise port in
              Canada. Alexandra Pier sits inside the historic district rather than
              across an industrial zone — cobblestone streets, church spires, and
              French-language signage begin within minutes of disembarkation.
            </p>
            <p>
              <strong>Typical route:</strong> Exit toward Rue de la Commune, follow
              the Old Port promenade west, then turn inland on Rue Saint-Paul or Rue
              Saint-Jacques toward Place d&apos;Armes. The path is mostly flat with
              some cobblestones — wear supportive shoes.
            </p>
            <p>
              <strong>Realistic walking radius:</strong> Within 20 minutes on foot you
              can reach Notre-Dame Basilica, Place Jacques-Cartier, the Pointe-à-Callière
              museum, and dozens of galleries and cafés. Mount Royal, Jean-Talon Market,
              and Olympic Stadium require transport — see our{" "}
              <Link href="/mount-royal-from-cruise-port" className="text-blue-800 hover:underline">
                Mount Royal guide
              </Link>
              .
            </p>
            <p>
              For detailed routes and cobblestone warnings, read{" "}
              <Link href="/walking-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                walking Montréal from the cruise port
              </Link>{" "}
              and our flagship{" "}
              <Link href="/old-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                Old Montréal from cruise port
              </Link>{" "}
              guide.
            </p>
          </GuideSection>

          <GuideSection title="Taxis, rideshare, and coaches">
            <p>
              Taxis and rideshare vehicles (Uber, Lyft, Eva) queue outside the cruise
              terminal on busy call days. Fares to downtown or Mount Royal typically
              run $15–25 CAD depending on traffic. Confirm your driver knows
              &quot;Alexandra Pier&quot; or &quot;Terminal de croisière Iberville.&quot;
            </p>
            <p>
              Organised shore excursions include coach or van pickup at the pier —
              the lowest-stress option for Mount Royal scenic tours, food tours to
              Jean-Talon Market, and Québec City day trips. Reputable operators
              structure return timing around all-aboard deadlines.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Mode</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Typical time to Old Montréal core</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Walking</td>
                    <td className="px-4 py-3">10–15 min to Place d&apos;Armes</td>
                    <td className="px-4 py-3">Free; cobblestones; best first choice</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Taxi / rideshare</td>
                    <td className="px-4 py-3">5–10 min</td>
                    <td className="px-4 py-3">Useful for Mount Royal or markets</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">STM metro / bus</td>
                    <td className="px-4 py-3">15–25 min with transfers</td>
                    <td className="px-4 py-3">Champ-de-Mars station nearby; see below</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Shore excursion coach</td>
                    <td className="px-4 py-3">Included in tour</td>
                    <td className="px-4 py-3">Pier pickup; cruise-timed return</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">BIXI bike share</td>
                    <td className="px-4 py-3">5–15 min to districts</td>
                    <td className="px-4 py-3">Seasonal; guided bike tours safer on port days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="STM public transport">
            <p>
              Montréal&apos;s STM operates metro, bus, and commuter rail. Champ-de-Mars
              metro station (Orange Line) sits a short walk from the cruise terminals —
              one stop to Place-d&apos;Armes or Berri-UQAM for connections across the
              city.
            </p>
            <p>
              <strong>Cruise passenger reality check:</strong> Public transit works for
              confident independent travellers on longer port days heading to Jean-Talon
              Market, the Plateau, or Olympic Park. Managing Opus card purchase,
              transfers, and return timing against all-aboard adds stress most
              first-time visitors avoid. An Old Montréal walking tour with pier pickup
              or a simple stroll to Place Jacques-Cartier often delivers better value
              for limited hours ashore.
            </p>
            <p>
              Single fares cost a few dollars; day passes suit multiple rides. The STM
              mobile app and ticket machines at metro stations accept credit cards.
            </p>
          </GuideSection>

          <GuideSection title="French, English, and local etiquette">
            <p>
              Montréal is the largest French-speaking city in North America and the
              cultural capital of Québec. Bill 101 established French as the primary
              language of public life, yet tourism, hospitality, and downtown business
              operate comfortably in both French and English.
            </p>
            <p>
              <strong>Practical tips:</strong> Greet shop staff with &quot;bonjour&quot;
              (hello) and thank them with &quot;merci.&quot; Menus often appear in
              French first — staff will switch to English when asked. This small effort
              reflects respect for Québécois identity and usually improves service.
            </p>
            <p>
              Our dedicated{" "}
              <Link href="/french-canadian-culture-montreal-cruise-guide" className="text-blue-800 hover:underline">
                French Canadian culture guide
              </Link>{" "}
              covers language, festivals, cuisine identity, and Catholic architectural
              heritage in depth.
            </p>
          </GuideSection>

          <GuideSection title="Weather and what to wear">
            <p>
              Montréal&apos;s continental climate brings hot summers, cold winters, and
              spectacular fall foliage on St. Lawrence cruises. Spring calls (May–June)
              and fall calls (September–October) often bring crisp mornings and mild
              afternoons — layers are essential.
            </p>
            <p>
              Summer calls (June–August) can push 30°C (86°F) with humidity, while
              winter calls (November–March) require heavy coats, hats, and traction-friendly
              footwear on icy cobblestones.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Pack a compact rain jacket year-round</li>
              <li>Wear comfortable walking shoes — cobblestones punish thin soles</li>
              <li>Sunglasses and sunscreen for exposed riverfront walks</li>
              <li>Light fleece or windbreaker even on sunny autumn days</li>
            </ul>
            <p>
              Seasonal planning detail lives in our{" "}
              <Link href="/best-time-to-visit-montreal" className="text-blue-800 hover:underline">
                best time to visit Montréal
              </Link>{" "}
              guide.
            </p>
          </GuideSection>

          <GuideSection title="Tipping and currency">
            <p>
              Canada uses Canadian dollars (CAD). Credit and contactless payment are
              standard at restaurants, museums, and shops. Keep small bills for market
              stalls, street performers, and coat checks.
            </p>
            <p>
              <strong>Tipping norms:</strong> Restaurants expect 15–18% on sit-down meals
              (tip is not included in the bill). Bar service $1–2 per drink or 15%.
              Taxi and rideshare 10–15%. Tour guides $5–10 CAD per person on shared
              tours, higher for private guides.
            </p>
            <p>
              International visitors should notify their bank before travel to avoid
              card blocks. ATM fees apply at airport and downtown machines — withdraw
              once rather than repeatedly.
            </p>
          </GuideSection>

          <GuideSection title="Old Montréal and Notre-Dame Basilica">
            <p>
              Old Montréal is the reason most passengers choose this port — fortified
              walls, 18th-century stone facades, and a bilingual atmosphere that feels
              distinctly European. Notre-Dame Basilica dominates Place d&apos;Armes with
              a neo-Gothic facade and an interior of deep blue vaulted ceilings.
            </p>
            <p>
              Interior basilica visits require timed tickets purchased in advance.
              Organised tours coordinate entry; self-guided visitors should book online
              before leaving the ship. Allow 30–45 minutes inside plus Old Montréal
              exploration time.
            </p>
            <p>
              Full timing and access advice is in our dedicated{" "}
              <Link href="/notre-dame-basilica-montreal-guide" className="text-blue-800 hover:underline">
                Notre-Dame Basilica guide
              </Link>{" "}
              and flagship{" "}
              <Link href="/old-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                Old Montréal from cruise port
              </Link>{" "}
              page. Most{" "}
              <Link href="/old-montreal-walking-tour" className="text-blue-800 hover:underline">
                Old Montréal walking tours
              </Link>{" "}
              and{" "}
              <Link href="/montreal-city-highlights-tour" className="text-blue-800 hover:underline">
                city highlights tours
              </Link>{" "}
              include the district on standard itineraries.
            </p>
          </GuideSection>

          <GuideSection title="Best excursions for cruise passengers">
            <p>
              Match your port hours to excursion type rather than overbooking:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>4–5 hours:</strong>{" "}
                <Link href="/old-montreal-walking-tour" className="text-blue-800 hover:underline">
                  Old Montréal walking tour
                </Link>{" "}
                or{" "}
                <Link href="/st-lawrence-river-cruise" className="text-blue-800 hover:underline">
                  St. Lawrence river cruise
                </Link>
              </li>
              <li>
                <strong>6 hours:</strong>{" "}
                <Link href="/montreal-city-highlights-tour" className="text-blue-800 hover:underline">
                  City highlights tour
                </Link>{" "}
                or{" "}
                <Link href="/notre-dame-basilica-tour" className="text-blue-800 hover:underline">
                  Notre-Dame Basilica tour
                </Link>
              </li>
              <li>
                <strong>8+ hours:</strong>{" "}
                <Link href="/montreal-food-tour" className="text-blue-800 hover:underline">
                  Montréal food tour
                </Link>
                ,{" "}
                <Link href="/laurentians-day-trip" className="text-blue-800 hover:underline">
                  Laurentians day trip
                </Link>
                , or{" "}
                <Link href="/montreal-bike-tour" className="text-blue-800 hover:underline">
                  bike tour
                </Link>
              </li>
            </ul>
            <p>
              Compare ranked options in our{" "}
              <Link href="/best-montreal-shore-excursions" className="text-blue-800 hover:underline">
                best Montréal shore excursions
              </Link>{" "}
              guide or use the{" "}
              <Link href="/montreal-cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Montréal returns are generally reliable when you stay in Old Montréal — the terminal is minutes from major sights. Build 30–45 minutes before all-aboard even on organised tours. Traffic on René-Lévesque Boulevard and summer festival congestion near the Old Port can delay taxis and coaches from downtown and Mount Royal. Walking back from Place Jacques-Cartier is predictable — factor extra time if you venture to Jean-Talon Market, the Laurentians, or Québec City."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "One day in Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
              { label: "Old Montréal from cruise port", href: "/old-montreal-from-cruise-port" },
              { label: "Best Montréal shore excursions", href: "/best-montreal-shore-excursions" },
              { label: "Things to do from a cruise ship", href: "/things-to-do-in-montreal-from-a-cruise-ship" },
            ]}
            excursions={[
              { label: "Old Montréal walking tour", href: "/old-montreal-walking-tour" },
              { label: "City highlights tour", href: "/montreal-city-highlights-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
