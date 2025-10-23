'use client';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const carouselItems = [
    {
        title: "LEITURA ENERGÉTICA SEMANAL",
        image: "https://picsum.photos/seed/1/600/400",
        description: "Análise completa da energia da semana pro seu signo para amor, trabalho e decisões.",
        badge: "Toda semana, sem falhar"
    },
    {
        title: "ALERTAS DE TRÂNSITOS CRÍTICOS",
        image: "https://picsum.photos/seed/2/600/400",
        description: "Notificações de Mercúrio retrógrado, eclipses e dias para EVITAR decisões impulsivas.",
        badge: "Nunca mais seja pego de surpresa"
    },
    {
        title: "MAPEAMENTO DOS PORTAIS DE RECOMEÇO",
        image: "https://picsum.photos/seed/3/600/400",
        description: "Identifica os 3-5 períodos de virada do ano e como se preparar energeticamente.",
        badge: "Só abrem 1x por ano"
    },
    {
        title: "GUIAS RÁPIDOS DE RITUAIS SEMANAIS",
        image: "https://picsum.photos/seed/4/600/400",
        description: "Rituais de 5-10 minutos, meditações e afirmações alinhados ao céu da semana.",
        badge: "Simples e poderoso"
    },
    {
        title: "MAPA VISUAL DOS TRÂNSITOS",
        image: "https://picsum.photos/seed/5/600/400",
        description: "Gráficos fáceis de entender com a linha do tempo dos movimentos planetários.",
        badge: "Entenda visualmente"
    },
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 px-4 bg-cosmic-night">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-white mb-12">
          📦 O que você vai receber:
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-deep-purple p-6 rounded-2xl border border-vibrant-purple/20 h-full flex flex-col">
                    <div className="relative w-full h-48 mb-4">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <h3 className="font-headline text-xl text-soft-lilac font-bold mb-2">{item.title}</h3>
                    <p className="font-body text-slate-300 text-sm flex-grow">{item.description}</p>
                    <span className="mt-4 inline-block bg-cosmic-gold/20 text-cosmic-gold text-xs font-bold px-3 py-1 rounded-full self-start">
                        {item.badge}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white hover:text-soft-lilac bg-vibrant-purple hover:bg-vibrant-purple/80 border-soft-lilac/50 left-[-10px] md:left-[-50px]" />
          <CarouselNext className="text-white hover:text-soft-lilac bg-vibrant-purple hover:bg-vibrant-purple/80 border-soft-lilac/50 right-[-10px] md:right-[-50px]" />
        </Carousel>
      </div>
    </section>
  );
}
