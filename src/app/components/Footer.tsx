import { Link } from "react-router";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0e0e0] mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Link to="/" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-[#B93B8F] to-[#FF6B35] bg-clip-text text-transparent">
                Rubi Pictures
              </span>
            </Link>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              to="/work"
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              Work
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e0e0e0] text-center">
          <p className="text-sm text-black/50">
            © 2026 Rubi Pictures. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
