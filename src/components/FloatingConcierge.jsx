import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function FloatingConcierge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3 items-end"
    >
      <a
        href="https://wa.me/919594793959?text=Hi%21%20I%20want%20to%20book%20a%20yacht%20experience."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5" />
        <span className="hidden md:inline font-sans text-xs uppercase tracking-widest font-bold">
          WhatsApp Us
        </span>
      </a>
    </motion.div>
  );
}
