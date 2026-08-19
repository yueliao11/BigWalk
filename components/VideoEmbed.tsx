// Responsive 16:9 YouTube embed. Each guide page gets one video targeting its exact keyword,
// which captures the "second video slot" Google leaves open on these SERPs.
export default function VideoEmbed({
  videoId,
  title = "Big Walk video guide",
}: {
  videoId: string;
  title?: string;
}) {
  return (
    <section aria-label="Video guide" className="my-6">
      <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-black" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
