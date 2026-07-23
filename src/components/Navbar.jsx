import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Anchor } from "lucide-react";

export default function Navbar({ onBook }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Packages", href: "#packages" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-sky-100/80 py-3.5 shadow-[0_10px_30px_rgba(2,132,199,0.06)]"
            : "bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group relative z-[110]">
            <div className={`p-2 rounded-xl transition-all duration-300 ${isScrolled ? "bg-sky-50 text-sky-600 border border-sky-100" : "bg-white/10 backdrop-blur-md text-white border border-white/20"}`}>
              <Anchor className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-serif font-bold tracking-[0.18em] uppercase transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}>
                Sea Cross
              </span>
              <span className={`text-[9px] font-sans tracking-[0.25em] uppercase font-semibold transition-colors ${isScrolled ? "text-sky-600" : "text-sky-300"}`}>
                Luxury Yacht Charters
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative font-sans text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 group py-1.5 ${
                    isScrolled ? "text-slate-600 hover:text-sky-600" : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 ease-out group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}

            <li>
              <button
                onClick={() => onBook("")}
                className="ml-4 px-7 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 text-white shadow-[0_4px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_25px_rgba(2,132,199,0.5)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Book Now
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`md:hidden relative z-[110] p-2.5 rounded-xl border transition-all ${
              isScrolled
                ? "bg-sky-50 border-sky-100 text-slate-900"
                : "bg-white/10 backdrop-blur-md border-white/20 text-white"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block w-full h-[2px] rounded-full transition-all ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
              <span className={`block w-full h-[2px] rounded-full transition-all ${isScrolled ? "bg-sky-600" : "bg-sky-400"}`} />
              <span className={`block w-full h-[2px] rounded-full transition-all ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Side Drawer Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[115] bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[380px] z-[120] bg-white border-l border-sky-100 flex flex-col justify-between p-8 shadow-2xl overflow-y-auto"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                      <Anchor className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-serif font-bold text-slate-900 tracking-wider">
                      SEA CROSS
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav Links */}
                <ul className="flex flex-col gap-4 mt-8 list-none">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between text-2xl font-serif font-semibold text-slate-800 hover:text-sky-600 transition-colors py-2"
                      >
                        <span>{link.name}</span>
                        <span className="text-xs font-sans font-bold text-sky-500 opacity-60 group-hover:opacity-100">
                          0{i + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-6 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBook("");
                  }}
                  className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-sky-500/25 mb-4"
                >
                  Book Your Trip Now
                </button>
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <Phone className="w-4 h-4 text-sky-500" />
                  <a href="tel:+919594793959" className="hover:text-slate-900 transition-colors font-semibold">
                    +91 95947 93959
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
