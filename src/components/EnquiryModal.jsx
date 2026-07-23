import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Anchor, Calendar, Phone, User, Compass } from "lucide-react";
import { useState, useEffect } from "react";

export default function EnquiryModal({ isOpen, onClose, prefillPackage }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    package: "Sunset Cruise",
  });

  useEffect(() => {
    if (prefillPackage) {
      setFormData((prev) => ({ ...prev, package: prefillPackage }));
    }
  }, [prefillPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*SEA CROSS YACHT ENQUIRY*\n------------------------------\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Date:* ${formData.date || "Flexible"}\n• *Package:* ${formData.package}\n------------------------------\nHi! I want to check availability for this yacht trip.`;
    const url = `https://wa.me/919594793959?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 overflow-y-auto py-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-white border border-sky-100 rounded-3xl p-8 shadow-[0_25px_50px_-12px_rgba(2,132,199,0.25)] z-10"
        >
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-sky-400 via-blue-600 to-sky-400 rounded-b-full" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-sky-50 text-sky-600 rounded-2xl border border-sky-100">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-sky-600">Quick Enquiry</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-none mt-0.5">
                Book Your Yacht Experience
              </h3>
            </div>
          </div>
          <p className="text-slate-500 text-sm font-light mb-6">
            Fill in your details below to get instant booking confirmation on WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-sky-500" /> Full Name
              </label>
              <input
                required
                type="text"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                placeholder="Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-500" /> Phone Number / WhatsApp
              </label>
              <input
                required
                type="tel"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-500" /> Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-sky-500" /> Select Package
                </label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                  value={formData.package}
                  onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                >
                  <option value="Sunset Cruise">Sunset Cruise (₹15,000)</option>
                  <option value="Party Voyager">Party Voyager (₹25,000)</option>
                  <option value="VIP Overnight">VIP Overnight (₹50,000)</option>
                  <option value="Custom Private Event">Custom Event</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 text-white font-bold rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-100 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Send Enquiry on WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
