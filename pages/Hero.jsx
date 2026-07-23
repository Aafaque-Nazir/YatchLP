import { MessageSquare } from "lucide-react";

export default function Hero({ onBook }) {
  const stats = [
    { label: "Our Fleet", value: "15+ Yachts" },
    { label: "Happy Guests", value: "5,000+" },
    { label: "Guest Rating", value: "4.9 / 5.0" },
    { label: "Support", value: "24/7 Available" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-between text-center overflow-hidden bg-slate-900 pt-28 pb-12">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/v1.mp4" type="video/mp4" />
      </video>

      {/* Clean Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/85 z-[5]" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl px-6 flex flex-col items-center my-auto">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-normal mb-6 tracking-tight leading-[1.05] drop-shadow-2xl">
          Experience Premium <br className="hidden sm:block" />
          <span className="font-serif italic text-gradient-sky font-semibold">
            Yacht Rides In Mumbai
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-sans font-light leading-relaxed mb-10 drop-shadow-md px-2">
          Book private speed boats and luxury yachts for sunset cruises, parties, and special celebrations at Gateway of India.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
          <button
            onClick={() => onBook("")}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 text-white font-sans font-bold uppercase tracking-widest text-xs rounded-full shadow-[0_0_30px_rgba(2,132,199,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(2,132,199,0.7)] cursor-pointer"
          >
            Explore & Book Now
          </button>

          <a
            href="https://wa.me/919594793959?text=Hi%21%20I%20want%20to%20book%20a%20yacht%20experience."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-sans font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Stats Counter Strip */}
      <div className="relative z-10 w-full max-w-6xl px-6 mt-12">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 shadow-2xl">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center border-r last:border-r-0 border-white/15 px-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs font-sans text-sky-200 uppercase tracking-widest font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
