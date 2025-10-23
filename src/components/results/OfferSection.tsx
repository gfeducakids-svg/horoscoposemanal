'use client';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

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
          <p className="font-headline text-2xl md:text-3xl font-bold text-deep-purple mb-4">
            HORÓSCOPO SEMANAL – RECOMEÇOS CÓSMICOS 2025
          </p>
          <p className="font-body text-lg text-medium-gray max-w-3xl mx-auto">
            A Única Ferramenta de Orientação Astrológica que Revela <span className="font-bold text-vibrant-purple">QUANDO Agir e QUANDO Esperar</span> para você tomar decisões no momento certo do cosmos.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-center font-headline text-3xl md:text-4xl font-bold text-deep-purple mb-12">
              📦 O que você vai receber:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatYouGetItems.map((item, index) => (
                <div key={index} className="p-1">
                  <div className="bg-white p-6 rounded-2xl border border-vibrant-purple/10 shadow-lg h-full flex flex-col">
                    <div className="relative w-full h-48 mb-4">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="rounded-lg object-cover"
                            data-ai-hint={item.imageHint}
                        />
                    </div>
                    <h3 className="font-headline text-xl text-vibrant-purple font-bold mb-2">{item.title}</h3>
                    <p className="font-body text-medium-gray text-sm flex-grow">{item.description}</p>
                    <span className="mt-4 inline-block bg-cosmic-gold/20 text-cosmic-gold text-xs font-bold px-3 py-1 rounded-full self-start">
                        {item.badge}
                    </span>
                  </div>
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
      </div>
    </section>
  );
}
