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
    title: "Big Walk Guide: Tower Solutions, Tools & Walkthrough (2026)",
    desc: "Stuck on a Big Walk tower? Instant step-by-step puzzle solutions for all five towers (Red, Black, Green, Blue, Yellow), every tool, and verified co-op connection fixes.",
    keywords: ["big walk", "big walk guide", "big walk game", "big walk puzzle solutions", "big walk walkthrough", "big walk all towers"],
  },
  redTower: {
    href: "/red-tower",
    title: "Big Walk Red Tower Puzzle Solution: Anchor Plate Order & Map Guide",
    desc: "Complete guide to Big Walk Red Tower: exact anchor plate walking order, bridge retraction trap fix, map coordinates, and where to go after Red Tower.",
    keywords: ["big walk red tower", "red tower big walk", "big walk red tower puzzle", "big walk red tower solution", "big walk red tower location", "how to solve red tower big walk", "big walk red tower stuck", "big walk after red tower", "where to go after red tower big walk", "all red tower puzzles", "big walk red finger"],
  },
  blackTower: {
    href: "/black-tower",
    title: "Big Walk Black Tower Puzzle Solution: Pulse Timing & Gate Guide",
    desc: "Solve the Black Tower in Big Walk: exact 3-pulse timing gate count, which pulse to cross on without resetting, and step-by-step diagram for 2-4 walkers.",
    keywords: ["big walk black tower", "black tower big walk", "big walk black tower puzzle", "big walk black tower solution", "how to solve black tower big walk", "big walk black tower timing", "big walk black tower puzzles"],
  },
  greenTower: {
    href: "/green-tower",
    title: "Big Walk Green Tower Puzzle Solution: Reflector Angles & Dual Bridges",
    desc: "Big Walk Green Tower guide: laser beam routing, reflector angle setup to extend both bridges, and the exact sequence to prevent dropping teammates.",
    keywords: ["big walk green tower", "green tower big walk", "big walk green tower puzzle", "big walk green tower solution", "how to solve green tower big walk", "green tower puzzles big walk", "big walk green tower reflector"],
  },
  blueTower: {
    href: "/blue-tower",
    title: "Big Walk Blue Tower Puzzle Solution: Exact Valve Height & Water Drain Guide",
    desc: "Stuck on the Blue Tower (Blue Building & Slope) in Big Walk? Step-by-step valve settings, how to keep the mid-level crossing ledge from vanishing, map location & solo guide.",
    keywords: ["big walk blue tower", "blue tower big walk", "big walk blue tower puzzle", "big walk blue tower solution", "blue tower puzzles", "big walk blue building", "big walk blue slope", "big walk blue tower puzzles", "where is the blue tower in big walk", "big walk blue tower map"],
  },
  yellowTower: {
    href: "/yellow-tower",
    title: "Big Walk Yellow Tower (Final Tower) Solution: Beam & Water Finale",
    desc: "Big Walk final Yellow Tower solution: plate, laser beam, and water sequence solved bottom-up, plus team role assignments and reset recovery.",
    keywords: ["big walk yellow tower", "yellow tower big walk", "big walk yellow tower puzzle", "big walk yellow tower solution", "how to solve yellow tower big walk", "big walk final tower", "big walk last tower", "big walk yellow tower finale"],
  },
  tools: {
    href: "/tools",
    title: "Big Walk Tools & How to Use Them: Complete Equipment Guide",
    desc: "Every Big Walk tool explained: Reflector, Valve, Plate Anchor, Counter, and Beacon. Exactly when to use each gadget and combo tips that break puzzle locks.",
    keywords: ["big walk tools", "big walk all tools", "big walk how to use tools", "big walk items", "big walk equipment"],
  },
  coop: {
    href: "/co-op-not-working",
    title: "Big Walk Co-op / Crossplay Not Working? Connection Fixes (PC/PS5/Switch)",
    desc: "Big Walk co-op and crossplay troubleshooting: expired join code fixes, strict NAT workarounds, PC-to-console invite bugs, and stuck walking lobbies.",
    keywords: ["big walk co op not working", "big walk crossplay", "big walk multiplayer fix", "big walk crossplay issues", "big walk crossplay not working", "big walk join code invalid"],
  },
  vsWitness: {
    href: "/vs-witness",
    title: "Big Walk vs The Witness — Which Should You Play?",
    desc: "Big Walk vs The Witness: puzzle style, co-op, length and who each game is actually for.",
    keywords: ["big walk vs the witness", "big walk the witness", "big walk or the witness", "the witness coop"],
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
    title: "Big Walk Walkthrough: All 5 Towers, Puzzle Solutions & Map Guide (2026)",
    desc: "Complete Big Walk walkthrough: recommended tower progression order, unstuck and respawn tricks, tool combos, and essential tips for co-op groups.",
    keywords: ["big walk guide", "big walk walkthrough", "big walk tips", "big walk unstuck", "big walk respawn", "big walk progression", "big walk recommended tower order", "big walk game guide", "big walk solution"],
  },
  achievements: {
    href: "/achievements",
    title: "Big Walk Achievements List & How to Get Them",
    desc: "Every Big Walk achievement with the fastest unlock path and the missable ones to watch for.",
    keywords: ["big walk achievements", "big walk achievement guide"],
  },
  price: {
    href: "/price",
    title: "Big Walk Price: Steam, Switch 2 & PS5 Cost (Live Regional Guide)",
    desc: "Check current Big Walk price across Steam, Nintendo Switch 2 and PlayStation 5. Live Steam widget, regional pricing table, editions, and sale discount history.",
    keywords: ["big walk price", "how much is big walk", "big walk steam price", "big walk cost", "big walk switch 2 price", "big walk ps5 price", "big walk discount"],
  },
  towerOrder: {
    href: "/tower-order",
    title: "Big Walk Tower Order: Best Progression Route & Difficulty Map",
    desc: "What order should you do the towers in Big Walk? The definitive tower order (Red → Black → Green → Blue → Yellow), why skips fail, and difficulty breakdown.",
    keywords: ["big walk tower order", "big walk recommended tower order", "big walk towers in order", "what order to do big walk towers", "big walk all towers order", "big walk progression order"],
  },
  crossplay: {
    href: "/crossplay",
    title: "Big Walk Crossplay Guide: PC, PS5 & Switch 2 Setup (Join Code Fixes)",
    desc: "Does Big Walk have crossplay? Yes! Full cross-platform support guide for Steam PC, PS5, and Switch 2: how to connect, join code invite steps, and voice chat.",
    keywords: ["big walk crossplay", "is big walk crossplay", "big walk cross platform", "big walk pc ps5 crossplay", "big walk switch 2 crossplay", "big walk multiplayer crossplay"],
  },
  switch2: {
    href: "/switch-2",
    title: "Big Walk Nintendo Switch 2: Resolution, FPS & Co-op Details",
    desc: "Big Walk on Nintendo Switch 2: performance benchmarks (60 FPS / 4K docked), local and online crossplay, Joy-Con controls, and eShop release details.",
    keywords: ["big walk switch 2", "big walk nintendo switch 2", "big walk switch 2 fps", "big walk switch release", "big walk switch 2 co op"],
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
