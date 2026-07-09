export interface PalestraFoto {
  src: string;
  alt: string;
}

export interface Palestra {
  /** kebab-case, único — vira a URL /palestras/[slug]. */
  slug: string;
  titulo: string;
  evento: string;
  /** ISO "AAAA-MM-DD" — chave de ordenação e <time dateTime>. */
  data: string;
  local: string;
  descricao: string;
  capa: string;
  capaAlt: string;
  fotos: PalestraFoto[];
  /** Caminho local em /public/slides/ ou URL externa (SpeakerDeck etc.). */
  slidesPdf?: string;
  videoUrl?: string;
  tags: string[];
}

/** Adicione uma palestra nova só editando este array — veja o README. */
export const palestras: Palestra[] = [
  {
    slug: 'observabilidade-na-pratica',
    titulo: 'Observabilidade na prática: de quem apaga incêndio',
    evento: 'SRE Meetup SP',
    data: '2025-09-12',
    local: 'São Paulo, SP',
    descricao:
      'Como sair do modo "apaga incêndio" e construir observabilidade de verdade: métricas, logs e traces que efetivamente ajudam a diagnosticar incidentes em produção. Um passeio prático por dashboards, alertas acionáveis e os erros mais comuns de quem está começando.',
    capa: '/palestras/observabilidade-na-pratica/capa.svg',
    capaAlt:
      'Capa da palestra Observabilidade na prática, com o título sobre fundo escuro',
    fotos: [
      {
        src: '/palestras/observabilidade-na-pratica/foto-1.svg',
        alt: 'Aluiza apresentando no palco do SRE Meetup SP',
      },
      {
        src: '/palestras/observabilidade-na-pratica/foto-2.svg',
        alt: 'Plateia acompanhando a apresentação sobre observabilidade',
      },
    ],
    slidesPdf: '/slides/observabilidade-na-pratica.pdf',
    tags: ['observabilidade', 'sre', 'grafana'],
  },
  {
    slug: 'sre-alem-do-hype',
    titulo: 'SRE além do hype: o que muda no dia a dia',
    evento: 'Kubernetes Community Days',
    data: '2025-11-04',
    local: 'Online',
    descricao:
      'SRE virou palavra da moda, mas o que muda de verdade na rotina de quem opera sistemas em produção? Falo sobre SLOs que funcionam, error budgets, cultura de post-mortem sem culpa e como isso se conecta com Kubernetes no dia a dia.',
    capa: '/palestras/sre-alem-do-hype/capa.svg',
    capaAlt: 'Capa da palestra SRE além do hype, com o título sobre fundo escuro',
    fotos: [
      {
        src: '/palestras/sre-alem-do-hype/foto-1.svg',
        alt: 'Transmissão ao vivo da palestra no Kubernetes Community Days',
      },
      {
        src: '/palestras/sre-alem-do-hype/foto-2.svg',
        alt: 'Slide sobre error budgets exibido durante a apresentação',
      },
    ],
    slidesPdf: '/slides/sre-alem-do-hype.pdf',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    tags: ['sre', 'kubernetes', 'carreira'],
  },
];

export function getPalestraBySlug(slug: string): Palestra | undefined {
  return palestras.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  return Array.from(new Set(palestras.flatMap((p) => p.tags))).sort();
}
