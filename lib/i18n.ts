// i18n registry + content types. English lives at the root URLs (already indexed);
// other locales are served under /<code>/ and read everything from lib/i18n/<code>.json.
// To add a language: drop a new <code>.json next to en.json and add one entry below.

export const LOCALES = [
  { code: "ko", name: "한국어", ogLocale: "ko_KR" },
  { code: "ja", name: "日本語", ogLocale: "ja_JP" },
  { code: "fr", name: "Français", ogLocale: "fr_FR" },
  { code: "es", name: "Español", ogLocale: "es_ES" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

export const LOCALE_CODES: LocaleCode[] = LOCALES.map((l) => l.code);

// Content blocks the localized renderer understands. Keep this minimal on purpose.
export type SectionBlock = {
  h2?: string;
  h3?: string;
  paras?: string[];
  list?: string[];
  lists?: string[][]; // multiple consecutive <ul>s in one section
  ordered?: boolean; // list rendered as <ol> when true
  img?: { src: string; alt: string };
  table?: { headers: string[]; rows: string[][] };
};

export type PageContent = {
  slug: string; // "" for the home page, otherwise the root path without "/", e.g. "red-tower"
  title: string;
  desc: string;
  keywords: string[];
  h1: string;
  lead: string;
  sections: SectionBlock[];
  faqs: { q: string; a: string }[];
  howTo?: { name: string; steps: { title: string; text: string }[] };
  videoId?: string;
  gameWidget?: boolean;
  related: string[]; // page keys, e.g. "redTower" -> /red-tower
};

export type LocaleConfig = {
  meta: { code: string; name: string; ogLocale: string; tagline: string; siteDescription: string };
  nav: { home: string; guide: string; tools: string; towers: string; coop: string; price: string };
  ui: {
    language: string;
    adLabel: string;
    relatedHeading: string;
    stepsHeading: string;
    faqHeading: string;
    videoLabel: string;
    breadcrumbHome: string;
    footerDisclaimer: string;
  };
  // page key -> url slug (kept identical across locales so switcher is a pure prefix swap)
  slugs: Record<string, string>;
  pages: Record<string, PageContent>;
};

import ko from "./i18n/ko.json";
import ja from "./i18n/ja.json";
import fr from "./i18n/fr.json";
import es from "./i18n/es.json";

const CONFIGS: Record<LocaleCode, LocaleConfig> = {
  ko: ko as unknown as LocaleConfig,
  ja: ja as unknown as LocaleConfig,
  fr: fr as unknown as LocaleConfig,
  es: es as unknown as LocaleConfig,
};

export function getLocaleConfig(code: LocaleCode): LocaleConfig {
  return CONFIGS[code];
}

// Absolute path for a page inside a locale: "/" -> "/ko", "/red-tower" -> "/ko/red-tower"
export function localePath(code: LocaleCode, path: string): string {
  return `/${code}${path === "/" ? "" : path}`;
}

export function hasLocaleSlug(code: LocaleCode, path: string): boolean {
  if (path === "/" || path === "") return true;
  const cfg = getLocaleConfig(code);
  const cleanSlug = path.replace(/^\//, "");
  return Object.values(cfg.slugs).includes(cleanSlug);
}

