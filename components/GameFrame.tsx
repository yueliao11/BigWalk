import { SITE } from "@/lib/site";

/**
 * Embeddable game frame.
 * Default = Steam store widget for Big Walk (iframe-embeddable, shows price + "Play").
 * To embed an actual browser-playable build, pass `src` to that URL.
 */
export default function GameFrame({
  src = SITE.steamWidget,
  title = "Play Big Walk",
  height = 200,
}: {
  src?: string;
  title?: string;
  height?: number;
}) {
  return (
    <section aria-label="Play Big Walk" className="my-6">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="w-full border-0"
          style={{ height }}
          allow="autoplay; fullscreen; gamepad"
        />
      </div>
      <p className="mt-2 text-center text-xs text-muted">
        Can&apos;t load the embed? Open Big Walk on{" "}
        <a
          className="text-brand-600 underline"
          href={`https://store.steampowered.com/app/${SITE.steamAppId}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Steam
        </a>
        .
      </p>
    </section>
  );
}
