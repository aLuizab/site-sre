export interface Perfil {
  nome: string;
  saudacao: string;
  tagline: string;
  /** Um parágrafo por item — renderizados como <p> separados. */
  bio: string[];
  avatar: string;
  avatarAlt: string;
  localizacao: string;
}

export const perfil: Perfil = {
  nome: 'Aluiza Primo',
  saudacao: 'Oi! Eu sou a Aluiza 👋',
  tagline:
    'Site Reliability Engineer — confiabilidade, observabilidade e performance em produção.',
  bio: [
    'Sou Site Reliability Engineer com foco em confiabilidade, observabilidade e performance de sistemas em produção. Já trabalhei com plataformas de alto tráfego voltadas ao cliente, definindo SLOs/SLIs, reduzindo MTTR e construindo observabilidade ponta a ponta.',
    'Também crio conteúdo sobre carreira em SRE/DevOps e mentoro profissionais que querem crescer na área, inclusive para o mercado internacional.',
  ],
  avatar: '/images/avatar-placeholder.svg',
  avatarAlt: 'Foto de perfil de Aluiza Primo',
  localizacao: 'Brasil',
};
