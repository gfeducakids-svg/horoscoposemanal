'use client';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { ArrowRight, Lock, Clock, Mail } from 'lucide-react';

const whatYouGetItems = placeholderImages.whatYouGet;

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
    <section className="py-20 px-4 bg-light-gray text-dark-gray">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-vibrant-purple mb-4">
            APRESENTO:
          </h2>
        </div>

        <div className="mb-16">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                {whatYouGetItems.map((item, index) => (
                    <div key={index} className="relative aspect-square w-full">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="rounded-lg object-cover"
                            data-ai-hint={item.imageHint}
                        />
                    </div>
                ))}
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
        
        <div className="text-center mt-20">
          <div className="container mx-auto max-w-2xl text-center font-headline text-dark-gray mb-8">
              <div className="border-y-2 border-dashed border-vibrant-purple py-6 px-4">
                  <p className="text-lg">VALOR TOTAL: <span className="line-through">R$ 211,00</span></p>
                  <p className="text-3xl md:text-4xl my-2">VOCÊ PAGA HOJE: <span className="text-vibrant-purple font-extrabold">R$ 29,90</span></p>
                  <p className="text-lg text-success-green font-bold">ECONOMIA: R$ 181,10 (86% OFF)</p>
              </div>
          </div>
          <a
            href="https://pay.kiwify.com.br/FoliXIn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-success-green text-white font-bold text-xl py-5 px-10 rounded-full shadow-lg shadow-success-green/30 transition-transform transform hover:scale-105 animate-pulse-glow"
            style={{ animationName: 'pulse-glow-green' }}
          >
            SIM, QUERO MEU MAPA ASTROLÓGICO!
            <ArrowRight className="inline-block ml-2" />
          </a>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-medium-gray">
              <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-vibrant-purple" />
                  <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-vibrant-purple" />
                  <span>Acesso liberado em 1 minuto</span>
              </div>
              <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-vibrant-purple" />
                  <span>Dados enviados para seu e-mail</span>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}
