'use client';
import { Star, Zap, ShieldCheck } from 'lucide-react';

export function BenefitsSection() {
    return (
        <section className="py-20 px-4 bg-deep-purple">
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center p-6 bg-cosmic-night rounded-xl border border-vibrant-purple/20">
                        <Star className="w-12 h-12 text-vibrant-purple mb-4" />
                        <h3 className="font-headline text-xl font-bold text-white mb-2">Sistema de Sincronicidade</h3>
                        <p className="font-body text-slate-300">Analisa 7 planetas-chave para identificar suas "zonas de clareza", alinhando mente e intuição.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-cosmic-night rounded-xl border border-vibrant-purple/20">
                        <Zap className="w-12 h-12 text-vibrant-purple mb-4" />
                        <h3 className="font-headline text-xl font-bold text-white mb-2">Previsões Instantâneas</h3>
                        <p className="font-body text-slate-300">Receba toda segunda-feira a leitura energética da semana com alertas de trânsitos críticos.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-cosmic-night rounded-xl border border-vibrant-purple/20">
                        <ShieldCheck className="w-12 h-12 text-vibrant-purple mb-4" />
                        <h3 className="font-headline text-xl font-bold text-white mb-2">Guia Prático de Ação</h3>
                        <p className="font-body text-slate-300">Orientações claras de O QUE fazer, QUANDO fazer e o que EVITAR, sem jargões complicados.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
