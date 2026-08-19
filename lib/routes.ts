// Single source of truth for every long-tail URL on the site.
// One long-tail keyword -> one page, URL mirrors the keyword root (EMD-style URL without an EMD domain).
export type Route = {
  href: string;
  title: string;
  desc: string;
  keywords: string[];
};

export const ROUTES: Record<string, Route> = {
  home: {
    href: "/",
    title: "Big Walk Guides, Tools & Co-op Solutions",
    desc: "WalkHub is a fan guide hub for Big Walk — tower puzzle solutions, co-op fixes, tool walkthroughs and comparisons.",
    keywords: ["big walk", "big walk guide", "big walk game"],
  },
  redTower: {
    href: "/red-tower",
    title: "Big Walk Red Tower Puzzle Solution & Map Location",
    desc: "Step-by-step Red Tower puzzle solution for Big Walk, including map location and the exact order to trigger the ending.",
    keywords: ["big walk red tower puzzle", "big walk red tower solution", "big walk red tower location"],
  },
  blackTower: {
    href: "/black-tower",
    title: "Big Walk Black Tower Puzzle Solution",
    desc: "How to solve the Black Tower in Big Walk — walk order, timing and the trap that fails most co-op runs.",
    keywords: ["big walk black tower puzzle", "big walk black tower solution"],
  },
  greenTower: {
    href: "/green-tower",
    title: "Big Walk Green Tower Puzzle Solution",
    desc: "Green Tower walkthrough for Big Walk: the light/bridge mechanic and the fastest clean route.",
    keywords: ["big walk green tower puzzle", "big walk green tower solution"],
  },
  blueTower: {
    href: "/blue-tower",
    title: "Big Walk Blue Tower Puzzle Solution",
    desc: "Blue Tower solution for Big Walk — water level puzzle, co-op role split and screenshot map.",
    keywords: ["big walk blue tower puzzle", "big walk blue tower solution"],
  },
  yellowTower: {
    href: "/yellow-tower",
    title: "Big Walk Yellow Tower Puzzle Solution",
    desc: "Yellow Tower guide for Big Walk: the final tower, how it differs from the other four and the win condition.",
    keywords: ["big walk yellow tower puzzle", "big walk yellow tower solution"],
  },
  tools: {
    href: "/tools",
    title: "Big Walk Tools & How to Use Them",
    desc: "Every Big Walk tool explained one by one — what each does, when to use it, and the combos that break puzzles.",
    keywords: ["big walk tools", "big walk all tools", "big walk how to use tools"],
  },
  coop: {
    href: "/co-op-not-working",
    title: "Big Walk Co-op / Crossplay Not Working? Fixes",
    desc: "Big Walk co-op and crossplay troubleshooting: join codes, NAT, platform limits and the Reddit-famous disconnect fixes.",
    keywords: ["big walk co op not working", "big walk crossplay", "big walk multiplayer fix"],
  },
  vsWitness: {
    href: "/vs-witness",
    title: "Big Walk vs The Witness — Which Should You Play?",
    desc: "Big Walk vs The Witness: puzzle style, co-op, length and who each game is actually for.",
    keywords: ["big walk vs the witness", "big walk or the witness"],
  },
  vsIttakesTwo: {
    href: "/vs-it-takes-two",
    title: "Big Walk vs It Takes Two — Co-op Compared",
    desc: "Big Walk vs It Takes Two: co-op feel, difficulty and which co-op game to buy first.",
    keywords: ["big walk vs it takes two", "big walk or it takes two"],
  },
  vsGrounded: {
    href: "/vs-grounded-2",
    title: "Big Walk vs Grounded 2 — Compared",
    desc: "Big Walk vs Grounded 2: survival vs pure puzzle co-op, player count and vibe.",
    keywords: ["big walk vs grounded 2", "big walk or grounded 2"],
  },
  guide: {
    href: "/guide",
    title: "Big Walk Complete Guide & Walkthrough",
    desc: "A complete Big Walk walkthrough: progression, the five towers, co-op basics and what to do first.",
    keywords: ["big walk guide", "big walk walkthrough", "big walk tips"],
  },
  achievements: {
    href: "/achievements",
    title: "Big Walk Achievements List & How to Get Them",
    desc: "Every Big Walk achievement with the fastest unlock path and the missable ones to watch for.",
    keywords: ["big walk achievements", "big walk achievement guide"],
  },
  price: {
    href: "/price",
    title: "Big Walk Price, Platforms & Editions",
    desc: "Big Walk price across Steam and consoles, which editions exist, and whether the co-op bundle is worth it.",
    keywords: ["big walk price", "big walk steam", "big walk platforms"],
  },
};

export function getRoute(key: keyof typeof ROUTES): Route {
  return ROUTES[key];
}

// Resolve an array of route keys into link objects for internal-link matrices.
export function relatedLinks(keys: (keyof typeof ROUTES)[]): Route[] {
  return keys
    .map((k) => ROUTES[k])
    .filter((r) => r && r.href !== "/");
}
