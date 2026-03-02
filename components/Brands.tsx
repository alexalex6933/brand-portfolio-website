// CUSTOMIZE: Replace the brands array with your actual brand logos / names.
// To use logos: set logo to a path inside /public/brands/ e.g. "/brands/nike.svg"
// To show text only: leave logo undefined.

const BRANDS: { name: string; logo?: string }[] = [
  { name: "Brand One" },
  { name: "Brand Two" },
  { name: "Brand Three" },
  { name: "Brand Four" },
  { name: "Brand Five" },
  { name: "Brand Six" },
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
            Trusted by leading brands.
          </h2>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="h-16 bg-white border border-[#DBEAFE] rounded-xl flex items-center justify-center px-4
                         hover:border-[#3B82F6] hover:shadow-md hover:shadow-blue-100/50 hover:-translate-y-0.5
                         transition-all duration-300 cursor-default"
            >
              {b.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={b.logo}
                  alt={b.name}
                  className="max-h-7 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-xs font-semibold text-[#5A6B8A]">{b.name}</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
