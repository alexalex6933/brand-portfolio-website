"use client";

import Image from "next/image";
import { useState } from "react";

/* ── Inline SVG icons ── */
function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="11" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 pb-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F9FF] via-white to-[#EBF3FF] -z-10" />
      <div className="absolute top-10 right-0 w-[520px] h-[520px] bg-blue-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-blue-100/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left ── */}
        <div className="space-y-7">

          {/* Available badge */}
          <div
            className="animate-fade-in inline-flex items-center gap-2 text-xs font-semibold text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3.5 py-1.5 rounded-full w-fit"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
            {/* CUSTOMIZE: update status */}
            Available for brand partnerships · 2026
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-up text-5xl sm:text-[3.5rem] font-extrabold tracking-tight text-[#06122B] leading-[1.08]"
            style={{ animationDelay: "80ms" }}
          >
            {/* CUSTOMIZE: update with your own headline */}
            Turning followers<br />
            into{" "}
            <span className="text-[#1D4ED8]">brand results.</span>
          </h1>

          {/* Sub */}
          <p
            className="animate-fade-in-up text-lg text-[#5A6B8A] max-w-md leading-relaxed"
            style={{ animationDelay: "180ms" }}
          >
            {/* CUSTOMIZE: update with your niche and combined follower count */}
            Content creator &amp; brand strategist with a combined audience across
            Instagram and TikTok. Authentic content that converts.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up flex flex-wrap items-center gap-3"
            style={{ animationDelay: "260ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1D4ED8] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#1a44c2] active:scale-95 transition-all duration-200 shadow-lg shadow-blue-400/30"
            >
              Work with me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#metrics"
              className="inline-block text-sm font-semibold px-6 py-3.5 rounded-full border border-[#BFDBFE] text-[#1D4ED8] hover:bg-[#EFF6FF] transition-colors duration-200"
            >
              View metrics
            </a>
          </div>

          {/* Platform pills */}
          <div
            className="animate-fade-in-up flex flex-wrap items-center gap-2"
            style={{ animationDelay: "340ms" }}
          >
            {[
              { icon: <InstagramIcon />, label: "Instagram", count: "14.9K" },
              { icon: <TikTokIcon />,   label: "TikTok",    count: "42.2K" },
            ].map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-1.5 text-xs font-medium text-[#5A6B8A] bg-white border border-[#DBEAFE] px-3 py-1.5 rounded-full shadow-sm"
              >
                <span className="text-[#3B82F6]">{p.icon}</span>
                {p.count} on {p.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: photo + floating chips ── */}
        <div
          className="animate-fade-in relative flex justify-center lg:justify-end"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative w-72 h-80 lg:w-[320px] lg:h-[420px]">

            {/* Glow ring */}
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-300/25 to-blue-500/15 rounded-[2.25rem] blur-xl" />

            {/* Photo frame */}
            {/* CUSTOMIZE: add your headshot at /public/profile.jpg */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 border border-[#BFDBFE] shadow-2xl shadow-blue-200/50">
              {!imgError && (
                <Image
                  src="/profile.JPG"
                  alt="Alexander Leung"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={() => setImgError(true)}
                />
              )}
              {imgError && (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                  <span className="text-5xl font-bold text-blue-300">AL</span>
                </div>
              )}
            </div>

            {/* Floating chip — engagement rate (top-right) */}
            <div className="float-a absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-[#DBEAFE] px-4 py-3 min-w-[116px]">
              <p className="text-2xl font-extrabold text-[#06122B]">17%</p>
              <p className="text-xs text-[#5A6B8A] mt-0.5">Avg. Engagement</p>
            </div>

            {/* Floating chip — monthly reach (bottom-left) */}
            <div className="float-b absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-[#DBEAFE] px-4 py-3 min-w-[116px]">
              <p className="text-2xl font-extrabold text-[#06122B]">9.3M+</p>
              <p className="text-xs text-[#5A6B8A] mt-0.5">Monthly Reach</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
