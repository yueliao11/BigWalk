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
  ["Co-op feel", "Looser, walkaround silliness", "Tight, story-driven duos"],
  ["Difficulty", "Light, approachable", "Varied, sometimes hard"],
  ["Length", "Shorter sessions", "A full campaign (10+ hrs)"],
  ["Vibe", "Hangout co-op", "Cinematic co-op"],
  ["Best for", "Casual friend nights", "A committed co-op playthrough"],
];

export default function VsIttakesTwoPage() {
  return (
    <PageShell
      h1="Big Walk vs It Takes Two — Co-op Compared"
      lead="Both are co-op, but they are different nights. Big Walk is a low-stakes walkaround you drop into with friends; It Takes Two is a longer, story-driven campaign. Choose Big Walk for a quick laugh, It Takes Two for a committed duo run."
      related={relatedLinks(["vsWitness", "vsGrounded", "coop", "guide", "price"])}
      faqs={[
        { q: "Is Big Walk as good as It Takes Two for co-op?", a: "For a short, silly hangout, yes. For a deep story campaign, It Takes Two is the heavier experience." },
        { q: "Which is easier to pick up?", a: "Big Walk — there is almost no onboarding and you can join mid-session." },
        { q: "Do I need a big time block?", a: "Big Walk no; It Takes Two expects a multi-hour commitment." },
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

      <h2>Verdict</h2>
      <p>
        Grab <strong>Big Walk</strong> for the impromptu co-op night. Save{" "}
        <strong>It Takes Two</strong> for when you and a partner want a full
        story. They sit at different ends of the co-op spectrum.
      </p>
    </PageShell>
  );
}
