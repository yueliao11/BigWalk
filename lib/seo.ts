import type { Metadata } from "next";
import { SITE, url } from "./site";
import { LOCALES, localePath } from "./i18n";
import type { LocaleCode, LocaleConfig, PageContent } from "./i18n";

// hreflang map for any root-relative path: English at root + every locale prefix.
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = { en: url(path) };
  for (const l of LOCALES) map[l.code] = url(localePath(l.code, path));
  map["x-default"] = url(path);
  return map;
}

type PageMeta = {
  path: string; // e.g. "/red-tower"
  title: string;
  description: string;
  keywords?: string[];
  image?: string; // path under /public; defaults to the site-wide cover
};

// Per-page Next.js metadata. canonical + OG + Twitter all derive from the path.
export function pageMetadata({ path, title, description, keywords, image = "/og-cover.png" }: PageMeta): Metadata {
  const canonical = url(path);
  const ogImage = url(image);
  return {
    title,
    description,
    keywords,
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE.twitter,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

// Metadata for a localized page under /<lang>/. Same shape, localized values.
export function localizedMetadata(lang: LocaleCode, cfg: LocaleConfig, page: PageContent): Metadata {
  const path = `/${page.slug}`;
  const canonical = url(localePath(lang, path));
  const ogImage = url("/og-cover.png");
  return {
    title: page.title,
    description: page.desc,
    keywords: page.keywords,
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: {
      title: page.title,
      description: page.desc,
      url: canonical,
      siteName: SITE.name,
      locale: cfg.meta.ogLocale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.desc,
      site: SITE.twitter,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

// FAQPage structured data (one JSON-LD block per page that has FAQs).
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// HowTo structured data for puzzle-solution pages (steps = the actual solution).
export function howToJsonLd(howTo: {
  name: string;
  steps: { title: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    step: howTo.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };
}

// BreadcrumbList for the current page (helps Google model the hub-and-spoke structure).
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: url(it.path),
    })),
  };
}
