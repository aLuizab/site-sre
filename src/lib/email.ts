import 'server-only';
import { Resend } from 'resend';
import { mentoria } from '@/data/mentoria';

/**
 * Envio de e-mail pelo servidor, via Resend.
 *
 * Por que Resend e não SMTP do Gmail: com SMTP a senha de aplicativo do
 * Google ficaria no servidor — um segredo que dá acesso à caixa inteira.
 * A chave do Resend só sabe enviar, e pode ser revogada sem mexer na
 * conta do Google.
 *
 * Sem domínio verificado no Resend, o remetente precisa ser o
 * `onboarding@resend.dev` deles, e o serviço só entrega para o e-mail
 * dono da conta. Como o destino é justamente o e-mail da Ana, isso
 * basta — desde que a conta no Resend seja criada com esse mesmo e-mail.
 *
 * `server-only` no topo: importar isto num Client Component quebra o
 * build, em vez de vazar a chave para o navegador.
 */

export interface EmailMentoria {
  nome: string;
  email: string;
  whatsapp: string;
  cargo: string;
  objetivo: string;
  idioma: string;
}

export type ResultadoEnvio =
  | { estado: 'ok' }
  | { estado: 'naoConfigurado' }
  | { estado: 'erro'; motivo: string };

export function emailConfigurado(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

export async function enviarEmailMentoria(dados: EmailMentoria): Promise<ResultadoEnvio> {
  const chave = process.env.RESEND_API_KEY?.trim();
  if (!chave) return { estado: 'naoConfigurado' };

  const destino = process.env.EMAIL_DESTINO?.trim() || mentoria.email;
  const remetente = process.env.EMAIL_REMETENTE?.trim() || 'Site <onboarding@resend.dev>';

  /*
   * Texto puro, sem HTML: os campos vêm de quem preencheu o formulário e
   * não devem virar markup em lugar nenhum. E cada campo já chegou aqui
   * sem quebra de linha (ver acoes.ts), então não há como injetar uma
   * linha "Bcc:" ou parecida.
   */
  const corpo = [
    `Nome:      ${dados.nome}`,
    `E-mail:    ${dados.email}`,
    `WhatsApp:  ${dados.whatsapp}`,
    `Cargo:     ${dados.cargo || '(não informado)'}`,
    `Idioma:    ${dados.idioma}`,
    '',
    'Objetivo:',
    dados.objetivo,
    '',
    '—',
    'Enviado pelo formulário de mentoria do site.',
  ].join('\n');

  try {
    const resend = new Resend(chave);
    const { error } = await resend.emails.send({
      from: remetente,
      to: [destino],
      // Responder cai direto para quem pediu a mentoria.
      replyTo: dados.email,
      subject: `Mentoria — ${dados.nome}`,
      text: corpo,
    });

    if (error) {
      console.error('[email] Resend recusou:', error.name, error.message);
      return { estado: 'erro', motivo: error.message };
    }
    return { estado: 'ok' };
  } catch (e) {
    const motivo = e instanceof Error ? e.message : String(e);
    console.error('[email] falha ao enviar:', motivo);
    return { estado: 'erro', motivo };
  }
}
