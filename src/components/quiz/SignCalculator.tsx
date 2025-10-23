'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getZodiacSign } from '@/lib/utils';
import { zodiacSigns } from '@/lib/quiz-data';
import ZodiacIcon from '@/components/icons/ZodiacIcon';
import type { Sign } from '@/lib/quiz-data';

interface SignCalculatorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSignSelect: (sign: Sign) => void;
}

export function SignCalculator({ open, onOpenChange, onSignSelect }: SignCalculatorProps) {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<Sign | null>(null);

  const handleCalculate = () => {
    const [year, month, day] = birthDate.split('-').map(Number);
    if (!isNaN(day) && !isNaN(month)) {
      const sign = getZodiacSign(day, month);
      setResult(sign);
    }
  };

  const handleConfirm = () => {
    if (result) {
      onSignSelect(result);
    }
  };
  
  const signData = zodiacSigns.find(s => s.id === result);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-primary border-border/50 text-white">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Descubra seu Signo</DialogTitle>
          <DialogDescription className="text-slate-400">
            Insira sua data de nascimento para encontrar seu signo solar.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <Label htmlFor="birthdate">Data de Nascimento</Label>
          <Input
            id="birthdate"
            type="date"
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value);
              setResult(null);
            }}
            className="bg-input border-border/30"
          />
          <Button onClick={handleCalculate} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Calcular
          </Button>
        </div>
        {result && signData && (
          <div className="mt-4 p-4 rounded-lg border border-accent/50 bg-accent/10 flex flex-col items-center text-center">
            <ZodiacIcon sign={result} className="w-16 h-16 text-accent mb-2" />
            <p className="font-body">Seu signo é</p>
            <p className="font-headline text-2xl font-bold">{signData.name}</p>
          </div>
        )}
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button onClick={handleConfirm} disabled={!result} className="bg-accent text-accent-foreground hover:bg-accent/90">
            Confirmar e Usar Este Signo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
