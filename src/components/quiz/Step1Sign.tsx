'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuiz } from '@/context/QuizContext';
import { zodiacSigns, type Sign } from '@/lib/quiz-data';
import ZodiacIcon from '@/components/icons/ZodiacIcon';
import { Button } from '@/components/ui/button';
import { SignCalculator } from './SignCalculator';

export function Step1Sign() {
  const { answers, setAnswer, nextStep } = useQuiz();
  const [selectedSign, setSelectedSign] = useState<Sign | null>(null);
  const [isCalculatorOpen, setCalculatorOpen] = useState(false);

  const handleSelect = (sign: Sign) => {
    setAnswer('sign', sign);
    setSelectedSign(sign);
  };
  
  const handleCalculatorSignSelect = (sign: Sign) => {
    setCalculatorOpen(false);
    handleSelect(sign);
  };

  const currentSignData = zodiacSigns.find(s => s.id === selectedSign);

  return (
    <>
      <AnimatePresence mode="wait">
        {!selectedSign ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <div className="text-center">
              <h1 className="font-headline text-2xl md:text-4xl font-bold text-slate-100 mb-2">
                Primeira coisa: vamos conectar com sua energia solar ☀️
              </h1>
              <p className="font-body text-slate-300 mb-8">Qual é o seu signo solar?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                {zodiacSigns.map((sign) => (
                  <Button
                    key={sign.id}
                    variant="outline"
                    onClick={() => handleSelect(sign.id)}
                    className="flex flex-col items-center justify-center h-28 p-4 bg-primary/50 border-border/30 hover:bg-accent/20 hover:border-accent text-slate-200 transition-all duration-300"
                  >
                    <ZodiacIcon sign={sign.id} className="w-10 h-10 mb-2" />
                    <span className="font-headline">{sign.name}</span>
                  </Button>
                ))}
              </div>
              <Button variant="link" onClick={() => setCalculatorOpen(true)} className="text-accent mt-8">
                🌙 Não sei meu signo, quero descobrir
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="text-center flex flex-col items-center"
          >
            <div className="text-accent mb-4">
                 <ZodiacIcon sign={selectedSign} className="w-24 h-24" />
            </div>
            <p className="font-headline text-2xl text-slate-100 animate-pulse">
              ✨ Ah, {currentSignData?.name}! Os astros estão te preparando para algo especial em 2025.
            </p>
            <p className="font-body text-lg text-slate-300 mt-4 mb-8">
              Vamos descobrir juntas(os) o que é?
            </p>
            <Button size="lg" onClick={nextStep} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Continuar →
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <SignCalculator
        open={isCalculatorOpen}
        onOpenChange={setCalculatorOpen}
        onSignSelect={handleCalculatorSignSelect}
      />
    </>
  );
}
