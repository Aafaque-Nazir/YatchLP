import { motion } from "framer-motion";
import { Utensils, Music, Wine, Sun, Anchor, Camera } from "lucide-react";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="amenities" className="py-24 px-6 md:px-10 bg-navy-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">Onboard Luxury</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
            The Sea Cros <span className="text-gradient font-style-italic">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Every detail meticulously curated to ensure your voyage is nothing short of extraordinary.
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]"
        >
          
          {/* Large Item: Gourmet Dining */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/p3.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/20">
                <Utensils className="text-gold-400 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-2">Gourmet Dining</h3>
              <p className="text-slate-300 font-light text-lg">Exquisite culinary experiences prepared by our private onboard chefs.</p>
            </div>
          </motion.div>

          {/* Medium Item: Sun Deck */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden group bg-navy-900 border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative h-full p-8 flex flex-col justify-center">
              <Sun className="text-gold-400 w-8 h-8 mb-4" />
              <h3 className="text-2xl font-serif text-white mb-2">Panoramic Sun Decks</h3>
              <p className="text-slate-400 font-light">Spacious lounging areas to soak in the golden hour.</p>
            </div>
          </motion.div>

          {/* Small Item: Premium Bar */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1 row-span-1 relative rounded-3xl overflow-hidden group bg-navy-900/50 backdrop-blur-sm border border-white/5 p-8 flex flex-col justify-center items-center text-center hover:border-gold-500/30 transition-colors">
            <Wine className="text-gold-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-serif text-white">Premium Bar</h3>
          </motion.div>

          {/* Small Item: Entertainment */}
          <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1 row-span-1 relative rounded-3xl overflow-hidden group bg-navy-900/50 backdrop-blur-sm border border-white/5 p-8 flex flex-col justify-center items-center text-center hover:border-gold-500/30 transition-colors">
            <Music className="text-gold-400 w-10 h-10 mb-4" />
            <h3 className="text-xl font-serif text-white">Live DJ & Music</h3>
          </motion.div>

          {/* Wide Item: Photography */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-4 row-span-1 relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/b.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-navy-950/60 group-hover:bg-navy-950/40 transition-colors duration-500"></div>
            <div className="absolute inset-0 p-8 flex items-center justify-between">
              <div>
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mb-3">
                  <Camera className="text-gold-400 w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Drone & Photography</h3>
                <p className="text-slate-300 font-light max-w-md">Capture your memories from every breathtaking angle.</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
