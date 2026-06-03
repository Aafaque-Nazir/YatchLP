import { motion } from "framer-motion";
import { MessageSquare, Anchor } from "lucide-react";

export default function Hero({ onBook }) {
  return (
    <section id="home" className="relative h-[100dvh] flex items-center justify-center text-center overflow-hidden bg-slate-50">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 mix-blend-luminosity"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/v1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay with premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-50 z-[5]"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3, duration: 1.2, ease: "easeOut" },
          },
        }}
        className="relative z-10 max-w-5xl px-4 flex flex-col items-center w-full"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 md:mb-6 tracking-tight text-white drop-shadow-2xl leading-tight mt-10 md:mt-0"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Experience the Ocean's <br className="hidden md:block"/>
          <span className="text-gradient font-style-italic">
             Finest Luxury
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl mb-8 md:mb-10 text-slate-200 max-w-2xl mx-auto font-light leading-relaxed px-2 drop-shadow-lg"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Experience the ultimate freedom on the water with our exclusive speed boats and yachts. Unforgettable moments await you.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-2"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <button
            onClick={() => onBook?.("Hero Section")}
            className="group relative flex items-center justify-center gap-3 px-6 py-3.5 md:px-10 md:py-4 bg-gradient-to-r from-sky-500 to-sky-500 text-slate-900 font-bold uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-slate-900/ translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 text-sm md:text-base whitespace-nowrap">Enquire Now</span>
          </button>
          
          <a
            href="https://wa.me/919594793959?text=Hi%21%20I%20want%20to%20book%20a%20yacht%20experience."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-6 py-3.5 md:px-10 md:py-4 border border-white/30 bg-black/20 backdrop-blur-md hover:bg-black/40 hover:border-sky-500/50 text-white font-bold uppercase tracking-widest rounded-full shadow-lg transition-all duration-500 hover:scale-105 overflow-hidden w-full sm:w-auto"
          >
            <MessageSquare className="w-5 h-5 relative z-10 text-green-400 group-hover:text-green-300 transition-colors" />
            <span className="relative z-10 text-sm md:text-base whitespace-nowrap">WhatsApp Us</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
