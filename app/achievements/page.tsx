import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.achievements.href,
  title: ROUTES.achievements.title,
  description: ROUTES.achievements.desc,
  keywords: ROUTES.achievements.keywords,
});

const ACH = [
  {
    name: "First Steps",
    how: "Complete the tutorial stretch as a line.",
    detail:
      "The tutorial is the short walk before the first color tower, and the whole group has to stay linked from the opening pad to the gate at the end.",
    fastest:
      "You can barely miss this one — it pops in the first ten minutes as long as nobody splits off. Let the slowest walker set the pace and keep the line tight through every turn.",
    missable: null,
  },
  {
    name: "Red Done",
    how: "Finish the Red Tower with the bridge held.",
    detail:
      "The Red Tower bridge only stays down while a walker holds the pressure plate, so the condition is really about discipline on the final crossing.",
    fastest:
      "Assign an anchor who never leaves the plate, send everyone else across single-file, and regroup on the exit plate as a full line. Do that and this unlocks together with the tower clear.",
    missable:
      "If the plate empties at the wrong moment the bridge retracts and the finish does not count. The tower is replayable, but getting it right the first time saves a full rerun.",
  },
  {
    name: "On Beat",
    how: "Clear the Black Tower without a reset.",
    detail:
      "The Black Tower is a timing puzzle: walkers move in a set order, and one mistimed step is what forces most groups to reset the room.",
    fastest:
      "Agree on the walk order before anyone moves, then call each step out loud in voice chat. One slow, clean run beats three fast sloppy ones.",
    missable:
      "A single reset voids the achievement for that attempt, so if someone slips, finish the tower anyway and come back fresh — tilting mid-run is how groups burn an hour here.",
  },
  {
    name: "Beam Master",
    how: "Route both Green Tower receivers in one run.",
    detail:
      "The Green Tower is built around a light beam you steer into receivers, and most natural routes only power one before the group moves on.",
    fastest:
      "Split the jobs: one walker holds the beam steady while another repositions to light the second receiver. Clear both before anyone triggers the exit.",
    missable:
      "Leaving the tower with only one receiver lit means a fresh run from the entrance, so check both are powered before the group steps onto the exit plate.",
  },
  {
    name: "Mid-Level",
    how: "Cross the Blue Tower at mid water.",
    detail:
      "The Blue Tower is a water-level puzzle, and this achievement only counts when the final crossing happens with the gauge sitting at the middle mark.",
    fastest:
      "Raise the water to mid before the last stretch and stop adjusting once the needle settles. One walker watches the gauge while the rest line up to cross.",
    missable:
      "Crossing at low or high water does not count, and overshooting the level is the classic mistake — tap the controls in short bursts near the middle mark.",
  },
  {
    name: "Walk Complete",
    how: "Finish the Yellow Tower as a full line.",
    detail:
      "The Yellow Tower is the final tower, and the win condition is the whole group standing together when the end plate triggers.",
    fastest:
      "Count heads before the final plate. If anyone fell or lagged behind, wait for them to respawn and rejoin the line before you all step on together.",
    missable:
      "This is the easiest achievement to fumble because groups sprint the ending. If even one walker is missing from the line, it will not pop and you replay the tower.",
  },
  {
    name: "Tooled Up",
    how: "Use all five tools in a single walk.",
    detail:
      "A walk means one continuous session — the counter is tied to that run, so leaving and rejoining partway through costs you the progress.",
    fastest:
      "Keep a mental checklist and fire each gadget once, even where the puzzle does not ask for it. The quieter tools are the ones everyone forgets, so use them early.",
    missable:
      "Not truly missable, but it is the achievement most groups think they earned and did not. If it has not popped by the Blue Tower, start using everything on sight.",
  },
  {
    name: "No Falls",
    how: "Clear any tower with zero respawns.",
    detail:
      "Any tower counts, so you pick the arena. Nobody in the group can fall and respawn between the first plate and the exit chime.",
    fastest:
      "Do it on the Red Tower — it is the shortest and the only real hazard is the bridge. The anchor holds the plate, everyone crosses one at a time, done.",
    missable:
      "One fall voids the attempt with no warning, so treat every gap as lethal and never rush a crossing to catch up with the group.",
  },
];

export default function AchievementsPage() {
  return (
    <PageShell
      h1="Big Walk Achievements List & How to Get Them"
      lead="Every Big Walk achievement, what actually unlocks it, and the fastest way to earn it. There are eight in total, and most pop naturally while you clear the five towers. The missable ones are the no-respawn and full-line finishes — lock those in by assigning an anchor and crossing single-file."
      related={relatedLinks(["guide", "tools", "redTower", "blackTower", "yellowTower", "coop"])}
      faqs={[
        { q: "How many achievements are in Big Walk?", a: "Eight. Six are tied to the tutorial and the five color towers, and two — Tooled Up and No Falls — can be earned on any tower you like." },
        { q: "Are any Big Walk achievements missable?", a: "None are permanently missable, since every tower is replayable after the credits. The ones groups miss on a first run are the no-respawn and full-line finishes, so slow down on the last tower." },
        { q: "Do achievements need co-op?", a: "Most are doable solo, but the co-op-flavored ones — the full-line finish and Tooled Up — are far easier with a group that actually talks to each other." },
        { q: "Fastest achievement route?", a: "Tutorial → Red → Black → Green → Blue → Yellow in order. Stack No Falls onto the Red Tower and spread Tooled Up across the whole walk, and everything unlocks in one pass." },
        { q: "What is the hardest achievement in Big Walk?", a: "On Beat gives most groups the most trouble, because a single reset voids the attempt. No Falls is a close second if your group plays loose near gaps." },
        { q: "Can you replay towers to clean up missed achievements?", a: "Yes. Every tower can be re-entered after the credits, and conditional achievements like Beam Master and Mid-Level still unlock on a rerun." },
        { q: "Do Big Walk achievements unlock on every platform?", a: "Yes — the same eight achievements are in the Steam, Nintendo Switch 2, and PS5 versions of the game." },
      ]}
    >
      <h2>Big Walk achievements list</h2>
      <p>
        All eight achievements are listed below in the order you will most
        likely earn them. Each entry gives the exact unlock condition, the
        fastest path to get it done, and a missable warning wherever one
        applies. Six of the eight are tied to specific towers, so a single
        well-planned playthrough can cover almost everything.
      </p>
      <div className="mt-3 space-y-3">
        {ACH.map((a, i) => (
          <div key={a.name} className="card">
            <h3 className="!mt-0 !mb-1 text-lg font-semibold text-brand-700">
              {i + 1}. {a.name}
            </h3>
            <p className="!my-0 text-slate-700">
              <strong>Unlock:</strong> {a.how} {a.detail}
            </p>
            <p className="!my-0 mt-1 text-slate-700">
              <strong>Fastest path:</strong> {a.fastest}
            </p>
            {a.missable && (
              <p className="!my-0 mt-1 text-slate-700">
                <strong>Missable warning:</strong> {a.missable}
              </p>
            )}
          </div>
        ))}
      </div>

      <h2>Missable achievements to plan around</h2>
      <p>
        Three achievements cause almost every incomplete list:{" "}
        <strong>On Beat</strong>, <strong>Walk Complete</strong>, and{" "}
        <strong>No Falls</strong>. All three punish rushing, and all three
        fail silently — the game does not warn you that the attempt is void
        until the completion chime never plays.
      </p>
      <p>
        The fix is one dedicated slow run. Assign an anchor for every
        pressure plate, call each move out in voice chat, and agree up front
        that nobody sprints the final stretch of any tower.{" "}
        <strong>Tooled Up</strong> is the fourth one to plan around: not
        missable, but easy to forget, so tick the tools off early instead of
        saving them for a puzzle that might never ask.
      </p>
      <p>
        Nothing in Big Walk is permanently locked. Every tower can be
        replayed, so a missed achievement costs you a rerun, not a save file.
      </p>

      <h2>Fastest 100% route</h2>
      <p>
        Played in order, the main walk lines up almost perfectly with the
        achievement list. A coordinated group can 100% Big Walk in a single
        session by stacking each conditional achievement onto the tower where
        it is easiest:
      </p>
      <ol>
        <li>
          <strong>Tutorial stretch</strong> — walk in a line and First Steps
          unlocks on its own. Start your Tooled Up checklist here by using
          the first tools you pick up.
        </li>
        <li>
          <strong>Red Tower</strong> — hold the bridge for Red Done, and play
          it clean for No Falls. It is the easiest tower, so it is the best
          place for the zero-respawn run.
        </li>
        <li>
          <strong>Black Tower</strong> — agree the walk order out loud and
          clear it without a reset for On Beat.
        </li>
        <li>
          <strong>Green Tower</strong> — route both receivers before the exit
          for Beam Master.
        </li>
        <li>
          <strong>Blue Tower</strong> — set the water to mid and keep it
          there for Mid-Level. Fire off any tools still missing from your
          Tooled Up checklist.
        </li>
        <li>
          <strong>Yellow Tower</strong> — regroup as a full line at the end
          plate for Walk Complete and the 100%.
        </li>
      </ol>
      <p>
        If something fails along the way, finish the tower anyway and loop
        back at the end — replaying one tower is far faster than resetting a
        whole session over a single missed chime.
      </p>
    </PageShell>
  );
}
