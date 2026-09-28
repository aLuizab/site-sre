/**
 * Slug, data, caminhos de arquivo e tags não mudam entre idiomas —
 * mantê-los aqui evita repetir o mesmo caminho de imagem em três
 * arquivos. Título, evento, local, descrição e textos alternativos ficam
 * em src/i18n/conteudo/<idioma>.ts, indexados pelo `slug`.
 *
 * O slug é o mesmo nos três idiomas de propósito: a URL da palestra fica
 * estável, e só o prefixo de idioma muda (/pt/palestras/x, /en/palestras/x).
 */
export interface PalestraBase {
  /** kebab-case, único — vira a URL /<idioma>/palestras/[slug]. */
  slug: string;
  /**
   * "AAAA-MM" ou "AAAA-MM-DD" — chave de ordenação e <time dateTime>.
   * Use só ano e mês quando o dia exato não for conhecido, em vez de
   * inventar uma data cheia.
   */
  data: string;
  /** Opcional: nem toda palestra tem foto. Sem capa, o card mostra só texto. */
  capa?: string;
  /** Um src por foto; o texto alternativo vem do dicionário, na ordem. */
  fotos: string[];
  /**
   * Quantos slides foram exportados para /public/palestras/<slug>/slides/,
   * nomeados 01.png, 02.png... O visualizador monta os caminhos a partir
   * daqui, em vez de listar o diretorio em tempo de build.
   */
  slides?: number;
  /** Caminho local em /public/slides/ ou URL externa (SpeakerDeck etc.). */
  slidesPdf?: string;
  videoUrl?: string;
  tags: string[];
}

/** Mais recente no topo. */
export const palestras: PalestraBase[] = [
  {
    slug: 'agilidade-na-pratica',
    slides: 15,
    data: '2026-04',
    capa: '/palestras/agilidade-na-pratica/slide.png',
    fotos: [],
    slidesPdf: '/slides/agilidade-na-pratica.pdf',
    tags: ['agilidade', 'workshop', 'hackathon'],
  },
  {
    slug: 'cloud-native-day-sp',
    slides: 19,
    data: '2025-10',
    capa: '/palestras/cloud-native-day-sp/capa.png',
    fotos: [],
    slidesPdf: '/slides/cloud-native-day-sp.pdf',
    tags: ['observabilidade', 'prometheus', 'ia', 'cloud native'],
  },
  {
    slug: 'softskills-devops',
    slides: 16,
    data: '2025-10',
    capa: '/palestras/softskills-devops/capa.png',
    fotos: [],
    slidesPdf: '/slides/softskills-devops.pdf',
    tags: ['soft skills', 'devops', 'carreira'],
  },
  {
    slug: 'workshop-empreendedorismo',
    slides: 23,
    data: '2025-07',
    capa: '/palestras/workshop-empreendedorismo/slide.png',
    fotos: [],
    slidesPdf: '/slides/workshop-empreendedorismo.pdf',
    tags: ['empreendedorismo', 'workshop', 'hackathon'],
  },
  {
    slug: 'devopsdays-belem',
    slides: 15,
    data: '2022-11',
    capa: '/palestras/devopsdays-belem/capa.png',
    fotos: [],
    slidesPdf: '/slides/devopsdays-belem.pdf',
    tags: ['devops', 'build and run'],
  },
];

export function getPalestraBySlug(slug: string): PalestraBase | undefined {
  return palestras.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  return Array.from(new Set(palestras.flatMap((p) => p.tags))).sort();
}
