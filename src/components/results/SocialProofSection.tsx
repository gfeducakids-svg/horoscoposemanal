'use client';
import { Users } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import placeholderImages from '@/lib/placeholder-images.json';
import { Card, CardContent } from '../ui/card';

const testimonials = placeholderImages.socialProof;

export function SocialProofSection() {
  return (
    <section className="py-12 px-4 bg-cosmic-night">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-white mb-10">
          Dá uma olhada nessas avaliações
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden bg-deep-purple border-vibrant-purple/20">
                  <CardContent className="p-0">
                    <video 
                      controls 
                      className="w-full h-full object-cover aspect-[9/16]"
                      poster={item.thumbnailUrl}
                      preload="metadata"
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
           <CarouselPrevious className="text-white hover:text-soft-lilac bg-vibrant-purple hover:bg-vibrant-purple/80 border-soft-lilac/50 left-[-10px] md:left-[-25px]" />
          <CarouselNext className="text-white hover:text-soft-lilac bg-vibrant-purple hover:bg-vibrant-purple/80 border-soft-lilac/50 right-[-10px] md:right-[-25px]" />
        </Carousel>

        <div className="mt-12 flex items-center justify-center gap-3 text-lg text-slate-300">
            <Users className="w-6 h-6 text-soft-lilac"/>
            <p><span className="font-bold text-white">+3.847 pessoas</span> já transformaram suas vidas com o Horóscopo Semanal</p>
        </div>
      </div>
    </section>
  );
}
