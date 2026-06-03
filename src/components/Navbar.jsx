import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Navbar({ onBook }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Packages", href: "#packages" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group relative z-[110]">
            <img
              src="/Logo.png"
              alt="Sea Cross Logo"
              className={`w-10 h-10 object-contain transition-all duration-500 group-hover:scale-110 ${isScrolled ? "brightness-0" : ""}`}
            />
            <span className={`text-xl md:text-2xl font-bold tracking-[0.2em] font-serif uppercase transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}>
              Sea Cross
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative font-medium text-xs lg:text-sm uppercase tracking-[0.15em] transition-colors duration-300 group py-2 ${isScrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-300 hover:text-white"}`}
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-sky-500 transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              </li>
            ))}
            
            <li>
              <a
                href="#book"
                className={`ml-4 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-500 hover:-translate-y-1 ${
                  isScrolled
                    ? "bg-gradient-to-r from-sky-500 to-sky-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]"
                    : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-sky-500 hover:text-white hover:border-transparent"
                }`}
              >
                Book Now
              </a>
            </li>
          </ul>

          {/* Custom Animated Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-[2px] transition-all duration-300 ease-out ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
            <span className={`block w-6 h-[2px] transition-all duration-300 ease-out ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
            <span className={`block w-6 h-[2px] transition-all duration-300 ease-out ${isScrolled ? "bg-slate-900" : "bg-white"}`} />
          </button>
        </div>
      </nav>

      {/* Premium Side Drawer Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[115] bg-slate-50/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] z-[120] bg-gradient-to-b from-white to-slate-50 border-l border-slate-200 flex flex-col justify-between px-8 py-8 shadow-2xl overflow-y-auto"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-500/50 to-transparent"></div>

              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <img src="/Logo.png" alt="Sea Cross Logo" className="w-8 h-8 object-contain brightness-0" />
                  <span className="text-lg font-bold text-slate-900 tracking-[0.2em] font-serif uppercase">
                    Sea Cross
                  </span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-slate-900/ border border-slate-200 rounded-full text-slate-900 hover:bg-sky-500 hover:text-slate-900 transition-all duration-300 hover:rotate-90 hover:scale-110"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <ul className="flex flex-col gap-6 w-full mt-4 list-none flex-grow justify-center">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center gap-6 text-4xl sm:text-5xl font-serif text-slate-600 hover:text-slate-900 transition-colors tracking-wide py-2"
                    >
                      <span className="text-sky-500/40 text-sm font-sans font-bold tracking-widest group-hover:text-sky-500 transition-colors">
                        0{i + 1}
                      </span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (navLinks.length * 0.1), duration: 0.5, ease: "easeOut" }}
                  className="w-full mt-10"
                >
                  <a
                    href="#book"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-sky-500 to-sky-500 text-slate-900 rounded-2xl font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-all"
                  >
                    Book Your Voyage
                  </a>
                </motion.li>
              </ul>

              {/* Drawer Footer (Contact Info) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12 pt-8 border-t border-slate-200"
              >
                <p className="text-sky-500 font-serif text-xl mb-2">Sea Cross</p>
                <a href="tel:+919594793959" className="block text-slate-500 text-sm tracking-wide mb-1 hover:text-slate-900 transition-colors">+91 95947 93959</a>
                <a href="mailto:info@seacros.com" className="block text-slate-500 text-sm tracking-wide hover:text-slate-900 transition-colors">info@seacros.com</a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
