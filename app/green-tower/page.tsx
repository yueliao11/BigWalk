import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.greenTower.href,
  title: ROUTES.greenTower.title,
  description: ROUTES.greenTower.desc,
  keywords: ROUTES.greenTower.keywords,
});

export default function GreenTowerPage() {
  return (
    <PageShell
      h1="Big Walk Green Tower Puzzle Solution"
      lead="The Green Tower uses a light-and-bridge mechanic: you route a green beam onto a receiver to extend a bridge. The Big Walk Green Tower solution is to aim the beam at the near receiver first (extends bridge 1), cross to the middle platform, then rotate it to the far receiver (extends bridge 2) — never both at once. It is a routing puzzle, not a timing challenge."
      videoId="c30AAvpS6do"
      howTo={{
        name: "Solve the Big Walk Green Tower",
        steps: [
          { title: "Gather at the reflector", text: "Bring the whole group to the reflector at the tower base and agree on who controls it before anyone touches it — swapping mid-puzzle is how runs fail." },
          { title: "Aim the beam at the near receiver", text: "Rotate the reflector until the green beam locks onto the first receiver. You will hear it catch, and bridge 1 extends from the base to the middle platform." },
          { title: "Cross bridge 1", text: "The walkers cross to the middle platform while the beam holds. The controller re-aims before anyone moves if the beam drops mid-cross." },
          { title: "Rotate to the far receiver", text: "From the middle platform, swing the beam off the near receiver and onto the second one. Bridge 1 retracts — that is expected — and bridge 2 extends to the top." },
          { title: "Cross bridge 2", text: "Everyone on the middle platform walks bridge 2 to the summit while the beam stays locked on the far receiver." },
          { title: "Finish the climb", text: "Cross bridge 2 and stand the full line on the exit plate to complete the Green Tower. The plate only registers when every walker is present." },
        ],
      }}
      related={relatedLinks(["redTower", "blackTower", "blueTower", "yellowTower", "tools", "coop"])}
      faqs={[
        { q: "Why won't both Green Tower bridges stay up?", a: "The beam only powers one receiver at a time, and each receiver holds exactly one bridge. Lighting the far receiver drops the near one, so bridge 1 retracts. Extend and cross bridge 1, then re-aim for bridge 2 — you cannot hold both." },
        { q: "What is the correct Big Walk Green Tower solution order?", a: "Near receiver first, far receiver second. Aim at the near receiver to extend bridge 1, cross to the middle platform, then rotate the beam to the far receiver to extend bridge 2 and finish the climb." },
        { q: "Who aims the beam in co-op?", a: "Whoever reaches the reflector first. The rest wait on the pad or platform so the beam does not drop, and nobody else touches the reflector until the run is over." },
        { q: "What happens if the beam drops while someone is on a bridge?", a: "The bridge retracts under them. The controller re-aims onto the receiver before anyone moves again, and the fallen walker respawns at the base pad." },
        { q: "Is the Green Tower a puzzle or a timing challenge?", a: "It is a routing puzzle, not timing — much more forgiving than the Black Tower once you see the two-step order. There is no countdown; the beam holds a receiver for as long as you leave it aimed." },
        { q: "Why won't the Green Tower exit plate trigger?", a: "The exit plate only registers with the full line present. If one walker is still on the middle platform or respawning at the base, wait for them before expecting the completion chime." },
        { q: "Can you skip the middle platform by aiming at the far receiver first?", a: "No. Bridge 2 starts at the middle platform, so lighting the far receiver from the base gives you a bridge you cannot reach. The near receiver always comes first." },
      ]}
    >
      <h2>Overview</h2>
      <p>
        The Green Tower swaps the pressure plate for a light beam. Instead of
        weight, you route a beam to receivers that extend bridges. The catch is
        the beam only reaches one receiver per angle, so the whole Big Walk
        Green Tower puzzle is about the order you light things in, not speed.
        The fastest clean route is always the same: near receiver, cross, far
        receiver, cross, exit plate as a full line.
      </p>
      <img
        src="/images/green-tower-map.png"
        alt="Big Walk Green Tower beam routing map — near receiver first, far receiver second"
        className="my-6 w-full rounded-xl border border-slate-200"
        loading="lazy"
      />

      <h2>How the beam and receivers work</h2>
      <p>
        A reflector at the tower base throws a green beam across the gap. Two
        receivers sit on the far side — a near one and a far one — and each
        receiver powers exactly one bridge. While the beam touches a receiver,
        its bridge stays extended. The moment the beam leaves, that bridge
        retracts.
      </p>
      <p>
        The reflector rotates, but the beam is a single straight line. It can
        lock onto one receiver per angle, never both at once. There is no
        timer and no drain: a receiver holds for as long as you keep the beam
        on it. That is what makes the Green Tower a routing puzzle rather than
        a reflex test.
      </p>
      <p>
        You will know the beam has locked when the receiver lights up and the
        bridge slides out with a solid thunk. A near miss still looks close —
        the beam grazes the edge and nothing extends. If a bridge will not
        come out, trust the bridge, not your eyes: nudge the reflector until
        the receiver visibly catches.
      </p>
      <h3>What the receivers actually power</h3>
      <p>
        The near receiver extends bridge 1, which runs from the base to the
        middle platform. The far receiver extends bridge 2, which runs from
        the middle platform to the summit. Bridge 2 is only useful once your
        group is standing on the middle platform — lighting it early gives you
        a bridge nobody can reach.
      </p>

      <h2>The two-bridge order and why both never stay up</h2>
      <p>
        Players try to light both receivers and wonder why the first bridge
        drops. You extend one, cross, then re-aim. It is a sequence, not a
        simultaneous solve. Because one beam feeds one receiver, holding
        bridge 1 and bridge 2 together is impossible by design — the tower is
        built so the group commits to each crossing fully before starting the
        next.
      </p>
      <p>
        The safe rhythm is: lock the near receiver, walk everyone across
        bridge 1, then deliberately swing the beam to the far receiver. Bridge
        1 retracting behind you is not a failure — it is the mechanic working.
        Once bridge 2 is up, cross it and stack the full line on the exit
        plate.
      </p>

      <h2>Who should control the reflector</h2>
      <p>
        One walker controls the reflector; the rest stay put until told. Pick
        the controller before the run starts and say it out loud in voice
        chat. The ideal controller is whoever is calmest about standing still
        — the job is ninety percent holding an angle and ten percent rotating
        on cue.
      </p>
      <p>
        The controller crosses last on each bridge, after everyone else is
        safely over, and re-takes the reflector on the middle platform for the
        second aim. Nobody else touches the reflector mid-run. Two players
        fighting over the rotation is the single most common way a clean Big
        Walk Green Tower solution falls apart.
      </p>
      <p>
        Everyone else has one job: call crossings. A simple &quot;over&quot;
        from each walker tells the controller the bridge is clear to drop.
        Silent groups make the controller guess, and guessing is when beams
        get moved early.
      </p>

      <h2>Common routing mistakes</h2>
      <ul>
        <li>
          Aiming at the far receiver first. Bridge 2 starts at the middle
          platform, so from the base it is a bridge to nowhere.
        </li>
        <li>
          Moving the beam while someone is mid-cross. If the beam drops, the
          controller re-aims before anyone moves again.
        </li>
        <li>
          Sending walkers across one at a time with long gaps. Cross as a
          group so a single re-aim never strands half the line.
        </li>
        <li>
          Walking off the exit plate to &quot;help&quot; a straggler. The exit
          plate only registers with the full line present, so wait for the
          last walker instead.
        </li>
        <li>
          Panic-rotating after bridge 1 retracts. That retraction is supposed
          to happen — keep the beam steady on the far receiver.
        </li>
      </ul>

      <h2>Tips for a clean run</h2>
      <ul>
        <li>One walker controls the reflector; the rest stay put until told.</li>
        <li>If the beam drops mid-cross, the controller re-aims before anyone moves.</li>
        <li>The exit plate only registers with the full line present.</li>
        <li>Treat the Green Tower as practice for reading receiver order — later towers reuse the same one-beam-one-target rule under harsher conditions.</li>
      </ul>
    </PageShell>
  );
}
