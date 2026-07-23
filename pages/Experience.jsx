import { Utensils, Music, Wine, Sun, Anchor, Sparkles } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 lg:px-12 bg-slate-50 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 px-3.5 py-1 bg-sky-100/60 rounded-full border border-sky-200">
            Onboard Features
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-normal mb-4">
            What You Get <span className="font-serif italic text-gradient-sky font-semibold">Onboard</span>
          </h2>
          <p className="text-slate-600 font-sans font-light max-w-2xl mx-auto text-base sm:text-lg">
            Everything you need for a comfortable, fun, and memorable boat ride.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {/* Card 1: Sun Decks */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 relative rounded-3xl overflow-hidden group shadow-[0_10px_30px_rgba(2,132,199,0.08)] border border-sky-100">
            <div className="absolute inset-0 bg-[url('/p3.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                <Sun className="text-sky-300 w-6 h-6" />
              </div>
              <span className="text-sky-300 font-sans text-xs font-bold uppercase tracking-widest mb-1">Open Air Deck</span>
              <h3 className="text-3xl font-serif font-bold mb-2">Spacious Sun Decks</h3>
              <p className="text-slate-200 font-sans font-light text-sm max-w-md">
                Open lounging area to relax, enjoy the sea breeze, and take great photos during golden hour.
              </p>
            </div>
          </div>

          {/* Card 2: Food & Drinks */}
          <div className="md:col-span-1 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden bg-white p-8 border border-sky-100 shadow-[0_10px_30px_rgba(2,132,199,0.05)] hover:border-sky-300 transition-all flex flex-col justify-between group">
            <div className="flex items-start justify-between">
              <div className="p-3 bg-sky-50 text-sky-600 rounded-2xl border border-sky-100">
                <Utensils className="w-6 h-6" />
              </div>
              <Sparkles className="w-5 h-5 text-sky-400 opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">Food & Catering</h3>
              <p className="text-slate-500 font-sans font-light text-xs sm:text-sm">
                Delicious snacks, fruit platters, and customized meal setups served right on the boat.
              </p>
            </div>
          </div>

          {/* Card 3: Bar & Drinks */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative rounded-3xl overflow-hidden bg-white p-6 border border-sky-100 shadow-[0_10px_30px_rgba(2,132,199,0.05)] hover:border-sky-300 transition-all flex flex-col items-center justify-center text-center group">
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-3 border border-sky-100 group-hover:scale-110 transition-transform">
              <Wine className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900">Drinks & Bar</h3>
            <p className="text-xs text-slate-500 font-light mt-1">Soft drinks & beverages onboard</p>
          </div>

          {/* Card 4: Music & DJ */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 relative rounded-3xl overflow-hidden bg-white p-6 border border-sky-100 shadow-[0_10px_30px_rgba(2,132,199,0.05)] hover:border-sky-300 transition-all flex flex-col items-center justify-center text-center group">
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-3 border border-sky-100 group-hover:scale-110 transition-transform">
              <Music className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900">Music & Sound System</h3>
            <p className="text-xs text-slate-500 font-light mt-1">Bluetooth speakers & DJ setup</p>
          </div>

          {/* Card 5: Cabins */}
          <div className="md:col-span-3 lg:col-span-4 row-span-1 relative rounded-3xl overflow-hidden group shadow-[0_10px_30px_rgba(2,132,199,0.08)] border border-sky-100">
            <div className="absolute inset-0 bg-[url('/b.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-950/60 transition-colors" />
            <div className="absolute inset-0 p-8 flex flex-col md:flex-row items-start md:items-center justify-between z-10 text-white">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Anchor className="text-sky-300 w-5 h-5" />
                  <span className="text-sky-300 font-sans text-xs font-bold uppercase tracking-widest">Air Conditioned</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Comfortable Cabins</h3>
                <p className="text-slate-300 font-sans font-light text-sm">
                  Clean, air-conditioned rooms with private washrooms for resting or overnight trips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
