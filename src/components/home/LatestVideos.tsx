import Image from 'next/image';
import { Play } from 'lucide-react';
import { getLatestVideos } from '@/lib/youtube';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
import { socials } from '@/data/socials';
import type { Conteudo } from '@/i18n';

/**
 * Sem vídeos (canal vazio, feed fora do ar) a seção inteira é omitida —
 * fallback gracioso, sem quebrar o build nem mostrar dados falsos.
 *
 * Os títulos vêm do YouTube no idioma em que foram publicados; não há o
 * que traduzir aqui além dos rótulos da seção.
 */
export async function LatestVideos({ c }: { c: Conteudo }) {
  const videos = await getLatestVideos();
  if (!videos || videos.length === 0) return null;

  const canal = socials.find((s) => s.id === 'youtube');

  return (
    <section id="videos" className="scroll-mt-24 py-12">
      <Container wide>
        <FadeIn>
          <SectionHeading
            eyebrow={c.secoes.videos.eyebrow}
            title={c.secoes.videos.titulo}
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <li key={video.id}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  // h-full + flex: títulos de tamanhos diferentes não podem
                  // deixar os cards da mesma linha com alturas distintas.
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <div className="relative">
                    <Image
                      src={video.thumbnail}
                      // O título logo abaixo já descreve o vídeo; repetir aqui
                      // faria o leitor de tela anunciar a mesma coisa duas vezes.
                      alt=""
                      width={480}
                      height={360}
                      className="aspect-video w-full object-cover"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Play className="h-10 w-10 fill-white text-white" />
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium group-hover:text-accent">
                      {video.titulo}
                    </h3>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          {canal && (
            <p className="mt-6 text-sm">
              <a
                href={canal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline underline-offset-4 hover:text-accent"
              >
                {c.ui.verTodosVideos}
              </a>
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
