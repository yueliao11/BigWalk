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

export default function PricePage() {
  return (
    <PageShell
      h1="Big Walk Price, Platforms & Editions"
      lead={`Big Walk is sold on Steam (app ${SITE.steamAppId}) and on consoles, with crossplay between them. Price varies by region and sale; check the store widget above for the live Steam price before buying.`}
      related={relatedLinks(["guide", "coop", "vsWitness", "vsIttakesTwo", "vsGrounded"])}
      faqs={[
        { q: "How much is Big Walk?", a: "Price varies by region and sale. The Steam widget on this page shows the current live price." },
        { q: "What platforms is Big Walk on?", a: "Steam and major consoles, with crossplay enabled between them." },
        { q: "Is there a co-op bundle worth it?", a: "If you play with the same group often, the co-op/multi-owner options are usually the better value than two separate copies." },
      ]}
    >
      <h2>Where to buy</h2>
      <ul>
        <li>
          <a href={`https://store.steampowered.com/app/${SITE.steamAppId}/`} target="_blank" rel="noopener noreferrer">
            Steam
          </a>{" "}
          — see the live price in the widget above.
        </li>
        <li>Console stores — search &quot;Big Walk&quot; in your region&apos;s shop.</li>
      </ul>

      <h2>Editions</h2>
      <p>
        Most players only need the base game. If you routinely play with the
        same friends, compare the co-op/multi-owner option against two base
        copies — the bundle is often cheaper per player.
      </p>

      <h2>Crossplay note</h2>
      <p>
        Crossplay is on between PC and console, so where you buy does not lock
        you out of playing with friends — just keep crossplay enabled on both
        accounts (see the co-op fixes page if a join fails).
      </p>
    </PageShell>
  );
}
