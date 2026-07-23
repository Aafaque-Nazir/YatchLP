import { Check, Sparkles, Clock, Users, ArrowRight } from "lucide-react";

const packages = [
  {
    title: "Sunset Cruise",
    subtitle: "2 Hours Sunset Ride",
    price: "₹15,000",
    duration: "2 Hours",
    guests: "Up to 6 Guests",
    features: [
      "Welcome Drinks & Snacks",
      "Bluetooth Music System",
      "Captain & Crew Included",
      "Gateway of India Sea Sightseeing",
      "Private Sun Deck Access"
    ],
    highlight: false,
  },
  {
    title: "Party Voyager",
    subtitle: "4 Hours Party Package",
    price: "₹25,000",
    duration: "4 Hours",
    guests: "Up to 10 Guests",
    features: [
      "Unlimited Soft Drinks & Mixers",
      "Birthday / Anniversary Decoration",
      "DJ & Speaker System",
      "Photography Support Onboard",
      "Snacks & Finger Food Platter"
    ],
    highlight: true,
  },
  {
    title: "VIP Overnight",
    subtitle: "Overnight Night Stay",
    price: "₹50,000",
    duration: "Overnight Stay",
    guests: "Up to 4 Guests",
    features: [
      "3-Course Dinner Onboard",
      "Luxury Master Bedroom Cabin",
      "Morning Breakfast on Deck",
      "Dedicated Butler Service",
      "Complimentary Drinks"
    ],
    highlight: false,
  },
];

export default function Packages({ onBook }) {
  return (
    <section id="packages" className="py-24 md:py-32 bg-white px-6 lg:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/60 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div>
          <span className="inline-block text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 px-3.5 py-1 bg-sky-50 rounded-full border border-sky-100">
            Our Packages
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-normal mb-4">
            Choose Your <span className="font-serif italic text-gradient-sky font-semibold">Package</span>
          </h2>
          <p className="text-slate-600 font-sans font-light max-w-2xl mx-auto text-base sm:text-lg">
            Pick the right package for your sunset cruise, party, or night stay in Mumbai.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10 items-stretch">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative rounded-3xl flex flex-col transition-all duration-500 ${
              pkg.highlight
                ? "bg-gradient-to-b from-sky-400 via-blue-600 to-sky-500 p-[2px] shadow-[0_20px_40px_rgba(2,132,199,0.2)] lg:-translate-y-4"
                : "bg-white border border-sky-100 shadow-[0_10px_30px_rgba(2,132,199,0.06)] hover:border-sky-300 hover:shadow-xl"
            }`}
          >
            <div className="h-full rounded-[22px] bg-white p-8 flex flex-col justify-between">
              <div>
                {/* Popular Badge */}
                {pkg.highlight && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-md">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-slate-900 mb-1">{pkg.title}</h3>
                <p className="text-xs text-sky-600 font-sans font-medium uppercase tracking-wider mb-6">{pkg.subtitle}</p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-none">{pkg.price}</span>
                  <span className="text-xs text-slate-400 font-sans">/ charter</span>
                </div>

                <div className="flex items-center gap-4 text-xs font-sans text-slate-500 border-y border-slate-100 py-3 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-sky-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-sky-500" />
                    <span>{pkg.guests}</span>
                  </div>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-sans text-slate-600">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onBook(pkg.title)}
                className={`w-full py-4 rounded-xl font-sans font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  pkg.highlight
                    ? "bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.02]"
                    : "bg-slate-50 border border-slate-200 text-slate-900 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600"
                }`}
              >
                <span>Book {pkg.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
