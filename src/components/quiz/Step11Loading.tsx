'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader, Sparkles, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export function Step11Loading() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/results');
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="text-center flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      <div className="space-y-4 text-white">
        <div className="flex justify-center items-center gap-4">
          <Sparkles className="h-8 w-8 text-accent animate-pulse" />
          <p className="font-headline text-xl">Processando sua energia cósmica...</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Star className="h-8 w-8 text-accent animate-pulse delay-150" />
          <p className="font-headline text-xl">Alinhando trânsitos planetários...</p>
        </div>
        <div className="flex justify-center items-center gap-4">
           <Loader className="h-8 w-8 text-accent animate-spin" />
          <p className="font-headline text-xl">Revelando seu recomeço...</p>
        </div>
      </div>
      <div className="mt-8 w-full">
        <Progress value={100} className="w-full h-2 bg-primary/50 border border-accent/30 [&>div]:bg-accent animate-load" />
      </div>
    </div>
  );
}
