function IGIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TTIcon() {
  return (
    <svg width="13" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  );
}
function YTIcon() {
  return (
    <svg width="18" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <footer id="contact" className="py-14 px-6 bg-[#06122B] border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Name + email */}
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-sm font-semibold text-white">Alexander Leung</p>
          {/* CUSTOMIZE: replace with your email */}
          <a
            href="mailto:you@email.com"
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            you@email.com
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {/* CUSTOMIZE: replace "yourhandle" with your actual handles */}
          {[
            { href: "https://instagram.com/alexleuung", icon: <IGIcon />, label: "Instagram" },
            { href: "https://tiktok.com/@alexleuung",  icon: <TTIcon />, label: "TikTok" },
            { href: "https://youtube.com/@alexleuung", icon: <YTIcon />, label: "YouTube" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-blue-400/70 hover:text-white transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-blue-400/40">
          &copy; {new Date().getFullYear()} Alexander Leung
        </p>

      </div>
    </footer>
  );
}
