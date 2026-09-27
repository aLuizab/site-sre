/**
 * Nome do repositório, links e tags são termos técnicos e não mudam entre
 * idiomas. Só a descrição traduz — ela fica em
 * src/i18n/conteudo/<idioma>.ts, indexada por este `id`.
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
    id: '100-dias-kubernetes',
    nome: '100DiasDeKubernetes',
    tags: ['Kubernetes', 'Docs', 'Community'],
    repoUrl: 'https://github.com/aLuizab/100DiasDeKubernetes',
  },
  {
    id: 'datadog-automation',
    nome: 'datadog-automation',
    tags: ['Python', 'Datadog', 'Observability'],
    repoUrl: 'https://github.com/aLuizab/datadog-automation',
  },
  {
    id: 'arquitetura-celular',
    nome: 'arquitetura-celular',
    tags: ['Terraform', 'AWS', 'High availability'],
    repoUrl: 'https://github.com/aLuizab/arquitetura-celular',
  },
];
