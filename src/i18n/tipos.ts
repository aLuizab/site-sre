export interface ConteudoPerfil {
  saudacao: string;
  tagline: string;
  /** Um parágrafo por item — renderizados como <p> separados. */
  bio: string[];
  avatarAlt: string;
  localizacao: string;
}

export interface ConteudoExperiencia {
  empresa: string;
  cargo: string;
  localizacao?: string;
  bullets: string[];
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
    sobre: string;
    experiencia: string;
    projetos: string;
    palestras: string;
    artigos: string;
    mentoria: string;
  };

  secoes: {
    sobre: ConteudoSecao;
    experiencia: ConteudoSecao;
    projetos: ConteudoSecao;
    palestras: ConteudoSecao;
    videos: ConteudoSecao;
    artigos: ConteudoSecao;
    instagram: ConteudoSecao;
  };

  /** Página de artigos do Medium. */
  artigos: {
    tituloPagina: string;
    descricao: string;
    vazio: string;
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
    /** Usa {passadas} e {atual}. */
    trajetoriaComAtual: string;
    /** Usa {passadas}. */
    trajetoriaSemAtual: string;
    /** Conjunção da lista de empresas: "A, B e C". */
    conjuncaoE: string;
    formacao: string;
    stackFerramentas: string;
    /** Usa {nome}. */
    ariaRepositorio: string;
    /** Usa {nome}. */
    ariaDemo: string;
    filtroTodas: string;
    filtrarPorTag: string;
    semPalestras: string;
    semPalestrasComTag: string;
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
    verTodosVideos: string;
    verTodosArtigos: string;
    verPerfilInstagram: string;
    voltarInicio: string;
    /**
     * Contador de inscritos do YouTube. O número é buscado ao vivo, então
     * só o substantivo fica aqui — em singular e plural, porque "1
     * inscritos" estaria errado. Ambos usam {n}.
     */
    inscritosUm: string;
    inscritosVarios: string;
    /** Rótulo do período em curso na timeline. */
    atual: string;
    cargoJsonLd: string;
  };

  /** Indexado pelo `id` de data/experiencia.ts. */
  experiencia: Record<string, ConteudoExperiencia>;
  /** id de data/formacao.ts -> nome do curso. */
  formacao: Record<string, string>;
  /** id de data/empresas.ts -> nome exibido. */
  empresas: Record<string, string>;
  /** id de data/projetos.ts -> descrição. */
  projetos: Record<string, string>;
  /** slug de data/palestras.ts -> textos da palestra. */
  palestras: Record<string, ConteudoPalestra>;

  meta: {
    titulo: string;
    descricao: string;
  };
}
