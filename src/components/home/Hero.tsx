import Image from 'next/image';
import Link from 'next/link';
import { perfil } from '@/data/perfil';
import { SocialLinks } from '@/components/home/SocialLinks';
import { TerminalPrompt } from '@/components/home/TerminalPrompt';
import type { Locale } from '@/i18n/config';
import type { Conteudo, Destaque } from '@/i18n';

/**
 * Apresentação em tela cheia, dividida ao meio a partir de lg: nome,
 * apresentação e redes à esquerda; a foto ocupando a metade direita
 * inteira, de ponta a ponta.
 *
 * A identidade de terminal continua nos detalhes — o prompt `$`, a
 * fonte mono, a legenda da foto e o campo de comando — em vez de numa
 * janela emoldurada que espremia tudo numa coluna estreita.
 *
 * Todo o texto é HTML renderizado no servidor; só o campo de comando é
 * cliente. A animação revela texto que já está no DOM.
 */
export function Hero({ locale, c }: { locale: Locale; c: Conteudo }) {
  const [primeiro, ...resto] = perfil.nome.split(' ');
  // "Ana Luiza Primo" -> "Ana Luiza" / "Primo": o sobrenome em linha própria.
  const linha1 = [primeiro, ...resto.slice(0, -1)].join(' ');
  const linha2 = resto.at(-1) ?? '';

  return (
    <section className="grid border-b border-border lg:min-h-[min(calc(100svh-4rem),60rem)] lg:grid-cols-2">
      <div className="relative flex flex-col justify-between gap-12 overflow-hidden px-6 pt-10 pb-12 sm:pt-14 lg:px-12 lg:py-14">
        <div
          className="brilho-hero pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        />

        <p className="revela font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-accent">$</span> whoami
        </p>

        <div className="revela" style={{ animationDelay: '120ms' }}>
          <h1 className="text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.95] tracking-tighter">
            <span className="block">{linha1}</span>{' '}
            <span className="block">{linha2}</span>
          </h1>
          <p className="mt-6 font-mono text-base text-accent sm:text-lg">
            {c.perfil.tagline}
          </p>
        </div>

        <div className="revela space-y-8" style={{ animationDelay: '260ms' }}>
          <ul className="max-w-xl space-y-2 text-muted">
            {c.perfil.destaques.map((d, i) => (
              <li key={i} className="flex gap-3">
                <span className="select-none text-accent" aria-hidden="true">
                  —
                </span>
                <span>
                  <LinhaDestaque destaque={d} locale={locale} />
                </span>
              </li>
            ))}
          </ul>

          <SocialLinks locale={locale} c={c} />

          <div className="max-w-xl rounded-lg border border-term-border bg-term px-4 py-3 font-mono text-sm text-term-fg">
            <TerminalPrompt locale={locale} c={c} />
          </div>
        </div>
      </div>

      {/*
        A foto vai de borda a borda na metade direita. No celular vira um
        bloco largo logo abaixo do texto, sem esticar a página inteira.
      */}
      <div className="relative aspect-[4/5] border-t border-border bg-term sm:aspect-[4/3] lg:aspect-auto lg:border-t-0 lg:border-l">
        <Image
          src={perfil.avatar}
          alt={c.perfil.avatarAlt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[50%_30%]"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent"
          aria-hidden="true"
        />
        <p className="absolute inset-x-0 bottom-0 flex justify-between gap-4 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white/85 lg:px-8">
          <span>{c.terminal.tituloJanela}</span>
          <span>{c.ui.cargoJsonLd}</span>
        </p>
      </div>
    </section>
  );
}

/**
 * Renderiza a linha, transformando em link só o trecho indicado em
 * `linkTexto`. Se o trecho não existir na frase (tradução que mudou de
 * palavra, por exemplo), cai para a frase inteira sem link em vez de
 * quebrar.
 */
function LinhaDestaque({
  destaque,
  locale,
}: {
  destaque: Destaque;
  locale: Locale;
}) {
  const { texto, linkTexto, href } = destaque;
  if (!linkTexto || !href) return <>{texto}</>;

  const i = texto.indexOf(linkTexto);
  if (i === -1) return <>{texto}</>;

  return (
    <>
      {texto.slice(0, i)}
      <Link
        href={`/${locale}${href}`}
        className="text-foreground underline decoration-accent underline-offset-4 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {linkTexto}
      </Link>
      {texto.slice(i + linkTexto.length)}
    </>
  );
}
