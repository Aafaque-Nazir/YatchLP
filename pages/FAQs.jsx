import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is the yacht safe for kids?",
    answer: "Yes, absolutely! We provide life jackets for all ages, and our crew is trained to make sure families have a safe and fun trip.",
  },
  {
    question: "Can we bring our own food and drinks?",
    answer: "We offer great food and drinks on board. However, if you have special diet needs or baby food, you can definitely bring it along.",
  },
  {
    question: "How long is the boat ride?",
    answer: "Our standard trips last anywhere from 2 to 5 hours, depending on the package you book. We can also do longer trips on request.",
  },
  {
    question: "Where do we get on the boat?",
    answer: "You will board the yacht at the Gateway of India, Jetty No. 5 in Mumbai. Our team will meet you there to guide you.",
  },
  {
    question: "Is there a washroom on the yacht?",
    answer: "Yes! All our yachts have clean, fully working, and private washrooms for your comfort.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-slate-50 text-slate-900 px-6 md:px-10 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Help Details</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Common <span className="text-gradient font-style-italic">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Everything you need to know before you book your trip.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border-b border-slate-200 transition-all duration-300 ${isOpen ? "bg-white shadow-md rounded-2xl border-transparent" : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 px-4 md:px-8 text-left group"
                >
                  <span className={`text-xl font-serif transition-colors duration-300 ${isOpen ? "text-sky-500" : "text-slate-900 group-hover:text-sky-400"}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "border-sky-500 bg-sky-500/10" : "border-slate-200 group-hover:border-slate-200"}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-sky-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-900" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 px-4 md:px-8 text-slate-600 text-lg font-light leading-relaxed">
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
