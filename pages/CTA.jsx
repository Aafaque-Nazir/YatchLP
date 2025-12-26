import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
      {/* Optional subtle background glow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
          Ready to Sail?
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-10">
          Book your luxury yacht experience now and make unforgettable memories.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* Call Button */}
          <a
            href="tel:+919594793959"
            className="flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white font-bold rounded-2xl shadow-lg hover:bg-yellow-700 transition transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>

          {/* WhatsApp Button */}
         <a
  href="https://wa.me/919594793959?text=Hi%21%20I%20want%20to%20book%20a%20yacht%20experience."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-6 py-3 border border-slate-600 text-white font-bold rounded-2xl shadow-lg hover:bg-slate-800 transition transform hover:scale-105"
>
  <MessageSquare className="w-5 h-5" />
  WhatsApp Us
</a>
        </div>
      </motion.div>
    </section>
  );
}
