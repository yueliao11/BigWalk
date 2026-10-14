import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.crossplay.href,
  title: ROUTES.crossplay.title,
  description: ROUTES.crossplay.desc,
  keywords: ROUTES.crossplay.keywords,
});

const CROSSPLAY_MATRIX = [
  { pair: "Steam (PC) ↔ PlayStation 5", status: "Full Crossplay", notes: "Instant connection via 6-character Join Code." },
  { pair: "Steam (PC) ↔ Nintendo Switch 2", status: "Full Crossplay", notes: "Crossplay supported in handheld and docked modes." },
  { pair: "PlayStation 5 ↔ Nintendo Switch 2", status: "Full Crossplay", notes: "Direct console-to-console session pairing." },
  { pair: "Local Couch Split-Screen", status: "Not Supported", notes: "Each walker requires their own screen and copy." },
  { pair: "Cross-Progression / Cross-Save", status: "Limited", notes: "Save files are local; join any host without progress gating." },
];

export default function CrossplayPage() {
  return (
    <PageShell
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Multiplayer", path: "/co-op-not-working" },
        { name: "Crossplay", path: "/crossplay" },
      ]}
      h1="Big Walk Crossplay Guide: PC, PS5 & Switch 2 Setup"
      lead="Yes, Big Walk has full crossplay support across PC (Steam), PlayStation 5, and Nintendo Switch 2. Players on any supported system can explore the wilderness and solve towers together using a peer-to-peer 6-character Join Code without requiring third-party publisher accounts."
      howTo={{
        name: "How to Enable and Join Crossplay in Big Walk",
        steps: [
          { title: "Enable Crossplay in Options", text: "From the Title Screen or Pause Menu, navigate to Settings > Network and ensure 'Allow Crossplay' is toggled ON for all participants." },
          { title: "Host Starts the Expedition", text: "One player chooses 'Start Walk' to create the game lobby and generate a unique 6-character session Join Code." },
          { title: "Share the 6-Character Join Code", text: "The host presses Pause, notes the case-sensitive 6-character code in the top-right corner, and shares it with teammates." },
          { title: "Guests Input Code to Connect", text: "Other players choose 'Join Walk' on their respective platform, enter the code, and instantly spawn beside the host." },
          { title: "Calibrate In-Game Proximity Audio", text: "Check audio levels in Settings > Audio to ensure the built-in directional proximity voice chat works seamlessly across platforms." },
        ],
      }}
      related={relatedLinks([
        "coop",
        "guide",
        "towerOrder",
        "price",
        "tools",
        "vsIttakesTwo",
      ])}
      faqs={[
        {
          q: "Does Big Walk support crossplay between PC and consoles?",
          a: "Yes. Big Walk features full crossplay between PC (Steam), PlayStation 5, and Nintendo Switch 2. Players on PC can invite and play with friends on PS5 or Switch 2 without restrictions.",
        },
        {
          q: "Do you need a Panic or House House account for crossplay?",
          a: "No. Big Walk uses a frictionless 6-character Join Code system. No proprietary accounts, email registrations, or friend-code linking are required.",
        },
        {
          q: "How does in-game voice chat work across different platforms?",
          a: "Big Walk includes integrated proximity-based spatial voice chat that functions natively between PC, PlayStation 5, and Switch 2 without needing Discord or external console party apps.",
        },
        {
          q: "Why is Big Walk crossplay not working or saying invalid code?",
          a: "Join codes are temporary and case-sensitive. Verify both parties have the same game patch version installed, crossplay toggled ON in Settings, and moderate or open NAT types.",
        },
        {
          q: "Does Big Walk require PlayStation Plus or Nintendo Switch Online?",
          a: "Yes. Playing online multiplayer with friends on PS5 requires an active PlayStation Plus subscription, and online co-op on Switch 2 requires a Nintendo Switch Online membership.",
        },
        {
          q: "Can four players on different platforms play simultaneously?",
          a: "Yes. Your party can mix and match any combination of PC, Switch 2, and PS5 players in a single coordinated walking line.",
        },
      ]}
    >
      <h2>Cross-Platform Compatibility Matrix</h2>
      <p>
        Developer House House built Big Walk specifically around social party coordination. Regardless of
        which platform your friends own, everyone can walk together:
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="border border-slate-200 p-2 font-semibold">Platform Pair</th>
              <th className="border border-slate-200 p-2 font-semibold">Status</th>
              <th className="border border-slate-200 p-2 font-semibold">Connection Notes</th>
            </tr>
          </thead>
          <tbody>
            {CROSSPLAY_MATRIX.map((m) => (
              <tr key={m.pair}>
                <td className="border border-slate-200 p-2 font-medium">{m.pair}</td>
                <td className="border border-slate-200 p-2 text-emerald-700 font-semibold">{m.status}</td>
                <td className="border border-slate-200 p-2 text-slate-700">{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>How the Join Code System Works</h2>
      <p>
        Rather than relying on closed platform friend ecosystems (Steam Friends, PlayStation Network, or Nintendo
        Friend Codes), Big Walk handles crossplay through universal session tokens:
      </p>
      <ol className="mt-3 list-decimal pl-5 space-y-2">
        <li>The expedition host launches a session and pauses to inspect the top-right HUD banner.</li>
        <li>The game generates a clean alphanumeric code (e.g., <code>WALK7X</code>).</li>
        <li>Party members type this code into their main menu prompt to join within 10 seconds.</li>
      </ol>

      <h2>Cross-Platform Voice Chat and Communication</h2>
      <p>
        Communication is essential for towers like the Black Tower (pulse counting) and Blue Tower (water levels).
        Big Walk features <strong>hardware-independent proximity voice chat</strong>:
      </p>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>Walkers close to each other hear voices crystal clear in spatial 3D audio.</li>
        <li>Walkers separated by distance or canyons hear faint, echoing audio, reinforcing line coherence.</li>
        <li>Players on PlayStation 5 can use their DualSense controller microphone directly with PC and Switch 2 teammates.</li>
      </ul>

      <h2>Troubleshooting Crossplay Disconnections</h2>
      <p>
        If cross-platform lobbies fail to connect, common culprits include:
      </p>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li><strong>Version Mismatches:</strong> Steam and console updates occasionally roll out minutes apart. Ensure all machines report identical build versions.</li>
        <li><strong>Strict NAT Barriers:</strong> College dorm or cellular hotspot NAT settings can block direct peer-to-peer packets.</li>
        <li><strong>Expired Codes:</strong> If a host remains idle during lobby creation, generate a fresh code to refresh the routing handshake.</li>
      </ul>
      <p className="mt-4">
        For deeper diagnostics on join failures, check our detailed{" "}
        <a href="/co-op-not-working" className="font-semibold text-brand-700 underline hover:text-brand-900">
          Big Walk Co-op &amp; Connection Troubleshooting Guide
        </a>.
      </p>
    </PageShell>
  );
}
