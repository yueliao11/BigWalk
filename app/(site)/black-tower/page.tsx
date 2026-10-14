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
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Towers", path: "/guide" },
        { name: "Black Tower", path: "/black-tower" },
      ]}
      h1="Big Walk Black Tower Puzzle Solution"
      lead="The Black Tower adds a timing gate: lights pulse in a set order and the walkers must step in rhythm. The solution is to let the anchor count two full pulses, then cross on the third — do not move on the first pulse or the gate resets."
      videoId="c30AAvpS6do"
      howTo={{
        name: "Solve the Big Walk Black Tower",
        steps: [
          { title: "Watch one full cycle", text: "The black lights pulse in a fixed pattern. Stand still at the gate and learn the order before anyone moves — the cycle repeats identically, so one clean watch tells you everything." },
          { title: "Assign the anchor", text: "Pick one walker to lead the count. Everyone else stays silent and follows the anchor's rhythm instead of reading the lights themselves." },
          { title: "Anchor counts two pulses", text: "The lead walker counts two full pulses out loud, then steps on the third — this is the only beat where the gate registers a crossing." },
          { title: "Cross on the open pulse", text: "Remaining walkers follow on the same open pulse, single-file, with a small gap between each walker so one early step does not chain into the next." },
          { title: "Recover from a mistimed step", text: "If someone moves on the wrong pulse the gate resets, but the run does not. The anchor holds position, waits for the cycle to restart, and calls the count again." },
          { title: "Regroup at the top", text: "Once across, hold position so late walkers can read your line and time their own crossing off the same open pulse." },
        ],
      }}
      related={relatedLinks(["redTower", "greenTower", "blueTower", "yellowTower", "tools", "coop"])}
      faqs={[
        { q: "Why does the Black Tower keep resetting?", a: "The gate resets if a walker moves on the wrong pulse. Count two full pulses, move on the third, and the gate stays open." },
        { q: "Can the Black Tower be done solo?", a: "Yes — the timing is the same, you just cross the plate yourself on the open pulse. Many players actually find the rhythm easier alone because there is no second walker drifting off-beat." },
        { q: "Is the Black Tower harder than Red?", a: "It adds rhythm on top of the plate mechanic, so most players find it the first real difficulty spike." },
        { q: "Does the Black Tower pulse pattern ever change?", a: "No. The three-pulse cycle is fixed for the whole tower. The only thing that changes is your position — later crossings feel faster because the walkway is longer, not because the lights speed up." },
        { q: "How many players do you need for the Black Tower?", a: "The puzzle scales to your party size like the rest of Big Walk. Two players is the comfortable minimum: one anchors the count while the other crosses on the open pulse." },
        { q: "How long is the gate open on the third pulse?", a: "Long enough for a single-file line to step through if everyone moves on the call. It is not a reaction test — if you are already walking on the third pulse, you will make it with room to spare." },
        { q: "What is the Black Tower in Big Walk?", a: "One of the five color towers in House House's co-op puzzle game. It builds on the Red Tower's pressure-plate idea by adding a timed light gate, and it is the first tower most groups have to retry." },
        { q: "Do you need voice chat for the Black Tower?", a: "It helps a lot. The whole solution rests on one shared count, so a spoken 'one, two, go' is far more reliable than watching each other move. Text callouts work if they are sent early." },
      ]}
    >
      <h2>Overview</h2>
      <p>
        The Black Tower is where Big Walk stops holding your hand. The plate
        from the Red Tower is still there, but now a pulsing light gate decides
        when you are allowed to cross. Step on the wrong beat and the gate
        resets, which turns a simple walk into the first puzzle most groups
        actually have to solve together.
      </p>
      <img
        src="/images/black-tower-map.png"
        alt="Big Walk Black Tower pulse timing map — move on the third pulse"
        className="my-6 w-full rounded-xl border border-slate-200"
        loading="lazy"
      />
      <p>
        The fix is one rule: count two pulses, move on the third. Everything
        below is about making that rule stick when four walkers are shouting
        over each other.
      </p>

      <h2>The pulse pattern explained</h2>
      <p>
        The black lights at the gate pulse in a fixed three-beat cycle. The
        first two pulses are warning beats — they light the gate but do not
        open it. The third pulse is the open window, and it is the only moment
        a crossing registers.
      </p>
      <p>
        Two details matter. First, the cycle never changes: no matter how many
        times you reset, the order is always one-two-open. Second, the gate
        reads your position on the beat, not your speed. A slow walker who
        steps on the third pulse crosses cleanly; a sprinter who launches on
        the first pulse resets the gate for everyone.
      </p>
      <p>
        If the pattern feels hard to read at first, listen instead of looking:
        the pulses have an audible tick, and the third beat lands with a
        deeper tone. Many players keep the rhythm by ear once they notice it.
      </p>

      <h2>The timing trick</h2>
      <p>
        New groups panic and move on the first pulse. The gate only registers
        a crossing on the third pulse of each cycle, so patience beats speed.
        Let the anchor set the rhythm and the rest mirror it.
      </p>
      <p>
        The cleanest method is a spoken count. The anchor watches the lights
        and calls &quot;one, two, go&quot; — with &quot;go&quot; landing exactly
        on the third pulse. Everyone else walks on &quot;go&quot; and ignores
        the lights entirely. Splitting the job this way removes the most
        common failure: two walkers reading the same lights at slightly
        different delays.
      </p>

      <h2>A solo timing drill</h2>
      <p>
        If your group keeps failing, stop crossing and drill the beat instead.
        Stand at the gate edge where a step would trigger the reset, and run
        this loop five times:
      </p>
      <ol>
        <li>Watch the pulses and count &quot;one, two&quot; in your head.</li>
        <li>On the third pulse, take one step forward and stop.</li>
        <li>Check whether the gate flashed a crossing or a reset.</li>
        <li>Step back and repeat until you land five clean beats in a row.</li>
      </ol>
      <p>
        Five clean reps is enough for the rhythm to stick. It feels slow, but
        it is faster than another ten minutes of group resets, and once one
        player owns the beat they can anchor the count for everyone else.
      </p>

      <h2>Why groups keep resetting</h2>
      <p>
        Almost every failed Black Tower run comes down to the same three
        causes:
      </p>
      <ul>
        <li><strong>Moving on the first pulse.</strong> The opening flash looks like a green light. It is not — it is the start of the count.</li>
        <li><strong>Everyone reading the lights alone.</strong> Four private counts drift apart. Use one anchor and one shared call.</li>
        <li><strong>Chained panic steps.</strong> One walker flinches early, the next copies them, and the gate resets mid-line. Leave a gap between walkers so a flinch does not spread.</li>
      </ul>
      <p>
        Notice what is not on the list: the tower itself. The Black Tower
        never changes its pattern, so a group that resets ten times is
        fighting its own coordination, not the puzzle.
      </p>

      <h2>Black Tower vs Red Tower difficulty</h2>
      <p>
        The Red Tower teaches weight: keep a body on the plate and the bridge
        stays down. The Black Tower keeps that plate and adds rhythm on top,
        which is why it lands as the first real difficulty spike in Big Walk.
        Red forgives slow, careful play; Black punishes fast, careless play.
      </p>
      <p>
        The skills transfer, though. A group that learned to assign an anchor
        in Red already has the habit the Black Tower demands — the only new
        muscle is counting to three before moving. Most parties clear Red on
        the first attempt and need two or three tries for Black, and that gap
        is entirely the timing gate.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>Call the count out loud in co-op so everyone moves together.</li>
        <li>If someone mistimes, the anchor holds and the group retries — no full reset needed.</li>
        <li>Watch the top walker; their position tells late joiners when the gate is open.</li>
        <li>Cross single-file with a gap between walkers so one early step cannot chain.</li>
        <li>Run the solo drill first if anyone is new — five clean beats beats ten resets.</li>
        <li>Ignore the walkway length; the pulse timing is identical at every crossing.</li>
      </ul>
    </PageShell>
  );
}
