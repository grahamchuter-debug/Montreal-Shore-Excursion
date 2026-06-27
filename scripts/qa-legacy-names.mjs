#!/usr/bin/env node
/**
 * Legacy-name QA — fail if wrong-port copy appears in Montréal site source.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SCAN_DIRS = ["src", "public"];
const SKIP = new Set(["node_modules", ".next", "out"]);

const FORBIDDEN = [
  { label: "Alaska (wrong region)", pattern: /\bAlaska\b/i },
  { label: "Juneau", pattern: /\bJuneau\b/i },
  { label: "Skagway", pattern: /\bSkagway\b/i },
  { label: "Ketchikan", pattern: /\bKetchikan\b/i },
  { label: "Boston (wrong port)", pattern: /\bBoston\b/i },
  { label: "Freedom Trail (wrong port)", pattern: /\bFreedom Trail\b/i },
  { label: "Black Falcon (wrong port)", pattern: /\bBlack Falcon\b/i },
  { label: "USS Constitution (wrong port)", pattern: /\bUSS Constitution\b/i },
  { label: "Halifax (wrong port)", pattern: /\bHalifax\b/i },
  { label: "Saint John NB", pattern: /\bSaint John\b/i },
  { label: "St. John's NL (wrong port)", pattern: /St\. John'?s, Newfoundland/i },
  { label: "Bar Harbor (wrong port)", pattern: /\bBar Harbor\b/i },
  { label: "Acadia National Park (wrong port)", pattern: /\bAcadia National Park\b/i },
  { label: "Charlottetown", pattern: /\bCharlottetown\b/i },
  { label: "Portland ME (wrong port)", pattern: /\bPortland, Maine\b/i },
  { label: "Caribbean (wrong region)", pattern: /\bCaribbean\b/i },
  { label: "Norway (wrong region)", pattern: /\bNorway\b/i },
  { label: "Mediterranean (wrong region)", pattern: /\bMediterranean\b/i },
  { label: "Portofino", pattern: /\bPortofino\b/i },
  { label: "Villefranche", pattern: /\bVillefranche\b/i },
];

const WRONG_DOMAINS = [
  /bostonshoreexcursion\.com/i,
  /barharborshoreexcursions\.com/i,
  /halifaxshoreexcursions\.com/i,
  /alaskacruiseexcursion\.com/i,
];

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, files);
    else if (/\.(tsx?|css|json|mjs|html|txt|xml)$/.test(name)) files.push(p);
  }
  return files;
}

const files = SCAN_DIRS.flatMap((d) => {
  const p = join(ROOT, d);
  try {
    return walk(p);
  } catch {
    return [];
  }
});

const failures = [];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const rel = file.replace(ROOT + "/", "");

  for (const { label, pattern } of FORBIDDEN) {
    if (pattern.test(text)) {
      failures.push(`${rel}: forbidden ${label}`);
    }
  }
  for (const pattern of WRONG_DOMAINS) {
    if (pattern.test(text)) {
      failures.push(`${rel}: wrong domain reference`);
    }
  }
}

const siteTs = readFileSync(join(ROOT, "src/lib/site.ts"), "utf8");
if (!siteTs.includes("montrealshoreexcursion.com")) {
  failures.push("src/lib/site.ts: missing montrealshoreexcursion.com");
}
if (!siteTs.includes("Montréal, Québec")) {
  failures.push("src/lib/site.ts: missing Montréal, Québec geography label");
}

if (failures.length) {
  console.error("Legacy-name QA FAILED:\n");
  failures.forEach((f) => console.error("  -", f));
  process.exit(1);
}

console.log(`Legacy-name QA passed (${files.length} files scanned).`);
