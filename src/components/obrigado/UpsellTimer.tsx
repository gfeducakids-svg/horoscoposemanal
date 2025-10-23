'use client';

import { useState, useEffect } from 'react';
import { TimerIcon } from 'lucide-react';

const STORAGE_KEY = 'cosmic-upsell-timer-end';
const COUNTDOWN_FROM = 13 * 60; // 13 minutes in seconds

export const UpsellTimer = () => {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_FROM);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
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
      return { minutes: '00', seconds: '00' };
    }
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const formattedTime = formatTime(timeLeft);

  if (!isInitialized || timeLeft <= 0) {
      return null;
  }

  return (
    <div className="sticky top-0 z-20 mb-8 py-2 bg-light-lilac/80 backdrop-blur-sm">
      <div className="bg-urgency-red/90 border border-white/50 text-white rounded-lg p-2 text-center shadow-lg">
        <div className="flex items-center justify-center gap-2">
          <TimerIcon className="h-5 w-5" />
          <p className="font-headline text-sm sm:text-base font-bold">
            Esta oferta expira em:
          </p>
           <div className="font-bold text-lg sm:text-xl tracking-widest">
            {isInitialized ? `${formattedTime.minutes}:${formattedTime.seconds}` : '13:00'}
          </div>
        </div>
      </div>
    </div>
  );
};
