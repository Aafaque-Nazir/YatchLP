// components/Services.js
import { motion } from "framer-motion";
import { Anchor, Music, BedDouble, Wine } from "lucide-react";

const services = [
  {
    icon: <Anchor className="w-12 h-12 text-gold-400" />,
    title: "Luxury Stay",
    desc: "Spacious cabins with premium interiors for a royal experience.",
  },
  {
    icon: <Music className="w-12 h-12 text-gold-400" />,
    title: "Private Parties",
    desc: "Host unforgettable parties with music, dance, and sea vibes.",
  },
  {
    icon: <BedDouble className="w-12 h-12 text-gold-400" />,
    title: "Comfort & Relaxation",
    desc: "Chill at the deck, enjoy the sunset, and unwind in style.",
  },
  {
    icon: <Wine className="w-12 h-12 text-gold-400" />,
    title: "Fine Dining",
    desc: "Savor gourmet meals and premium drinks aboard your yacht.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-navy-950 text-white">
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-serif mb-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Premium <span className="text-gradient font-style-italic">Yacht Services</span>
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Elevate your journey with handpicked luxury experiences curated for the sea.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group rounded-3xl p-8 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] glass-panel hover:border-gold-500/50 hover:shadow-[0_0_30px_rgba(197,160,89,0.2)] hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-3 text-white">{service.title}</h3>
                <p className="text-slate-300 font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
