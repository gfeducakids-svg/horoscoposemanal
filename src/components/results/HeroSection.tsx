'use client';
import { ArrowDown } from 'lucide-react';
import ZodiacIcon from '@/components/icons/ZodiacIcon';
import type { ZodiacSign } from '@/lib/quiz-data';

interface HeroSectionProps {
  sign: ZodiacSign;
}

export function HeroSection({ sign }: HeroSectionProps) {
  return (
    <section className="relative w-full flex items-center justify-center text-center p-6 pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-night via-deep-purple to-cosmic-night">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-gradient-to-br from-vibrant-purple to-soft-lilac border-2 border-white/10 shadow-[0_0_60px_rgba(199,125,255,0.6)]">
            <ZodiacIcon sign={sign.id} className="w-20 h-20 md:w-24 md:h-24 text-white" />
          </div>
        </div>

        <h3 className="font-body text-base md:text-lg text-white/70 tracking-wider mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Exploradora Cósmica, os astros confirmam...
        </h3>

        <div className="animate-bounce flex flex-col items-center gap-2 text-soft-lilac">
            <span className="text-sm font-body">Role para ver sua revelação</span>
            <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
