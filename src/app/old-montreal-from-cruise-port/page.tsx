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

const path = "/old-montreal-from-cruise-port";

const faqs = [
  {
    question: "Why is Old Montréal the main attraction for cruise passengers?",
    answer:
      "Old Montréal (Vieux-Montréal) combines cobblestone streets, Notre-Dame Basilica, Place Jacques-Cartier, French Canadian heritage, and waterfront access — all within walking distance of Alexandra Pier. It delivers more atmosphere per minute ashore than any other district.",
  },
  {
    question: "How far is Old Montréal from the cruise terminal?",
    answer:
      "Place d'Armes and Notre-Dame Basilica sit roughly 800 metres (half a mile) from Alexandra Pier — 10–15 minutes on foot. Place Jacques-Cartier and Rue Saint-Paul are another 5–10 minutes west.",
  },
  {
    question: "Should cruise passengers book a guided Old Montréal tour?",
    answer:
      "For first-time visitors with 4+ hours ashore, yes — bilingual guides provide historical context, manage pacing on cobblestones, and coordinate basilica tickets. Confident walkers can self-guide using our walking routes.",
  },
  {
    question: "Does Old Montréal include Notre-Dame Basilica interior access?",
    answer:
      "Interior visits require timed tickets. Some walking tours include entry; others cover the exterior only. Book or enquire in advance — walk-up availability is limited on busy cruise days.",
  },
  {
    question: "What should you eat in Old Montréal on a port day?",
    answer:
      "Rue Saint-Paul cafés, Place Jacques-Cartier terrace restaurants, and Old Port food stalls offer French bistro fare, poutine, and maple treats. Allow 45–60 minutes for sit-down lunch without rushing.",
  },
  {
    question: "Are Old Montréal cobblestones difficult for walking?",
    answer:
      "Yes — uneven stone surfaces challenge strollers, wheelchairs, and anyone with balance concerns. Wear supportive shoes and allow extra time between stops.",
  },
  {
    question: "How much time should you allow in Old Montréal?",
    answer:
      "Minimum 2–3 hours for a focused walk; 4–5 hours allows basilica interior, lunch, and Old Port riverfront. Pair with Mount Royal only on 8+ hour calls.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Old Montréal From Cruise Port — Walking Distance, Sights & Timing",
  description:
    "Why Old Montréal is the main cruise port attraction — walking distance from Alexandra Pier, Notre-Dame Basilica, Place Jacques-Cartier, food, guided vs self-guided, and return timing.",
  path,
});

export default function OldMontrealFromCruisePortPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Old Montréal From Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Old Montréal From Cruise Port" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Old Montréal From Cruise Port" },
          ]}
        />
        <PageHero
          eyebrow="Authority guide"
          title="Old Montréal from the cruise port"
          subtitle="Why Vieux-Montréal is the essential port-day destination — walking distance, French Canadian culture, and realistic timing from Alexandra Pier."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Old Montréal is why most passengers choose this port — European-style streets, bilingual guides, and Notre-Dame Basilica minutes from the ship. Plan your route before you leave the gangway."
            fields={{
              timeInPort: "4–8 hours recommended",
              bestFor: "History, architecture, French Canadian culture",
              activityLevel: "Easy to moderate — cobblestones throughout",
              familyFriendly: "Excellent — plazas, street performers, riverfront",
              returnToShip: "High — district surrounds the terminal",
              popularTypes: "Walking tours, basilica visits, food walks",
            }}
          />

          <GuideSection title="Why Old Montréal is the main attraction">
            <p>
              <strong>Old Montréal is the reason this port appears on Canada &amp; New
              England itineraries.</strong> Where many cruise terminals sit in industrial
              zones far from city centres, Alexandra Pier and Iberville Terminal drop you
              at the edge of a walled historic district — cobblestone lanes, stone
              facades, church bells, and French-language signage within minutes of
              disembarkation.
            </p>
            <p>
              The neighbourhood preserves Montréal&apos;s founding as a 17th-century
              fur-trading post and Catholic settlement. Place d&apos;Armes, the
              Notre-Dame Basilica, Rue Saint-Paul&apos;s galleries, and Place
              Jacques-Cartier&apos;s artists and terrace cafés deliver a concentrated
              French Canadian experience that no coach tour elsewhere in North America
              replicates as efficiently.
            </p>
            <p>
              Port logistics are covered in the{" "}
              <Link href="/montreal-cruise-port-guide" className="text-blue-800 hover:underline">
                Montréal cruise port guide
              </Link>
              . Food and market context lives in our{" "}
              <Link href="/montreal-food-tour-guide" className="text-blue-800 hover:underline">
                Montréal food guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Walking distance from Alexandra Pier">
            <p>
              Understanding distances prevents overcommitting on short port days:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Destination</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Distance</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Walking time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Old Port Clock Tower</td>
                    <td className="px-4 py-3">~400 m</td>
                    <td className="px-4 py-3">5 min along riverfront</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Place d&apos;Armes / Notre-Dame Basilica</td>
                    <td className="px-4 py-3">~800 m</td>
                    <td className="px-4 py-3">10–15 min via Rue Saint-Paul</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Place Jacques-Cartier</td>
                    <td className="px-4 py-3">~1 km</td>
                    <td className="px-4 py-3">15–20 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Pointe-à-Callière Museum</td>
                    <td className="px-4 py-3">~900 m</td>
                    <td className="px-4 py-3">12–15 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Champ-de-Mars metro</td>
                    <td className="px-4 py-3">~600 m</td>
                    <td className="px-4 py-3">8–10 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Detailed self-guided routes are in{" "}
              <Link href="/walking-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                walking Montréal from the cruise port
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Notre-Dame Basilica">
            <p>
              Notre-Dame Basilica of Montréal dominates Place d&apos;Armes — a
              neo-Gothic facade hiding an interior of deep blue vaulted ceilings studded
              with gold stars, intricate wood carvings, and stained glass narrating the
              city&apos;s Catholic founders.
            </p>
            <p>
              Interior visits require timed admission tickets. Organised{" "}
              <Link href="/notre-dame-basilica-tour" className="text-blue-800 hover:underline">
                basilica tours
              </Link>{" "}
              coordinate entry; self-guided visitors should book online before leaving
              the ship. Plan 30–45 minutes inside plus time in the square.
            </p>
            <p>
              Full history, ticket advice, and timing from the port are in our{" "}
              <Link href="/notre-dame-basilica-montreal-guide" className="text-blue-800 hover:underline">
                Notre-Dame Basilica guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Place Jacques-Cartier and Rue Saint-Paul">
            <p>
              Place Jacques-Cartier is Old Montréal&apos;s living room — a pedestrian
              plaza sloping toward the river, lined with artists, flower sellers, and
              terrace restaurants. Rue Saint-Paul, one of the oldest streets in the
              city, runs parallel with art galleries, boutiques, and historic stone
              warehouses converted to hotels and cafés.
            </p>
            <p>
              This is where French Canadian daily life meets cruise passenger
              convenience — order a café au lait, watch street performers, and absorb
              bilingual banter without leaving the walkable core. Budget 45–90 minutes
              if you plan sit-down lunch here.
            </p>
          </GuideSection>

          <GuideSection title="Old Port riverfront">
            <p>
              The Old Port (Vieux-Port) stretches east from Place Jacques-Cartier along
              the St. Lawrence — Clock Tower views, Science Centre, Cité Mémoire
              projections after dark (on overnight stays), and the quays where{" "}
              <Link href="/st-lawrence-river-cruise" className="text-blue-800 hover:underline">
                harbour cruises
              </Link>{" "}
              depart. The riverfront path connects directly back to Alexandra Pier —
              ideal for a final stroll before all-aboard.
            </p>
            <p>
              Summer festivals and weekend markets can crowd the promenade. Morning
              port calls often enjoy quieter photo conditions before tour groups arrive.
            </p>
          </GuideSection>

          <GuideSection title="Food, cafés, and French Canadian cuisine">
            <p>
              Old Montréal dining leans French — bistro classics, steak frites, onion
              soup, and Québec cheeses on terrace menus. For deeper culinary immersion,
              pair a morning walk with an afternoon{" "}
              <Link href="/montreal-food-tour" className="text-blue-800 hover:underline">
                food tour
              </Link>{" "}
              covering poutine, smoked meat, and maple treats beyond the tourist core.
            </p>
            <p>
              <strong>Port-day pacing:</strong> Reserve lunch for 11:30–12:30 to avoid
              peak crowds and still return to the ship with margin. Quick café stops
              suit 4-hour calls; full bistro meals need 6+ hours ashore.
            </p>
            <p>
              See our{" "}
              <Link href="/montreal-food-tour-guide" className="text-blue-800 hover:underline">
                Montréal food tour guide
              </Link>{" "}
              for market and deli recommendations beyond Vieux-Montréal.
            </p>
          </GuideSection>

          <GuideSection title="Guided vs self-guided">
            <p>
              <strong>Guided tours</strong> suit first-time visitors who want bilingual
              historical context, basilica ticket coordination, and proven return pacing.
              Our{" "}
              <Link href="/old-montreal-walking-tour" className="text-blue-800 hover:underline">
                Old Montréal walking tour
              </Link>{" "}
              page covers typical itineraries and enquiry options.
            </p>
            <p>
              <strong>Self-guided exploration</strong> works for confident walkers who
              accept missing some historical depth. Download offline maps, wear
              supportive shoes, and follow our{" "}
              <Link href="/walking-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                walking routes
              </Link>
              . Watch the clock — cobblestone wandering consumes time faster than
              expected.
            </p>
            <p>
              <strong>Hybrid approach:</strong> Book a 2.5-hour morning tour, then
              explore independently until 60 minutes before all-aboard — popular on
              6–8 hour calls.
            </p>
          </GuideSection>

          <GuideSection title="French Canadian culture in Old Montréal">
            <p>
              Vieux-Montréal is the physical expression of Québécois identity — French
              street names, Catholic spires, bilingual signage, and a culinary tradition
              rooted in French technique and North American ingredients. Guides and
              shopkeepers often code-switch between French and English within a single
              conversation.
            </p>
            <p>
              Start interactions with <strong>bonjour</strong> and close with{" "}
              <strong>merci</strong>. Respect quiet in churches. Understand that
              Montréal&apos;s French heritage distinguishes it from English-speaking
              Canada — this is not a cosmetic detail but the city&apos;s founding story.
            </p>
            <p>
              Read our{" "}
              <Link href="/french-canadian-culture-montreal-cruise-guide" className="text-blue-800 hover:underline">
                French Canadian culture guide
              </Link>{" "}
              for language tips, festival calendar, and practical advice for cruise
              passengers.
            </p>
          </GuideSection>

          <GuideSection title="Return timing from Old Montréal">
            <p>
              The terminal sits inside the district — return walks from Place
              Jacques-Cartier take 15–20 minutes. Build 30–45 minutes before all-aboard
              even when sights are close; security queues at the pier can lengthen on
              busy double-ship days.
            </p>
            <p>
              If you add Mount Royal, Jean-Talon Market, or downtown shopping, switch
              to organised tours with pier drop-off or allow taxi time back to Alexandra
              Pier.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Old Montréal excursions and independent walks offer the highest return confidence in Montréal — the cruise terminal sits within the historic district. Build 30–45 minutes before all-aboard for security and gangway queues. Only leave the walkable core for Mount Royal, markets, or day trips when your port window allows adequate return margin."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Montréal cruise port guide", href: "/montreal-cruise-port-guide" },
              { label: "One day in Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
              { label: "Notre-Dame Basilica guide", href: "/notre-dame-basilica-montreal-guide" },
              { label: "French Canadian culture", href: "/french-canadian-culture-montreal-cruise-guide" },
            ]}
            excursions={[
              { label: "Old Montréal walking tour", href: "/old-montreal-walking-tour" },
              { label: "Notre-Dame Basilica tour", href: "/notre-dame-basilica-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
