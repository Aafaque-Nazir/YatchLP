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
    <section className="py-20 bg-gray-900 text-white px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl p-4 cursor-pointer border border-gray-700/30"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`mt-2 text-gray-300 transition-all duration-300 overflow-hidden ${
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
