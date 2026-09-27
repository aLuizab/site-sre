import { ArrowUpRight } from 'lucide-react';
import type { Publicacao } from '@/lib/publicacoes';
import { Chip } from '@/components/ui/Chip';

const NOME_FONTE: Record<Publicacao['fonte'], string> = {
  medium: 'Medium',
  substack: 'Substack',
};

/**
 * `compacto` é a versão do painel lateral: sem resumo e sem tags, porque
 * a coluna é estreita e o que importa ali é o título mais a data.
 */
export function ArtigoCard({
  artigo,
  dataFormatada,
  compacto = false,
}: {
  artigo: Publicacao;
  dataFormatada: string;
  compacto?: boolean;
}) {
  return (
    <a
      href={artigo.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full flex-col rounded-xl border border-border transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        compacto ? 'p-4' : 'p-5'
      }`}
    >
      <p className="flex items-center gap-2 font-mono text-xs text-accent">
        {dataFormatada ? (
          <time dateTime={artigo.data}>{dataFormatada}</time>
        ) : null}
        {/*
          De onde veio o texto. Com duas fontes na mesma lista, sem isso
          não dá para saber para onde o link leva antes de clicar.
        */}
        <span className="text-muted">· {NOME_FONTE[artigo.fonte]}</span>
      </p>

      <h3
        className={`mt-1 font-medium group-hover:text-accent ${
          compacto ? 'text-sm leading-snug' : ''
        }`}
      >
        {artigo.titulo}
        <ArrowUpRight
          className="ml-1 inline shrink-0 align-[-2px] opacity-0 transition-opacity group-hover:opacity-100"
          size={compacto ? 14 : 16}
          aria-hidden="true"
        />
      </h3>

      {!compacto && artigo.resumo ? (
        <p className="mt-2 text-sm text-muted">{artigo.resumo}</p>
      ) : null}

      {!compacto && artigo.tags.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {artigo.tags.slice(0, 4).map((tag) => (
            <li key={tag}>
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
      ) : null}
    </a>
  );
}
