import { MapPin, Clock, Car, Navigation, PhoneCall } from "lucide-react";

export default function LocationMap() {
  const infoCards = [
    {
      icon: <MapPin className="w-5 h-5 text-sky-600" />,
      title: "Boarding Point",
      desc: "Gateway of India, Jetty No. 5, Apollo Bunder, Colaba, Mumbai.",
    },
    {
      icon: <Clock className="w-5 h-5 text-sky-600" />,
      title: "Arrival Time",
      desc: "Please reach 15-20 minutes before your scheduled booking time.",
    },
    {
      icon: <Car className="w-5 h-5 text-sky-600" />,
      title: "Parking",
      desc: "Valet and paid parking available near The Taj Mahal Palace hotel.",
    },
    {
      icon: <PhoneCall className="w-5 h-5 text-sky-600" />,
      title: "Ground Staff Support",
      desc: "Our team will guide you from the entry gate directly to the boat.",
    },
  ];

  return (
    <section id="location" className="py-24 md:py-32 bg-white text-slate-900 relative z-10 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 px-3.5 py-1 bg-sky-50 rounded-full border border-sky-100">
            Location & Access
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal mb-4">
            Boarding <span className="font-serif italic text-gradient-sky font-semibold">Location</span>
          </h2>
          <p className="text-slate-500 font-sans font-light max-w-2xl mx-auto text-base sm:text-lg">
            Your trip starts at Gateway of India. Here are the details to help you reach easily.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-1 gap-4">
              {infoCards.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-sky-100 rounded-2xl p-5 flex gap-4 hover:border-sky-300 hover:shadow-md transition-all"
                >
                  <div className="shrink-0 w-11 h-11 bg-white rounded-xl flex items-center justify-center border border-sky-100 shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-slate-900 mb-1">{info.title}</h3>
                    <p className="text-slate-500 font-sans text-xs sm:text-sm font-light leading-relaxed">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Gateway+of+India+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600 text-white font-sans font-bold uppercase tracking-widest text-xs py-4 px-6 rounded-2xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] transition-all group"
            >
              <Navigation className="w-4 h-4 group-hover:animate-bounce" />
              Navigate To Jetty No. 5
            </a>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border border-sky-100 relative min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.423250034659!2d72.83303927496423!3d18.922003156325065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1bd8b35c5c7%3A0xd1541c93c2f2e0f9!2sGateway%20Of%20India%2C%20Apollo%20Bunder%2C%20Colaba%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Boarding Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
