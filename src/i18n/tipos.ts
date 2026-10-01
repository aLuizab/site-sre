/**
 * Uma linha da apresentação, no estilo "Já atuei em...".
 * `linkTexto` precisa ser um trecho de `texto`: o componente parte a
 * frase nele e transforma só esse pedaço em link.
 */
export interface Destaque {
  texto: string;
  linkTexto?: string;
  /** Relativo ao idioma ("/mentoria") ou âncora ("#projetos"). */
  href?: string;
}

export interface ConteudoPerfil {
  tagline: string;
  /** Linhas da apresentação, abaixo do nome. */
  destaques: Destaque[];
  avatarAlt: string;
}

export interface ConteudoProjeto {
  /** Uma linha: o que é, para quem. */
  resumo: string;
  descricao: string;
}

export interface ConteudoPalestra {
  titulo: string;
  evento: string;
  local: string;
  descricao: string;
  capaAlt: string;
  /** Um alt por foto, na mesma ordem do array `fotos` em data/palestras.ts. */
  fotosAlt: string[];
}

export interface ConteudoSecao {
  eyebrow: string;
  titulo: string;
}

/**
 * Contrato único dos três dicionários. Como pt/en/es são tipados com esta
 * interface, esquecer uma chave em qualquer idioma vira erro de tipo em
 * vez de string faltando na tela.
 */
export interface Conteudo {
  perfil: ConteudoPerfil;

  nav: {
    projetos: string;
    comunidade: string;
    artigos: string;
    mentoria: string;
    materiais: string;
  };

  secoes: {
    projetos: ConteudoSecao;
    comunidade: ConteudoSecao & {
      intro: string;
      /** Títulos dos blocos dentro da seção. */
      palestras: string;
      artigos: string;
      redes: string;
      /** Caixa de contato ao lado da introdução. */
      cta: { titulo: string; mentoria: string; linkedin: string };
      /** Bloco do YouTube em destaque. `assistir` usa {titulo}. */
      youtube: { ultimoVideo: string; maisVideos: string; verCanal: string; assistir: string };
    };
  };

  /** Descrição de cada rede no bloco de comunidade, pelo `id` de data/socials.ts. */
  redes: Partial<Record<'youtube' | 'instagram', string>>;

  /** Página de artigos do Medium. */
  artigos: {
    eyebrow: string;
    tituloPagina: string;
    descricao: string;
    vazio: string;
  };

  /** Interface do terminal na apresentação. */
  terminal: {
    /** Usuário e host mostrados no prompt, ex.: "ana@sre". */
    prompt: string;
    tituloJanela: string;
    /** Rótulo acessível do campo de comando. */
    rotuloEntrada: string;
    dica: string;
    naoEncontrado: string;
    /** Usa {comandos}. */
    ajuda: string;
    comandos: { nome: string; descricao: string }[];
  };

  newsletter: {
    /** Rótulo do bloco de inscrição no painel flutuante. */
    eyebrow: string;
  };

  /** Página da mentoria. */
  mentoria: {
    eyebrow: string;
    tituloPagina: string;
    resumo: string;
    /** Complemento do preço, ex.: "2h + acompanhamento por WhatsApp". */
    precoNota: string;
    ctaBotao: string;
    /** Assunto do e-mail que o botão abre. */
    ctaAssunto: string;
    paraQuemTitulo: string;
    paraQuem: string[];
    metodologiaTitulo: string;
    metodologiaIntro: string;
    etapas: { titulo: string; duracao: string; descricao: string }[];
    entregaveisTitulo: string;
    entregaveis: string[];

    /** Deixa claro o que a mentoria NÃO promete. */
    ressalvaTitulo: string;
    ressalva: string;

    formTitulo: string;
    formIntro: string;
    campoNome: string;
    campoEmail: string;
    campoWhatsapp: string;
    campoCargo: string;
    campoObjetivo: string;
    campoObjetivoDica: string;
    formBotao: string;
    formNota: string;
    formEnviando: string;
    formSucesso: string;
    formInvalido: string;
    formLimite: string;
    formErro: string;

    /** Princípios da metodologia (GROW e cadência antes/durante/depois). */
    principiosTitulo: string;
    principios: { titulo: string; descricao: string }[];

    /** Planos, indexados pelo `id` de data/mentoria.ts. */
    planosTitulo: string;
    planosIntro: string;
    /** Sufixo do preço por pessoa, ex.: "por pessoa". */
    porPessoa: string;
    planos: Record<string, { nome: string; descricao: string; inclui: string[] }>;
    /** Chamada para os materiais gratuitos, dentro da página da mentoria. */
    materiaisChamada: string;
  };

  /** Página de materiais. */
  materiais: {
    eyebrow: string;
    tituloPagina: string;
    descricao: string;
    seloGratuito: string;
    seloMentoria: string;
    /** Usa {min}. */
    leitura: string;
    /** Aviso nas páginas em/es de que o corpo está em português. */
    avisoIdioma: string;
    /** Teaser dos materiais que vêm com a mentoria. */
    incluidoNaMentoria: string;
    verMentoria: string;
    voltarMateriais: string;
    itens: Record<string, { titulo: string; descricao: string }>;
  };

  ui: {
    skipLink: string;
    navPrincipal: string;
    redesSociais: string;
    temaParaClaro: string;
    temaParaEscuro: string;
    seletorIdioma: string;
    /** Usa {nome} e {ano}. */
    creditoRodape: string;
    /** Usa {nome}. */
    ariaRepositorio: string;
    /** Link de download de um app. Usa {versao}. */
    baixarVersao: string;
    voltarPalestras: string;
    tituloSlides: string;
    tituloFotos: string;
    baixarSlides: string;
    slideAnterior: string;
    slideProximo: string;
    /** Usa {atual} e {total}. */
    slideContador: string;
    /** Usa {n} e {total}. */
    slideAlt: string;
    /** Diz que o PDF é a versão legível por leitor de tela. */
    slidesAcessibilidade: string;
    verSlides: string;
    /** Usa {titulo}. */
    tituloGravacao: string;
    /** Usa {titulo}. */
    rotuloSlides: string;
    verTodosArtigos: string;
    voltarInicio: string;
    /**
     * Contador de inscritos do YouTube. O número é buscado ao vivo, então
     * só o substantivo fica aqui — em singular e plural, porque "1
     * inscritos" estaria errado. Ambos usam {n}.
     */
    inscritosUm: string;
    inscritosVarios: string;
    cargoJsonLd: string;
  };

  /** id de data/projetos.ts -> textos do projeto. */
  projetos: Record<string, ConteudoProjeto>;
  /** slug de data/palestras.ts -> textos da palestra. */
  palestras: Record<string, ConteudoPalestra>;

  meta: {
    titulo: string;
    descricao: string;
  };
}
