import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedPage from "@/components/LocalizedPage";
import { localizedMetadata } from "@/lib/seo";
import { LOCALE_CODES, getLocaleConfig } from "@/lib/i18n";
import type { LocaleCode, PageContent } from "@/lib/i18n";

function findPage(lang: LocaleCode, slug: string): PageContent | undefined {
  const cfg = getLocaleConfig(lang);
  return Object.values(cfg.pages).find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return LOCALE_CODES.flatMap((lang) => {
    const cfg = getLocaleConfig(lang);
    return Object.values(cfg.slugs)
      .filter((slug) => slug !== "")
      .map((slug) => ({ lang, slug }));
  });
}

export function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Metadata {
  const lang = params.lang as LocaleCode;
  const page = findPage(lang, params.slug);
  if (!page) return {};
  return localizedMetadata(lang, getLocaleConfig(lang), page);
}

export default function LocalePage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const lang = params.lang as LocaleCode;
  const page = findPage(lang, params.slug);
  if (!page) notFound();
  return <LocalizedPage lang={lang} cfg={getLocaleConfig(lang)} page={page} />;
}
