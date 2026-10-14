import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import InternalLinks from "@/components/InternalLinks";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: ROUTES.home.title,
  description: ROUTES.home.desc,
  keywords: ROUTES.home.keywords,
});

const TOWERS = [ROUTES.redTower, ROUTES.blackTower, ROUTES.greenTower, ROUTES.blueTower, ROUTES.yellowTower];
const ESSENTIALS = [ROUTES.towerOrder, ROUTES.crossplay, ROUTES.switch2, ROUTES.price, ROUTES.tools, ROUTES.coop];
const COMPARES = [ROUTES.vsWitness, ROUTES.vsIttakesTwo, ROUTES.vsGrounded];

export default function HomePage() {
  return (
    <PageShell
      breadcrumb={[{ name: "Home", path: "/" }]}
      h1="Big Walk Guide: Tower Solutions, Tools & Walkthrough"
      lead="WalkHub is a dedicated guide hub for Big Walk, the cooperative puzzle adventure from House House and Panic. Below are the verified solutions players look for — step-by-step guides for all five color towers, complete equipment breakdowns, crossplay guides, and connection fixes. Everything delivers the answer first so your group can get back to the walk immediately."
      gameWidget
      videoId="c30AAvpS6do"
      related={relatedLinks([
        "towerOrder",
        "crossplay",
        "guide",
        "redTower",
        "blackTower",
        "greenTower",
        "blueTower",
        "yellowTower",
        "tools",
        "coop",
        "switch2",
        "price",
        "achievements",
      ])}
      faqs={[
        {
          q: "What is Big Walk?",
          a: "Big Walk is an open-world cooperative puzzle adventure where a party of walkers travels in line through an Australian-inspired coastal wilderness, solving five intricate color towers and environmental obstacles. It is created by House House, developers of Untitled Goose Game.",
        },
        {
          q: "What is the recommended tower order?",
          a: "The definitive route is Red Tower → Black Tower → Green Tower → Blue Tower → Yellow Tower. Each structure introduces a unique mechanic that later puzzles build upon.",
        },
        {
          q: "Does Big Walk support crossplay?",
          a: "Yes. Big Walk features seamless crossplay across Steam PC, Nintendo Switch 2, and PlayStation 5 using a universal 6-character Join Code.",
        },
        {
          q: "How many players can walk together?",
          a: "While every puzzle is technically solvable solo, the adventure is designed around 2 to 4 coordinated players communicating via voice chat.",
        },
        {
          q: "How long does Big Walk take to finish?",
          a: "A standard first blind playthrough across all five towers takes roughly 4 to 6 hours. Experienced teams replaying for missable achievements can finish in under 2 hours.",
        },
        {
          q: "Which platforms is the game available on?",
          a: "The title launched on August 4, 2026 for Steam, Nintendo Switch 2, and PlayStation 5 as a premium purchase.",
        },
      ]}
    >
      <h2>About the Expedition</h2>
      <p>
        Released on August 4, 2026, Big Walk challenges players to move together as a single disciplined
        expedition across a hand-crafted wilderness. Your journey is structured around five monumental color
        towers, each containing a self-contained environmental lock that requires team communication to open.
      </p>
      <p>
        The controls are deliberately simple — running, jumping, and interacting. The real challenge comes from
        vocal coordination, role allocation, and spatial timing. Most wipes happen when a teammate steps off an
        active pressure plate before the line has finished crossing, which is why our guides emphasize exact
        walk orders and verbal callouts.
      </p>

      <h2>The Five Color Towers</h2>
      <p>
        Most search queries focus on specific tower barriers. Each walkthrough below provides the instant solution
        above the fold, followed by detailed map coordinates, role splits, and the specific traps to avoid:
      </p>
      <InternalLinks links={TOWERS} />
      <p className="mt-4">
        To avoid tackling complex water or reflector mechanics prematurely, consult our comprehensive{" "}
        <a href="/tower-order" className="font-semibold text-brand-700 underline hover:text-brand-900">
          Big Walk Tower Order &amp; Progression Guide
        </a>{" "}
        before embarking on your expedition.
      </p>

      <h2>Essential Guides, Crossplay &amp; Tools</h2>
      <p>
        Whether configuring cross-platform multiplayer or figuring out how to aim the Reflector gadget, these
        focused guides answer the most common player questions:
      </p>
      <InternalLinks links={ESSENTIALS} />

      <h2>Game Comparisons</h2>
      <p>
        Evaluating whether to pick up Big Walk for your regular co-op group? Compare the gameplay style, puzzle
        difficulty, and player counts in our side-by-side breakdowns:
      </p>
      <InternalLinks links={COMPARES} />

      <h2>How This Guide Is Structured</h2>
      <p>
        Every walkthrough on WalkHub is engineered to respect your playtime:
      </p>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li><strong>Immediate TL;DR Answers:</strong> The core solution is provided in the top callout box without forcing you to scroll through filler text.</li>
        <li><strong>Step-by-Step Instructions:</strong> Clear, numbered walkthrough steps formatted for the team lead on voice chat.</li>
        <li><strong>Trap Warnings:</strong> Explicit explanations of the common mistakes (such as draining the Blue Tower reservoir too low) that cause party resets.</li>
        <li><strong>Structured FAQs:</strong> Quick answers to the exact search queries players encounter mid-game.</li>
      </ul>
    </PageShell>
  );
}
