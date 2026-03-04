const BRANDS: { name: string; desc: string; url: string; logo?: string }[] = [
  {
    name: "Terra",
    desc: "Date Night Kits",
    url: "https://itsterra.com.au",
    logo: "/brands/terra-logo.gif",
  },
  {
    name: "Momentum",
    desc: "Health & Nutrition",
    url: "https://themomentum.com.au",
    logo: "/brands/momentum-logo.png",
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 px-6 bg-[#F5F9FF]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3B82F6]">
            Brands
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#06122B] leading-tight">
            Brands I&apos;ve collaborated with.
          </h2>
        </div>

        {/* Brand cards */}
        <div className="flex flex-wrap gap-4">
          {BRANDS.map((b) => (
            <a
              key={b.name}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-2 h-24 w-44
                         bg-white border border-[#DBEAFE] rounded-xl px-5
                         hover:border-[#3B82F6] hover:shadow-md hover:shadow-blue-100/50 hover:-translate-y-0.5
                         transition-all duration-300"
            >
              {b.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={b.logo}
                  alt={b.name}
                  className="max-h-8 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-base font-bold text-[#06122B] group-hover:text-[#1D4ED8] transition-colors">{b.name}</span>
              )}
              <span className="text-[11px] text-[#5A6B8A]">{b.desc}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
