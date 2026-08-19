// Central site config. Replace DOMAIN with your real (brand, non-EMD) domain before launch.
export const SITE = {
  name: "WalkHub",
  tagline: "Big Walk guides, tools & co-op puzzle solutions",
  // TODO: replace with the real domain you register (brand word, NOT an EMD like bigwalkguide.com)
  domain: "https://walkhub.example.com",
  description:
    "WalkHub is a fan-made guide hub for Big Walk — tower puzzle solutions, co-op troubleshooting, tool walkthroughs and head-to-head comparisons. Built for players who want the answer on the first screen.",
  steamAppId: "1478500",
  // Steam store widget is iframe-embeddable. Swap for a web-playable build if one ships.
  steamWidget:
    "https://store.steampowered.com/widget/1478500/",
  twitter: "@walkhub",
  locale: "en_US",
};

export function url(path = "/") {
  return `${SITE.domain}${path}`;
}

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.domain,
  description: SITE.description,
};
