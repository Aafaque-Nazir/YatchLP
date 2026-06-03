import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The yacht experience was absolutely phenomenal! The crew was professional and the vessel was pristine. Our family celebration became unforgettable thanks to this amazing service.",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Luxury redefined! From the moment we stepped aboard, everything was perfect. The attention to detail and hospitality made our anniversary cruise truly magical.",
  },

  {
    id: 5,
    name: "Vikram Singh",
    location: "Delhi, India",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Perfect for corporate events! We hosted our team retreat on the yacht and it exceeded all expectations. Professional service and an unforgettable experience.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-gold-400 text-gold-400" : "text-navy-800"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="glass-panel rounded-xl p-8 hover:shadow-[0_0_30px_rgba(197,160,89,0.15)] transition-all duration-500 hover:-translate-y-2 border-t border-t-white/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-10 text-9xl font-serif leading-none group-hover:text-gold-400 transition-colors duration-500">
        "
      </div>
      <div className="flex items-center mb-6 relative z-10">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-gold-500/50 p-1"
        />
        <div>
          <h4 className="font-serif font-semibold text-white text-xl">
            {testimonial.name}
          </h4>
          <p className="text-gold-300 text-sm tracking-widest uppercase mb-1">{testimonial.location}</p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      <p className="text-slate-300 leading-relaxed font-light italic text-lg relative z-10">
        "{testimonial.text}"
      </p>
    </div>
  );
};

const Testimonials = ({ dataId }) => {
  return (
    <section
      className="w-full bg-navy-950 py-24 px-4 border-t border-white/5"
      data-id={dataId}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Guest <span className="text-gradient font-style-italic">Memories</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Discover why families and professionals across India choose our
            luxury yacht experiences for their most memorable moments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 glass-panel rounded-full px-8 py-4 shadow-xl">
            <Star className="w-6 h-6 fill-gold-400 text-gold-400" />
            <span className="font-semibold text-white text-lg">4.9/5</span>
            <span className="text-slate-400 font-light tracking-wide">| from 200+ elite reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
