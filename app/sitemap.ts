import type { MetadataRoute } from "next";
import { url } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { LOCALES, localePath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const r of Object.values(ROUTES)) {
    const languages: Record<string, string> = { en: url(r.href) };
    for (const l of LOCALES) languages[l.code] = url(localePath(l.code, r.href));
    languages["x-default"] = url(r.href);

    entries.push({
      url: url(r.href),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: r.href === "/" ? 1 : 0.8,
      alternates: { languages },
    });
    for (const l of LOCALES) {
      entries.push({
        url: url(localePath(l.code, r.href)),
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: r.href === "/" ? 0.9 : 0.7,
        alternates: { languages },
      });
    }
  }
  return entries;
}
