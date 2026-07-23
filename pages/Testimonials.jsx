import { Star, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Singhania",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Amazing experience! The crew was helpful and friendly. The sunset cruise near Gateway of India was beautiful.",
  },
  {
    id: 2,
    name: "Priya Parikh",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Very clean yacht and great service! From snacks to music, everything was well organized.",
  },
  {
    id: 3,
    name: "Vikram Sethi",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Hosted our team event on the Party Voyager package. Highly recommended for group parties!",
  },
  {
    id: 4,
    name: "Aisha Kapoor",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Beautiful setup and polite captain. Made our wedding anniversary very special.",
  },
  {
    id: 5,
    name: "Rohan Mehta",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Great music system and delicious food onboard. Easy booking process on WhatsApp.",
  },
];

export default function Testimonials({ dataId }) {
  // Multiply array for seamless infinite auto-scroll
  const scrollItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="w-full bg-white py-24 md:py-32 border-t border-sky-100 overflow-hidden relative" data-id={dataId}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 text-center">
        <span className="inline-block text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 px-3.5 py-1 bg-sky-50 rounded-full border border-sky-100">
          Guest Reviews
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-normal mb-4">
          What Our <span className="font-serif italic text-gradient-sky font-semibold">Guests Say</span>
        </h2>

        <div className="inline-flex items-center gap-3 bg-slate-50 border border-sky-100 rounded-full px-6 py-2 shadow-sm">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-sky-500 text-sky-500" />
            ))}
          </div>
          <span className="font-bold text-slate-900 font-sans text-sm">4.9 / 5.0 Rating</span>
          <span className="text-slate-400 text-xs font-light">• 200+ Happy Trips</span>
        </div>
      </div>

      {/* Auto Scrolling Marquee Track */}
      <div className="relative w-full flex overflow-hidden py-4">
        {/* Left & Right Fade Gradients */}
        <div className="absolute top-0 left-0 bottom-0 w-20 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-20 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6 px-3">
          {scrollItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-slate-50 border border-sky-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sky-200/50 group-hover:text-sky-300/60 transition-colors" />
              
              <div className="flex gap-1 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
                ))}
              </div>

              <p className="text-slate-700 font-sans text-sm leading-relaxed mb-6 font-light">
                "{item.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-sky-200"
                />
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    {item.name}
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                  </h4>
                  <p className="text-[10px] text-sky-600 font-sans font-semibold uppercase tracking-wider">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
