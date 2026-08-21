import type { Metadata } from "next";
import LocalizedPage from "@/components/LocalizedPage";
import { localizedMetadata } from "@/lib/seo";
import { LOCALE_CODES, getLocaleConfig } from "@/lib/i18n";
import type { LocaleCode } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALE_CODES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const cfg = getLocaleConfig(params.lang as LocaleCode);
  return localizedMetadata(params.lang as LocaleCode, cfg, cfg.pages.home);
}

export default function LocaleHomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang as LocaleCode;
  const cfg = getLocaleConfig(lang);
  return <LocalizedPage lang={lang} cfg={cfg} page={cfg.pages.home} />;
}
