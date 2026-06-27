import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { ExcursionCard } from "@/components/ExcursionCard";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/best-montreal-shore-excursions";

const minPortHours: Record<string, string> = {
  "old-montreal-walking-tour": "4+",
  "st-lawrence-river-cruise": "3+",
  "notre-dame-basilica-tour": "4+",
  "montreal-city-highlights-tour": "6+",
  "mount-royal-scenic-tour": "5+",
  "montreal-food-tour": "5+",
  "montreal-bike-tour": "5+",
  "pre-post-cruise-montreal-tour": "Flexible",
  "quebec-city-from-montreal": "10+",
  "laurentians-day-trip": "8+",
};

const walkFromPier: Record<string, string> = {
  "old-montreal-walking-tour": "Yes — starts nearby",
  "st-lawrence-river-cruise": "Yes — Old Port quay",
  "notre-dame-basilica-tour": "Yes — Place d'Armes",
  "montreal-city-highlights-tour": "Coach pickup at pier",
  "mount-royal-scenic-tour": "Coach required",
  "montreal-food-tour": "Varies by route",
  "montreal-bike-tour": "Yes — Old Port depart",
  "pre-post-cruise-montreal-tour": "Flexible pickup",
  "quebec-city-from-montreal": "Coach from pier",
  "laurentians-day-trip": "Coach from pier",
};

const faqs = [
  {
    question: "What is the best shore excursion for first-time Montréal visitors?",
    answer:
      "Old Montréal walking tour or city highlights tour — both cover French Canadian heritage, Notre-Dame Basilica, and cobblestone streets within standard 6–8 hour port windows.",
  },
  {
    question: "Which Montréal excursion has the highest return-to-ship confidence?",
    answer:
      "Old Montréal walking tours, Notre-Dame Basilica tours, St. Lawrence river cruises, and city highlights tours typically rate High confidence when booked through cruise-focused operators.",
  },
  {
    question: "Is Québec City worth booking from a Montréal cruise?",
    answer:
      "Better as a pre/post cruise extension than a same-day shore excursion — roughly 3 hours each way by coach. Only consider on 10+ hour port calls with guaranteed return.",
  },
  {
    question: "Can you do a food tour on a Montréal cruise port day?",
    answer:
      "Yes on 5–7 hour calls. Old Montréal food walks suit shorter windows; Jean-Talon Market routes need 6+ hours with metro or coach transfer.",
  },
  {
    question: "Walking tour or city highlights tour?",
    answer:
      "Walking tour if you want depth in Vieux-Montréal only. Highlights tour if you prefer coach transport to Mount Royal and broader city coverage with shorter walks at each stop.",
  },
  {
    question: "How do I book Montréal shore excursions?",
    answer:
      "Use our enquiry form with ship name, port date, and hours ashore. We match options to your schedule and return-to-ship requirements.",
  },
  {
    question: "Does the best excursion include Notre-Dame Basilica interior?",
    answer:
      "Many walking and basilica tours include timed entry. Highlights tours may cover exterior only — confirm when enquiring.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Montréal Shore Excursions — Ranked For Cruise Passengers",
  description:
    "Best Montréal shore excursions ranked by return confidence, port time, and first-visit value — Old Montréal, Notre-Dame Basilica, Mount Royal, food tours, and Québec City timing.",
  path,
});

export default function BestMontrealExcursionsPage() {
  const ranked = [...excursions].sort((a, b) => {
    const order = { High: 0, Moderate: 1, Tight: 2 };
    return order[a.returnConfidence] - order[b.returnConfidence];
  });

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Montréal Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Montréal Shore Excursions" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best Montréal Shore Excursions" },
          ]}
        />
        <PageHero
          eyebrow="Curated ranking"
          title="Best Montréal shore excursions"
          subtitle="Ranked by return confidence, hours ashore, and first-visit value for cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Montréal offers exceptional shore excursions for a walkable port — but the best choice depends on your hours ashore, mobility, and whether this is your first visit to French Canada."
            fields={{
              timeInPort: "6–8 hours ideal for top-ranked tours",
              bestFor: "Old Montréal first; day trips need longer calls",
              activityLevel: "Varies — river cruise easy; bike tour moderate",
              familyFriendly: "Strong across ranked options",
              returnToShip: "Prioritise High confidence on short calls",
              popularTypes: "Walking, highlights, food, scenic coach",
            }}
          />

          <GuideSection title="How we rank excursions">
            <p>
              Rankings prioritise <strong>return-to-ship confidence</strong>, then
              first-visit value, then fit with typical 6–8 hour port windows. Excursions
              requiring highway travel to Québec City or the Laurentians rank lower not
              because they are poor experiences, but because cruise timing risk rises.
            </p>
            <p>
              Start with our{" "}
              <Link href="/montreal-cruise-port-guide" className="text-blue-800 hover:underline">
                Montréal cruise port guide
              </Link>{" "}
              and{" "}
              <Link href="/one-day-in-montreal-from-a-cruise-ship" className="text-blue-800 hover:underline">
                one day in Montréal
              </Link>{" "}
              itineraries before booking.
            </p>
          </GuideSection>

          <GuideSection title="Quick comparison">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[48rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Excursion</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Duration</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Min. port hours</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Return</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Walk from pier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {ranked.map((e) => (
                    <tr key={e.slug}>
                      <td className="px-4 py-3">
                        <Link href={e.path} className="font-medium text-blue-800 hover:underline">
                          {e.shortTitle}
                        </Link>
                      </td>
                      <td className="px-4 py-3">{e.duration}</td>
                      <td className="px-4 py-3">{minPortHours[e.slug] ?? "5+"}</td>
                      <td className="px-4 py-3">{e.returnConfidence}</td>
                      <td className="px-4 py-3">{walkFromPier[e.slug] ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Ranked excursions">
            <p>
              Full detail on each tour — enquire via individual pages or our{" "}
              <Link href="/enquire" className="text-blue-800 hover:underline">
                enquiry form
              </Link>
              .
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-6">
              {ranked.map((e) => (
                <ExcursionCard key={e.slug} excursion={e} />
              ))}
            </div>
          </GuideSection>

          <GuideSection title="Top picks by scenario">
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong>First visit, 6–8 hours:</strong>{" "}
                <Link href="/montreal-city-highlights-tour" className="text-blue-800 hover:underline">
                  City highlights tour
                </Link>{" "}
                — Old Montréal, Mount Royal lookout, and city orientation in one booking.
              </li>
              <li>
                <strong>French culture lovers who walk:</strong>{" "}
                <Link href="/old-montreal-walking-tour" className="text-blue-800 hover:underline">
                  Old Montréal walking tour
                </Link>{" "}
                — cobblestones, basilica, Place Jacques-Cartier.
              </li>
              <li>
                <strong>Short port call (4 hours):</strong>{" "}
                <Link href="/old-montreal-walking-tour" className="text-blue-800 hover:underline">
                  Old Montréal walk
                </Link>{" "}
                or{" "}
                <Link href="/st-lawrence-river-cruise" className="text-blue-800 hover:underline">
                  St. Lawrence river cruise
                </Link>
                .
              </li>
              <li>
                <strong>Food-focused:</strong>{" "}
                <Link href="/montreal-food-tour" className="text-blue-800 hover:underline">
                  Montréal food tour
                </Link>{" "}
                — poutine, bagels, smoked meat on a cruise-timed walk.
              </li>
              <li>
                <strong>Scenery and photography:</strong>{" "}
                <Link href="/mount-royal-scenic-tour" className="text-blue-800 hover:underline">
                  Mount Royal scenic tour
                </Link>{" "}
                — Kondiaronk Belvedere panorama.
              </li>
              <li>
                <strong>Pre/post cruise:</strong>{" "}
                <Link href="/pre-post-cruise-montreal-tour" className="text-blue-800 hover:underline">
                  Pre/post cruise tour
                </Link>{" "}
                — flexible pacing without all-aboard pressure.
              </li>
              <li>
                <strong>Repeat visitors, 8+ hours:</strong>{" "}
                <Link href="/laurentians-day-trip" className="text-blue-800 hover:underline">
                  Laurentians day trip
                </Link>{" "}
                — mountain scenery and village stops.
              </li>
              <li>
                <strong>Québec City:</strong>{" "}
                <Link href="/quebec-city-from-montreal" className="text-blue-800 hover:underline">
                  Day trip page
                </Link>{" "}
                — read honest timing in our{" "}
                <Link href="/quebec-city-from-montreal-cruise-port" className="text-blue-800 hover:underline">
                  Québec City timing guide
                </Link>{" "}
                first.
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="All ten excursion pages">
            <ul className="list-disc space-y-2 pl-5">
              <li><Link href="/old-montreal-walking-tour" className="text-blue-800 hover:underline">Old Montréal walking tour</Link></li>
              <li><Link href="/montreal-city-highlights-tour" className="text-blue-800 hover:underline">City highlights tour</Link></li>
              <li><Link href="/notre-dame-basilica-tour" className="text-blue-800 hover:underline">Notre-Dame Basilica tour</Link></li>
              <li><Link href="/mount-royal-scenic-tour" className="text-blue-800 hover:underline">Mount Royal scenic tour</Link></li>
              <li><Link href="/montreal-food-tour" className="text-blue-800 hover:underline">Montréal food tour</Link></li>
              <li><Link href="/montreal-bike-tour" className="text-blue-800 hover:underline">Montréal bike tour</Link></li>
              <li><Link href="/st-lawrence-river-cruise" className="text-blue-800 hover:underline">St. Lawrence river cruise</Link></li>
              <li><Link href="/pre-post-cruise-montreal-tour" className="text-blue-800 hover:underline">Pre/post cruise tour</Link></li>
              <li><Link href="/quebec-city-from-montreal" className="text-blue-800 hover:underline">Québec City day trip</Link></li>
              <li><Link href="/laurentians-day-trip" className="text-blue-800 hover:underline">Laurentians day trip</Link></li>
            </ul>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Prioritise High-confidence excursions on 4–6 hour calls — Old Montréal walks, basilica tours, and river cruises. Build 30–45 minutes before all-aboard. Highway excursions to Québec City or the Laurentians need 60 minutes margin and longer port windows."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "One day in Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
              { label: "Old Montréal from cruise port", href: "/old-montreal-from-cruise-port" },
              { label: "Cruise planner", href: "/montreal-cruise-planner" },
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
