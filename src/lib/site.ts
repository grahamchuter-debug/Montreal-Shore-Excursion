export const SITE_NAME = "Montréal Shore Excursions";
export const SITE_URL = "https://montrealshoreexcursion.com";
export const SITE_DESCRIPTION =
  "Independent shore excursion guides for cruise passengers visiting Montréal, Québec — Old Montréal, Notre-Dame Basilica, Mount Royal, French Canadian food, and Canada & New England port planning.";
export const GEO_LABEL = "Montréal, Québec";

export const HERO_IMAGE = "/images/montreal-hero.png";
export const HERO_IMAGE_ALT =
  "Historic cobblestone streets of Old Montréal with stone facades, church spires, and the Old Port waterfront — French Canadian heritage minutes from the cruise terminal";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return title;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(HERO_IMAGE);
  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle(title),
      description,
      url,
      type: "website" as const,
      siteName: SITE_NAME,
      locale: "en_CA",
      images: [{ url: ogImage, alt: HERO_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle(title),
      description,
      images: [ogImage],
    },
  };
}
