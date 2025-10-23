'use client';
import { Star, Zap, Target, Loader } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { AnalyzeDecisionPatternsOutput } from '@/ai/flows/analyze-decision-patterns';

interface InsightsSectionProps {
  analysis: AnalyzeDecisionPatternsOutput | null;
  isLoading: boolean;
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

const LoadingSkeleton = () => (
    <div className="space-y-8">
        <div className="bg-deep-purple/50 border-vibrant-purple/30 p-6 rounded-2xl shadow-lg animate-pulse">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-cosmic-gold/50"></div>
                <div className="h-6 bg-soft-lilac/50 rounded w-1/2"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 bg-slate-300/50 rounded w-full"></div>
                <div className="h-4 bg-slate-300/50 rounded w-5/6"></div>
            </div>
        </div>
        <div className="bg-deep-purple/50 border-vibrant-purple/30 p-6 rounded-2xl shadow-lg animate-pulse">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-cosmic-gold/50"></div>
                <div className="h-6 bg-soft-lilac/50 rounded w-1/2"></div>
            </div>
            <div className="space-y-2">
                <div className="h-4 bg-slate-300/50 rounded w-full"></div>
                <div className="h-4 bg-slate-300/50 rounded w-5/6"></div>
            </div>
        </div>
    </div>
)

export function InsightsSection({ analysis, isLoading }: InsightsSectionProps) {
  const insights = analysis?.insights || [];
  const recommendations = analysis?.recommendations || [];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-12">
          O que eu vi no seu <span className="text-cosmic-gold">perfil energético</span>:
        </h2>
        {isLoading ? (
            <div className="grid grid-cols-1 gap-8">
                <div className="flex items-center justify-center text-center text-white p-8 rounded-2xl bg-deep-purple/50 border border-vibrant-purple/30">
                    <Loader className="h-8 w-8 animate-spin text-accent mr-4" />
                    <p className="font-headline text-xl">Analisando suas energias...</p>
                </div>
            </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {insights.length > 0 ? (
                <>
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
                </>
            ) : (
                <p className="text-slate-400">Não foi possível carregar os insights no momento.</p>
            )}
          </div>
        )}
        <div className="mt-16">
          <p className="font-headline text-2xl md:text-3xl text-soft-lilac mb-8">
            A pergunta é: <br/> Você vai aproveitar essa janela ou deixar passar?
          </p>
        </div>
      </div>
    </section>
  );
}
