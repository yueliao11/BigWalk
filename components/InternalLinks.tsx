import type { Route } from "@/lib/routes";

// Internal-link matrix: descriptive anchor text + a one-line description per link.
// This is the "web of related pages" that Google rewards and that keeps users on-site.
export default function InternalLinks({ links }: { links: Route[] }) {
  if (!links.length) return null;
  return (
    <section aria-label="Related guides" className="mt-10">
      <h2 className="mb-3 text-xl font-bold text-ink">Related Big Walk guides</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="card block h-full hover:text-brand-700"
            >
              <span className="font-semibold text-brand-700">{l.title}</span>
              <span className="mt-1 block text-sm text-muted">{l.desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
