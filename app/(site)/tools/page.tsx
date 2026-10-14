import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.tools.href,
  title: ROUTES.tools.title,
  description: ROUTES.tools.desc,
  keywords: ROUTES.tools.keywords,
});

const TOOLS = [
  { name: "The Reflector", use: "Routes the green beam to receivers; powers the Green and Yellow towers.", combo: "Pair with a steady anchor so the beam never drops mid-cross." },
  { name: "The Valve", use: "Sets water level at the Blue and Yellow towers.", combo: "Stop at mid-level — full drain removes the crossing ledge." },
  { name: "The Plate Anchor", use: "A walker who holds a pressure plate so bridges stay down.", combo: "Assign this role first in every co-op run." },
  { name: "The Counter", use: "Tracks light-pulse rhythm at the Black and Yellow towers.", combo: "Count two pulses, move on the third." },
  { name: "The Beacon", use: "Marks the next tower on the map for late joiners.", combo: "Drop it at the top so stragglers can read your line." },
];

export default function ToolsPage() {
  return (
    <PageShell
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Tools", path: "/tools" },
      ]}
      h1="Big Walk Tools & How to Use Them"
      lead="Big Walk gives you a small kit of gadgets. None are complicated alone, but the wins come from combining them. Here is every tool, what it does, when to use it, and the combo that actually breaks a puzzle."
      related={relatedLinks(["redTower", "blackTower", "greenTower", "blueTower", "yellowTower", "coop", "guide"])}
      faqs={[
        { q: "How many tools are there in Big Walk?", a: "Five core tools cover every tower: the Reflector, the Valve, the Plate Anchor, the Counter and the Beacon. Each maps to a specific tower mechanic." },
        { q: "Which Big Walk tool is most important?", a: "The Plate Anchor. Holding a pressure plate is the foundation of the Red, Black and Yellow towers, so assigning this role first wins most runs." },
        { q: "Do tools carry between towers?", a: "Yes — the same kit is used across all five towers, which is why the later towers feel like combinations of earlier ones." },
        { q: "Can you finish Big Walk without using every tool?", a: "You can clear the early towers lean — the Red Tower only needs a Plate Anchor and the Green Tower mostly needs the Reflector. The Yellow Tower is the gatekeeper: it expects the full kit working together." },
        { q: "Which tool should the newest player hold?", a: "The Beacon. It is low risk, it teaches map reading, and it frees the experienced walkers to hold the Reflector, the Valve and the plates. Hand them the Counter role once they can call a steady beat." },
        { q: "Why does the Reflector beam keep dropping?", a: "Two causes: something broke line of sight between the emitter and the receiver, or the carrier moved while the group was mid-cross. Plant the carrier like an anchor and re-check the beam line before anyone steps out." },
        { q: "Do tools work the same on every platform?", a: "Yes. The kit is identical on Steam, Nintendo Switch 2 and PS5, and co-op crossplay shares the same mechanics, so every combo on this page works regardless of where your group plays." },
      ]}
    >
      <h2>All Big Walk tools at a glance</h2>
      <p>
        Below is the full kit in one view. Scroll further for the deep dive on
        each Big Walk tool — what it does, the exact moment to pull it out,
        and the mistake that wastes it.
      </p>
      <div className="mt-3 space-y-4">
        {TOOLS.map((t, i) => (
          <div key={t.name} className="card">
            <h3 className="!mt-0 !mb-1 text-lg font-semibold text-brand-700">
              {i + 1}. {t.name}
            </h3>
            <p className="!my-1 text-slate-700">{t.use}</p>
            <p className="!my-0 text-sm text-muted">
              <strong>Combo:</strong> {t.combo}
            </p>
          </div>
        ))}
      </div>

      <h2>The Reflector: routing the green beam</h2>
      <p>
        The Reflector catches the green emitter beam and routes it into a
        receiver. A lit receiver powers the Green Tower mechanisms, and the
        Yellow Tower reuses the same trick in its finale. The beam bends at a
        fixed angle, and anything that breaks line of sight — a wall, a raised
        bridge, a wandering walker — drops the connection instantly.
      </p>
      <p>
        Use it the moment you see a green emitter pointed at an unlit
        receiver. That pairing is the puzzle telling you the Reflector is the
        solution. The classic mistake is the carrier repositioning mid-cross
        to &quot;help&quot; the group: the beam drops, the bridge retracts, and
        everyone swims. Plant the carrier like an anchor before anyone steps
        out, and only adjust the angle while the crossing is empty.
      </p>

      <h2>The Valve: setting the water level</h2>
      <p>
        The Valve controls the water level at the Blue Tower and again inside
        the Yellow Tower. Each level floats some ledges and sinks others, so
        the valve operator is effectively redrawing the map for the rest of
        the group. It is the one tool where the operator never crosses — they
        stay at the wheel and steer everyone else.
      </p>
      <p>
        Reach for it whenever a route is blocked by water that is too high or
        a gap that needs a floating ledge. The costly mistake is draining to
        zero &quot;to see what happens&quot;: full drain removes the crossing
        ledge entirely and strands anyone already out there. Stop at
        mid-level, and pair the operator with a Plate Anchor so the far bridge
        stays down while the water settles.
      </p>

      <h2>The Plate Anchor: the role that holds everything</h2>
      <p>
        The Plate Anchor is not a gadget — it is a walker who stands on a
        pressure plate and does not move. Pressure plates hold bridges down,
        and bridges retract the instant a plate empties. The Red Tower
        teaches this role, the Black Tower punishes you for forgetting it, and
        the Yellow Tower assumes you have mastered it.
      </p>
      <p>
        Assign the anchor before every co-op run, out loud, by name. The
        failure everyone has lived through: the anchor steps off to grab a
        collectible or help a straggler, the bridge retracts, and the whole
        line falls. If the anchor gets bored, the run is going well — boredom
        is the job. Combine the role with a Beacon drop at the top so the
        anchor can at least watch the group&apos;s progress on the map.
      </p>

      <h2>The Counter: calling the light-pulse rhythm</h2>
      <p>
        The Counter tracks the light-pulse rhythm at the Black Tower and the
        Yellow Tower. Pulses gate when it is safe to move, and the counter is
        the walker who calls the beat so the group crosses in sync. One calm
        voice beats four walkers guessing.
      </p>
      <p>
        Use the rhythm rule: count two pulses, move on the third. The mistake
        that desyncs whole groups is counting from the first pulse you happen
        to see instead of the tower&apos;s reset beat — you end up permanently
        one beat late and every crossing clips the danger window. Stand still,
        watch one full cycle, then start counting. And never rotate the
        Counter role mid-run: relearning the beat costs more time than the
        swap ever saves.
      </p>

      <h2>The Beacon: marking the next tower</h2>
      <p>
        The Beacon drops a map marker on the next tower so late joiners and
        split groups can find the line. It does nothing to the puzzles
        themselves — it is the tool that keeps a co-op session together when
        someone disconnects, joins late, or wanders off the route.
      </p>
      <p>
        Drop it the moment the group agrees on a destination, and drop it at
        the top of the tower, not the base. A marker at the base tells
        stragglers where you were; a marker at the top lets them read your
        whole line and rejoin mid-route. The common waste is treating it as a
        toy and re-dropping it every few steps — one Beacon, placed well, is
        worth more than ten scattered pings nobody reads.
      </p>

      <h2>Tool combos that break puzzles</h2>
      <p>
        Big Walk&apos;s later towers are built to be solved by pairs of tools,
        not single gadgets. These are the combinations that collapse a
        ten-minute argument into a thirty-second clear.
      </p>
      <ul>
        <li>
          <strong>Reflector + Plate Anchor (Yellow Tower):</strong> the anchor
          holds the exit plate while the carrier finishes the beam line — the
          bridge and the receiver come online at the same moment, which is the
          only way the final crossing stays up.
        </li>
        <li>
          <strong>Valve + Counter:</strong> let the water settle at mid-level
          first, then have the Counter call the beat for the crossing. Moving
          while the water is still rising or falling is how ledges vanish
          under walkers&apos; feet.
        </li>
        <li>
          <strong>Counter + Reflector (Black Tower):</strong> hold the beam
          steady and move the group on the third pulse. The pulses and the
          beam share a rhythm, so the carrier should never reposition between
          pulses.
        </li>
        <li>
          <strong>Beacon + Plate Anchor:</strong> the anchor drops the Beacon
          at the top before sitting down on the plate. Late joiners land on
          the marker, see the held bridge, and slot straight into the line.
        </li>
      </ul>

      <h2>Tools you should stop wasting</h2>
      <p>
        Most failed runs are not missing a tool — they are misusing one.
        These habits cost groups entire towers.
      </p>
      <ul>
        <li>
          Stop carrying the Reflector through the Red Tower. There are no
          green receivers there; it is dead weight that tempts its carrier to
          wander instead of anchoring a plate.
        </li>
        <li>
          Stop draining the Valve to zero out of curiosity. Mid-level is
          almost always the answer, and full drain deletes the crossing ledge.
        </li>
        <li>
          Stop re-dropping the Beacon. One marker at the tower top is
          information; a trail of pings is noise.
        </li>
        <li>
          Stop letting the Plate Anchor multi-task. An anchor who collects,
          scouts or rescues is an anchor who will eventually step off the
          plate at the worst moment.
        </li>
        <li>
          Stop swapping the Counter mid-run. One voice, one beat, for the
          whole tower.
        </li>
      </ul>

      <h2>How to practice with the tools</h2>
      <p>
        Replay the early towers with one tool focus each run: Red Tower for
        plate discipline, Green Tower for the Reflector, Blue Tower for the
        Valve, Black Tower for the Counter. Call every action out loud while
        you learn — counting beats audibly is the fastest way to internalize
        the rhythm. By the time you reach the Yellow Tower you should be
        combining the Reflector, Valve and Plate Anchor without thinking,
        because that tower assumes you already can.
      </p>
    </PageShell>
  );
}
