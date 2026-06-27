"use client";

import { useState } from "react";
import Link from "next/link";
import { excursions } from "@/lib/excursions";
import { CRUISE_PLANNER_PATH, PORT_GUIDE_PATH } from "@/lib/navigation";

type Hours = "4" | "5" | "6" | "8" | "10";

const recommendations: Record<Hours, string[]> = {
  "4": ["old-montreal-walking-tour", "st-lawrence-river-cruise"],
  "5": [
    "old-montreal-walking-tour",
    "notre-dame-basilica-tour",
    "st-lawrence-river-cruise",
  ],
  "6": [
    "montreal-city-highlights-tour",
    "old-montreal-walking-tour",
    "mount-royal-scenic-tour",
    "montreal-food-tour",
  ],
  "8": [
    "montreal-city-highlights-tour",
    "montreal-food-tour",
    "montreal-bike-tour",
    "laurentians-day-trip",
  ],
  "10": [
    "montreal-city-highlights-tour",
    "laurentians-day-trip",
    "quebec-city-from-montreal",
    "pre-post-cruise-montreal-tour",
  ],
};

export function CruisePlanner() {
  const [hours, setHours] = useState<Hours | "">("");

  const matches =
    hours !== ""
      ? recommendations[hours]
          .map((slug) => excursions.find((e) => e.slug === slug))
          .filter((e): e is (typeof excursions)[number] => e !== undefined)
      : [];

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <label className="block">
          <span className="text-sm font-semibold text-slate-900">
            How many hours ashore in Montréal?
          </span>
          <select
            value={hours}
            onChange={(e) => setHours(e.target.value as Hours | "")}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900"
          >
            <option value="">Select hours ashore…</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
            <option value="6">6 hours</option>
            <option value="8">8 hours</option>
            <option value="10">10 hours</option>
          </select>
        </label>
      </div>

      {hours !== "" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">
            Suggested excursions for {hours} hours
          </h3>
          {matches.length === 0 ? (
            <p className="text-slate-600">No matches — try a different duration.</p>
          ) : (
            <ul className="space-y-4">
              {matches.map((e) => (
                <li
                  key={e.slug}
                  className="rounded-xl border border-slate-200 p-5 hover:border-blue-300"
                >
                  <Link href={e.path} className="font-semibold text-blue-800 hover:underline">
                    {e.shortTitle}
                  </Link>
                  <p className="mt-2 text-sm text-slate-600">{e.summary}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    Return confidence: {e.returnConfidence} · {e.duration}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <p className="text-sm text-slate-600">
            For detailed planning, see our{" "}
            <Link
              href="/one-day-in-montreal-from-a-cruise-ship"
              className="text-blue-800 hover:underline"
            >
              one day in Montréal guide
            </Link>{" "}
            and{" "}
            <Link href={PORT_GUIDE_PATH} className="text-blue-800 hover:underline">
              cruise port guide
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
}
