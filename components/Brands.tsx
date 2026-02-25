// Replace the brand names and logo paths with your actual worked-with brands.
// Place brand logos in /public/brands/ (SVG or PNG recommended, ~120x40px).
// If you don't have logos yet, just the brand names will show as text.

const brands: { name: string; logo?: string }[] = [
  { name: "Brand One" },
  { name: "Brand Two" },
  { name: "Brand Three" },
  { name: "Brand Four" },
  { name: "Brand Five" },
  { name: "Brand Six" },
];

export default function Brands() {
  return (
    <section id="brands" className="py-20 px-6 border-t border-[#E0DFDA]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Label */}
        <div>
          <span className="text-xs font-medium tracking-widest uppercase text-[#737373]">
            Brands I've Worked With
          </span>
        </div>

        {/* Brand grid */}
        <div className="sm:col-span-2">
          <div className="grid grid-cols-3 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="h-14 bg-[#EEEEE9] rounded-lg flex items-center justify-center px-4"
              >
                {brand.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={brand.logo} alt={brand.name} className="max-h-7 max-w-full object-contain opacity-60" />
                ) : (
                  <span className="text-sm font-medium text-[#737373]">{brand.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
