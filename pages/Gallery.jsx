import { motion } from "framer-motion";

export default function Gallery() {
  const media = [
    { type: "image", src: "/p1.jpeg", span: "md:col-span-2 md:row-span-2" },
    { type: "video", src: "/v2.mp4", span: "md:col-span-1 md:row-span-2" },
    { type: "image", src: "/p3.jpeg", span: "md:col-span-1 md:row-span-1" },
    { type: "image", src: "/p5.jpeg", span: "md:col-span-2 md:row-span-1" },
    { type: "image", src: "/p9.jpeg", span: "md:col-span-1 md:row-span-2" },
    { type: "video", src: "/v4.mp4", span: "md:col-span-2 md:row-span-2" },
    { type: "image", src: "/p10.jpeg", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-32 px-4 md:px-10 bg-navy-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Visual Proof</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              A Glimpse of <br/>
              <span className="text-gradient font-style-italic">Paradise</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 max-w-sm text-lg font-light pb-2"
          >
            Moments captured on our vessels. The ocean is calling, and this is what it looks like to answer.
          </motion.p>
        </div>

        {/* Premium Masonry / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
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