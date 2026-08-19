import { SITE } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const NAV: { href: string; label: string }[] = [
  { href: ROUTES.guide.href, label: "Guide" },
  { href: ROUTES.tools.href, label: "Tools" },
  { href: ROUTES.redTower.href, label: "Towers" },
  { href: ROUTES.coop.href, label: "Co-op Fixes" },
  { href: ROUTES.price.href, label: "Price" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2 font-extrabold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">W</span>
          <span>
            {SITE.name}
            <span className="ml-1 hidden text-sm font-normal text-muted sm:inline">
              · Big Walk
            </span>
          </span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-slate-600 hover:text-brand-700"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
