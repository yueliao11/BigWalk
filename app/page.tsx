import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import InternalLinks from "@/components/InternalLinks";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: "Big Walk Guides, Tools & Co-op Solutions",
  description: ROUTES.home.desc,
  keywords: ROUTES.home.keywords,
});

const TOWERS = [ROUTES.redTower, ROUTES.blackTower, ROUTES.greenTower, ROUTES.blueTower, ROUTES.yellowTower];
const COMPARES = [ROUTES.vsWitness, ROUTES.vsIttakesTwo, ROUTES.vsGrounded];

export default function HomePage() {
  return (
    <PageShell
      h1="Big Walk: tower solutions, tools & co-op fixes"
      lead="Big Walk is a co-op puzzle walk from the makers of Untitled Goose Game. Below are the exact solutions players search for — Red/Black/Green/Blue/Yellow towers, every tool, and the co-op fixes that the big sites never bothered to write a page for."
      gameWidget
      related={relatedLinks([
        "guide", "tools", "redTower", "blackTower", "greenTower", "blueTower",
        "yellowTower", "coop", "achievements", "price", "vsWitness",
        "vsIttakesTwo", "vsGrounded",
      ])}
      faqs={[
        {
          q: "What is Big Walk?",
          a: "Big Walk is a co-op puzzle adventure where a line of players walks together through a hand-built world, solving tower puzzles and environmental challenges. It is developed by House House.",
        },
        {
          q: "How many towers are there in Big Walk?",
          a: "There are five color-coded towers — Red, Black, Green, Blue and Yellow. Each has its own mechanic; full step-by-step solutions are linked above.",
        },
        {
          q: "Is Big Walk co-op / crossplay?",
          a: "Yes, it is built for co-op. If your session will not connect, see the co-op not working fixes page for join-code, NAT and platform limits.",
        },
      ]}
    >
      <h2>The five towers</h2>
      <p>
        Most search traffic for Big Walk is tower-specific. Each page gives the
        solution on the first screen, then the walk order and the trap that
        fails most runs.
      </p>
      <InternalLinks links={TOWERS} />

      <h2>Tools & co-op</h2>
      <p>
        The tool pages explain each gadget one by one, and the co-op page fixes
        the disconnects players post about on Reddit.
      </p>
      <InternalLinks links={[ROUTES.tools, ROUTES.coop]} />

      <h2>Big Walk vs other co-op puzzlers</h2>
      <p>Not sure which co-op game to buy? The head-to-head pages settle it.</p>
      <InternalLinks links={COMPARES} />
    </PageShell>
  );
}
