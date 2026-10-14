import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.guide.href,
  title: ROUTES.guide.title,
  description: ROUTES.guide.desc,
  keywords: ROUTES.guide.keywords,
});

const TOWERS = [
  ["Red", "Pressure plates and bridges", "One anchor holds the plate while the line crosses single-file"],
  ["Black", "Light-pulse timing", "Count two pulses, move on the third"],
  ["Green", "Beam routing", "Steer the beam with the Reflector and never drop it mid-cross"],
  ["Blue", "Water level", "Hold water at mid-level — a full drain removes the crossing ledge"],
  ["Yellow", "All four mechanics combined", "Run every earlier habit at once, finishing as a full line"],
];

export default function GuidePage() {
  return (
    <PageShell
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Guide", path: "/guide" },
      ]}
      h1="Big Walk Complete Guide & Walkthrough"
      lead="Big Walk is a co-op puzzle walk: a line of players moves together through a hand-built world, solving five color towers. Do the towers in order (Red → Black → Green → Blue → Yellow), keep one anchor on every plate, and you will finish the walk."
      gameWidget
      videoId="c30AAvpS6do"
      related={relatedLinks(["redTower", "blackTower", "greenTower", "blueTower", "yellowTower", "tools", "coop", "achievements", "price"])}
      faqs={[
        { q: "What order should I do the Big Walk towers?", a: "Red, then Black, Green, Blue, and Yellow last. Each tower teaches a mechanic the next one reuses, so the intended order is also the easiest order." },
        { q: "Any first-timer tips?", a: "Assign one anchor walker to hold every pressure plate, count two light pulses and move on the third at the Black and Yellow towers, and never fully drain the water at Blue. Say roles out loud before each tower." },
        { q: "How long is Big Walk?", a: "A few focused co-op sessions for the main walk — one evening per tower is a relaxed pace. Completionist runs that chase every achievement and clean tower replays take noticeably longer." },
        { q: "Can you play Big Walk solo?", a: "Yes, every tower is solvable solo, but the game is built for co-op. Pressure plates, pulse counts and beam routing all assume a role split, so expect slower, more methodical runs alone." },
        { q: "What platforms is Big Walk on?", a: "Big Walk released on August 4, 2026 for Steam, Nintendo Switch 2 and PlayStation 5. It is developed by House House and published by Panic, and co-op works across platforms with crossplay enabled." },
        { q: "Which Big Walk tower is the hardest?", a: "The Yellow Tower, because it combines plates, pulses, beam routing and water level in one run. The Black Tower fails the most first attempts, though — its pulse timing punishes groups that skip the count." },
        { q: "What is the most common reason runs fail?", a: "An empty pressure plate. The moment the anchor steps off early — or two walkers leave a plate together — bridges retract and the line falls. Anchor discipline fixes more runs than any trick." },
        { q: "Do I need voice chat for Big Walk?", a: "It is not required, but it is close. Anchor calls, pulse counts and water-level stops are all timing-critical, and text chat is too slow. A group on voice clears towers in half the attempts." },
        { q: "How do you unstuck or respawn if trapped in geometry?", a: "If you clip into a boulder or tree, open Pause > Leave Walk, and immediately re-enter your team's 6-character Join Code. You will respawn right beside the party leader with zero puzzle progress lost. Falling off cliffs triggers an automatic 5-second checkpoint respawn." },
      ]}
    >
      <h2>What to do in your first hour</h2>
      <p>
        Big Walk — the co-op walker from <em>Untitled Goose Game</em> studio
        House House, published by Panic — opens gently, but the first hour
        decides how smooth the rest of the walk goes. Spend it on three
        things: learning to move as a line, meeting your tool kit, and
        clearing the Red Tower.
      </p>
      <ol>
        <li>
          <strong>Walk the tutorial stretch slowly.</strong> Practice
          starting, stopping and turning as a single line. Every tower after
          it assumes your group can do this on voice chat without thinking.
        </li>
        <li>
          <strong>Try every tool once.</strong> Pick up the Reflector, Valve,
          Plate Anchor, Counter and Beacon as they appear and fire each one.
          You will not get new gadgets later, so learn these five now.
        </li>
        <li>
          <strong>Agree on roles out loud.</strong> Before the Red Tower, name
          one plate anchor and one pulse counter. Runs fall apart when
          everyone assumes someone else is holding the plate.
        </li>
        <li>
          <strong>Clear the Red Tower before you log off.</strong> It teaches
          the pressure-plate rule the whole game is built on, and finishing it
          opens the path to the later towers.
        </li>
      </ol>

      <h2>The five towers at a glance</h2>
      <p>
        Each tower teaches one mechanic, and the next tower reuses it. That is
        why the order below is not optional in practice — skip ahead and you
        will be missing a skill the puzzle assumes you already have.
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="border border-slate-200 p-2">Tower</th>
              <th className="border border-slate-200 p-2">Core mechanic</th>
              <th className="border border-slate-200 p-2">The habit that solves it</th>
            </tr>
          </thead>
          <tbody>
            {TOWERS.map((t) => (
              <tr key={t[0]}>
                <td className="border border-slate-200 p-2 font-medium">
                  <a
                    href={`/${t[0].toLowerCase()}-tower`}
                    className="font-semibold text-brand-700 underline hover:text-brand-900"
                  >
                    {t[0]} Tower Solution
                  </a>
                </td>
                <td className="border border-slate-200 p-2">{t[1]}</td>
                <td className="border border-slate-200 p-2">{t[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Notice the pattern: the Black, Blue and Yellow towers all stand on the
        pressure-plate discipline the Red Tower teaches. When a late tower
        keeps failing, the fix is usually an earlier habit, not a new trick.
      </p>

      <h2>Progression</h2>
      <p>The main walk is linear. You pass through these stages in order:</p>
      <ol>
        <li>Tutorial stretch — learn to walk as a line.</li>
        <li>Red Tower — pressure plates and bridges.</li>
        <li>Black Tower — pulse timing.</li>
        <li>Green Tower — beam routing.</li>
        <li>Blue Tower — water level.</li>
        <li>Yellow Tower — all mechanics combined.</li>
      </ol>
      <p>
        The list mirrors the in-game map: each tower&apos;s beacon lights up
        as the previous one falls. You cannot reach the Yellow Tower early,
        and you would not want to — it assumes you already own every habit on
        this page.
      </p>

      <h2>Tools primer</h2>
      <p>
        Big Walk gives you five tools and no more. None is complicated alone;
        the wins come from combining them under pressure.
      </p>
      <ul>
        <li><strong>Reflector</strong> — routes the green beam to receivers; powers the Green and Yellow towers.</li>
        <li><strong>Valve</strong> — sets the water level at the Blue and Yellow towers. Stop at mid-level.</li>
        <li><strong>Plate Anchor</strong> — the walker who holds a pressure plate so bridges stay down. Assign this role first in every run.</li>
        <li><strong>Counter</strong> — tracks the light-pulse rhythm at the Black and Yellow towers: count two, move on the third.</li>
        <li><strong>Beacon</strong> — marks the next tower on the map so late joiners can find your line.</li>
      </ul>
      <p>
        To practice, replay an early tower with one tool in focus. By the
        Yellow Tower your group should be combining the Reflector, Valve and
        Plate Anchor without discussion — that is the whole point of the kit.
        The full tool-by-tool breakdown, with the combos that break puzzles,
        lives on the tools page.
      </p>

      <h2>Setting up co-op the right way</h2>
      <p>
        Big Walk is built for co-op on Steam, Nintendo Switch 2 and
        PlayStation 5, with crossplay between platforms. It is technically
        solvable solo, but the puzzles assume a role split, so bring at least
        one friend. Set the session up right and you avoid most of the
        problems people hit:
      </p>
      <ol>
        <li>
          <strong>Host on the strongest connection.</strong> The player with
          open NAT and a wired connection should host the walk.
        </li>
        <li>
          <strong>Share a fresh join code.</strong> Codes are case-sensitive
          and expire — regenerate one instead of re-reading an old one.
        </li>
        <li>
          <strong>Turn crossplay on at both ends.</strong> A console player
          and a PC player both need the toggle enabled, or the join fails
          silently.
        </li>
        <li>
          <strong>Get everyone on voice chat.</strong> Anchor calls and pulse
          counts are timing-critical; text chat is too slow.
        </li>
      </ol>
      <p>
        If a join still fails after these steps, work through the co-op fixes
        page — most disconnects clear at the NAT check.
      </p>

      <h2>Suggested completion order</h2>
      <p>
        Do the towers in the order the game presents them: Red, then Black,
        Green, Blue, and Yellow last. Each one teaches a mechanic the next
        reuses, so the intended order is also the easiest order.
      </p>
      <p>
        Red teaches plate discipline. Black layers pulse timing on top of a
        held plate. Green routes a beam across bridges your anchor is holding.
        Blue makes you manage the water level without abandoning your plates.
        Yellow then asks for all four habits at once, which is why it feels
        fair instead of cruel when you reach it last.
      </p>
      <p>
        If a tower walls your group, step back one tower and replay it cleanly
        rather than brute-forcing. After the Yellow Tower, the walk is done —
        from there it is achievement cleanup, clean replays of each tower, and
        dropping a Beacon to shepherd late-joining friends through the route.
      </p>

      <h2>Core habits that win runs</h2>
      <ul>
        <li>Assign a plate anchor before every tower.</li>
        <li>Count two pulses, move on the third (Black/Yellow).</li>
        <li>Hold water at mid-level, never fully drain (Blue/Yellow).</li>
        <li>Finish each tower as a full line on the exit plate.</li>
      </ul>
      <p>
        Most failed runs trace back to one of these four habits breaking, not
        to a puzzle being unfair. Call the habit out loud the moment it slips
        and the run usually recovers.
      </p>

      <h2>How to Unstuck and Respawn in Big Walk</h2>
      <p>
        Because of the organic landscape geometry and physics interactions, walkers
        occasionally clip into rock faces, wedge beneath roots, or fall out of bounds.
        Here is how to recover being stuck without restarting your entire run:
      </p>
      <ul>
        <li>
          <strong>The 5-Second Void Respawn:</strong> If you drop into a canyon or out-of-bounds chasm, do not panic. The game automatically resets your walker back onto the nearest trail checkpoint after 3 to 5 seconds.
        </li>
        <li>
          <strong>Leave &amp; Rejoin by Join Code (Safe Host Respawn):</strong> If your character is physically wedged in rocks or trees, the fastest fix is to open the Pause Menu &gt; select &quot;Leave Walk&quot;, and re-enter your team&apos;s 6-character Join Code. You will immediately spawn standing right next to the active party leader without resetting completed puzzle states.
        </li>
        <li>
          <strong>Crouch-Jumping &amp; Angle Shifting:</strong> If you are caught on terrain collision, hold Crouch and rapidly rotate your camera while pressing Jump. This frequently frees the walking capsule hitbox.
        </li>
      </ul>

      <h2>Where to go next</h2>
      <p>
        Open any tower page above for the exact step-by-step, or the tools
        page for the gadget combos. Co-op stuck? See the fixes page. Chasing
        100%? The achievements page lists every unlock and the missable ones.
      </p>
    </PageShell>
  );
}
