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
  /** ISO "AAAA-MM-DD" — chave de ordenação e <time dateTime>. */
  data: string;
  capa: string;
  /** Um src por foto; o texto alternativo vem do dicionário, na ordem. */
  fotos: string[];
  /** Caminho local em /public/slides/ ou URL externa (SpeakerDeck etc.). */
  slidesPdf?: string;
  videoUrl?: string;
  tags: string[];
}

/** Adicione uma palestra nova aqui e traduza nos três dicionários. */
export const palestras: PalestraBase[] = [
  {
    slug: 'observabilidade-na-pratica',
    data: '2025-09-12',
    capa: '/palestras/observabilidade-na-pratica/capa.svg',
    fotos: [
      '/palestras/observabilidade-na-pratica/foto-1.svg',
      '/palestras/observabilidade-na-pratica/foto-2.svg',
    ],
    slidesPdf: '/slides/observabilidade-na-pratica.pdf',
    tags: ['observabilidade', 'sre', 'grafana'],
  },
  {
    slug: 'sre-alem-do-hype',
    data: '2025-11-04',
    capa: '/palestras/sre-alem-do-hype/capa.svg',
    fotos: [
      '/palestras/sre-alem-do-hype/foto-1.svg',
      '/palestras/sre-alem-do-hype/foto-2.svg',
    ],
    slidesPdf: '/slides/sre-alem-do-hype.pdf',
    tags: ['sre', 'kubernetes', 'carreira'],
  },
];

export function getPalestraBySlug(slug: string): PalestraBase | undefined {
  return palestras.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  return Array.from(new Set(palestras.flatMap((p) => p.tags))).sort();
}
