import type { Conteudo } from '@/i18n/tipos';

/**
 * Tradução feita a partir do português, sem original em espanhol escrito
 * pela Ana Luiza — vale uma revisão de falante nativo antes de divulgar.
 */
export const es: Conteudo = {
  perfil: {
    saudacao: '¡Hola! Soy Ana Luiza 👋',
    tagline:
      'Site Reliability Engineer — fiabilidad, observabilidad y rendimiento en producción.',
    bio: [
      'Soy Site Reliability Engineer y me enfoco en la fiabilidad, la observabilidad y el rendimiento de sistemas en producción. He trabajado con plataformas de alto tráfico de cara al cliente, definiendo SLOs/SLIs, reduciendo el MTTR y construyendo observabilidad de punta a punta.',
      'También creo contenido sobre carrera en SRE/DevOps y hago mentoría a profesionales que quieren crecer en el área, incluso de cara al mercado internacional.',
    ],
    avatarAlt: 'Foto de perfil de Ana Luiza Primo',
    localizacao: 'Brasil',
  },

  nav: {
    sobre: 'Sobre mí',
    experiencia: 'Experiencia',
    projetos: 'Proyectos',
    palestras: 'Charlas',
  },

  secoes: {
    sobre: { eyebrow: '# sobre mí', titulo: 'Sobre mí' },
    experiencia: { eyebrow: '# experiencia', titulo: 'Trayectoria profesional' },
    projetos: { eyebrow: '# proyectos', titulo: 'Mis proyectos' },
    palestras: { eyebrow: '# charlas', titulo: 'Charlas y presentaciones' },
    videos: { eyebrow: '# youtube', titulo: 'Últimos vídeos' },
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
    verSlides: 'Ver diapositivas',
    tituloGravacao: 'Grabación: {titulo}',
    rotuloSlides: 'Diapositivas: {titulo}',
    verTodosVideos: 'Ver todos los vídeos en el canal',
    inscritosUm: '{n} suscriptor',
    inscritosVarios: '{n} suscriptores',

    atual: 'actualidad',
    cargoJsonLd: 'Site Reliability Engineer',
  },

  experiencia: {
    internacional: {
      empresa: 'una empresa internacional',
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

  empresas: {
    stone: 'Stone Pagamentos',
    iti: 'iti',
    itau: 'Itaú Unibanco',
    internacional: 'una empresa internacional',
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
    'observabilidade-na-pratica': {
      titulo: 'Observabilidad en la práctica: apuntes de quien apaga incendios',
      evento: 'SRE Meetup SP',
      local: 'São Paulo, Brasil',
      descricao:
        'Cómo salir del modo "apagar incendios" y construir observabilidad de verdad: métricas, logs y trazas que realmente ayudan a diagnosticar incidentes en producción. Un recorrido práctico por paneles, alertas accionables y los errores más comunes de quien está empezando.',
      capaAlt:
        'Portada de la charla Observabilidad en la práctica, con el título sobre fondo oscuro',
      fotosAlt: [
        'Ana Luiza presentando en el escenario del SRE Meetup SP',
        'Público siguiendo la presentación sobre observabilidad',
      ],
    },
    'sre-alem-do-hype': {
      titulo: 'SRE más allá del hype: qué cambia en el día a día',
      evento: 'Kubernetes Community Days',
      local: 'Online',
      descricao:
        'SRE se volvió una palabra de moda, pero ¿qué cambia de verdad en la rutina de quien opera sistemas en producción? Hablo sobre SLOs que funcionan, error budgets, cultura de post-mortem sin culpa y cómo todo eso se conecta con Kubernetes en el día a día.',
      capaAlt:
        'Portada de la charla SRE más allá del hype, con el título sobre fondo oscuro',
      fotosAlt: [
        'Transmisión en vivo de la charla en Kubernetes Community Days',
        'Diapositiva sobre error budgets mostrada durante la presentación',
      ],
    },
  },


  meta: {
    titulo: 'Ana Luiza Primo — Site Reliability Engineer',
    descricao:
      'Site Reliability Engineer — fiabilidad, observabilidad y rendimiento en producción.',
  },
};
