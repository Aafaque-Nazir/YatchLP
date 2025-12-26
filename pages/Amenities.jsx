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
    <section id="amenities" className="py-20 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors"
            >
              <div className="p-4 rounded-full bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-yellow-500 group-hover:border-yellow-500/30 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-slate-300 font-medium text-sm md:text-base">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
