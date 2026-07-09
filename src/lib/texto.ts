/** Junta itens com vírgula e um "e" antes do último: ["A","B","C"] -> "A, B e C". */
export function joinComEConjuncao(itens: string[]): string {
  if (itens.length === 0) return '';
  if (itens.length === 1) return itens[0];
  return `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`;
}
