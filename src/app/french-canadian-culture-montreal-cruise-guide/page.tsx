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

const path = "/french-canadian-culture-montreal-cruise-guide";

const faqs = [
  {
    question: "Do you need to speak French in Montréal?",
    answer:
      "No — Montréal is officially bilingual and tourism staff usually speak English. Starting with bonjour and closing with merci shows respect for Québécois identity.",
  },
  {
    question: "What makes Montréal different from the rest of Canada?",
    answer:
      "French language, Catholic architectural heritage, distinct cuisine (poutine, smoked meat, Montreal bagels), and a legal and cultural framework rooted in Québec's French colonial history.",
  },
  {
    question: "What is appropriate language etiquette for cruise passengers?",
    answer:
      "Say bonjour when entering shops and restaurants, merci when leaving, and s'il vous plaît for please. Staff will typically switch to English if you need it.",
  },
  {
    question: "How does Catholic heritage appear in Montréal?",
    answer:
      "Notre-Dame Basilica, church spires throughout Vieux-Montréal, religious feast days, and French-language services reflect centuries of Catholic settlement.",
  },
  {
    question: "What festivals showcase French Canadian culture?",
    answer:
      "Just for Laughs, Francofolies, Montreal International Jazz Festival, and winter Igloofest — summer calls overlap with major events near the Old Port.",
  },
  {
    question: "How does food express French Canadian identity?",
    answer:
      "French technique blended with Québécois ingredients — poutine, tourtière, maple syrup, and bistro classics distinguish Montréal from English Canadian cities.",
  },
  {
    question: "Where should cruise passengers experience culture on a port day?",
    answer:
      "Old Montréal walking tours, Notre-Dame Basilica, Place Jacques-Cartier, and food tours offer the highest cultural density within walking distance of Alexandra Pier.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "French Canadian Culture Montréal Cruise Guide — Language, Heritage & Tips",
  description:
    "French Canadian culture guide for Montréal cruise passengers — bonjour/merci etiquette, bilingual city, festivals, cuisine identity, Catholic architecture, and practical port-day tips.",
  path,
});

export default function FrenchCanadianCultureGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "French Canadian Culture Montréal Cruise Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "French Canadian Culture Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "French Canadian Culture Guide" },
          ]}
        />
        <PageHero
          eyebrow="Cultural authority"
          title="French Canadian culture for cruise passengers"
          subtitle="Language, heritage, festivals, cuisine, and practical tips for understanding Montréal beyond the cobblestones."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Montréal is North America's French-speaking capital — a bilingual city where Québécois identity shapes language, architecture, food, and daily life. Cruise passengers who engage with culture, not just sights, remember this port longest."
            fields={{
              timeInPort: "4+ hours for cultural immersion in Vieux-Montréal",
              bestFor: "Language, history, food, architecture enthusiasts",
              activityLevel: "Easy in walkable Old Montréal",
              familyFriendly: "Excellent — plazas and street life engage all ages",
              returnToShip: "High in Old Montréal district",
              popularTypes: "Walking tours, basilica visits, food tours",
            }}
          />

          <GuideSection title="Language: bonjour, merci, and bilingual life">
            <p>
              Québec&apos;s official language is French — Bill 101 established French
              as the language of public life, education, and commerce. Montréal
              operates bilingually in practice: you will hear French on the street,
              see French signage first, and receive English service in tourism without
              difficulty.
            </p>
            <p>
              <strong>Practical phrases for cruise passengers:</strong>
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Bonjour</strong> — hello (always when entering a shop or restaurant)</li>
              <li><strong>Merci</strong> — thank you</li>
              <li><strong>S&apos;il vous plaît</strong> — please</li>
              <li><strong>Parlez-vous anglais?</strong> — do you speak English?</li>
              <li><strong>L&apos;addition, s&apos;il vous plaît</strong> — the bill, please</li>
            </ul>
            <p>
              Attempting French first — even a single bonjour — signals respect. Most
              staff respond warmly in English when needed.
            </p>
          </GuideSection>

          <GuideSection title="French heritage and founding story">
            <p>
              Montréal was founded in 1642 as a French Catholic missionary settlement
              at the confluence of the St. Lawrence and Ottawa rivers. Vieux-Montréal
              preserves this layer — fortified walls, Place d&apos;Armes, and the
              Notre-Dame Basilica anchor a narrative of fur trade, Catholic missions,
              and eventual British conquest in 1760 that did not erase French identity.
            </p>
            <p>
              Deep dive:{" "}
              <Link href="/old-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                Old Montréal from cruise port
              </Link>{" "}
              and{" "}
              <Link href="/notre-dame-basilica-montreal-guide" className="text-blue-800 hover:underline">
                Notre-Dame Basilica guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="How Montréal differs from the rest of Canada">
            <p>
              English-speaking Canada and Québec share a country but not identical
              culture. Québec maintains distinct civil law, language laws, and a
              nationalist identity rooted in French colonial history. Montréal expresses
              this through street language, culinary traditions, and political discourse
              invisible to passengers who only photograph architecture.
            </p>
            <p>
              Cruise passengers from the United States often find Montréal feels more
              European than any city south of the border — that impression is accurate
              and culturally grounded, not theme-park decoration.
            </p>
          </GuideSection>

          <GuideSection title="Catholic architecture and sacred spaces">
            <p>
              Catholicism shaped Montréal&apos;s skyline for centuries — church spires
              punctuate Vieux-Montréal, Notre-Dame Basilica&apos;s blue interior
              expresses 19th-century devotional art, and quiet respect is expected inside
              active places of worship.
            </p>
            <p>
              Even secular visitors benefit from understanding that these are living
              religious sites, not museums — dress modestly, silence phones, and follow
              staff guidance during services.
            </p>
          </GuideSection>

          <GuideSection title="Festivals and cultural calendar">
            <p>
              Summer brings world-class festivals — Just for Laughs comedy, Francofolies
              French-language music, Montreal International Jazz Festival, and Osheaga.
              Winter offers Montréal en Lumière and Igloofest. Festival weekends crowd
              Vieux-Montréal and the Old Port — plan extra return margin on cruise calls
              that coincide with major events.
            </p>
            <p>
              Seasonal context:{" "}
              <Link href="/best-time-to-visit-montreal" className="text-blue-800 hover:underline">
                best time to visit Montréal
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Cuisine as cultural identity">
            <p>
              Food is not separate from French Canadian culture — it expresses it.
              Poutine, smoked meat, Montreal bagels, tourtière, and maple treats carry
              stories of French settlers, Jewish immigration, and Québécois ingenuity.
            </p>
            <p>
              Explore through our{" "}
              <Link href="/montreal-food-tour-guide" className="text-blue-800 hover:underline">
                food tour guide
              </Link>{" "}
              and{" "}
              <Link href="/montreal-food-tour" className="text-blue-800 hover:underline">
                Montréal food tour
              </Link>{" "}
              enquiry page.
            </p>
          </GuideSection>

          <GuideSection title="Practical tips for cruise passengers">
            <ul className="list-disc space-y-2 pl-5">
              <li>Start every shop and restaurant interaction with bonjour</li>
              <li>Carry Canadian dollars — CAD is required; U.S. dollars accepted poorly</li>
              <li>Tip 15–18% at restaurants — not included in the bill</li>
              <li>Respect quiet in churches and basilica interiors</li>
              <li>Book Notre-Dame Basilica tickets in advance on port days</li>
              <li>Stay in Old Montréal for highest cultural density per minute ashore</li>
              <li>Enquire about bilingual guides on organised tours</li>
            </ul>
            <p>
              Port logistics:{" "}
              <Link href="/montreal-cruise-port-guide" className="text-blue-800 hover:underline">
                Montréal cruise port guide
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Cultural experiences concentrated in Old Montréal offer high return confidence — the terminal sits within Vieux-Montréal. Build 30–45 minutes before all-aboard. Festival crowds and double-ship days require extra margin."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Old Montréal from cruise port", href: "/old-montreal-from-cruise-port" },
              { label: "Montréal food guide", href: "/montreal-food-tour-guide" },
              { label: "One day in Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
            ]}
            excursions={[
              { label: "Old Montréal walking tour", href: "/old-montreal-walking-tour" },
              { label: "Montréal food tour", href: "/montreal-food-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
