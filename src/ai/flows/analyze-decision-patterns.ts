'use server';

/**
 * @fileOverview Analyzes the user's decision-making patterns and current sensations to provide a cosmic energy assessment.
 *
 * - analyzeDecisionPatterns - A function that handles the analysis of decision-making patterns.
 * - AnalyzeDecisionPatternsInput - The input type for the analyzeDecisionPatterns function.
 * - AnalyzeDecisionPatternsOutput - The return type for the analyzeDecisionPatterns function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeDecisionPatternsInputSchema = z.object({
  decisionPattern: z
    .string()
    .describe("The user's typical decision-making pattern."),
  currentSensation: z
    .string()
    .describe("The user's current emotional sensation."),
  areaOfLife: z
    .string()
    .describe('The area of life the user is focused on.'),
  sign: z.string().describe('The user selected zodiac sign.'),
  signQuestion1: z.string().describe('The answer to the first sign question'),
  signQuestion2: z.string().describe('The answer to the second sign question'),
  relationshipChallenge: z.string().describe('The relationship challenge experienced by the user'),
  overloadMental: z.string().describe('The mental overload experienced by the user'),
  deepestDesire: z.string().describe('The user deepest desire')
});

export type AnalyzeDecisionPatternsInput = z.infer<
  typeof AnalyzeDecisionPatternsInputSchema
>;

const AnalyzeDecisionPatternsOutputSchema = z.object({
  assessment: z.string().describe('The assessment of the cosmic energy.'),
  insights: z
    .array(z.string())
    .describe('Key insights into the user patterns and sensations.'),
  recommendations: z
    .array(z.string())
    .describe('Recommended actions based on the assessment.'),
});

export type AnalyzeDecisionPatternsOutput = z.infer<
  typeof AnalyzeDecisionPatternsOutputSchema
>;

export async function analyzeDecisionPatterns(
  input: AnalyzeDecisionPatternsInput
): Promise<AnalyzeDecisionPatternsOutput> {
  return analyzeDecisionPatternsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeDecisionPatternsPrompt',
  input: {schema: AnalyzeDecisionPatternsInputSchema},
  output: {schema: AnalyzeDecisionPatternsOutputSchema},
  prompt: `You are an expert astrologer providing cosmic energy assessments based on user inputs.

  Analyze the user's decision-making patterns, current sensations, and prioritized life area to provide an accurate and insightful assessment. Provide 3 insights and 3 recommendations based on the assessment.

  Sign: {{{sign}}}
  Sign Question 1: {{{signQuestion1}}}
  Sign Question 2: {{{signQuestion2}}}
  Decision-Making Pattern: {{{decisionPattern}}}
  Current Sensation: {{{currentSensation}}}
  Area of Life: {{{areaOfLife}}}
  Relationship Challenge: {{{relationshipChallenge}}}
  Mental Overload: {{{overloadMental}}}
  Deepest Desire: {{{deepestDesire}}}
  `,
});

const analyzeDecisionPatternsFlow = ai.defineFlow(
  {
    name: 'analyzeDecisionPatternsFlow',
    inputSchema: AnalyzeDecisionPatternsInputSchema,
    outputSchema: AnalyzeDecisionPatternsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
