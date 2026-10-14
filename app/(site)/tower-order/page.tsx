import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.towerOrder.href,
  title: ROUTES.towerOrder.title,
  description: ROUTES.towerOrder.desc,
  keywords: ROUTES.towerOrder.keywords,
});

const TOWER_SEQUENCE = [
  {
    step: "1. Red Tower",
    name: "Red Tower",
    href: "/red-tower",
    mechanic: "Pressure Plates & Bridging",
    difficulty: "★☆☆☆☆ (Intro)",
    whyOrder: "Teaches the core line discipline: holding plates while the rest cross single-file. Every later tower assumes you never step off plates early.",
  },
  {
    step: "2. Black Tower",
    name: "Black Tower",
    href: "/black-tower",
    mechanic: "Light Pulse Timing & Counting",
    difficulty: "★★★★☆ (High Communication)",
    whyOrder: "Adds timing gates to plate discipline. The anchor walker counts two pulses out loud and the team steps on the third.",
  },
  {
    step: "3. Green Tower",
    name: "Green Tower",
    href: "/green-tower",
    mechanic: "Reflector Tool & Laser Routing",
    difficulty: "★★☆☆☆ (Mechanical Routing)",
    whyOrder: "Introduces the handheld Reflector gadget. You steer light beams between dual bridge receivers without dropping connections mid-walk.",
  },
  {
    step: "4. Blue Tower",
    name: "Blue Tower",
    href: "/blue-tower",
    mechanic: "Water Valve & Environmental Levels",
    difficulty: "★★★☆☆ (Precision Control)",
    whyOrder: "Demands precise environment tuning. Valve handlers must set water to mid-level; fully draining the reservoir removes the crossing ledge.",
  },
  {
    step: "5. Yellow Tower",
    name: "Yellow Tower (Finale)",
    href: "/yellow-tower",
    mechanic: "Plates + Pulses + Beams + Water",
    difficulty: "★★★★★ (Mastery Test)",
    whyOrder: "The summit finale. Chains every prior mechanic together from base to apex, requiring simultaneous role execution.",
  },
];

export default function TowerOrderPage() {
  return (
    <PageShell
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Guide", path: "/guide" },
        { name: "Tower Order", path: "/tower-order" },
      ]}
      h1="Big Walk Tower Order: Best Progression Route & Guide"
      lead="The definitive Big Walk tower order is Red → Black → Green → Blue → Yellow. Every tower introduces a distinct mechanic that subsequent puzzles build upon. Attempting towers out of order forces your party to solve advanced puzzles without the communication habits the game expects you to have drilled."
      videoId="c30AAvpS6do"
      howTo={{
        name: "Recommended Big Walk Tower Order",
        steps: [
          { title: "Tower 1 — Red Tower (Basics)", text: "Complete the introductory Red Tower right after the tutorial meadow to learn pressure plate anchoring and bridge retention." },
          { title: "Tower 2 — Black Tower (Rhythm)", text: "Head through the stone canyon to the Black Tower to master 3-count pulse timing gates under synchronized calls." },
          { title: "Tower 3 — Green Tower (Reflectors)", text: "Navigate to the hillside Green Tower to pick up and practice the Reflector beam routing tool on dual bridges." },
          { title: "Tower 4 — Blue Tower (Water)", text: "Descend into the reservoir dam to solve the Blue Tower by maintaining the crucial mid-level water rule." },
          { title: "Tower 5 — Yellow Tower (Finale)", text: "Ascend to the central mountain to tackle the grand Yellow Tower finale by combining plates, beams, pulses, and valves." },
        ],
      }}
      related={relatedLinks([
        "redTower",
        "blackTower",
        "greenTower",
        "blueTower",
        "yellowTower",
        "guide",
        "tools",
        "coop",
      ])}
      faqs={[
        {
          q: "What is the best tower order in Big Walk?",
          a: "The recommended order is Red, Black, Green, Blue, and Yellow. Red establishes plate discipline, Black teaches pulse timing, Green introduces light reflection tools, Blue drills water heights, and Yellow tests all four mechanics simultaneously.",
        },
        {
          q: "Can you do the Big Walk towers out of order?",
          a: "While the open world allows roaming between regions, physical path barriers, tool requirements, and puzzle dependencies make the intended sequence significantly smoother. Solving the Yellow Tower requires tools and habits mastered in earlier towers.",
        },
        {
          q: "Which Big Walk tower is the hardest?",
          a: "The Yellow Tower is the most complex overall because it layers every tool and mechanic. However, the Black Tower causes the highest wipe rate for early groups due to strict pulse-counting failure states.",
        },
        {
          q: "What order should 2-player co-op groups take?",
          a: "Two-player groups should strictly follow Red → Black → Green → Blue → Yellow. Duo parties have zero margin for error with plate anchors, so building muscle memory sequentially is essential.",
        },
        {
          q: "How long does each tower take to solve?",
          a: "The Red Tower takes 5–10 minutes. The Black and Green towers take 15–25 minutes each. The Blue Tower takes 20–30 minutes, and the finale Yellow Tower takes 35–50 minutes for a fresh team.",
        },
        {
          q: "Can you skip the Blue Tower?",
          a: "No. All five color towers must be completed and their apex beacons activated to open the final pathway and complete the walk.",
        },
      ]}
    >
      <h2>Progression Route Breakdown</h2>
      <p>
        In House House&apos;s co-op adventure, each of the five color towers functions as an interactive tutorial
        for a specific puzzle language. Skipping ahead usually results in frustration because the puzzles do not
        contain on-screen prompt tutorials — they expect players to transfer muscle memory from previous towers.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="border border-slate-200 p-2 font-semibold">Tower Order</th>
              <th className="border border-slate-200 p-2 font-semibold">Core Mechanic</th>
              <th className="border border-slate-200 p-2 font-semibold">Difficulty</th>
              <th className="border border-slate-200 p-2 font-semibold">Why This Position Matters</th>
            </tr>
          </thead>
          <tbody>
            {TOWER_SEQUENCE.map((t) => (
              <tr key={t.name}>
                <td className="border border-slate-200 p-2 font-medium">
                  <a href={t.href} className="font-semibold text-brand-700 underline hover:text-brand-900">
                    {t.step}
                  </a>
                </td>
                <td className="border border-slate-200 p-2">{t.mechanic}</td>
                <td className="border border-slate-200 p-2">{t.difficulty}</td>
                <td className="border border-slate-200 p-2">{t.whyOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>1. Red Tower (Start Here)</h2>
      <p>
        The Red Tower sits at the edge of the tutorial meadow. It teaches the most fundamental rule of Big Walk:
        <strong> pressure plates do not hold themselves</strong>. One walker must step on the plate to lower
        the entry bridge, an anchor walker crosses to the far anchor plate to take over weight duty, and the
        remainder of the expedition crosses single-file. If your group rushes and both plates empty simultaneously,
        the bridge snaps back and your teammates fall.
      </p>
      <p>
        Read the full step-by-step walkthrough in our{" "}
        <a href="/red-tower" className="font-semibold text-brand-700 underline hover:text-brand-900">
          Big Walk Red Tower Solution Guide
        </a>.
      </p>

      <h2>2. Black Tower (Rhythm &amp; Synchronization)</h2>
      <p>
        Located northwest through the canyon, the Black Tower tests your party&apos;s verbal synchronization.
        Instead of static bridges, you encounter pulsed timing gates. The solution relies on designated count
        callouts: the lead walker observes one cycle, counts two audible pulses (&quot;One... Two...&quot;), and
        the party strides across on pulse three. Stepping early trips the perimeter buzzer and resets the gate.
      </p>
      <p>
        Check pulse timing tips in our{" "}
        <a href="/black-tower" className="font-semibold text-brand-700 underline hover:text-brand-900">
          Big Walk Black Tower Solution Guide
        </a>.
      </p>

      <h2>3. Green Tower (Light Beam Routing)</h2>
      <p>
        Set on a lush eastern ridge, the Green Tower introduces the Reflector equipment gadget. This puzzle shifts
        focus from team timing to spatial angle routing. Walkers aim a laser emitter toward dual receivers:
        locking onto receiver 1 raises bridge 1; redirecting the beam to receiver 2 lowers bridge 2 while
        retracting bridge 1. Moving between platforms requires coordinated beam transfers.
      </p>
      <p>
        Review mirror angles in our{" "}
        <a href="/green-tower" className="font-semibold text-brand-700 underline hover:text-brand-900">
          Big Walk Green Tower Solution Guide
        </a>.
      </p>

      <h2>4. Blue Tower (Environmental Water Levels)</h2>
      <p>
        Found within the reservoir canyon (often searched by players as the &quot;Blue Building&quot; or &quot;Blue Slope&quot;),
        the Blue Tower is an environmental water puzzle. One player operates the reservoir valve while others
        navigate the sluice gate ledges. The critical trap: draining the water entirely vanishes the crossing span.
        The valve must be stopped precisely at the mid-level notch.
      </p>
      <p>
        Master the valve height in our{" "}
        <a href="/blue-tower" className="font-semibold text-brand-700 underline hover:text-brand-900">
          Big Walk Blue Tower Solution Guide
        </a>.
      </p>

      <h2>5. Yellow Tower (The Grand Finale)</h2>
      <p>
        The Yellow Tower crowns the central mountain and serves as the graduation exam of the entire expedition.
        Its multi-tier ascent combines everything: lower-level pressure plates, middle-tier laser routing, and
        upper-tier water locks. Solve it bottom-up by assigning clear squad roles before stepping onto the
        first ramp.
      </p>
      <p>
        Prepare your team with our{" "}
        <a href="/yellow-tower" className="font-semibold text-brand-700 underline hover:text-brand-900">
          Big Walk Yellow Tower Solution Guide
        </a>.
      </p>

      <h2>Can You Skip Towers or Roam Freely?</h2>
      <p>
        The landscape in Big Walk is seamless and non-linear, which tempts curious explorers to wander directly
        toward the Yellow or Blue towers right after spawning. However:
      </p>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>
          <strong>Key Tools are Discovered Progressively:</strong> Gadgets such as the Reflector are positioned along
          the natural route between the Red and Green towers.
        </li>
        <li>
          <strong>The Yellow Tower Requires Prior Activations:</strong> The final ascension mechanism unlocks only
          when all four lower towers have chimed and lit their beacon rays.
        </li>
        <li>
          <strong>Checkpoint Regroups:</strong> If a player falls behind or gets lost, jumping into a hazard returns
          them to the team leader&apos;s active tower checkpoint.
        </li>
      </ul>
    </PageShell>
  );
}
