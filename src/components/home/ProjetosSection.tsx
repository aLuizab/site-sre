import { ArrowUpRight, Download } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { Chip } from '@/components/ui/Chip';
import { SecaoEditorial } from '@/components/home/SecaoEditorial';
import { projetos } from '@/data/projetos';
import { preencher, type Conteudo } from '@/i18n';

const classeLink =
  'inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

/**
 * Um projeto por linha, em largura total: rótulo, nome grande, descrição
 * e links. Linhas em vez de cards porque são poucos projetos e cada um
 * merece espaço — dois cards lado a lado deixavam metade da tela vazia.
 */
export function ProjetosSection({ c }: { c: Conteudo }) {
  const itens = projetos.filter((p) => c.projetos[p.id]);

  return (
    <SecaoEditorial
      id="projetos"
      numero={1}
      rotulo={c.secoes.projetos.eyebrow}
      titulo={c.secoes.projetos.titulo}
    >
      <ol className="border-b border-border">
        {itens.map((projeto, i) => {
          const t = c.projetos[projeto.id];
          return (
            <li
              key={projeto.id}
              className="grid gap-4 border-t border-border py-10 lg:grid-cols-[8rem_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted lg:pt-3">
                {String(i + 1).padStart(2, '0')} / {projeto.plataforma}
              </p>

              <div>
                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {projeto.nome}
                </h3>
                <p className="mt-2 font-mono text-sm text-accent">{t.resumo}</p>
              </div>

              <div>
                <p className="text-muted">{t.descricao}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {projeto.tags.map((tag) => (
                    <li key={tag}>
                      <Chip>{tag}</Chip>
                    </li>
                  ))}
                </ul>
                {projeto.demoUrl || projeto.repoUrl || projeto.download ? (
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    {projeto.download ? (
                      <a
                        href={projeto.download.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${classeLink} text-foreground`}
                      >
                        <Download size={16} aria-hidden="true" />
                        {preencher(c.ui.baixarVersao, { versao: projeto.download.versao })}
                      </a>
                    ) : null}
                    {projeto.demoUrl ? (
                      // O domínio fica escrito: diz para onde o link leva.
                      <a
                        href={projeto.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${classeLink} text-foreground`}
                      >
                        {new URL(projeto.demoUrl).hostname}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    ) : null}
                    {projeto.repoUrl ? (
                      <a
                        href={projeto.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={preencher(c.ui.ariaRepositorio, { nome: projeto.nome })}
                        className={classeLink}
                      >
                        <GithubIcon size={18} aria-hidden="true" />
                        GitHub
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </SecaoEditorial>
  );
}
