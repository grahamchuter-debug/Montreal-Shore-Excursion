import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { CruisePlanner } from "@/components/CruisePlanner";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/montreal-cruise-planner";

export const metadata: Metadata = pageMetadata({
  title: "Montréal Cruise Planner — Match Excursions To Hours Ashore",
  description:
    "Interactive Montréal cruise planner — select your hours in port and see which shore excursions fit with realistic transfer and return timing.",
  path,
});

export default function MontrealCruisePlannerPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Montréal Cruise Planner",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Montréal Cruise Planner" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Montréal Cruise Planner" }]}
        />
        <PageHero
          eyebrow="Plan your port day"
          title="Montréal cruise planner"
          subtitle="Select your hours ashore and see which excursions fit with realistic transfer and return timing."
        />

        <div className="mt-10 space-y-8">
          <CruisePassengerCallout>
            <p>
              Montréal is one of the richest French Canadian ports on Canada &amp; New
              England routes — match your tour to hours ashore and all-aboard deadlines
              at Alexandra Pier. Four hours suits Old Montréal walks; six hours opens
              highlights and basilica tours; eight hours allows food tours, Mount Royal,
              or Laurentians day trips.
            </p>
          </CruisePassengerCallout>
          <ReturnToShipBlock
            confidence="High"
            note="Build at least 30–45 minutes between your excursion's stated return and your ship's all-aboard time. Summer festival traffic near the Old Port and René-Lévesque Boulevard congestion can add unexpected delay on returns from downtown and Mount Royal."
          />
          <CruisePlanner />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
