import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.yellowTower.href,
  title: ROUTES.yellowTower.title,
  description: ROUTES.yellowTower.desc,
  keywords: ROUTES.yellowTower.keywords,
});

export default function YellowTowerPage() {
  return (
    <PageShell
      h1="Big Walk Yellow Tower Puzzle Solution"
      lead="The Yellow Tower is the finale and combines every prior mechanic: plate, beam and water in one climb. The solution is to solve it bottom-up — plate first for the base bridge, beam for the middle, water last for the summit — and only hit the exit plate as a full line."
      howTo={{
        name: "Solve the Big Walk Yellow Tower",
        steps: [
          { title: "Plate the base", text: "Anchor holds the red plate to extend the base bridge (Red Tower skill)." },
          { title: "Beam the middle", text: "Route the yellow beam to the middle receiver to extend the second bridge (Green Tower skill)." },
          { title: "Water the summit", text: "Use the valve at mid-level to expose the final ledge (Blue Tower skill)." },
          { title: "Exit as a line", text: "The whole group stands on the summit plate together to finish the tower and the walk." },
        ],
      }}
      related={relatedLinks(["redTower", "blackTower", "greenTower", "blueTower", "tools", "coop", "guide"])}
      faqs={[
        { q: "Is the Yellow Tower the last tower?", a: "Yes — it is the finale and reuses the plate, beam and water mechanics from the earlier towers." },
        { q: "What order do I solve the Yellow Tower?", a: "Bottom-up: plate for the base, beam for the middle, water for the summit. Skipping an order drops a bridge." },
        { q: "Why won't the Yellow Tower finish?", a: "The summit plate only registers with the full line present. If a walker is still climbing, the tower will not complete." },
      ]}
    >
      <h2>Overview</h2>
      <p>
        The Yellow Tower is the victory lap. It is not a new mechanic — it is
        all four previous towers stacked. If you solved Red, Green and Blue,
        you already know every move; the challenge is doing them in sequence
        without a reset.
      </p>

      <h2>Bottom-up order</h2>
      <p>
        Solve from the base to the summit. Each mechanic extends one bridge;
        triggering the next before the previous is stable drops you. Patience
        and a clear anchor call win it.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>Keep one anchor for the plate while others handle beam and valve.</li>
        <li>Confirm each bridge is stable before moving to the next mechanic.</li>
        <li>Finish as a full line on the summit plate for the clean ending.</li>
      </ul>
    </PageShell>
  );
}
