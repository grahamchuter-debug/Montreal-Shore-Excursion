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

const path = "/montreal-food-tour-guide";

const faqs = [
  {
    question: "What food is Montréal famous for?",
    answer:
      "Poutine, Montreal-style bagels, smoked meat sandwiches, maple treats, and French bistro cuisine — a blend of French technique, Jewish deli tradition, and Québécois comfort food.",
  },
  {
    question: "Can you do a food tour on a cruise port day?",
    answer:
      "Yes on 5–7 hour calls. Old Montréal food walks suit shorter windows; Jean-Talon Market routes need 6+ hours with metro or coach transfer.",
  },
  {
    question: "What is the difference between Montreal and New York bagels?",
    answer:
      "Montreal bagels are smaller, sweeter, boiled in honey water, and baked in wood-fired ovens — typically sesame or poppy seed.",
  },
  {
    question: "Where is Jean-Talon Market?",
    answer:
      "In Little Italy north of downtown — roughly 15–20 minutes by metro from Old Montréal. Market-focused food tours include transfer.",
  },
  {
    question: "Can food tours accommodate dietary restrictions?",
    answer:
      "Many operators offer vegetarian options. Vegan, gluten-free, and allergy needs require advance notice when enquiring.",
  },
  {
    question: "How much food is included on a tour?",
    answer:
      "Tastings typically replace lunch — arrive hungry but not starving. Water is usually provided between stops.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Montréal Food Tour Guide — Poutine, Bagels & French Canadian Cuisine",
  description:
    "Montréal food guide for cruise passengers — poutine, smoked meat, bagels, Jean-Talon Market, Old Montréal cafés, and French Canadian food culture.",
  path,
});

export default function MontrealFoodGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Montréal Food Tour Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Montréal Food Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Montréal Food Guide" }]}
        />
        <PageHero
          eyebrow="Culinary culture"
          title="Montréal food tour guide"
          subtitle="Poutine, bagels, smoked meat, markets, and French Canadian dining for cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Montréal is one of North America's great food cities — French Canadian identity on a plate, timed for your port window with bonjour-first etiquette."
            fields={{
              timeInPort: "5–7 hours for food tours",
              bestFor: "Food, culture, walking",
              activityLevel: "Easy to moderate",
              familyFriendly: "Good for teens — dietary options vary",
              returnToShip: "High on organised tours",
              popularTypes: "Tasting walks, market tours",
            }}
          />

          <GuideSection title="French Canadian food identity">
            <p>
              Montréal eats differently from the rest of Canada — French technique
              meets North American ingredients, Jewish deli heritage, and Québécois
              comfort cooking. Cruise passengers taste this identity through poutine,
              smoked meat, Montreal bagels, maple syrup treats, and bistro classics in
              Old Montréal terraces.
            </p>
            <p>
              Cultural context lives in our{" "}
              <Link href="/french-canadian-culture-montreal-cruise-guide" className="text-blue-800 hover:underline">
                French Canadian culture guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Signature dishes to know">
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Poutine</strong> — fries, cheese curds, gravy; the unofficial national dish of Québec</li>
              <li><strong>Smoked meat</strong> — pepper-cured beef sandwiches; deli tradition since the early 1900s</li>
              <li><strong>Montreal bagels</strong> — wood-fired, honey-boiled, denser than many U.S. styles</li>
              <li><strong>Maple treats</strong> — taffy, cookies, and syrup in autumn cruise season</li>
              <li><strong>French bistro fare</strong> — onion soup, steak frites, crème brûlée in Vieux-Montréal</li>
            </ul>
          </GuideSection>

          <GuideSection title="Jean-Talon Market">
            <p>
              Jean-Talon Market in Little Italy ranks among North America&apos;s great
              public markets — produce, cheese, flowers, and prepared food under open
              roofs. Reaching it from Alexandra Pier requires metro or coach — realistic
              on 6+ hour calls via organised{" "}
              <Link href="/montreal-food-tour" className="text-blue-800 hover:underline">
                food tour
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Old Montréal cafés and terraces">
            <p>
              Rue Saint-Paul and Place Jacques-Cartier offer terrace dining without
              leaving the walkable cruise zone — ideal for 4-hour port calls when a
              full food tour is too long. Say bonjour when entering and merci when
              leaving.
            </p>
          </GuideSection>

          <GuideSection title="Booking a cruise-day food tour">
            <p>
              Guided food tours pace tastings around fixed end times with return to the
              Old Port. Avoid heavy pre-tour breakfasts — portions add up. Enquire about
              dietary needs when booking via our{" "}
              <Link href="/montreal-food-tour" className="text-blue-800 hover:underline">
                food tour page
              </Link>{" "}
              or{" "}
              <Link href="/enquire" className="text-blue-800 hover:underline">
                enquiry form
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Old Montréal food walks offer high return confidence. Market routes with metro transfer need 30–45 minutes before all-aboard margin. Summer heat affects walking pace between stops — stay hydrated."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Old Montréal from cruise port", href: "/old-montreal-from-cruise-port" },
              { label: "French Canadian culture", href: "/french-canadian-culture-montreal-cruise-guide" },
            ]}
            excursions={[
              { label: "Montréal food tour", href: "/montreal-food-tour" },
              { label: "Old Montréal walking tour", href: "/old-montreal-walking-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
