'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateCosmicEnergyRevelation } from '@/ai/flows/generate-cosmic-energy-revelation';
import type { GenerateCosmicEnergyRevelationOutput } from '@/ai/flows/generate-cosmic-energy-revelation';
import { analyzeDecisionPatterns } from '@/ai/flows/analyze-decision-patterns';
import type { AnalyzeDecisionPatternsOutput } from '@/ai/flows/analyze-decision-patterns';
import { Loader } from 'lucide-react';
import { QuizState } from '@/context/QuizContext';
import { zodiacSigns } from '@/lib/quiz-data';
import { HeroSection } from '@/components/results/HeroSection';
import { InsightsSection } from '@/components/results/InsightsSection';
import { TransitionSection } from '@/components/results/TransitionSection';
import { OfferSection } from '@/components/results/OfferSection';
import { WhatYouGetSection } from '@/components/results/WhatYouGetSection';
import { ValueSection } from '@/components/results/ValueSection';
import { SocialProofSection } from '@/components/results/SocialProofSection';
import { FinalCTASection } from '@/components/results/FinalCTASection';
import { GuaranteeSection } from '@/components/results/GuaranteeSection';
import { FAQSection } from '@/components/results/FAQSection';
import { FooterSection } from '@/components/results/FooterSection';

interface AIResult {
  revelation: GenerateCosmicEnergyRevelationOutput | null;
  analysis: AnalyzeDecisionPatternsOutput | null;
}

function ResultContent() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<AIResult>({ revelation: null, analysis: null });
  const [error, setError] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  useEffect(() => {
    const stateFromStorage = localStorage.getItem('cosmic-quiz-state');
    if (!stateFromStorage) {
      setError('Nenhum dado do quiz encontrado. Por favor, comece novamente.');
      setLoading(false);
      setTimeout(() => router.push('/'), 3000);
      return;
    }

    const parsedState: QuizState = JSON.parse(stateFromStorage);
    setQuizState(parsedState);

    const runAI = async () => {
      try {
        const [revelationResult, analysisResult] = await Promise.all([
          generateCosmicEnergyRevelation({
            sign: parsedState.answers.sign || '',
            question1Answer: parsedState.answers.signQuestion1 || '',
            question2Answer: parsedState.answers.signQuestion2 || '',
            lifeArea: parsedState.answers.areaOfLife || '',
            decisionPattern: parsedState.answers.decisionPattern || '',
            currentFeeling: parsedState.answers.currentSensation || '',
            mentalOverload: parsedState.answers.overloadMental || '',
            relationshipChallenge: parsedState.answers.relationshipChallenge || '',
            deepestDesire: parsedState.answers.deepestDesire || '',
            commitmentLevel: parsedState.answers.commitment || '',
          }),
          analyzeDecisionPatterns({
            sign: parsedState.answers.sign || '',
            signQuestion1: parsedState.answers.signQuestion1 || '',
            signQuestion2: parsedState.answers.signQuestion2 || '',
            areaOfLife: parsedState.answers.areaOfLife || '',
            decisionPattern: parsedState.answers.decisionPattern || '',
            currentSensation: parsedState.answers.currentSensation || '',
            overloadMental: parsedState.answers.overloadMental || '',
            relationshipChallenge: parsedState.answers.relationshipChallenge || '',
            deepestDesire: parsedState.answers.deepestDesire || '',
          }),
        ]);
        setResult({ revelation: revelationResult, analysis: analysisResult });
      } catch (e) {
        console.error(e);
        setError('Ocorreu um erro ao gerar sua revelação. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    runAI();
  }, [router]);

  const signData = zodiacSigns.find(s => s.id === quizState?.answers.sign);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center text-center text-white min-h-screen">
        <Loader className="h-12 w-12 animate-spin text-accent mb-4" />
        <p className="font-headline text-2xl">Gerando sua revelação cósmica...</p>
      </div>
    );
  }

  if (error || !quizState || !signData) {
    return (
      <div className="flex flex-col items-center justify-center text-center text-white min-h-screen">
        <p className="font-headline text-2xl text-red-400">{error || 'Não foi possível carregar os dados.'}</p>
      </div>
    );
  }

  return (
    <div className="bg-cosmic-night text-white w-full overflow-x-hidden">
      <HeroSection sign={signData} quizAnswers={quizState.answers} />
      <InsightsSection analysis={result.analysis} />
      <TransitionSection />
      <OfferSection />
      <WhatYouGetSection />
      <ValueSection />
      <SocialProofSection />
      <FinalCTASection />
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
