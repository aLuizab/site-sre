export interface VideoRecente {
  id: string;
  titulo: string;
  thumbnail: string;
}

/** Canal usado quando YOUTUBE_CHANNEL_ID não está no ambiente. */
const CANAL_PADRAO = 'UCElHjg_0zR-BDqWqIlmQ0Gw';

/**
 * Últimos vídeos do canal. Usa a YouTube Data API quando há YOUTUBE_API_KEY
 * e cai no feed RSS público do canal quando não há — o RSS não exige
 * credencial, então a seção funciona sem configuração nenhuma.
 * Retorna `null` só quando as duas vias falham; aí o chamador omite a seção.
 * Só roda em Server Components, então a API key nunca chega ao cliente.
 */
export async function getLatestVideos(max = 3): Promise<VideoRecente[] | null> {
  const canalId = process.env.YOUTUBE_CHANNEL_ID ?? CANAL_PADRAO;
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (apiKey) {
    const viaApi = await buscarViaApi(apiKey, canalId, max);
    if (viaApi) return viaApi;
  }

  return buscarViaRss(canalId, max);
}

async function buscarViaApi(
  apiKey: string,
  canalId: string,
  max: number
): Promise<VideoRecente[] | null> {
  try {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.searchParams.set('key', apiKey);
    url.searchParams.set('channelId', canalId);
    url.searchParams.set('part', 'snippet');
    url.searchParams.set('order', 'date');
    url.searchParams.set('maxResults', String(max));
    url.searchParams.set('type', 'video');

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const json = await res.json();
    type Item = {
      id: { videoId: string };
      snippet: { title: string; thumbnails: { medium: { url: string } } };
    };

    const items = json.items as Item[] | undefined;
    if (!items?.length) return null;

    return items.map((item) => ({
      id: item.id.videoId,
      titulo: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));
  } catch {
    return null;
  }
}

/**
 * Feed RSS do canal — os 15 vídeos mais recentes, sem API key. O XML é
 * pequeno e de formato fixo, então extraímos por regex em vez de trazer
 * um parser só para isso.
 */
async function buscarViaRss(
  canalId: string,
  max: number
): Promise<VideoRecente[] | null> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${canalId}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;

    const xml = await res.text();
    const videos: VideoRecente[] = [];

    for (const entrada of xml.split('<entry>').slice(1)) {
      const id = entrada.match(/<yt:videoId>([\w-]{11})<\/yt:videoId>/)?.[1];
      const titulo = entrada.match(/<media:title>([\s\S]*?)<\/media:title>/)?.[1];
      if (!id || !titulo) continue;

      videos.push({
        id,
        titulo: decodificarXml(titulo).trim(),
        // hqdefault é 4:3 com tarjas; o object-cover do card recorta para 16:9.
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      });

      if (videos.length === max) break;
    }

    return videos.length > 0 ? videos : null;
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
