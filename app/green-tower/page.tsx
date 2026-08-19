import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.greenTower.href,
  title: ROUTES.greenTower.title,
  description: ROUTES.greenTower.desc,
  keywords: ROUTES.greenTower.keywords,
});

export default function GreenTowerPage() {
  return (
    <PageShell
      h1="Big Walk Green Tower Puzzle Solution"
      lead="The Green Tower uses a light-and-bridge mechanic: you route a beam onto a receiver to extend a bridge. The solution is to aim the beam at the near receiver first (extends bridge 1), cross, then rotate it to the far receiver (extends bridge 2) — never both at once."
      howTo={{
        name: "Solve the Big Walk Green Tower",
        steps: [
          { title: "Aim beam at near receiver", text: "Rotate the reflector so the green beam hits the first receiver; bridge 1 extends." },
          { title: "Cross bridge 1", text: "Walkers cross to the middle platform while the beam holds." },
          { title: "Rotate to far receiver", text: "On the middle platform, aim the beam at the second receiver; bridge 2 extends." },
          { title: "Finish the climb", text: "Cross bridge 2 and stand on the exit plate to complete the tower." },
        ],
      }}
      related={relatedLinks(["redTower", "blackTower", "blueTower", "yellowTower", "tools", "coop"])}
      faqs={[
        { q: "Why won't both Green Tower bridges stay up?", a: "The beam only powers one receiver at a time. Extend and cross bridge 1, then re-aim for bridge 2 — you cannot hold both." },
        { q: "Who aims the beam in co-op?", a: "Whoever reaches the reflector first; the rest wait on the pad so the beam does not drop." },
        { q: "Is the Green Tower a puzzle or a timing challenge?", a: "It is a routing puzzle, not timing — much more forgiving than the Black Tower once you see the two-step order." },
      ]}
    >
      <h2>Overview</h2>
      <p>
        The Green Tower swaps the pressure plate for a light beam. Instead of
        weight, you route a beam to receivers that extend bridges. The catch is
        the beam only reaches one receiver per angle.
      </p>

      <h2>The two-step order</h2>
      <p>
        Players try to light both receivers and wonder why the first bridge
        drops. You extend one, cross, then re-aim. It is a sequence, not a
        simultaneous solve.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>One walker controls the reflector; the rest stay put until told.</li>
        <li>If the beam drops mid-cross, the controller re-aims before anyone moves.</li>
        <li>The exit plate only registers with the full line present.</li>
      </ul>
    </PageShell>
  );
}
