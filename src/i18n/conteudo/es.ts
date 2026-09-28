import type { Conteudo } from '@/i18n/tipos';

/**
 * Tradução feita a partir do português, sem original em espanhol escrito
 * pela Ana Luiza — vale uma revisão de falante nativo antes de divulgar.
 */
export const es: Conteudo = {
  perfil: {
    saudacao: '¡Hola! Soy Ana Luiza',
    tagline:
      'Site Reliability Engineer/DevOps Engineer | Carrera Internacional',
    bio: [
      'Soy Site Reliability Engineer y me enfoco en la fiabilidad, la observabilidad y el rendimiento de sistemas en producción. He trabajado con plataformas de alto tráfico de cara al cliente, definiendo SLOs/SLIs, reduciendo el MTTR y construyendo observabilidad de punta a punta.',
      'También creo contenido sobre carrera en SRE/DevOps y hago mentoría a profesionales que quieren crecer en el área, incluso de cara al mercado internacional.',
    ],
    destaques: [
      {
        texto:
          'He trabajado en Stone Pagamentos, Banco Iti e Itaú Unibanco — bancos, medios de pago y servicios financieros.',
      },
      {
        texto: 'Hoy trabajo en contratos internacionales en Estados Unidos.',
      },
      {
        texto: 'También hago mentoría de carrera internacional en tecnología.',
        linkTexto: 'mentoría de carrera internacional',
        href: '/mentoria',
      },
      {
        texto: 'Y escribo sobre SRE, cloud y carrera.',
        linkTexto: 'escribo sobre SRE, cloud y carrera',
        href: '/artigos',
      },
    ],
    avatarAlt: 'Foto de perfil de Ana Luiza Primo',
    localizacao: 'Brasil',
  },

  nav: {
    sobre: 'Sobre mí',
    experiencia: 'Experiencia',
    projetos: 'Proyectos',
    palestras: 'Charlas',
    artigos: 'Artículos',
    mentoria: 'Mentoría',
  },

  secoes: {
    sobre: { eyebrow: '# sobre mí', titulo: 'Sobre mí' },
    experiencia: { eyebrow: '# experiencia', titulo: 'Trayectoria profesional' },
    projetos: { eyebrow: '# proyectos', titulo: 'Mis proyectos' },
    palestras: { eyebrow: '# charlas', titulo: 'Charlas y presentaciones' },
    videos: { eyebrow: '# youtube', titulo: 'Últimos vídeos' },
    artigos: { eyebrow: '# medium', titulo: 'Artículos' },
    instagram: { eyebrow: '# instagram', titulo: 'En Instagram' },
  },

  ui: {
    skipLink: 'Saltar al contenido',
    navPrincipal: 'Navegación principal',
    redesSociais: 'Redes sociales',
    temaParaClaro: 'Cambiar al tema claro',
    temaParaEscuro: 'Cambiar al tema oscuro',
    seletorIdioma: 'Elegir idioma',
    creditoRodape: 'Creado por {nome} con Next.js y TailwindCSS. © {ano}.',
    trajetoriaComAtual: 'He trabajado en {passadas}, y hoy trabajo en {atual}.',
    trajetoriaSemAtual: 'He trabajado en {passadas}.',
    conjuncaoE: 'y',
    formacao: 'formación',
    stackFerramentas: 'stack y herramientas',
    ariaRepositorio: 'Repositorio de {nome} en GitHub',
    ariaDemo: 'Ver demo de {nome}',
    filtroTodas: 'todas',
    filtrarPorTag: 'Filtrar por etiqueta',
    semPalestras: 'Pronto habrá nuevas charlas.',
    semPalestrasComTag: 'No se encontró ninguna charla con esa etiqueta.',
    voltarPalestras: 'Volver a las charlas',
    tituloSlides: '# diapositivas',
    tituloFotos: '# fotos',
    baixarSlides: 'Descargar diapositivas',
    slideAnterior: 'Diapositiva anterior',
    slideProximo: 'Diapositiva siguiente',
    slideContador: '{atual} de {total}',
    slideAlt: 'Diapositiva {n} de {total}',
    slidesAcessibilidade:
      'Las diapositivas son imágenes; el PDF es la versión que un lector de pantalla puede leer.',
    verSlides: 'Ver diapositivas',
    tituloGravacao: 'Grabación: {titulo}',
    rotuloSlides: 'Diapositivas: {titulo}',
    verTodosVideos: 'Ver todos los vídeos en el canal',
    verTodosArtigos: 'Ver todos los artículos',
    verPerfilInstagram: 'Ver el perfil en Instagram',
    voltarInicio: 'Volver al inicio',
    inscritosUm: '{n} suscriptor',
    inscritosVarios: '{n} suscriptores',

    atual: 'actualidad',
    cargoJsonLd: 'Site Reliability Engineer',
  },

  experiencia: {
    internacional: {
      empresa: 'Contratos internacionales — Estados Unidos',
      cargo: 'Site Reliability Engineer',
      localizacao: 'Remoto',
      bullets: [
        'Fiabilidad y observabilidad de sistemas en producción, en un contrato remoto fuera de Brasil.',
      ],
    },
    itau: {
      empresa: 'Itaú Unibanco',
      cargo: 'Site Reliability Engineer — nivel M',
      localizacao: 'São Paulo, Brasil',
      bullets: [
        'Equipo de observabilidad de los canales principales de la app del banco — inicio de sesión, home y autenticación.',
        'Mapeo de las aplicaciones y de sus arquitecturas para poder actuar ante problemas e incidentes.',
        'Construcción de alertas y paneles junto al equipo, para monitorear y mantener la app disponible para el cliente.',
      ],
    },
    iti: {
      empresa: 'iti — banco digital de Itaú',
      cargo: 'Site Reliability Engineer — nivel M',
      localizacao: 'São Paulo, Brasil',
      bullets: [
        'Orquestación de incidentes, soporte de canales y conducción de las ceremonias de post-mortem.',
        'Cultura de SLOs y observabilidad proactiva; instrumentación de microservicios .NET Core y Kotlin.',
        'Soporte de cientos de microservicios en Kubernetes/AWS EKS, con Splunk, Grafana, AppDynamics, Jaeger, Loki y Elasticsearch.',
        'Guardia on-call, eliminación de toil mediante automatización y pruebas de rendimiento con JMeter.',
      ],
    },
    stone: {
      empresa: 'Stone Pagamentos',
      cargo: 'Site Reliability Engineer — nivel J',
      localizacao: 'São Paulo, Brasil',
      bullets: [
        'Equipo de operaciones e infraestructura responsable del ciclo de vida de un conjunto de servicios: despliegue, disponibilidad, rendimiento, cambios y emergencias.',
        'Capacity planning y automatización de infraestructura como código en Google Cloud.',
        'Interlocución con los equipos de desarrollo y con gobernanza, garantizando la adherencia a estándares y compliance.',
      ],
    },
  },

  formacao: {
    inatel: 'Ingeniería de Producción',
    'ohio-pm': 'Project Management',
    'ohio-english': 'Business English',
  },


  projetos: {
    '100-dias-kubernetes':
      'Registro público del desafío #100DiasDeKubernetes escrito íntegramente en portugués, traduciendo y ampliando el material de Anais Urlichs con referencias brasileñas. Repositorio colaborativo, abierto a forks y pull requests.',
    'datadog-automation':
      'API en Flask que genera paneles y monitores de Datadog a partir de los datos de la aplicación y de la cuenta de AWS, con 9 tipos de panel y 12 de monitor. Incluye un asistente interactivo y se distribuye en contenedores con Docker y Nginx.',
    'arquitetura-celular':
      'Proyecto Terraform que provisiona una arquitectura celular en AWS: células independientes en AZs distintas, cada una con su propia VPC, NAT gateway, clúster EKS y ALB — aislando los fallos por célula.',
  },

  palestras: {
    'agilidade-na-pratica': {
      titulo: 'Agilidad en la práctica',
      evento: 'HackMundo',
      local: '',
      descricao:
        'Taller para los equipos del hackathon: metodologías ágiles aplicadas a un proyecto que tiene que salir en pocos días. Cómo organizar el trabajo, dividir el alcance y llegar al final del evento con algo entregado.',
      capaAlt:
        'Diapositiva de apertura de la charla Agilidad en la Práctica, con el subtítulo "Metodologías ágiles para que arrases en tu proyecto"',
      fotosAlt: [],
    },
    'cloud-native-day-sp': {
      titulo: 'Del Prometheus al GPT: una nueva era en la observabilidad inteligente',
      evento: 'Cloud Native Day São Paulo',
      local: 'São Paulo, Brasil',
      descricao:
        'El camino de la observabilidad tradicional — métricas, Prometheus, paneles — hasta el punto en que los modelos de lenguaje entran en la war room. Qué cambia en el diagnóstico de incidentes cuando la máquina ayuda a interpretar la señal, y qué sigue siendo trabajo de personas.',
      capaAlt:
        'Ana Luiza Primo frente al panel de patrocinadores del Cloud Native Day São Paulo',
      fotosAlt: [],
    },
    'softskills-devops': {
      titulo: 'Las soft skills que un devops necesita y nadie te cuenta',
      evento: 'DevOps Days Belo Horizonte',
      local: 'Belo Horizonte, Brasil',
      descricao:
        'Soft skills y resiliencia para una carrera DevOps de élite. Lo que sostiene la carrera cuando la parte técnica ya está resuelta — comunicar durante un incidente, trabajar bajo presión y las conversaciones que ningún curso enseña.',
      capaAlt:
        'Ana Luiza Primo frente al banner del DevOps Days Belo Horizonte',
      fotosAlt: [],
    },
    'workshop-empreendedorismo': {
      titulo: 'Taller de emprendimiento',
      evento: 'HackMundo',
      local: '',
      descricao:
        'Emprendimiento simplificado, planificado y accesible, para los equipos del hackathon. De la idea inicial al pitch, pasando por design thinking y planificación — lo suficiente para sacar una idea de la cabeza y defenderla ante un jurado.',
      capaAlt:
        'Diapositiva de apertura del taller, titulada "¡Idealización, planificación y acción!"',
      fotosAlt: [],
    },
    'devopsdays-belem': {
      titulo: 'Build and Run',
      evento: 'DevOps Days Belém',
      local: 'Belém, Brasil',
      descricao:
        'Quien construye también opera: qué cambia en la rutina de un equipo cuando pasa a ser dueño de lo que puso en producción, del build a la guardia.',
      capaAlt:
        'Ana Luiza Primo junto al banner del DevOps Days Belém, sosteniendo un libro',
      fotosAlt: [],
    },
  },


  artigos: {
    tituloPagina: 'Artículos',
    descricao:
      'Lo que vengo escribiendo sobre SRE, cloud, arquitectura y carrera. Publicado en Medium.',
    vazio: 'Todavía no hay artículos publicados.',
  },

  terminal: {
    prompt: 'ana@sre',
    tituloJanela: 'ana@sre: ~',
    rotuloEntrada: 'Escribe un comando',
    dica: "escribe 'ayuda' para ver los comandos",
    naoEncontrado: 'comando no encontrado: {cmd}',
    ajuda: 'comandos disponibles:',
    comandos: [
      { nome: 'sobre', descricao: 'quién soy' },
      { nome: 'experiencia', descricao: 'trayectoria profesional' },
      { nome: 'proyectos', descricao: 'lo que construí' },
      { nome: 'charlas', descricao: 'dónde hablé' },
      { nome: 'articulos', descricao: 'lo que escribí' },
      { nome: 'mentoria', descricao: 'mentoría de carrera internacional' },
      { nome: 'tema', descricao: 'alterna claro y oscuro' },
      { nome: 'limpiar', descricao: 'limpia la pantalla' },
    ],
  },

  newsletter: {
    eyebrow: '# newsletter',
  },

  mentoria: {
    eyebrow: '# mentoría',
    tituloPagina: 'Mentoría de carrera internacional',
    resumo:
      'Dos horas conmigo, por videollamada, para revisar tu currículum, mapear las brechas técnicas que te están frenando y armar un plan concreto para llegar al mercado internacional. Después de la sesión, sigues con acceso a mí por WhatsApp para resolver dudas.',
    precoNota: '2h de mentoría + acompañamiento por WhatsApp',
    ctaBotao: 'Quiero agendar',
    ctaAssunto: 'Mentoría de carrera internacional',

    paraQuemTitulo: 'Para quién es',
    paraQuem: [
      'Quien ya trabaja con infraestructura, DevOps o SRE y quiere postular a vacantes fuera de Brasil.',
      'Quien envía currículums al exterior y no recibe respuesta, sin saber dónde está el problema.',
      'Quien sabe lo que hace en su día a día, pero no logra traducirlo a lo que busca un reclutador extranjero.',
      'Quien quiere saber qué le falta técnicamente para el nivel al que apunta — y en qué orden estudiarlo.',
    ],

    metodologiaTitulo: 'Cómo funciona',
    metodologiaIntro:
      'El trabajo empieza antes de la llamada. Me envías tu currículum y tu LinkedIn con anticipación y respondes un cuestionario corto, para que la sesión arranque con el diagnóstico ya hecho — y no gastar los primeros treinta minutos en contexto.',
    etapas: [
      {
        titulo: 'Diagnóstico',
        duracao: 'antes de la sesión',
        descricao:
          'Cuestionario sobre tu experiencia, stack, nivel de inglés, objetivo (remoto para el exterior, mudanza de país) y restricciones reales — visa, huso horario, familia. Leo tu currículum y tu LinkedIn antes de conversar.',
      },
      {
        titulo: 'Dónde estás',
        duracao: '20 min',
        descricao:
          'Revisamos juntas el diagnóstico y definimos el objetivo concreto: qué tipo de vacante, en qué mercado, en qué plazo. Sin eso, el resto del encuentro se vuelve consejo genérico.',
      },
      {
        titulo: 'Currículum y LinkedIn',
        duracao: '40 min',
        descricao:
          'Revisión línea por línea según el estándar internacional: qué cortar, qué reescribir con verbos de impacto y números, y cómo pasar el filtro automatizado (ATS). El currículum brasileño y el internacional siguen reglas distintas — y ahí es donde la mayoría se traba.',
      },
      {
        titulo: 'Brechas técnicas',
        duracao: '35 min',
        descricao:
          'Mapa de lo que falta para el nivel que quieres: Kubernetes, infraestructura como código, observabilidad, cloud, on-call. Sales con una lista priorizada por impacto en la contratación, no por orden alfabético.',
      },
      {
        titulo: 'Estrategia de búsqueda',
        duracao: '20 min',
        descricao:
          'Dónde aparecen realmente las vacantes, cómo abordarlas, qué esperar de cada etapa del proceso en el exterior (screening, system design, behavioral) y cómo posicionarte en la conversación salarial.',
      },
      {
        titulo: 'Plan de 90 días',
        duracao: '5 min',
        descricao:
          'Cerramos con qué hacer en las próximas doce semanas, en orden de prioridad. Algo ejecutable, no una lista de deseos.',
      },
    ],

    entregaveisTitulo: 'Qué te llevas',
    entregaveis: [
      'Tu currículum revisado, con las observaciones por escrito.',
      'El mapa de brechas técnicas, priorizado.',
      'El plan de 90 días.',
      'Acompañamiento por WhatsApp para dudas después de la sesión.',
    ],
  },

  meta: {
    titulo: 'Ana Luiza Primo — Site Reliability Engineer',
    descricao:
      'Site Reliability Engineer/DevOps Engineer | Carrera Internacional',
  },
};
