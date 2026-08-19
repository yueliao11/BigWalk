import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.yellowTower.href,
  title: ROUTES.yellowTower.title,
  description: ROUTES.yellowTower.desc,
  keywords: ROUTES.yellowTower.keywords,
});

export default function YellowTowerPage() {
  return (
    <PageShell
      h1="Big Walk Yellow Tower Puzzle Solution"
      lead="The Yellow Tower is the finale and combines every prior mechanic: plate, beam and water in one climb. The solution is to solve it bottom-up — plate first for the base bridge, beam for the middle, water last for the summit — and only hit the exit plate as a full line."
      videoId="c30AAvpS6do"
      howTo={{
        name: "Solve the Big Walk Yellow Tower",
        steps: [
          { title: "Regroup at the base", text: "Gather the whole group at the foot of the Yellow Tower and assign roles before anyone touches a mechanism: one anchor for the plate, one runner for the beam, one handler for the valve." },
          { title: "Plate the base", text: "The anchor steps onto the red plate and stays there to extend the base bridge — the same hold-the-plate discipline the Red Tower taught." },
          { title: "Beam the middle", text: "With the base bridge stable, the beam runner routes the yellow beam to the middle receiver to extend the second bridge, exactly as in the Green Tower." },
          { title: "Water the summit", text: "The valve handler turns the valve at mid-level to raise the water and expose the final ledge, the move the Blue Tower drilled into you." },
          { title: "Climb as a line", text: "Everyone crosses the three bridges in order, single file, with nobody rushing ahead of the bridge in front of them." },
          { title: "Exit on the summit plate", text: "The whole group stands on the summit plate together to finish the tower and the walk — the finale only registers when the full line is present." },
        ],
      }}
      related={relatedLinks(["redTower", "blackTower", "greenTower", "blueTower", "tools", "coop", "guide"])}
      faqs={[
        { q: "Is the Yellow Tower the last tower?", a: "Yes — it is the finale of Big Walk and reuses the plate, beam and water mechanics from the earlier towers. Finishing it ends the walk." },
        { q: "What order do I solve the Yellow Tower?", a: "Bottom-up: plate for the base bridge, beam for the middle bridge, water for the summit ledge. Triggering a mechanic before the one below it is stable drops the bridge under you." },
        { q: "Why won't the Yellow Tower finish?", a: "The summit plate only registers with the full line present. If a walker is still climbing, respawning or stranded on a lower level, the tower will not complete. Wait for everyone before stepping on." },
        { q: "Do I need to finish the other towers first?", a: "In practice, yes. The Yellow Tower assumes you already know the Red Tower plate hold, the Green Tower beam routing and the Blue Tower valve timing, and it gives no tutorial prompts for any of them." },
        { q: "How many players do I need for the Yellow Tower?", a: "It is designed for a full co-op line, because the anchor, beam runner and valve handler jobs overlap. Smaller groups can manage by rotating roles, but expect a slower, more deliberate climb." },
        { q: "What happens if someone falls near the top?", a: "A fallen walker respawns lower down, but every bridge you already stabilized stays up as long as the anchor holds the base plate. The fallen walker simply re-climbs and rejoins the line." },
        { q: "Is there a time limit on the Yellow Tower?", a: "No. The only pressure is coordination. Take the climb slowly, confirm each bridge before moving on, and the tower is very forgiving." },
      ]}
    >
      <h2>Overview</h2>
      <p>
        The Yellow Tower is the victory lap. It is not a new mechanic — it is
        all four previous towers stacked. If you solved Red, Green and Blue,
        you already know every move; the challenge is doing them in sequence
        without a reset. The climb has three clear floors: a plate section at
        the base, a beam section in the middle, and a water section guarding
        the summit. Each floor ends with a bridge or ledge that carries the
        group upward, and the summit plate at the very top is the finish line
        for the whole walk.
      </p>
      <img
        src="/images/yellow-tower-map.png"
        alt="Big Walk Yellow Tower finale map — plate, beam and water bottom-up order"
        className="my-6 w-full rounded-xl border border-slate-200"
        loading="lazy"
      />

      <h2>Why the order is bottom-up</h2>
      <p>
        Each mechanic in the Yellow Tower extends exactly one bridge, and
        every bridge hangs off the section below it. The base bridge comes
        from the red plate, the middle bridge from the yellow beam receiver,
        and the final ledge from the water valve. Because each section is
        physically supported by the last one, triggering a mechanic early does
        not save time — it drops the bridge under you and forces a re-climb.
      </p>
      <p>
        The practical rule is simple: never touch the next mechanism until the
        bridge in front of you is fully extended and stable. The beam runner
        should wait for the anchor&apos;s call that the base plate is held,
        and the valve handler should wait until the middle bridge is walkable.
        Groups that rush the order are the ones posting clips of the whole
        line falling into the water.
      </p>
      <p>
        Think of it as three separate tower solutions stitched together. You
        would not skip steps in the Red, Green or Blue towers, and the Yellow
        Tower punishes exactly the same shortcuts.
      </p>

      <h2>Role assignment for a full group</h2>
      <p>
        The Yellow Tower is much easier when everyone has a named job before
        the climb starts. Call the roles out in voice chat while you are still
        at the base.
      </p>
      <h3>The anchor</h3>
      <p>
        The anchor owns the red plate at the base. They step on, stay on, and
        do not move for any reason until the middle bridge is stable and the
        group calls the all-clear. This is the same job as the Red Tower
        anchor, and it is the single most important role in the tower — if the
        anchor leaves early, the base bridge retracts and everyone below the
        middle section falls.
      </p>
      <h3>The beam runner</h3>
      <p>
        The beam runner crosses the base bridge first and routes the yellow
        beam to the middle receiver. This is pure Green Tower muscle memory:
        position the beam, confirm the receiver lights up, and hold until the
        second bridge extends. The beam runner should be your most confident
        puzzle player, since they work alone while the rest of the group
        waits.
      </p>
      <h3>The valve handler</h3>
      <p>
        The valve handler waits at mid-level and turns the valve once the
        middle bridge is confirmed. The rising water exposes the final ledge,
        exactly as it did in the Blue Tower. After the ledge appears, the
        valve handler rejoins the line for the final climb.
      </p>
      <h3>Everyone else</h3>
      <p>
        Remaining walkers have one job: stay out of the way and cross in
        order. Follow single file, never overtake the role players, and wait
        for a verbal confirmation before stepping onto any new bridge.
      </p>

      <h2>Recovering from a mid-tower reset</h2>
      <p>
        Resets happen. A walker slips, someone steps off a plate early, or the
        beam gets knocked out of alignment — and part of the group ends up
        back at a lower floor. The key is that a reset is rarely total. Any
        bridge that was stabilized stays up as long as its mechanism is still
        held, so a fall usually costs you one section, not the whole tower.
      </p>
      <p>
        When someone falls, do not scatter. The anchor keeps holding the base
        plate no matter what — that is the one position that must never be
        abandoned. The fallen walker respawns lower down and re-climbs along
        the bridges that are still up. Everyone else freezes in place until
        the line is whole again.
      </p>
      <p>
        If the reset cascaded and a bridge actually retracted, just re-solve
        that one section in the same bottom-up order: plate, then beam, then
        valve. Resist the urge to improvise a new sequence under pressure —
        the tower does not change, and the order that worked the first time
        works again.
      </p>

      <h2>What completing Yellow unlocks</h2>
      <p>
        Standing on the summit plate as a full line finishes the Yellow Tower
        and completes the walk itself — this is the ending of Big Walk. The
        completion chime plays, the finale cutscene rolls, and your group gets
        the credits together, which is the whole point of House House&apos;s
        co-op design: nobody crosses the finish line alone.
      </p>
      <p>
        After the credits you can keep exploring the world with your group,
        mop up any achievements you missed along the route, or start a fresh
        walk with new players. If you are chasing 100% completion, check the
        achievements list for the tower-specific unlocks — several of them
        only count if the full line was present for the finish.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>Keep one anchor on the red plate at all times while others handle the beam and valve.</li>
        <li>Confirm each bridge is fully extended and stable before anyone touches the next mechanic.</li>
        <li>Cross single file and never overtake the role players on a bridge.</li>
        <li>If a walker falls, the anchor stays put — the fallen walker re-climbs along the bridges still standing.</li>
        <li>Call every state change in voice chat: plate held, beam routed, valve turned, bridge stable.</li>
        <li>Finish as a full line on the summit plate for the clean ending — a partial line does not register.</li>
      </ul>
    </PageShell>
  );
}
