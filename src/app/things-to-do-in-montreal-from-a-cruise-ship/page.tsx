import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/things-to-do-in-montreal-from-a-cruise-ship";

export const metadata: Metadata = pageMetadata({
  title: "Things To Do In Montréal From A Cruise Ship",
  description:
    "Best things to do in Montréal from a cruise ship — Old Montréal, Notre-Dame Basilica, Mount Royal, food, markets, riverfront, and links to guides and excursions.",
  path,
});

export default function ThingsToDoMontrealPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Things To Do In Montréal From A Cruise Ship",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Things To Do From A Cruise Ship" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Things To Do From A Cruise Ship" },
          ]}
        />
        <PageHero
          eyebrow="Activity hub"
          title="Things to do in Montréal from a cruise ship"
          subtitle="French Canadian culture, historic streets, food, and day trips matched to cruise port reality."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Old Montréal and waterfront">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/old-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                  Old Montréal walking
                </Link>{" "}
                — cobblestones, Place Jacques-Cartier, French heritage minutes from the pier
              </li>
              <li>
                <Link href="/notre-dame-basilica-montreal-guide" className="text-blue-800 hover:underline">
                  Notre-Dame Basilica
                </Link>{" "}
                — blue vaulted interior and Place d&apos;Armes
              </li>
              <li>
                Old Port promenade — Clock Tower, Science Centre, St. Lawrence views
              </li>
              <li>
                <Link href="/st-lawrence-river-cruise" className="text-blue-800 hover:underline">
                  St. Lawrence harbour cruise
                </Link>{" "}
                — skyline from the water
              </li>
              <li>
                <Link href="/walking-montreal-from-cruise-port" className="text-blue-800 hover:underline">
                  Self-guided walking routes
                </Link>{" "}
                from Alexandra Pier
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="French Canadian culture">
            <p>
              Montréal is North America&apos;s French-speaking capital — bilingual
              etiquette, Catholic architecture, festival calendar, and a cuisine identity
              distinct from the rest of Canada.
            </p>
            <p>
              Dedicated guide:{" "}
              <Link href="/french-canadian-culture-montreal-cruise-guide" className="text-blue-800 hover:underline">
                French Canadian culture for cruise passengers
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Organised shore excursions">
            <p>
              Browse ranked options in our{" "}
              <Link href="/best-montreal-shore-excursions" className="text-blue-800 hover:underline">
                best Montréal shore excursions
              </Link>{" "}
              guide — walking tours, highlights coach tours, food tours, Mount Royal
              scenic tours, bike tours, and pre/post packages each suit different port
              windows.
            </p>
            <p>
              All ten excursion pages:{" "}
              <Link href="/excursions" className="text-blue-800 hover:underline">
                browse excursions
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Food and markets">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/montreal-food-tour-guide" className="text-blue-800 hover:underline">
                  Poutine, bagels, smoked meat
                </Link>{" "}
                — French Canadian food culture
              </li>
              <li>
                Jean-Talon Market — Little Italy public market (6+ hours with tour)
              </li>
              <li>
                Place Jacques-Cartier terrace dining — bonjour and merci etiquette
              </li>
              <li>
                <Link href="/montreal-food-tour" className="text-blue-800 hover:underline">
                  Montréal food tour
                </Link>{" "}
                — guided tasting walk
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Scenery and active options">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/mount-royal-from-cruise-port" className="text-blue-800 hover:underline">
                  Mount Royal lookout
                </Link>{" "}
                — Kondiaronk Belvedere panorama
              </li>
              <li>
                <Link href="/montreal-bike-tour" className="text-blue-800 hover:underline">
                  Bike tour
                </Link>{" "}
                — Old Port and Lachine Canal paths
              </li>
              <li>
                Fall foliage on autumn Canada &amp; New England calls
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Day trips beyond Montréal">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/laurentians-day-trip" className="text-blue-800 hover:underline">
                  Laurentians mountains
                </Link>{" "}
                — 8+ hours ashore
              </li>
              <li>
                <Link href="/quebec-city-from-montreal-cruise-port" className="text-blue-800 hover:underline">
                  Québec City timing
                </Link>{" "}
                — honest assessment for port days vs pre/post
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Planning resources">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/montreal-cruise-port-guide" className="text-blue-800 hover:underline">
                  Cruise port guide
                </Link>{" "}
                — Alexandra Pier, STM, tipping, weather
              </li>
              <li>
                <Link href="/one-day-in-montreal-from-a-cruise-ship" className="text-blue-800 hover:underline">
                  One day itineraries
                </Link>{" "}
                — 4, 6, and 8 hour plans
              </li>
              <li>
                <Link href="/montreal-pre-post-cruise-guide" className="text-blue-800 hover:underline">
                  Pre/post cruise guide
                </Link>{" "}
                — hotels, luggage, YUL transfers
              </li>
              <li>
                <Link href="/montreal-cruise-planner" className="text-blue-800 hover:underline">
                  Cruise planner
                </Link>{" "}
                — match tours to hours ashore
              </li>
              <li>
                <Link href="/best-time-to-visit-montreal" className="text-blue-800 hover:underline">
                  Best time to visit
                </Link>{" "}
                — seasons and festivals
              </li>
            </ul>
          </GuideSection>

          <GuideRelatedLinks
            guides={[
              { label: "One day in Montréal", href: "/one-day-in-montreal-from-a-cruise-ship" },
              { label: "Old Montréal from cruise port", href: "/old-montreal-from-cruise-port" },
              { label: "Montréal cruise port guide", href: "/montreal-cruise-port-guide" },
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
