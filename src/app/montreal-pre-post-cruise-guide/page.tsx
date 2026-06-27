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

const path = "/montreal-pre-post-cruise-guide";

const faqs = [
  {
    question: "Is Montréal a good embarkation or disembarkation city?",
    answer:
      "Yes — many Canada & New England cruises start or end in Montréal. Passengers often have a full day before boarding or after leaving the ship without all-aboard pressure.",
  },
  {
    question: "Where should cruise passengers stay in Montréal?",
    answer:
      "Old Montréal suits historic atmosphere and walking distance to Alexandra Pier. Downtown (around Rue Sainte-Catherine) offers more hotel choice and metro access. Both work for pre/post touring.",
  },
  {
    question: "Can you store luggage during a pre-cruise tour?",
    answer:
      "Yes — luggage storage facilities in Old Montréal and downtown accept bags for hourly or daily rates. Many pre/post tours coordinate drop-off.",
  },
  {
    question: "How far is YUL airport from the cruise terminal?",
    answer:
      "Montréal-Trudeau Airport (YUL) is roughly 25–40 minutes by taxi or coach depending on traffic — about 20 km west of downtown.",
  },
  {
    question: "Should you visit Québec City on disembarkation day?",
    answer:
      "Only if staying overnight — same-day Québec City plus YUL flight is unrealistic. Add 1–2 nights in Québec City after your cruise instead.",
  },
  {
    question: "What can you do on a pre-cruise half day in Montréal?",
    answer:
      "Old Montréal walk, Notre-Dame Basilica, Jean-Talon Market, or Mount Royal lookout — without watching the clock for all-aboard.",
  },
  {
    question: "How do I book a pre/post cruise tour?",
    answer:
      "Use our enquiry form with embark/disembark dates, hotel location, and luggage needs. See our pre/post cruise tour page for typical itineraries.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Pre/Post Cruise Montréal Guide — Hotels, Luggage & YUL Transfers",
  description:
    "Montréal pre/post cruise guide — embarkation and disembarkation days, hotel areas, luggage storage, YUL airport transfers, and when to add Québec City.",
  path,
});

export default function MontrealPrePostGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Pre/Post Cruise Montréal Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Pre/Post Cruise Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Pre/Post Cruise Guide" }]}
        />
        <PageHero
          eyebrow="Embark & disembark"
          title="Pre/post cruise Montréal guide"
          subtitle="Extend your Canada & New England cruise with relaxed Montréal days — hotels, luggage, airport transfers, and Québec City planning."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Montréal is a major cruise turnaround port — use pre/post days to explore without all-aboard pressure. Old Montréal, markets, and Mount Royal become easier when the ship is not waiting."
            fields={{
              timeInPort: "Half or full day flexible",
              bestFor: "Embark/disembark passengers, overnight stays",
              activityLevel: "Easy to moderate",
              familyFriendly: "Excellent",
              returnToShip: "N/A — replaced by flight or hotel check-in",
              popularTypes: "Private tours, custom itineraries, airport transfers",
            }}
          />

          <GuideSection title="Montréal as embarkation and disembarkation city">
            <p>
              Canada &amp; New England itineraries often begin or end in Montréal —
              passengers fly into YUL, tour the city, board at Alexandra Pier, or
              reverse the sequence on disembarkation. Unlike a standard port call, you
              control the schedule without all-aboard deadlines (except making your
              flight).
            </p>
            <p>
              Organised{" "}
              <Link href="/pre-post-cruise-montreal-tour" className="text-blue-800 hover:underline">
                pre/post cruise tours
              </Link>{" "}
              coordinate hotel pickup, luggage handling, and airport transfers on request.
            </p>
          </GuideSection>

          <GuideSection title="Before your cruise — pre-embarkation day">
            <p>
              <strong>Typical flow:</strong> Arrive YUL, transfer to hotel, store or
              drop luggage, explore Old Montréal or Jean-Talon Market, check in, board
              next morning at Alexandra Pier.
            </p>
            <p>
              <strong>Half-day ideas:</strong> Old Montréal walking tour, Notre-Dame
              Basilica interior, St. Lawrence riverfront stroll, Mount Royal sunset
              lookout.
            </p>
            <p>
              <strong>Full-day ideas:</strong> City highlights tour, food tour with
              market visit, bike tour along Lachine Canal, or relaxed combination of
              Vieux-Montréal and downtown shopping.
            </p>
          </GuideSection>

          <GuideSection title="After your cruise — disembarkation day">
            <p>
              <strong>Typical flow:</strong> Leave ship early, collect luggage, store
              bags if flight is evening, tour the city, retrieve luggage, transfer to YUL.
            </p>
            <p>
              <strong>Same-day flight caution:</strong> Allow 3+ hours before
              international departure from YUL after returning from sightseeing. Do not
              attempt Québec City same-day unless staying overnight.
            </p>
            <p>
              <strong>Overnight extension:</strong> Add 1–2 nights in Montréal or take
              the train to Québec City for UNESCO Old Town — see{" "}
              <Link href="/quebec-city-from-montreal-cruise-port" className="text-blue-800 hover:underline">
                Québec City timing guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Hotel areas">
            <p>
              <strong>Old Montréal:</strong> Cobblestone charm, walking distance to
              Alexandra Pier, boutique hotels in converted warehouses, French bistro
              dining. Best for atmosphere and embarkation convenience.
            </p>
            <p>
              <strong>Downtown:</strong> More chain hotels, Rue Sainte-Catherine shopping,
              metro hub at Berri-UQAM, easier taxi access to YUL. Best for budget and
              variety.
            </p>
            <p>
              <strong>Little Italy / Plateau:</strong> Near Jean-Talon Market and
              residential neighbourhoods — better for food-focused pre/post stays than
              pier proximity.
            </p>
          </GuideSection>

          <GuideSection title="Luggage storage">
            <p>
              Luggage storage lockers and concierge services operate in Old Montréal and
              downtown — hourly and daily rates apply. Pre/post tour operators often
              coordinate drop-off so you walk unencumbered through Vieux-Montréal.
            </p>
            <p>
              Winter storage areas may be unheated — protect electronics and liquids
              from freezing on cold disembarkation days.
            </p>
          </GuideSection>

          <GuideSection title="YUL airport transfers">
            <p>
              Montréal-Trudeau Airport (YUL) lies west of the city. Taxi and rideshare
              cost roughly $45–60 CAD to Old Montréal; airport shuttle and 747 express
              bus serve downtown. Pre-book private transfer when travelling with heavy
              luggage or a large group.
            </p>
            <p>
              Allow 45–60 minutes transfer time in normal traffic; rush hour and winter
              weather add margin.
            </p>
          </GuideSection>

          <GuideSection title="When to add Québec City">
            <p>
              Québec City deserves 1–2 nights minimum — not a same-day add-on from
              disembarkation if you are flying home. The drive or train from Montréal
              takes 3+ hours each way; Old Québec&apos;s cobblestones and Château
              Frontenac reward unhurried exploration.
            </p>
            <p>
              Read our honest assessment in the{" "}
              <Link href="/quebec-city-from-montreal-cruise-port" className="text-blue-800 hover:underline">
                Québec City from Montréal cruise port
              </Link>{" "}
              guide. For organised day trips (pre/post only), see{" "}
              <Link href="/quebec-city-from-montreal" className="text-blue-800 hover:underline">
                Québec City day trip
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Pre/post days replace ship deadlines with flight or hotel timing. Build 3+ hours before international departures from YUL after sightseeing. Disembarkation tours should end with adequate airport buffer — winter traffic and security lines vary."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Montréal cruise port guide", href: "/montreal-cruise-port-guide" },
              { label: "Québec City timing", href: "/quebec-city-from-montreal-cruise-port" },
              { label: "Best time to visit", href: "/best-time-to-visit-montreal" },
            ]}
            excursions={[
              { label: "Pre/post cruise tour", href: "/pre-post-cruise-montreal-tour" },
              { label: "Québec City day trip", href: "/quebec-city-from-montreal" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
