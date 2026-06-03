import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the yacht safe for children?",
    answer: "Yes! We have life jackets and trained staff for child safety.",
  },
  {
    question: "Can we bring our own food and drinks?",
    answer: "No, we provide exclusive onboard catering for all guests.",
  },
  {
    question: "How long is the yacht tour?",
    answer: "Tours range from 2 to 5 hours, depending on package selected.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-navy-950 text-white px-6 md:px-20 relative border-y border-white/5">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
        Frequently Asked <span className="text-gradient font-style-italic">Questions</span>
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass-panel rounded-xl p-6 cursor-pointer hover:border-gold-500/50 hover:shadow-[0_0_20px_rgba(197,160,89,0.1)] transition-all duration-300"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg font-serif">{faq.question}</h3>
              <ChevronDown
                className={`w-6 h-6 text-gold-400 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`mt-2 text-slate-400 transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
