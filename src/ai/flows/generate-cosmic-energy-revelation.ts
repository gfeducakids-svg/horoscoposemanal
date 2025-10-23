'use server';

/**
 * @fileOverview Generates personalized results based on quiz answers, revealing cosmic energy and insights.
 *
 * - generateCosmicEnergyRevelation - A function that generates cosmic energy revelations.
 * - GenerateCosmicEnergyRevelationInput - The input type for the generateCosmicEnergyRevelation function.
 * - GenerateCosmicEnergyRevelationOutput - The return type for the generateCosmicEnergyRevelation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCosmicEnergyRevelationInputSchema = z.object({
  sign: z.string().describe('The user\'s zodiac sign.'),
  question1Answer: z.string().describe('The answer to the first personalized question.'),
  question2Answer: z.string().describe('The answer to the second personalized question.'),
  lifeArea: z.string().describe('The area of life needing a fresh start.'),
  decisionPattern: z.string().describe('The user\'s decision-making pattern.'),
  currentFeeling: z.string().describe('The user\'s current sensation.'),
  mentalOverload: z.string().describe('What is causing mental overload.'),
  relationshipChallenge: z.string().describe('The biggest relationship challenge.'),
  deepestDesire: z.string().describe('The user\'s deepest desire for the future.'),
  commitmentLevel: z.string().describe('The user\'s commitment level to act.'),
});
export type GenerateCosmicEnergyRevelationInput = z.infer<typeof GenerateCosmicEnergyRevelationInputSchema>;

const GenerateCosmicEnergyRevelationOutputSchema = z.object({
  resultText: z.string().describe('The personalized cosmic energy revelation text.'),
});
export type GenerateCosmicEnergyRevelationOutput = z.infer<typeof GenerateCosmicEnergyRevelationOutputSchema>;

export async function generateCosmicEnergyRevelation(input: GenerateCosmicEnergyRevelationInput): Promise<GenerateCosmicEnergyRevelationOutput> {
  return generateCosmicEnergyRevelationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCosmicEnergyRevelationPrompt',
  input: {schema: GenerateCosmicEnergyRevelationInputSchema},
  output: {schema: GenerateCosmicEnergyRevelationOutputSchema},
  prompt: `Based on the quiz answers provided, generate a personalized cosmic energy revelation for the user.

Sign: {{sign}}
Question 1 Answer: {{question1Answer}}
Question 2 Answer: {{question2Answer}}
Life Area: {{lifeArea}}
Decision Pattern: {{decisionPattern}}
Current Feeling: {{currentFeeling}}
Mental Overload: {{mentalOverload}}
Relationship Challenge: {{relationshipChallenge}}
Deepest Desire: {{deepestDesire}}
Commitment Level: {{commitmentLevel}}

Consider these answers to reveal the user's cosmic energy and provide insights into their potential fresh start, aligning with their astrological profile and current challenges and desires.  The response should be in markdown format.

Here's a template for the output:

🔮 [SIGNO] – [TEMA DO RECOMEÇO]

[Nome], vi que você [referência às respostas personalizadas].
Isso faz todo sentido com o que os astros estão te mostrando...

───────────────────

✨ SEU RECOMEÇO CHEGOU.

[Parágrafo de identificação profunda baseado no signo]

───────────────────

😮 SURPRESA?

Eu também fiquei quando vi seu perfil energético:

[3 INSIGHTS BASEADOS EM TRÂNSITOS REAIS]
✨ [Trânsito 1] está ativando [área de vida]
⚡ [Trânsito 2] pode [desafio ou oportunidade]
🎯 [Trânsito 3] te convida a [ação específica]

───────────────────

A BOA NOTÍCIA?

Com o Sistema Celeste de Sincronicidade, você vai saber:

→ Quando agir com toda sua força
→ Quando esperar sem se sentir travada
→ Como usar sua energia a seu favor

───────────────────
`,
});

const generateCosmicEnergyRevelationFlow = ai.defineFlow(
  {
    name: 'generateCosmicEnergyRevelationFlow',
    inputSchema: GenerateCosmicEnergyRevelationInputSchema,
    outputSchema: GenerateCosmicEnergyRevelationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
