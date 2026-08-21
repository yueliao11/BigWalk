import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import InternalLinks from "@/components/InternalLinks";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: ROUTES.home.title,
  description: ROUTES.home.desc,
  keywords: ROUTES.home.keywords,
});

const TOWERS = [ROUTES.redTower, ROUTES.blackTower, ROUTES.greenTower, ROUTES.blueTower, ROUTES.yellowTower];
const COMPARES = [ROUTES.vsWitness, ROUTES.vsIttakesTwo, ROUTES.vsGrounded];

export default function HomePage() {
  return (
    <PageShell
      h1="Big Walk: tower solutions, tools & co-op fixes"
      lead="Big Walk is a co-op puzzle walk from the makers of Untitled Goose Game. Below are the exact solutions players search for — Red/Black/Green/Blue/Yellow towers, every tool, and the co-op fixes that the big sites never bothered to write a page for. Everything here answers the question first and explains after, so you can get back to your run in under a minute."
      gameWidget
      videoId="c30AAvpS6do"
      related={relatedLinks([
        "guide", "tools", "redTower", "blackTower", "greenTower", "blueTower",
        "yellowTower", "coop", "achievements", "price", "vsWitness",
        "vsIttakesTwo", "vsGrounded",
      ])}
      faqs={[
        {
          q: "What is Big Walk?",
          a: "Big Walk is a co-op puzzle adventure where a line of players walks together through a hand-built world, solving tower puzzles and environmental challenges. It is developed by House House, the studio behind Untitled Goose Game.",
        },
        {
          q: "How many towers are there in Big Walk?",
          a: "There are five color-coded towers — Red, Black, Green, Blue and Yellow. Each has its own mechanic; full step-by-step solutions are linked above.",
        },
        {
          q: "Is Big Walk co-op / crossplay?",
          a: "Yes, it is built for co-op. If your session will not connect, see the co-op not working fixes page for join-code, NAT and platform limits.",
        },
        {
          q: "Who makes Big Walk, and when did it come out?",
          a: "Big Walk is developed by House House and published by Panic. It released on August 4, 2026 for Steam, Nintendo Switch 2 and PlayStation 5.",
        },
        {
          q: "How long does Big Walk take to finish?",
          a: "A first run through the five towers takes most groups a few evenings, and coordinated groups move faster. The complete guide page lays out the full progression in order so you can pace your sessions.",
        },
        {
          q: "Which platforms is Big Walk on?",
          a: "Big Walk launched on Steam, Nintendo Switch 2 and PlayStation 5 on August 4, 2026. The price page compares platforms, editions and whether the co-op bundle is worth it.",
        },
        {
          q: "Can you play Big Walk solo?",
          a: "Big Walk is designed around a line of walkers communicating, and its tower puzzles assume group coordination. If you plan to play with friends, the guide page covers co-op basics and what to do first.",
        },
      ]}
    >
      <h2>What is the Big Walk game?</h2>
      <p>
        Big Walk is a co-op puzzle game from House House, published by Panic
        and released on August 4, 2026 for Steam, Nintendo Switch 2 and
        PlayStation 5. You and your friends form a line of walkers and cross a
        hand-built world on foot. Progress is gated by color-coded towers, and
        each tower is a self-contained puzzle that only opens when the group
        works out its trick together.
      </p>
      <p>
        The controls are deliberately simple — the challenge is communication,
        not execution. Most failed runs come from one walker moving before the
        rest of the line is ready, so the guides on this site focus on
        callouts, role splits and exact walk orders rather than reflexes.
      </p>

      <h2>The five towers</h2>
      <p>
        Most search traffic for Big Walk is tower-specific. Each page gives the
        solution on the first screen, then the walk order and the trap that
        fails most runs.
      </p>
      <p>
        The five towers share a language — pressure plates, bridges and walk
        order — but each adds one new mechanic. The Red Tower is the intro
        puzzle and teaches the plate-and-bridge loop. The Black Tower adds
        timing. The Green Tower is built around light and bridges. The Blue
        Tower splits the group across water levels, and the Yellow Tower is
        the finale that combines everything. If you are stuck on one tower,
        open its page and read the first screen — the solution is there before
        any scrolling.
      </p>
      <InternalLinks links={TOWERS} />

      <h2>Tools & co-op</h2>
      <p>
        The tool pages explain each gadget one by one, and the co-op page fixes
        the disconnects players post about on Reddit. Tools are how Big Walk
        keeps later puzzles fresh: each one is simple on its own, but combining
        two at the right moment is what breaks the harder towers. If your
        session will not connect at all, start with the co-op fixes page — it
        covers join codes, NAT problems and platform limits in the order you
        should try them.
      </p>
      <InternalLinks links={[ROUTES.tools, ROUTES.coop]} />

      <h2>Big Walk vs other co-op puzzlers</h2>
      <p>
        Not sure which co-op game to buy? The head-to-head pages settle it.
        Big Walk is compared against The Witness for puzzle style, It Takes
        Two for co-op feel, and Grounded 2 for survival-versus-puzzle pacing.
        Each comparison covers length, difficulty, player count and who each
        game is actually for, so you can pick the right one for your group
        before spending anything.
      </p>
      <InternalLinks links={COMPARES} />

      <h2>How to use this site</h2>
      <p>
        Every page on WalkHub follows the same layout. The direct answer or
        solution sits on the first screen, right under the title.
        Step-by-step instructions follow, then the common failure and its fix,
        and a short FAQ at the bottom covers the follow-up questions.
      </p>
      <p>
        If you are stuck right now, open the tower page that matches your map
        marker color and read the first paragraph. If the game itself is
        misbehaving, go straight to the co-op fixes. If you are still deciding
        whether to buy, the price page and the comparisons are the fastest
        reads.
      </p>
      <p>
        New players should start with the complete guide, which walks the
        whole game in order — progression, the five towers, co-op basics and
        what to do first. Returning players can use the achievements page to
        mop up the missable unlocks before calling the game done.
      </p>

      <h2>A quick Big Walk guide for your first session</h2>
      <p>
        Before your first session, agree on three things in voice chat: who
        leads the line, who anchors pressure plates, and the callout you will
        use before anyone steps off a plate. Most early wipes are
        communication failures, not puzzle failures.
      </p>
      <p>
        Move as a line, not a crowd. When a tower asks for split roles, say
        your role out loud before touching anything. And when a run fails,
        reset immediately — the towers are short, and a fast retry beats a
        long argument about what went wrong.
      </p>

      <h2>The most-searched Big Walk questions</h2>
      <p>Short answers to the queries that bring most players here:</p>
      <ul>
        <li>
          <strong>What is the Big Walk Red Tower solution?</strong> The full
          step-by-step is on the <a href="/red-tower">Red Tower page</a> —
          the answer is on the first screen.
        </li>
        <li>
          <strong>How do you beat the Black Tower?</strong> Walk order and
          timing are covered on the <a href="/black-tower">Black Tower page</a>,
          including the trap that fails most co-op runs.
        </li>
        <li>
          <strong>Why is Big Walk co-op not working?</strong> Join codes, NAT
          and platform limits are fixed step by step on the{" "}
          <a href="/co-op-not-working">co-op troubleshooting page</a>.
        </li>
        <li>
          <strong>How much does Big Walk cost?</strong> Current pricing across
          Steam and consoles is on the <a href="/price">price page</a>.
        </li>
        <li>
          <strong>How do you get every Big Walk achievement?</strong> The{" "}
          <a href="/achievements">achievements list</a> has the fastest unlock
          path for each one, plus the missables to watch for.
        </li>
        <li>
          <strong>Should you buy Big Walk or It Takes Two?</strong> The{" "}
          <a href="/vs-it-takes-two">head-to-head comparison</a> settles it by
          co-op feel, difficulty and length.
        </li>
      </ul>
    </PageShell>
  );
}
