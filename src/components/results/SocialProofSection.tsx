'use client';
import Image from 'next/image';
import { Users, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Juliana Santos",
    age: 34,
    sign: "Câncer",
    text: "Eu sou canceriana e vivia repetindo os mesmos erros nos relacionamentos. Quando comecei a seguir as previsões semanais, tudo mudou. Eu SABIA quando me abrir e quando me proteger. Hoje tô num relacionamento incrível e com paz interior.",
    image: "https://picsum.photos/seed/t1/100/100"
  },
  {
    name: "Camila Rodrigues",
    age: 29,
    sign: "Áries",
    text: "Como ariana, eu sempre agi por impulso e me ferrava. O Sistema Celeste me ensinou a pausar no momento certo. Consegui mudar de carreira sem cometer os erros que ia cometer. Valeu cada centavo.",
    image: "https://picsum.photos/seed/t2/100/100"
  },
  {
    name: "Mariana Costa",
    age: 31,
    sign: "Escorpião",
    text: "Sou escorpiana e tinha dificuldade de soltar o passado. As previsões me mostraram QUANDO fazer isso. No portal de março, eu consegui. Hoje sou outra pessoa.",
    image: "https://picsum.photos/seed/t3/100/100"
  },
  {
    name: "Patricia Alves",
    age: 36,
    sign: "Libra",
    text: "Libriana indecisa aqui! Nunca conseguia tomar decisões sem pedir opinião de todo mundo. Agora eu consulto os astros e confio. Mudou minha relação comigo mesma.",
    image: "https://picsum.photos/seed/t4/100/100"
  },
];

export function SocialProofSection() {
  return (
    <section className="py-20 px-4 bg-cosmic-night">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-white mb-12">
          💬 Veja o que quem já usa está dizendo:
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <div className="bg-deep-purple p-6 rounded-2xl border border-vibrant-purple/20 h-full flex flex-col items-center text-center">
                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-full mb-4 border-2 border-soft-lilac" />
                    <p className="font-body text-slate-300 text-sm italic mb-4">"{item.text}"</p>
                    <div className="flex mt-auto">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-cosmic-gold fill-cosmic-gold" />)}
                    </div>
                    <p className="font-headline text-white mt-2 font-bold">{item.name}, {item.age}</p>
                    <p className="text-soft-lilac text-sm">{item.sign}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
           <CarouselPrevious className="text-white hover:text-soft-lilac bg-vibrant-purple hover:bg-vibrant-purple/80 border-soft-lilac/50 left-[-10px] md:left-[-25px]" />
          <CarouselNext className="text-white hover:text-soft-lilac bg-vibrant-purple hover:bg-vibrant-purple/80 border-soft-lilac/50 right-[-10px] md:right-[-25px]" />
        </Carousel>

        <div className="mt-16 flex items-center justify-center gap-3 text-lg text-slate-300">
            <Users className="w-6 h-6 text-soft-lilac"/>
            <p><span className="font-bold text-white">+3.847 pessoas</span> já transformaram suas vidas com o Horóscopo Semanal</p>
        </div>
      </div>
    </section>
  );
}
