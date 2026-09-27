import type { Conteudo } from '@/i18n/tipos';

export const pt: Conteudo = {
  perfil: {
    saudacao: 'Oi! Eu sou a Ana Luiza 👋',
    tagline:
      'Site Reliability Engineer/DevOps Engineer: confiabilidade, observabilidade e performance em produção.',
    bio: [
      'Sou Site Reliability Engineer com foco em confiabilidade, observabilidade e performance de sistemas em produção. Já trabalhei com plataformas de alto tráfego voltadas ao cliente, definindo SLOs/SLIs, reduzindo MTTR e construindo observabilidade ponta a ponta.',
      'Também crio conteúdo sobre carreira em SRE/DevOps e mentoro profissionais que querem crescer na área, inclusive para o mercado internacional.',
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

  empresas: {
    stone: 'Stone Pagamentos',
    iti: 'Banco Iti',
    itau: 'Itaú Unibanco',
    internacional: 'contratos internacionais nos Estados Unidos',
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
    'observabilidade-na-pratica': {
      titulo: 'Observabilidade na prática: de quem apaga incêndio',
      evento: 'SRE Meetup SP',
      local: 'São Paulo, SP',
      descricao:
        'Como sair do modo "apaga incêndio" e construir observabilidade de verdade: métricas, logs e traces que efetivamente ajudam a diagnosticar incidentes em produção. Um passeio prático por dashboards, alertas acionáveis e os erros mais comuns de quem está começando.',
      capaAlt:
        'Capa da palestra Observabilidade na prática, com o título sobre fundo escuro',
      fotosAlt: [
        'Ana Luiza apresentando no palco do SRE Meetup SP',
        'Plateia acompanhando a apresentação sobre observabilidade',
      ],
    },
    'sre-alem-do-hype': {
      titulo: 'SRE além do hype: o que muda no dia a dia',
      evento: 'Kubernetes Community Days',
      local: 'Online',
      descricao:
        'SRE virou palavra da moda, mas o que muda de verdade na rotina de quem opera sistemas em produção? Falo sobre SLOs que funcionam, error budgets, cultura de post-mortem sem culpa e como isso se conecta com Kubernetes no dia a dia.',
      capaAlt: 'Capa da palestra SRE além do hype, com o título sobre fundo escuro',
      fotosAlt: [
        'Transmissão ao vivo da palestra no Kubernetes Community Days',
        'Slide sobre error budgets exibido durante a apresentação',
      ],
    },
  },


  artigos: {
    tituloPagina: 'Artigos',
    descricao:
      'O que venho escrevendo sobre SRE, cloud, arquitetura e carreira. Publicado no Medium.',
    vazio: 'Nenhum artigo publicado ainda.',
  },

  newsletter: {
    eyebrow: '# newsletter',
  },

  meta: {
    titulo: 'Ana Luiza Primo — Site Reliability Engineer',
    descricao:
      'Site Reliability Engineer/DevOps Engineer: confiabilidade, observabilidade e performance em produção.',
  },
};
