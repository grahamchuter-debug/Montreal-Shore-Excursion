import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/faq";

const faqs = [
  {
    question: "Where do cruise ships dock in Montréal?",
    answer:
      "Most large ships use Alexandra Pier and the Iberville Cruise Terminal in the Old Port, at the eastern edge of Old Montréal. The terminals sit within walking distance of Place d'Armes and Notre-Dame Basilica.",
  },
  {
    question: "Can I walk from the Montréal cruise terminal to Old Montréal?",
    answer:
      "Yes — Place d'Armes and Notre-Dame Basilica are roughly 10–15 minutes on foot from Alexandra Pier. Place Jacques-Cartier and Rue Saint-Paul are another 5–10 minutes west.",
  },
  {
    question: "What is the best shore excursion in Montréal?",
    answer:
      "First-time visitors typically choose an Old Montréal walking tour or city highlights tour. River cruises suit short port days. See our best excursions ranking for full comparison.",
  },
  {
    question: "Can I visit Québec City from a Montréal cruise ship?",
    answer:
      "Not realistically on standard 6–8 hour port days — roughly 3 hours each way by coach. Add 1–2 nights in Québec City as a pre/post extension instead.",
  },
  {
    question: "Do I need to speak French in Montréal?",
    answer:
      "No — Montréal is bilingual and tourism staff usually speak English. Say bonjour when entering shops and merci when leaving as a courtesy.",
  },
  {
    question: "How early should I return to the ship in Montréal?",
    answer:
      "Build at least 30–45 minutes before all-aboard. Summer festival traffic near the Old Port and René-Lévesque Boulevard congestion can delay taxi and coach returns.",
  },
  {
    question: "How do I enquire about Montréal shore excursions?",
    answer:
      "Use our enquiry form with ship name, port date, hours ashore, and interests. We respond with options matched to your schedule and return-to-ship requirements.",
  },
  {
    question: "Does Notre-Dame Basilica require tickets?",
    answer:
      "Yes — interior visits require timed tickets purchased in advance. Organised basilica tours typically include entry coordination.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Montréal Shore Excursions FAQ",
  description:
    "Frequently asked questions about Montréal shore excursions, Alexandra Pier cruise terminal, Old Montréal timing, and return-to-ship planning.",
  path,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Montréal Shore Excursions FAQ",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <PageHero
          eyebrow="Common questions"
          title="Montréal shore excursions FAQ"
          subtitle="Port logistics, Old Montréal planning, French Canadian culture, and return-to-ship advice for Québec cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              Montréal is a premier Canada &amp; New England cruise port — match your tour
              to hours ashore and all-aboard deadlines at Alexandra Pier. Old Montréal,
              Notre-Dame Basilica, and the St. Lawrence riverfront are walkable or
              tour-accessible on most standard port calls.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="Quick links">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/montreal-cruise-port-guide" className="text-blue-800 underline">
                  Montréal cruise port guide
                </Link>
              </li>
              <li>
                <Link href="/old-montreal-from-cruise-port" className="text-blue-800 underline">
                  Old Montréal from cruise port
                </Link>
              </li>
              <li>
                <Link href="/best-montreal-shore-excursions" className="text-blue-800 underline">
                  Best shore excursions
                </Link>
              </li>
              <li>
                <Link href="/montreal-cruise-planner" className="text-blue-800 underline">
                  Cruise planner
                </Link>
              </li>
              <li>
                <Link href="/enquire" className="text-blue-800 underline">
                  Book or enquire
                </Link>
              </li>
            </ul>
          </GuideSection>

          <FAQSection faqs={faqs} title="All questions" />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
