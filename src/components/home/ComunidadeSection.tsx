import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
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

const classeLinkTexto =
  'text-sm text-muted underline underline-offset-4 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

/**
 * O que é contribuição para a comunidade, num lugar só: palestras,
 * artigos e as redes onde sai o conteúdo. Cada bloco é curto de
 * propósito — o detalhe fica na página da palestra, em /artigos e na
 * própria rede.
 */
export function ComunidadeSection({ locale, c }: { locale: Locale; c: Conteudo }) {
  const s = c.secoes.comunidade;

  return (
    <section id="comunidade" className="scroll-mt-24 py-12">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow={s.eyebrow} title={s.titulo} />
          <p className="-mt-2 mb-10 text-muted">{s.intro}</p>

          <div className="space-y-12">
            <Palestras locale={locale} c={c} />
            {/* Suspense para os feeds do Medium/Substack não segurarem o resto. */}
            <Suspense fallback={null}>
              <Artigos locale={locale} c={c} />
            </Suspense>
            <Suspense fallback={<Redes locale={locale} c={c} inscritos={null} />}>
              <RedesComContador locale={locale} c={c} />
            </Suspense>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function TituloBloco({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="mb-4 scroll-mt-24 font-mono text-sm text-accent">
      {children}
    </h3>
  );
}

/** Lista enxuta: data, título e evento. A capa e os slides ficam na página da palestra. */
function Palestras({ locale, c }: { locale: Locale; c: Conteudo }) {
  const itens = palestras.filter((p) => c.palestras[p.slug]);
  if (itens.length === 0) return null;

  return (
    <div>
      <TituloBloco id="palestras">{c.secoes.comunidade.palestras}</TituloBloco>
      <ol className="divide-y divide-border border-y border-border">
        {itens.map((p) => {
          const t = c.palestras[p.slug];
          return (
            <li key={p.slug}>
              <Link
                href={`/${locale}/palestras/${p.slug}`}
                className="group flex flex-col gap-1 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:flex-row sm:gap-6"
              >
                <time
                  dateTime={p.data}
                  className="shrink-0 whitespace-nowrap font-mono text-xs text-muted sm:w-36 sm:pt-1"
                >
                  {formatarData(p.data, locale)}
                </time>
                <span className="min-w-0">
                  <span className="font-medium group-hover:text-accent">{t.titulo}</span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {t.evento}
                    {t.local ? ` · ${t.local}` : ''}
                  </span>
                </span>
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
      <TituloBloco>{c.secoes.comunidade.artigos}</TituloBloco>
      <ul className="grid gap-3 sm:grid-cols-3">
        {artigos.map((artigo) => (
          <li key={artigo.id}>
            <ArtigoCard
              artigo={artigo}
              dataFormatada={formatarData(artigo.data, locale)}
              compacto
            />
          </li>
        ))}
      </ul>
      <p className="mt-4">
        <Link href={`/${locale}/artigos`} className={classeLinkTexto}>
          {c.ui.verTodosArtigos}
        </Link>
      </p>
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
    (s): s is typeof s & { id: keyof Conteudo['redes'] } =>
      s.id in c.redes
  );
  const posts = instagramPosts
    .map(codigoDoPost)
    .filter((codigo): codigo is string => codigo !== null);

  if (redes.length === 0) return null;

  return (
    <div>
      <TituloBloco>{c.secoes.comunidade.redes}</TituloBloco>
      <ul className="grid gap-3 sm:grid-cols-2">
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
                className="group flex h-full gap-4 rounded-xl border border-border p-5 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Icon size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                <span className="min-w-0">
                  <span className="flex items-center gap-1 font-medium group-hover:text-accent">
                    {rede.label}
                    <ArrowUpRight size={14} aria-hidden="true" className="opacity-60" />
                  </span>
                  <span className="block font-mono text-xs text-muted">
                    {arrobaDe(rede.url)}
                    {contador ? ` · ${contador}` : ''}
                  </span>
                  <span className="mt-2 block text-sm text-muted">{c.redes[rede.id]}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {posts.length > 0 ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
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
