import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Where is the boarding location in Mumbai?",
    answer: "Boarding happens at Gateway of India, Jetty No. 5 (Colaba, Mumbai). Our team will meet you near the entry gate and guide you to the boat.",
  },
  {
    question: "Are life jackets provided onboard?",
    answer: "Yes! We provide life jackets for all age groups (adults & kids). Our boats are equipped with full safety equipment and operated by a trained captain.",
  },
  {
    question: "Can we bring our own food, cake, or drinks?",
    answer: "Yes, you can bring your own cake, food, and drinks. We also offer food and drink arrangements on request.",
  },
  {
    question: "What time should we reach before departure?",
    answer: "Please reach 15 to 20 minutes before your booked time so check-in and boarding is smooth.",
  },
  {
    question: "Is there a washroom on the boat?",
    answer: "Yes! All our yachts have clean, private, and fully working washrooms for your convenience.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-slate-50 text-slate-900 px-6 md:px-10 relative border-t border-sky-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 px-3.5 py-1 bg-sky-100/60 rounded-full border border-sky-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal mb-4">
            Common <span className="font-serif italic text-gradient-sky font-semibold">Questions</span>
          </h2>
          <p className="text-slate-500 text-base font-sans font-light">
            Here are answers to common questions before you book your trip.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-white border border-sky-200 shadow-[0_10px_30px_rgba(2,132,199,0.08)]"
                    : "bg-white/60 border border-slate-200 hover:border-sky-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-5 px-6 md:px-8 text-left group cursor-pointer"
                >
                  <span className={`text-lg sm:text-xl font-serif font-bold transition-colors ${isOpen ? "text-sky-600" : "text-slate-900 group-hover:text-sky-600"}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                      isOpen
                        ? "bg-sky-500 border-sky-500 text-white shadow-md shadow-sky-500/30"
                        : "border-slate-200 text-slate-500 group-hover:border-sky-300 group-hover:text-sky-600"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-6 md:px-8 text-slate-600 font-sans text-sm md:text-base font-light leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
