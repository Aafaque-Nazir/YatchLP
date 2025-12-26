import { motion } from "framer-motion";
import { Phone, MessageSquare, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/v1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-[5]"></div>

      {/* Floating subtle circles - REMOVED for clean look */}

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 1 },
          },
        }}
        className="relative z-10 max-w-4xl px-6"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Luxury Speed Boat <br/>
          <span className="text-yellow-500">
            Stay & Party
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-10 text-slate-300 max-w-2xl mx-auto font-light"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Experience the ultimate freedom on the water. Unforgettable moments await you.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <a
            href="tel:+919594793959"
            className="group relative flex items-center gap-3 px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-full shadow-lg shadow-yellow-600/30 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Phone className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Call Now</span>
          </a>
         <a
            href="https://wa.me/919594793959?text=Hi%21%20I%20want%20to%20book%20a%20yacht%20experience."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <MessageSquare className="w-5 h-5 relative z-10" />
            <span className="relative z-10">WhatsApp Us</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-10 h-10 text-white/50" />
      </motion.div>
    </section>
  );
}
