/**
 * Nome, links e tags são termos técnicos e não mudam entre idiomas. Resumo
 * e descrição traduzem — ficam em src/i18n/conteudo/<idioma>.ts, indexados
 * por este `id`.
 *
 * Sem `repoUrl` nem `demoUrl` a linha aparece sem links: é o caso de
 * projeto com código fechado e ainda sem página pública.
 */
export interface ProjetoBase {
  id: string;
  nome: string;
  /** Onde roda — vai no rótulo da linha ("01 / desktop"). Não traduz. */
  plataforma: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export const projetos: ProjetoBase[] = [
  {
    id: 'dueto',
    nome: 'Dueto',
    plataforma: 'desktop',
    tags: ['Electron', 'React', 'TypeScript', 'SQLite'],
  },
  {
    id: 'nutrimatch',
    nome: 'NutriMatch',
    plataforma: 'web',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    repoUrl: 'https://github.com/aLuizab/nutrimatch',
    demoUrl: 'https://www.nutrimatch.com.br',
  },
];
