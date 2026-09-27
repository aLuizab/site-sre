import 'server-only';

/** Publicação usada quando SUBSTACK_PUBLICATION não está no ambiente. */
const PUBLICACAO_PADRAO = 'aluizatech';

export function getPublicacao(): string {
  return process.env.SUBSTACK_PUBLICATION ?? PUBLICACAO_PADRAO;
}

export function getUrlPublicacao(): string {
  return `https://${getPublicacao()}.substack.com`;
}

export type ResultadoSubstack =
  | { estado: 'ok' }
  | { estado: 'invalido'; motivo?: string }
  | { estado: 'erro' };

/**
 * Inscreve um e-mail na publicação do Substack.
 *
 * O endpoint é o mesmo que o widget oficial de inscrição do Substack usa
 * por baixo. Não é uma API documentada — o Substack não publica uma —
 * então vale saber: se um dia ele mudar, o formulário passa a devolver
 * erro e o caminho de volta é trocar por um <iframe src=".../embed">,
 * que é o oficial, em troca de perder o visual do site.
 *
 * Roda só no servidor: assim o navegador de quem se inscreve não fala
 * direto com o Substack, e o CSP do site não precisa liberar o domínio
 * deles em connect-src.
 */
export async function inscreverNoSubstack(email: string): Promise<ResultadoSubstack> {
  const base = getUrlPublicacao();

  try {
    const res = await fetch(`${base}/api/v1/free`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: '*/*',
        // Sem estes três o Substack responde como se fosse outra origem.
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
        origin: base,
        referer: `${base}/`,
      },
      body: JSON.stringify({
        email,
        first_url: `${base}/`,
        first_referrer: '',
        current_url: `${base}/`,
        current_referrer: '',
        referral_code: '',
        source: 'embed',
        referring_pub_id: null,
        additional_referring_pub_id: null,
      }),
      // Inscrição é ação, não leitura: nunca reaproveitar resposta em cache.
      cache: 'no-store',
    });

    if (res.ok) return { estado: 'ok' };

    /*
     * 400 é o Substack recusando o endereço (domínio inexistente, sintaxe
     * inválida). A mensagem dele é em inglês e às vezes técnica demais,
     * então só usamos o fato de ter sido recusado — o texto que a pessoa
     * lê vem do dicionário do site, no idioma da página.
     */
    if (res.status === 400) {
      const corpo = (await res.json().catch(() => null)) as
        | { errors?: { msg?: string }[] }
        | null;
      return { estado: 'invalido', motivo: corpo?.errors?.[0]?.msg };
    }

    console.error('[substack] resposta inesperada:', res.status);
    return { estado: 'erro' };
  } catch (erro) {
    console.error('[substack] falha de rede ao inscrever:', erro);
    return { estado: 'erro' };
  }
}

export interface PostSubstack {
  id: string;
  titulo: string;
  url: string;
  /** ISO "AAAA-MM-DD". */
  data: string;
  resumo: string;
}

/**
 * Posts publicados, pelo feed RSS da publicação. Retorna `null` quando o
 * feed falha e `[]` quando a publicação ainda não tem post nenhum — quem
 * chama trata os dois casos como "nada a mostrar".
 */
export async function getPostsSubstack(max = 10): Promise<PostSubstack[] | null> {
  const base = getUrlPublicacao();

  try {
    const res = await fetch(`${base}/feed`, {
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; site-sre/1.0)' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const xml = await res.text();
    const posts: PostSubstack[] = [];

    for (const bruto of xml.split('<item>').slice(1)) {
      const item = bruto.split('</item>')[0];

      const titulo = tag(item, 'title');
      const link = tag(item, 'link');
      const pubDate = tag(item, 'pubDate');
      if (!titulo || !link) continue;

      posts.push({
        id: tag(item, 'guid') ?? link,
        titulo,
        url: link.split('?')[0],
        data: pubDate ? new Date(pubDate).toISOString().slice(0, 10) : '',
        resumo: limpar(tag(item, 'description') ?? ''),
      });

      if (posts.length === max) break;
    }

    return posts;
  } catch {
    return null;
  }
}

function tag(item: string, nome: string): string | null {
  const m = item.match(new RegExp(`<${nome}[^>]*>([\\s\\S]*?)</${nome}>`));
  if (!m) return null;
  return m[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim() || null;
}

function limpar(html: string, limite = 180): string {
  const texto = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (texto.length <= limite) return texto;
  return texto.slice(0, texto.lastIndexOf(' ', limite)).trimEnd() + '…';
}
