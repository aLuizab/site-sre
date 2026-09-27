import 'server-only';
import { getArtigosMedium } from '@/lib/medium';
import { getPostsSubstack } from '@/lib/substack';
import { artigosDestaque } from '@/data/artigos';

export type FontePublicacao = 'medium' | 'substack';

/** Um texto publicado, venha do Medium ou do Substack. */
export interface Publicacao {
  id: string;
  fonte: FontePublicacao;
  titulo: string;
  url: string;
  /** ISO "AAAA-MM-DD"; string vazia quando o feed não informou. */
  data: string;
  resumo: string;
  tags: string[];
}

/**
 * Junta os dois feeds numa lista só, do mais recente para o mais antigo.
 *
 * Os dois são buscados em paralelo e cada um falha por conta própria: se
 * o Substack estiver fora do ar, os artigos do Medium continuam
 * aparecendo, e vice-versa. Retorna `[]` só quando não há nada em lugar
 * nenhum.
 */
export async function getPublicacoes(max = 20): Promise<Publicacao[]> {
  const [medium, substack] = await Promise.all([
    getArtigosMedium(max),
    getPostsSubstack(max),
  ]);

  const tudo: Publicacao[] = [
    ...(medium ?? []).map(
      (a): Publicacao => ({
        id: a.id,
        fonte: 'medium',
        titulo: a.titulo,
        url: a.url,
        data: a.data,
        resumo: a.resumo,
        tags: a.tags,
      })
    ),
    ...(substack ?? []).map(
      (p): Publicacao => ({
        id: p.id,
        fonte: 'substack',
        titulo: p.titulo,
        url: p.url,
        data: p.data,
        resumo: p.resumo,
        tags: [],
      })
    ),
  ];

  // Sem data vai para o fim, em vez de disputar o topo com string vazia.
  tudo.sort((a, b) => (b.data || '').localeCompare(a.data || ''));

  return ordenarPorDestaque(tudo).slice(0, max);
}

/**
 * Põe os itens marcados em `artigosDestaque` na frente, na ordem em que
 * aparecem lá; o resto mantém a ordem recebida. Id de destaque que não
 * existe mais é ignorado.
 */
function ordenarPorDestaque(itens: Publicacao[]): Publicacao[] {
  if (artigosDestaque.length === 0) return itens;

  const posicao = new Map(artigosDestaque.map((id, i) => [id, i]));

  const destacados = itens
    .filter((p) => posicao.has(p.id))
    .sort((a, b) => posicao.get(a.id)! - posicao.get(b.id)!);

  return [...destacados, ...itens.filter((p) => !posicao.has(p.id))];
}
