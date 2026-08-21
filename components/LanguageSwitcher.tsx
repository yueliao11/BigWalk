"use client";

import { usePathname } from "next/navigation";

// Language switcher: English lives at the root path, other locales under /<code>.
// The switch is a pure prefix swap — slugs are identical across locales.
const LANGS = [
  { code: "", label: "EN" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const m = pathname.match(/^\/(ko|ja|fr|es)(?=\/|$)/);
  const base = m ? pathname.slice(m[0].length) || "/" : pathname;

  return (
    <nav aria-label="Language" className="flex items-center gap-1 text-xs">
      {LANGS.map((l, i) => {
        const href = l.code ? `/${l.code}${base === "/" ? "" : base}` : base;
        const active = (m?.[1] || "") === l.code;
        return (
          <span key={l.code || "en"} className="flex items-center gap-1">
            {i > 0 && <span className="text-slate-300">·</span>}
            <a
              href={href}
              hrefLang={l.code || "en"}
              className={
                active
                  ? "font-bold text-brand-700"
                  : "text-slate-500 hover:text-brand-700"
              }
            >
              {l.label}
            </a>
          </span>
        );
      })}
    </nav>
  );
}
