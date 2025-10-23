'use client';

import { QuizProvider, useQuiz } from '@/context/QuizContext';
import { AnimatePresence } from 'framer-motion';
import { StepIndicator } from './StepIndicator';
import { QuizStepWrapper } from './QuizStepWrapper';
import { Step1Sign } from './Step1Sign';
import { GenericQuestionStep } from './GenericQuestionStep';
import { Step11Loading } from './Step11Loading';

const QuizContent = () => {
  const { step } = useQuiz();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1Sign />;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        return <GenericQuestionStep step={step} />;
      case 11:
        return <Step11Loading />;
      default:
        return <div>Etapa desconhecida.</div>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full p-4 overflow-hidden pt-20">
        <div className="absolute top-6 left-0 right-0 p-4 z-20">
            <StepIndicator />
        </div>
        <AnimatePresence mode="wait">
            <QuizStepWrapper key={step}>
              {renderStep()}
            </QuizStepWrapper>
        </AnimatePresence>
    </div>
  );
};

export const QuizFlow = () => {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
};
