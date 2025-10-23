'use client';
import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-deep-purple text-white rounded-2xl border-2 border-success-green p-8 text-center shadow-2xl shadow-success-green/20">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="w-24 h-24 text-success-green" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4">
            GARANTIA BLINDADA DE 7 DIAS
          </h2>
          <p className="font-body text-lg text-slate-300 mb-6">
            Você tem 7 dias COMPLETOS para testar o Horóscopo Semanal. Receba sua primeira previsão, leia os bônus e aplique os insights. Se por QUALQUER motivo você não ficar satisfeita, é só enviar UM email pra gente.
          </p>
          <p className="font-body text-lg text-white font-semibold mb-8">
            Devolvemos 100% do seu dinheiro na hora. <br/>
            SEM perguntas. SEM burocracia. SEM ressentimentos.
          </p>
          <div className="bg-cosmic-night/50 p-4 rounded-lg">
             <p className="font-body text-slate-300 italic">
                <strong>Por que essa garantia?</strong> Porque eu CONFIO que o Sistema Celeste vai te ajudar. E porque você merece testar sem risco. O risco é todo meu. A clareza é toda sua.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
