// Central site config. Swap `domain` when the real registered domain goes live.
export const SITE = {
  name: "WalkHub",
  tagline: "Big Walk guides, tools & co-op puzzle solutions",
  // Production domain (Cloudflare Pages). Vercel preview URL is kept as an alias only.
  domain: "https://bigwalkredtowers.com",
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
