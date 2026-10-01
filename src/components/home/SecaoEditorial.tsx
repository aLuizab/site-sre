import type { ReactNode } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

/**
 * Seção da home em largura total: rótulo numerado numa coluna estreita
 * à esquerda ("01 / projetos") e o conteúdo ocupando o resto. Abaixo de
 * lg as duas colunas empilham.
 */
export function SecaoEditorial({
  id,
  numero,
  rotulo,
  titulo,
  children,
}: {
  id: string;
  numero: number;
  rotulo: string;
  titulo: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`titulo-${id}`} className="scroll-mt-16 border-b border-border">
      <div className="grid gap-8 px-6 py-16 lg:grid-cols-[minmax(10rem,1fr)_minmax(0,4fr)] lg:gap-12 lg:px-12 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted lg:pt-4">
          <span className="text-accent">{String(numero).padStart(2, '0')}</span> / {rotulo}
        </p>
        <FadeIn>
          <h2
            id={`titulo-${id}`}
            className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl"
          >
            {titulo}
          </h2>
          <div className="mt-12 lg:mt-16">{children}</div>
        </FadeIn>
      </div>
    </section>
  );
}

/** Rótulo de um bloco dentro da seção, no mesmo estilo do rótulo numerado. */
export function RotuloBloco({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="mb-6 scroll-mt-20 font-mono text-xs uppercase tracking-[0.2em] text-muted"
    >
      {children}
    </h3>
  );
}
