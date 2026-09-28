import Image from 'next/image';
import Link from 'next/link';
import { perfil } from '@/data/perfil';
import { Container } from '@/components/ui/Container';
import { TerminalPrompt } from '@/components/home/TerminalPrompt';
import type { Locale } from '@/i18n/config';
import type { Conteudo, Destaque } from '@/i18n';

/**
 * Apresentação em forma de terminal.
 *
 * Todo o texto é renderizado no servidor, como HTML de verdade. A parte
 * interativa (campo de comando) é um componente cliente acrescentado no
 * fim — se o JavaScript não carregar, a apresentação continua legível, e
 * o buscador e o leitor de tela enxergam o conteúdo do mesmo jeito.
 *
 * A animação de digitação revela texto que já está no DOM, em vez de
 * escrevê-lo letra a letra: o mesmo motivo.
 */
export function TerminalHero({ locale, c }: { locale: Locale; c: Conteudo }) {
  return (
    <div className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-16">
      <div
        className="brilho-hero pointer-events-none absolute inset-0 -z-20"
        aria-hidden="true"
      />

      <Container alinhamento="esquerda">
        <div className="overflow-hidden rounded-xl border border-term-border bg-term text-term-fg shadow-lg">
          {/* Barra de título */}
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

          <div className="space-y-5 p-5 font-mono text-sm sm:p-6">
            <Bloco comando="whoami" atraso={0}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Image
                  src={perfil.avatar}
                  alt={c.perfil.avatarAlt}
                  width={88}
                  height={88}
                  priority
                  className="shrink-0 rounded-full border border-term-border"
                />
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {c.perfil.saudacao}
                  </h1>
                  <p className="mt-1 text-term-muted">{c.perfil.tagline}</p>
                </div>
              </div>
            </Bloco>

            <Bloco comando="cat sobre.txt" atraso={1}>
              <ul className="space-y-2">
                {c.perfil.destaques.map((d, i) => (
                  <li key={i} className="flex gap-2 text-term-muted">
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

            <TerminalPrompt locale={locale} c={c} />
          </div>
        </div>
      </Container>
    </div>
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
    <div
      className="revela"
      style={{ animationDelay: `${atraso * 260}ms` } as React.CSSProperties}
    >
      <p className="flex gap-2">
        <span className="select-none text-term-accent" aria-hidden="true">
          $
        </span>
        <span className="text-term-fg">{comando}</span>
      </p>
      <div className="mt-3 pl-4">{children}</div>
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

  const destino = href.startsWith('#') ? `/${locale}${href}` : `/${locale}${href}`;

  return (
    <>
      {texto.slice(0, i)}
      <Link
        href={destino}
        className="text-term-fg underline decoration-term-accent underline-offset-4 transition-colors hover:text-term-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-term-accent"
      >
        {linkTexto}
      </Link>
      {texto.slice(i + linkTexto.length)}
    </>
  );
}
