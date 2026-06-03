import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Sunset Cruise",
    price: "₹15,000",
    duration: "2 Hours",
    features: ["Welcome Drink", "Music System", "Captain & Crew", "Max 6 Guests"],
    highlight: false,
  },
  {
    title: "Party Voyager",
    price: "₹25,000",
    duration: "4 Hours",
    features: ["Unlimited Soft Drinks", "Decorations", "DJ Support", "Max 10 Guests", "Photography"],
    highlight: true,
  },
  {
    title: "VIP Overnight",
    price: "₹50,000",
    duration: "Overnight",
    features: ["Gourmet Dinner", "Luxury Bedroom", "Breakfast Deck", "Butler Service", "Champagne"],
    highlight: false,
  },
];

export default function Packages({ onBook }) {
  return (
    <section id="packages" className="py-24 bg-navy-950 px-6 relative">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
          <span className="text-gradient font-style-italic">Curated Voyages</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Choose the perfect escape. From golden sunsets to starlit nights.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative p-8 rounded-2xl glass-panel ${
              pkg.highlight
                ? "border-gold-500 shadow-[0_0_30px_rgba(197,160,89,0.15)] transform md:-translate-y-4"
                : "border-white/5 opacity-90"
            } hover:transform hover:-translate-y-2 transition-all duration-500`}
          >
            {pkg.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}
            <h3 className="text-3xl font-serif text-white mb-2">{pkg.title}</h3>
            <div className="text-4xl font-bold text-gold-400 mb-1 font-serif">{pkg.price}</div>
            <p className="text-slate-400 text-sm mb-6">{pkg.duration}</p>

            <ul className="space-y-4 mb-8 text-left">
              {pkg.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 font-light tracking-wide">
                  <Check className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onBook(pkg.title)}
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 ${
                pkg.highlight
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]"
                  : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-gold-400"
              }`}
            >
              Book this Voyage
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
