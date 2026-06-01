import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

const partners = [
  "Al Jazeera",
  "CGTN Beijing",
  "CGTN France",
  "CGTN Africa",
  "DW",
  "CorpsAfrica",
  "Afristar&SGR",
  "IN-HOUSE",
];

export function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePartnerClick = (partner: string) => {
    navigate(`/work?partner=${encodeURIComponent(partner)}`);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
      {/* Top Utility Bar (Hidden on mobile) */}
      <div className={`hidden lg:block bg-gradient-to-r from-[#F8F8F8] via-white to-[#F8F8F8] border-b transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0 border-transparent' : 'h-[44px] opacity-100 border-[#e0e0e0]'}`}>
        <div className="max-w-[1400px] mx-auto px-6 py-3.5">
          <div className="flex items-center justify-start gap-1">
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
      <div className="border-b border-[#e0e0e0] relative">
        <div className={`max-w-[1400px] mx-auto px-4 md:px-6 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold z-50" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={`${import.meta.env.BASE_URL}Company Logo.png?v=5`} alt="Rubi Pictures" className="h-10 md:h-16 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
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

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden text-black z-50 p-2 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[#e0e0e0] shadow-lg flex flex-col items-center py-6 gap-6 lg:hidden z-40 animate-in slide-in-from-top-2">
            <Link
              to="/"
              onClick={toggleMobileMenu}
              className="text-lg font-medium text-black/80 hover:text-[#FF6B35]"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className="text-lg font-medium text-black/80 hover:text-[#FF6B35]"
            >
              About
            </Link>
            <Link
              to="/work"
              onClick={toggleMobileMenu}
              className="text-lg font-medium text-black/80 hover:text-[#FF6B35]"
            >
              Work
            </Link>
            <Link
              to="/services"
              onClick={toggleMobileMenu}
              className="text-lg font-medium text-black/80 hover:text-[#FF6B35]"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className="px-8 py-3 bg-gradient-to-r from-[#B93B8F] to-[#FF6B35] text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg mt-4"
            >
              Contact Me
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
