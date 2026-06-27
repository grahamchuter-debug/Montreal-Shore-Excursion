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

const path = "/quebec-city-from-montreal-cruise-port";

const faqs = [
  {
    question: "Can you visit Québec City on a Montréal cruise port day?",
    answer:
      "Only if your effective time ashore exceeds 10 hours and you accept tight return margins. Roughly 3 hours each way by coach leaves insufficient sightseeing time on standard 6–8 hour calls.",
  },
  {
    question: "How far is Québec City from Montréal?",
    answer:
      "About 250 km (155 miles) northeast — roughly 3 hours each way by coach on Autoroute 20 along the St. Lawrence.",
  },
  {
    question: "What is the better alternative to a same-day Québec City trip?",
    answer:
      "Add 1–2 nights in Québec City before or after your cruise. See our pre/post cruise guide for logistics.",
  },
  {
    question: "Is the drive to Québec City scenic?",
    answer:
      "Autoroute 20 follows the St. Lawrence with rural Québec landscape — fall foliage makes autumn departures especially beautiful.",
  },
  {
    question: "What would you see in Québec City on a rushed day trip?",
    answer:
      "Old Québec UNESCO district — Place Royale, Petit-Champlain, Château Frontenac viewpoints, and possibly Montmorency Falls depending on itinerary.",
  },
  {
    question: "When is Québec City realistic for cruise passengers?",
    answer:
      "Pre/post cruise extensions, exceptionally long port days (10+ hours), or disembarkation with an overnight stay — not standard same-day shore excursions.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Québec City From Montréal Cruise Port — Honest Timing Guide",
  description:
    "Honest Québec City timing from Montréal cruise port — 3 hours each way, why pre/post beats same-day, and when 10+ hour port calls might work.",
  path,
});

export default function QuebecCityTimingGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Québec City From Montréal Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Québec City Timing Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Québec City Timing Guide" }]}
        />
        <PageHero
          eyebrow="Honest assessment"
          title="Québec City from Montréal cruise port"
          subtitle="Three hours each way — why pre/post cruise extensions beat same-day shore excursions."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Québec City is one of North America's most historic cities — but distance from Montréal makes same-day shore excursions risky unless your ship grants exceptional time ashore."
            fields={{
              timeInPort: "10+ hours minimum for same-day; pre/post recommended",
              bestFor: "History, UNESCO Old Town, French heritage",
              activityLevel: "Easy coach; moderate walking in Old Québec",
              familyFriendly: "Good on longer days; tiring for young children",
              returnToShip: "Tight on port days",
              popularTypes: "Full-day coach tours (pre/post)",
            }}
          />

          <GuideSection title="The math on a port day">
            <p>
              Québec City sits roughly <strong>250 km northeast</strong> of Montréal —
              about <strong>3 hours each way</strong> by coach. That is 6 hours of
              travel before any sightseeing begins. On a typical 8-hour port call with
              30–45 minutes immigration clearance and 30–45 minutes return buffer, you
              might have 90 minutes in Old Québec — insufficient for a city that deserves
              a full day.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Port hours</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Québec City same-day?</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3">4–6 hours</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Old Montréal only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">6–8 hours</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Highlights tour or food tour</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">8–10 hours</td>
                    <td className="px-4 py-3">Borderline</td>
                    <td className="px-4 py-3">Still prefer Montréal depth</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">10+ hours</td>
                    <td className="px-4 py-3">Possible with risk</td>
                    <td className="px-4 py-3">Organised tour with guaranteed return</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Pre/post</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">1–2 nights in Old Québec ideal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Why pre/post beats same-day">
            <p>
              Old Québec&apos;s cobblestones, Château Frontenac, Place Royale, and
              Petit-Champlain form a UNESCO World Heritage site that feels more European
              than anywhere else in North America. Rushing it between 6 hours of coach
              travel defeats the purpose.
            </p>
            <p>
              Add 1–2 nights after disembarkation or before embarkation. Our{" "}
              <Link href="/montreal-pre-post-cruise-guide" className="text-blue-800 hover:underline">
                pre/post cruise guide
              </Link>{" "}
              covers hotel areas, luggage, and train options to Québec City.
            </p>
          </GuideSection>

          <GuideSection title="If you still want a day trip">
            <p>
              Organised{" "}
              <Link href="/quebec-city-from-montreal" className="text-blue-800 hover:underline">
                Québec City day trips
              </Link>{" "}
              exist for passengers with exceptional port windows — full-day coach format
              with Moderate to Tight return confidence. Winter snow delays and summer
              construction on Autoroute 20 add variables.
            </p>
            <p>
              For nature closer than Québec City, consider the{" "}
              <Link href="/laurentians-day-trip" className="text-blue-800 hover:underline">
                Laurentians day trip
              </Link>{" "}
              (1–1.5 hours each way) on 8+ hour calls.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Tight"
            note="Same-day Québec City from Montréal rates Tight return confidence on standard port calls — 6 hours of driving alone leaves minimal margin for traffic delays, border-free but weather-dependent winter conditions, and pier security queues. Pre/post extensions rate High when you control your schedule."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Pre/post cruise guide", href: "/montreal-pre-post-cruise-guide" },
              { label: "One day in Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
            ]}
            excursions={[
              { label: "Québec City day trip", href: "/quebec-city-from-montreal" },
              { label: "Pre/post cruise tour", href: "/pre-post-cruise-montreal-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
