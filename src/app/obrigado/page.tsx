'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Gift, Shield } from 'lucide-react';
import { UpsellTimer } from '@/components/obrigado/UpsellTimer';

const benefits = [
    'Clareza imediata sobre o que o universo realmente está te pedindo essa semana.',
    'Decisões seguras, sem dúvida ou confusão mental.',
    'Leveza emocional, sentindo-se finalmente “no fluxo certo”.',
    'Aplicação prática: 5 minutos por semana com o seu Mapa da Clareza.',
    'Economia de energia: nada de rituais longos, só foco no essencial.',
    'Reconexão com a intuição, sem depender de previsões externas.',
    'Aceleração dos recomeços: manifeste em 1/3 do tempo.',
    'Segurança energética: evite retrocessos e recaídas emocionais.',
];

const bonuses = [
    'Mapa da Clareza Cósmica',
    'Bônus 1: Guia de Desbloqueio Semanal',
    'Bônus 2: Planner Energético Lunar 2025 –',
];

export default function ObrigadoPage() {
    return (
        <div className="bg-light-lilac text-deep-purple font-body">
            <div className="relative container mx-auto max-w-3xl py-12 px-4 text-center">

                <UpsellTimer />

                {/* PARTE 1: HEADLINE + ALIVIAR ANSIEDADE */}
                <header className="mb-12">
                    <h1 className="font-headline text-3xl md:text-4xl font-bold text-vibrant-purple mb-4 animate-fade-in-up">
                        ✨ Sua compra foi confirmada — e o universo acabou de te dar um sinal claro de recomeço.
                    </h1>
                    <div className="text-left space-y-4 text-deep-purple/90 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <p>Parabéns pela sua decisão! Você acaba de garantir o <span className="font-bold">Horóscopo Semanal – Recomeços Cósmicos 2025</span> — uma das ferramentas mais poderosas para entender o ritmo do universo e agir no momento certo.</p>
                        <p>A maioria das pessoas continua perdida entre dúvidas e impulsos. Você foi diferente — escolheu clareza e alinhamento.</p>
                        <p>Com suas previsões, vai saber quando agir, quando esperar e como se alinhar aos portais de recomeço de 2025.</p>
                        <p className="font-bold">Porém... há um detalhe que quase ninguém percebe: existem padrões energéticos que sabotam seus recomeços mesmo quando o céu está a favor.</p>
                    </div>
                </header>

                {/* PARTE 2 & 3: PROBLEMA + AGITAR DOR */}
                <section className="my-16 p-6 bg-white/50 rounded-2xl border border-vibrant-purple/20 shadow-lg">
                    <h2 className="font-headline text-2xl md:text-3xl font-bold text-vibrant-purple mb-4">
                        Você já notou que, mesmo sabendo o que deve fazer, algo parece travar?
                    </h2>
                    <div className="space-y-4 text-deep-purple/80">
                        <p>É o <span className="font-bold">ciclo oculto da indecisão</span> — uma combinação entre o signo solar e o “arco kármico” da semana.</p>
                        <p>Quando ele está desalinhado, suas intenções se contradizem: você quer mudar, mas o inconsciente puxa para trás.</p>
                        <p className="text-vibrant-purple font-semibold">Isso é cruel, porque o universo te mostra o caminho, mas a mente cria neblina.</p>
                        <p>Você sente o impulso de agir, depois vem a culpa, a dúvida, o medo de repetir tudo. As semanas passam e nada muda — o “recomeço cósmico” vira uma promessa distante.</p>
                        <p className="font-bold text-urgency-red">E o pior: você vai saber que tinha o mapa nas mãos e mesmo assim continuou travada.</p>
                    </div>
                </section>

                {/* PARTE 4: CARD BENEFÍCIOS */}
                <section className="my-16">
                     <h2 className="font-headline text-2xl md:text-3xl font-bold text-vibrant-purple mb-8">
                        🌙 Imagine sua vida quando você destravar o padrão energético que mais te sabota:
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-cta-green flex-shrink-0 mt-1" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PARTE 5 & 6: APRESENTAR SOLUÇÃO + PREÇO */}
                <section className="my-16">
                    <h2 className="font-headline text-2xl md:text-3xl font-bold text-vibrant-purple mb-4">
                        É exatamente por isso que eu criei o Mapa da Clareza Cósmica.
                    </h2>
                    <div className="space-y-4 text-deep-purple/80 mb-12">
                        <p>Ele é um <span className="font-bold">guia rápido + template digital</span> que mostra, em 10 minutos, qual energia está bloqueando seu recomeço e como realinhá-la usando o mesmo Sistema Celeste de Sincronicidade.</p>
                        <p>Em vez de tentar interpretar o céu sozinha, você só preenche o mapa e vê o padrão se revelar.</p>
                        <p className="font-bold">É literally o que separa quem lê o horóscopo e não aplica de quem usa o horóscopo para transformar a própria vida.</p>
                    </div>

                    <Card className="bg-white/70 border-vibrant-purple/30 shadow-2xl shadow-vibrant-purple/20 p-6 md:p-8">
                        <CardContent className="p-0">
                            <h3 className="font-headline text-xl md:text-2xl font-bold text-vibrant-purple mb-6">
                                Quanto vale eliminar a confusão e manifestar seus recomeços em 1/3 do tempo?
                            </h3>
                             <p className="text-deep-purple/80 mb-4">Normalmente, este diagnóstico é vendido por <span className="line-through">R$249</span> em consultas individuais. Mas como você acabou de se tornar aluna do Recomeços Cósmicos 2025, poderá acessar tudo por apenas <span className="font-bold">R$19,90</span> — pagamento único e acesso vitalício.</p>

                            <div className="bg-vibrant-purple/10 rounded-lg p-6 my-6 text-left">
                                <h4 className="font-headline font-bold text-lg mb-4 text-dark-gray">Você vai receber:</h4>
                                <ul className="space-y-2 text-dark-gray">
                                    {bonuses.map((bonus, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Gift className="w-5 h-5 text-cosmic-gold" />
                                            <span>{bonus}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="font-headline text-vibrant-purple mb-8">
                                <p className="text-xl">Investimento Hoje:</p>
                                <p className="text-5xl font-extrabold">R$19,90</p>
                                <p className="text-lg text-cta-green font-bold">(92% OFF)</p>
                            </div>
                             <p className="text-sm text-deep-purple/70">Menos que um almoço ou uma netflix. O retorno e a clareza é por um ano inteiro.</p>

                        </CardContent>
                    </Card>
                </section>

                {/* PARTE 7: GARANTIA + CTA */}
                <section className="my-16">
                     <div className="flex items-center justify-center gap-3 mb-6">
                        <Shield className="w-8 h-8 text-vibrant-purple" />
                        <h3 className="font-headline text-2xl font-bold text-vibrant-purple">Risco zero. O universo confia — e eu também.</h3>
                     </div>
                     <p className="text-deep-purple/80 mb-6">Se dentro de 7 dias você sentir que o mapa não trouxe clareza, devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia. Todo risco é meu.</p>
                     <p className="font-bold text-urgency-red mb-8">Mas atenção: essa página aparece apenas uma vez. Quando sair dela, a oferta expira e os bônus desaparecem.</p>

                    <a href="https://pay.kiwify.com.br/9Y9PJSZ" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full h-auto text-xl font-bold py-4 px-8 rounded-lg bg-cta-green text-white hover:bg-cta-green/90 animate-pulse-glow" style={{ animationName: 'pulse-glow-green' }}>
                            EU QUERO
                        </Button>
                    </a>
                    <Button variant="link" className="text-urgency-red hover:text-urgency-red/80 mt-4">
                        Não, obrigado, quero apenas o meu produto
                    </Button>
                </section>
            </div>
        </div>
    );
}
