import Link from 'next/link';
import { Sparkles, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <Sparkles className="h-12 w-12 text-accent" />
        </div>
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-slate-100 mb-4">
          Você sente que o universo tá tentando te dizer algo... mas não consegue decifrar?
        </h1>
        <p className="font-body text-lg md:text-xl text-slate-300 mb-8">
          Este diagnóstico astrológico revela:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 w-full">
            <div className="flex flex-col items-center p-4 bg-primary/50 rounded-lg border border-border/20">
              <Sparkles className="h-8 w-8 text-accent mb-2" />
              <p className="font-body text-slate-200">A energia cósmica do seu momento atual</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-primary/50 rounded-lg border border-border/20">
              <Star className="h-8 w-8 text-accent mb-2" />
              <p className="font-body text-slate-200">Por que você se sente perdida(o) agora</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-primary/50 rounded-lg border border-border/20">
              <CheckCircle className="h-8 w-8 text-accent mb-2" />
              <p className="font-body text-slate-200">Como tomar decisões alinhadas com quem você é</p>
            </div>
        </div>

        <Card className="p-4 bg-primary/50 border-border/20 backdrop-blur-sm w-full max-w-md mb-8">
          <ul className="space-y-2 text-slate-300 font-body">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              Leitura personalizada do seu signo
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              2 minutos para clareza total
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              Baseado em trânsitos reais de 2025
            </li>
          </ul>
        </Card>

        <Link href="/quiz">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg py-8 px-10 rounded-full shadow-lg shadow-accent/20 transition-transform transform hover:scale-105">
            <Sparkles className="mr-2 h-6 w-6" />
            COMEÇAR MEU DIAGNÓSTICO ASTROLÓGICO
            <Sparkles className="ml-2 h-6 w-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
