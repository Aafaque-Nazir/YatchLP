import { motion } from "framer-motion";
import { ShieldCheck, Compass, UtensilsCrossed, Users } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Users className="w-5 h-5 text-sky-600" />,
      title: "Experienced Captain & Crew",
      desc: "Trained staff onboard to make sure your trip is safe, smooth, and enjoyable.",
    },
    {
      icon: <Compass className="w-5 h-5 text-sky-600" />,
      title: "Custom Routes",
      desc: "Flexible sailing routes around Gateway of India, Mandwa, and open seas.",
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-sky-600" />,
      title: "Food & Drinks Onboard",
      desc: "Enjoy fresh snacks, drinks, and custom catering arranged for your group.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-600" />,
      title: "Safe & Private Trips",
      desc: "100% private charters for family, friends, corporate events, and couples.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Dual Overlapping Imagery */}
        <div className="lg:col-span-6 relative h-[480px] sm:h-[560px] w-full flex items-center justify-center">
          {/* Main Back Image */}
          <div className="absolute left-0 top-0 w-[70%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border border-sky-100 z-10">
            <img
              src="/b.jpeg"
              alt="Yacht Deck View"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Overlapping Front Image */}
          <div className="absolute right-0 bottom-0 w-[60%] h-[68%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(2,132,199,0.15)] border-2 border-white z-20">
            <img
              src="/p3.jpeg"
              alt="Luxury Interior Experience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Quality Badge */}
          <div className="absolute -bottom-4 left-6 z-30 bg-white/90 backdrop-blur-xl border border-sky-200 p-4 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-lg font-serif">
              ★
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 font-sans uppercase tracking-wider">Top Quality Fleets</p>
              <p className="text-[11px] text-slate-500 font-sans">Clean & Well Maintained Boats</p>
            </div>
          </div>
        </div>

        {/* Right: Simple Copywriting */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div>
            <span className="inline-block text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 px-3.5 py-1 bg-sky-50 rounded-full border border-sky-100">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-6 font-normal">
              Your Private Gateway <br />
              <span className="font-serif italic text-gradient-sky font-semibold">
                To The Ocean
              </span>
            </h2>

            <p className="text-slate-600 font-sans font-light text-base sm:text-lg leading-relaxed mb-8">
              At Sea Cross, we provide premium speed boats and luxury yacht charters in Mumbai. Whether you want a peaceful sunset cruise, a birthday party on the water, or a quiet weekend getaway, we ensure a comfortable and memorable journey.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-sm border border-sky-100 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <p className="font-sans text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
