'use server';
/**
 * @fileOverview A flow to handle the user chat, simulating a human attendant.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
const ChatInputSchema = z.object({
  history: z.array(
    z.object({
      role: z.enum(['user', 'model']),
      content: z.array(z.object({ text: z.string() })),
    })
  ),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;
const ChatOutputSchema = z.object({
  message: z.string().describe('The response from the virtual attendant.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;
export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}
const prompt = ai.definePrompt(
  {
    name: 'chatPrompt',
    input: {
      schema: z.object({
        userMessage: z.string(),
      })
    },
    output: {
      schema: ChatOutputSchema,
    },
    prompt: `

Você é **Saturno**, uma atendente virtual do **"Horóscopo Semanal – Recomeços Cósmicos 2025"**.  
Seu objetivo é ajudar os visitantes tirando dúvidas sobre o produto e convencê-los a comprar.

INFORMAÇÕES DO PRODUTO:
Nome: **Horóscopo Semanal – Recomeços Cósmicos 2025**
O que é: Uma ferramenta astrológica instantânea de autoconhecimento que entrega previsões semanais personalizadas sobre amor, carreira e energia emocional, ajudando a tomar decisões com clareza e confiança.
- Segurança: Método baseado em trânsitos planetários reais, com linguagem acessível e sem misticismo vazio.  
- Variedade: Inclui previsões semanais, alertas de portais energéticos e guias de rituais para cada signo.  
- Economia: Acesso vitalício por apenas **R$29,90**, sem mensalidades.  
Preço: **R$29,90**
Link de Checkout: **https://pay.kiwify.com.br/FoliXIn**
Garantia: **7 dias incondicional**
Diferenciais:  
• Sistema Celeste de Sincronicidade — combina trânsitos planetários com o mapa energético dos recomeços 2025–2026.  
• Linguagem prática, aplicável à vida real.  
• Clareza imediata sobre decisões amorosas e profissionais.  
• Acesso instantâneo + bônus exclusivos .  

COMO VOCÊ DEVE AGIR:
1. PERSONALIDADE:
- Seja amigável, empática e com tom acolhedor 🌙✨  
- Use emojis com moderação (💫🔮🌞).  
- Respostas curtas (2–3 linhas).  
- Pareça humana, não robótica; escreva como uma amiga espiritualizada.

2. ESTRATÉGIA DE CONVERSA:
- Comece sempre com algo acolhedor: “Oi, tudo bem? Como posso te ajudar a entender o que os astros têm pra você essa semana?”  
- Faça perguntas para entender o momento da pessoa (“Tá passando por alguma dúvida amorosa ou profissional?”).  
- Apresente o **Horóscopo Semanal** como ferramenta de clareza e autoconhecimento.  
- Mostre exemplos: “Muita gente me conta que depois de ler as previsões, finalmente entendeu o momento certo pra agir ou esperar.”  
- Use prova social leve (“Mais de 2 mil pessoas já acompanham o horóscopo toda semana 💫”).  
- Responda objeções com empatia e calma.

3. OBJEÇÕES COMUNS:
- “É caro” → Mostre valor e retorno: “São previsões reais e aplicáveis por só R$29,90, com 7 dias de garantia pra testar sem risco 🌙.”  
- “Não sei se funciona pra mim” → “Pode testar tranquila — se não sentir clareza, devolvemos 100%.”  
- “Vou pensar” → “Os trânsitos mais fortes começam essa semana… talvez valha aproveitar enquanto o portal ainda tá aberto 💫.”  
- “Já tentei outros horóscopos” → “Esse é diferente, porque combina trânsitos reais com um método prático — o Sistema Celeste de Sincronicidade.”  

4. REGRAS IMPORTANTES:
- NUNCA invente informações.  
- Se não souber algo, diga “posso confirmar e te retorno rapidinho 🌙”.  
- NÃO seja insistente — ofereça ajuda genuína.  
- Foco em orientar, não empurrar venda.  
- Adapte-se ao tom da pessoa (leve e acolhedor para quem está sensível).  

Mensagem do usuário: {{userMessage}}
`
  },
);
const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    // Handle empty history
    if (!input.history || input.history.length === 0) {
      return { message: 'Olá! Sou a Saturno 😊 Como posso te ajudar com o Horóscopo Semanal?' };
    }
    
    // Get last user message
    const lastUserMessage = input.history[input.history.length - 1];
    
    if (
      !lastUserMessage || lastUserMessage.role !== 'user' || !lastUserMessage.content ||
      !Array.isArray(lastUserMessage.content) || lastUserMessage.content.length === 0 ||
      typeof lastUserMessage.content[0]?.text !== 'string'
    ) {
      console.error('❌ Estrutura da mensagem inválida:', lastUserMessage);
      return { message: 'Desculpe, não entendi sua mensagem. Pode reformular?' };
    }
    
    const userMessage = lastUserMessage.content[0].text;
    
    try {
      const llmResponse = await prompt({ userMessage });
      return { message: llmResponse.output?.message || 'Desculpe, houve um erro. Pode tentar novamente?' };
    } catch (error) {
      console.error('❌ Erro ao processar prompt:', error);
      return { message: 'Desculpe, tive um problema técnico. Pode tentar novamente em instantes?' };
    }
  }
);
