import { MapPin, Clock, Car, Navigation, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationMap() {
  const infoCards = [
    {
      icon: <MapPin className="w-6 h-6 text-sky-500" />,
      title: "Boarding Point",
      desc: "Gateway of India, Jetty No. 5, Apollo Bunder, Mumbai."
    },
    {
      icon: <Clock className="w-6 h-6 text-sky-500" />,
      title: "Arrival Time",
      desc: "Please arrive 15-20 minutes prior to your scheduled departure."
    },
    {
      icon: <Car className="w-6 h-6 text-sky-500" />,
      title: "Parking",
      desc: "Valet and paid parking available near The Taj Mahal Palace hotel."
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-sky-500" />,
      title: "Assistance",
      desc: "Dedicated ground crew will assist you from the gate to the yacht."
    }
  ];

  return (
    <section id="location" className="py-24 md:py-32 bg-slate-50 text-slate-900 relative z-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <span className="text-sky-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Logistics</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">
            <span className="text-gradient font-style-italic">Boarding</span> Point
          </h2>
          <p className="text-slate-500 font-light max-w-2xl mx-auto text-lg">
            Your luxury voyage begins at the iconic Gateway of India. Here is everything you need to know before you arrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {infoCards.map((info, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="bg-white border border-slate-200 shadow-sm hover:shadow-md rounded-2xl p-6 flex gap-4 hover:border-sky-500/30 transition-all"
                >
                  <div className="mt-1 flex-shrink-0 w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center border border-sky-100">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-slate-900 mb-2">{info.title}</h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{info.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              href="https://www.google.com/maps/dir/?api=1&destination=Gateway+of+India+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold uppercase tracking-widest py-5 px-8 rounded-2xl shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] group"
            >
              <Navigation className="w-5 h-5 group-hover:animate-bounce" />
              Navigate to Jetty
            </motion.a>
          </div>

          {/* Right: Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative min-h-[400px]"
          >
            {/* Grayscale Map Filter overlay via CSS if desired, but native maps look fine */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.423250034659!2d72.83303927496423!3d18.922003156325065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1bd8b35c5c7%3A0xd1541c93c2f2e0f9!2sGateway%20Of%20India%2C%20Apollo%20Bunder%2C%20Colaba%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
