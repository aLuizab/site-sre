export interface ExperienciaItem {
  empresa: string;
  cargo: string;
  /** formato "AAAA-MM", usado em <time dateTime> e para ordenação. */
  periodoInicio: string;
  periodoFim: string | 'atual';
  localizacao?: string;
  /** 2 a 4 pontos de impacto. */
  bullets: string[];
  logo?: string;
}

/** Adicione a experiência mais recente no topo do array. */
export const experiencia: ExperienciaItem[] = [
  {
    empresa: 'Órbita Cloud',
    cargo: 'Site Reliability Engineer — Canais Digitais',
    periodoInicio: '2025-03',
    periodoFim: '2026-01',
    localizacao: 'Remoto',
    logo: '/logos/orbita-cloud.svg',
    bullets: [
      'Responsável por confiabilidade e escalabilidade de aplicações digitais voltadas a milhões de usuários (web e mobile).',
      'Defini e operacionalizei SLOs/SLIs junto a produto e engenharia, reduzindo incidentes com impacto ao usuário trimestre a trimestre.',
      'Observabilidade ponta a ponta com Grafana, Prometheus, Loki e Datadog (métricas, logs, traces e APM).',
      'Redução de ~40% no MTTR em fluxos críticos via RCA de incidentes Sev-1/Sev-2 e ações corretivas.',
    ],
  },
  {
    empresa: 'NimbusTech',
    cargo: 'Tech Lead SRE — Canais Digitais',
    periodoInicio: '2024-10',
    periodoFim: '2025-03',
    localizacao: 'Remoto',
    logo: '/logos/nimbustech.svg',
    bullets: [
      'Liderança técnica da função de SRE, mentorando engenheiros e definindo direção de confiabilidade.',
      'Programa de elevação de security score em aplicações legadas e modernas.',
    ],
  },
  {
    empresa: 'CloudNine Systems',
    cargo: 'Site Reliability Engineer',
    periodoInicio: '2024-06',
    periodoFim: '2024-10',
    localizacao: 'Remoto',
    logo: '/logos/cloudnine-systems.svg',
    bullets: [
      'Playbooks de resposta a incidentes e runbooks automatizados; dashboards e alertas inteligentes.',
    ],
  },
];
