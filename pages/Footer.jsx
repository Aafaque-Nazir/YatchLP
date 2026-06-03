export default function Footer() {
  return (
    <footer className="py-12 text-center bg-navy-950 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <img src="/Logo.png" alt="Sea Cros" className="w-16 h-16 mb-6 opacity-80 hover:opacity-100 transition-opacity" />
        <p className="text-gold-300 font-serif text-xl tracking-widest uppercase mb-2">Sea Cros</p>
        <p className="text-slate-400 font-light text-sm tracking-wide">Premium Yacht Experiences</p>
        <div className="w-24 h-[1px] bg-gold-500/30 my-8"></div>
        <p className="text-slate-500 text-xs tracking-wider">
          © {new Date().getFullYear()} Sea Cros. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}