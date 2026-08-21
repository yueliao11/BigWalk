import { SITE } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import LanguageSwitcher from "./LanguageSwitcher";

export type NavLabels = {
  guide: string;
  tools: string;
  towers: string;
  coop: string;
  price: string;
};

const EN_LABELS: NavLabels = {
  guide: "Guide",
  tools: "Tools",
  towers: "Towers",
  coop: "Co-op Fixes",
  price: "Price",
};

// lang = "" for the English site at root URLs, or a locale code like "ko".
export default function SiteHeader({
  lang = "",
  labels = EN_LABELS,
}: {
  lang?: string;
  labels?: NavLabels;
}) {
  const prefix = lang ? `/${lang}` : "";
  const nav = [
    { href: `${prefix}${ROUTES.guide.href}`, label: labels.guide },
    { href: `${prefix}${ROUTES.tools.href}`, label: labels.tools },
    { href: `${prefix}${ROUTES.redTower.href}`, label: labels.towers },
    { href: `${prefix}${ROUTES.coop.href}`, label: labels.coop },
    { href: `${prefix}${ROUTES.price.href}`, label: labels.price },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <a href={prefix || "/"} className="flex items-center gap-2 font-extrabold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">W</span>
          <span>
            {SITE.name}
            <span className="ml-1 hidden text-sm font-normal text-muted sm:inline">
              · Big Walk
            </span>
          </span>
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 text-sm sm:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-slate-600 hover:text-brand-700"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
