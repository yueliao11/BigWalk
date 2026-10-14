import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";
import { ROUTES, relatedLinks } from "@/lib/routes";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: ROUTES.price.href,
  title: ROUTES.price.title,
  description: ROUTES.price.desc,
  keywords: ROUTES.price.keywords,
});

const REGIONAL_PRICES = [
  { region: "United States (USD)", msrp: "$19.99", notes: "Standard base MSRP across all storefronts" },
  { region: "Eurozone (EUR)", msrp: "€19.50", notes: "VAT included" },
  { region: "United Kingdom (GBP)", msrp: "£16.75", notes: "VAT included" },
  { region: "Canada (CAD)", msrp: "$25.99", notes: "Standard Canadian tier" },
  { region: "Australia (AUD)", msrp: "$29.50", notes: "GST included" },
  { region: "Japan (JPY)", msrp: "¥2,300", notes: "Tax included" },
];

export default function PricePage() {
  return (
    <PageShell
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Price Guide", path: "/price" },
      ]}
      h1="Big Walk Price: Steam, Switch 2 & PS5 Cost Guide"
      lead={`How much does Big Walk cost? Big Walk launched on August 4, 2026 at a base price of $19.99 USD across Steam PC (app ${SITE.steamAppId}), Nintendo Switch 2, and PlayStation 5. Check the live Steam widget above to see the real-time price in your local currency and check current discount status.`}
      gameWidget
      related={relatedLinks(["switch2", "crossplay", "guide", "towerOrder", "tools"])}
      faqs={[
        {
          q: "How much is Big Walk?",
          a: "Big Walk is priced at $19.99 USD (approx. €19.50 EUR / £16.75 GBP / ¥2,300 JPY) across Steam, Nintendo Switch 2, and PlayStation 5. Check the interactive store widget above for your exact local currency.",
        },
        {
          q: "Is Big Walk on Xbox Game Pass or PlayStation Plus?",
          a: "No. Big Walk is a standalone premium purchase and is not currently included on Xbox Game Pass or PlayStation Plus Extra/Premium tiers.",
        },
        {
          q: "Does Big Walk offer a co-op bundle discount?",
          a: "Yes. On Steam, a Co-op Multi-Pack is available that discounts copies when purchasing for 2 or 4 players together, saving approximately 10–15% per walker.",
        },
        {
          q: "Will Big Walk go on sale soon?",
          a: "Publisher Panic titles frequently participate in Steam seasonal sales (Autumn, Winter, Spring). Adding the game to your Steam Wishlist sends an automatic email notification when a price drop occurs.",
        },
        {
          q: "Is there a free demo for Big Walk?",
          a: "There is currently no permanent demo on storefronts. However, Steam offers an automated refund window if played under 2 hours.",
        },
        {
          q: "Does the price differ between PC, PS5, and Switch 2?",
          a: "No. The standard digital price parity is maintained at $19.99 USD across all three platforms. Crossplay is supported between all versions, so buy on whichever device you prefer.",
        },
      ]}
    >
      <h2>Big Walk Regional Price Comparison</h2>
      <p>
        Developer House House and publisher Panic opted for budget-conscious indie pricing for Big Walk.
        Here is the standard MSRP across key regions:
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="border border-slate-200 p-2 font-semibold">Store Region</th>
              <th className="border border-slate-200 p-2 font-semibold">Base Price</th>
              <th className="border border-slate-200 p-2 font-semibold">Pricing Notes</th>
            </tr>
          </thead>
          <tbody>
            {REGIONAL_PRICES.map((r) => (
              <tr key={r.region}>
                <td className="border border-slate-200 p-2 font-medium">{r.region}</td>
                <td className="border border-slate-200 p-2 font-bold text-emerald-800">{r.msrp}</td>
                <td className="border border-slate-200 p-2 text-slate-700">{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Standard Edition vs Co-op Multi-Pack</h2>
      <p>
        Big Walk features no microtransactions, battle passes, or paid gameplay expansions. The entire experience
        is included in the base purchase:
      </p>
      <ul className="mt-2 list-disc pl-5 space-y-2">
        <li>
          <strong>Standard Edition ($19.99):</strong> Grants full access to the complete adventure, all five color
          towers (Red, Black, Green, Blue, Yellow), all tools, and online multiplayer with crossplay.
        </li>
        <li>
          <strong>Co-Op 2-Pack / 4-Pack Bundle (Steam):</strong> Offers bundled digital gift copies at a reduced
          per-person cost, ideal for friends starting their walking line simultaneously.
        </li>
      </ul>

      <h2>Storefront Availability &amp; Platform Parity</h2>
      <p>
        Because crossplay connects all platforms, your platform choice does not restrict who you can invite:
      </p>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>
          <strong>PC (Steam):</strong> Fast updates, Community Hub guides, and seasonal sale discounts.
        </li>
        <li>
          <strong>Nintendo Switch 2:</strong> Portable handheld play and tabletop co-op. See our dedicated{" "}
          <a href="/switch-2" className="font-semibold text-brand-700 underline hover:text-brand-900">
            Nintendo Switch 2 Performance Guide
          </a>.
        </li>
        <li>
          <strong>PlayStation 5:</strong> DualSense haptic trigger feedback for pressure plates and living room play.
        </li>
      </ul>

      <h2>How to Get the Best Price on Big Walk</h2>
      <ol className="mt-3 list-decimal pl-5 space-y-2">
        <li>
          <strong>Wishlist on Steam:</strong> You will receive an immediate alert when Panic runs publisher discounts
          or seasonal price cuts.
        </li>
        <li>
          <strong>Pool with Friends for Bundles:</strong> Buying co-op bundle packs on Steam reduces the entry cost
          for the entire group.
        </li>
        <li>
          <strong>Crossplay Flexibility:</strong> If one console runs an eShop or PSN sale first, players can purchase
          there while still walking alongside Steam PC party members via{" "}
          <a href="/crossplay" className="font-semibold text-brand-700 underline hover:text-brand-900">
            Universal Crossplay
          </a>.
        </li>
      </ol>
    </PageShell>
  );
}
