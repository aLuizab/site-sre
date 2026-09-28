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
      'Site Reliability Engineer/DevOps Engineer | International Career',
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
    artigos: 'Articles',
    mentoria: 'Mentoring',
  },

  secoes: {
    sobre: { eyebrow: '# about', titulo: 'About me' },
    experiencia: { eyebrow: '# experience', titulo: 'Professional experience' },
    projetos: { eyebrow: '# projects', titulo: 'My projects' },
    palestras: { eyebrow: '# talks', titulo: 'Talks & Presentations' },
    videos: { eyebrow: '# youtube', titulo: 'Latest videos' },
    artigos: { eyebrow: '# medium', titulo: 'Articles' },
    instagram: { eyebrow: '# instagram', titulo: 'On Instagram' },
  },

  ui: {
    skipLink: 'Skip to content',
    navPrincipal: 'Main navigation',
    redesSociais: 'Social links',
    temaParaClaro: 'Switch to light theme',
    temaParaEscuro: 'Switch to dark theme',
    seletorIdioma: 'Choose language',
    creditoRodape: 'Built by {nome} with Next.js and TailwindCSS. © {ano}.',
    trajetoriaComAtual: "I've worked at {passadas}, and today I work on {atual}.",
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
    slideAnterior: 'Previous slide',
    slideProximo: 'Next slide',
    slideContador: '{atual} of {total}',
    slideAlt: 'Slide {n} of {total}',
    slidesAcessibilidade:
      'The slides are images; the PDF is the version a screen reader can read.',
    verSlides: 'View slides',
    tituloGravacao: 'Recording: {titulo}',
    rotuloSlides: 'Slides: {titulo}',
    verTodosVideos: 'See all videos on the channel',
    verTodosArtigos: 'See all articles',
    verPerfilInstagram: 'See the Instagram profile',
    voltarInicio: 'Back to home',
    inscritosUm: '{n} subscriber',
    inscritosVarios: '{n} subscribers',

    atual: 'present',
    cargoJsonLd: 'Site Reliability Engineer',
  },

  experiencia: {
    internacional: {
      empresa: 'International contracts — United States',
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
    iti: 'Banco Iti',
    itau: 'Itaú Unibanco',
    internacional: 'international contracts in the United States',
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
    'agilidade-na-pratica': {
      titulo: 'Agile in practice',
      evento: 'HackMundo',
      local: '',
      descricao:
        'A workshop for the hackathon teams: agile methods applied to a project that has to ship in a few days. How to organise the work, split the scope and reach the end of the event with something actually delivered.',
      capaAlt:
        'Opening slide of the Agile in Practice talk, subtitled "Agile methods to nail your project"',
      fotosAlt: [],
    },
    'cloud-native-day-sp': {
      titulo: 'From Prometheus to GPT: a new era of intelligent observability',
      evento: 'Cloud Native Day São Paulo',
      local: 'São Paulo, Brazil',
      descricao:
        'The path from traditional observability — metrics, Prometheus, dashboards — to the point where language models join the war room. What changes in incident diagnosis when a machine helps read the signal, and what stays human work.',
      capaAlt:
        'Ana Luiza Primo in front of the Cloud Native Day São Paulo sponsor wall',
      fotosAlt: [],
    },
    'softskills-devops': {
      titulo: 'The soft skills a DevOps needs that nobody tells you about',
      evento: 'DevOps Days Belo Horizonte',
      local: 'Belo Horizonte, Brazil',
      descricao:
        'Soft skills and resilience for a top-tier DevOps career. What holds a career together once the technical side is handled — communicating during an incident, working under pressure, and the conversations no course teaches.',
      capaAlt:
        'Ana Luiza Primo in front of the DevOps Days Belo Horizonte banner',
      fotosAlt: [],
    },
    'workshop-empreendedorismo': {
      titulo: 'Entrepreneurship workshop',
      evento: 'HackMundo',
      local: '',
      descricao:
        'Entrepreneurship made simple, planned and accessible, for the hackathon teams. From the initial idea to the pitch, through design thinking and planning — enough to get an idea out of your head and defend it in front of a panel.',
      capaAlt:
        'Opening slide of the workshop, titled "Ideation, planning and action!"',
      fotosAlt: [],
    },
    'devopsdays-belem': {
      titulo: 'Build and Run',
      evento: 'DevOps Days Belém',
      local: 'Belém, Brazil',
      descricao:
        'Whoever builds it also runs it: what changes in a team\'s routine once it owns what it put in production, from the build to being on call.',
      capaAlt:
        'Ana Luiza Primo next to the DevOps Days Belém banner, holding a book',
      fotosAlt: [],
    },
  },


  artigos: {
    tituloPagina: 'Articles',
    descricao:
      "What I've been writing about SRE, cloud, architecture and career. Published on Medium.",
    vazio: 'No articles published yet.',
  },

  newsletter: {
    eyebrow: '# newsletter',
  },

  mentoria: {
    eyebrow: '# mentoring',
    tituloPagina: 'International career mentoring',
    resumo:
      'Two hours with me, over video, to review your CV, map the technical gaps holding you back and build a concrete plan to reach the international market. After the session, you keep access to me on WhatsApp for follow-up questions.',
    precoNota: '2h session + WhatsApp follow-up',
    ctaBotao: 'Book a session',
    ctaAssunto: 'International career mentoring',

    paraQuemTitulo: 'Who it is for',
    paraQuem: [
      'People already working in infrastructure, DevOps or SRE who want to apply for roles outside Brazil.',
      'People sending CVs abroad and getting no answer, without knowing where the problem is.',
      'People who know their daily work well, but cannot translate it into what a foreign recruiter looks for.',
      'People who want to know what is technically missing for the level they are aiming at — and in what order to study it.',
    ],

    metodologiaTitulo: 'How it works',
    metodologiaIntro:
      'The work starts before the call. You send me your CV and LinkedIn ahead of time and answer a short questionnaire, so the session opens with the diagnosis already done — instead of spending the first thirty minutes on context.',
    etapas: [
      {
        titulo: 'Diagnosis',
        duracao: 'before the session',
        descricao:
          'A questionnaire about your experience, stack, English level, goal (remote for a foreign company, relocation) and real constraints — visa, time zone, family. I read your CV and LinkedIn before we talk.',
      },
      {
        titulo: 'Where you are',
        duracao: '20 min',
        descricao:
          'We go through the diagnosis together and set a concrete target: what kind of role, in which market, on what timeline. Without that, the rest of the session turns into generic advice.',
      },
      {
        titulo: 'CV and LinkedIn',
        duracao: '40 min',
        descricao:
          'Line-by-line review against international standards: what to cut, what to rewrite with impact verbs and numbers, and how to get through automated screening (ATS). Brazilian and international CVs follow different rules — and that is where most people get stuck.',
      },
      {
        titulo: 'Technical gaps',
        duracao: '35 min',
        descricao:
          'A map of what is missing for the level you want: Kubernetes, infrastructure as code, observability, cloud, on-call. You leave with a list ordered by hiring impact, not alphabetically.',
      },
      {
        titulo: 'Search strategy',
        duracao: '20 min',
        descricao:
          'Where the roles actually show up, how to approach them, what to expect from each stage abroad (screening, system design, behavioral) and how to position yourself in the salary conversation.',
      },
      {
        titulo: '90-day plan',
        duracao: '5 min',
        descricao:
          'We close with what to do over the next twelve weeks, in priority order. Something executable, not a wish list.',
      },
    ],

    entregaveisTitulo: 'What you take away',
    entregaveis: [
      'Your reviewed CV, with the notes in writing.',
      'The map of technical gaps, prioritized.',
      'The 90-day plan.',
      'WhatsApp follow-up for questions after the session.',
    ],
  },

  meta: {
    titulo: 'Ana Luiza Primo — Site Reliability Engineer',
    descricao:
      'Site Reliability Engineer/DevOps Engineer | International Career',
  },
};
