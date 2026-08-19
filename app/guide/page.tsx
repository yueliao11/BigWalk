import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.guide.href,
  title: ROUTES.guide.title,
  description: ROUTES.guide.desc,
  keywords: ROUTES.guide.keywords,
});

export default function GuidePage() {
  return (
    <PageShell
      h1="Big Walk Complete Guide & Walkthrough"
      lead="Big Walk is a co-op puzzle walk: a line of players moves together through a hand-built world, solving five color towers. Do the towers in order (Red → Black → Green → Blue → Yellow), keep one anchor on every plate, and you will finish the walk."
      gameWidget
      related={relatedLinks(["redTower", "blackTower", "greenTower", "blueTower", "yellowTower", "tools", "coop", "achievements", "price"])}
      faqs={[
        { q: "What order should I do the Big Walk towers?", a: "Red, then Black, Green, Blue, and Yellow last. Each tower teaches a mechanic the next one reuses." },
        { q: "Any first-timer tips?", a: "Always assign one anchor walker to hold pressure plates, and count light pulses before moving on the Black and Yellow towers." },
        { q: "How long is Big Walk?", a: "A few focused co-op sessions for the main walk; completionist tower + achievement runs take longer." },
      ]}
    >
      <h2>Progression</h2>
      <ol>
        <li>Tutorial stretch — learn to walk as a line.</li>
        <li>Red Tower — pressure plates and bridges.</li>
        <li>Black Tower — pulse timing.</li>
        <li>Green Tower — beam routing.</li>
        <li>Blue Tower — water level.</li>
        <li>Yellow Tower — all mechanics combined.</li>
      </ol>

      <h2>Core habits that win runs</h2>
      <ul>
        <li>Assign a plate anchor before every tower.</li>
        <li>Count two pulses, move on the third (Black/Yellow).</li>
        <li>Hold water at mid-level, never fully drain (Blue/Yellow).</li>
        <li>Finish each tower as a full line on the exit plate.</li>
      </ul>

      <h2>Where to go next</h2>
      <p>
        Open any tower page above for the exact step-by-step, or the tools page
        for the gadget combos. Co-op stuck? See the fixes page.
      </p>
    </PageShell>
  );
}
