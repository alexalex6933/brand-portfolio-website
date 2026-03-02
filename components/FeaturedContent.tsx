"use client";

import { useEffect, useState } from "react";

type IgPost = {
  id: string;
  caption?: string;
  media_type: string;
  thumbnail_url?: string;
  media_url?: string;
  permalink: string;
  like_count: number;
  comments_count: number;
  video_views?: number;
  timestamp: string;
};

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return `${n}`;
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.45)" />
      <path d="M9.5 7.5l7 4.5-7 4.5V7.5z" fill="white" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white border border-[#DBEAFE] rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-[#DBEAFE]" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-[#DBEAFE] rounded w-1/3" />
        <div className="h-4 bg-[#EFF6FF] rounded w-full" />
        <div className="h-4 bg-[#EFF6FF] rounded w-4/5" />
        <div className="flex gap-4 pt-1">
          <div className="h-3 bg-[#DBEAFE] rounded w-12" />
          <div className="h-3 bg-[#DBEAFE] rounded w-12" />
        </div>
      </div>
    </div>
  );
}

export default function FeaturedContent() {
  const [posts, setPosts] = useState<IgPost[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data) => {
        if (data.error || !data.top_posts) {
          setError(true);
        } else {
          setPosts(data.top_posts);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="case-studies" className="py-24 px-6 bg-[#F5F9FF]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3B82F6]">
            Featured Content
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#06122B] max-w-lg leading-tight">
            Top performing posts.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {loading && (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          )}

          {!loading && (error || !posts || posts.length === 0) && (
            <div className="sm:col-span-3 bg-white border border-[#DBEAFE] rounded-2xl p-10 text-center space-y-3">
              <p className="text-sm font-semibold text-[#06122B]">Content coming soon</p>
              <p className="text-xs text-[#5A6B8A]">
                Follow along on{" "}
                <a
                  href="https://instagram.com/alexleuung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D4ED8] hover:underline"
                >
                  @alexleuung
                </a>
              </p>
            </div>
          )}

          {!loading && posts && posts.map((post) => {
            const thumb = post.thumbnail_url ?? post.media_url ?? "";
            const isVideo = post.media_type === "VIDEO" || post.media_type === "REELS";
            const primaryCount = post.video_views ?? (post.like_count + post.comments_count);
            const caption = post.caption
              ? post.caption.replace(/\n/g, " ").slice(0, 110) + (post.caption.length > 110 ? "…" : "")
              : null;

            return (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-[#DBEAFE] rounded-2xl overflow-hidden
                           hover:border-[#3B82F6] hover:shadow-xl hover:shadow-blue-100/60
                           hover:-translate-y-1.5 transition-all duration-300 block"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EFF6FF]">
                  {thumb && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={thumb}
                      alt={caption ?? "Instagram post"}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {!thumb && (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-[#BFDBFE]">AL</span>
                    </div>
                  )}
                  {/* Video play overlay */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayIcon />
                    </div>
                  )}
                  {/* Badge */}
                  <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase bg-[#EFF6FF] text-[#1D4ED8] px-2.5 py-1 rounded-full">
                    {isVideo ? "Video" : "Photo"}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  {/* Stats row */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#5A6B8A]">
                    <span className="flex items-center gap-1 text-[#1D4ED8]">
                      {isVideo ? <EyeIcon /> : <HeartIcon />}
                      {formatCount(primaryCount)}
                    </span>
                    <span className="flex items-center gap-1">
                      <HeartIcon />
                      {formatCount(post.like_count)}
                    </span>
                  </div>

                  {/* Caption */}
                  {caption && (
                    <p className="text-sm text-[#06122B] leading-relaxed line-clamp-3">
                      {caption}
                    </p>
                  )}

                  {/* CTA */}
                  <div className="pt-1 flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] group-hover:text-[#06122B] transition-colors">
                    View on Instagram
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
