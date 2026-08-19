import { SITE } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

const LINKS: { href: string; label: string }[] = [
  { href: ROUTES.home.href, label: "Home" },
  { href: ROUTES.guide.href, label: "Full Guide" },
  { href: ROUTES.tools.href, label: "Tools" },
  { href: ROUTES.redTower.href, label: "Red Tower" },
  { href: ROUTES.blackTower.href, label: "Black Tower" },
  { href: ROUTES.greenTower.href, label: "Green Tower" },
  { href: ROUTES.blueTower.href, label: "Blue Tower" },
  { href: ROUTES.yellowTower.href, label: "Yellow Tower" },
  { href: ROUTES.coop.href, label: "Co-op Fixes" },
  { href: ROUTES.achievements.href, label: "Achievements" },
  { href: ROUTES.price.href, label: "Price" },
  { href: ROUTES.vsWitness.href, label: "vs The Witness" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="font-extrabold text-ink">{SITE.name}</div>
            <p className="mt-2 max-w-xs text-sm text-muted">{SITE.tagline}</p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-slate-600">
            {LINKS.slice(0, 6).map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brand-700">
                {l.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-col gap-2 text-sm text-slate-600">
            {LINKS.slice(6).map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brand-700">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-muted">
          {SITE.name} is a fan-made guide hub and is not affiliated with the
          developer or publisher of Big Walk. Big Walk is a trademark of its
          respective owner.
        </p>
      </div>
    </footer>
  );
}
