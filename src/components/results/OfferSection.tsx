'use client';
import Image from 'next/image';
import { ArrowRight, Lock, Clock, Mail } from 'lucide-react';

const offerImages = [
  "https://i.imgur.com/lVxmRVk.png",
  "https://i.imgur.com/56gzLhW.png",
  "https://i.imgur.com/URcxczR.png",
  "https://i.imgur.com/lYGJsiX.png",
  "https://i.imgur.com/2z0V6ih.png",
  "https://i.imgur.com/JY1N6lD.png",
];


export function OfferSection() {
  return (
    <section className="py-12 px-4 bg-light-gray text-dark-gray">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-vibrant-purple mb-4">
            APRESENTO: HORÓSCOPO SEMANAL – Recomeços Cósmicos 2025
          </h2>
          <p className="font-body text-lg text-medium-gray max-w-3xl mx-auto">
            Ferramenta de orientação astrológica instantânea que revela o que os astros reservam para cada signo diante das grandes transformações previstas para o futuro.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 mb-12">
            {offerImages.map((src, index) => (
                <div key={index} className="relative w-full">
                    <Image
                        src={src}
                        alt={`Offer image ${index + 1}`}
                        width={800}
                        height={450}
                        className="rounded-lg object-cover w-full h-auto"
                    />
                    {(index === 4 || index === 5) && (
                        <span className="absolute top-3 right-3 bg-cosmic-gold text-deep-purple text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">BÔNUS</span>
                    )}
                </div>
            ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="container mx-auto max-w-2xl text-center font-headline text-dark-gray mb-6">
              <p className="font-body text-base text-medium-gray mb-4">Você irá ter acesso a todos esses planners personalizados para você</p>
              <div className="py-4 px-4">
                  <p className="text-md">VALOR TOTAL: <span className="line-through">R$ 99,90</span></p>
                  <p className="text-3xl md:text-4xl my-2">VOCÊ PAGA HOJE: <span className="text-vibrant-purple font-extrabold">R$ 29,90</span></p>
                  <p className="text-md text-success-green font-bold">ECONOMIA: R$ 70,00 (70% OFF)</p>
              </div>
          </div>
          <a
            href="https://pay.kiwify.com.br/FoliXIn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-success-green text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg shadow-success-green/30 transition-transform transform hover:scale-105 animate-pulse-glow"
            style={{ animationName: 'pulse-glow-green' }}
          >
            QUERO AGORA
            <ArrowRight className="inline-block ml-2" />
          </a>
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-2 text-medium-gray text-sm">
              <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-vibrant-purple" />
                  <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-vibrant-purple" />
                  <span>Acesso liberado em 1 minuto</span>
              </div>
              <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-vibrant-purple" />
                  <span>Dados enviados para seu e-mail</span>
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}
