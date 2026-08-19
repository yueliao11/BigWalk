import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.blueTower.href,
  title: ROUTES.blueTower.title,
  description: ROUTES.blueTower.desc,
  keywords: ROUTES.blueTower.keywords,
});

export default function BlueTowerPage() {
  return (
    <PageShell
      h1="Big Walk Blue Tower Puzzle Solution"
      lead="The Blue Tower is a water-level puzzle: lowering a gate raises the walkway. The solution is to send one walker down to the valve, hold the walkway at mid-level, and let the rest cross before you fully drain it — drain it completely and the crossing ledge vanishes."
      videoId="c30AAvpS6do"
      howTo={{
        name: "Solve the Big Walk Blue Tower",
        steps: [
          { title: "Send one walker to the valve", text: "The lowest walker drops down and reaches the water valve that controls the tower's level. Everyone else stays put on the entry side and waits." },
          { title: "Hold at mid-level", text: "Turn the valve only to mid — this exposes the crossing ledge without flooding the valve walker below or draining the path away entirely." },
          { title: "Cross on the ledge", text: "Remaining walkers use the mid-level ledge to reach the upper platform. Cross single-file so nobody gets bumped off the narrow span." },
          { title: "Do not touch the valve", text: "While anyone is mid-crossing the valve walker holds position and changes nothing. One extra turn drops the water, and the ledge drops with it." },
          { title: "Complete from the top", text: "From the upper platform, the line hits the exit plate; only then does the valve walker climb the now-drained side to rejoin the group." },
        ],
      }}
      related={relatedLinks(["redTower", "blackTower", "greenTower", "yellowTower", "tools", "coop"])}
      faqs={[
        { q: "Why does the Blue Tower crossing ledge disappear?", a: "The ledge only exists at mid-level. The water physically holds the span in place, so if you fully drain the tower the ledge that connects the two sides is gone. Hold the level at mid and keep it exposed until every walker has crossed to the upper platform." },
        { q: "What does the valve do in the Blue Tower?", a: "The valve sets the water height, and the water height decides which ledges are walkable. Full water submerges everything, mid-level exposes the crossing ledge, and empty removes it completely. Mid-level is the sweet spot — set it once and leave it alone." },
        { q: "Can the Blue Tower fail the whole group?", a: "Only if the water is drained while walkers still need the ledge. Keep the valve walker isolated at the valve, communicate before any change is made, and the rest of the group crosses safely. A stranded walker respawns, but the run loses its clean completion." },
        { q: "Who should be the valve walker?", a: "Pick the most patient player in the group. The valve walker does almost nothing for most of the run — they set the level once, hold it, and climb out last. It is a low-action, high-responsibility role, so give it to someone who will not get bored and improvise." },
        { q: "Can you solve the Blue Tower solo?", a: "Yes. Set the valve to mid-level yourself, climb back up to the entry side, cross the ledge, and hit the exit plate. It is slower than co-op because one walker does both jobs, but nothing in the puzzle strictly requires a second player." },
        { q: "What happens if the valve walker gets flooded?", a: "The valve walker only floods if the water is left at full or raised again while they are down below. Set mid-level before sending anyone else across and they stay safe for the entire run. If it happens anyway, they respawn and you reset the level." },
        { q: "Is the Blue Tower required to finish Big Walk?", a: "Yes. The Blue Tower is one of the five color towers on the main walk in House House's co-op puzzler, and completing all five opens the route to the end of the game. There is no skip or alternate path around it." },
      ]}
    >
      <h2>Overview</h2>
      <p>
        The Blue Tower introduces a vertical water puzzle. Unlike the plate and
        beam towers, success depends on <em>how much</em> you change the
        environment, not just the order. One valve controls the water level,
        and the water level decides which ledges exist. Get the level right
        once and the tower is a short walk; get it wrong and you strand your
        own team on the wrong side of a gap you created.
      </p>
      <p>
        This is also the first tower where one player spends most of the run
        standing still. That is by design. Big Walk rewards groups that can
        split jobs and trust each other, and the Blue Tower is the clearest
        test of that trust in the game: the crossing walkers cannot see the
        valve, and the valve walker cannot see the ledge.
      </p>
      <img src="/images/blue-tower-map.png" alt="Big Walk Blue Tower water level map — full, mid and empty states" className="my-6 w-full rounded-xl border border-slate-200" loading="lazy" />

      <h2>The three water states</h2>
      <p>
        The Blue Tower has exactly three water states, and each one changes
        what you can stand on:
      </p>
      <ul>
        <li>
          <strong>Full.</strong> The starting state. The lower area is
          underwater, the crossing ledge is submerged, and nobody can go
          anywhere useful. The only productive move in this state is getting a
          walker down to the valve.
        </li>
        <li>
          <strong>Mid.</strong> The solving state. The water drops enough to
          expose the crossing ledge between the two sides, but stays high
          enough that the ledge still spans the gap. The valve walker below is
          not flooded, and the crossing route above is open. Almost the entire
          run happens in this state.
        </li>
        <li>
          <strong>Empty.</strong> The failure state. With no water left, the
          crossing ledge loses its span and vanishes. Any walker still on the
          wrong side is stuck, and the tower has to be refilled to recover.
        </li>
      </ul>
      <p>
        The whole puzzle is one decision: stop at mid. Everything else is
        walking. Groups that wipe here almost always understand the mechanic
        fine — they just cannot resist turning the valve one more notch to
        &quot;make it safer,&quot; and the tower punishes exactly that
        instinct. If your group keeps failing, watch the water, not the
        walkers: every Blue Tower failure can be traced back to a valve turn
        that should not have happened.
      </p>

      <h2>The valve walker role</h2>
      <p>
        Every Blue Tower run needs one designated valve walker. This player
        drops to the lowest point, turns the valve from full to mid, and then
        does the hardest thing in co-op: nothing. They hold position while the
        rest of the group crosses above them, and they resist every urge to
        help.
      </p>
      <p>
        Two rules keep the valve walker alive. First, never raise the water
        while they are below — full water floods the valve area. Second, never
        finish the drain while they are below — at empty, their climb route
        changes and they cannot rejoin until the tower is complete. Once the
        line hits the exit plate up top, the valve walker climbs the
        now-drained side and the run is done.
      </p>
      <p>
        In voice chat, treat the valve like a loaded weapon: nobody touches it
        without calling it out, and nobody calls it out while a walker is
        mid-crossing. A simple &quot;level set, crossing now&quot; and
        &quot;clear, all across&quot; is the entire communication protocol the
        tower needs.
      </p>

      <h2>Why a full drain fails the run</h2>
      <p>
        The instinct is to drain everything for a clear path. It feels safe —
        no water, no drowning, no problem. But the Blue Tower is built so the
        crossing ledge depends on the water holding it in place. At mid-level
        the ledge is exposed and walkable; at empty the span collapses and the
        two sides of the tower are no longer connected.
      </p>
      <p>
        This is the single most common Blue Tower wipe: the group crosses
        cleanly, someone &quot;helpfully&quot; opens the valve all the way,
        and the walker still on the far side — usually the valve walker
        themselves — has no route back. The fix is discipline, not skill. Stop
        the valve at mid, announce that the level is set, and leave it alone
        until the exit plate has been triggered from the upper platform.
      </p>
      <p>
        If it happens anyway, the recovery is simple: refill the tower to
        full, then set mid again from scratch. The states are repeatable and
        nothing is permanently missable, so treat a bad drain as a reset, not
        a failed session.
      </p>

      <h2>Solo Blue Tower route</h2>
      <p>
        Playing alone, you do both jobs yourself, in this order:
      </p>
      <ol>
        <li>Drop to the valve and set the water to mid-level.</li>
        <li>Climb back up to the entry side — the mid-level state exposes your return path.</li>
        <li>Cross the ledge to the upper platform, slowly and centered.</li>
        <li>Stand on the exit plate to complete the tower.</li>
      </ol>
      <p>
        Solo is actually more forgiving than co-op here: there is no teammate
        to drain the water early, and the only timing that matters is your
        own. The climb back from the valve is the only fiddly part — take it
        slowly and do not sprint the ledge, because the span is narrow and a
        fall means refilling from full. Just resist the urge to empty the
        tower &quot;for later&quot; — mid-level is the finish, not a
        checkpoint.
      </p>
      <p>
        One solo-specific note: because you are both valve walker and crosser,
        you never need the third water state at all. If you find yourself at
        empty at any point, you have gone one turn too far — refill to full
        and set mid again.
      </p>

      <h2>Blue Tower co-op callouts</h2>
      <p>
        The tower is mechanically simple, so nearly every failure is a
        communication failure. Agree on three short callouts before anyone
        drops down:
      </p>
      <ul>
        <li>
          <strong>&quot;Setting mid.&quot;</strong> The valve walker is about
          to turn the valve. Nobody moves until the next callout.
        </li>
        <li>
          <strong>&quot;Level set, crossing.&quot;</strong> The ledge is up
          and walkers are on it. The valve is now untouchable.
        </li>
        <li>
          <strong>&quot;All across.&quot;</strong> Everyone is on the upper
          platform and the exit plate is next. Only now can the valve walker
          leave their post and climb.
        </li>
      </ul>
      <p>
        With three or four walkers, send the slowest or least confident player
        across first so the group is not waiting on them at the end. With two
        walkers the roles are fixed — one valve, one crosser — and the crosser
        should wait for the &quot;level set&quot; callout before stepping onto
        the ledge, since the span only appears once the water settles.
      </p>

      <h2>Common Blue Tower mistakes</h2>
      <p>
        Beyond the full drain, three smaller errors account for most failed
        attempts. First, the whole group dropping down together: if everyone
        is at the valve, nobody is in position to cross when the ledge
        appears, and someone has to climb back anyway. Second, crossing before
        the water settles — the ledge only becomes solid at mid-level, so
        stepping out during the transition drops you into the gap. Third,
        the valve walker wandering off to &quot;explore&quot; the drained
        lower area while the group is mid-crossing; if they bump the valve
        on the way, the run is over.
      </p>
      <p>
        None of these are mechanics problems. They are patience problems, and
        they all have the same fix: one job per walker, one change at a time,
        and a callout before every change.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>Designate the valve walker before starting, and say it out loud in voice chat.</li>
        <li>Cross on mid-level; do not touch the valve again until the line is up top.</li>
        <li>Cross single-file on the ledge so a bumped walker does not knock others off.</li>
        <li>If a run goes wrong, refill to full and reset — the three states are repeatable.</li>
        <li>The exit plate completes the tower for the whole group, including the valve walker still below.</li>
      </ul>
    </PageShell>
  );
}
