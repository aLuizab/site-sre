/**
 * Só o que não muda entre idiomas: identificador, datas e logo. Cargo,
 * empresa, localização e bullets ficam em src/i18n/conteudo/<idioma>.ts,
 * indexados por este `id`.
 */
export interface ExperienciaBase {
  id: string;
  /** "AAAA" ou "AAAA-MM" — usado em <time dateTime> e para ordenação. */
  periodoInicio: string;
  periodoFim: string | 'atual';
  logo?: string;
}

/** Experiência mais recente no topo. */
export const experiencia: ExperienciaBase[] = [
  {
    id: 'internacional',
    periodoInicio: '2025-03',
    periodoFim: 'atual',
    logo: '/logos/empresa-internacional.svg',
  },
  {
    id: 'itau',
    periodoInicio: '2024',
    periodoFim: '2025-03',
    logo: '/logos/itau.svg',
  },
  {
    id: 'iti',
    periodoInicio: '2021',
    periodoFim: '2024',
    logo: '/logos/itau.svg',
  },
  {
    id: 'stone',
    periodoInicio: '2020',
    periodoFim: '2021',
    logo: '/logos/stone-pagamentos.svg',
  },
];
