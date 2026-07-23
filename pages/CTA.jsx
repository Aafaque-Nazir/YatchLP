import { Phone, MessageSquare, Send, Calendar, User, Compass } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "Sunset Cruise",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*SEA CROSS YACHT ENQUIRY*\n------------------------------\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Package:* ${formData.package}\n• *Date:* ${formData.date || "Flexible"}\n------------------------------\nHi! I would like to book this yacht experience.`;
    const url = `https://wa.me/919594793959?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="book" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden border-t border-sky-100">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content & Hotlines */}
          <div>
            <span className="inline-block text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 px-3.5 py-1 bg-sky-100/60 rounded-full border border-sky-200">
              Book Your Trip
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 font-normal leading-tight mb-6">
              Book Your Yacht <br />
              <span className="font-serif italic text-gradient-sky font-semibold">Today</span>
            </h2>
            <p className="text-slate-600 font-sans font-light text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
              Fill in your details below or call us directly. Our team will help you choose the right boat and confirm availability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+919594793959"
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white border border-sky-200 hover:border-sky-500 shadow-sm hover:shadow-md text-slate-900 font-sans font-bold rounded-full transition-all uppercase tracking-widest text-xs"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                Call +91 95947 93959
              </a>

              <a
                href="https://wa.me/919594793959?text=Hi%21%20I%20want%20to%20book%20a%20yacht%20experience."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold rounded-full transition-all uppercase tracking-widest text-xs shadow-md shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Direct
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-500 text-xs font-sans">
              <div className="w-10 h-[1px] bg-sky-400" />
              <span>Instant Response • Available 24/7</span>
            </div>
          </div>

          {/* Right: Booking Request Form Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sky-100 shadow-[0_20px_50px_rgba(2,132,199,0.1)] relative">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Request A Booking</h3>
            <p className="text-xs text-slate-500 font-sans mb-6">Select your dates and package to check availability.</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-sky-500" /> Your Name
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
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-sky-500" /> Phone Number
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-sky-500" /> Package
                  </label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                    value={formData.package}
                    onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                  >
                    <option value="Sunset Cruise">Sunset Cruise</option>
                    <option value="Party Voyager">Party Voyager</option>
                    <option value="VIP Overnight">VIP Overnight</option>
                    <option value="Custom Private Event">Custom Event</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-500" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 text-white font-sans font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Enquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
