'use client';
import { Star, Zap, Target, Loader } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { transits, type Sign } from '@/lib/transits-data';

interface InsightsSectionProps {
  sign: Sign;
}

const InsightCard = ({ icon, title, text, animation, delay }: { icon: React.ReactNode, title: string, text: string, animation: string, delay?: string }) => (
  <Card 
    className={`bg-deep-purple/50 border-vibrant-purple/30 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-vibrant-purple/10 ${animation} whitespace-pre-wrap`}
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="font-headline text-xl text-soft-lilac font-bold">{title}</h3>
    </div>
    <p className="font-body text-slate-300">{text}</p>
  </Card>
);

export function InsightsSection({ sign }: InsightsSectionProps) {
  const signTransits = transits[sign];

  if (!signTransits) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-slate-400">Não foi possível carregar os insights para o seu signo.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
          <div className="grid grid-cols-1 gap-8">
            <InsightCard 
                icon={<Star className="w-10 h-10 text-cosmic-gold" />}
                title={signTransits.card1.title}
                text={signTransits.card1.text}
                animation="animate-slide-in-left"
            />
            <InsightCard 
                icon={<Zap className="w-10 h-10 text-cosmic-gold" />}
                title={signTransits.card2.title}
                text={signTransits.card2.text}
                animation="animate-slide-in-right"
                delay="0.2s"
            />
            <InsightCard 
                icon={<Target className="w-10 h-10 text-cosmic-gold" />}
                title={signTransits.card3.title}
                text={signTransits.card3.text}
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
