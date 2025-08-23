import { motion } from "framer-motion";
import { BedDouble, Music, Coffee } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900 relative overflow-hidden">
      {/* Background Gradient / Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/20 blur-3xl pointer-events-none overflow-hidden"></div>

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
          className="rounded-2xl shadow-2xl border border-gray-700/40 object-cover w-full max-w-full h-[400px]"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Content */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Stay in Luxury
          </h2>

          <p className="text-lg leading-relaxed text-gray-400">
            Our yacht comes with spacious cabins, rooftop party decks,
            and premium facilities designed for unforgettable experiences.
          </p>

          <div className="grid gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-gray-700/30 backdrop-blur-lg shadow-lg hover:border-purple-500/40 transition"
            >
              <BedDouble className="text-purple-400 w-6 h-6" />
              <span>Comfortable & Modern Cabins</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-gray-700/30 backdrop-blur-lg shadow-lg hover:border-blue-500/40 transition"
            >
              <Music className="text-blue-400 w-6 h-6" />
              <span>Rooftop Party Deck with Music</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-gray-700/30 backdrop-blur-lg shadow-lg hover:border-pink-500/40 transition"
            >
              <Coffee className="text-pink-400 w-6 h-6" />
              <span>Exclusive Food & Drinks</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
