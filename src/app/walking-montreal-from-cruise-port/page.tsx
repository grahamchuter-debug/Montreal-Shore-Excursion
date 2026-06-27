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

const path = "/walking-montreal-from-cruise-port";

const faqs = [
  {
    question: "Can you walk from Alexandra Pier to Old Montréal?",
    answer:
      "Yes — Place d'Armes and Notre-Dame Basilica sit 10–15 minutes on foot. Place Jacques-Cartier is another 5–10 minutes west along cobblestone streets.",
  },
  {
    question: "How long is a self-guided Old Montréal loop from the cruise port?",
    answer:
      "A focused loop covering the Old Port, Rue Saint-Paul, Place d'Armes, and Place Jacques-Cartier takes 2–3 hours at a comfortable pace including photo stops.",
  },
  {
    question: "Are Montréal cobblestones difficult for walking?",
    answer:
      "Yes — Vieux-Montréal uses uneven stone paving that challenges strollers, wheelchairs, and anyone with balance concerns. Wear supportive shoes with good grip.",
  },
  {
    question: "What is the best walking route from the cruise terminal?",
    answer:
      "Exit toward Rue de la Commune, walk west along the Old Port promenade, turn inland on Rue Saint-Paul to Place d'Armes, continue to Place Jacques-Cartier, then return via the riverfront.",
  },
  {
    question: "Can you walk to Mount Royal from the cruise port?",
    answer:
      "Not realistically on a port day — the summit is 4+ km uphill. Use a scenic tour, taxi, or metro plus bus instead.",
  },
  {
    question: "When should walkers head back to the ship?",
    answer:
      "Start your return walk 45–60 minutes before all-aboard. The terminal is close but security queues and cobblestone fatigue slow final legs.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Walking Montréal From Cruise Port — Routes, Distances & Timing",
  description:
    "Self-guided walking from Alexandra Pier — Old Montréal routes, cobblestone tips, distance table, loop itinerary, and return-to-ship timing for cruise passengers.",
  path,
});

export default function WalkingMontrealPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Walking Montréal From Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Walking From Cruise Port" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Walking From Cruise Port" }]}
        />
        <PageHero
          eyebrow="Self-guided routes"
          title="Walking Montréal from the cruise port"
          subtitle="Alexandra Pier to Old Montréal — distances, cobblestones, loop routes, and return timing."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Montréal is one of the best walkable cruise ports in Canada — Old Montréal begins minutes from Alexandra Pier. Plan your loop before you leave the ship and watch the clock on cobblestones."
            fields={{
              timeInPort: "4+ hours for meaningful walk",
              bestFor: "Independent explorers, photographers",
              activityLevel: "Easy to moderate — cobblestones throughout",
              familyFriendly: "Good — plazas engage children",
              returnToShip: "High when staying in Vieux-Montréal",
              popularTypes: "Self-guided loops, guided walking tours",
            }}
          />

          <GuideSection title="Starting from Alexandra Pier">
            <p>
              Exit the Iberville terminal toward the Old Port promenade (Rue de la
              Commune). You are already inside the historic zone — the Clock Tower,
              Science Centre, and riverfront paths lie immediately ahead. Old
              Montréal&apos;s cobblestone core sits 800 metres west.
            </p>
            <p>
              For why Vieux-Montréal matters, read our flagship{" "}
              <Link href="/old-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                Old Montréal from cruise port
              </Link>{" "}
              guide. Port logistics are in the{" "}
              <Link href="/montreal-cruise-port-guide" className="text-blue-800 hover:underline">
                cruise port guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Distance table from Alexandra Pier">
            <div className="overflow-x-auto mt-4">
              <table className="w-full min-w-[36rem] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Destination</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Distance</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Walking time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Old Port Clock Tower</td>
                    <td className="px-4 py-3">~400 m</td>
                    <td className="px-4 py-3">5 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Place d&apos;Armes</td>
                    <td className="px-4 py-3">~800 m</td>
                    <td className="px-4 py-3">10–15 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Place Jacques-Cartier</td>
                    <td className="px-4 py-3">~1 km</td>
                    <td className="px-4 py-3">15–20 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Champ-de-Mars / City Hall</td>
                    <td className="px-4 py-3">~700 m</td>
                    <td className="px-4 py-3">10–12 min</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Pointe-à-Callière Museum</td>
                    <td className="px-4 py-3">~900 m</td>
                    <td className="px-4 py-3">12–15 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GuideSection>

          <GuideSection title="Recommended Old Montréal loop (2–3 hours)">
            <ol className="list-decimal space-y-2 pl-5">
              <li>Start at Alexandra Pier — walk west on Rue de la Commune</li>
              <li>Photo stop at Old Port Clock Tower and river views</li>
              <li>Turn north on Rue Saint-Paul — galleries and historic facades</li>
              <li>Place d&apos;Armes and Notre-Dame Basilica (exterior or timed interior)</li>
              <li>Rue Saint-Jacques or Rue Notre-Dame west to Place Jacques-Cartier</li>
              <li>Café break or light lunch — say bonjour when entering</li>
              <li>Descend toward the riverfront; return east to the cruise terminal</li>
            </ol>
            <p>
              Prefer guided context? See our{" "}
              <Link href="/old-montreal-walking-tour" className="text-blue-800 hover:underline">
                Old Montréal walking tour
              </Link>{" "}
              enquiry page.
            </p>
          </GuideSection>

          <GuideSection title="Cobblestones and footwear">
            <p>
              Vieux-Montréal&apos;s cobblestones are picturesque and punishing. Uneven
              surfaces, curbs, and occasional wet stone after rain increase slip risk.
              Wear supportive walking shoes — not flip-flops or thin-soled fashion
              sneakers.
            </p>
            <p>
              Wheelchair users and passengers with limited mobility should enquire about
              modified routes or coach-based tours rather than assuming independent
              cobblestone access.
            </p>
          </GuideSection>

          <GuideSection title="When walking is not enough">
            <p>
              Mount Royal, Jean-Talon Market, Olympic Stadium, and the Plateau require
              metro, taxi, or organised tours. Attempting these on foot from Alexandra
              Pier consumes port time on transit rather than sightseeing.
            </p>
            <p>
              See{" "}
              <Link href="/mount-royal-from-cruise-port" className="text-blue-800 hover:underline">
                Mount Royal from cruise port
              </Link>{" "}
              and{" "}
              <Link href="/montreal-food-tour-guide" className="text-blue-800 hover:underline">
                food tour guide
              </Link>{" "}
              for transport-based alternatives.
            </p>
          </GuideSection>

          <GuideSection title="Return timing">
            <p>
              The terminal sits inside Old Montréal — return walks from Place
              Jacques-Cartier take 15–20 minutes. Start back 45–60 minutes before
              all-aboard to allow for rest, restroom stops, and pier security. Double-ship
              days can lengthen gangway queues.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="High"
            note="Self-guided walks confined to Old Montréal and the Old Port offer high return confidence — you are never far from Alexandra Pier. Build 30–45 minutes before all-aboard. Do not extend your loop into downtown or Mount Royal without accounting for return taxi or metro time."
          />

          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Old Montréal from cruise port", href: "/old-montreal-from-cruise-port" },
              { label: "One day in Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
              { label: "Montréal cruise port guide", href: "/montreal-cruise-port-guide" },
            ]}
            excursions={[
              { label: "Old Montréal walking tour", href: "/old-montreal-walking-tour" },
              { label: "Montréal bike tour", href: "/montreal-bike-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
