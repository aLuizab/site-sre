import type { Conteudo } from '@/i18n/tipos';

export const en: Conteudo = {
  perfil: {
    tagline: 'Site Reliability Engineer · Technology and Career',
    destaques: [
      { texto: 'SRE on an international contract in the United States. Before that: Stone, iti and Itaú.' },
      {
        texto: 'I build my own products — right now, Dueto and NutriMatch.',
        linkTexto: 'build my own products',
        href: '#projetos',
      },
      {
        texto: 'I give talks, write, and talk about tech careers on YouTube and Instagram.',
        linkTexto: 'give talks, write',
        href: '#comunidade',
      },
      {
        texto: 'And I mentor people building an international career.',
        linkTexto: 'mentor people building an international career',
        href: '/mentoria',
      },
    ],
    avatarAlt: 'Profile picture of Ana Luiza Primo',
  },

  nav: {
    projetos: 'Projects',
    comunidade: 'Community',
    artigos: 'Articles',
    mentoria: 'Mentoring',
    materiais: 'Resources',
  },

  secoes: {
    projetos: { eyebrow: '# projects', titulo: 'Projects' },
    comunidade: {
      eyebrow: '# community',
      titulo: 'Community',
      intro: 'What I share beyond my day job: conference talks, articles and content about tech careers.',
      palestras: 'Talks',
      artigos: 'Articles',
      redes: 'Content',
    },
  },

  redes: {
    youtube: 'Videos about SRE, DevOps and tech careers.',
    instagram: 'Short-form content about tech careers.',
  },

  ui: {
    skipLink: 'Skip to content',
    navPrincipal: 'Main navigation',
    redesSociais: 'Social links',
    temaParaClaro: 'Switch to light theme',
    temaParaEscuro: 'Switch to dark theme',
    seletorIdioma: 'Choose language',
    creditoRodape: 'Built by {nome} with Next.js and TailwindCSS. © {ano}.',
    ariaRepositorio: '{nome} repository on GitHub',
    ariaDemo: 'View {nome} demo',
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
    verTodosArtigos: 'See all articles',
    voltarInicio: 'Back to home',
    inscritosUm: '{n} subscriber',
    inscritosVarios: '{n} subscribers',
    cargoJsonLd: 'Site Reliability Engineer',
  },

  projetos: {
    dueto: {
      resumo: 'Personal and business finances for developers',
      descricao:
        'Offline desktop app (in Brazilian Portuguese) that brings household finances, a company billing in US dollars — invoices, Simples Nacional taxes, owner’s pay, income statement — and investments into one place. Data stays in a local SQLite file.',
    },
    nutrimatch: {
      resumo: 'Patients and nutritionists, no red tape',
      descricao:
        'Platform that connects patients with nutritionists: search, online or in-person appointment booking, the nutritionist’s calendar and an admin panel. Built for FETIN 2026 at Inatel.',
    },
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
    eyebrow: '# articles',
    tituloPagina: 'Articles',
    descricao:
      "What I've been writing about SRE, cloud, architecture and career. Published on Medium.",
    vazio: 'No articles published yet.',
  },

  terminal: {
    prompt: 'ana@sre',
    tituloJanela: 'ana@sre: ~',
    rotuloEntrada: 'Type a command',
    dica: "type 'help' to see the commands",
    naoEncontrado: 'command not found: {cmd}',
    ajuda: 'available commands:',
    comandos: [
      { nome: 'projects', descricao: 'what I built' },
      { nome: 'community', descricao: 'talks, articles and content' },
      { nome: 'talks', descricao: 'where I spoke' },
      { nome: 'articles', descricao: 'what I wrote' },
      { nome: 'mentoring', descricao: 'international career mentoring' },
      { nome: 'resources', descricao: 'free guides and checklists' },
      { nome: 'theme', descricao: 'toggle light and dark' },
      { nome: 'clear', descricao: 'clear the screen' },
    ],
  },

  newsletter: {
    eyebrow: '# newsletter',
  },

  mentoria: {
    eyebrow: '# mentoring',
    tituloPagina: 'International career mentoring',
    resumo:
      'Direction for people in infrastructure, DevOps or SRE who want to reach the international market: where you are, what is missing for the level you want, and where to start. In formats and prices that fit different moments of a career.',
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

    principiosTitulo: 'What the method is built on',
    principios: [
      {
        titulo: 'GROW: goal, reality, options, will',
        descricao:
          'John Whitmore\'s model, used by the most effective career mentoring and coaching programs. Every session goes through the four questions, in order: where you want to get, where you really are, which paths exist, and what you will do by next week.',
      },
      {
        titulo: 'Diagnosis before the conversation',
        descricao:
          'CV, LinkedIn and a questionnaire arrive first. The session opens with the map ready, not with you explaining who you are — that is what separates direction from small talk.',
      },
      {
        titulo: 'Artifacts, not advice',
        descricao:
          'You leave with things that exist outside your head: the reviewed CV, the gap list, the plan. Advice gets forgotten; documents get executed.',
      },
      {
        titulo: 'Follow-up with a rhythm',
        descricao:
          'One short message from you per week: what you did, what got stuck. Stuck two weeks on the same thing, we talk. It is what mentoring programs that work have in common: cadence, not intensity.',
      },
    ],

    metodologiaTitulo: 'How the full session works',
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
        titulo: 'Goal and reality',
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
        titulo: 'Options: search strategy',
        duracao: '20 min',
        descricao:
          'Where the roles actually show up, how to approach them, what to expect from each stage abroad (screening, system design, behavioral) and how to position yourself in the salary conversation.',
      },
      {
        titulo: 'Will: 90-day plan',
        duracao: '5 min',
        descricao:
          'We close with what to do over the next twelve weeks, in priority order. Something executable, not a wish list.',
      },
    ],

    entregaveisTitulo: 'What you take away',
    entregaveis: [
      'Your reviewed CV, with the notes in writing.',
      'The map of technical gaps, prioritized.',
      'The 90-day plan, filled in.',
      'The SRE interview question bank, by stage.',
      'WhatsApp follow-up for questions after the session.',
    ],

    planosTitulo: 'Formats and prices',
    planosIntro:
      'Not every moment calls for two hours. There is a format for someone who just wants to know if the CV is right, for someone who wants a month of follow-up, and for people who prefer to split the cost.',
    porPessoa: 'per person',
    planos: {
      diagnostico: {
        nome: 'Diagnosis',
        descricao: 'Forty-five minutes to answer one question: what is holding you back.',
        inclui: [
          'CV and LinkedIn review, with written notes',
          'The three things to fix first',
          'A pointer to the next format, if it makes sense',
        ],
      },
      sessao: {
        nome: 'Full session',
        descricao: 'Two hours, all six steps, and you leave with a plan.',
        inclui: [
          'Everything in the diagnosis',
          'Prioritized technical gap map',
          'Search and interview strategy',
          '90-day plan and question bank',
          'WhatsApp for questions for 30 days',
        ],
      },
      pacote: {
        nome: '30-day follow-up',
        descricao: 'For executing the plan with someone watching alongside.',
        inclui: [
          'Full opening session (2h)',
          'Two 1h sessions in the following weeks',
          'One recorded mock interview in English',
          'Review of every application you want to send',
          'WhatsApp throughout',
        ],
      },
      turma: {
        nome: 'Small group',
        descricao: 'Up to six people. Three 1h30 meetings. The most affordable format.',
        inclui: [
          'Meeting 1: CV and LinkedIn for abroad',
          'Meeting 2: technical gaps by level',
          'Meeting 3: hiring process and negotiation',
          'Mentoring materials for everyone',
          'WhatsApp group for the month',
        ],
      },
    },
    materiaisChamada: 'Want to start on your own? The free resources are here.',

    ressalvaTitulo: 'What this mentoring is not',
    ressalva:
      'It does not guarantee an international job — nobody honest guarantees that. The goal is direction: understanding where you are today, what is missing for the level you want and where to start. The outcome depends on the work you do after the session.',

    formTitulo: 'Book a session',
    formIntro:
      'Tell me a bit about yourself and which format makes sense. I reply with dates, times and how to pay.',
    campoNome: 'Name',
    campoEmail: 'Email',
    campoWhatsapp: 'WhatsApp',
    campoCargo: 'Role and years of experience',
    campoObjetivo: 'What you want to achieve',
    campoObjetivoDica:
      'E.g.: work remotely for a foreign company, relocate, move up at your current job. If you already know the format, say which.',
    formBotao: 'Send',
    formNota: 'Lands straight in my inbox. I reply there or on WhatsApp.',
    formEnviando: 'Sending…',
    formSucesso: 'Got it! I will get back to you soon by email or WhatsApp.',
    formInvalido: 'Check the fields: name, email, WhatsApp and a goal of at least one sentence.',
    formLimite: 'You have sent a few already. Wait a bit before trying again.',
    formErro: 'I could not send it right now. Try again in a moment — or message me on LinkedIn.',
  },

  materiais: {
    eyebrow: '# resources',
    tituloPagina: 'Resources',
    descricao:
      'Guides and checklists I use in mentoring. Some are here in full, for free — start with those. The others come with the mentoring.',
    seloGratuito: 'free',
    seloMentoria: 'included in mentoring',
    leitura: '{min} min read',
    avisoIdioma: 'This resource is written in Portuguese.',
    incluidoNaMentoria:
      'This resource is delivered to mentees — filled in together, in the session, not as a generic PDF.',
    verMentoria: 'See the mentoring',
    voltarMateriais: 'Back to resources',
    itens: {
      'checklist-curriculo-internacional': {
        titulo: 'Checklist: CV for international roles',
        descricao:
          'Thirty items, from format to English, to go through before sending your CV abroad. Every "no" is a fix.',
      },
      'linkedin-para-recrutador-gringo': {
        titulo: 'A LinkedIn foreign recruiters actually find',
        descricao:
          'How to show up in LinkedIn Recruiter search and convince in ten seconds: headline, summary, skills, and the mistakes that close the door.',
      },
      'mapa-competencias-sre': {
        titulo: 'SRE/DevOps skills map by level',
        descricao:
          'What junior, mid and senior roles really test in interviews — and in what order to study. To know where you are and what comes next.',
      },
      'plano-90-dias': {
        titulo: '90-day plan',
        descricao:
          'Twelve weeks in three blocks — get visible, close the biggest gap, interview — with one artifact per week. Filled in together, in the session.',
      },
      'banco-perguntas-entrevista-sre': {
        titulo: 'SRE interview question bank',
        descricao:
          'Fifty real questions from international hiring processes, from screening to negotiation, with what the interviewer wants to hear in each.',
      },
    },
  },

  meta: {
    titulo: 'Ana Luiza Primo - Technology and Career',
    descricao:
      'Ana Luiza Primo is a Site Reliability Engineer who creates content about technology and international careers. Projects, talks, articles and mentoring.',
  },
};
