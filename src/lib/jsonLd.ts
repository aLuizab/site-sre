/**
 * Serializa um objeto para dentro de <script type="application/ld+json">.
 *
 * `JSON.stringify` sozinho não basta: ele não escapa `<`, então um valor
 * contendo `</script>` fecharia a tag e o que viesse depois seria lido
 * como HTML. Hoje os dados são todos estáticos e escritos por nós, mas
 * no dia em que algum campo vier do YouTube ou de um CMS, a proteção já
 * está no lugar.
 *
 * U+2028 e U+2029 entram junto: são válidos dentro de uma string JSON,
 * mas contam como quebra de linha em JavaScript e quebram o parse.
 *
 * Os dois vêm de code point em vez de escape literal de propósito —
 * escritos à mão no fonte, eles são quebras de linha de verdade e
 * quebrariam este próprio arquivo.
 */
const SEPARADORES_DE_LINHA = [0x2028, 0x2029];

const ESCAPES = new Map<string, string>([
  ['<', '\\u003c'],
  ...SEPARADORES_DE_LINHA.map((cp): [string, string] => [
    String.fromCharCode(cp),
    '\\u' + cp.toString(16),
  ]),
]);

const PERIGOSOS = new RegExp(`[${[...ESCAPES.keys()].join('')}]`, 'g');

export function serializarJsonLd(dados: unknown): string {
  return JSON.stringify(dados).replace(PERIGOSOS, (ch) => ESCAPES.get(ch) ?? ch);
}
