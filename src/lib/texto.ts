/**
 * Junta itens com vírgula e uma conjunção antes do último:
 * `["A","B","C"]` com `"e"` -> `"A, B e C"`.
 *
 * A conjunção vem do dicionário porque muda por idioma (e / and / y).
 */
export function joinComConjuncao(itens: string[], conjuncao: string): string {
  if (itens.length === 0) return '';
  if (itens.length === 1) return itens[0];
  return `${itens.slice(0, -1).join(', ')} ${conjuncao} ${itens[itens.length - 1]}`;
}
