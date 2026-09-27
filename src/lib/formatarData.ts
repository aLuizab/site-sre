import { localeInfo, type Locale } from '@/i18n/config';

/**
 * Formata "AAAA", "AAAA-MM" ou "AAAA-MM-DD" no idioma pedido
 * (ex.: "2021", "março de 2025", "September 12, 2025").
 *
 * O ano sozinho existe porque nem toda data do histórico tem mês
 * conhecido — melhor exibir "2021" do que fingir um mês.
 */
export function formatarData(iso: string, locale: Locale): string {
  const partes = iso.split('-').map(Number);
  if (partes.length === 1) return String(partes[0]);

  const data =
    partes.length === 2
      ? new Date(partes[0], partes[1] - 1, 1)
      : new Date(partes[0], partes[1] - 1, partes[2]);

  return new Intl.DateTimeFormat(localeInfo[locale].intl, {
    day: partes.length === 3 ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
  }).format(data);
}

export function formatarPeriodo(
  inicio: string,
  fim: string | 'atual',
  locale: Locale,
  rotuloAtual: string
): string {
  const fimTexto = fim === 'atual' ? rotuloAtual : formatarData(fim, locale);
  return `${formatarData(inicio, locale)} – ${fimTexto}`;
}
