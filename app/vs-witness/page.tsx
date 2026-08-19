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
  ["Puzzle style", "Environmental co-op walking", "Solitary line-drawing"],
  ["Players", "Co-op (2+)", "Single-player"],
  ["Length", "A few focused sessions", "Long, cerebral"],
  ["Vibe", "Warm, silly, social", "Calm, abstract, solitary"],
  ["Best for", "Playing with friends", "Quiet solo brain-teasers"],
];

export default function VsWitnessPage() {
  return (
    <PageShell
      h1="Big Walk vs The Witness — Which Should You Play?"
      lead="Different games for different moods: Big Walk is a co-op walking puzzle you play with friends; The Witness is a solitary line-drawing puzzler. Pick Big Walk if you want to laugh with people, The Witness if you want to think alone."
      related={relatedLinks(["vsIttakesTwo", "vsGrounded", "guide", "coop", "price"])}
      faqs={[
        { q: "Is Big Walk like The Witness?", a: "Only loosely — both are puzzle games, but Big Walk is co-op and physical while The Witness is a solo line-drawing experience." },
        { q: "Which is better for co-op?", a: "Big Walk, hands down. The Witness has no co-op at all." },
        { q: "Which is longer?", a: "The Witness is the longer, more demanding solo game; Big Walk is built for shorter social sessions." },
      ]}
    >
      <h2>Side by side</h2>
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

      <h2>Verdict</h2>
      <p>
        Buy <strong>Big Walk</strong> when the plan is a co-op night. Reach for{" "}
        <strong>The Witness</strong> when you want a long, quiet solo puzzle
        dive. They are not really competitors — they are different slots in your
        library.
      </p>
    </PageShell>
  );
}
