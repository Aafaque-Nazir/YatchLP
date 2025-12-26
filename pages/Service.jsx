// components/Services.js
import { motion } from "framer-motion";
import { Anchor, Music, BedDouble, Wine } from "lucide-react";

const services = [
  {
    icon: <Anchor className="w-12 h-12 text-yellow-500" />,
    title: "Luxury Stay",
    desc: "Spacious cabins with premium interiors for a royal experience.",
  },
  {
    icon: <Music className="w-12 h-12 text-yellow-500" />,
    title: "Private Parties",
    desc: "Host unforgettable parties with music, dance, and sea vibes.",
  },
  {
    icon: <BedDouble className="w-12 h-12 text-yellow-500" />,
    title: "Comfort & Relaxation",
    desc: "Chill at the deck, enjoy the sunset, and unwind in style.",
  },
  {
    icon: <Wine className="w-12 h-12 text-yellow-500" />,
    title: "Fine Dining",
    desc: "Savor gourmet meals and premium drinks aboard your yacht.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-slate-950 text-white">
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-8 tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Premium Yacht Services
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
              className="relative group rounded-2xl p-8 overflow-hidden shadow-lg bg-slate-900 border border-slate-800 hover:border-yellow-500 transition-colors duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-100">{service.title}</h3>
                <p className="text-slate-300">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
