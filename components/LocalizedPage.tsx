import GameFrame from "./GameFrame";
import VideoEmbed from "./VideoEmbed";
import AdSlot from "./AdSlot";
import JsonLd from "./JsonLd";
import { faqJsonLd, howToJsonLd } from "@/lib/seo";
import { localePath } from "@/lib/i18n";
import type { LocaleCode, LocaleConfig, PageContent, SectionBlock } from "@/lib/i18n";

function Block({ b }: { b: SectionBlock }) {
  return (
    <>
      {b.h2 && <h2>{b.h2}</h2>}
      {b.h3 && <h3>{b.h3}</h3>}
      {b.paras?.map((p, i) => <p key={i}>{p}</p>)}
      {b.list &&
        (b.ordered ? (
          <ol>{b.list.map((li, i) => <li key={i}>{li}</li>)}</ol>
        ) : (
          <ul>{b.list.map((li, i) => <li key={i}>{li}</li>)}</ul>
        ))}
      {b.lists?.map((items, i) => (
        <ul key={i}>{items.map((li, j) => <li key={j}>{li}</li>)}</ul>
      ))}
      {b.img && (
        <img
          src={b.img.src}
          alt={b.img.alt}
          className="my-6 w-full rounded-xl border border-slate-200"
          loading="lazy"
        />
      )}
      {b.table && (
        <table>
          <thead>
            <tr>{b.table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {b.table.rows.map((row, i) => (
              <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

// Generic renderer for locale pages: same layout as PageShell, all content from JSON.
export default function LocalizedPage({
  lang,
  cfg,
  page,
}: {
  lang: LocaleCode;
  cfg: LocaleConfig;
  page: PageContent;
}) {
  const related = page.related
    .map((key) => {
      const target = cfg.pages[key];
      const slug = cfg.slugs[key];
      if (!target || slug === undefined) return null;
      return { href: localePath(lang, `/${slug}`), title: target.title, desc: target.desc };
    })
    .filter((r): r is { href: string; title: string; desc: string } => r !== null);

  return (
    <main className="mx-auto max-w-prose px-4 py-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {page.h1}
      </h1>
      {/* First screen: give the answer immediately (no scroll required) */}
      <p className="lead mt-3">{page.lead}</p>

      {page.gameWidget && <GameFrame />}
      {page.videoId && <VideoEmbed videoId={page.videoId} title={cfg.ui.videoLabel} />}

      <AdSlot label={cfg.ui.adLabel} />

      <div className="prose-guide">
        {page.sections.map((b, i) => <Block key={i} b={b} />)}
      </div>

      {page.howTo && (
        <section aria-label={cfg.ui.stepsHeading} className="mt-8">
          <h2>{cfg.ui.stepsHeading}</h2>
          <ol className="mt-2">
            {page.howTo.steps.map((s) => (
              <li key={s.title}>
                <strong>{s.title}.</strong> {s.text}
              </li>
            ))}
          </ol>
          <JsonLd data={howToJsonLd(page.howTo)} />
        </section>
      )}

      {page.faqs.length > 0 && (
        <section aria-label={cfg.ui.faqHeading} className="mt-10">
          <h2>{cfg.ui.faqHeading}</h2>
          <div className="mt-3 space-y-4">
            {page.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="!mt-0 !mb-1 text-lg font-semibold">{f.q}</h3>
                <p className="!my-0 text-slate-700">{f.a}</p>
              </div>
            ))}
          </div>
          <JsonLd data={faqJsonLd(page.faqs)} />
        </section>
      )}

      <AdSlot label={cfg.ui.adLabel} />

      {related.length > 0 && (
        <section aria-label={cfg.ui.relatedHeading} className="mt-10">
          <h2 className="mb-3 text-xl font-bold text-ink">{cfg.ui.relatedHeading}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {related.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="card block h-full hover:text-brand-700">
                  <span className="font-semibold text-brand-700">{l.title}</span>
                  <span className="mt-1 block text-sm text-muted">{l.desc}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
