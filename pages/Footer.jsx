import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Anchor } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-white border-t border-sky-100 relative overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col items-start pr-0 md:pr-8">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-sky-50 text-sky-600 rounded-xl border border-sky-100">
                <Anchor className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-[0.18em] uppercase text-slate-900">
                  Sea Cross
                </span>
                <span className="text-[9px] font-sans tracking-[0.25em] uppercase font-semibold text-sky-600">
                  Luxury Yacht Charters
                </span>
              </div>
            </a>
            <p className="text-slate-500 font-sans font-light text-sm leading-relaxed mb-6 max-w-sm">
              The pinnacle of private yachting and speed boat charters in Mumbai. Delivering 5-star tailored sea voyages at Gateway of India.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-serif font-bold text-base mb-4 tracking-wide uppercase">Quick Navigation</h4>
            <ul className="space-y-2.5 list-none font-sans text-xs">
              {[
                { name: "Home", href: "#home" },
                { name: "About Philosophy", href: "#about" },
                { name: "Onboard Experience", href: "#experience" },
                { name: "Charter Packages", href: "#packages" },
                { name: "Visual Gallery", href: "#gallery" },
                { name: "Boarding Logistics", href: "#location" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-500 hover:text-sky-600 transition-colors tracking-wider font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-slate-900 font-serif font-bold text-base mb-4 tracking-wide uppercase">Contact Concierge</h4>
            <ul className="space-y-3.5 list-none font-sans text-xs">
              <li className="flex items-start gap-2.5 text-slate-500">
                <Phone className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <a href="tel:+919594793959" className="hover:text-slate-900 transition-colors font-medium">
                  +91 95947 93959
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-500">
                <Mail className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <a href="mailto:info@seacros.com" className="hover:text-slate-900 transition-colors font-medium">
                  info@seacros.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-500">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">
                  Gateway of India, Jetty No. 5,<br />Apollo Bunder, Colaba, Mumbai.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Sea Cross Yacht Charters. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}