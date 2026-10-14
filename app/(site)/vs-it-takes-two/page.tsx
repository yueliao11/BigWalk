import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.vsIttakesTwo.href,
  title: ROUTES.vsIttakesTwo.title,
  description: ROUTES.vsIttakesTwo.desc,
  keywords: ROUTES.vsIttakesTwo.keywords,
});

const ROWS = [
  ["Co-op style", "Loose walkaround puzzles, drop-in", "Tight, scripted two-player design"],
  ["Player count", "Solo or a group of friends", "Exactly two players, always"],
  ["Session length", "Short sessions, leave anytime", "A full campaign (10+ hrs)"],
  ["Difficulty", "Light and approachable", "Varied, sometimes genuinely hard"],
  ["Price", "One indie purchase per player", "Friend's Pass: one copy covers both players"],
  ["Vibe", "Hangout co-op", "Cinematic co-op"],
  ["Best for", "Casual friend nights", "A committed co-op playthrough"],
];

export default function VsIttakesTwoPage() {
  return (
    <PageShell
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Comparisons", path: "/guide" },
        { name: "Big Walk vs It Takes Two", path: "/vs-it-takes-two" },
      ]}
      h1="Big Walk vs It Takes Two — Co-op Compared"
      lead="Big Walk vs It Takes Two is really a question about what kind of co-op night you want. Big Walk is a low-stakes walkaround you drop into with friends for quick laughs; It Takes Two is a longer, story-driven campaign built for exactly two players. Pick Big Walk for the impromptu hangout, It Takes Two for a committed duo run."
      related={relatedLinks(["vsWitness", "vsGrounded", "coop", "guide", "price"])}
      faqs={[
        { q: "Is Big Walk as good as It Takes Two for co-op?", a: "For a short, silly hangout, yes. Big Walk delivers laughs in the first ten minutes. For a deep story campaign with set pieces and boss fights, It Takes Two is the heavier experience." },
        { q: "Big Walk or It Takes Two for non-gamers?", a: "Big Walk. The controls are simple, failure is funny instead of punishing, and nobody needs platforming skill. It Takes Two assumes both players can handle aiming and timed jumps." },
        { q: "Can more than two people play?", a: "In Big Walk, yes — it is built for a group of friends walking together. It Takes Two is strictly a two-player game with no option for a third." },
        { q: "Which is easier to pick up?", a: "Big Walk — there is almost no onboarding, and friends can join mid-session without replaying a tutorial." },
        { q: "Do I need a big time block?", a: "Big Walk no; sessions work in short bursts. It Takes Two expects a multi-hour commitment across several evenings." },
        { q: "Does It Takes Two need two copies?", a: "No. Its Friend's Pass lets a second player join free, so only one of you buys the game. In Big Walk, each walker needs their own copy." },
      ]}
    >
      <h2>Side by side</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="border border-slate-200 p-2">Factor</th>
              <th className="border border-slate-200 p-2">Big Walk</th>
              <th className="border border-slate-200 p-2">It Takes Two</th>
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

      <h2>Co-op feel compared</h2>
      <p>
        Both games are co-op, but they spend your time differently. Big Walk,
        from Untitled Goose Game developer House House and publisher Panic, is
        a shared walk first and a puzzle game second. You and your friends
        wander, poke at tools, and solve whatever the path throws at you.
        Nobody has to host a plan. Someone can join late, someone can leave
        early, and the walk keeps going.
      </p>
      <p>
        It Takes Two is the opposite shape. Hazelight built it as a linear
        two-player campaign where every chapter hands you new abilities
        designed to interlock. One player gets the nails, the other gets the
        hammer. You cannot drift through it — progress depends on both
        players executing together until the credits roll.
      </p>
      <p>
        Neither is better; they scratch different itches. Big Walk feels like
        meeting friends at a park. It Takes Two feels like rehearsing a
        two-person play.
      </p>
      <p>
        The practical difference shows up in voice chat. In Big Walk the talk
        drifts — half the fun is the conversation while you walk. In It Takes
        Two the talk is the game: constant callouts, timing and coordination
        from the first level to the last.
      </p>

      <h2>Difficulty and session length</h2>
      <p>
        Big Walk stays approachable. The tower puzzles — red, black, green,
        blue and yellow — ask for coordination and timing, not mechanical
        skill, and a failed attempt resets fast. Most sessions run short,
        which makes it easy to fit into a weeknight.
      </p>
      <p>
        It Takes Two asks more. Platforming sections, boss fights and later
        mechanics can genuinely challenge casual players, and the campaign
        expects multi-hour sittings. If one of you rarely plays games, Big
        Walk is the kinder starting point.
      </p>

      <h2>Price and value</h2>
      <p>
        Big Walk launched August 4, 2026 on Steam, Nintendo Switch 2 and PS5
        as a single indie purchase, with each player buying their own copy.
        Check our <a href="/price">Big Walk price guide</a> for current
        pricing, editions and any co-op bundles.
      </p>
      <p>
        It Takes Two is older and regularly discounted, and its Friend&apos;s
        Pass means only one of you needs to own the game — the second player
        joins free. On pure cost per duo, It Takes Two often wins. On cost
        per game night with a bigger, rotating group, Big Walk wins.
      </p>

      <h2>Big Walk or It Takes Two — which to buy first</h2>
      <p>
        Buy Big Walk first if your co-op group is fluid. If the roster changes
        week to week, if people drop in and out, or if you want something that
        works the night someone new shows up, Big Walk&apos;s loose structure
        absorbs all of that. It is also the better pick when your group
        includes players who bounce off hard games.
      </p>
      <p>
        Buy It Takes Two first if you have exactly one consistent partner and
        a few free evenings. It is a complete, polished campaign and still one
        of the best two-player experiences on any platform — but it wastes its
        strengths on a rotating crowd.
      </p>
      <p>
        Owning both is a reasonable answer. They do not compete for the same
        evening.
      </p>

      <h2>Final verdict</h2>
      <p>
        Big Walk and It Takes Two sit at opposite ends of the co-op spectrum.
        Big Walk is the game you open when friends are around and nobody
        planned anything. It Takes Two is the game you schedule. For a quick
        laugh tonight, grab <strong>Big Walk</strong>. For a story you finish
        together over a couple of weeks, grab <strong>It Takes Two</strong>.
      </p>
    </PageShell>
  );
}
