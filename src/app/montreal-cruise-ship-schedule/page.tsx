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
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/montreal-cruise-ship-schedule";

const faqs = [
  {
    question: "When is peak cruise season in Montréal?",
    answer:
      "May through October — highest call frequency September and October during fall foliage Canada & New England cruises.",
  },
  {
    question: "How do I find my ship's Montréal arrival time?",
    answer:
      "Check your cruise line app, travel documents, and official port schedules. Confirm whether you are docking at Alexandra Pier or Iberville Terminal.",
  },
  {
    question: "What are repositioning cruises to Montréal?",
    answer:
      "Spring and fall ships moving between winter and summer regions — often longer port days and unique itineraries along the St. Lawrence.",
  },
  {
    question: "Does schedule information guarantee excursion availability?",
    answer:
      "No — enquire early for popular fall foliage dates and festival weekends when Old Montréal tours fill quickly.",
  },
  {
    question: "Can multiple ships dock the same day?",
    answer:
      "Yes on peak autumn weekends — taxi queues, pier security, and tour capacity tighten. Build extra return margin.",
  },
  {
    question: "Where should I plan excursions once I know my hours ashore?",
    answer:
      "Use our cruise planner to match tours to your effective hours in port after immigration clearance.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Montréal Cruise Ship Schedule — Peak Season & Planning Tips",
  description:
    "How to use Montréal cruise ship schedule information — peak season May–Oct, repositioning cruises, double-ship days, and linking to the cruise planner.",
  path,
});

export default function MontrealSchedulePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Montréal Cruise Ship Schedule",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Cruise Ship Schedule" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Cruise Ship Schedule" }]}
        />
        <PageHero
          eyebrow="Schedule planning"
          title="Montréal cruise ship schedule"
          subtitle="Peak season timing, repositioning cruises, and how to plan excursions from your arrival and departure times."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Your effective hours ashore — not the posted port time — determine which Montréal excursions fit. Use schedule information to calculate realistic planning windows."
            fields={{
              timeInPort: "Confirm on cruise line app",
              bestFor: "Matching tours to actual arrival",
              activityLevel: "Plan after knowing hours",
              familyFriendly: "Book early on peak dates",
              returnToShip: "Extra margin on double-ship days",
              popularTypes: "Varies by season",
            }}
          />

          <GuideSection title="How to use schedule information">
            <p>
              Start with your cruise line&apos;s official arrival and all-aboard times.
              Subtract immigration and gangway clearance (often 30–60 minutes after
              posted arrival) and a 30–45 minute return buffer before counting
              effective sightseeing hours.
            </p>
            <p>
              Enter your result in our{" "}
              <Link href="/montreal-cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>{" "}
              to see suggested excursions, then read{" "}
              <Link href="/one-day-in-montreal-from-a-cruise-ship" className="text-blue-800 hover:underline">
                one day in Montréal
              </Link>{" "}
              for sample itineraries.
            </p>
          </GuideSection>

          <GuideSection title="Peak season: May through October">
            <p>
              Montréal&apos;s cruise calendar peaks when the St. Lawrence is ice-free.
              September and October see the heaviest call volume during fall foliage
              repositioning — Old Montréal walking tours and Mount Royal scenic tours
              book early.
            </p>
            <p>
              Seasonal context:{" "}
              <Link href="/best-time-to-visit-montreal" className="text-blue-800 hover:underline">
                best time to visit Montréal
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Repositioning and turnaround cruises">
            <p>
              Spring and fall repositioning cruises often include Montréal as
              embarkation or disembarkation port — passengers may have full days without
              all-aboard pressure. Turnaround days also see higher terminal traffic;
              arrive early for check-in on embarkation.
            </p>
            <p>
              Pre/post planning:{" "}
              <Link href="/montreal-pre-post-cruise-guide" className="text-blue-800 hover:underline">
                pre/post cruise guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Double-ship days and festivals">
            <p>
              Peak autumn weekends and summer festivals can bring two large ships to
              Alexandra Pier simultaneously — longer taxi queues, crowded Place
              Jacques-Cartier, and extended pier security. Prioritise pre-booked tours
              with guaranteed pier return.
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Cruise planner", href: "/montreal-cruise-planner" },
              { label: "Montréal cruise port guide", href: "/montreal-cruise-port-guide" },
              { label: "Best shore excursions", href: "/best-montreal-shore-excursions" },
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
