'use client';

import type { QuizAnswers } from '@/context/QuizContext';

interface RevelationSectionProps {
  quizAnswers: QuizAnswers;
}

const RevelationSection = ({ quizAnswers }: RevelationSectionProps) => {

    const getPersonalizedReference = () => {
        const answer = quizAnswers.signQuestion1 || quizAnswers.decisionPattern;
        if (answer) {
          return `que costuma se sentir "${answer.toLowerCase()}"`;
        }
        return "que busca por clareza e um novo começo";
    }

    return (
        <section className="py-20 px-4 text-center bg-deep-purple">
            <div className="container mx-auto max-w-3xl">
                <h1 className="font-headline text-3xl md:text-5xl font-bold text-cosmic-gold mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                SEU RECOMEÇO CHEGOU. <br /> E ELE SERÁ PODEROSO.
                </h1>
                
                <div className="animate-fade-in-up space-y-5" style={{ animationDelay: '0.4s' }}>
                    <p className="font-body text-base md:text-lg text-white/85 leading-relaxed">
                        Você, {getPersonalizedReference()}, não está aqui por acaso.
                    </p>
                    <p className="font-body text-base md:text-lg text-white/90 font-medium leading-relaxed">
                        Os próximos 90 dias podem ser os mais importantes da sua vida. <br/>
                        E eu vou te mostrar <span className="text-cosmic-gold font-bold">EXATAMENTE</span> o que fazer.
                    </p>
                </div>

                 <div className="mt-16 text-center">
                    <p className="font-headline text-2xl md:text-3xl text-slate-300">Deixa eu te mostrar como...</p>
                </div>
            </div>
        </section>
    );
}

export { RevelationSection };
