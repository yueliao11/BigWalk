import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.tools.href,
  title: ROUTES.tools.title,
  description: ROUTES.tools.desc,
  keywords: ROUTES.tools.keywords,
});

const TOOLS = [
  { name: "The Reflector", use: "Routes the green beam to receivers; powers the Green and Yellow towers.", combo: "Pair with a steady anchor so the beam never drops mid-cross." },
  { name: "The Valve", use: "Sets water level at the Blue and Yellow towers.", combo: "Stop at mid-level — full drain removes the crossing ledge." },
  { name: "The Plate Anchor", use: "A walker who holds a pressure plate so bridges stay down.", combo: "Assign this role first in every co-op run." },
  { name: "The Counter", use: "Tracks light-pulse rhythm at the Black and Yellow towers.", combo: "Count two pulses, move on the third." },
  { name: "The Beacon", use: "Marks the next tower on the map for late joiners.", combo: "Drop it at the top so stragglers can read your line." },
];

export default function ToolsPage() {
  return (
    <PageShell
      h1="Big Walk Tools & How to Use Them"
      lead="Big Walk gives you a small kit of gadgets. None are complicated alone, but the wins come from combining them. Here is every tool, what it does, and the combo that actually breaks a puzzle."
      related={relatedLinks(["redTower", "blackTower", "greenTower", "blueTower", "yellowTower", "coop", "guide"])}
      faqs={[
        { q: "How many tools are there in Big Walk?", a: "Five core tools cover every tower: the Reflector, the Valve, the Plate Anchor, the Counter and the Beacon. Each maps to a specific tower mechanic." },
        { q: "Which Big Walk tool is most important?", a: "The Plate Anchor. Holding a pressure plate is the foundation of the Red, Black and Yellow towers, so assigning this role first wins most runs." },
        { q: "Do tools carry between towers?", a: "Yes — the same kit is used across all five towers, which is why the later towers feel like combinations of earlier ones." },
      ]}
    >
      <h2>Tool-by-tool</h2>
      <div className="mt-3 space-y-4">
        {TOOLS.map((t, i) => (
          <div key={t.name} className="card">
            <h3 className="!mt-0 !mb-1 text-lg font-semibold text-brand-700">
              {i + 1}. {t.name}
            </h3>
            <p className="!my-1 text-slate-700">{t.use}</p>
            <p className="!my-0 text-sm text-muted">
              <strong>Combo:</strong> {t.combo}
            </p>
          </div>
        ))}
      </div>

      <h2>How to practice</h2>
      <p>
        Replay the early towers with one tool focus each. By the time you reach
        the Yellow Tower you should be combining the Reflector, Valve and Plate
        Anchor without thinking — that is the whole point of the kit.
      </p>
    </PageShell>
  );
}
