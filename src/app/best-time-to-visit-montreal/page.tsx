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

const path = "/best-time-to-visit-montreal";

const faqs = [
  {
    question: "When is the best time to cruise to Montréal?",
    answer:
      "May through October is peak season — warm weather, festivals, and fall foliage on September–October Canada & New England itineraries. Winter calls offer snow scenery but cold and shorter daylight.",
  },
  {
    question: "When is fall foliage best in Montréal?",
    answer:
      "Mid-September through mid-October — Mount Royal and St. Lawrence cruises peak during this window.",
  },
  {
    question: "What festivals affect Montréal cruise passengers?",
    answer:
      "Just for Laughs (July), Osheaga (August), and numerous Old Port events can crowd Vieux-Montréal — plan extra return margin on festival weekends.",
  },
  {
    question: "Are winter Montréal cruise calls worth it?",
    answer:
      "Winter offers snow-covered Old Montréal and fewer crowds, but cold, ice on cobblestones, and limited outdoor touring require heavy layers and realistic expectations.",
  },
  {
    question: "How does Montréal fit Canada & New England itineraries?",
    answer:
      "Montréal often appears as embarkation, disembarkation, or mid-itinerary call alongside Québec City, Saguenay, and St. Lawrence river ports — fall repositioning cruises are especially popular.",
  },
  {
    question: "Is summer hot in Montréal?",
    answer:
      "June through August can reach 30°C (86°F) with humidity — carry water on cobblestone walks and favour morning touring.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Time To Visit Montréal — Seasons, Foliage & Cruise Calendar",
  description:
    "Best time to visit Montréal for cruise passengers — peak season May–Oct, fall foliage, festivals, winter calls, and Canada & New England itinerary context.",
  path,
});

export default function BestTimeMontrealPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Time To Visit Montréal",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Time To Visit" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Best Time To Visit" }]}
        />
        <PageHero
          eyebrow="Seasonal planning"
          title="Best time to visit Montréal"
          subtitle="Peak cruise season, fall foliage, festivals, winter calls, and Canada & New England context."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Montréal transforms by season — French Canadian festivals in summer, maple colour in autumn, snow silence in winter. Match your packing and itinerary to your cruise month."
            fields={{
              timeInPort: "Varies by itinerary",
              bestFor: "May–Oct general; Sep–Oct for foliage",
              activityLevel: "Season-dependent",
              familyFriendly: "Strong May–October",
              returnToShip: "Allow extra margin on festival weekends",
              popularTypes: "Walking tours peak in autumn",
            }}
          />

          <GuideSection title="Peak season: May through October">
            <p>
              Most Canada &amp; New England cruises calling at Montréal operate May
              through October when the St. Lawrence is navigable and weather suits
              walking tours. Alexandra Pier sees highest traffic September–October
              during fall foliage repositioning cruises.
            </p>
            <p>
              See our{" "}
              <Link href="/montreal-cruise-ship-schedule" className="text-blue-800 hover:underline">
                cruise ship schedule guide
              </Link>{" "}
              for how to use schedule information.
            </p>
          </GuideSection>

          <GuideSection title="Fall foliage cruises">
            <p>
              Mid-September through mid-October delivers peak maple colour on Mount
              Royal, the Laurentians, and St. Lawrence river valleys — the signature
              experience on autumn Canada cruises. Book{" "}
              <Link href="/mount-royal-scenic-tour" className="text-blue-800 hover:underline">
                Mount Royal scenic tours
              </Link>{" "}
              and{" "}
              <Link href="/laurentians-day-trip" className="text-blue-800 hover:underline">
                Laurentians day trips
              </Link>{" "}
              early on foliage calls.
            </p>
          </GuideSection>

          <GuideSection title="Summer festivals">
            <p>
              July and August bring Just for Laughs comedy festival, Osheaga music
              festival, and Old Port waterfront events. Vieux-Montréal crowds increase
              — street performers and terrace dining thrive, but taxi returns and pier
              security queues need extra margin.
            </p>
          </GuideSection>

          <GuideSection title="Winter cruise calls">
            <p>
              Winter calls offer snow-dusted cobblestones and fewer tourists — atmospheric
              for photographers willing to brave cold. Cobblestones ice over; Mount Royal
              hiking requires proper gear. Food tours and basilica interiors remain
              comfortable climate-controlled options.
            </p>
          </GuideSection>

          <GuideSection title="Canada & New England itinerary context">
            <p>
              Montréal often anchors itineraries that include Québec City, Saguenay,
              and other St. Lawrence river ports. Embarkation and disembarkation here
              suit pre/post extensions — see our{" "}
              <Link href="/montreal-pre-post-cruise-guide" className="text-blue-800 hover:underline">
                pre/post guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Season-by-season summary">
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Season</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Highlights</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Pack</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Spring (May–Jun)</td>
                    <td className="px-4 py-3">Mild walks, fewer crowds than summer</td>
                    <td className="px-4 py-3">Layers, rain shell</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Summer (Jul–Aug)</td>
                    <td className="px-4 py-3">Festivals, terraces, river cruises</td>
                    <td className="px-4 py-3">Sunscreen, water, light clothing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Fall (Sep–Oct)</td>
                    <td className="px-4 py-3">Foliage, peak cruise season</td>
                    <td className="px-4 py-3">Layers, camera</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Winter (Nov–Mar)</td>
                    <td className="px-4 py-3">Snow scenery, indoor focus</td>
                    <td className="px-4 py-3">Heavy coat, traction footwear</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Montréal cruise port guide", href: "/montreal-cruise-port-guide" },
              { label: "Mount Royal guide", href: "/mount-royal-from-cruise-port" },
              { label: "Cruise planner", href: "/montreal-cruise-planner" },
            ]}
            excursions={[
              { label: "Mount Royal scenic tour", href: "/mount-royal-scenic-tour" },
              { label: "Laurentians day trip", href: "/laurentians-day-trip" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
