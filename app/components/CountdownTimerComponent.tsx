"use client";

import { useEffect, useMemo, useState } from "react";
import { TimeUnit } from "./TimeUnitComponent";

const CountdownTimerComponent = () => {
  const currentYear = new Date().getFullYear();
  const christmasThisYear = new Date(`${currentYear}-12-25T00:00:00`);
  const dateNow = new Date();

  const targetDate =
    dateNow > christmasThisYear
      ? `${currentYear + 1}-12-25T00:00:00`
      : `${currentYear}-12-25T00:00:00`;

  const target = useMemo(() => new Date(targetDate), [targetDate]);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof calculateTimeLeft
  > | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  if (!mounted || !timeLeft) {
    return (
      <div className="backdrop-blur-lg border-4 border-yellow-400 rounded-3xl p-6 md:p-10 shadow-2xl h-32 md:h-40 flex items-center justify-center">
        <div className="text-yellow-300 text-lg">Loading...</div>
      </div>
    );
  }

  if (timeLeft.expired) {
    return (
      <div className="text-center backdrop-blur-lg p-10">
        <h1 className="text-5xl md:text-8xl font-bold text-yellow-300 mb-4">
          Merry Christmas!
        </h1>
        <p className="text-xl lg:text-2xl text-white">
          Wishing you joy, warmth, and magical moments today!
        </p>
      </div>
    );
  }

  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="backdrop-blur-lg border-4 border-yellow-400 rounded-3xl p-4 md:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex flex-col items-center">
          <TimeUnit value={String(timeLeft.days)} label="Days" />
        </div>

        {/* hide colons on phones, show on md+ */}
        <div className="hidden md:block text-4xl md:text-6xl text-yellow-400 font-bold">
          :
        </div>

        <div className="flex flex-col items-center">
          <TimeUnit value={pad(timeLeft.hours)} label="Hours" />
        </div>

        <div className="hidden md:block text-4xl md:text-6xl text-yellow-400 font-bold">
          :
        </div>

        <div className="flex flex-col items-center">
          <TimeUnit value={pad(timeLeft.minutes)} label="Minutes" />
        </div>

        <div className="hidden md:block text-4xl md:text-6xl text-yellow-400 font-bold">
          :
        </div>

        <div className="flex flex-col items-center">
          <TimeUnit value={pad(timeLeft.seconds)} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimerComponent;
