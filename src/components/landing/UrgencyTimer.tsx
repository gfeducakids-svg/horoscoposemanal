'use client';

import { useState, useEffect } from 'react';
import { TimerIcon } from 'lucide-react';

const STORAGE_KEY = 'cosmic-portal-timer-end';
const COUNTDOWN_FROM = 22 * 3600 + 1 * 60 + 20; // 22 hours, 1 minute, 20 seconds in seconds

export const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_FROM);
  const [isInitialized, setIsInitialized] = useState(false);


  useEffect(() => {
    // This effect runs only once on the client to initialize the timer from localStorage
    const storedEndTime = localStorage.getItem(STORAGE_KEY);
    const now = Math.floor(Date.now() / 1000);

    if (storedEndTime) {
      const endTime = parseInt(storedEndTime, 10);
      const remainingTime = endTime - now;
      if (remainingTime > 0) {
        setTimeLeft(remainingTime);
      } else {
        setTimeLeft(0);
      }
    } else {
      const newEndTime = now + COUNTDOWN_FROM;
      localStorage.setItem(STORAGE_KEY, newEndTime.toString());
      setTimeLeft(COUNTDOWN_FROM);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    // This effect runs the countdown interval
    if (!isInitialized || timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isInitialized, timeLeft]);

  const formatTime = (totalSeconds: number) => {
    if (totalSeconds <= 0) {
      return { hours: '00', minutes: '00', seconds: '00' };
    }
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const formattedTime = formatTime(timeLeft);

  return (
    <div className="mb-6 w-full max-w-md mx-auto">
      <div className="bg-urgency-red/10 border border-urgency-red text-white rounded-lg p-3 text-center animate-pulse">
        <div className="flex items-center justify-center gap-2">
          <TimerIcon className="h-5 w-5 text-urgency-red" />
          <p className="font-headline text-sm sm:text-base">
            O PORTAL CÓSMICO SE FECHA EM:
          </p>
        </div>
        <div className="font-bold text-xl sm:text-2xl tracking-widest mt-1">
          {isInitialized ? `${formattedTime.hours}:${formattedTime.minutes}:${formattedTime.seconds}` : '22:01:20'}
        </div>
      </div>
    </div>
  );
};
