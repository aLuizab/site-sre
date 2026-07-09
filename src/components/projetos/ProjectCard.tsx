import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { Chip } from '@/components/ui/Chip';
import type { Projeto } from '@/data/projetos';

export function ProjectCard({ projeto }: { projeto: Projeto }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-border p-5">
      <div>
        <h3 className="font-mono font-medium">{projeto.nome}</h3>
        <p className="mt-2 text-sm text-muted">{projeto.descricao}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {projeto.tags.map((tag) => (
            <li key={tag}>
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex items-center gap-4">
        {projeto.repoUrl ? (
          <a
            href={projeto.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Repositório de ${projeto.nome} no GitHub`}
            className="text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GithubIcon size={20} aria-hidden="true" />
          </a>
        ) : null}
        {projeto.demoUrl ? (
          <a
            href={projeto.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demo de ${projeto.nome}`}
            className="text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <ExternalLink size={20} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
