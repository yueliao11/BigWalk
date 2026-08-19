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
      lead={`Big Walk launched on August 4, 2026 from developer House House and publisher Panic, and it is sold on Steam (app ${SITE.steamAppId}), Nintendo Switch 2 and PlayStation 5, with crossplay between all three. Price varies by region and sale; check the store widget above for the live Steam price before buying.`}
      gameWidget
      related={relatedLinks(["guide", "coop", "vsWitness", "vsIttakesTwo", "vsGrounded"])}
      faqs={[
        { q: "How much is Big Walk?", a: "Price varies by region and sale. The Steam widget on this page shows the current live price, and the console stores list their own regional pricing. Expect the three versions to sit close together at launch, with Steam usually the first to discount." },
        { q: "What platforms is Big Walk on?", a: "Steam on PC, Nintendo Switch 2 and PlayStation 5, all released on August 4, 2026. Crossplay is enabled between the three versions, so your platform choice does not limit who you can walk with." },
        { q: "Is there a Big Walk co-op bundle worth it?", a: "If you play with the same group often, the co-op/multi-owner option is usually better value than buying separate copies one at a time. Compare the bundle price against the per-copy price in your region before checkout." },
        { q: "Does Big Walk have crossplay between Steam and console?", a: "Yes. Crossplay is on between Steam, Switch 2 and PS5, so you can buy on whichever platform you prefer and still play with friends on the others. Keep crossplay enabled in the settings on both ends." },
        { q: "Will Big Walk go on sale?", a: "Almost certainly on Steam, where publisher Panic titles typically join the big seasonal sales. Console discounts usually follow later. If you are not in a hurry, wishlisting the game gets you an email the moment a discount starts." },
        { q: "Is Big Walk free to play or on a subscription service?", a: "No. Big Walk is a one-time premium purchase on all three platforms. There is no free-to-play tier and no confirmed subscription-service inclusion at launch, so budget for the full price or wait for a sale." },
        { q: "Which edition of Big Walk should I buy?", a: "Most players only need the base game — it contains the full walk, all five towers and every tool. Only look at the co-op/multi-owner option if you are buying for a fixed group, where the per-player cost usually beats separate copies." },
        { q: "Is the Big Walk price the same in every country?", a: "No. All three storefronts use regional pricing, so the number you see depends on your store region and currency. The Steam widget above reflects your region automatically; on console, check the listing in your own eShop or PlayStation Store account." },
      ]}
    >
      <h2>Where to buy Big Walk</h2>
      <p>
        Big Walk is a premium, one-time purchase — no subscription, no
        free-to-play tier. It released on August 4, 2026 on three storefronts:
      </p>
      <ul>
        <li>
          <a href={`https://store.steampowered.com/app/${SITE.steamAppId}/`} target="_blank" rel="noopener noreferrer">
            Steam
          </a>{" "}
          — the PC version. See the live price in the widget above, and
          wishlist it there to get notified of discounts.
        </li>
        <li>Nintendo Switch 2 — search &quot;Big Walk&quot; in the eShop on your console; pricing is regional.</li>
        <li>PlayStation 5 — search &quot;Big Walk&quot; in the PlayStation Store; pricing is regional.</li>
      </ul>
      <p>
        Buy wherever your group already plays. Because crossplay links all
        three versions, a mixed group — one walker on PC, one on Switch 2, one
        on PS5 — works out of the box.
      </p>

      <h2>Big Walk price by platform</h2>
      <p>
        Exact numbers change by region, currency and sale, so treat this as a
        map of where to look rather than a fixed price list. The store widget
        above always shows the current Steam price.
      </p>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Store</th>
            <th>Crossplay</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PC</td>
            <td>Steam</td>
            <td>Yes</td>
            <td>First to discount in seasonal sales; wishlist for alerts</td>
          </tr>
          <tr>
            <td>Nintendo Switch 2</td>
            <td>Nintendo eShop</td>
            <td>Yes</td>
            <td>Portable play; eShop sales follow their own calendar</td>
          </tr>
          <tr>
            <td>PlayStation 5</td>
            <td>PlayStation Store</td>
            <td>Yes</td>
            <td>Best fit for a couch setup; watch PS Store sale events</td>
          </tr>
        </tbody>
      </table>
      <p>
        The three versions are the same game with the same five towers and the
        same tools, so there is no &quot;best edition&quot; by platform — pick
        the one your friends own.
      </p>

      <h2>Big Walk on Steam vs console: which should you buy?</h2>
      <p>
        If your group is split, buy on the platform with the most walkers
        already on it and let crossplay cover the rest. If you are genuinely
        free to choose, Steam is the pragmatic default: it is historically the
        first storefront to discount, refund rules are clear, and the live
        price is one glance at the widget above.
      </p>
      <p>
        Choose Switch 2 if you want the walk portable — the puzzles are short
        and session-friendly, which suits handheld play. Choose PS5 if the
        TV-and-couch setup is where your co-op nights happen. None of these
        choices locks you away from friends on the other platforms.
      </p>

      <h2>Big Walk editions and what is in them</h2>
      <h3>Base game</h3>
      <p>
        The standard edition is the complete game: the full walk, all five
        color towers, every tool and the ending. Nothing mechanical is locked
        behind a higher tier, so most players should buy this and stop there.
        There is no season pass to factor into the price — what you buy on day
        one is the whole puzzle.
      </p>
      <h3>Co-op / multi-owner option</h3>
      <p>
        Some storefronts offer a co-op or multi-owner purchase aimed at groups
        buying together. The content is identical to the base game — the
        difference is purely how many copies you get in one transaction and
        what you pay per player. Check your region&apos;s store page for the
        exact bundle terms before checkout.
      </p>

      <h2>Is the Big Walk co-op bundle worth it?</h2>
      <p>
        Usually yes, if you have a fixed group. Big Walk is built around
        co-op: the tower puzzles assume multiple walkers, pressure plates need
        bodies standing on them, and the game is simply better with people you
        know. A bundle that undercuts the cost of separate copies is the
        cheapest way to get the whole group in.
      </p>
      <p>
        It is not worth it if you mostly play solo or with randoms. In that
        case a single base copy does everything you need, and you can always
        buy for friends later when a sale drops the per-copy price anyway.
      </p>
      <p>
        Quick decision rule: if you can name the people you will play with
        tonight, compare the bundle; if you cannot, buy one copy.
      </p>
      <p>
        One more check before you commit: confirm everyone in the group is
        buying on a storefront that actually sells the bundle in your region.
        Bundle availability and pricing can differ between Steam and the
        console stores, and a &quot;deal&quot; that leaves one walker paying
        full price on another platform is no deal at all.
      </p>

      <h2>When does Big Walk go on sale?</h2>
      <p>
        On Steam, publisher Panic&apos;s releases typically join the big
        seasonal sales — summer, autumn, winter — plus the occasional midweek
        or publisher weekend deal. The first meaningful discount usually lands
        a few months after launch, with deeper cuts the following year.
        Wishlist the game on Steam and you will get an email the moment any
        discount starts; that is the lowest-effort way to catch it.
      </p>
      <p>
        Console discounts follow their own rhythm. The eShop and PlayStation
        Store run independent sale events, so the Switch 2 and PS5 versions
        may not be discounted at the same time as Steam. If price matters more
        than platform, Steam is historically the safer bet for an early sale.
      </p>
      <p>
        Should you wait for a discount at all? If you have a group ready to
        play now, buy now — Big Walk is a shared experience, and the value is
        in walking together while everyone is still solving the towers blind.
        If you are buying solo and in no rush, wishlisting and waiting for the
        first seasonal sale is the patient, reasonable move.
      </p>

      <h2>Crossplay note</h2>
      <p>
        Crossplay is on between PC and console, so where you buy does not lock
        you out of playing with friends — just keep crossplay enabled on both
        accounts (see the co-op fixes page if a join fails). That also means
        you can chase the cheapest storefront without splitting the group: buy
        wherever it is on sale and everyone still ends up on the same walk.
      </p>
    </PageShell>
  );
}
