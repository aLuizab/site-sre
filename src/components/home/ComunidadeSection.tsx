import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { SecaoEditorial, RotuloBloco } from '@/components/home/SecaoEditorial';
import { ArtigoCard } from '@/components/artigos/ArtigoCard';
import { EmbedInstagram } from '@/components/instagram/EmbedInstagram';
import { palestras } from '@/data/palestras';
import { socials } from '@/data/socials';
import { instagramPosts, codigoDoPost } from '@/data/instagram';
import { SOCIAL_ICONS } from '@/lib/socialIcons';
import { getPublicacoes } from '@/lib/publicacoes';
import { getInscritos, getVideosLongos, type VideoRecente } from '@/lib/youtube';
import { formatarData } from '@/lib/formatarData';
import { rotuloInscritos } from '@/components/home/SocialLinks';
import type { Locale } from '@/i18n/config';
import { preencher, type Conteudo } from '@/i18n';

const classeFoco =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

/**
 * O que é contribuição para a comunidade, num lugar só: o conteúdo
 * (YouTube em destaque), as palestras e os artigos. Cada bloco é curto de
 * propósito — o detalhe fica na página da palestra, em /artigos e na
 * própria rede.
 */
export function ComunidadeSection({ locale, c }: { locale: Locale; c: Conteudo }) {
  const s = c.secoes.comunidade;

  return (
    <SecaoEditorial id="comunidade" numero={2} rotulo={s.eyebrow} titulo={s.titulo}>
      <div className="space-y-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
          <p className="max-w-2xl text-lg text-muted">{s.intro}</p>
          <Contato locale={locale} c={c} />
        </div>

        {/* YouTube primeiro: é o conteúdo em destaque da seção. */}
        <Suspense fallback={<Redes locale={locale} c={c} inscritos={null} videos={[]} />}>
          <RedesComContador locale={locale} c={c} />
        </Suspense>
        <Palestras locale={locale} c={c} />
        {/* Suspense para os feeds do Medium/Substack não segurarem o resto. */}
        <Suspense fallback={null}>
          <Artigos locale={locale} c={c} />
        </Suspense>
      </div>
    </SecaoEditorial>
  );
}

/** Caixa de chamada: mentoria e LinkedIn, os dois jeitos de falar comigo. */
function Contato({ locale, c }: { locale: Locale; c: Conteudo }) {
  const linkedin = socials.find((rede) => rede.id === 'linkedin');
  const cta = c.secoes.comunidade.cta;

  return (
    <aside className="rounded-xl border border-term-border bg-term p-6 lg:p-8">
      <p className="text-xl font-semibold leading-snug tracking-tight text-term-fg">
        {cta.titulo}
      </p>
      <ul className="mt-6 space-y-3 font-mono text-sm">
        <li>
          <Link
            href={`/${locale}/mentoria`}
            className={`group inline-flex items-center gap-2 text-term-accent hover:underline hover:underline-offset-4 ${classeFoco}`}
          >
            {cta.mentoria}
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </li>
        {linkedin ? (
          <li>
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-term-muted hover:text-term-accent ${classeFoco}`}
            >
              {cta.linkedin}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </li>
        ) : null}
      </ul>
    </aside>
  );
}

/** Uma linha por palestra: data, título, evento. A capa e os slides ficam na página dela. */
function Palestras({ locale, c }: { locale: Locale; c: Conteudo }) {
  const itens = palestras.filter((p) => c.palestras[p.slug]);
  if (itens.length === 0) return null;

  return (
    <div>
      <RotuloBloco id="palestras">{c.secoes.comunidade.palestras}</RotuloBloco>
      <ol className="border-b border-border">
        {itens.map((p) => {
          const t = c.palestras[p.slug];
          return (
            <li key={p.slug} className="border-t border-border">
              <Link
                href={`/${locale}/palestras/${p.slug}`}
                className={`group grid gap-1 py-6 lg:grid-cols-[10rem_minmax(0,1.6fr)_minmax(0,1fr)_1.5rem] lg:items-baseline lg:gap-8 ${classeFoco}`}
              >
                <time dateTime={p.data} className="font-mono text-xs text-muted">
                  {formatarData(p.data, locale)}
                </time>
                <span className="text-lg font-medium group-hover:text-accent lg:text-xl">
                  {t.titulo}
                </span>
                <span className="text-sm text-muted">
                  {t.evento}
                  {t.local ? ` · ${t.local}` : ''}
                </span>
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="hidden text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent lg:block"
                />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Os três textos mais recentes; sem feed disponível, o bloco some. */
async function Artigos({ locale, c }: { locale: Locale; c: Conteudo }) {
  const artigos = (await getPublicacoes(12)).slice(0, 3);
  if (artigos.length === 0) return null;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <RotuloBloco>{c.secoes.comunidade.artigos}</RotuloBloco>
        <Link
          href={`/${locale}/artigos`}
          className={`mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent ${classeFoco}`}
        >
          {c.ui.verTodosArtigos}
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
      <ul className="grid gap-4 md:grid-cols-3">
        {artigos.map((artigo) => (
          <li key={artigo.id}>
            <ArtigoCard artigo={artigo} dataFormatada={formatarData(artigo.data, locale)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

async function RedesComContador({ locale, c }: { locale: Locale; c: Conteudo }) {
  const [inscritos, videos] = await Promise.all([getInscritos(), getVideosLongos(4)]);
  return <Redes locale={locale} c={c} inscritos={inscritos} videos={videos ?? []} />;
}

type RedeConteudo = (typeof socials)[number] & { id: keyof Conteudo['redes'] };

/**
 * O YouTube vem em destaque, com a miniatura do vídeo longo mais recente
 * e os seguintes menores logo abaixo. As outras redes (hoje, o
 * Instagram) ficam em cards simples, e os posts listados em
 * data/instagram.ts entram depois, se houver algum.
 */
function Redes({
  locale,
  c,
  inscritos,
  videos,
}: {
  locale: Locale;
  c: Conteudo;
  inscritos: number | null;
  videos: VideoRecente[];
}) {
  const redes = socials.filter((s): s is RedeConteudo => s.id in c.redes);
  const youtube = redes.find((r) => r.id === 'youtube');
  const outras = redes.filter((r) => r.id !== 'youtube');
  const posts = instagramPosts
    .map(codigoDoPost)
    .filter((codigo): codigo is string => codigo !== null);

  if (redes.length === 0) return null;

  return (
    <div>
      <RotuloBloco>{c.secoes.comunidade.redes}</RotuloBloco>

      {youtube ? (
        <YoutubeDestaque
          rede={youtube}
          locale={locale}
          c={c}
          contador={rotuloInscritos(inscritos, locale, c)}
          videos={videos}
        />
      ) : null}

      {outras.length > 0 ? (
        <ul className={`mt-4 grid gap-4 ${outras.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {outras.map((rede) => {
            const Icon = SOCIAL_ICONS[rede.icon];
            return (
              <li key={rede.id}>
                <a
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-full items-start gap-5 rounded-xl border border-border p-6 transition-colors hover:border-accent ${classeFoco}`}
                >
                  <Icon size={24} aria-hidden="true" className="shrink-0 text-accent" />
                  <span className="min-w-0 grow">
                    <span className="flex items-center justify-between gap-2 text-lg font-semibold group-hover:text-accent">
                      {rede.label}
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="text-muted group-hover:text-accent"
                      />
                    </span>
                    <span className="mt-1 block font-mono text-xs text-muted">
                      {arrobaDe(rede.url)}
                    </span>
                    <span className="mt-3 block text-muted">{c.redes[rede.id]}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}

      {posts.length > 0 ? (
        <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((codigo) => (
            <li key={codigo}>
              <EmbedInstagram codigo={codigo} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

/**
 * Card largo do canal: miniatura grande do último vídeo longo à esquerda
 * e o canal à direita. Sem vídeo longo (ou com o feed fora do ar), vira
 * só o card do canal, ocupando a largura toda.
 */
function YoutubeDestaque({
  rede,
  locale,
  c,
  contador,
  videos,
}: {
  rede: RedeConteudo;
  locale: Locale;
  c: Conteudo;
  contador: string | undefined;
  videos: VideoRecente[];
}) {
  const t = c.secoes.comunidade.youtube;
  const Icon = SOCIAL_ICONS[rede.icon];
  const [ultimo, ...anteriores] = videos;

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className={ultimo ? 'grid lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]' : ''}>
        {ultimo ? (
          <Miniatura
            video={ultimo}
            rotulo={preencher(t.assistir, { titulo: ultimo.titulo })}
            grande
          />
        ) : null}

        <div className="flex flex-col justify-between gap-8 bg-term p-6 lg:p-10">
          <div>
            <div className="flex items-center gap-3">
              <Icon size={32} aria-hidden="true" className="text-term-accent" />
              <p className="text-2xl font-semibold tracking-tight text-term-fg">{rede.label}</p>
            </div>
            <p className="mt-2 font-mono text-xs text-term-muted">
              {arrobaDe(rede.url)}
              {contador ? ` · ${contador}` : ''}
            </p>
            <p className="mt-4 text-term-muted">{c.redes[rede.id]}</p>
          </div>

          {ultimo ? (
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-term-muted">
                {t.ultimoVideo}
              </p>
              <a
                href={urlDoVideo(ultimo.id)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 block text-lg font-semibold leading-snug text-term-fg hover:text-term-accent ${classeFoco}`}
              >
                {ultimo.titulo}
              </a>
              {ultimo.publicado ? (
                <time
                  dateTime={ultimo.publicado}
                  className="mt-1 block font-mono text-xs text-term-muted"
                >
                  {formatarData(ultimo.publicado.slice(0, 10), locale)}
                </time>
              ) : null}
            </div>
          ) : null}

          <a
            href={rede.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90 dark:text-black ${classeFoco}`}
          >
            {t.verCanal}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      {anteriores.length > 0 ? (
        <div className="border-t border-border p-6 lg:p-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {t.maisVideos}
          </p>
          <ul className="grid gap-6 sm:grid-cols-3">
            {anteriores.map((video) => (
              <li key={video.id}>
                <Miniatura
                  video={video}
                  rotulo={preencher(t.assistir, { titulo: video.titulo })}
                />
                <p className="mt-3 line-clamp-2 text-sm font-medium">{video.titulo}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

/** Miniatura 16:9 com o botão de play por cima; leva ao vídeo no YouTube. */
function Miniatura({
  video,
  rotulo,
  grande = false,
}: {
  video: VideoRecente;
  rotulo: string;
  grande?: boolean;
}) {
  return (
    <a
      href={urlDoVideo(video.id)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={rotulo}
      className={`group relative block aspect-video overflow-hidden bg-term ${grande ? 'lg:aspect-auto lg:h-full lg:min-h-[24rem]' : 'rounded-lg border border-border'} ${classeFoco}`}
    >
      <Image
        src={video.thumbnail}
        alt=""
        fill
        sizes={grande ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 640px) 25vw, 100vw'}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25"
      >
        <span
          className={`flex items-center justify-center rounded-full bg-[#ff0033] text-white shadow-lg transition-transform group-hover:scale-110 ${grande ? 'h-16 w-16' : 'h-11 w-11'}`}
        >
          <Play size={grande ? 28 : 18} fill="currentColor" className="ml-0.5" />
        </span>
      </span>
    </a>
  );
}

function urlDoVideo(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}

/** "https://www.instagram.com/aluiza.tech" -> "@aluiza.tech"; o YouTube já vem com @. */
function arrobaDe(url: string): string {
  const ultimo = new URL(url).pathname.split('/').filter(Boolean).pop() ?? '';
  return ultimo.startsWith('@') ? ultimo : `@${ultimo}`;
}
