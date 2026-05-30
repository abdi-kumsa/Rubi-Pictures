import { Link, useNavigate } from "react-router";

const partners = [
  "Al Jazeera",
  "IFRC",
  "CGTN",
  "DW",
  "CorpsAfrica",
  "Afristar&SGR",
];

export function Header() {
  const navigate = useNavigate();

  const handlePartnerClick = (partner: string) => {
    navigate(`/work?partner=${encodeURIComponent(partner)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Utility Bar */}
      <div className="bg-gradient-to-r from-[#F8F8F8] via-white to-[#F8F8F8] border-b border-[#e0e0e0]">
        <div className="max-w-[1400px] mx-auto px-6 py-3.5">
          <div className="flex items-center justify-center gap-1">
            <span className="text-xs font-semibold text-black/40 mr-4 tracking-wider">
              OUR PARTNERS
            </span>
            {partners.map((partner, index) => (
              <div key={partner} className="flex items-center gap-1">
                <button
                  onClick={() => handlePartnerClick(partner)}
                  className="px-4 py-1.5 text-xs font-medium text-black/70 hover:bg-gradient-to-r hover:from-[#B93B8F] hover:to-[#FF6B35] hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-md"
                >
                  {partner}
                </button>
                {index < partners.length - 1 && (
                  <span className="text-black/20 mx-1">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-[#e0e0e0] shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">
              <img src="/Company Logo.png?v=4" alt="Rubi Pictures" className="h-16 w-auto object-contain" />
            </Link>

            <nav className="flex items-center gap-8">
              <Link
                to="/"
                className="text-sm font-medium text-black/80 hover:bg-gradient-to-r hover:from-[#B93B8F] hover:to-[#FF6B35] hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-black/80 hover:bg-gradient-to-r hover:from-[#B93B8F] hover:to-[#FF6B35] hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                About
              </Link>
              <Link
                to="/work"
                className="text-sm font-medium text-black/80 hover:bg-gradient-to-r hover:from-[#B93B8F] hover:to-[#FF6B35] hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                Work
              </Link>
              <Link
                to="/services"
                className="text-sm font-medium text-black/80 hover:bg-gradient-to-r hover:from-[#B93B8F] hover:to-[#FF6B35] hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-[#B93B8F] to-[#FF6B35] text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
              >
                Contact Me
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
