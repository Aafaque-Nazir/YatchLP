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
    <section id="packages" className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Curated Voyages
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
            className={`relative p-8 rounded-2xl border ${
              pkg.highlight
                ? "bg-slate-900 border-yellow-500 shadow-2xl shadow-yellow-900/20"
                : "bg-slate-900/50 border-slate-800"
            } hover:transform hover:-translate-y-2 transition-all duration-300`}
          >
            {pkg.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
            <div className="text-3xl font-bold text-yellow-500 mb-1">{pkg.price}</div>
            <p className="text-slate-400 text-sm mb-6">{pkg.duration}</p>

            <ul className="space-y-4 mb-8 text-left">
              {pkg.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onBook(pkg.title)}
              className={`w-full py-4 rounded-xl font-bold transition-colors duration-300 ${
                pkg.highlight
                  ? "bg-yellow-500 text-slate-900 hover:bg-yellow-400"
                  : "bg-slate-800 text-white hover:bg-slate-700 hover:text-yellow-500"
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
