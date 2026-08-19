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
  ["Genre", "Co-op puzzle walk", "Co-op survival"],
  ["Player count", "Small co-op line", "Up to 4"],
  ["Combat", "None", "Base-building + bug fights"],
  ["Vibe", "Chill, puzzling", "Survival crunch"],
  ["Best for", "Puzzle-loving duos", "Survival builders"],
];

export default function VsGroundedPage() {
  return (
    <PageShell
      h1="Big Walk vs Grounded 2 — Compared"
      lead="Big Walk and Grounded 2 are both co-op but barely overlap: Big Walk is a pure puzzle walk, Grounded 2 is survival crafting with combat. Pick Big Walk to think together, Grounded 2 to build and fight together."
      related={relatedLinks(["vsWitness", "vsIttakesTwo", "coop", "guide", "price"])}
      faqs={[
        { q: "Is Big Walk like Grounded 2?", a: "Not really — Grounded 2 is survival crafting with combat; Big Walk is a no-combat co-op puzzle walk." },
        { q: "Which supports more players?", a: "Grounded 2 (up to 4). Big Walk is a smaller co-op line." },
        { q: "Which is more relaxing?", a: "Big Walk — there is no base pressure or enemies to fight." },
      ]}
    >
      <h2>Side by side</h2>
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

      <h2>Verdict</h2>
      <p>
        Want to <strong>build and survive</strong> with friends? Grounded 2.
        Want to <strong>solve puzzles together</strong> without any pressure?
        Big Walk.
      </p>
    </PageShell>
  );
}
