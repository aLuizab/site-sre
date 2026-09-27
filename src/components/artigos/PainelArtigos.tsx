import Link from 'next/link';
import { getPublicacoes } from '@/lib/publicacoes';
import { formatarData } from '@/lib/formatarData';
import { ArtigoCard } from '@/components/artigos/ArtigoCard';
import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n';

/**
 * Painel de artigos da coluna direita da home.
 *
 * Fica `sticky` a partir de lg — abaixo disso não existe segunda coluna,
 * então ele vira uma seção comum no fim do conteúdo. Sem artigos (feed
 * fora do ar, conta sem posts) o painel inteiro some, em vez de deixar
 * uma coluna vazia ocupando espaço.
 */
export async function PainelArtigos({
  locale,
  c,
  max = 4,
}: {
  locale: Locale;
  c: Conteudo;
  max?: number;
}) {
  const artigos = (await getPublicacoes(12)).slice(0, max);
  if (artigos.length === 0) return null;

  return (
    // O sticky fica no contêiner da coluna, em page.tsx, para o painel
    // grudar junto com o bloco de inscrição e não separado dele.
    <aside aria-labelledby="titulo-artigos">
      <div className="rounded-xl border border-border bg-background/60 p-5 backdrop-blur">
        <p className="font-mono text-sm text-accent">{c.secoes.artigos.eyebrow}</p>
        <h2 id="titulo-artigos" className="mt-1 text-lg font-semibold tracking-tight">
          {c.secoes.artigos.titulo}
        </h2>

        <ul className="mt-4 space-y-3">
          {artigos.map((artigo) => (
            <li key={artigo.id}>
              <ArtigoCard
                artigo={artigo}
                dataFormatada={formatarData(artigo.data, locale)}
                compacto
              />
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm">
          <Link
            href={`/${locale}/artigos`}
            className="text-muted underline underline-offset-4 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {c.ui.verTodosArtigos}
          </Link>
        </p>
      </div>
    </aside>
  );
}
