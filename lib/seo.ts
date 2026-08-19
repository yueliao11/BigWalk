import type { Metadata } from "next";
import { SITE, url } from "./site";

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
    alternates: { canonical },
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
