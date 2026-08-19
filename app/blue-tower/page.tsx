import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.blueTower.href,
  title: ROUTES.blueTower.title,
  description: ROUTES.blueTower.desc,
  keywords: ROUTES.blueTower.keywords,
});

export default function BlueTowerPage() {
  return (
    <PageShell
      h1="Big Walk Blue Tower Puzzle Solution"
      lead="The Blue Tower is a water-level puzzle: lowering a gate raises the walkway. The solution is to send one walker down to the valve, hold the walkway at mid-level, and let the rest cross before you fully drain it — drain it completely and the crossing ledge vanishes."
      howTo={{
        name: "Solve the Big Walk Blue Tower",
        steps: [
          { title: "Send one walker to the valve", text: "The lowest walker reaches the water valve that controls the tower's level." },
          { title: "Hold at mid-level", text: "Lower the water only to mid — this exposes the crossing ledge without flooding the valve walker." },
          { title: "Cross on the ledge", text: "Remaining walkers use the mid-level ledge to reach the upper platform." },
          { title: "Complete from the top", text: "From the upper platform, the line hits the exit plate; the valve walker climbs the now-drained side." },
        ],
      }}
      related={relatedLinks(["redTower", "blackTower", "greenTower", "yellowTower", "tools", "coop"])}
      faqs={[
        { q: "Why does the Blue Tower crossing ledge disappear?", a: "If you fully drain the water the ledge that connects the two sides is gone. Hold the level at mid so the ledge stays exposed." },
        { q: "What does the valve do?", a: "The valve sets the water height, which raises or lowers the walkable ledges. Mid-level is the sweet spot." },
        { q: "Can the Blue Tower fail the whole group?", a: "Only if everyone drains it at once. Keep the valve walker isolated and the rest cross safely." },
      ]}
    >
      <h2>Overview</h2>
      <p>
        The Blue Tower introduces a vertical water puzzle. Unlike the plate and
        beam towers, success depends on <em>how much</em> you change the
        environment, not just the order.
      </p>

      <h2>The mid-level rule</h2>
      <p>
        The instinct is to drain everything for a clear path. That removes the
        ledge you need. Stop at mid-level: the ledge is exposed and the valve
        walker is not flooded.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>Designate the valve walker before starting.</li>
        <li>Cross on mid-level; do not touch the valve again until the line is up top.</li>
        <li>The exit plate completes the tower for the whole group.</li>
      </ul>
    </PageShell>
  );
}
