'use client';

import { useState, useEffect } from 'react';
import { TimerIcon } from 'lucide-react';

export const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);

      const difference = endOfDay.getTime() - now.getTime();

      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / 1000 / 60) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-6 w-full max-w-md mx-auto">
      <div className="bg-red-500/10 border border-red-500 text-white rounded-lg p-3 text-center animate-pulse">
        <div className="flex items-center justify-center gap-2">
          <TimerIcon className="h-5 w-5 text-red-400" />
          <p className="font-headline text-sm sm:text-base">
            O PORTAL SE FECHA EM:
          </p>
        </div>
        <div className="font-bold text-xl sm:text-2xl tracking-widest mt-1">
          {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </div>
      </div>
    </div>
  );
};
