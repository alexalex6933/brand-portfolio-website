function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="15" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="19" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-[#E0DFDA]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Label */}
        <div>
          <span className="text-xs font-medium tracking-widest uppercase text-[#737373]">
            Get in Touch
          </span>
        </div>

        {/* Content */}
        <div className="sm:col-span-2 space-y-8">
          <div className="space-y-2">
            <p className="text-base text-[#1C1C1C]">
              Interested in collaborating? Reach out directly.
            </p>
            <a
              href="mailto:you@email.com"
              className="text-base font-medium text-[#1C1C1C] underline underline-offset-4 hover:text-[#737373] transition-colors"
            >
              you@email.com
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#1C1C1C] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
            <a
              href="https://tiktok.com/@yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#1C1C1C] transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon />
              <span>TikTok</span>
            </a>
            <a
              href="https://youtube.com/@yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#1C1C1C] transition-colors"
              aria-label="YouTube"
            >
              <YouTubeIcon />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer line */}
      <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-[#E0DFDA] flex items-center justify-between">
        <span className="text-xs text-[#737373]">Your Name</span>
        <span className="text-xs text-[#737373]">
          {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}
