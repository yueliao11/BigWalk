import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.redTower.href,
  title: ROUTES.redTower.title,
  description: ROUTES.redTower.desc,
  keywords: ROUTES.redTower.keywords,
});

export default function RedTowerPage() {
  return (
    <PageShell
      h1="Big Walk Red Tower Puzzle Solution"
      lead="The Red Tower is the intro tower. The solution is: line up on the red pad, walk the lead walker onto the pressure plate, then have the rest cross one at a time so the bridge stays down. The run fails if two walkers step off the plate together."
      howTo={{
        name: "Solve the Big Walk Red Tower",
        steps: [
          { title: "Stand on the red pad", text: "All walkers gather on the red pressure pad at the tower base — this lowers the first bridge." },
          { title: "Send the lead walker across", text: "The front walker steps onto the bridge and onto the far plate, which holds it down for the group." },
          { title: "Cross one at a time", text: "Remaining walkers follow single-file. Never let the pad empty or the bridge retracts." },
          { title: "Hit the end plate together", text: "At the top, the whole line stands on the exit plate to trigger the tower's completion chime." },
        ],
      }}
      related={relatedLinks(["blackTower", "greenTower", "blueTower", "yellowTower", "tools", "coop", "guide"])}
      faqs={[
        { q: "Where is the Red Tower in Big Walk?", a: "The Red Tower is the first color tower you reach on the main walk, shortly after the tutorial stretch. Its map marker is a red beacon." },
        { q: "Why does the Red Tower bridge keep retracting?", a: "The bridge is held by a pressure plate. If the plate is empty — e.g. two walkers step off at once — it retracts. Keep at least one walker on the plate at all times." },
        { q: "Is the Red Tower required?", a: "It is the gateway tower; completing it opens the path to the later towers, so yes." },
      ]}
    >
      <h2>Overview</h2>
      <p>
        The Red Tower teaches the core loop of Big Walk: a line of walkers,
        pressure plates, and bridges that only stay down while weight is on
        them. Treat it as the tutorial for every tower after it.
      </p>

      <h2>What you need</h2>
      <ul>
        <li>At least 2 walkers (the puzzle is solvable solo but built for co-op).</li>
        <li>One walker willing to be the &quot;anchor&quot; who never leaves the plate.</li>
      </ul>

      <h2>The trap that fails most runs</h2>
      <p>
        Groups rush the bridge together. The moment the plate empties the
        bridge retracts and everyone falls. The fix is discipline: anchor
        holds, others cross single-file.
      </p>

      <h2>Tips for a clean run</h2>
      <ol>
        <li>Assign the anchor before you start — call it out in voice chat.</li>
        <li>If a walker falls, the anchor stays; the fallen walker respawns at the pad.</li>
        <li>Trigger the exit plate as a full line for the clean completion.</li>
      </ol>
    </PageShell>
  );
}
