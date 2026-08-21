import { SITE } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import type { LocaleCode, LocaleConfig } from "@/lib/i18n";

// English footer link labels (default). Localized pages pass labels from their JSON config.
function linksFor(lang: string, cfg?: LocaleConfig) {
  const prefix = lang ? `/${lang}` : "";
  const t = (key: string, fallback: string) =>
    cfg?.pages?.[key]?.title ?? fallback;
  return [
    { href: prefix || "/", label: cfg?.nav.home ?? "Home" },
    { href: `${prefix}/guide`, label: t("guide", "Full Guide") },
    { href: `${prefix}/tools`, label: t("tools", "Tools") },
    { href: `${prefix}/red-tower`, label: t("redTower", "Red Tower") },
    { href: `${prefix}/black-tower`, label: t("blackTower", "Black Tower") },
    { href: `${prefix}/green-tower`, label: t("greenTower", "Green Tower") },
    { href: `${prefix}/blue-tower`, label: t("blueTower", "Blue Tower") },
    { href: `${prefix}/yellow-tower`, label: t("yellowTower", "Yellow Tower") },
    { href: `${prefix}/co-op-not-working`, label: cfg?.nav.coop ?? "Co-op Fixes" },
    { href: `${prefix}/achievements`, label: t("achievements", "Achievements") },
    { href: `${prefix}/price`, label: t("price", "Price") },
    { href: `${prefix}/vs-witness`, label: t("vsWitness", "vs The Witness") },
  ];
}

const EN_DISCLAIMER =
  "WalkHub is a fan-made guide hub and is not affiliated with the developer or publisher of Big Walk. Big Walk is a trademark of its respective owner.";

export default function SiteFooter({
  lang = "",
  cfg,
}: {
  lang?: LocaleCode | "";
  cfg?: LocaleConfig;
}) {
  const links = linksFor(lang, cfg);
  const tagline = cfg?.meta.tagline ?? SITE.tagline;
  const disclaimer = cfg?.ui.footerDisclaimer ?? EN_DISCLAIMER;

  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="font-extrabold text-ink">{SITE.name}</div>
            <p className="mt-2 max-w-xs text-sm text-muted">{tagline}</p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-slate-600">
            {links.slice(0, 6).map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brand-700">
                {l.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-2 text-sm text-slate-600">
            {links.slice(6).map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brand-700">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-muted">{disclaimer}</p>
      </div>
    </footer>
  );
}
