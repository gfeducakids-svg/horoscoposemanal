'use client';

import { useQuiz } from '@/context/QuizContext';
import { Star } from 'lucide-react';

export function StepIndicator() {
  const { step } = useQuiz();
  const totalSteps = 10;
  
  // In the loading step, show full progress
  const currentProgress = step > totalSteps ? totalSteps : step;

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <div className="flex items-center justify-center gap-1.5 mb-1">
        {[...Array(totalSteps)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 transition-colors duration-500 ${
              i < currentProgress ? 'text-yellow-400 fill-yellow-400' : 'text-primary'
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-slate-400 font-body">{currentProgress} / {totalSteps}</p>
    </div>
  );
}
