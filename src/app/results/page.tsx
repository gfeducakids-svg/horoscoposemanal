'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuizState } from '@/context/QuizContext';
import { zodiacSigns } from '@/lib/quiz-data';
import { HeroSection } from '@/components/results/HeroSection';
import { InsightsSection } from '@/components/results/InsightsSection';
import { TransitionSection } from '@/components/results/TransitionSection';
import { OfferSection } from '@/components/results/OfferSection';
import { SocialProofSection } from '@/components/results/SocialProofSection';
import { GuaranteeSection } from '@/components/results/GuaranteeSection';
import { FAQSection } from '@/components/results/FAQSection';
import { FooterSection } from '@/components/results/FooterSection';


function ResultContent() {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  useEffect(() => {
    const stateFromStorage = localStorage.getItem('cosmic-quiz-state');
    if (!stateFromStorage) {
      // Redirect to quiz if no state is found
      router.push('/quiz');
      return;
    }

    const parsedState: QuizState = JSON.parse(stateFromStorage);
    setQuizState(parsedState);

  }, [router]);

  const signData = zodiacSigns.find(s => s.id === quizState?.answers.sign);

  if (!quizState || !signData) {
     return (
      <div className="flex flex-col items-center justify-center text-center text-white min-h-screen">
        <p className="font-headline text-2xl">Carregando seus dados...</p>
      </div>
    );
  }

  return (
    <div className="bg-cosmic-night text-white w-full overflow-x-hidden">
      <HeroSection sign={signData} quizAnswers={quizState.answers} />
      <InsightsSection sign={quizState.answers.sign as any} />
      <TransitionSection />
      <OfferSection />
      <SocialProofSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="bg-cosmic-night min-h-screen flex items-center justify-center text-white text-xl">Carregando...</div>}>
      <ResultContent />
    </Suspense>
  );
}
