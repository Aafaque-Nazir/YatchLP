import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const media = [
    // Block 1
    { type: "image", src: "/p1.jpeg", span: "md:col-span-2 md:row-span-2" },
    { type: "video", src: "/v2.mp4", span: "md:col-span-1 md:row-span-2" },
    { type: "image", src: "/p3.jpeg", span: "md:col-span-1 md:row-span-1" },
    { type: "image", src: "/p2.jpeg", span: "md:col-span-1 md:row-span-1" },
    // Block 2
    { type: "video", src: "/v3.mp4", span: "md:col-span-2 md:row-span-2" },
    { type: "image", src: "/p5.jpeg", span: "md:col-span-2 md:row-span-1" },
    { type: "image", src: "/p6.jpeg", span: "md:col-span-1 md:row-span-1" },
    { type: "image", src: "/p9.jpeg", span: "md:col-span-1 md:row-span-1" },
    // Block 3
    { type: "video", src: "/v4.mp4", span: "md:col-span-1 md:row-span-2" },
    { type: "video", src: "/v1.mp4", span: "md:col-span-2 md:row-span-2" },
    { type: "video", src: "/v5.mp4", span: "md:col-span-1 md:row-span-2" },
    // Block 4 (Footer Panorama)
    { type: "image", src: "/p10.jpeg", span: "md:col-span-4 md:row-span-1" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [media.length]);

  return (
    <section id="gallery" className="py-24 md:py-32 px-4 md:px-10 bg-navy-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-16 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Visual Proof</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              A Glimpse of <br className="hidden md:block" />
              <span className="text-gradient font-style-italic">Paradise</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 max-w-sm text-base md:text-lg font-light pb-2"
          >
            Moments captured on our vessels. The ocean is calling, and this is what it looks like to answer.
          </motion.p>
        </div>

        {/* Mobile: React Auto Slider */}
        <div className="md:hidden relative w-full h-[450px] overflow-hidden rounded-3xl shadow-2xl bg-navy-900 border border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {media[currentIndex].type === "image" ? (
                <img src={media[currentIndex].src} alt="Gallery" className="w-full h-full object-cover" />
              ) : (
                <video src={media[currentIndex].src} className="w-full h-full object-cover" muted autoPlay loop playsInline />
              )}
              {/* Dark Gradient Overlay for slider */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {media.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentIndex ? "w-8 bg-gold-400" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* PC: Premium Masonry / Bento Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              className={`relative rounded-3xl overflow-hidden group ${item.span}`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Yacht Experience"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full border border-gold-400/50 flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
                  <span className="text-gold-400 text-sm font-serif font-style-italic tracking-widest">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}