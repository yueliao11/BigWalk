// Placeholder for a responsive AdSense unit. Replace the inner content with the
// real <ins class="adsbygoogle"> tag + (adsbygoogle = window.adsbygoogle || []).push({})
// once the site is approved. Keep it responsive so it survives mobile/desktop.
export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="my-6 flex min-h-[100px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50">
      <span className="text-xs uppercase tracking-wide text-muted">{label}</span>
    </div>
  );
}
