export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0]/90 backdrop-blur-sm border-b border-[#E0DFDA]">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-medium tracking-wide text-[#1C1C1C]">
          YOUR NAME
        </span>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm text-[#737373] hover:text-[#1C1C1C] transition-colors">
            About
          </a>
          <a href="#metrics" className="text-sm text-[#737373] hover:text-[#1C1C1C] transition-colors">
            Metrics
          </a>
          <a href="#brands" className="text-sm text-[#737373] hover:text-[#1C1C1C] transition-colors">
            Brands
          </a>
          <a
            href="#contact"
            className="text-sm bg-[#1C1C1C] text-[#F5F5F0] px-4 py-1.5 rounded-full hover:bg-[#333] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
