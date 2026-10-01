export interface VideoRecente {
  id: string;
  titulo: string;
  thumbnail: string;
  /** ISO, quando o feed informa; string vazia quando não. */
  publicado: string;
}

/** Canal usado quando YOUTUBE_CHANNEL_ID não está no ambiente. */
const CANAL_PADRAO = 'UCElHjg_0zR-BDqWqIlmQ0Gw';

/**
 * Vídeos longos mais recentes do canal — sem Shorts.
 *
 * O YouTube mantém, para todo canal, uma playlist só com os uploads
 * longos: o id é `UULF` + o id do canal sem o `UC` do começo (a de
 * Shorts é `UUSH`). O feed RSS dessa playlist é público, então não
 * precisa de API key e não depende de adivinhar pela duração o que é
 * Short.
 *
 * Retorna `[]` quando não há vídeo longo e `null` quando o feed falha;
 * nos dois casos o chamador mostra só o card do canal.
 */
export async function getVideosLongos(max = 4): Promise<VideoRecente[] | null> {
  const canalId = process.env.YOUTUBE_CHANNEL_ID ?? CANAL_PADRAO;
  const playlist = `UULF${canalId.replace(/^UC/, '')}`;

  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlist}`,
      { next: { revalidate: 3600 } }
    );
    // 404 aqui é canal sem nenhum vídeo longo, não erro.
    if (res.status === 404) return [];
    if (!res.ok) return null;

    const xml = await res.text();
    const videos: VideoRecente[] = [];

    // O XML é pequeno e de formato fixo: regex basta, sem parser.
    for (const entrada of xml.split('<entry>').slice(1)) {
      const id = entrada.match(/<yt:videoId>([\w-]{11})<\/yt:videoId>/)?.[1];
      const titulo = entrada.match(/<media:title>([\s\S]*?)<\/media:title>/)?.[1];
      if (!id || !titulo) continue;

      videos.push({
        id,
        titulo: decodificarXml(titulo).trim(),
        // hq720 é 16:9 sem tarjas, em 1280x720 — aguenta o card grande.
        thumbnail: `https://i.ytimg.com/vi/${id}/hq720.jpg`,
        publicado: entrada.match(/<published>([^<]+)<\/published>/)?.[1] ?? '',
      });

      if (videos.length === max) break;
    }

    return videos;
  } catch {
    return null;
  }
}

const ENTIDADES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
};

function decodificarXml(texto: string): string {
  return texto.replace(
    /&(?:#(\d+)|#x([\da-f]+)|(\w+));/gi,
    (todo, dec: string, hex: string, nome: string) => {
      if (dec) return String.fromCodePoint(Number(dec));
      if (hex) return String.fromCodePoint(parseInt(hex, 16));
      return ENTIDADES[nome.toLowerCase()] ?? todo;
    }
  );
}

/**
 * Número de inscritos do canal. Preferimos a YouTube Data API quando há
 * key; sem ela, lemos a página pública do canal.
 *
 * A página é pedida em inglês de propósito: "35 subscribers" / "12.4K
 * subscribers" tem formato previsível, enquanto o texto localizado varia
 * por idioma e é mais frágil de interpretar. O número volta cru — quem
 * exibe é que formata no idioma da página.
 *
 * Retorna `null` quando não dá para saber, e aí o contador simplesmente
 * não aparece — melhor um botão sem número do que um número inventado.
 */
export async function getInscritos(): Promise<number | null> {
  const canalId = process.env.YOUTUBE_CHANNEL_ID ?? CANAL_PADRAO;
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (apiKey) {
    const viaApi = await inscritosViaApi(apiKey, canalId);
    if (viaApi !== null) return viaApi;
  }

  return inscritosViaPagina(canalId);
}

async function inscritosViaApi(apiKey: string, canalId: string): Promise<number | null> {
  try {
    const url = new URL('https://www.googleapis.com/youtube/v3/channels');
    url.searchParams.set('key', apiKey);
    url.searchParams.set('id', canalId);
    url.searchParams.set('part', 'statistics');

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const json = await res.json();
    const bruto = json?.items?.[0]?.statistics?.subscriberCount;
    const n = Number(bruto);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

async function inscritosViaPagina(canalId: string): Promise<number | null> {
  try {
    const res = await fetch(`https://www.youtube.com/channel/${canalId}`, {
      headers: {
        // Sem User-Agent de navegador o YouTube devolve uma página
        // reduzida, sem o bloco de metadados do canal.
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
        'accept-language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const html = await res.text();
    const m = html.match(/"([\d.,]+)([KMB]?) subscribers?"/);
    if (!m) return null;

    const base = Number(m[1].replace(/,/g, ''));
    if (!Number.isFinite(base)) return null;

    const escala = { K: 1_000, M: 1_000_000, B: 1_000_000_000 }[m[2]] ?? 1;
    return Math.round(base * escala);
  } catch {
    return null;
  }
}

export function extractYoutubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return match?.[1] ?? null;
}
