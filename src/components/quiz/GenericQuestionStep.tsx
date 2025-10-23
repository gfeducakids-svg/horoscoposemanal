'use client';

import { useQuiz } from '@/context/QuizContext';
import { questions } from '@/lib/quiz-data';
import type { Sign } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';

interface GenericQuestionStepProps {
  step: number;
}

export function GenericQuestionStep({ step }: GenericQuestionStepProps) {
  const { answers, setAnswer, nextStep } = useQuiz();

  // @ts-ignore
  const stepData = questions[step];
  let questionInfo;

  if (step === 2 || step === 3) {
    questionInfo = stepData[answers.sign as Sign];
  } else {
    questionInfo = stepData;
  }
  
  const handleAnswer = (option: string) => {
    setAnswer(questionInfo.key, option);
    nextStep();
  };

  const validationText: { [key: number]: string } = {
    3: '💫 Você não está sozinha(o) nisso, tá? Já tô sentindo sua energia...',
    6: 'Respira... você vai ter clareza. Prometo. ✨',
  };

  const transitionText: { [key: number]: string } = {
    5: 'Entendi... isso faz muito sentido.\n\nAgora uma pergunta importante:',
    6: 'Você tá se entendendo melhor a cada resposta... 💫\n\nMe diz:',
    8: 'Quase lá... respira fundo 🌙\n\nSobre seus relacionamentos (amorosos ou não):',
  }

  return (
    <div className="text-center w-full max-w-2xl mx-auto">
      {transitionText[step] && (
        <p className="font-headline text-xl md:text-2xl text-slate-300 mb-6 whitespace-pre-wrap">
          {transitionText[step]}
        </p>
      )}

      <h2 className="font-headline text-2xl md:text-3xl font-bold text-slate-100 mb-8">
        {questionInfo.question}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questionInfo.options.map((option: string) => (
          <Button
            key={option}
            variant="outline"
            size="lg"
            onClick={() => handleAnswer(option)}
            className="text-lg justify-start p-6 h-auto bg-primary/50 border-border/30 hover:bg-accent/20 hover:text-white hover:border-accent text-slate-200"
          >
            {option}
          </Button>
        ))}
      </div>

      {validationText[step] && (
         <p className="text-accent mt-8 text-lg animate-pulse">{validationText[step]}</p>
      )}
    </div>
  );
}
