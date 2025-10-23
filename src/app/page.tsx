import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UrgencyTimer } from '@/components/landing/UrgencyTimer';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto">
        <UrgencyTimer />
        <div className="mb-8 w-full">
          <Image
            src="https://i.imgur.com/6B87EKP.png"
            alt="Energia Cósmica"
            width={800}
            height={800}
            className="rounded-lg border-2 border-accent/50 shadow-lg shadow-accent/20 w-full h-auto"
            priority
          />
        </div>

        <Card className="p-4 sm:p-6 bg-primary/50 border-border/20 backdrop-blur-sm w-full mb-8">
          <div className="flex flex-col md:flex-row justify-around items-start md:items-center gap-4 text-white font-body text-center text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span>A descoberta astrológica que muda tudo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span>O segredo dos signos que prosperam</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span>Apenas 1 minuto para clareza total</span>
            </div>
          </div>
        </Card>

        <Link href="/quiz">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg py-6 px-8 rounded-full shadow-lg shadow-accent/20 transition-transform transform hover:scale-105">
            <Sparkles className="mr-2 h-6 w-6" />
            COMEÇAR GRATUITAMENTE
            <Sparkles className="ml-2 h-6 w-6" />
          </Button>
        </Link>
        <p className="text-white mt-6 max-w-xl text-center font-body">
          O Portal cósmico só se abre a cada 84 anos e no ano de 2025 ele fará milhares de pessoas melhorarem suas carreiras profissionais e amorosas.
          <br/>
          <span className="font-bold text-accent">Não perca essa Oportunidade Única</span>
        </p>
      </div>
    </div>
  );
}
