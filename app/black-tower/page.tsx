import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.blackTower.href,
  title: ROUTES.blackTower.title,
  description: ROUTES.blackTower.desc,
  keywords: ROUTES.blackTower.keywords,
});

export default function BlackTowerPage() {
  return (
    <PageShell
      h1="Big Walk Black Tower Puzzle Solution"
      lead="The Black Tower adds a timing gate: lights pulse in a set order and the walkers must step in rhythm. The solution is to let the anchor count two full pulses, then cross on the third — do not move on the first pulse or the gate resets."
      howTo={{
        name: "Solve the Big Walk Black Tower",
        steps: [
          { title: "Watch one full cycle", text: "The black lights pulse in a fixed pattern. Stand still and learn the order before moving." },
          { title: "Anchor counts two pulses", text: "The lead walker counts two pulses, then steps on the third — this is when the gate is open." },
          { title: "Cross on the open pulse", text: "Remaining walkers follow on the same open pulse, single-file." },
          { title: "Regroup at the top", text: "Once across, hold position so late walkers can read your line and time their own crossing." },
        ],
      }}
      related={relatedLinks(["redTower", "greenTower", "blueTower", "yellowTower", "tools", "coop"])}
      faqs={[
        { q: "Why does the Black Tower keep resetting?", a: "The gate resets if a walker moves on the wrong pulse. Count two full pulses, move on the third, and the gate stays open." },
        { q: "Can the Black Tower be done solo?", a: "Yes — the timing is the same, you just cross the plate yourself on the open pulse." },
        { q: "Is the Black Tower harder than Red?", a: "It adds rhythm on top of the plate mechanic, so most players find it the first real difficulty spike." },
      ]}
    >
      <h2>Overview</h2>
      <p>
        The Black Tower is where Big Walk stops holding your hand. The plate
        from the Red Tower is still there, but now a pulsing light gate decides
        when you are allowed to cross.
      </p>

      <h2>The timing trick</h2>
      <p>
        New groups panic and move on the first pulse. The gate only registers
        a crossing on the third pulse of each cycle, so patience beats speed.
        Let the anchor set the rhythm and the rest mirror it.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>Call the count out loud in co-op so everyone moves together.</li>
        <li>If someone mistimes, the anchor holds and the group retries — no full reset needed.</li>
        <li>Watch the top walker; their position tells late joiners when the gate is open.</li>
      </ul>
    </PageShell>
  );
}
