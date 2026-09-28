import type { Conteudo } from '@/i18n/tipos';

export const pt: Conteudo = {
  perfil: {
    saudacao: 'Oi! Eu sou a Ana Luiza',
    tagline:
      'Site Reliability Engineer/DevOps Engineer | Carreira Internacional',
    bio: [
      'Sou Site Reliability Engineer com foco em confiabilidade, observabilidade e performance de sistemas em produção. Já trabalhei com plataformas de alto tráfego voltadas ao cliente, definindo SLOs/SLIs, reduzindo MTTR e construindo observabilidade ponta a ponta.',
      'Também crio conteúdo sobre carreira em SRE/DevOps e mentoro profissionais que querem crescer na área, inclusive para o mercado internacional.',
    ],
    destaques: [
      {
        texto:
          'Já atuei em Stone Pagamentos, Banco Iti e Itaú Unibanco — bancos, meios de pagamento e serviços financeiros.',
      },
      {
        texto: 'Hoje atuo em contratos internacionais nos Estados Unidos.',
      },
      {
        texto: 'Também faço mentoria de carreira internacional em tecnologia.',
        linkTexto: 'mentoria de carreira internacional',
        href: '/mentoria',
      },
      {
        texto: 'E escrevo sobre SRE, cloud e carreira.',
        linkTexto: 'escrevo sobre SRE, cloud e carreira',
        href: '/artigos',
      },
    ],
    avatarAlt: 'Foto de perfil de Ana Luiza Primo',
    localizacao: 'Brasil',
  },

  nav: {
    sobre: 'Sobre',
    experiencia: 'Experiência',
    projetos: 'Projetos',
    palestras: 'Palestras',
    artigos: 'Artigos',
    mentoria: 'Mentoria',
  },

  secoes: {
    sobre: { eyebrow: '# sobre', titulo: 'Sobre mim' },
    experiencia: { eyebrow: '# experiência', titulo: 'Trajetória profissional' },
    projetos: { eyebrow: '# projetos', titulo: 'Meus projetos' },
    palestras: { eyebrow: '# palestras', titulo: 'Palestras & Apresentações' },
    videos: { eyebrow: '# youtube', titulo: 'Últimos vídeos' },
    artigos: { eyebrow: '# medium', titulo: 'Artigos' },
    instagram: { eyebrow: '# instagram', titulo: 'No Instagram' },
  },

  ui: {
    skipLink: 'Pular para o conteúdo',
    navPrincipal: 'Navegação principal',
    redesSociais: 'Redes sociais',
    temaParaClaro: 'Mudar para o tema claro',
    temaParaEscuro: 'Mudar para o tema escuro',
    seletorIdioma: 'Escolher idioma',
    creditoRodape: 'Criado por {nome} com Next.js e TailwindCSS. © {ano}.',
    trajetoriaComAtual: 'Já atuei em {passadas}, e hoje atuo em {atual}.',
    trajetoriaSemAtual: 'Já atuei em {passadas}.',
    conjuncaoE: 'e',
    formacao: 'formação',
    stackFerramentas: 'stack & ferramentas',
    ariaRepositorio: 'Repositório de {nome} no GitHub',
    ariaDemo: 'Ver demo de {nome}',
    filtroTodas: 'todas',
    filtrarPorTag: 'Filtrar por tag',
    semPalestras: 'Em breve, novas palestras.',
    semPalestrasComTag: 'Nenhuma palestra encontrada com essa tag.',
    voltarPalestras: 'Voltar para palestras',
    tituloSlides: '# slides',
    tituloFotos: '# fotos',
    baixarSlides: 'Baixar slides',
    slideAnterior: 'Slide anterior',
    slideProximo: 'Próximo slide',
    slideContador: '{atual} de {total}',
    slideAlt: 'Slide {n} de {total}',
    slidesAcessibilidade:
      'Os slides são imagens; o PDF é a versão que leitor de tela consegue ler.',
    verSlides: 'Ver slides',
    tituloGravacao: 'Gravação: {titulo}',
    rotuloSlides: 'Slides: {titulo}',
    verTodosVideos: 'Ver todos os vídeos no canal',
    verTodosArtigos: 'Ver todos os artigos',
    verPerfilInstagram: 'Ver o perfil no Instagram',
    voltarInicio: 'Voltar para o início',
    inscritosUm: '{n} inscrito',
    inscritosVarios: '{n} inscritos',

    atual: 'atual',
    cargoJsonLd: 'Site Reliability Engineer',
  },

  experiencia: {
    internacional: {
      empresa: 'Contratos internacionais — Estados Unidos',
      cargo: 'Site Reliability Engineer',
      localizacao: 'Remoto',
      bullets: [
        'Confiabilidade e observabilidade de sistemas em produção, em contrato remoto para fora do Brasil.',
      ],
    },
    itau: {
      empresa: 'Itaú Unibanco',
      cargo: 'Site Reliability Engineer — nível M',
      localizacao: 'São Paulo, SP',
      bullets: [
        'Time de observabilidade dos canais principais do app do banco — login, home e autenticação.',
        'Mapeamento das aplicações e de suas arquiteturas para atuar em problemas e incidentes.',
        'Construção de alertas e dashboards com o time, para monitorar e manter o app disponível ao cliente.',
      ],
    },
    iti: {
      empresa: 'iti — banco digital do Itaú',
      cargo: 'Site Reliability Engineer — nível M',
      localizacao: 'São Paulo, SP',
      bullets: [
        'Orquestração de incidentes, sustentação de canais e condução das cerimônias de post-mortem.',
        'Cultura de SLOs e observabilidade proativa; instrumentação de microsserviços .NET Core e Kotlin.',
        'Sustentação de centenas de microsserviços em Kubernetes/AWS EKS, com Splunk, Grafana, AppDynamics, Jaeger, Loki e Elasticsearch.',
        'Plantão on-call, eliminação de toil por automação e testes de performance com JMeter.',
      ],
    },
    stone: {
      empresa: 'Stone Pagamentos',
      cargo: 'Site Reliability Engineer — nível J',
      localizacao: 'São Paulo, SP',
      bullets: [
        'Time de operações e infraestrutura responsável pelo ciclo de vida de um conjunto de serviços: deploy, disponibilidade, performance, mudanças e emergências.',
        'Capacity planning e automação de infraestrutura como código no Google Cloud.',
        'Interface com os times de desenvolvimento e com governança, garantindo aderência a padrões e compliance.',
      ],
    },
  },

  formacao: {
    inatel: 'Engenharia de Produção',
    'ohio-pm': 'Project Management',
    'ohio-english': 'Business English',
  },


  projetos: {
    '100-dias-kubernetes':
      'Registro público do desafio #100DiasDeKubernetes inteiro em português, traduzindo e ampliando o material da Anais Urlichs com referências brasileiras. Repositório colaborativo, aberto a forks e pull requests.',
    'datadog-automation':
      'API em Flask que gera dashboards e monitores do Datadog a partir dos dados da aplicação e da conta AWS, com 9 tipos de dashboard e 12 de monitor. Tem wizard interativo e vai containerizada com Docker e Nginx.',
    'arquitetura-celular':
      'Projeto Terraform que provisiona uma arquitetura celular na AWS: células independentes em AZs diferentes, cada uma com VPC, NAT gateway, cluster EKS e ALB próprios — isolando falhas por célula.',
  },

  palestras: {
    'agilidade-na-pratica': {
      titulo: 'Agilidade na prática',
      evento: 'HackMundo',
      local: '',
      descricao:
        'Workshop para os times do hackathon: metodologias ágeis aplicadas a um projeto que precisa sair do papel em poucos dias. Como organizar o trabalho, dividir o escopo e chegar ao fim do evento com algo entregue.',
      capaAlt:
        'Slide de abertura da apresentação Agilidade na Prática, com o subtítulo "Metodologias ágeis para você arrasar no seu projeto"',
      fotosAlt: [],
    },
    'cloud-native-day-sp': {
      titulo: 'Do Prometheus ao GPT: uma nova era na observabilidade inteligente',
      evento: 'Cloud Native Day São Paulo',
      local: 'São Paulo, SP',
      descricao:
        'O caminho da observabilidade tradicional — métricas, Prometheus, dashboards — até o ponto em que modelos de linguagem entram na war room. O que muda no diagnóstico de incidentes quando a máquina ajuda a interpretar o sinal, e o que continua sendo trabalho de gente.',
      capaAlt:
        'Ana Luiza Primo no painel de patrocinadores do Cloud Native Day São Paulo',
      fotosAlt: [],
    },
    'softskills-devops': {
      titulo: 'Softskills que um devops precisa ter mas ninguém te conta',
      evento: 'DevOps Days Belo Horizonte',
      local: 'Belo Horizonte, MG',
      descricao:
        'Soft skills e resiliência para uma carreira DevOps de elite. O que sustenta a carreira depois que a parte técnica já está resolvida — comunicação em incidente, trabalho sob pressão e as conversas que ninguém ensina em curso.',
      capaAlt:
        'Ana Luiza Primo em frente ao banner do DevOps Days Belo Horizonte',
      fotosAlt: [],
    },
    'workshop-empreendedorismo': {
      titulo: 'Workshop de empreendedorismo',
      evento: 'HackMundo',
      local: '',
      descricao:
        'Empreendedorismo simplificado, planejado e acessível, para os times do hackathon. Da idealização ao pitch, passando por design thinking e planejamento — o suficiente para tirar uma ideia da cabeça e defendê-la diante de uma banca.',
      capaAlt:
        'Slide de abertura do workshop, com o título "Idealização, planejamento e ação!"',
      fotosAlt: [],
    },
    'devopsdays-belem': {
      titulo: 'Build and Run',
      evento: 'DevOps Days Belém',
      local: 'Belém, PA',
      descricao:
        'Quem constrói também opera: o que muda na rotina de um time quando ele passa a ser dono do que colocou em produção, do build ao plantão.',
      capaAlt:
        'Ana Luiza Primo ao lado do banner do DevOps Days Belém, segurando um livro',
      fotosAlt: [],
    },
  },


  artigos: {
    tituloPagina: 'Artigos',
    descricao:
      'O que venho escrevendo sobre SRE, cloud, arquitetura e carreira. Publicado no Medium.',
    vazio: 'Nenhum artigo publicado ainda.',
  },

  terminal: {
    prompt: 'ana@sre',
    tituloJanela: 'ana@sre: ~',
    rotuloEntrada: 'Digite um comando',
    dica: "digite 'ajuda' para ver os comandos",
    naoEncontrado: 'comando não encontrado: {cmd}',
    ajuda: 'comandos disponíveis:',
    comandos: [
      { nome: 'sobre', descricao: 'quem sou eu' },
      { nome: 'experiencia', descricao: 'trajetória profissional' },
      { nome: 'projetos', descricao: 'o que eu construí' },
      { nome: 'palestras', descricao: 'onde eu falei' },
      { nome: 'artigos', descricao: 'o que eu escrevi' },
      { nome: 'mentoria', descricao: 'mentoria de carreira internacional' },
      { nome: 'tema', descricao: 'alterna claro e escuro' },
      { nome: 'limpar', descricao: 'limpa a tela' },
    ],
  },

  newsletter: {
    eyebrow: '# newsletter',
  },

  mentoria: {
    eyebrow: '# mentoria',
    tituloPagina: 'Mentoria de carreira internacional',
    resumo:
      'Duas horas comigo, em videochamada, para revisar seu currículo, mapear as lacunas técnicas que estão travando você e montar um plano concreto para chegar ao mercado internacional. Depois da sessão, você continua com acesso a mim no WhatsApp para tirar dúvidas.',
    precoNota: '2h de mentoria + acompanhamento por WhatsApp',
    ctaBotao: 'Quero agendar',
    ctaAssunto: 'Mentoria de carreira internacional',

    paraQuemTitulo: 'Para quem é',
    paraQuem: [
      'Quem já trabalha com infraestrutura, DevOps ou SRE e quer aplicar para vagas fora do Brasil.',
      'Quem manda currículo para fora e não recebe resposta, sem saber onde está o problema.',
      'Quem sabe o que faz no dia a dia, mas não sabe traduzir isso para o que um recrutador de fora procura.',
      'Quem quer saber o que falta tecnicamente para o nível que está mirando — e em que ordem estudar.',
    ],

    metodologiaTitulo: 'Como funciona',
    metodologiaIntro:
      'O trabalho começa antes da chamada. Você me manda o currículo e o LinkedIn com antecedência e responde um questionário curto, para a sessão começar com o diagnóstico já feito — e não gastar os primeiros trinta minutos me contextualizando.',
    etapas: [
      {
        titulo: 'Diagnóstico',
        duracao: 'antes da sessão',
        descricao:
          'Questionário sobre sua experiência, stack, nível de inglês, objetivo (remoto para fora, mudança de país) e restrições reais — visto, fuso, família. Leio seu currículo e LinkedIn antes de conversarmos.',
      },
      {
        titulo: 'Onde você está',
        duracao: '20 min',
        descricao:
          'Revisamos juntas o diagnóstico e definimos o alvo concreto: que tipo de vaga, em que mercado, em que prazo. Sem isso, o resto do encontro vira conselho genérico.',
      },
      {
        titulo: 'Currículo e LinkedIn',
        duracao: '40 min',
        descricao:
          'Revisão linha a linha no padrão internacional: o que cortar, o que reescrever com verbo de impacto e número, e como passar por filtro automatizado (ATS). Currículo brasileiro e internacional seguem regras diferentes — e é aí que a maioria trava.',
      },
      {
        titulo: 'Lacunas técnicas',
        duracao: '35 min',
        descricao:
          'Mapa do que falta para o nível que você quer: Kubernetes, infraestrutura como código, observabilidade, cloud, on-call. Saio de lá com uma lista priorizada por impacto na contratação, não por ordem alfabética.',
      },
      {
        titulo: 'Estratégia de busca',
        duracao: '20 min',
        descricao:
          'Onde as vagas realmente aparecem, como abordar, o que esperar de cada etapa do processo lá fora (triagem, system design, behavioral) e como se posicionar na conversa de salário.',
      },
      {
        titulo: 'Plano de 90 dias',
        duracao: '5 min',
        descricao:
          'Fechamos com o que fazer nas próximas doze semanas, em ordem de prioridade. Coisa executável, não lista de desejos.',
      },
    ],

    entregaveisTitulo: 'O que você leva',
    entregaveis: [
      'Seu currículo revisado, com os apontamentos por escrito.',
      'O mapa das lacunas técnicas, priorizado.',
      'O plano de 90 dias.',
      'Acompanhamento por WhatsApp para dúvidas depois da sessão.',
    ],
  },

  meta: {
    titulo: 'Ana Luiza Primo — Site Reliability Engineer',
    descricao:
      'Site Reliability Engineer/DevOps Engineer | Carreira Internacional',
  },
};
