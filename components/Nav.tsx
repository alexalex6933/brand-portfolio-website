"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DBEAFE]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <span className="text-sm font-semibold tracking-wide text-[#06122B]">
          Alexander Leung
        </span>

        {/* Links + CTA */}
        <div className="flex items-center gap-1 sm:gap-2">
          {[
            { label: "About",   href: "#about" },
            { label: "Metrics", href: "#metrics" },
            { label: "Work",    href: "#ugc" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden sm:inline-block px-3 py-1.5 text-sm text-[#5A6B8A] hover:text-[#06122B] rounded-lg hover:bg-blue-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-[#1D4ED8] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#1a44c2] active:scale-95 transition-all duration-200 shadow-sm shadow-blue-300/40"
          >
            Work with me
          </a>
        </div>
      </div>
    </nav>
  );
}
