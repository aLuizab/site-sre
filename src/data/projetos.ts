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
  /** Página de uma release para baixar o app, com a versão para o rótulo. */
  download?: { url: string; versao: string };
}

export const projetos: ProjetoBase[] = [
  {
    id: 'dueto',
    nome: 'Dueto',
    plataforma: 'desktop',
    tags: ['Electron', 'React', 'TypeScript', 'SQLite'],
    repoUrl: 'https://github.com/aLuizab/dueto',
    demoUrl: 'https://dueto.aluiza.tech',
  },
  {
    id: 'nutrimatch',
    nome: 'NutriMatch',
    plataforma: 'web',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    repoUrl: 'https://github.com/aLuizab/nutrimatch',
    demoUrl: 'https://www.nutrimatch.com.br',
  },
  {
    id: 'cert-tracker',
    nome: 'Cert Tracker',
    plataforma: 'desktop',
    tags: ['Electron', 'React', 'TypeScript', 'IndexedDB', 'PWA'],
    repoUrl: 'https://github.com/aLuizab/cert-tracker',
    download: {
      url: 'https://github.com/aLuizab/cert-tracker/releases/tag/v0.1.0',
      versao: 'v0.1.0',
    },
  },
  {
    id: 'ramo',
    nome: 'Ramo',
    plataforma: 'web',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA'],
    demoUrl: 'https://ramo.aluiza.tech',
  },
];
