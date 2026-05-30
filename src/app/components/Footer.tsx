import { Link } from "react-router";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0e0e0] mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div>
            <Link to="/" className="text-lg font-bold">
              <span className="bg-gradient-to-r from-[#B93B8F] to-[#FF6B35] bg-clip-text text-transparent">
                Rubi Pictures
              </span>
            </Link>
          </div>

          <nav className="flex items-center justify-center gap-6">
            <Link
              to="/"
              className="text-sm text-black/70 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm text-black/70 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              to="/work"
              className="text-sm text-black/70 hover:text-black transition-colors"
            >
              Work
            </Link>
            <Link
              to="/services"
              className="text-sm text-black/70 hover:text-black transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-sm text-black/70 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center justify-end gap-4">
            <a
              href="#"
              className="text-black/60 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-black/60 hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-black/60 hover:text-black transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-black/60 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#e0e0e0] text-center">
          <p className="text-sm text-black/50">
            © 2025 Rubi Pictures. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
