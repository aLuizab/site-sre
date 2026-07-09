export interface Projeto {
  nome: string;
  descricao: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
}

/** Projetos fictícios de exemplo — troque pelos seus projetos reais. */
export const projetos: Projeto[] = [
  {
    nome: 'slo-dashboard',
    descricao:
      'Dashboard de SLOs em tempo real, agregando métricas do Prometheus e do Datadog num painel único para times de produto acompanharem error budget sem precisar entender PromQL.',
    tags: ['Grafana', 'Prometheus', 'TypeScript'],
    repoUrl: 'https://github.com/analuizaprimo/slo-dashboard',
  },
  {
    nome: 'runbook-bot',
    descricao:
      'Bot de Slack que transforma runbooks em Markdown em playbooks interativos, guiando o time passo a passo durante incidentes Sev-1.',
    tags: ['Python', 'Slack API', 'Incident Response'],
    repoUrl: 'https://github.com/analuizaprimo/runbook-bot',
  },
  {
    nome: 'terraform-eks-baseline',
    descricao:
      'Módulo Terraform opinativo para provisionar clusters EKS com observabilidade (OpenTelemetry Collector) e políticas de segurança já configuradas.',
    tags: ['Terraform', 'Kubernetes', 'AWS EKS'],
    repoUrl: 'https://github.com/analuizaprimo/terraform-eks-baseline',
  },
];
