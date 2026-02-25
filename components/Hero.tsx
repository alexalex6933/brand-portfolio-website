import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-start gap-8">
        {/* Profile photo */}
        <div className="w-20 h-20 rounded-full overflow-hidden bg-[#E0DFDA] flex-shrink-0">
          {/* Replace /profile.jpg with your actual photo in /public */}
          <Image
            src="/profile.jpg"
            alt="Profile photo"
            width={80}
            height={80}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Name + tagline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1C1C1C]">
            Your Name
          </h1>
          <p className="text-lg sm:text-xl text-[#737373] max-w-xl leading-relaxed">
            Content creator & brand strategist helping companies reach engaged audiences.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
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

        {/* CTA */}
        <a
          href="#contact"
          className="inline-block bg-[#1C1C1C] text-[#F5F5F0] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#333] transition-colors"
        >
          Work with me
        </a>
      </div>
    </section>
  );
}

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
    <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}
