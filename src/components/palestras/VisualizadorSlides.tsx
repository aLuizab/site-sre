'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

export interface RotulosSlides {
  anterior: string;
  proximo: string;
  /** Usa {atual} e {total}. */
  contador: string;
  /** Usa {n} e {total}. */
  slideAlt: string;
  baixar: string;
  /** Explica que o PDF é a versão legível por leitor de tela. */
  avisoAcessibilidade: string;
}

/**
 * Navegador de slides dentro da própria página.
 *
 * Mostra as imagens exportadas de cada apresentação, em vez de embutir o
 * PDF num <iframe>. O iframe mostrava o PDF mas escondia a barra do
 * navegador, então não dava para avançar; e em iOS o PDF embutido
 * costuma nem abrir.
 *
 * Os slides são imagens de texto, o que leitor de tela não lê. O PDF
 * continua disponível para download logo abaixo, e é essa a versão
 * acessível — o aviso ao lado do botão diz isso em voz alta.
 */
export function VisualizadorSlides({
  slug,
  total,
  titulo,
  pdfUrl,
  rotulos,
}: {
  slug: string;
  total: number;
  titulo: string;
  pdfUrl?: string;
  rotulos: RotulosSlides;
}) {
  const [atual, setAtual] = useState(0);
  const regiao = useRef<HTMLDivElement>(null);

  const src = (i: number) =>
    `/palestras/${slug}/slides/${String(i + 1).padStart(2, '0')}.png`;

  const ir = useCallback(
    (delta: number) => {
      setAtual((i) => Math.min(total - 1, Math.max(0, i + delta)));
    },
    [total]
  );

  // Setas do teclado só quando o foco está dentro do visualizador, para
  // não sequestrar as setas de quem está apenas rolando a página.
  useEffect(() => {
    const el = regiao.current;
    if (!el) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        ir(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        ir(1);
      }
    }

    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [ir]);

  const preencher = (t: string, v: Record<string, string | number>) =>
    t.replace(/\{(\w+)\}/g, (m, k: string) => (k in v ? String(v[k]) : m));

  return (
    <div>
      <div
        ref={regiao}
        tabIndex={0}
        role="group"
        aria-roledescription="carrossel"
        aria-label={titulo}
        className="overflow-hidden rounded-xl border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="relative aspect-video w-full bg-black/20">
          {/*
            Só o slide atual fica montado, mas o próximo é pré-carregado
            pelo Next através do `priority` no primeiro e do cache das
            imagens já visitadas — evita piscar a cada clique.
          */}
          <Image
            key={atual}
            src={src(atual)}
            alt={preencher(rotulos.slideAlt, { n: atual + 1, total })}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            priority={atual === 0}
            className="object-contain"
          />
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border px-3 py-2">
          <button
            type="button"
            onClick={() => ir(-1)}
            disabled={atual === 0}
            aria-label={rotulos.anterior}
            className="rounded-full border border-border p-2 text-muted transition-colors enabled:hover:border-accent enabled:hover:text-accent disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          {/* aria-live: leitor de tela anuncia a troca de slide. */}
          <p aria-live="polite" className="font-mono text-xs text-muted">
            {preencher(rotulos.contador, { atual: atual + 1, total })}
          </p>

          <button
            type="button"
            onClick={() => ir(1)}
            disabled={atual === total - 1}
            aria-label={rotulos.proximo}
            className="rounded-full border border-border p-2 text-muted transition-colors enabled:hover:border-accent enabled:hover:text-accent disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      {pdfUrl ? (
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Download size={16} aria-hidden="true" />
            {rotulos.baixar}
          </a>
          <p className="text-xs text-muted">{rotulos.avisoAcessibilidade}</p>
        </div>
      ) : null}
    </div>
  );
}
