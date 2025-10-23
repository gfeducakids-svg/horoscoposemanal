'use client';
import { ArrowDown } from 'lucide-react';
import ZodiacIcon from '@/components/icons/ZodiacIcon';
import type { ZodiacSign } from '@/lib/quiz-data';
import type { QuizAnswers } from '@/context/QuizContext';

interface HeroSectionProps {
  sign: ZodiacSign;
  quizAnswers: QuizAnswers;
}

export function HeroSection({ sign, quizAnswers }: HeroSectionProps) {
  const name = "Exploradora Cósmica";

  const getPersonalizedReference = () => {
    if (quizAnswers.signQuestion1) {
      return `que sente que precisa "${quizAnswers.signQuestion1.toLowerCase()}"`;
    }
    if (quizAnswers.decisionPattern) {
      return `que costuma ficar "${quizAnswers.decisionPattern.toLowerCase()}" ao decidir`;
    }
    return "que busca por clareza e um novo começo";
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-night via-deep-purple to-cosmic-night">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
        <div className="mb-10">
          <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-gradient-to-br from-vibrant-purple to-soft-lilac border-2 border-white/10 shadow-[0_0_60px_rgba(199,125,255,0.6)]">
            <ZodiacIcon sign={sign.id} className="w-20 h-20 md:w-24 md:h-24 text-white" />
          </div>
        </div>

        <h3 className="font-body text-sm md:text-base text-white/70 tracking-wider mb-6 animate-fade-in-up">
          {name}, os astros confirmam...
        </h3>
        
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-cosmic-gold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          SEU RECOMEÇO CHEGOU. <br /> E ELE SERÁ PODEROSO.
        </h1>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="font-body text-base md:text-lg text-white/85 leading-relaxed mb-5">
            Você, {getPersonalizedReference()}, não está aqui por acaso.
          </p>
          <p className="font-body text-base md:text-lg text-white/90 font-medium leading-relaxed">
            Os próximos 90 dias serão os mais importantes da sua vida. <br/>
            E eu vou te mostrar <span className="text-cosmic-gold font-bold">EXATAMENTE</span> o que fazer.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-soft-lilac">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
