export interface ArtigoMedium {
  /** id curto do post no Medium — estável, serve de key. */
  id: string;
  titulo: string;
  url: string;
  /** ISO "AAAA-MM-DD", para <time dateTime> e formatação por idioma. */
  data: string;
  /** Primeiras linhas do texto, sem HTML. */
  resumo: string;
  tags: string[];
}

/** Usuário usado quando MEDIUM_USERNAME não está no ambiente. */
const USUARIO_PADRAO = 'aluiza.primo';

/**
 * Artigos do Medium via feed RSS público — não existe API aberta do
 * Medium desde que eles aposentaram a antiga, e o RSS não exige token.
 *
 * Retorna `null` quando o feed falha; aí quem chama omite a seção, em
 * vez de mostrar um espaço vazio.
 */
export async function getArtigosMedium(max = 10): Promise<ArtigoMedium[] | null> {
  const usuario = process.env.MEDIUM_USERNAME ?? USUARIO_PADRAO;

  try {
    const res = await fetch(`https://medium.com/feed/@${usuario}`, {
      headers: {
        // Sem User-Agent de navegador o Medium responde 403.
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const xml = await res.text();
    const artigos: ArtigoMedium[] = [];

    for (const bruto of xml.split('<item>').slice(1)) {
      const item = bruto.split('</item>')[0];

      const titulo = extrair(item, 'title');
      const link = extrair(item, 'link');
      const pubDate = extrair(item, 'pubDate');
      if (!titulo || !link) continue;

      artigos.push({
        id: extrair(item, 'guid')?.split('/').pop() ?? link,
        titulo,
        // O `?source=rss-...` é rastreamento do feed; não precisa ir para o site.
        url: link.split('?')[0],
        data: pubDate ? new Date(pubDate).toISOString().slice(0, 10) : '',
        resumo: resumir(item),
        tags: [...item.matchAll(/<category>\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*<\/category>/g)].map(
          (m) => m[1].trim()
        ),
      });

      if (artigos.length === max) break;
    }

    return artigos.length > 0 ? artigos : null;
  } catch {
    return null;
  }
}

/** Conteúdo de uma tag, já sem CDATA e sem o espaço em volta. */
function extrair(item: string, tag: string): string | null {
  const m = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!m) return null;
  return decodificarEntidades(m[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim()) || null;
}

/**
 * Primeiro trecho de texto do post, limpo de HTML e cortado.
 *
 * O content:encoded do Medium começa com um <img> de tracking e costuma
 * trazer embeds (<figure>, <iframe>) cujo texto visível é a própria URL
 * do embed — removemos esses blocos antes de achatar as tags, senão o
 * resumo abre com "https://medium.com/media/...".
 */
function resumir(item: string, limite = 180): string {
  const html = extrair(item, 'content:encoded') ?? '';
  const texto = html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, '')
    .replace(/<figure[\s\S]*?<\/figure>/gi, ' ')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    // Restos de embed que sobrevivem como URL solta no início do texto.
    .replace(/^(?:https?:\/\/\S+\s*)+/i, '')
    .trim();

  if (texto.length <= limite) return texto;
  // Corta na última palavra inteira antes do limite.
  return texto.slice(0, texto.lastIndexOf(' ', limite)).trimEnd() + '…';
}

const ENTIDADES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
};

function decodificarEntidades(texto: string): string {
  return texto.replace(
    /&(?:#(\d+)|#x([\da-f]+)|(\w+));/gi,
    (todo, dec: string, hex: string, nome: string) => {
      if (dec) return String.fromCodePoint(Number(dec));
      if (hex) return String.fromCodePoint(parseInt(hex, 16));
      return ENTIDADES[nome.toLowerCase()] ?? todo;
    }
  );
}
