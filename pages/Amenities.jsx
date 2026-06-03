import { motion } from "framer-motion";
import { Wind, Volume2, Utensils, LifeBuoy, Martini, Sun } from "lucide-react";

const amenities = [
  { icon: <Wind />, label: "Air Conditioned Cabin" },
  { icon: <Volume2 />, label: "Premium Sound System" },
  { icon: <Utensils />, label: "Gourmet Dining Setup" },
  { icon: <Martini />, label: "Professional Bartender" },
  { icon: <Sun />, label: "Sun Deck Lounging" },
  { icon: <LifeBuoy />, label: "Certified Safety Gear" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-navy-900 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-5 p-6 rounded-2xl hover:bg-navy-800 transition-colors"
            >
              <div className="p-5 rounded-full bg-navy-950 border border-white/5 text-slate-400 group-hover:text-gold-400 group-hover:border-gold-500/30 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-slate-300 font-medium text-sm md:text-base tracking-wide uppercase">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
