import Image from 'next/image';
import Link from 'next/link';
import { perfil } from '@/data/perfil';
import { SocialLinks } from '@/components/home/SocialLinks';
import { TerminalPrompt } from '@/components/home/TerminalPrompt';
import type { Locale } from '@/i18n/config';
import type { Conteudo, Destaque } from '@/i18n';

/**
 * Apresentação em tela cheia a partir de lg: à esquerda, uma janela de
 * terminal antigo (linhas de varredura, cursor piscando depois do nome)
 * com o nome, a apresentação e o campo de comando, e as redes logo
 * abaixo; à direita, a foto numa coluna estreita em retrato.
 *
 * Todo o texto é HTML renderizado no servidor; só o campo de comando é
 * cliente. A animação revela texto que já está no DOM.
 */
export function Hero({ locale, c }: { locale: Locale; c: Conteudo }) {
  return (
    <section className="grid border-b border-border lg:min-h-[min(calc(100svh-4rem),52rem)] lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)]">
      <div className="relative flex flex-col gap-8 overflow-hidden px-6 pt-8 pb-12 sm:pt-10 lg:px-12 lg:py-12">
        <div
          className="brilho-hero pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        />

        {/* Janela de terminal antigo: barra de título, comandos e cursor piscando. */}
        <div className="crt flex grow flex-col overflow-hidden rounded-xl border border-term-border bg-term text-term-fg shadow-lg">
          <div className="flex items-center gap-2 border-b border-term-border px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </span>
            <p className="grow text-center font-mono text-xs text-term-muted">
              {c.terminal.tituloJanela}
            </p>
            {/* Espaço espelhando os três pontos, para o título ficar centrado. */}
            <span className="w-[52px]" aria-hidden="true" />
          </div>

          <div className="flex grow flex-col justify-between gap-10 p-6 font-mono sm:p-8 lg:p-10">
            <Bloco comando="whoami" atraso={0}>
              {/* Nome inteiro numa linha: o tamanho acompanha a largura da tela. */}
              <h1 className="brilho-crt whitespace-nowrap text-[clamp(1.9rem,4.8vw,5.5rem)] font-semibold leading-none tracking-tighter">
                {perfil.nome}
                <span className="cursor-piscando" aria-hidden="true" />
              </h1>
              <p className="mt-5 text-base text-term-accent sm:text-lg">{c.perfil.tagline}</p>
            </Bloco>

            <Bloco comando="cat sobre.txt" atraso={1}>
              <ul className="max-w-2xl space-y-2 text-sm text-term-muted sm:text-base">
                {c.perfil.destaques.map((d, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="select-none text-term-accent" aria-hidden="true">
                      —
                    </span>
                    <span>
                      <LinhaDestaque destaque={d} locale={locale} />
                    </span>
                  </li>
                ))}
              </ul>
            </Bloco>

            <div className="text-sm">
              <TerminalPrompt locale={locale} c={c} />
            </div>
          </div>
        </div>

        <div className="revela" style={{ animationDelay: '520ms' }}>
          <SocialLinks locale={locale} c={c} />
        </div>
      </div>

      {/*
        Coluna estreita em retrato: a foto quadrada é cortada nas laterais
        e o rosto fica no centro. No celular vira um bloco abaixo do texto,
        com altura limitada para não tomar a tela.
      */}
      <div className="relative h-[28rem] w-full border-t border-border bg-term sm:h-[34rem] lg:h-auto lg:border-t-0 lg:border-l">
        <Image
          src={perfil.avatar}
          alt={c.perfil.avatarAlt}
          fill
          priority
          sizes="(min-width: 1280px) 32vw, (min-width: 1024px) 36vw, 100vw"
          className="object-cover object-[50%_30%]"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent"
          aria-hidden="true"
        />
        <p className="absolute inset-x-0 bottom-0 flex justify-between gap-4 whitespace-nowrap px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white/85 lg:px-8">
          <span>{c.terminal.tituloJanela}</span>
          <span className="hidden xl:inline">{c.ui.cargoJsonLd}</span>
        </p>
      </div>
    </section>
  );
}

/** Um par comando + saída, com o prompt na frente. */
function Bloco({
  comando,
  atraso,
  children,
}: {
  comando: string;
  /** Ordem de entrada na animação; vira um atraso em CSS. */
  atraso: number;
  children: React.ReactNode;
}) {
  return (
    <div className="revela" style={{ animationDelay: `${atraso * 260}ms` }}>
      <p className="flex gap-2 text-sm">
        <span className="select-none text-term-accent" aria-hidden="true">
          $
        </span>
        <span>{comando}</span>
      </p>
      <div className="mt-4 sm:pl-4">{children}</div>
    </div>
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
        className="text-term-fg underline decoration-term-accent underline-offset-4 transition-colors hover:text-term-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-term-accent"
      >
        {linkTexto}
      </Link>
      {texto.slice(i + linkTexto.length)}
    </>
  );
}
