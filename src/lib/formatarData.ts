/** Formata "AAAA-MM-DD" ou "AAAA-MM" para texto em pt-BR (ex.: "12 de setembro de 2025"). */
export function formatarData(iso: string): string {
  const partes = iso.split('-').map(Number);
  const data =
    partes.length === 2
      ? new Date(partes[0], partes[1] - 1, 1)
      : new Date(partes[0], partes[1] - 1, partes[2]);

  return new Intl.DateTimeFormat('pt-BR', {
    day: partes.length === 3 ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
  }).format(data);
}

export function formatarPeriodo(inicio: string, fim: string | 'atual'): string {
  const fimTexto = fim === 'atual' ? 'atual' : formatarData(fim);
  return `${formatarData(inicio)} – ${fimTexto}`;
}
