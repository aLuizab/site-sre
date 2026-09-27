/**
 * Instituição é nome próprio e não se traduz; o curso, sim — ele fica em
 * src/i18n/conteudo/<idioma>.ts indexado por este `id`.
 */
export interface FormacaoBase {
  id: string;
  instituicao: string;
  /** formato livre, ex.: "2025" ou "2021–2025" */
  periodo?: string;
}

/** Formação mais recente no topo. */
export const formacao: FormacaoBase[] = [
  { id: 'inatel', instituicao: 'INATEL', periodo: '2021–2025' },
  { id: 'ohio-pm', instituicao: 'Ohio University', periodo: '2025' },
  { id: 'ohio-english', instituicao: 'Ohio University', periodo: '2025' },
];
