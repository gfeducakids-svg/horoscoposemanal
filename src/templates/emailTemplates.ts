// src/templates/emailTemplates.ts
// Interface para os dados do e-mail de compra aprovada
interface ConfirmationEmailProps {
  name: string;
  access_url: string; // Link para o produto digital
}
// Interface para os dados do e-mail de carrinho abandonado
interface AbandonedCartEmailProps {
  name: string;
  checkout_link: string; // Link para finalizar a compra
}
/**
 * Template HTML para e-mails de pagamento aprovado.
 */
export function paymentApprovedTemplate({ name, access_url }: ConfirmationEmailProps): string {
  // Use interpolação de string para substituir os dados
  return `
    <!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>Acesso liberado – Recomeços Cósmicos 2025</title>
<style>
@media only screen and (max-width:600px){
  .container{width:100% !important}
  .p16{padding:16px !important}
  .center{text-align:center !important}
  .btn a{display:block !important}
}
</style>
</head>
<body style="margin:0; padding:0; background:#f6f7fb;">
  <center style="width:100%; background:#f6f7fb;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width:640px;" class="container">
      <tr>
        <td style="padding:24px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #eceef5;">
            <tr>
              <td style="background:#3b2a6e; background-image:linear-gradient(135deg,#3b2a6e,#6a49b8); padding:28px 24px; color:#ffffff; font-family:Arial,Helvetica,sans-serif;">
                <h1 style="margin:0; font-size:22px; line-height:1.3; font-weight:700;">✨ Bem-vinda, ${name}! Seu acesso ao <span style="white-space:nowrap;">Recomeços Cósmicos 2025</span> foi liberado</h1>
                <p style="margin:12px 0 0; font-size:14px; opacity:0.95;">Previsões semanais, alertas de trânsitos e portais de recomeço — tudo pronto para você usar agora.</p>
              </td>
            </tr>
            <tr>
              <td class="p16" style="padding:24px; font-family:Arial,Helvetica,sans-serif; color:#2c2c35;">
                
                <p style="margin:0 0 12px; font-size:15px;">Parabéns pela decisão! A partir de hoje, você terá clareza para agir no momento certo e evitar caminhos confusos.</p>
                
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:16px 0 8px;">
                  <tr>
                    <td class="btn" align="center" style="padding:8px 0;">
                      <a href="${access_url}" target="_blank" style="background:#27ae60; color:#ffffff; text-decoration:none; padding:14px 22px; border-radius:8px; display:inline-block; font-weight:700; font-size:15px;">🔮 Acessar minha área agora</a>
                    </td>
                  </tr>
                </table>

                <p style="margin:8px 0 0; font-size:12px; color:#666;">Se o botão não funcionar, copie e cole no navegador: <br><a href="${access_url}" style="color:#6a49b8; text-decoration:underline;">${access_url}</a></p>

                <hr style="border:none; border-top:1px solid #eceef5; margin:24px 0;">
                
                <h2 style="margin:0 0 10px; font-size:16px; color:#3b2a6e;">O que você acabou de receber</h2>
                <ul style="padding-left:18px; margin:8px 0 0; font-size:14px; line-height:1.55;">
                  <li><strong>Leitura energética semanal</strong> para o seu signo</li>
                  <li><strong>Alertas de trânsitos críticos</strong> (evite decisões impulsivas)</li>
                  <li><strong>Portais de recomeço</strong> mapeados para 2025–2026</li>
                  <li><strong>Guias rápidos de rituais & intenções</strong> alinhados ao céu</li>
                  <li><strong>Bônus:</strong> Guia dos Grandes Trânsitos 2025–2026 + Mapa Lunar da Manifestação</li>
                </ul>

                <div style="background:#f8f9ff; border:1px solid #eceef5; border-radius:10px; padding:14px; margin:18px 0;">
                  <p style="margin:0; font-size:14px;"><strong>Próximo passo :</strong></p>
                  <ol style="margin:10px 0 0; padding-left:18px; font-size:14px; line-height:1.55;">
                    <li>Clique em <em>“Acessar minha área”</em></li>
                    <li>Abra a aba <strong>“Semana Atual”</strong> e leia sua previsão.</li>
                    <li>Use o <strong>Mapa Lunar</strong> para definir 1 intenção simples.</li>
                  </ol>
                </div>

                <p style="margin:14px 0 0; font-size:13px; color:#444;">Dica: reserve 5 minutos toda segunda-feira para revisar seus portais da semana. Constância > intensidade.</p>

                <hr style="border:none; border-top:1px solid #eceef5; margin:20px 0;">

                <p style="margin:0 0 8px; font-size:13px; color:#2c2c35;"><strong>Garantia</strong>: você tem 7 dias para testar. Não sentiu clareza? Responda este e-mail e devolvemos 100% do valor.</p>
                <p style="margin:0; font-size:13px; color:#2c2c35;"><strong>Suporte</strong>: dúvidas ou acesso, fale com a equipe: <a href="mailto:gf.educakids@gmail.com" style="color:#6a49b8; text-decoration:underline;">gf.educakids@gmail.com</a></p>

                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:18px 0 0;">
                  <tr>
                    <td class="btn" align="center" style="padding:8px 0 0;">
                      <a href="${access_url}" target="_blank" style="background:#27ae60; color:#ffffff; text-decoration:none; padding:14px 22px; border-radius:8px; display:inline-block; font-weight:700; font-size:15px;">✨ Entrar no Recomeços Cósmicos 2025</a>
                    </td>
                  </tr>
                </table>

                <p style="margin:18px 0 0; font-size:12px; color:#8a8fa3;" class="center">Acesso vitalício aos materiais desta oferta</p>
              </td>
            </tr>
            <tr>
              <td style="background:#fafbff; padding:18px; text-align:center; font-family:Arial,Helvetica,sans-serif; color:#7a7f92; font-size:12px;">
                © ${new Date().getFullYear()} Recomeços Cósmicos • Todas as previsões em linguagem simples, sem jargões.  
                <br>Você recebeu este e-mail por ter concluído uma compra.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>
  `;
}
/**
 * Template HTML para e-mails de carrinho abandonado.
 */
export function cartAbandonedTemplate({ name, checkout_link }: AbandonedCartEmailProps): string {
  return `
    <!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>Finalize seu acesso – Recomeços Cósmicos 2025</title>
<style>
@media only screen and (max-width:600px){
  .container{width:100% !important}
  .p16{padding:16px !important}
  .center{text-align:center !important}
  .btn a{display:block !important}
}
</style>
</head>
<body style="margin:0; padding:0; background:#f6f7fb;">
  <center style="width:100%; background:#f6f7fb;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width:640px;" class="container">
      <tr>
        <td style="padding:24px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #eceef5;">
            <tr>
              <td style="background:#6a49b8; background-image:linear-gradient(135deg,#6a49b8,#9a7df0); padding:26px 24px; color:#ffffff; font-family:Arial,Helvetica,sans-serif;">
                <h1 style="margin:0; font-size:22px; line-height:1.3; font-weight:700;">🔮 ${name}, seu acesso quase foi concluído</h1>
                <p style="margin:10px 0 0; font-size:14px; opacity:0.95;">Finalize em 1 minuto e comece a semana com clareza e direção.</p>
              </td>
            </tr>
            <tr>
              <td class="p16" style="padding:22px 24px; font-family:Arial,Helvetica,sans-serif; color:#2c2c35;">
                
                <p style="margin:0 0 10px; font-size:15px;">Notamos que você iniciou a compra do <strong>Horóscopo Semanal – Recomeços Cósmicos 2025</strong>, mas não concluiu.</p>
                <p style="margin:0 0 14px; font-size:15px;">Antes que o momento passe, recupere seu carrinho e garanta as previsões desta semana por <strong>R$29,90</strong> (pagamento único).</p>

                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:12px 0 8px;">
                  <tr>
                    <td class="btn" align="center" style="padding:8px 0;">
                      <a href="${checkout_link}" target="_blank" style="background:#27ae60; color:#ffffff; text-decoration:none; padding:14px 22px; border-radius:8px; display:inline-block; font-weight:700; font-size:15px;">✅ Recuperar meu carrinho</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:8px 0 0; font-size:12px; color:#666;">Link direto: <a href="${checkout_link}" style="color:#6a49b8; text-decoration:underline;">${checkout_link}</a></p>

                <div style="background:#f8f9ff; border:1px solid #eceef5; border-radius:10px; padding:14px; margin:18px 0;">
                  <p style="margin:0 0 8px; font-size:14px;"><strong>Você leva agora:</strong></p>
                  <ul style="padding-left:18px; margin:0; font-size:14px; line-height:1.6;">
                    <li>Previsões semanais claras (amor, carreira, emoções)</li>
                    <li>Alertas de trânsitos críticos (evite decisões impulsivas)</li>
                    <li>Portais de Recomeço mapeados para 2025–2026</li>
                    <li>Guias rápidos de rituais e intenções</li>
                    <li><strong>Bônus:</strong> Guia dos Grandes Trânsitos 2025–2026 + Mapa Lunar da Manifestação</li>
                  </ul>
                </div>

                <h2 style="margin:0 0 8px; font-size:16px; color:#3b2a6e;">Por que concluir agora?</h2>
                <ul style="padding-left:18px; margin:0 0 10px; font-size:14px; line-height:1.55;">
                  <li>Clareza imediata para a semana atual (sem esperar o “momento perfeito”)</li>
                  <li>Linguagem simples, sem jargões — aplique em 3 minutos</li>
                  <li>Garantia incondicional de 7 dias — risco zero</li>
                </ul>

                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:14px 0 0;">
                  <tr>
                    <td class="btn" align="center" style="padding:6px 0 0;">
                      <a href="${checkout_link}" target="_blank" style="background:#27ae60; color:#ffffff; text-decoration:none; padding:14px 22px; border-radius:8px; display:inline-block; font-weight:700; font-size:15px;">🔁 Retomar minha compra</a>
                    </td>
                  </tr>
                </table>

                <hr style="border:none; border-top:1px solid #eceef5; margin:20px 0;">

                <p style="margin:0 0 6px; font-size:13px; color:#2c2c35;"><strong>Dúvidas rápidas</strong></p>
                <p style="margin:0; font-size:13px; color:#444;"><strong>É difícil de usar?</strong> Não. As previsões são curtas e objetivas, com passos práticos.</p>
                <p style="margin:8px 0 0; font-size:13px; color:#444;"><strong>E se eu não gostar?</strong> Você tem 7 dias para testar. Se não curtir, devolvemos 100%.</p>
                <p style="margin:8px 0 0; font-size:13px; color:#444;"><strong>Suporte?</strong> Responda este e-mail ou escreva para <a href="mailto:gf.educakids@gmail.com" style="color:#6a49b8; text-decoration:underline;">gf.educakids@gmail.com</a>.</p>

                <p style="margin:16px 0 0; font-size:12px; color:#8a8fa3;">Dica: recuperar o carrinho leva menos de 60 segundos.</p>
              </td>
            </tr>
            <tr>
              <td style="background:#fafbff; padding:18px; text-align:center; font-family:Arial,Helvetica,sans-serif; color:#7a7f92; font-size:12px;">
                Horóscopo Semanal – Recomeços Cósmicos 2025 • Pagamento único R$29,90 • Acesso imediato
                <br>Se você já concluiu a compra, pode ignorar este e-mail.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>
  `;
}
