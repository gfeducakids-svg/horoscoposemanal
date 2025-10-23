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
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-slate-100 mb-10">
          Descubra qual energia cósmica guia o seu recomeço em 2025
        </h1>

        <Card className="p-4 bg-primary/50 border-border/20 backdrop-blur-sm w-full max-w-md mb-8">
          <ul className="space-y-2 text-slate-300 font-body text-lg">
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
