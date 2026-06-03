import { motion } from "framer-motion";
import { BedDouble, Music, Coffee } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-navy-950 relative overflow-hidden">
      {/* Background Gradient / Glow - REMOVED */}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Image */}
        <motion.img
          src="/b.jpeg"
          alt="Luxury Yacht Room"
          className="rounded-2xl shadow-2xl border border-white/10 object-cover w-full max-w-full h-[500px]"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Content */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
            <span className="text-gradient font-style-italic">Stay in Luxury</span>
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light">
            Our yacht comes with spacious cabins, rooftop party decks,
            and premium facilities designed for unforgettable experiences.
          </p>

          <div className="grid gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 rounded-xl glass-panel hover:border-gold-500/40 transition-all duration-300"
            >
              <BedDouble className="text-gold-400 w-8 h-8" />
              <span className="text-lg font-medium tracking-wide">Comfortable & Modern Cabins</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 rounded-xl glass-panel hover:border-gold-500/40 transition-all duration-300"
            >
              <Music className="text-gold-400 w-8 h-8" />
              <span className="text-lg font-medium tracking-wide">Rooftop Party Deck with Music</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-5 rounded-xl glass-panel hover:border-gold-500/40 transition-all duration-300"
            >
              <Coffee className="text-gold-400 w-8 h-8" />
              <span className="text-lg font-medium tracking-wide">Exclusive Food & Drinks</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
