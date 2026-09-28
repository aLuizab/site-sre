import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/i18n/config';

/** Palestra já resolvida no idioma, pronta para render. */
export interface PalestraCardData {
  slug: string;
  /** ISO, para o <time dateTime>. */
  data: string;
  /** Já formatada no servidor, no idioma certo. */
  dataFormatada: string;
  /** Ausente quando não há foto da palestra. */
  capa?: string;
  capaAlt: string;
  titulo: string;
  evento: string;
  /** Vazio quando o local não é conhecido ou não se aplica. */
  local: string;
  tags: string[];
}

export function PalestraCard({
  palestra,
  locale,
}: {
  palestra: PalestraCardData;
  locale: Locale;
}) {
  return (
    <Link
      href={`/${locale}/palestras/${palestra.slug}`}
      // h-full + flex: os cards de uma mesma linha ficam com a mesma
      // altura, independentemente do tamanho do título e do nome do
      // evento. Sem isso a grade fica com caixas de alturas diferentes.
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {palestra.capa ? (
        <Image
          src={palestra.capa}
          alt={palestra.capaAlt}
          width={800}
          height={450}
          className="aspect-video w-full object-cover"
        />
      ) : (
        /*
         * Sem foto, uma faixa na cor de destaque no lugar da imagem.
         * Mantém a altura do card igual às dos vizinhos na grade, em vez
         * de deixar um buraco branco ou um card visivelmente menor.
         */
        <div
          aria-hidden="true"
          className="aspect-video w-full bg-gradient-to-br from-accent/25 to-accent/5"
        />
      )}
      {/*
        Alturas fixas no texto para todos os cards ficarem do mesmo
        tamanho — inclusive no celular, onde a grade vira coluna única e
        o `h-full` sozinho não iguala nada, porque cada card é sua
        própria linha.

        `line-clamp` corta com reticências; o título inteiro aparece na
        página da palestra.
      */}
      <div className="flex grow flex-col p-4">
        <p className="font-mono text-xs text-accent">
          <time dateTime={palestra.data}>{palestra.dataFormatada}</time>
        </p>
        <h3 className="mt-1 line-clamp-2 min-h-[3rem] font-medium group-hover:text-accent">
          {palestra.titulo}
        </h3>
        <p className="mt-1 line-clamp-2 min-h-[2.5rem] text-sm text-muted">
          {palestra.evento}
          {palestra.local ? ` · ${palestra.local}` : ''}
        </p>
      </div>
    </Link>
  );
}
