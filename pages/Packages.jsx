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
    features: ["Unlimited Soft Drinks", "Premium Decorations", "DJ Support", "Max 10 Guests", "Photography"],
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
    <section id="packages" className="py-32 bg-slate-50 px-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sky-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Fleet</span>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">
            <span className="text-gradient font-style-italic">Our Best</span> Packages
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Choose the perfect escape. From golden sunsets to starlit nights, we have a voyage tailored for you.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            className={`relative rounded-3xl group ${
              pkg.highlight ? "bg-gradient-to-b from-sky-500 via-sky-500/20 to-transparent lg:-translate-y-4 shadow-[0_8px_30px_rgba(14,165,233,0.3)] p-[2px]" : "bg-white border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            } transition-all duration-500`}
          >
            {/* Card Inner */}
            <div className={`h-full rounded-[23px] bg-white p-8 flex flex-col ${pkg.highlight ? "bg-white" : ""}`}>
              
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-sky-500 blur-md opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-sky-500 to-sky-500 text-slate-900 px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap shadow-xl">
                      Most Popular
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-serif text-slate-900 mb-4">{pkg.title}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl lg:text-5xl font-serif text-sky-500 leading-none">{pkg.price}</span>
                </div>
                <p className="text-slate-500 text-sm tracking-widest uppercase">{pkg.duration}</p>
              </div>

              <div className="w-full h-[1px] bg-slate-200 mb-8"></div>

              <ul className="space-y-5 mb-10 flex-grow">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-500/30">
                      <Check className="w-3 h-3 text-sky-500" />
                    </div>
                    <span className="text-slate-600 font-light tracking-wide">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onBook(pkg.title)}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-[0.15em] text-sm transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gradient-to-r from-sky-500 to-sky-500 text-slate-900 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-[1.02]"
                    : "bg-white border border-slate-200 text-slate-900 hover:border-sky-500/50 hover:text-sky-500 hover:shadow-md"
                }`}
              >
                Reserve Voyage
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
