import { motion } from "framer-motion";
import { Phone, MessageSquare, Send } from "lucide-react";

export default function CTA() {
  return (
    <section id="book" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif mb-6 text-slate-900 leading-tight">
              Ready to <span className="text-gradient font-style-italic">Set Sail?</span>
            </h2>
            <p className="text-lg text-slate-600 font-light mb-10 leading-relaxed max-w-lg">
              Book your premium luxury yacht experience today. Fill out the form or reach out directly, and our concierge will handle the rest.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-10">
              <a
                href="tel:+919594793959"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-md text-slate-900 font-bold rounded-full transition-all duration-300 uppercase tracking-widest text-sm"
              >
                <Phone className="w-5 h-5 text-sky-500" />
                Call Now
              </a>

              <a
                href="https://wa.me/919594793959?text=Hi%21%20I%20want%20to%20book%20a%20yacht%20experience."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 hover:border-green-400/50 shadow-sm hover:shadow-md text-slate-900 font-bold rounded-full transition-all duration-300 uppercase tracking-widest text-sm"
              >
                <MessageSquare className="w-5 h-5 text-green-400" />
                WhatsApp Us
              </a>
            </div>
            
            <div className="flex items-center gap-4 text-slate-500 text-sm tracking-wide">
              <div className="w-12 h-[1px] bg-sky-500/50"></div>
              VIP Support available 24/7
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-3xl p-8 md:p-10 border-t border-l border-slate-200"
          >
            <h3 className="text-2xl font-serif text-slate-900 mb-6">Request a Booking</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide text-slate-600 uppercase">First Name</label>
                  <input type="text" className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-4 py-3 text-slate-900 outline-none transition-all" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide text-slate-600 uppercase">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-4 py-3 text-slate-900 outline-none transition-all" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide text-slate-600 uppercase">Select Voyage</label>
                <select defaultValue="" className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-4 py-3 text-slate-900 outline-none transition-all appearance-none">
                  <option value="" disabled>Choose a package...</option>
                  <option value="sunset">Sunset Cruise (₹15,000)</option>
                  <option value="party">Party Voyager (₹25,000)</option>
                  <option value="vip">VIP Overnight (₹50,000)</option>
                  <option value="custom">Custom Experience</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wide text-slate-600 uppercase">Preferred Date</label>
                <input type="date" className="w-full bg-slate-50/50 border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl px-4 py-3 text-slate-600 outline-none transition-all" required />
              </div>

              <button type="submit" className="w-full mt-4 flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 hover:scale-[1.02]">
                Submit Enquiry
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
