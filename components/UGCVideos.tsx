"use client";

// CUSTOMIZE: Add more UGC videos to this array.
// Drop video files into /public/ugc/ and reference them here.
// Set href to the original post URL (e.g. Instagram reel link).
const UGC_VIDEOS: {
  src: string;
  poster?: string;
  caption: string;
  brand?: string;
  href?: string;
}[] = [
  {
    src: "/ugc/ugc1.mp4",
    caption: "Date night content created for Terra — authentic, story-driven UGC showing their date night kit experience.",
    brand: "Terra",
    href: "https://www.instagram.com/reel/DVbOgpkEiS6/",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function UGCVideos() {
  return (
    <section id="ugc" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3B82F6]">
            UGC Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#06122B] max-w-lg leading-tight">
            Content I&apos;ve created for brands.
          </h2>
          <p className="mt-4 text-sm text-[#5A6B8A] max-w-xl leading-relaxed">
            Native, story-driven videos made to feel organic and drive action — not just impressions.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {UGC_VIDEOS.map((v) => (
            <div
              key={v.src}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
                         hover:shadow-blue-100/60 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Video fills the entire card */}
              <video
                src={v.src}
                poster={v.poster}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover block"
                style={{ aspectRatio: "9/16" }}
              />

              {/* Overlay: brand badge + link in bottom corner */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                <div className="flex items-end justify-between pointer-events-auto">
                  {v.brand && (
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                      {v.brand}
                    </span>
                  )}
                  {v.href && (
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/90 hover:text-white transition-colors ml-auto"
                    >
                      View post
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
