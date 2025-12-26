import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";

export default function EnquiryModal({ isOpen, onClose, prefillPackage }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    package: prefillPackage || "General Enquiry",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to backend. For now, construct a WhatsApp link.
    const message = `Hi! I want to enquire about ${formData.package}. Name: ${formData.name}, Date: ${formData.date}`;
    const url = `https://wa.me/919594793959?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>

          <h3 className="text-2xl font-bold text-white mb-2">Reserve Your Experience</h3>
          <p className="text-slate-400 mb-6">Tell us your plans, and we'll craft the perfect voyage.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Your Name</label>
              <input
                required
                type="text"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
              <input
                required
                type="tel"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Preferred Date</label>
              <input
                type="date"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Select Package</label>
              <select
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
                value={formData.package}
                onChange={(e) => setFormData({ ...formData, package: e.target.value })}
              >
                <option value="Sunset Cruise">Sunset Cruise</option>
                <option value="Party Voyager">Party Voyager</option>
                <option value="VIP Overnight">VIP Overnight</option>
                <option value="Custom Event">Custom Event</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 mt-4 transition-all hover:scale-[1.02]"
            >
              <Send className="w-5 h-5" />
              Send Enquiry
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
