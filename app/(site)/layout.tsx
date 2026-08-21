import type { Metadata } from "next";
import "../globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { SITE, ORGANIZATION_JSONLD, url } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.domain,
    images: [{ url: url("/og-cover.png"), width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    images: [url("/og-cover.png")],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "nKaVlvQp8iHoBw79VTMOPQ7ub0Fc_NRQHH-ICMgV8t4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Analytics />
        <JsonLd data={ORGANIZATION_JSONLD} />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
