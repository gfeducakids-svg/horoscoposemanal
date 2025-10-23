'use client';
import Image from 'next/image';
import { Star, Zap, ShieldCheck } from 'lucide-react';

const BonusCard = ({ title, value, children }: { title: string; value: string; children: React.ReactNode }) => (
    <div className="perspective-1000">
        <div className="relative w-full h-64 transform-style-3d transition-transform duration-700 group hover:rotate-y-180">
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-deep-purple border-2 border-soft-lilac/30 rounded-2xl flex flex-col justify-center items-center p-4 text-center">
                <span className="absolute top-2 right-2 bg-cosmic-gold text-deep-purple text-xs font-bold px-2 py-1 rounded-full">BÔNUS</span>
                <h4 className="font-headline text-xl text-white font-bold mb-2">{title}</h4>
                <p className="font-body text-slate-300">Valor: <span className="line-through">R$ {value}</span></p>
            </div>
            {/* Back */}
            <div className="absolute w-full h-full backface-hidden bg-soft-lilac text-deep-purple rounded-2xl p-6 transform rotate-y-180">
                {children}
            </div>
        </div>
    </div>
);

export function OfferSection() {
  return (
    <section className="py-20 px-4 bg-slate-50 text-dark-gray">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-vibrant-purple mb-4">
            APRESENTO:
          </h2>
          <p className="font-headline text-2xl md:text-3xl font-bold text-deep-purple mb-4">
            HORÓSCOPO SEMANAL – RECOMEÇOS CÓSMICOS 2025
          </p>
          <p className="font-body text-lg text-medium-gray max-w-3xl mx-auto">
            A Única Ferramenta de Orientação Astrológica que Revela <span className="font-bold text-vibrant-purple">QUANDO Agir e QUANDO Esperar</span> para você tomar decisões no momento certo do cosmos.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <Image
            src="https://i.imgur.com/kSjYn0C.png" // Replace with your mockup
            alt="Mockup do Horóscopo Semanal"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="flex flex-col items-center">
            <Star className="w-12 h-12 text-vibrant-purple mb-4" />
            <h3 className="font-headline text-xl font-bold text-deep-purple mb-2">Sistema de Sincronicidade</h3>
            <p className="font-body text-medium-gray">Analisa 7 planetas-chave para identificar suas "zonas de clareza", alinhando mente e intuição.</p>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-12 h-12 text-vibrant-purple mb-4" />
            <h3 className="font-headline text-xl font-bold text-deep-purple mb-2">Previsões Instantâneas</h3>
            <p className="font-body text-medium-gray">Receba toda segunda-feira a leitura energética da semana com alertas de trânsitos críticos.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-vibrant-purple mb-4" />
            <h3 className="font-headline text-xl font-bold text-deep-purple mb-2">Guia Prático de Ação</h3>
            <p className="font-body text-medium-gray">Orientações claras de O QUE fazer, QUANDO fazer e o que EVITAR, sem jargões complicados.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
           <BonusCard title="GUIA DOS GRANDES TRÂNSITOS 2025-2026" value="97,00">
               <h5 className="font-headline text-lg font-bold mb-2">Descubra as 5 conjunções que vão reger os próximos dois anos.</h5>
               <ul className="font-body text-sm space-y-1">
                   <li>→ Plutão em Aquário (até 2044)</li>
                   <li>→ Netuno em Áries (2025-2039)</li>
                   <li>→ Urano em Gêmeos (2025-2033)</li>
                   <li>→ Saturno em Peixes → Áries (2023-2026)</li>
                   <li>→ Júpiter em Câncer (2025-2026)</li>
               </ul>
           </BonusCard>
            <BonusCard title="MAPA LUNAR DA MANIFESTAÇÃO" value="67,00">
               <h5 className="font-headline text-lg font-bold mb-2">Aprenda a usar as 8 fases da Lua para:</h5>
               <ul className="font-body text-sm space-y-1">
                   <li>→ Definir intenções (Lua Nova)</li>
                   <li>→ Agir com força (Lua Crescente)</li>
                   <li>→ Colher resultados (Lua Cheia)</li>
                   <li>→ Liberar bloqueios (Lua Minguante)</li>
               </ul>
           </BonusCard>
        </div>
      </div>
    </section>
  );
}
