import Image from 'next/image';
import { getLatestVideos } from '@/lib/youtube';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';

/**
 * Sem YOUTUBE_API_KEY/YOUTUBE_CHANNEL_ID configuradas, getLatestVideos()
 * retorna null e a seção inteira é omitida — fallback gracioso, sem
 * quebrar o build nem mostrar dados falsos.
 */
export async function LatestVideos() {
  const videos = await getLatestVideos();
  if (!videos || videos.length === 0) return null;

  return (
    <section className="py-12">
      <FadeIn>
        <SectionHeading eyebrow="# youtube" title="Últimos vídeos" />
        <ul className="grid gap-4 sm:grid-cols-3">
          {videos.map((video) => (
            <li key={video.id}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg border border-border transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.titulo}
                  width={320}
                  height={180}
                  className="aspect-video w-full object-cover"
                />
                <p className="p-3 text-sm">{video.titulo}</p>
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
