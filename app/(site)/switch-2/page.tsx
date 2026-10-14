import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.switch2.href,
  title: ROUTES.switch2.title,
  description: ROUTES.switch2.desc,
  keywords: ROUTES.switch2.keywords,
});

const SWITCH_SPECS = [
  { feature: "Target Frame Rate", spec: "60 FPS (Rock solid in docked & handheld)" },
  { feature: "Docked Resolution", spec: "Dynamic 4K with DLSS reconstruction" },
  { feature: "Handheld Resolution", spec: "Native 1080p on HDR display" },
  { feature: "Proximity Voice Chat", spec: "Supported via console built-in microphone & 3.5mm headset" },
  { feature: "Cross-Platform Multiplayer", spec: "Full crossplay with Steam (PC) and PlayStation 5" },
  { feature: "Storage Requirement", spec: "~4.5 GB digital download on Nintendo eShop" },
  { feature: "Controller Support", spec: "Joy-Con Pair, Switch Pro Controller, Handheld mode" },
];

export default function Switch2Page() {
  return (
    <PageShell
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Platforms", path: "/price" },
        { name: "Switch 2", path: "/switch-2" },
      ]}
      h1="Big Walk on Nintendo Switch 2: FPS, Resolution & Co-op Details"
      lead="Big Walk launched on Nintendo Switch 2 on August 4, 2026, delivering the complete co-op walking adventure with 60 FPS performance, dynamic 4K docked output, and full crossplay with PC and PS5 players."
      related={relatedLinks([
        "crossplay",
        "price",
        "guide",
        "towerOrder",
        "tools",
        "coop",
      ])}
      faqs={[
        {
          q: "Is Big Walk out on Nintendo Switch 2?",
          a: "Yes. Big Walk released on August 4, 2026 on the Nintendo eShop alongside Steam and PlayStation 5 as a launch window co-op puzzle title.",
        },
        {
          q: "What frame rate does Big Walk target on Switch 2?",
          a: "Big Walk runs at a smooth 60 FPS in both docked and handheld modes, ensuring responsive movement and precise timing for puzzles like the Black Tower.",
        },
        {
          q: "Can Nintendo Switch 2 users play Big Walk with PC or PS5 players?",
          a: "Yes. The Switch 2 version features full crossplay with Steam PC and PlayStation 5 through universal 6-character Join Codes.",
        },
        {
          q: "Is there a physical cartridge edition of Big Walk for Switch 2?",
          a: "At launch, Big Walk is a digital-first release on the Nintendo eShop published by Panic. Physical collector editions may follow through specialty boutique publishers.",
        },
        {
          q: "Does Big Walk on Switch 2 require Nintendo Switch Online?",
          a: "Yes. Connecting to online expeditions and crossplay sessions with friends requires an active Nintendo Switch Online membership.",
        },
        {
          q: "Can you use the Switch 2 built-in microphone for in-game voice chat?",
          a: "Yes. Big Walk's integrated directional proximity voice chat utilizes the Switch 2 onboard mic array without needing extra phone apps or cords.",
        },
      ]}
    >
      <h2>Nintendo Switch 2 Performance &amp; Hardware Specs</h2>
      <p>
        Developer House House and publisher Panic optimized Big Walk specifically for Nintendo Switch 2 hardware,
        taking advantage of improved silicon to maintain crisp performance across expansive landscapes:
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="border border-slate-200 p-2 font-semibold">Specification</th>
              <th className="border border-slate-200 p-2 font-semibold">Nintendo Switch 2 Performance</th>
            </tr>
          </thead>
          <tbody>
            {SWITCH_SPECS.map((s) => (
              <tr key={s.feature}>
                <td className="border border-slate-200 p-2 font-medium">{s.feature}</td>
                <td className="border border-slate-200 p-2 text-slate-700">{s.spec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Handheld, Tabletop &amp; Docked Modes</h2>
      <p>
        Big Walk on Switch 2 adapts smoothly to different play configurations:
      </p>
      <ul className="mt-2 list-disc pl-5 space-y-2">
        <li>
          <strong>Handheld Mode:</strong> Runs at a crisp native 1080p, offering brilliant outdoor visual clarity
          with responsive analog thumbstick controls.
        </li>
        <li>
          <strong>Tabletop Co-Op:</strong> Prop the console on a table during travel while using Bluetooth headsets
          or the console&apos;s built-in noise-canceling microphone array to communicate with your walking line.
        </li>
        <li>
          <strong>Docked 4K Mode:</strong> Upgrades visual sharpness on large TV screens using DLSS upscaling,
          making environmental markers and distant color beacons easy to track.
        </li>
      </ul>

      <h2>Crossplay and Multiplayer on Switch 2</h2>
      <p>
        The Nintendo Switch 2 edition is not isolated on separate servers. You can host an expedition on your Switch 2
        and have your friends join seamlessly from Steam on PC or PlayStation 5 via the 6-character Join Code.
      </p>
      <p className="mt-4">
        Learn how to configure multiplayer lobbies in our{" "}
        <a href="/crossplay" className="font-semibold text-brand-700 underline hover:text-brand-900">
          Big Walk Crossplay Setup Guide
        </a>
        , or check pricing in our{" "}
        <a href="/price" className="font-semibold text-brand-700 underline hover:text-brand-900">
          Big Walk Price &amp; Regional Cost Guide
        </a>.
      </p>
    </PageShell>
  );
}
