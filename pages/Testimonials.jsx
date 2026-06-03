import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun S.",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Unmatched luxury. The crew was flawless and the sunset cruise was breathtaking.",
  },
  {
    id: 2,
    name: "Priya P.",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "A floating 5-star hotel. Every single detail was absolute perfection.",
  },
  {
    id: 3,
    name: "Vikram S.",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Premium in every sense of the word. Best corporate retreat we've ever had.",
  },
  {
    id: 4,
    name: "Aisha K.",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Impeccable service and beautiful interiors. Truly an unforgettable anniversary.",
  },
  {
    id: 5,
    name: "Rohan M.",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The food and drinks on the deck were amazing. Highly recommended.",
  },
  {
    id: 6,
    name: "Neha R.",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Sailing under the stars with live music—simply a magical experience.",
  }
];

const StarRating = () => (
  <div className="flex space-x-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-sky-500 text-sky-500" />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-[350px] md:w-[400px] flex-shrink-0 bg-white shadow-sm hover:shadow-md border border-slate-200 rounded-3xl p-8 hover:border-sky-500/30 transition-all duration-300 relative group">
      <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-900/5 group-hover:text-sky-500/10 transition-colors duration-500" />
      <StarRating />
      <p className="text-slate-900 text-lg font-serif italic leading-relaxed mb-8">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
          loading="lazy"
        />
        <div>
          <h4 className="font-sans font-semibold text-slate-900 tracking-wide">
            {testimonial.name}
          </h4>
          <p className="text-sky-500 text-xs tracking-widest uppercase">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials({ dataId }) {
  // Duplicate array for seamless infinite scroll
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-slate-50 py-32 border-t border-slate-200 overflow-hidden" data-id={dataId}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 text-center">
        <span className="text-sky-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Social Proof</span>
        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">
          Guest <span className="text-gradient font-style-italic">Memories</span>
        </h2>
        <div className="inline-flex items-center space-x-3 glass-panel rounded-full px-6 py-2 border border-slate-200">
          <Star className="w-5 h-5 fill-sky-500 text-sky-500" />
          <span className="font-semibold text-slate-900">4.9/5</span>
          <span className="text-slate-500 font-light text-sm">from 200+ elite reviews</span>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left/Right Fade Overlays for seamless scroll effect */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 animate-scroll w-max hover:play-state-paused py-4 px-3">
          {scrollItems.map((testimonial, idx) => (
            <TestimonialCard key={`${testimonial.id}-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); } /* -50% width minus half gap */
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:play-state-paused:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
