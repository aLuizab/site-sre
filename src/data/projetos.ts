/**
 * Nome, links e tags são termos técnicos e não mudam entre idiomas. Resumo
 * e descrição traduzem — ficam em src/i18n/conteudo/<idioma>.ts, indexados
 * por este `id`.
 *
 * Sem `repoUrl` nem `demoUrl` o card aparece sem links: é o caso de
 * projeto com código fechado e ainda sem página pública.
 */
export interface ProjetoBase {
  id: string;
  nome: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export const projetos: ProjetoBase[] = [
  {
    id: 'dueto',
    nome: 'Dueto',
    tags: ['Electron', 'React', 'TypeScript', 'SQLite'],
  },
  {
    id: 'nutrimatch',
    nome: 'NutriMatch',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    repoUrl: 'https://github.com/aLuizab/nutrimatch',
  },
];
