import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const targetDate = new Date("2026-04-16T00:00:00");

const getTimeLeft = (): TimeLeft => {
  const now = new Date().getTime();
  const distance = Math.max(targetDate.getTime() - now, 0);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-[#F7F4EF] rounded-3xl px-6 md:px-8 py-6 md:py-8 border border-[#E4D7C8]">
      <div className="text-center">
        <p className="text-[10px] md:text-xs tracking-[0.18em] uppercase text-[#6B705C]">
          Until we say “I do”
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#6B705C]/20 bg-white flex flex-col items-center justify-center shadow-sm">
                <span className="font-serif text-xl md:text-2xl text-[#6B705C]">
                  {item.value.toString().padStart(2, "0")}
                </span>
                <span className="mt-1 text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-slate-500">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;

