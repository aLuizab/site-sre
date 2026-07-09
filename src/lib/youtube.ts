export interface VideoRecente {
  id: string;
  titulo: string;
  thumbnail: string;
}

/**
 * Busca os últimos vídeos do canal via YouTube Data API. Retorna `null`
 * quando as env vars não estão configuradas — chamador decide o fallback.
 * Só roda em Server Components, então a API key nunca chega ao cliente.
 */
export async function getLatestVideos(): Promise<VideoRecente[] | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) return null;

  try {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.searchParams.set('key', apiKey);
    url.searchParams.set('channelId', channelId);
    url.searchParams.set('part', 'snippet');
    url.searchParams.set('order', 'date');
    url.searchParams.set('maxResults', '3');
    url.searchParams.set('type', 'video');

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const json = await res.json();
    type Item = {
      id: { videoId: string };
      snippet: { title: string; thumbnails: { medium: { url: string } } };
    };

    return (json.items as Item[]).map((item) => ({
      id: item.id.videoId,
      titulo: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));
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
