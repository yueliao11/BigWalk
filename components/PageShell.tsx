import type { ReactNode } from "react";
import GameFrame from "./GameFrame";
import VideoEmbed from "./VideoEmbed";
import AdSlot from "./AdSlot";
import InternalLinks from "./InternalLinks";
import JsonLd from "./JsonLd";
import { faqJsonLd, howToJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import type { Route } from "@/lib/routes";

type Crumb = { name: string; path: string };

export default function PageShell({
  h1,
  lead,
  children,
  faqs,
  howTo,
  related = [],
  gameWidget = false,
  videoId,
  breadcrumb,
}: {
  h1: string;
  lead: string;
  children: ReactNode;
  faqs?: { q: string; a: string }[];
  howTo?: { name: string; steps: { title: string; text: string }[] };
  related?: Route[];
  gameWidget?: boolean;
  videoId?: string;
  breadcrumb?: Crumb[];
}) {
  return (
    <main className="mx-auto max-w-prose px-4 py-8">
      {breadcrumb && breadcrumb.length > 0 && (
        <>
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            {breadcrumb.map((c, i) => (
              <span key={c.path}>
                {i > 0 && " / "}
                <a href={c.path} className="hover:text-brand-700">
                  {c.name}
                </a>
              </span>
            ))}
          </nav>
          <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
        </>
      )}

      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {h1}
      </h1>
      {/* First screen: give the answer immediately (no scroll required) */}
      <p className="lead mt-3">{lead}</p>

      {howTo && (
        <aside aria-label="Quick Solution" className="my-5 rounded-xl border border-emerald-300 bg-emerald-50/80 p-4 shadow-sm sm:p-5">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-900">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">✓</span>
            <span>Quick Solution (TL;DR Steps)</span>
          </div>
          <ol className="mt-3 space-y-2 text-sm text-slate-800 list-decimal pl-5">
            {howTo.steps.map((s) => (
              <li key={s.title}>
                <strong className="font-semibold text-slate-900">{s.title}:</strong> {s.text}
              </li>
            ))}
          </ol>
        </aside>
      )}

      {gameWidget && <GameFrame />}
      {videoId && <VideoEmbed videoId={videoId} />}

      <AdSlot label="Advertisement" />

      <div className="prose-guide">{children}</div>

      {howTo && (
        <section aria-label="Steps" className="mt-8">
          <h2>Step-by-step</h2>
          <ol className="mt-2">
            {howTo.steps.map((s) => (
              <li key={s.title}>
                <strong>{s.title}.</strong> {s.text}
              </li>
            ))}
          </ol>
          <JsonLd data={howToJsonLd(howTo)} />
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section aria-label="FAQ" className="mt-10">
          <h2>Frequently asked questions</h2>
          <div className="mt-3 space-y-4">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="!mt-0 !mb-1 text-lg font-semibold">{f.q}</h3>
                <p className="!my-0 text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
          <JsonLd data={faqJsonLd(faqs)} />
        </section>
      )}

      <AdSlot label="Advertisement" />
      <InternalLinks links={related} />
    </main>
  );
}
