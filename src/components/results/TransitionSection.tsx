'use client';
import { ArrowRight } from 'lucide-react';

export function TransitionSection() {
  return (
    <section className="py-12 bg-cosmic-night">
      <div className="container mx-auto max-w-3xl text-center text-slate-200">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-vibrant-purple"></div>
          <ArrowRight className="w-8 h-8 text-soft-lilac" />
          <div className="flex-1 h-px bg-vibrant-purple"></div>
        </div>
        <p className="font-headline text-2xl md:text-3xl mb-4">
          Essa transformação não precisa levar anos.
        </p>
        <p className="font-headline text-2xl md:text-3xl text-cosmic-gold font-bold mb-6">
          Ela pode começar HOJE.
        </p>
        <p className="font-body text-lg text-slate-300">
          Deixa eu te mostrar como...
        </p>
      </div>
    </section>
  );
}
