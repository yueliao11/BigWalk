import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.achievements.href,
  title: ROUTES.achievements.title,
  description: ROUTES.achievements.desc,
  keywords: ROUTES.achievements.keywords,
});

const ACH = [
  { name: "First Steps", how: "Complete the tutorial stretch as a line." },
  { name: "Red Done", how: "Finish the Red Tower with the bridge held." },
  { name: "On Beat", how: "Clear the Black Tower without a reset." },
  { name: "Beam Master", how: "Route both Green Tower receivers in one run." },
  { name: "Mid-Level", how: "Cross the Blue Tower at mid water." },
  { name: "Walk Complete", how: "Finish the Yellow Tower as a full line." },
  { name: "Tooled Up", how: "Use all five tools in a single walk." },
  { name: "No Falls", how: "Clear any tower with zero respawns." },
];

export default function AchievementsPage() {
  return (
    <PageShell
      h1="Big Walk Achievements List & How to Get Them"
      lead="Every Big Walk achievement and the fastest way to unlock it. The missable ones are the no-respawn and full-line finishes — lock those in by assigning an anchor and crossing single-file."
      related={relatedLinks(["guide", "tools", "redTower", "blackTower", "yellowTower", "coop"])}
      faqs={[
        { q: "Are any Big Walk achievements missable?", a: "The no-respawn and full-line finishes are the easy ones to miss if your group rushes. Slow down on the last tower." },
        { q: "Do achievements need co-op?", a: "Most are doable solo, but the co-op-flavored ones (full line, tooled up) are far easier with a group." },
        { q: "Fastest achievement route?", a: "Tutorial → Red → Black → Green → Blue → Yellow in order clears the tower set and the completion achievement back-to-back." },
      ]}
    >
      <h2>Achievement list</h2>
      <div className="mt-3 space-y-3">
        {ACH.map((a, i) => (
          <div key={a.name} className="card">
            <h3 className="!mt-0 !mb-1 text-lg font-semibold text-brand-700">
              {i + 1}. {a.name}
            </h3>
            <p className="!my-0 text-slate-700">{a.how}</p>
          </div>
        ))}
      </div>

      <h2>Fastest unlock path</h2>
      <p>
        Run the towers in order and the tower achievements unlock naturally.
        For <strong>Tooled Up</strong>, deliberately use each gadget once during
        one walk. For <strong>No Falls</strong>, assign an anchor and never let
        a plate empty.
      </p>
    </PageShell>
  );
}
