import type { Conteudo } from '@/i18n/tipos';

/**
 * Tradução feita a partir do português, sem original em espanhol escrito
 * pela Ana Luiza — vale uma revisão de falante nativo antes de divulgar.
 */
export const es: Conteudo = {
  perfil: {
    tagline: 'Site Reliability Engineer · Tecnología y Carrera',
    destaques: [
      { texto: 'SRE en un contrato internacional en Estados Unidos. Antes: Stone, iti e Itaú.' },
      { texto: 'Estudié Project Management y Business English en la Ohio University.' },
      {
        texto: 'Construyo productos propios — hoy, Dueto, NutriMatch y Cert Tracker.',
        linkTexto: 'productos propios',
        href: '#projetos',
      },
      {
        texto: 'Doy charlas, escribo y hablo de carrera en tecnología en YouTube e Instagram.',
        linkTexto: 'Doy charlas, escribo',
        href: '#comunidade',
      },
      {
        texto: 'Y hago mentoría de carrera internacional.',
        linkTexto: 'mentoría de carrera internacional',
        href: '/mentoria',
      },
    ],
    avatarAlt: 'Foto de perfil de Ana Luiza Primo',
  },

  nav: {
    projetos: 'Proyectos',
    comunidade: 'Comunidad',
    artigos: 'Artículos',
    mentoria: 'Mentoría',
    materiais: 'Materiales',
  },

  secoes: {
    projetos: { eyebrow: 'proyectos', titulo: 'Productos que construyo.' },
    comunidade: {
      eyebrow: 'comunidad',
      titulo: 'Charlas, artículos y contenido.',
      intro: 'Lo que comparto más allá del trabajo: charlas en eventos, artículos y contenido sobre carrera en tecnología.',
      palestras: 'Charlas',
      artigos: 'Artículos',
      redes: 'Contenido',
      cta: {
        titulo: '¿Tienes un evento, una charla o una carrera que destrabar?',
        mentoria: 'Conocer la mentoría',
        linkedin: 'Hablar por LinkedIn',
      },
      youtube: {
        ultimoVideo: 'último vídeo',
        maisVideos: 'más vídeos',
        verCanal: 'Ver el canal',
        assistir: 'Ver en YouTube: {titulo}',
      },
    },
  },

  redes: {
    youtube: 'Vídeos sobre SRE, DevOps y carrera en tecnología.',
    instagram: 'Contenido corto sobre carrera en tecnología.',
  },

  ui: {
    skipLink: 'Saltar al contenido',
    navPrincipal: 'Navegación principal',
    redesSociais: 'Redes sociales',
    temaParaClaro: 'Cambiar al tema claro',
    temaParaEscuro: 'Cambiar al tema oscuro',
    seletorIdioma: 'Elegir idioma',
    creditoRodape: 'Creado por {nome} con Next.js y TailwindCSS. © {ano}.',
    ariaRepositorio: 'Repositorio de {nome} en GitHub',
    baixarVersao: 'Descargar {versao}',
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
    verTodosArtigos: 'Ver todos los artículos',
    voltarInicio: 'Volver al inicio',
    inscritosUm: '{n} suscriptor',
    inscritosVarios: '{n} suscriptores',
    cargoJsonLd: 'Site Reliability Engineer',
  },

  projetos: {
    dueto: {
      resumo: 'Finanzas personales y de empresa para devs',
      descricao:
        'App de escritorio y offline (en portugués de Brasil) para organizar el dinero de una persona o de una familia: el presupuesto del mes, la empresa que factura en dólares (facturas, impuestos del Simples Nacional, pró-labore, estado de resultados) y las inversiones, en un solo lugar. Los datos quedan en un SQLite local.',
    },
    nutrimatch: {
      resumo: 'Pacientes y nutricionistas, sin burocracia',
      descricao:
        'Plataforma que conecta pacientes con nutricionistas: búsqueda, reserva de consultas online o presenciales, agenda del profesional y panel de administración. Proyecto de la FETIN 2026, en el Inatel.',
    },
    'cert-tracker': {
      resumo: 'Estudio para certificaciones',
      descricao:
        'App de escritorio y offline para estudiar certificaciones de AWS, Kubernetes, Linux, Docker y Terraform: plan diario según los pesos oficiales de cada examen, flashcards con repetición espaciada (FSRS), simulacros por dominio, cuaderno de errores y un Readiness Score que indica cuándo agendar el examen. También funciona en el navegador como PWA.',
    },
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
    eyebrow: '# artículos',
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
      { nome: 'proyectos', descricao: 'lo que construí' },
      { nome: 'comunidad', descricao: 'charlas, artículos y contenido' },
      { nome: 'charlas', descricao: 'dónde hablé' },
      { nome: 'articulos', descricao: 'lo que escribí' },
      { nome: 'mentoria', descricao: 'mentoría de carrera internacional' },
      { nome: 'materiales', descricao: 'guías y checklists gratuitos' },
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
      'Dirección para quien trabaja con infraestructura, DevOps o SRE y quiere llegar al mercado internacional: dónde estás, qué te falta para el nivel que quieres y por dónde empezar. En formatos y precios que caben en distintos momentos de la carrera.',
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

    principiosTitulo: 'En qué se basa el método',
    principios: [
      {
        titulo: 'GROW: meta, realidad, opciones, acción',
        descricao:
          'El modelo de John Whitmore, usado en las mentorías y coachings de carrera más efectivos. Cada sesión pasa por las cuatro preguntas, en orden: adónde quieres llegar, dónde estás de verdad, qué caminos existen y qué vas a hacer hasta la semana que viene.',
      },
      {
        titulo: 'Diagnóstico antes de la conversación',
        descricao:
          'Currículum, LinkedIn y un cuestionario llegan antes. La sesión empieza con el mapa listo, no contigo explicándome quién eres — es lo que separa dirección de charla.',
      },
      {
        titulo: 'Artefacto, no consejo',
        descricao:
          'Sales con cosas que existen fuera de tu cabeza: el currículum revisado, la lista de brechas, el plan. El consejo se olvida; el documento se ejecuta.',
      },
      {
        titulo: 'Acompañamiento con ritmo',
        descricao:
          'Un mensaje tuyo por semana, corto: qué hiciste, qué se trabó. Si te trabas dos semanas en lo mismo, hablamos. Es lo que tienen en común las mentorías que funcionan: cadencia, no intensidad.',
      },
    ],

    metodologiaTitulo: 'Cómo funciona la sesión completa',
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
        titulo: 'Meta y realidad',
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
        titulo: 'Opciones: estrategia de búsqueda',
        duracao: '20 min',
        descricao:
          'Dónde aparecen realmente las vacantes, cómo abordarlas, qué esperar de cada etapa del proceso en el exterior (screening, system design, behavioral) y cómo posicionarte en la conversación salarial.',
      },
      {
        titulo: 'Acción: plan de 90 días',
        duracao: '5 min',
        descricao:
          'Cerramos con qué hacer en las próximas doce semanas, en orden de prioridad. Algo ejecutable, no una lista de deseos.',
      },
    ],

    entregaveisTitulo: 'Qué te llevas',
    entregaveis: [
      'Tu currículum revisado, con las observaciones por escrito.',
      'El mapa de brechas técnicas, priorizado.',
      'El plan de 90 días, completado.',
      'El banco de preguntas de entrevista SRE, por etapa.',
      'Acompañamiento por WhatsApp para dudas después de la sesión.',
    ],

    planosTitulo: 'Formatos y precios',
    planosIntro:
      'No todo momento pide dos horas. Hay formato para quien solo quiere saber si el currículum está bien, para quien quiere acompañamiento por un mes, y para quien prefiere dividir el costo con más gente.',
    porPessoa: 'por persona',
    planos: {
      diagnostico: {
        nome: 'Diagnóstico',
        descricao: 'Cuarenta y cinco minutos para responder una pregunta: qué te está frenando.',
        inclui: [
          'Revisión del currículum y del LinkedIn, con observaciones por escrito',
          'Las tres cosas a corregir primero',
          'Indicación del formato siguiente, si tiene sentido',
        ],
      },
      sessao: {
        nome: 'Sesión completa',
        descricao: 'Dos horas, las seis etapas, y sales con un plan.',
        inclui: [
          'Todo lo del diagnóstico',
          'Mapa de brechas técnicas priorizado',
          'Estrategia de búsqueda y de entrevista',
          'Plan de 90 días y banco de preguntas',
          'WhatsApp para dudas durante 30 días',
        ],
      },
      pacote: {
        nome: 'Acompañamiento de 30 días',
        descricao: 'Para quien quiere ejecutar el plan con alguien mirando al lado.',
        inclui: [
          'Sesión completa de apertura (2h)',
          'Dos sesiones de 1h en las semanas siguientes',
          'Una simulación de entrevista en inglés, grabada',
          'Revisión de cada postulación que quieras enviar',
          'WhatsApp durante todo el período',
        ],
      },
      turma: {
        nome: 'Grupo pequeño',
        descricao: 'Hasta seis personas. Tres encuentros de 1h30. El formato más accesible.',
        inclui: [
          'Encuentro 1: currículum y LinkedIn para el exterior',
          'Encuentro 2: brechas técnicas por nivel',
          'Encuentro 3: proceso selectivo y negociación',
          'Materiales de la mentoría para todos',
          'Grupo de WhatsApp durante el mes',
        ],
      },
    },
    materiaisChamada: '¿Quieres empezar sola? Los materiales gratuitos están aquí.',

    ressalvaTitulo: 'Lo que esta mentoría no es',
    ressalva:
      'No garantiza una vacante internacional — nadie honesto garantiza eso. El objetivo es darte dirección: entender dónde estás hoy, qué te falta para el nivel que quieres y por dónde empezar. El resultado depende del trabajo que hagas después de la sesión.',

    formTitulo: 'Quiero agendar',
    formIntro:
      'Cuéntame un poco de ti y qué formato tiene más sentido. Respondo con fechas, horarios y forma de pago.',
    campoNome: 'Nombre',
    campoEmail: 'Correo',
    campoWhatsapp: 'WhatsApp',
    campoCargo: 'Puesto y años de experiencia',
    campoObjetivo: 'Qué quieres lograr',
    campoObjetivoDica:
      'Ej.: trabajar en remoto para el exterior, mudarte de país, subir de nivel en tu empresa actual. Si ya sabes el formato, dime cuál.',
    formBotao: 'Enviar',
    formNota: 'Llega directo a mi correo. Respondo por ahí o por WhatsApp.',
    formEnviando: 'Enviando…',
    formSucesso: '¡Recibido! Te respondo pronto por correo o WhatsApp.',
    formInvalido: 'Revisa los campos: nombre, correo, WhatsApp y un objetivo de al menos una frase.',
    formLimite: 'Ya enviaste varias veces. Espera un poco antes de intentar de nuevo.',
    formErro: 'No pude enviarlo ahora. Inténtalo de nuevo en un momento — o escríbeme por LinkedIn.',
  },

  materiais: {
    eyebrow: '# materiales',
    tituloPagina: 'Materiales',
    descricao:
      'Guías y checklists que uso en la mentoría. Algunos están aquí completos, gratis — empieza por ellos. Los demás vienen con la mentoría.',
    seloGratuito: 'gratuito',
    seloMentoria: 'incluido en la mentoría',
    leitura: '{min} min de lectura',
    avisoIdioma: 'Este material está escrito en portugués.',
    incluidoNaMentoria:
      'Este material se entrega a quien hace la mentoría — completado juntas, en la sesión, no como un PDF genérico.',
    verMentoria: 'Ver la mentoría',
    voltarMateriais: 'Volver a materiales',
    itens: {
      'checklist-curriculo-internacional': {
        titulo: 'Checklist: currículum para vacante internacional',
        descricao:
          'Treinta ítems, del formato al inglés, para revisar antes de enviar el currículum al exterior. Cada "no" es una corrección.',
      },
      'linkedin-para-recrutador-gringo': {
        titulo: 'Un LinkedIn que el reclutador extranjero encuentra',
        descricao:
          'Cómo aparecer en la búsqueda de LinkedIn Recruiter y convencer en diez segundos: título, resumen, habilidades y los errores que cierran la puerta.',
      },
      'mapa-competencias-sre': {
        titulo: 'Mapa de competencias SRE/DevOps por nivel',
        descricao:
          'Lo que una vacante junior, semi-senior y senior realmente exige en la entrevista — y en qué orden estudiar. Para saber dónde estás y qué viene después.',
      },
      'plano-90-dias': {
        titulo: 'Plan de 90 días',
        descricao:
          'Doce semanas en tres bloques — hacerte visible, cerrar la mayor brecha, entrevistar — con un artefacto por semana. Completado juntas, en la sesión.',
      },
      'banco-perguntas-entrevista-sre': {
        titulo: 'Banco de preguntas de entrevista SRE',
        descricao:
          'Cincuenta preguntas reales de procesos para el exterior, del screening a la negociación, con lo que el entrevistador quiere oír en cada una.',
      },
    },
  },

  meta: {
    titulo: 'Ana Luiza Primo - Technology and Career',
    descricao:
      'Ana Luiza Primo es Site Reliability Engineer y crea contenido sobre tecnología y carrera internacional. Proyectos, charlas, artículos y mentoría.',
  },
};
