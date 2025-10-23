'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { analyzeDecisionPatterns } from '@/ai/flows/analyze-decision-patterns';
import type { AnalyzeDecisionPatternsOutput } from '@/ai/flows/analyze-decision-patterns';
import { QuizState } from '@/context/QuizContext';
import { zodiacSigns } from '@/lib/quiz-data';
import { HeroSection } from '@/components/results/HeroSection';
import { InsightsSection } from '@/components/results/InsightsSection';
import { TransitionSection } from '@/components/results/TransitionSection';
import { OfferSection } from '@/components/results/OfferSection';
import { ValueSection } from '@/components/results/ValueSection';
import { SocialProofSection } from '@/components/results/SocialProofSection';
import { FinalCTASection } from '@/components/results/FinalCTASection';
import { GuaranteeSection } from '@/components/results/GuaranteeSection';
import { FAQSection } from '@/components/results/FAQSection';
import { FooterSection } from '@/components/results/FooterSection';
import { BenefitsSection } from '@/components/results/BenefitsSection';

function ResultContent() {
  const router = useRouter();
  const [analysis, setAnalysis] = useState<AnalyzeDecisionPatternsOutput | null>(null);
  const [isAnalysisLoading, setAnalysisLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);

  useEffect(() => {
    const stateFromStorage = localStorage.getItem('cosmic-quiz-state');
    if (!stateFromStorage) {
      setError('Nenhum dado do quiz encontrado. Por favor, comece novamente.');
      setTimeout(() => router.push('/'), 3000);
      return;
    }

    const parsedState: QuizState = JSON.parse(stateFromStorage);
    setQuizState(parsedState);

    const runAI = async () => {
      try {
        setAnalysisLoading(true);
        const analysisResult = await analyzeDecisionPatterns({
          sign: parsedState.answers.sign || '',
          signQuestion1: parsedState.answers.signQuestion1 || '',
          signQuestion2: parsedState.answers.signQuestion2 || '',
          areaOfLife: parsedState.answers.areaOfLife || '',
          decisionPattern: parsedState.answers.decisionPattern || '',
          currentSensation: parsedState.answers.currentSensation || '',
          overloadMental: parsedState.answers.overloadMental || '',
          relationshipChallenge: parsedState.answers.relationshipChallenge || '',
          deepestDesire: parsedState.answers.deepestDesire || '',
        });
        setAnalysis(analysisResult);
      } catch (e) {
        console.error(e);
        // Set a fallback analysis so the page still renders something
        setAnalysis({
          assessment: 'Análise cósmica padrão.',
          insights: [
            "Um trânsito importante está ativando sua área de carreira, trazendo novas oportunidades, mas cuidado com a impulsividade.",
            "Sua energia emocional estará em alta nas próximas semanas, sendo um momento perfeito para resolver pendências afetivas.",
            "Uma janela de oportunidade para manifestação se abre em breve, convidando a focar em seus desejos mais profundos."
          ],
          recommendations: [
            "Os próximos 30 dias serão decisivos para sua transformação profissional.",
            "É o momento perfeito para ter aquela conversa difícil, mas evite decisões impulsivas nos próximos dias.",
            "Quem aproveita essa energia consegue avanços significativos. Quem ignora, pode sentir estagnação."
          ]
        });
      } finally {
        setAnalysisLoading(false);
      }
    };

    runAI();
  }, [router]);

  const signData = zodiacSigns.find(s => s.id === quizState?.answers.sign);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-center text-white min-h-screen">
        <p className="font-headline text-2xl text-red-400">{error}</p>
      </div>
    );
  }

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
      <InsightsSection analysis={analysis} isLoading={isAnalysisLoading} />
      <TransitionSection />
      <OfferSection />
      <ValueSection />
      <BenefitsSection />
      <SocialProofSection />
      <GuaranteeSection />
      <FinalCTASection />
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
