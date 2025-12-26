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
            i < rating ? "fill-yellow-500 text-yellow-500" : "text-slate-700"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-slate-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-800">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-white text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-sm">{testimonial.location}</p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed italic">
        "{testimonial.text}"
      </p>
    </div>
  );
};

const Testimonials = ({ dataId }) => {
  return (
    <section
      className="w-full bg-slate-950 py-16 px-4"
      data-id={dataId}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover why families and professionals across India choose our
            luxury yacht experiences for their most memorable moments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-6 py-3 shadow-md">
            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            <span className="font-semibold text-white">4.6/5</span>
            <span className="text-gray-400">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
