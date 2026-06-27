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

const path = "/one-day-in-montreal-from-a-cruise-ship";

const faqs = [
  {
    question: "What can you do in Montréal with 4 hours ashore?",
    answer:
      "Walk Old Montréal from Alexandra Pier — Place d'Armes, Notre-Dame Basilica exterior, Rue Saint-Paul, and Place Jacques-Cartier. Add a quick St. Lawrence riverfront stroll. Skip Mount Royal, Jean-Talon Market, and Québec City.",
  },
  {
    question: "What is the best 6-hour Montréal itinerary?",
    answer:
      "An Old Montréal walking tour or city highlights tour covering Notre-Dame Basilica, cobblestone streets, and Mount Royal lookout. Alternatively, basilica interior plus independent Old Montréal exploration.",
  },
  {
    question: "Can you visit Mount Royal on a Montréal cruise day?",
    answer:
      "Realistically on 6+ hour calls via organised scenic tour or highlights combo. The summit requires coach or taxi — not walkable from the pier. See our Mount Royal guide.",
  },
  {
    question: "Is Québec City realistic from a cruise ship in Montréal?",
    answer:
      "Only on exceptionally long port days (10+ hours) and even then we recommend pre/post cruise extensions instead. Travel is roughly 3 hours each way.",
  },
  {
    question: "Should first-time visitors prioritise Old Montréal or Mount Royal?",
    answer:
      "Old Montréal first — it is walkable from the terminal and defines the port experience. Add Mount Royal on 6–8 hour calls via organised tour.",
  },
  {
    question: "Where should cruise passengers eat in Montréal?",
    answer:
      "Place Jacques-Cartier terrace restaurants, Rue Saint-Paul cafés, or a food tour tasting poutine and smoked meat. Allow 45–60 minutes for sit-down lunch.",
  },
  {
    question: "How much buffer before all-aboard in Montréal?",
    answer:
      "30–45 minutes minimum for Old Montréal walks. Add extra time for Mount Royal, Jean-Talon Market, Laurentians, or Québec City day trips.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "One Day In Montréal From A Cruise Ship — 4, 6 & 8 Hour Itineraries",
  description:
    "Sample itineraries for 4, 6, and 8 hours ashore in Montréal — Old Montréal, Notre-Dame Basilica, Mount Royal, food, markets, riverfront, and return-to-ship timing.",
  path,
});

export default function OneDayMontrealPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "One Day In Montréal From A Cruise Ship",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "One Day In Montréal" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "One Day In Montréal" }]}
        />
        <PageHero
          eyebrow="Itinerary guide"
          title="One day in Montréal from a cruise ship"
          subtitle="Practical plans for 4, 6, and 8 hours ashore — Old Montréal, French Canadian culture, and honest timing."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Montréal rewards planning — match your itinerary to actual hours ashore, not wishful thinking. These sample timelines assume Alexandra Pier docking and standard immigration clearance."
            fields={{
              timeInPort: "Match plan to 4, 6, or 8 hour window",
              bestFor: "Tailored sightseeing by duration",
              activityLevel: "Easy to moderate depending on plan",
              familyFriendly: "All itineraries have family options",
              returnToShip: "Highest on Old Montréal walks",
              popularTypes: "Walking tours, highlights tours, food tours",
            }}
          />

          <GuideSection title="How to use this guide">
            <p>
              Count <strong>effective hours</strong> from when you clear the terminal
              to when you must be back aboard — not the posted port time. Subtract
              30–45 minutes for your return buffer before choosing an itinerary.
              Use our{" "}
              <Link href="/montreal-cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to match excursions to your schedule.
            </p>
          </GuideSection>

          <GuideSection title="4 hours ashore — Old Montréal essentials">
            <p>
              <strong>Realistic expectation:</strong> One compact zone — Vieux-Montréal
              and the Old Port — not the full city. Best for short calls, mobility
              considerations, or passengers who prefer a relaxed French Canadian
              atmosphere.
            </p>
            <p>
              <strong>Sample timeline:</strong>
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>0:00 — Exit Alexandra Pier, walk west along Old Port promenade</li>
              <li>0:15 — Turn inland on Rue Saint-Paul toward Place d&apos;Armes</li>
              <li>0:30 — Notre-Dame Basilica exterior and square (bonjour at nearby shops)</li>
              <li>1:00 — Continue to Place Jacques-Cartier; café or quick lunch</li>
              <li>2:00 — Return via riverfront to Clock Tower views</li>
              <li>2:30 — Begin walk back to terminal</li>
              <li>3:00 — Buffer at ship</li>
            </ul>
            <p>
              <strong>Upgrade option:</strong> Pre-book{" "}
              <Link href="/old-montreal-walking-tour" className="text-blue-800 hover:underline">
                Old Montréal walking tour
              </Link>{" "}
              or{" "}
              <Link href="/st-lawrence-river-cruise" className="text-blue-800 hover:underline">
                St. Lawrence river cruise
              </Link>{" "}
              (90 minutes) for structured timing.
            </p>
            <p>
              <strong>Skip:</strong> Mount Royal, Jean-Talon Market, Laurentians,
              Québec City.
            </p>
          </GuideSection>

          <GuideSection title="6 hours ashore — Old Montréal plus basilica or lookout">
            <p>
              <strong>Realistic expectation:</strong> Deep Vieux-Montréal experience
              with either a guided tour or purposeful independent walking, optionally
              adding Notre-Dame interior or a Mount Royal photo stop. This is the most
              common port window on Canada &amp; New England itineraries.
            </p>
            <p>
              <strong>Option A — organised tour:</strong> Book an{" "}
              <Link href="/old-montreal-walking-tour" className="text-blue-800 hover:underline">
                Old Montréal walking tour
              </Link>{" "}
              or{" "}
              <Link href="/montreal-city-highlights-tour" className="text-blue-800 hover:underline">
                city highlights tour
              </Link>{" "}
              (4–5 hours including pier transfer). Covers Place d&apos;Armes, Rue
              Saint-Paul, Place Jacques-Cartier, and often Mount Royal lookout.
            </p>
            <p>
              <strong>Option B — basilica focus:</strong>{" "}
              <Link href="/notre-dame-basilica-tour" className="text-blue-800 hover:underline">
                Notre-Dame Basilica tour
              </Link>{" "}
              with timed interior entry, then independent Old Montréal lunch at Place
              Jacques-Cartier. Start back 60 minutes before all-aboard.
            </p>
            <p>
              <strong>Option C — food and culture:</strong> Morning Old Montréal stroll,
              afternoon{" "}
              <Link href="/montreal-food-tour" className="text-blue-800 hover:underline">
                food tour
              </Link>{" "}
              tastings — lower walking intensity between stops.
            </p>
          </GuideSection>

          <GuideSection title="8 hours ashore — full city or day trip">
            <p>
              <strong>Realistic expectation:</strong> One major experience plus Old
              Montréal time, or a dedicated out-of-town excursion — not both Laurentians
              and a full food tour the same day.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Itinerary</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Best for</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Return confidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Highlights tour + Old Montréal lunch</td>
                    <td className="px-4 py-3">First-time visitors</td>
                    <td className="px-4 py-3">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Food tour + river cruise</td>
                    <td className="px-4 py-3">Culinary enthusiasts</td>
                    <td className="px-4 py-3">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Bike tour + Old Port</td>
                    <td className="px-4 py-3">Active travellers</td>
                    <td className="px-4 py-3">High — weather dependent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Laurentians day trip</td>
                    <td className="px-4 py-3">Nature lovers, repeat visitors</td>
                    <td className="px-4 py-3">Moderate — highway dependent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Québec City day trip</td>
                    <td className="px-4 py-3">Not recommended same-day — see timing guide</td>
                    <td className="px-4 py-3">Tight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Sites worth prioritising">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Old Montréal core</strong> —{" "}
                <Link href="/old-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                  flagship walking guide
                </Link>
              </li>
              <li>
                <strong>Notre-Dame Basilica</strong> —{" "}
                <Link href="/notre-dame-basilica-montreal-guide" className="text-blue-800 hover:underline">
                  tickets and timing
                </Link>
              </li>
              <li>
                <strong>Mount Royal lookout</strong> —{" "}
                <Link href="/mount-royal-from-cruise-port" className="text-blue-800 hover:underline">
                  coach access from port
                </Link>
              </li>
              <li>
                <strong>Jean-Talon Market</strong> —{" "}
                <Link href="/montreal-food-tour-guide" className="text-blue-800 hover:underline">
                  food guide
                </Link>{" "}
                (6+ hours with tour)
              </li>
              <li>
                <strong>St. Lawrence riverfront</strong> — Old Port promenade and{" "}
                <Link href="/st-lawrence-river-cruise" className="text-blue-800 hover:underline">
                  harbour cruise
                </Link>
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Food stops cruise passengers love">
            <p>
              Montréal eating is a cultural experience — poutine, Montreal-style bagels,
              smoked meat sandwiches, and French bistro classics. Place Jacques-Cartier
              terraces suit leisurely lunch; food tours replace lunch with curated
              tastings.
            </p>
            <p>
              Say <strong>bonjour</strong> when entering and <strong>merci</strong> when
              leaving — small gestures that reflect Québécois hospitality. See our{" "}
              <Link href="/montreal-food-tour-guide" className="text-blue-800 hover:underline">
                food tour guide
              </Link>{" "}
              and{" "}
              <Link href="/french-canadian-culture-montreal-cruise-guide" className="text-blue-800 hover:underline">
                French Canadian culture guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Pre/post cruise days">
            <p>
              Montréal is a major embarkation and disembarkation port — many passengers
              have a full day without all-aboard pressure. Use that time for Jean-Talon
              Market, Mount Royal hiking, or a Québec City overnight extension.
            </p>
            <p>
              See our{" "}
              <Link href="/montreal-pre-post-cruise-guide" className="text-blue-800 hover:underline">
                pre/post cruise guide
              </Link>{" "}
              for hotel areas, luggage storage, and YUL airport transfers.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Old Montréal itineraries offer high return confidence — the terminal sits within the historic district. Build 30–45 minutes before all-aboard for pier security. Add 15–30 extra minutes when using taxis from Mount Royal, Jean-Talon Market, or highway day trips."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Montréal cruise port guide", href: "/montreal-cruise-port-guide" },
              { label: "Old Montréal from cruise port", href: "/old-montreal-from-cruise-port" },
              { label: "Best Montréal shore excursions", href: "/best-montreal-shore-excursions" },
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
