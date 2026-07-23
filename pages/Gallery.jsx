import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ZoomIn } from "lucide-react";

export default function Gallery() {
  const mediaItems = [
    { type: "image", category: "decks", src: "/p1.jpeg", title: "Main Lounge Deck", span: "md:col-span-2 md:row-span-2" },
    { type: "video", category: "sunsets", src: "/v2.mp4", title: "Sunset Ocean Sail", span: "md:col-span-1 md:row-span-2" },
    { type: "image", category: "celebrations", src: "/p3.jpeg", title: "Dining Setup", span: "md:col-span-1 md:row-span-1" },
    { type: "image", category: "decks", src: "/p2.jpeg", title: "Cockpit View", span: "md:col-span-1 md:row-span-1" },
    { type: "video", category: "celebrations", src: "/v3.mp4", title: "Night Party", span: "md:col-span-2 md:row-span-2" },
    { type: "image", category: "sunsets", src: "/p5.jpeg", title: "Gateway Views", span: "md:col-span-2 md:row-span-1" },
    { type: "image", category: "decks", src: "/p6.jpeg", title: "Sun Deck", span: "md:col-span-1 md:row-span-1" },
    { type: "image", category: "celebrations", src: "/p9.jpeg", title: "Private Party Setup", span: "md:col-span-1 md:row-span-1" },
    { type: "video", category: "sunsets", src: "/v4.mp4", title: "Open Sea Sail", span: "md:col-span-2 md:row-span-2" },
    { type: "image", category: "sunsets", src: "/p10.jpeg", title: "Sunset Panorama", span: "md:col-span-2 md:row-span-2" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filteredMedia = activeFilter === "all"
    ? mediaItems
    : mediaItems.filter(item => item.category === activeFilter);

  const filterTabs = [
    { id: "all", label: "All" },
    { id: "decks", label: "Yacht Decks" },
    { id: "sunsets", label: "Sunset Cruises" },
    { id: "celebrations", label: "Parties" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 lg:px-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 px-3.5 py-1 bg-sky-100/60 rounded-full border border-sky-200">
              Our Gallery
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-normal">
              Photos & <span className="font-serif italic text-gradient-sky font-semibold">Videos</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-full border border-sky-100 shadow-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item, index) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                onClick={() => setActiveLightbox(item)}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-sky-100 shadow-sm hover:shadow-xl transition-all ${item.span}`}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white backdrop-blur-[2px]">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      {item.type === "video" ? <Play className="w-4 h-4 fill-white" /> : <ZoomIn className="w-4 h-4" />}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-sky-300 font-bold">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-serif font-bold">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLightbox(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] w-full rounded-3xl overflow-hidden shadow-2xl z-10 bg-slate-900 border border-white/20"
            >
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-black/50 text-white hover:bg-black rounded-full transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {activeLightbox.type === "image" ? (
                <img
                  src={activeLightbox.src}
                  alt={activeLightbox.title}
                  className="w-full h-full max-h-[80vh] object-contain mx-auto"
                />
              ) : (
                <video
                  src={activeLightbox.src}
                  controls
                  autoPlay
                  className="w-full h-full max-h-[80vh] object-contain mx-auto"
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}