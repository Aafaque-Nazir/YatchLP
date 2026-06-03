import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [media.length, isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleDragEnd = (e, { offset }) => {
    setIsAutoPlaying(false);
    if (offset.x < -50) {
      handleNext();
    } else if (offset.x > 50) {
      handlePrev();
    }
  };

  // Slider Animation Variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0.5,
      scale: 0.95,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (dir) => ({
      x: dir < 0 ? "50%" : "-50%",
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section id="gallery" className="py-24 md:py-32 px-4 md:px-10 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-16 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sky-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Visual Proof</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-tight">
              A Glimpse of <br className="hidden md:block" />
              <span className="text-gradient font-style-italic">Paradise</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-500 max-w-sm text-base md:text-lg font-light pb-2"
          >
            Moments captured on our vessels. The ocean is calling, and this is what it looks like to answer.
          </motion.p>
        </div>

        {/* Mobile: Premium React Slider */}
        <div 
          className="md:hidden relative w-full h-[500px] overflow-hidden rounded-[2rem] shadow-2xl bg-slate-900"
          onTouchStart={() => setIsAutoPlaying(false)}
        >
          {/* Main Slides */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              {media[currentIndex].type === "image" ? (
                <img src={media[currentIndex].src} alt="Gallery" className="w-full h-full object-cover" draggable="false" />
              ) : (
                <video src={media[currentIndex].src} className="w-full h-full object-cover" muted autoPlay loop playsInline />
              )}
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </AnimatePresence>

          {/* Premium UI Overlay */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 z-10">
            {/* Top Bar: Counter & AutoPlay Status */}
            <div className="flex justify-between items-center">
              <div className="glass-panel !bg-white/10 backdrop-blur-md border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em]">
                {String(currentIndex + 1).padStart(2, '0')} / {String(media.length).padStart(2, '0')}
              </div>
              {isAutoPlaying && (
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold">Live</span>
                </div>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col gap-6 pointer-events-auto">
              <div className="flex justify-between items-center">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-sky-500 hover:border-transparent transition-all active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-sky-500 hover:border-transparent transition-all active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Enhanced Pagination Dots */}
              <div className="flex justify-center gap-1.5">
                {media.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === currentIndex ? "w-6 bg-sky-500" : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
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
                  loading="lazy"
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
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full border border-sky-400 flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
                  <span className="text-sky-500 text-sm font-serif font-style-italic tracking-widest">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}