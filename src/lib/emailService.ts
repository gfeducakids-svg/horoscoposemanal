// src/lib/emailService.ts
import nodemailer from 'nodemailer';
interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}
// Configura o "transportador" que se conecta ao Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
/**
 * Envia um e-mail usando as credenciais configuradas.
 */
export async function sendEmail({ to, subject, html }: SendEmailParams) {
  // Verifica se as credenciais foram carregadas
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('❌ Credenciais do Gmail não configuradas nas variáveis de ambiente.');
    throw new Error('Serviço de email não configurado.');
  }
  const mailOptions = {
    from: `"Nome da Sua Marca" <${process.env.GMAIL_USER}>`, // Personalize o remetente
    to,
    subject,
    html, // O corpo do e-mail em HTML
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('[EmailService] ✅ E-mail enviado com sucesso: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('[EmailService] ❌ Erro ao enviar e-mail:', error);
    throw new Error('Falha ao enviar o e-mail.');
  }
}
