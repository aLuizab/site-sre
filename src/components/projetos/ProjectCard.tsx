import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { Chip } from '@/components/ui/Chip';
import type { ProjetoBase } from '@/data/projetos';
import { preencher, type Conteudo, type ConteudoProjeto } from '@/i18n';

export function ProjectCard({
  projeto,
  texto,
  c,
}: {
  projeto: ProjetoBase;
  texto: ConteudoProjeto;
  c: Conteudo;
}) {
  const temLinks = Boolean(projeto.repoUrl || projeto.demoUrl);

  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-border p-6">
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{projeto.nome}</h3>
        <p className="mt-1 font-mono text-sm text-accent">{texto.resumo}</p>
        <p className="mt-4 text-sm text-muted">{texto.descricao}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {projeto.tags.map((tag) => (
            <li key={tag}>
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
      </div>
      {temLinks ? (
        <div className="mt-6 flex items-center gap-4">
          {projeto.repoUrl ? (
            <a
              href={projeto.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={preencher(c.ui.ariaRepositorio, { nome: projeto.nome })}
              className="text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <GithubIcon size={20} aria-hidden="true" />
            </a>
          ) : null}
          {projeto.demoUrl ? (
            // O domínio fica escrito: é o site do produto, e o texto já
            // diz para onde o link leva, sem precisar de aria-label.
            <a
              href={projeto.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <ExternalLink size={16} aria-hidden="true" />
              {new URL(projeto.demoUrl).hostname}
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
