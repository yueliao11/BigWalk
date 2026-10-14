import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.vsGrounded.href,
  title: ROUTES.vsGrounded.title,
  description: ROUTES.vsGrounded.desc,
  keywords: ROUTES.vsGrounded.keywords,
});

const ROWS = [
  ["Genre", "Co-op puzzle walk", "Co-op survival crafting"],
  ["Co-op style", "Shared puzzle line, no combat", "Base building, bug fights, shared survival"],
  ["Player count", "Small co-op line", "Up to 4 players"],
  ["Session length", "Drop in for a tower or two", "Long-term campaign sessions"],
  ["Difficulty", "Gentle — failure is a quick retry", "Survival pressure — hunger, gear, enemies"],
  ["Price", "One-time premium purchase", "Premium, also on Game Pass"],
];

export default function VsGroundedPage() {
  return (
    <PageShell
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Comparisons", path: "/guide" },
        { name: "Big Walk vs Grounded 2", path: "/vs-grounded-2" },
      ]}
      h1="Big Walk vs Grounded 2 — Compared"
      lead="Big Walk and Grounded 2 are both co-op games, but they barely overlap. Big Walk is a pure puzzle walk — no combat, no crafting, just a line of walkers solving environmental puzzles together. Grounded 2 is survival crafting with base building and bug fights. Pick Big Walk to think together, Grounded 2 to build and fight together. Here is the full breakdown."
      related={relatedLinks(["vsWitness", "vsIttakesTwo", "coop", "guide", "price"])}
      faqs={[
        { q: "Is Big Walk like Grounded 2?", a: "Only in the broadest sense — both are co-op. Grounded 2 is survival crafting with combat, bases and resource grinding. Big Walk is a no-combat puzzle walk where the whole game is a group solving environmental puzzles together. Almost nothing you learn in one transfers to the other." },
        { q: "Which supports more players, Big Walk or Grounded 2?", a: "Grounded 2, with up to four players in a shared world. Big Walk is built around a smaller co-op line of walkers. If your regular crew is four people, that alone may settle the Big Walk or Grounded 2 question." },
        { q: "Which is more relaxing?", a: "Big Walk, by a wide margin. There are no enemies, no hunger meters and no base to defend — failure just means retrying the puzzle in front of you. Grounded 2 keeps constant survival pressure on, even when you are not in a fight." },
        { q: "Which is better for short sessions?", a: "Big Walk. Towers and puzzle stretches work as self-contained stops, so a one-hour evening session feels complete. Grounded 2 rewards longer sits — gathering runs, base projects and boss prep tend to stretch past the time you planned." },
        { q: "Does Big Walk have combat or crafting?", a: "No. Big Walk has no combat, no crafting and no inventory management. Every challenge is an environmental puzzle — plates, bridges, routes and the five color towers. If your group needs fighting to stay interested, Grounded 2 is the safer pick." },
        { q: "Is Big Walk or Grounded 2 better for beginners?", a: "Big Walk. The controls amount to walking and interacting, and nothing punishes slow play. Grounded 2 assumes comfort with survival systems — crafting trees, gear tiers, enemy types — which can bury a first-time player." },
      ]}
    >
      <h2>Side by side</h2>
      <p>
        The short version of Big Walk vs Grounded 2, factor by factor:
      </p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="border border-slate-200 p-2">Factor</th>
              <th className="border border-slate-200 p-2">Big Walk</th>
              <th className="border border-slate-200 p-2">Grounded 2</th>
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

      <h2>Survival vs pure puzzle co-op</h2>
      <p>
        Big Walk comes from House House, the studio behind Untitled Goose
        Game, and was published by Panic on August 4, 2026 for Steam,
        Nintendo Switch 2 and PS5. You and your friends walk as a line of
        hikers through a mountain park, solving environmental puzzles —
        pressure plates, bridges and the five color towers. There is no
        health bar, no inventory and no fail state beyond trying a puzzle
        again.
      </p>
      <p>
        Grounded 2 goes the opposite direction. You are shrunk to insect
        size and dropped into a hostile park where almost everything wants
        you dead. You gather resources, craft tools and armor, raise a base
        and fight bugs — with up to four players sharing the workload.
      </p>
      <p>
        So the real question in Big Walk or Grounded 2 is pressure. Grounded
        2 is built on it: hunger meters, raids, gear decay. Big Walk
        deliberately removes all of it. The only enemy is a puzzle you have
        not figured out yet, and the only penalty for failure is walking
        back to the start of it.
      </p>
      <p>
        That difference shapes the social feel too. Big Walk sessions turn
        into constant talking — calling out plates, debating routes —
        because talking is the whole mechanic. Grounded 2 talk is logistics:
        who farms what, who holds the base.
      </p>

      <h2>Which fits your group</h2>
      <p>Pick Big Walk if your group:</p>
      <ul>
        <li>Wants a calm, talky co-op night where the challenge is communication, not reflexes.</li>
        <li>Includes players who do not usually play games — the controls are walking and interacting, nothing more.</li>
        <li>Plays in short sessions; you can clear a tower or two and stop without abandoning a base mid-project.</li>
      </ul>
      <p>Pick Grounded 2 if your group:</p>
      <ul>
        <li>Likes long-term progression — unlocking recipes, upgrading gear, expanding a shared base over weeks.</li>
        <li>Enjoys combat and wants enemies to fight together, not just puzzles to solve.</li>
        <li>Has four players; Big Walk is built around a smaller co-op line, while Grounded 2 supports up to four.</li>
      </ul>
      <p>
        Also check what your group owns. Big Walk runs on Steam, Nintendo
        Switch 2 and PS5; Grounded 2 is on Xbox and PC, where it is included
        with Game Pass. Plenty of groups will end up owning both, because
        the two games scratch different itches — Big Walk is the weeknight
        game, easy to start and easy to stop, while Grounded 2 is the
        weekend commitment.
      </p>

      <h2>Final verdict</h2>
      <p>
        If you can only buy one: a puzzle-loving duo or a mixed-skill group
        should buy Big Walk; a crew of survival fans with four players
        should buy Grounded 2. Big Walk is kinder to beginners, cheaper to
        get into, and the only one of the two where nobody has to know what
        a crafting bench is.
      </p>
      <p>
        Want to <strong>build and survive</strong> with friends? Grounded 2.
        Want to <strong>solve puzzles together</strong> without any pressure?
        Big Walk — start with the complete guide, or check the price on your
        platform first.
      </p>
    </PageShell>
  );
}
