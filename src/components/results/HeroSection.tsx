'use client';
import { ArrowDown } from 'lucide-react';
import ZodiacIcon from '@/components/icons/ZodiacIcon';
import type { Sign, ZodiacSign } from '@/lib/quiz-data';
import type { QuizAnswers } from '@/context/QuizContext';

interface HeroSectionProps {
  sign: ZodiacSign;
  quizAnswers: QuizAnswers;
}

export function HeroSection({ sign, quizAnswers }: HeroSectionProps) {
  // A simple way to get a name, in a real app this would come from user input
  const name = "Exploradora Cósmica";

  const getPersonalizedReference = () => {
    // This is a simplified example. In a real app, you might have more complex logic
    // to pick the most relevant answer to reference.
    if (quizAnswers.signQuestion1) {
      return `que sente que precisa "${quizAnswers.signQuestion1.toLowerCase()}"`;
    }
    if (quizAnswers.decisionPattern) {
      return `que costuma ficar "${quizAnswers.decisionPattern.toLowerCase()}" ao decidir`;
    }
    return "que busca por clareza e um novo começo";
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-night via-deep-purple to-cosmic-night">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
        <div className="mb-8 animate-pulse-glow">
          <ZodiacIcon sign={sign.id} className="w-32 h-32 text-soft-lilac" />
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
          {name}, os astros confirmam...
        </h1>
        <h2 className="font-headline text-2xl md:text-4xl text-cosmic-gold font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          SEU RECOMEÇO CHEGOU. E ELE SERÁ PODEROSO.
        </h2>
        <p className="font-body text-lg md:text-xl text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Você, {getPersonalizedReference()}, não está aqui por acaso.
        </p>
        <p className="font-body text-lg md:text-xl text-white font-semibold mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Os próximos 90 dias serão os mais importantes da sua vida. <br/>
          E eu vou te mostrar EXATAMENTE o que fazer.
        </p>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-soft-lilac">
          <span className="font-body text-sm">Descubra o que os astros revelaram</span>
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
