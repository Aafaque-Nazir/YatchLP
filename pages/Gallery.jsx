import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export default function Gallery() {
  const media = [
    { type: "image", src: "/p1.jpeg" },
    { type: "image", src: "/p2.jpeg" },
    { type: "image", src: "/p3.jpeg" },
    { type: "video", src: "/v2.mp4" },
    { type: "image", src: "/p9.jpeg" },
    { type: "image", src: "/p5.jpeg" },
    { type: "video", src: "/v3.mp4" },
    { type: "image", src: "/p6.jpeg" },
    { type: "image", src: "/p10.jpeg" },
    { type: "video", src: "/v4.mp4" },
    { type: "video", src: "/v5.mp4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 640) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  }, [media.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  // Auto-play
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % media.length;
      items.push({ ...media[index], id: index }); // Add id for key
    }
    return items;
  };

  return (
    <section className="py-24 px-4 md:px-10 bg-gray-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Explore the Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Witness the luxury and excitement that awaits you.
          </p>
        </motion.div>

        <div className="relative group">
          {/* Slider Content */}
          <div className="flex justify-center gap-6 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {getVisibleItems().map((item, i) => (
                <motion.div
                  key={`${item.src}-${i}`} // Unique key for animation
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-sm flex-shrink-0 bg-gray-900 border border-gray-800`}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt="Gallery"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      autoPlay
                      loop
                      playsInline
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium tracking-wide">
                      Luxury Yacht Life
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Pagination & Play/Pause */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <div className="flex gap-2">
            {media.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-blue-500 w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}