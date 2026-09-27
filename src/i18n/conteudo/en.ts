import type { Conteudo } from '@/i18n/tipos';

/**
 * A bio e os bullets de experiência reaproveitam o inglês que a própria
 * Ana Luiza já escreveu em github.com/aLuizab/my-cv e no repo portfolio,
 * para o texto sair na voz dela e não numa tradução literal do português.
 */
export const en: Conteudo = {
  perfil: {
    saudacao: "Hi! I'm Ana Luiza 👋",
    tagline:
      'Site Reliability Engineer — reliability, observability and performance in production.',
    bio: [
      "I'm a Site Reliability Engineer focused on the reliability, observability and performance of production systems. I've worked on high-traffic customer-facing platforms, defining SLOs/SLIs, bringing MTTR down and building observability end to end.",
      'I also create content about SRE/DevOps careers and mentor people who want to grow in the field, including those aiming at the international market.',
    ],
    avatarAlt: 'Profile picture of Ana Luiza Primo',
    localizacao: 'Brazil',
  },

  nav: {
    sobre: 'About',
    experiencia: 'Experience',
    projetos: 'Projects',
    palestras: 'Talks',
  },

  secoes: {
    sobre: { eyebrow: '# about', titulo: 'About me' },
    experiencia: { eyebrow: '# experience', titulo: 'Professional experience' },
    projetos: { eyebrow: '# projects', titulo: 'My projects' },
    palestras: { eyebrow: '# talks', titulo: 'Talks & Presentations' },
    videos: { eyebrow: '# youtube', titulo: 'Latest videos' },
  },

  ui: {
    skipLink: 'Skip to content',
    navPrincipal: 'Main navigation',
    redesSociais: 'Social links',
    temaParaClaro: 'Switch to light theme',
    temaParaEscuro: 'Switch to dark theme',
    seletorIdioma: 'Choose language',
    creditoRodape: 'Built by {nome} with Next.js and TailwindCSS. © {ano}.',
    trajetoriaComAtual: "I've worked at {passadas}, and today I work at {atual}.",
    trajetoriaSemAtual: "I've worked at {passadas}.",
    conjuncaoE: 'and',
    formacao: 'education',
    stackFerramentas: 'stack & tools',
    ariaRepositorio: '{nome} repository on GitHub',
    ariaDemo: 'View {nome} demo',
    filtroTodas: 'all',
    filtrarPorTag: 'Filter by tag',
    semPalestras: 'New talks coming soon.',
    semPalestrasComTag: 'No talks found with that tag.',
    voltarPalestras: 'Back to talks',
    tituloSlides: '# slides',
    tituloFotos: '# photos',
    baixarSlides: 'Download slides',
    verSlides: 'View slides',
    tituloGravacao: 'Recording: {titulo}',
    rotuloSlides: 'Slides: {titulo}',
    verTodosVideos: 'See all videos on the channel',
    inscritosUm: '{n} subscriber',
    inscritosVarios: '{n} subscribers',

    atual: 'present',
    cargoJsonLd: 'Site Reliability Engineer',
  },

  experiencia: {
    internacional: {
      empresa: 'an international company',
      cargo: 'Site Reliability Engineer',
      localizacao: 'Remote',
      bullets: [
        'Reliability and observability of production systems, on a remote contract outside Brazil.',
      ],
    },
    itau: {
      empresa: 'Itaú Unibanco',
      cargo: 'Site Reliability Engineer — M level',
      localizacao: 'São Paulo, Brazil',
      bullets: [
        "Observability team supporting the main channels of the bank's app — login, home and authentication.",
        'Mapping the applications and their architectures in order to act on problems and incidents.',
        'Building alerts and dashboards with the team to monitor the app and keep it available to customers.',
      ],
    },
    iti: {
      empresa: "iti — Itaú's digital bank",
      cargo: 'Site Reliability Engineer — M level',
      localizacao: 'São Paulo, Brazil',
      bullets: [
        'Incident orchestration, channel support and post-mortem ceremonies.',
        'SLO culture and proactive observability; instrumentation of .NET Core and Kotlin microservices.',
        'Supported hundreds of microservices on Kubernetes/AWS EKS with Splunk, Grafana, AppDynamics, Jaeger, Loki and Elasticsearch.',
        'On-call engineer, eliminating toil through automation and running performance tests with JMeter.',
      ],
    },
    stone: {
      empresa: 'Stone Payments',
      cargo: 'Site Reliability Engineer — J level',
      localizacao: 'São Paulo, Brazil',
      bullets: [
        'Operations and infrastructure team owning the full service lifecycle: deployment, availability, performance, change management and emergencies.',
        'Capacity planning and infrastructure-as-code automation on Google Cloud.',
        'Worked closely with development teams and with governance, ensuring adherence to standards and compliance.',
      ],
    },
  },

  formacao: {
    inatel: 'Production Engineering',
    'ohio-pm': 'Project Management',
    'ohio-english': 'Business English',
  },

  empresas: {
    stone: 'Stone Payments',
    iti: 'iti',
    itau: 'Itaú Unibanco',
    internacional: 'an international company',
  },

  projetos: {
    '100-dias-kubernetes':
      'A public log of the #100DiasDeKubernetes challenge written entirely in Portuguese, translating and expanding on Anais Urlichs’ material with Brazilian references. A collaborative repository, open to forks and pull requests.',
    'datadog-automation':
      'A Flask API that generates Datadog dashboards and monitors from application and AWS account data, covering 9 dashboard types and 12 monitor types. Includes an interactive wizard and ships containerized with Docker and Nginx.',
    'arquitetura-celular':
      'A Terraform project that provisions a cell-based architecture on AWS: independent cells in separate AZs, each with its own VPC, NAT gateway, EKS cluster and ALB — so failures stay contained within a cell.',
  },

  palestras: {
    'observabilidade-na-pratica': {
      titulo: 'Observability in practice: notes from a firefighter',
      evento: 'SRE Meetup SP',
      local: 'São Paulo, Brazil',
      descricao:
        'How to leave firefighting mode behind and build real observability: metrics, logs and traces that actually help diagnose incidents in production. A practical tour through dashboards, actionable alerts and the mistakes beginners make most often.',
      capaAlt:
        'Cover of the talk Observability in practice, with the title over a dark background',
      fotosAlt: [
        'Ana Luiza presenting on stage at SRE Meetup SP',
        'Audience following the talk about observability',
      ],
    },
    'sre-alem-do-hype': {
      titulo: 'SRE beyond the hype: what actually changes day to day',
      evento: 'Kubernetes Community Days',
      local: 'Online',
      descricao:
        'SRE became a buzzword, but what actually changes in the routine of someone running production systems? I talk about SLOs that work, error budgets, blameless post-mortem culture and how all of it connects to Kubernetes day to day.',
      capaAlt: 'Cover of the talk SRE beyond the hype, with the title over a dark background',
      fotosAlt: [
        'Live stream of the talk at Kubernetes Community Days',
        'Slide about error budgets shown during the presentation',
      ],
    },
  },


  meta: {
    titulo: 'Ana Luiza Primo — Site Reliability Engineer',
    descricao:
      'Site Reliability Engineer — reliability, observability and performance in production.',
  },
};
