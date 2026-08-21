import "../globals.css";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { SITE, ORGANIZATION_JSONLD } from "@/lib/site";
import { LOCALE_CODES, getLocaleConfig } from "@/lib/i18n";
import type { LocaleCode } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALE_CODES.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!LOCALE_CODES.includes(params.lang as LocaleCode)) notFound();
  const lang = params.lang as LocaleCode;
  const cfg = getLocaleConfig(lang);

  return (
    <html lang={lang}>
      <body className="flex min-h-screen flex-col">
        <Analytics />
        <JsonLd data={{ ...ORGANIZATION_JSONLD, description: cfg.meta.siteDescription }} />
        <SiteHeader lang={lang} labels={cfg.nav} />
        <div className="flex-1">{children}</div>
        <SiteFooter lang={lang} cfg={cfg} />
      </body>
    </html>
  );
}
