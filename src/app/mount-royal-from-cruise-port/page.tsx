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

const path = "/mount-royal-from-cruise-port";

const faqs = [
  {
    question: "Can you walk to Mount Royal from the cruise port?",
    answer:
      "Not realistically on a port day — the summit is 4+ km uphill from Alexandra Pier. Coach, taxi, or organised scenic tour is required.",
  },
  {
    question: "Is Mount Royal worth it on a short port call?",
    answer:
      "On 4-hour calls, prioritise Old Montréal instead. With 6+ hours, a Mount Royal lookout combined with Vieux-Montréal works well.",
  },
  {
    question: "Which Mount Royal lookout is best?",
    answer:
      "Kondiaronk Belvedere offers the classic downtown and St. Lawrence panorama. Camilien-Houde lookout provides an alternate angle — tour itineraries vary.",
  },
  {
    question: "Best season for Mount Royal views?",
    answer:
      "Late September and October offer spectacular fall foliage on Canada & New England cruises. Summer haze can soften distant views — morning is often clearest.",
  },
  {
    question: "How long does a Mount Royal excursion take?",
    answer:
      "Scenic tours typically run 3–4 hours including coach transfer from the Old Port and optional Old Montréal walking component.",
  },
  {
    question: "Who designed Mount Royal Park?",
    answer:
      "Frederick Law Olmsted — the same landscape architect behind New York's Central Park — designed the park that gives Montréal its name.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Mount Royal From Cruise Port — Lookout, Coach Access & Fall Foliage",
  description:
    "Mount Royal guide for cruise passengers — Kondiaronk Belvedere, coach vs walk from Alexandra Pier, fall foliage timing, and return-to-ship advice.",
  path,
});

export default function MountRoyalGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Mount Royal From Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Mount Royal Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Mount Royal Guide" }]}
        />
        <PageHero
          eyebrow="Scenic overview"
          title="Mount Royal from the cruise port"
          subtitle="Belvedere panoramas, coach access, fall foliage, and honest timing from Alexandra Pier."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Mount Royal delivers Montréal's postcard view — downtown towers, the St. Lawrence River, and Laurentian foothills on clear days. It requires transport from the cruise terminal."
            fields={{
              timeInPort: "5–7 hours recommended",
              bestFor: "Photography, scenery, city orientation",
              activityLevel: "Easy at belvedere — optional trail walks",
              familyFriendly: "Excellent",
              returnToShip: "High on organised tours",
              popularTypes: "Coach scenic tours, highlights combos",
            }}
          />

          <GuideSection title="Mount Royal Park overview">
            <p>
              Mount Royal (Mont-Royal) is the hill that gave Montréal its name — a
              protected urban park designed by Frederick Law Olmsted with forest trails,
              Beaver Lake, and lookouts over the city and St. Lawrence River. For cruise
              passengers, the Kondiaronk Belvedere delivers the iconic skyline photo
              without a strenuous hike.
            </p>
            <p>
              The park reflects Montréal&apos;s dual identity — English landscape design
              on a French-founded city, green space above a bilingual metropolis.
            </p>
          </GuideSection>

          <GuideSection title="Coach vs walking from Alexandra Pier">
            <p>
              <strong>Coach or van (recommended):</strong> 15–20 minutes from the Old
              Port to belvedere parking. Organised{" "}
              <Link href="/mount-royal-scenic-tour" className="text-blue-800 hover:underline">
                Mount Royal scenic tours
              </Link>{" "}
              and{" "}
              <Link href="/montreal-city-highlights-tour" className="text-blue-800 hover:underline">
                city highlights tours
              </Link>{" "}
              include pier pickup and cruise-timed return.
            </p>
            <p>
              <strong>Taxi:</strong> Feasible independently but coordinating return
              against all-aboard adds stress — prefer organised tours on port days.
            </p>
            <p>
              <strong>Walking/hiking:</strong> The summit is 4+ km uphill from
              Alexandra Pier — not realistic within port hours. Save hiking for pre/post
              cruise days.
            </p>
          </GuideSection>

          <GuideSection title="Fall foliage">
            <p>
              September and October Canada &amp; New England cruises coincide with peak
              maple colour on Mount Royal — gold, orange, and red canopy against the
              downtown skyline. Morning port calls often have clearer sightlines before
              afternoon haze.
            </p>
            <p>
              Summit temperatures run cooler and windier than the waterfront — bring a
              layer even on mild autumn days. See our{" "}
              <Link href="/best-time-to-visit-montreal" className="text-blue-800 hover:underline">
                best time to visit
              </Link>{" "}
              guide for seasonal context.
            </p>
          </GuideSection>

          <GuideSection title="Combining with Old Montréal">
            <p>
              Most scenic tours pair the belvedere with Old Montréal walking — the
              standard 6–8 hour port day formula. Do not attempt Mount Royal alone on
              4-hour calls; Vieux-Montréal delivers better value per minute ashore.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Mount Royal scenic tours use fixed coach schedules with proven return timing to Alexandra Pier. Build 30–45 minutes before all-aboard. Parc Avenue traffic is usually manageable on port days but summer festival weekends can add delay."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Old Montréal from cruise port", href: "/old-montreal-from-cruise-port" },
              { label: "One day in Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
            ]}
            excursions={[
              { label: "Mount Royal scenic tour", href: "/mount-royal-scenic-tour" },
              { label: "City highlights tour", href: "/montreal-city-highlights-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
