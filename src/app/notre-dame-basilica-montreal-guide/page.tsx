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

const path = "/notre-dame-basilica-montreal-guide";

const faqs = [
  {
    question: "Do you need tickets for Notre-Dame Basilica?",
    answer:
      "Yes — interior visits require timed tickets purchased in advance online or through an organised tour. Walk-up availability is limited, especially on cruise days.",
  },
  {
    question: "How far is Notre-Dame Basilica from the cruise terminal?",
    answer:
      "Place d'Armes sits roughly 800 metres from Alexandra Pier — 10–15 minutes on foot through Old Montréal.",
  },
  {
    question: "How long should you allow inside Notre-Dame Basilica?",
    answer:
      "Plan 30–45 minutes for the interior plus time in Place d'Armes. A full Old Montréal walk adds 1–2 hours.",
  },
  {
    question: "What is special about the basilica interior?",
    answer:
      "Deep blue vaulted ceilings studded with gold stars, intricate wood carvings, and stained glass narrating Montréal's Catholic founders — unlike almost any church in North America.",
  },
  {
    question: "Is photography allowed inside?",
    answer:
      "Personal photography is generally permitted without flash. Respect ongoing services and staff guidance.",
  },
  {
    question: "Does the basilica tour include Old Montréal?",
    answer:
      "Most cruise-focused basilica tours combine timed entry with a short Old Montréal orientation walk.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Notre-Dame Basilica Montréal Guide — History, Tickets & Cruise Timing",
  description:
    "Notre-Dame Basilica guide for cruise passengers — French Catholic heritage, interior highlights, timed tickets, walking time from Alexandra Pier, and return advice.",
  path,
});

export default function NotreDameBasilicaGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Notre-Dame Basilica Montréal Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Notre-Dame Basilica Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Notre-Dame Basilica Guide" }]}
        />
        <PageHero
          eyebrow="Sacred architecture"
          title="Notre-Dame Basilica Montréal guide"
          subtitle="History, tickets, interior highlights, and cruise-day timing from Alexandra Pier."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Notre-Dame Basilica is Montréal's most photographed interior — French Catholic heritage expressed in blue and gold, minutes from the cruise terminal in Place d'Armes."
            fields={{
              timeInPort: "4–6 hours recommended",
              bestFor: "Architecture, sacred art, photography",
              activityLevel: "Easy — short walk from pier",
              familyFriendly: "Good — awe-inspiring for all ages",
              returnToShip: "High on organised tours",
              popularTypes: "Basilica + Old Montréal combos",
            }}
          />

          <GuideSection title="History and French Catholic heritage">
            <p>
              Notre-Dame Basilica of Montréal replaced an earlier parish church on Place
              d&apos;Armes — the spiritual heart of a city founded by French Catholic
              settlers in 1642. The current neo-Gothic facade dates to the 1820s; the
              interior renovation of the 1870s created the deep blue vaulted ceilings
              and gold stars that define Montréal&apos;s visual identity.
            </p>
            <p>
              For cruise passengers, the basilica connects directly to Québécois culture
              — Catholic feast days, French-language services, and architectural ambition
              that distinguishes Montréal from English-speaking Canada. Read our{" "}
              <Link href="/french-canadian-culture-montreal-cruise-guide" className="text-blue-800 hover:underline">
                French Canadian culture guide
              </Link>{" "}
              for broader context.
            </p>
          </GuideSection>

          <GuideSection title="Interior highlights">
            <ul className="list-disc space-y-2 pl-5">
              <li>Blue vaulted nave with gold stars — the signature view</li>
              <li>Intricate wood carvings on the pulpit and sanctuary</li>
              <li>Stained glass telling the story of Montréal&apos;s religious founders</li>
              <li>Chapel of Notre-Dame du Sacré-Cœur (when open — check schedules)</li>
              <li>Place d&apos;Armes square — facade photography and street life</li>
            </ul>
            <p>
              Evening sound and light experiences (Aura) exist for overnight visitors
              but rarely fit standard daytime port calls.
            </p>
          </GuideSection>

          <GuideSection title="Tickets and timed entry">
            <p>
              Interior visits require timed admission purchased in advance. Self-guided
              visitors should book online before leaving the ship — same-day availability
              at the basilica box office is unreliable on busy cruise days.
            </p>
            <p>
              Organised{" "}
              <Link href="/notre-dame-basilica-tour" className="text-blue-800 hover:underline">
                basilica tours
              </Link>{" "}
              typically include ticket coordination and Old Montréal context — the
              lowest-stress option on a port day.
            </p>
          </GuideSection>

          <GuideSection title="Timing from Alexandra Pier">
            <p>
              Walk west from the cruise terminal along Rue de la Commune or Rue
              Saint-Paul — 10–15 minutes to Place d&apos;Armes. Allow your timed entry
              slot plus 30–45 minutes inside, then Old Montréal exploration or lunch
              at Place Jacques-Cartier if hours allow.
            </p>
            <p>
              See{" "}
              <Link href="/old-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                Old Montréal from cruise port
              </Link>{" "}
              for full district timing.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Basilica visits stay within Old Montréal — high return confidence when you manage your timed entry slot and build 30–45 minutes before all-aboard. Do not combine with Mount Royal or Jean-Talon Market on 4-hour calls."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Old Montréal from cruise port", href: "/old-montreal-from-cruise-port" },
              { label: "One day in Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
            ]}
            excursions={[
              { label: "Notre-Dame Basilica tour", href: "/notre-dame-basilica-tour" },
              { label: "Old Montréal walking tour", href: "/old-montreal-walking-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
