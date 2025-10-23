'use client';
import { Star, Zap, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { AnalyzeDecisionPatternsOutput } from '@/ai/flows/analyze-decision-patterns';

interface InsightsSectionProps {
  analysis: AnalyzeDecisionPatternsOutput | null;
}

const InsightCard = ({ icon, title, text, animation, delay }: { icon: React.ReactNode, title: string, text: string, animation: string, delay?: string }) => (
  <Card 
    className={`bg-deep-purple/50 border-vibrant-purple/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-vibrant-purple/10 ${animation}`}
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="font-headline text-xl text-soft-lilac font-bold">{title}</h3>
    </div>
    <p className="font-body text-slate-300">{text}</p>
  </Card>
);

export function InsightsSection({ analysis }: InsightsSectionProps) {
  const insights = analysis?.insights || [
    "Um trânsito importante está ativando sua área de carreira, trazendo novas oportunidades, mas cuidado com a impulsividade.",
    "Sua energia emocional estará em alta nas próximas semanas, sendo um momento perfeito para resolver pendências afetivas.",
    "Uma janela de oportunidade para manifestação se abre em breve, convidando a focar em seus desejos mais profundos."
  ];

  const recommendations = analysis?.recommendations || [
    "Os próximos 30 dias serão decisivos para sua transformação profissional.",
    "É o momento perfeito para ter aquela conversa difícil, mas evite decisões impulsivas nos próximos dias.",
    "Quem aproveita essa energia consegue avanços significativos. Quem ignora, pode sentir estagnação."
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-12">
          O que eu vi no seu <span className="text-cosmic-gold">perfil energético</span>:
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <InsightCard 
            icon={<Star className="w-10 h-10 text-cosmic-gold" />}
            title="TRÂNSITO PLANETÁRIO #1"
            text={`${insights[0]} ${recommendations[0]}`}
            animation="animate-slide-in-left"
          />
          <InsightCard 
            icon={<Zap className="w-10 h-10 text-cosmic-gold" />}
            title="TRÂNSITO PLANETÁRIO #2"
            text={`${insights[1]} ${recommendations[1]}`}
            animation="animate-slide-in-right"
            delay="0.2s"
          />
          <InsightCard 
            icon={<Target className="w-10 h-10 text-cosmic-gold" />}
            title="TRÂNSITO PLANETÁRIO #3"
            text={`${insights[2]} ${recommendations[2]}`}
            animation="animate-slide-in-left"
            delay="0.4s"
          />
        </div>
        <div className="mt-16">
          <p className="font-headline text-2xl md:text-3xl text-soft-lilac mb-8">
            A pergunta é: <br/> Você vai aproveitar essa janela ou deixar passar?
          </p>
        </div>
      </div>
    </section>
  );
}
