import { extractYoutubeId } from '@/lib/youtube';

export function VideoEmbed({ url, titulo }: { url: string; titulo: string }) {
  const id = extractYoutubeId(url);
  if (!id) return null;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        // Já interpolado pelo chamador, ex.: "Gravação: SRE além do hype".
        title={titulo}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
