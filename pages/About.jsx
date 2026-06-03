import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-10 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative large text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-5 select-none pointer-events-none flex justify-center mt-10">
        <span className="text-[15vw] font-serif font-bold whitespace-nowrap text-slate-900">VOYAGE</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left: Imagery (Parallax overlapping) */}
        <div className="lg:col-span-6 relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-10 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 z-10"
          >
            <img src="/b.jpeg" alt="Yacht Deck" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-slate-50/20 mix-blend-overlay"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute right-0 bottom-0 w-[55%] h-[65%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-sky-500/20 z-20"
          >
            <img src="/p3.jpeg" alt="Luxury Interior" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
          </motion.div>
        </div>

        {/* Right: Editorial Typography */}
        <div className="lg:col-span-6 lg:pl-10 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sky-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Philosophy</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-8">
              More than a journey. <br/>
              <span className="text-gradient font-style-italic">A Private Sanctuary.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                At Sea Cros, we believe the ocean is the ultimate escape. We don't just charter yachts; we curate unparalleled floating experiences designed to disconnect you from the mundane and reconnect you with the extraordinary.
              </p>
              <p>
                Whether you seek the thrill of slicing through the waves on a speed boat or the serene indulgence of sipping champagne on a luxury sun deck, our fleet is meticulously maintained to deliver perfection.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="w-16 h-[1px] bg-sky-500"></div>
              <p className="text-sm tracking-[0.2em] uppercase text-slate-900 font-semibold">Redefining Luxury</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
