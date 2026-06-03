import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Optional faint background logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <img src="/Logo.png" alt="Background Logo" className="w-[800px] h-[800px] object-cover blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <img src="/Logo.png" alt="Sea Cross" className="w-12 h-12 object-contain brightness-0" />
              <span className="text-xl font-bold text-slate-900 tracking-[0.2em] font-serif uppercase">
                Sea Cross
              </span>
            </div>
            <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
              The pinnacle of luxury yachting in Mumbai. We provide unforgettable voyages tailored for those who demand the finest on the water.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-sky-500 hover:text-slate-900 hover:border-sky-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-sky-500 hover:text-slate-900 hover:border-sky-500 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-sky-500 hover:text-slate-900 hover:border-sky-500 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-serif text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Experience', 'Gallery', 'Packages'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-sky-500 transition-colors text-sm tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-serif text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-slate-500">
                <Phone className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <a href="tel:+919594793959" className="text-sm hover:text-slate-900 transition-colors">+91 95947 93959</a>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <Mail className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <a href="mailto:info@seacros.com" className="text-sm hover:text-slate-900 transition-colors">info@seacros.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Gateway of India, Jetty No. 5,<br/>Apollo Bunder, Mumbai.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-9000 text-xs tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} Sea Cross. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-9000 text-xs hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-9000 text-xs hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}