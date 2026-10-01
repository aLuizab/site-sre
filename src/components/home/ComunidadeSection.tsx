import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SecaoEditorial, RotuloBloco } from '@/components/home/SecaoEditorial';
import { ArtigoCard } from '@/components/artigos/ArtigoCard';
import { EmbedInstagram } from '@/components/instagram/EmbedInstagram';
import { palestras } from '@/data/palestras';
import { socials } from '@/data/socials';
import { instagramPosts, codigoDoPost } from '@/data/instagram';
import { SOCIAL_ICONS } from '@/lib/socialIcons';
import { getPublicacoes } from '@/lib/publicacoes';
import { getInscritos } from '@/lib/youtube';
import { formatarData } from '@/lib/formatarData';
import { rotuloInscritos } from '@/components/home/SocialLinks';
import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n';

const classeFoco =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

/**
 * O que é contribuição para a comunidade, num lugar só: palestras,
 * artigos e as redes onde sai o conteúdo. Cada bloco é curto de
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

        <Palestras locale={locale} c={c} />
        {/* Suspense para os feeds do Medium/Substack não segurarem o resto. */}
        <Suspense fallback={null}>
          <Artigos locale={locale} c={c} />
        </Suspense>
        <Suspense fallback={<Redes locale={locale} c={c} inscritos={null} />}>
          <RedesComContador locale={locale} c={c} />
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
  return <Redes locale={locale} c={c} inscritos={await getInscritos()} />;
}

/**
 * Um card por rede de conteúdo (as que têm descrição no dicionário), e
 * logo abaixo os posts do Instagram listados em data/instagram.ts, se
 * houver algum.
 */
function Redes({
  locale,
  c,
  inscritos,
}: {
  locale: Locale;
  c: Conteudo;
  inscritos: number | null;
}) {
  const redes = socials.filter(
    (s): s is typeof s & { id: keyof Conteudo['redes'] } => s.id in c.redes
  );
  const posts = instagramPosts
    .map(codigoDoPost)
    .filter((codigo): codigo is string => codigo !== null);

  if (redes.length === 0) return null;

  return (
    <div>
      <RotuloBloco>{c.secoes.comunidade.redes}</RotuloBloco>
      <ul className="grid gap-4 md:grid-cols-2">
        {redes.map((rede) => {
          const Icon = SOCIAL_ICONS[rede.icon];
          const contador =
            rede.id === 'youtube' ? rotuloInscritos(inscritos, locale, c) : undefined;

          return (
            <li key={rede.id}>
              <a
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full items-start gap-5 rounded-xl border border-border p-6 transition-colors hover:border-accent lg:p-8 ${classeFoco}`}
              >
                <Icon size={28} aria-hidden="true" className="shrink-0 text-accent" />
                <span className="min-w-0 grow">
                  <span className="flex items-center justify-between gap-2 text-xl font-semibold group-hover:text-accent">
                    {rede.label}
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="text-muted group-hover:text-accent"
                    />
                  </span>
                  <span className="mt-1 block font-mono text-xs text-muted">
                    {arrobaDe(rede.url)}
                    {contador ? ` · ${contador}` : ''}
                  </span>
                  <span className="mt-3 block text-muted">{c.redes[rede.id]}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>

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

/** "https://www.instagram.com/aluiza.tech" -> "@aluiza.tech"; o YouTube já vem com @. */
function arrobaDe(url: string): string {
  const ultimo = new URL(url).pathname.split('/').filter(Boolean).pop() ?? '';
  return ultimo.startsWith('@') ? ultimo : `@${ultimo}`;
}
