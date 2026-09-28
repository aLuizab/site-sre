/**
 * Materiais de carreira: uns gratuitos na íntegra, outros incluídos na
 * mentoria (aqui só a descrição).
 *
 * Título e descrição de cada um ficam em src/i18n/conteudo/<idioma>.ts,
 * indexados pelo `slug`. O CORPO fica em src/data/materiais/<slug>.ts,
 * só em português — são textos longos, e traduzir três guias inteiros
 * para dois idiomas antes de a Ana revisar o original seria trabalho
 * jogado fora. As páginas em inglês e espanhol avisam que o texto está
 * em português.
 */
export interface MaterialBase {
  slug: string;
  /** true: corpo completo no site. false: só descrição; vem com a mentoria. */
  gratuito: boolean;
  /** Tempo de leitura aproximado, em minutos. */
  leituraMin: number;
}

export interface SecaoMaterial {
  titulo: string;
  paragrafos?: string[];
  itens?: string[];
}

export interface CorpoMaterial {
  /** Frase de abertura, antes das seções. */
  intro: string;
  secoes: SecaoMaterial[];
  /** Fechamento: o que fazer com o material depois de ler. */
  fechamento?: string;
}

export const materiais: MaterialBase[] = [
  { slug: 'checklist-curriculo-internacional', gratuito: true, leituraMin: 8 },
  { slug: 'linkedin-para-recrutador-gringo', gratuito: true, leituraMin: 7 },
  { slug: 'mapa-competencias-sre', gratuito: true, leituraMin: 10 },
  { slug: 'plano-90-dias', gratuito: false, leituraMin: 5 },
  { slug: 'banco-perguntas-entrevista-sre', gratuito: false, leituraMin: 12 },
];

export function getMaterialBySlug(slug: string): MaterialBase | undefined {
  return materiais.find((m) => m.slug === slug);
}
