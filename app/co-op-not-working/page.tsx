import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.coop.href,
  title: ROUTES.coop.title,
  description: ROUTES.coop.desc,
  keywords: ROUTES.coop.keywords,
});

export default function CoopPage() {
  return (
    <PageShell
      h1="Big Walk Co-op / Crossplay Not Working? Fixes"
      lead="Big Walk is built for co-op, but the join fails more often than it should. The usual causes: a bad join code, strict NAT, or a platform the session host cannot crossplay with. Run the checks below in order — most disconnects clear at step 2."
      howTo={{
        name: "Fix Big Walk co-op / crossplay",
        steps: [
          { title: "Re-copy the join code", text: "Codes are case-sensitive and expire. Regenerate a fresh code from the host and paste it exactly." },
          { title: "Check NAT type", text: "Strict NAT blocks peer connections. Use a wired connection or enable UPnP; a moderate NAT usually works, strict rarely does." },
          { title: "Confirm crossplay is on", text: "Both players must have crossplay enabled in settings; a console player and a PC player need it on at both ends." },
          { title: "Host on the stronger connection", text: "Have the player with open NAT host the walk; others join rather than the other way around." },
        ],
      }}
      related={relatedLinks(["tools", "redTower", "guide", "price", "achievements"])}
      faqs={[
        { q: "Why won't my friend join my Big Walk session?", a: "Nine times out of ten it is a stale or mistyped join code, or strict NAT on one side. Regenerate the code and check NAT type first." },
        { q: "Is Big Walk crossplay between PC and console?", a: "Yes, with crossplay enabled on both accounts. If one player has it off, the join will fail silently." },
        { q: "Big Walk keeps disconnecting mid-walk — why?", a: "A strict or unstable NAT drops the peer link. Host on the open-NAT connection and use a wired network for the anchor walker." },
      ]}
    >
      <h2>Common symptoms & fixes</h2>
      <ul>
        <li><strong>Code rejected:</strong> regenerate a fresh join code; old ones expire.</li>
        <li><strong>Stuck on connecting:</strong> strict NAT — switch to wired or enable UPnP.</li>
        <li><strong>Joins then drops:</strong> unstable link — host on the stronger connection.</li>
        <li><strong>Crossplay invisible:</strong> crossplay toggle off at one end.</li>
      </ul>

      <h2>Before you post on Reddit</h2>
      <p>
        Most &quot;co-op not working&quot; threads are solved by the four steps
        above. If it still fails after a fresh code, open NAT, and crossplay on
        both ends, capture the exact error text — that is what actually gets a
        fix.
      </p>
    </PageShell>
  );
}
