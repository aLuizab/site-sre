import { mentoria } from '@/data/mentoria';
import { SITE_URL } from '@/lib/seo';

/**
 * RFC 9116: onde um pesquisador de segurança reporta uma falha.
 * Sem isso, quem acha algo não sabe para quem contar — e desiste, ou
 * publica.
 *
 * `Expires` é obrigatório pela RFC e vale um ano a partir do build;
 * a página é estática, então o valor é fixado na geração.
 */
export const dynamic = 'force-static';

export function GET() {
  const expira = new Date();
  expira.setFullYear(expira.getFullYear() + 1);

  const corpo = [
    `Contact: mailto:${mentoria.email}`,
    `Expires: ${expira.toISOString()}`,
    'Preferred-Languages: pt, en, es',
    `Canonical: ${SITE_URL}/.well-known/security.txt`,
    '',
  ].join('\n');

  return new Response(corpo, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
