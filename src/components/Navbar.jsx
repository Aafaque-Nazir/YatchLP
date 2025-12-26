import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onBook }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Amenities", href: "#amenities" },
    { name: "Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <ul className="list-none">
          <li>
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/Logo.png"
                alt="Sea Cros Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Sea Cros
              </span>
            </a>
          </li>
        </ul>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-yellow-500 font-medium text-sm uppercase tracking-wider transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* CTA as li > a */}
          <li>
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                onBook("General Enquiry");
              }}
              className={`px-6 py-2 rounded-full font-bold transition-all hover:scale-105 ${
                isScrolled
                  ? "bg-yellow-600 text-white hover:bg-yellow-700"
                  : "bg-white text-slate-900 hover:bg-gray-200"
              }`}
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-slate-800"
          >
            <ul className="flex flex-col p-6 gap-4 list-none">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-slate-300 hover:text-yellow-500 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              {/* Mobile CTA */}
              <li>
                <a
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault();
                    onBook("Mobile Menu");
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-center py-3 bg-yellow-600 text-white rounded-xl font-bold"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
