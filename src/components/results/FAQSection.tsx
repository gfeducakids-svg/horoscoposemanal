'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChatWidget } from "@/components/chat/ChatWidget";

const faqs = [
    {
        question: "Mas horóscopos são genéricos, não funcionam pra mim.",
        answer: "O Horóscopo Semanal usa análise de trânsitos REAIS e combinações específicas do seu signo solar. Não é aquele horóscopo de jornal. É orientação aplicável à SUA realidade."
    },
    {
        question: "Não entendo nada de astrologia.",
        answer: "As previsões são escritas em linguagem SIMPLES, sem jargões. Em vez de 'Marte em quadratura com Plutão', você lê: 'Essa semana você vai sentir vontade de agir rápido demais. Respira. Espera até quinta.'"
    },
    {
        question: "Tenho medo de depender disso para decidir minha vida.",
        answer: "O horóscopo é uma FERRAMENTA de clareza, não de controle. É como consultar a previsão do tempo antes de viajar. Você decide se vai, mas vai preparada."
    },
    {
        question: "E se não funcionar pra mim?",
        answer: "Você tem 7 dias de GARANTIA INCONDICIONAL. Se por qualquer motivo você não gostar, é só enviar um email e devolvemos 100% do seu dinheiro. Sem perguntas."
    },
    {
        question: "Não tenho tempo pra isso.",
        answer: "Leva MENOS DE 3 MINUTOS por semana pra ler a previsão. É menos tempo do que você gasta rolando o Instagram antes de dormir."
    },
    {
        question: "Por que tá tão barato? Deve ser ruim.",
        answer: "O preço é simbólico porque a missão é tornar a astrologia prática acessível. A maioria dos mapas astrais custa R$300 por UMA leitura. Aqui você recebe previsões TODA SEMANA por um valor mínimo."
    },
]


export function FAQSection() {
  return (
    <section className="py-20 px-4 bg-deep-purple">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold text-white mb-12">
          ❓ Você deve estar se perguntando...
        </h2>
        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-cosmic-night/50 border-vibrant-purple/30 rounded-lg mb-4 px-6">
                <AccordionTrigger className="font-headline text-lg text-left text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-slate-300 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
      <ChatWidget />
    </section>
  );
}
