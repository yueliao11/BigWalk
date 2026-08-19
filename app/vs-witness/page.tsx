import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.vsWitness.href,
  title: ROUTES.vsWitness.title,
  description: ROUTES.vsWitness.desc,
  keywords: ROUTES.vsWitness.keywords,
});

const ROWS = [
  ["Puzzle style", "Environmental co-op walking puzzles", "Solitary line-drawing mazes"],
  ["Co-op", "Built for 2+ players, voice chat encouraged", "None — strictly single-player"],
  ["Length", "A few focused sessions with friends", "Long, cerebral, dozens of hours"],
  ["Difficulty", "Gentle, forgiving, failure is funny", "Steep, no hints, you teach yourself"],
  ["Price", "Budget-friendly indie price on Steam, Switch 2 and PS5", "Older title, often discounted"],
  ["Vibe", "Warm, silly, social", "Calm, abstract, solitary"],
  ["Best for", "Playing with friends", "Quiet solo brain-teasers"],
];

export default function VsWitnessPage() {
  return (
    <PageShell
      h1="Big Walk vs The Witness — Which Should You Play?"
      lead="Verdict first: these are different games for different moods. Big Walk is a co-op walking puzzle from House House (published by Panic, out August 4 2026 on Steam, Switch 2 and PS5) that you play with friends; The Witness is a solitary line-drawing puzzler you play alone. Pick Big Walk if you want to laugh with people, The Witness if you want to think in silence."
      related={relatedLinks(["vsIttakesTwo", "vsGrounded", "guide", "coop", "price"])}
      faqs={[
        { q: "Is Big Walk like The Witness?", a: "Only loosely. Both are puzzle games set in open, walkable spaces, but Big Walk is co-op and physical — you solve things by moving bodies onto plates and across bridges — while The Witness is a solo game about drawing lines on panels. If you loved one, the other is worth a look, but expect a very different evening." },
        { q: "Which is better for co-op, Big Walk or The Witness?", a: "Big Walk, hands down. It is designed around two or more walkers coordinating in real time. The Witness has no co-op mode at all — the closest you get is a friend watching over your shoulder and suggesting lines." },
        { q: "Which game is longer?", a: "The Witness is the longer, more demanding game, with hundreds of panels and optional endgame challenges. Big Walk is built for shorter social sessions — most groups finish the main walk over a few evenings." },
        { q: "Which is harder?", a: "The Witness, by a wide margin. It never explains its rules and expects you to infer them. Big Walk's tower puzzles have a learning curve, but failure is fast and funny, and your group talks its way through." },
        { q: "Should I buy Big Walk or The Witness first?", a: "If you have a regular co-op group, buy Big Walk first — nothing else this year does what it does. If you play alone and want a deep solo puzzle game, start with The Witness. Ideally, own both: they fill different slots." },
        { q: "Can you play Big Walk solo like The Witness?", a: "You can walk alone, but the tower puzzles assume at least two walkers — one holding a pressure plate while the other crosses. Solo play is possible with workarounds, yet the game clearly comes alive with a partner." },
      ]}
    >
      <h2>Big Walk vs The Witness: side by side</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="border border-slate-200 p-2">Factor</th>
              <th className="border border-slate-200 p-2">Big Walk</th>
              <th className="border border-slate-200 p-2">The Witness</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r[0]}>
                <td className="border border-slate-200 p-2 font-medium">{r[0]}</td>
                <td className="border border-slate-200 p-2">{r[1]}</td>
                <td className="border border-slate-200 p-2">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Puzzle design compared</h2>
      <p>
        The Witness is a game of panels. You walk a beautiful, empty island and
        solve line mazes that keep adding rules — symbols, colors, sounds —
        without ever explaining them. The puzzle is inside your head: notice
        the pattern, test it, feel the rule click.
      </p>
      <p>
        Big Walk puts the puzzle in the space between players. Its towers are
        built from pressure plates, retracting bridges, water levels and light
        beams that only behave while your group coordinates. The puzzle is not
        &quot;figure out the rule&quot; — it is &quot;get three friends to do the
        right thing at the right time.&quot; In the Red Tower, one walker
        anchors a plate while the rest cross single-file; in the Blue Tower,
        roles split around a rising water level. Every mechanic is a
        conversation.
      </p>
      <p>
        The settings pull the same trick in opposite directions. The Witness
        hides puzzles in its environment for the player who looks closely.
        Big Walk hides them in your group&apos;s habits — the tower that seems
        impossible until someone suggests splitting roles.
      </p>
      <h3>Failure feels different</h3>
      <p>
        In The Witness, failure is silent — a wrong line, a buzz, and you try
        again alone. In Big Walk, failure is the entertainment: the bridge
        retracts, everyone drops, and the group laughs and re-plans. One game
        makes you feel smart; the other makes you feel together.
      </p>

      <h2>Which one for your group</h2>
      <p>
        Choose <strong>Big Walk</strong> if any of these sound like you:
      </p>
      <ul>
        <li>You have two or more friends and one free evening a week.</li>
        <li>You want a co-op night that is about teamwork, not reflexes.</li>
        <li>You enjoy games where mistakes turn into stories you retell later.</li>
        <li>You want something short and complete, not a hundred-hour hobby.</li>
      </ul>
      <p>
        Choose <strong>The Witness</strong> if these fit better:
      </p>
      <ul>
        <li>You mostly play alone, late at night, with headphones on.</li>
        <li>You like puzzles that resist you for hours before they open up.</li>
        <li>You want a huge amount of content for a low sale price.</li>
      </ul>
      <p>
        One practical note: Big Walk needs a group that can talk, so plan on
        voice chat and check your connection setup before the first session.
        The Witness needs nothing but your patience.
      </p>
      <h3>If you can only buy one</h3>
      <p>
        Match the game to the night, not the reviews. A group of two to four
        gets far more hours of fun per dollar from Big Walk. A solo player
        gets far more puzzle per dollar from The Witness. Neither is the wrong
        choice — buying the wrong one for your situation is.
      </p>

      <h2>Final verdict</h2>
      <p>
        This is not a real fight. Buy <strong>Big Walk</strong> when the plan
        is a co-op night — it is the rare puzzle game where the hard part is
        cooperating, and it lands perfectly for two to four players. Reach for{" "}
        <strong>The Witness</strong> when you want a long, quiet solo puzzle
        dive that respects your intelligence and never holds your hand. They
        are not competitors; they are different slots in your library. If your
        budget allows, get Big Walk for the group and keep The Witness for
        yourself — and if co-op nights become a habit, our guides to the five
        towers will carry you through the whole walk.
      </p>
    </PageShell>
  );
}
