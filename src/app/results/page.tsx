'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { generateCosmicEnergyRevelation } from '@/ai/flows/generate-cosmic-energy-revelation';
import type { GenerateCosmicEnergyRevelationInput } from '@/ai/flows/generate-cosmic-energy-revelation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader, Sparkles, Star, ShieldCheck, Zap, Target, CheckCircle } from 'lucide-react';
import { QuizState } from '@/context/QuizContext';
import ZodiacIcon from '@/components/icons/ZodiacIcon';
import { zodiacSigns } from '@/lib/quiz-data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<string | null>(null);
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
        const input: GenerateCosmicEnergyRevelationInput = {
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
        };
        
        const aiResult = await generateCosmicEnergyRevelation(input);
        setResult(aiResult.resultText);
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

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-center text-white min-h-screen">
        <p className="font-headline text-2xl text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-3xl bg-primary/50 border-border/20 backdrop-blur-sm text-white animate-fade-in-up">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col items-center text-center mb-8">
            {signData && (
              <div className="mb-4 text-accent">
                <ZodiacIcon sign={signData.id} className="w-24 h-24" />
              </div>
            )}
            {result ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className="prose prose-invert font-body text-slate-300 text-lg leading-relaxed space-y-4 w-full"
                components={{
                  h1: ({node, ...props}) => <h1 className="font-headline text-2xl md:text-3xl text-accent mb-2" {...props} />,
                  h2: ({node, ...props}) => <h2 className="font-headline text-xl md:text-2xl text-slate-100 my-4" {...props} />,
                  hr: ({node, ...props}) => <hr className="border-border/20 my-8" {...props} />,
                  p: ({node, ...props}) => {
                    const text = node.children[0]?.type === 'text' ? node.children[0].value : '';
                    if (text.startsWith('✨')) {
                      return <p className="flex items-start gap-2 my-2"><Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-1" /><span>{text.substring(1).trim()}</span></p>
                    }
                    if (text.startsWith('⚡')) {
                      return <p className="flex items-start gap-2 my-2"><Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" /><span>{text.substring(1).trim()}</span></p>
                    }
                    if (text.startsWith('🎯')) {
                      return <p className="flex items-start gap-2 my-2"><Target className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" /><span>{text.substring(1).trim()}</span></p>
                    }
                     if (text.startsWith('→')) {
                      return <p className="flex items-center gap-2 my-1"><CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" /><span>{text.substring(1).trim()}</span></p>
                    }
                    return <p {...props} />
                  },
                }}
              >
                {result.replace(/🔮\s*(.*?)\s*–\s*(.*?)\n/g, '# 🔮 $1 – $2\n')
                       .replace(/✨\s*SEU RECOMEÇO CHEGOU\./g, '## ✨ SEU RECOMEÇO CHEGOU.')
                       .replace(/😮\s*SURPRESA\?/g, '## 😮 SURPRESA?')
                       .replace(/A BOA NOTÍCIA\?/g, '## A BOA NOTÍCIA?')
                       .replace(/───────────────────/g, '\n---\n')}
              </ReactMarkdown>
            ) : (
               <p className="font-body text-slate-300 text-lg">Nenhum resultado para exibir.</p>
            )}
          </div>
          
          <div className="my-8">
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg py-8 px-10 rounded-full shadow-lg shadow-accent/20 transition-transform transform hover:scale-105">
              <Sparkles className="mr-2 h-6 w-6" />
              QUERO RECEBER MINHA PREVISÃO SEMANAL
            </Button>
          </div>

          <div className="text-center p-6 border border-border/20 rounded-lg bg-primary/30 my-8">
             <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
             </div>
             <p className="font-body text-slate-300 italic">"Eu sou {signData?.name} e vivia repetindo os mesmos erros. Agora eu sei QUANDO agir. Mudou tudo."</p>
             <p className="font-headline text-slate-200 mt-2">- Camila, 29 anos</p>
          </div>

           <div className="flex flex-col sm:flex-row justify-around items-center text-center gap-4 text-slate-400 font-body text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent"/>
                7 dias de garantia incondicional
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent"/>
                Acesso vitalício
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent"/>
                Suporte via Telegram
              </div>
           </div>

           <div className="text-center mt-8">
              <Button variant="link" className="text-accent hover:text-accent/80">
                Ver detalhes da oferta completa
              </Button>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}


export default function ResultsPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ResultContent />
        </Suspense>
    )
}
