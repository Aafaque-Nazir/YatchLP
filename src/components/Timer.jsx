import { useEffect, useState } from "react";

export default function CountdownBanner() {
  const targetDate = new Date("2025-08-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-1 px-4 text-sm md:text-base z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 font-semibold">
        <span className="uppercase tracking-wide">⏳ Limited Time Offer!</span>
        <div className="flex gap-4 text-center">
          <div>
            <span className="text-xl md:text-2xl block">{timeLeft.days}</span>
            <small>Days</small>
          </div>
          <div>
            <span className="text-xl md:text-2xl block">{timeLeft.hours}</span>
            <small>Hours</small>
          </div>
          <div>
            <span className="text-xl md:text-2xl block">{timeLeft.minutes}</span>
            <small>Mins</small>
          </div>
          <div>
            <span className="text-xl md:text-2xl block">{timeLeft.seconds}</span>
            <small>Secs</small>
          </div>
        </div>
      </div>
    </div>
  );
}
