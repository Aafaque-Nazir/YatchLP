import Timer from "../src/components/Timer";
import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        
        <Timer/>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/v1.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-[5]"></div>

      {/* Floating subtle circles */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-white/10 rounded-full top-10 left-1/4"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-48 h-48 bg-white/5 rounded-full bottom-20 right-1/3"
        />
      </div>

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
        className="relative z-10 max-w-3xl px-6"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Luxury Speed Boat Stay & Party
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 text-white/90"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Book an unforgettable experience on water.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <a
            href="tel:+919594793959"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
         <a
  href="https://wa.me/919594793959?text=Hi%21%20I%20want%20to%20book%20a%20yacht%20experience."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-2xl shadow-lg hover:bg-green-600 transition transform hover:scale-105"
>
  <MessageSquare className="w-5 h-5" />
  WhatsApp Us
</a>

        </motion.div>
      </motion.div>
    </section>
  );
}
