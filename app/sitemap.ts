import type { MetadataRoute } from "next";
import { url } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(ROUTES).map((r) => ({
    url: url(r.href),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r.href === "/" ? 1 : 0.8,
  }));
}
