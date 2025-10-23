'use client';

import { Sparkles, ArrowRight, ShieldCheck, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTASection() {
    return (
        <section className="py-20 bg-deep-purple text-white">
            <div className="container mx-auto max-w-3xl text-center">
                <p className="font-body text-lg text-soft-lilac mb-2">OFERTA ESPECIAL POR TEMPO LIMITADO</p>
                <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-4">
                    Sincronize sua vida com o cosmos por menos de R$1 por dia
                </h2>
                <p className="font-body text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                    Receba clareza semanal, aproveite os portais de recomeço e tome decisões com a confiança que só os astros podem dar. Seu futuro está escrito nas estrelas. Você só precisa do mapa.
                </p>

                <div className="flex justify-center mb-8">
                    <Button size="lg" className="bg-cosmic-gold text-deep-purple hover:bg-cosmic-gold/90 font-bold text-xl py-8 px-10 rounded-full shadow-lg shadow-cosmic-gold/30 transition-transform transform hover:scale-105">
                        <Sparkles className="mr-3 h-7 w-7" />
                        SIM, QUERO MEU MAPA SEMANAL!
                        <ArrowRight className="ml-3 h-7 w-7" />
                    </Button>
                </div>
                <div className="font-body text-sm text-slate-400 space-y-2">
                    <p className="flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-success-green" />
                        Pagamento 100% seguro
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4 text-success-green" />
                        Acesso liberado em menos de 1 minuto
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4 text-success-green" />
                        Dados de login enviados para o seu e-mail
                    </p>
                </div>
            </div>
        </section>
    );
}
