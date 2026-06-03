// LocationMap.jsx
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="py-24 bg-navy-900 text-center text-white border-t border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-serif mb-4 flex items-center justify-center gap-4">
          <MapPin className="w-10 h-10 text-gold-400" />
          <span className="text-gradient font-style-italic">Find Us</span> Here
        </h2>
        <p className="text-slate-300 font-light mb-12 text-lg md:text-xl">
          Visit us at the iconic Gateway of India, Mumbai
        </p>

        {/* Map container */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.423250034659!2d72.83303927496423!3d18.922003156325065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1bd8b35c5c7%3A0xd1541c93c2f2e0f9!2sGateway%20Of%20India%2C%20Apollo%20Bunder%2C%20Colaba%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-12">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Gateway+of+India+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-bold uppercase tracking-widest py-4 px-10 rounded-full shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]"
          >
            🚗 Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
