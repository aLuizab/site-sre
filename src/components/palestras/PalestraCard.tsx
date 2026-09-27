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
  capa: string;
  capaAlt: string;
  titulo: string;
  evento: string;
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
      className="group block overflow-hidden rounded-xl border border-border transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Image
        src={palestra.capa}
        alt={palestra.capaAlt}
        width={800}
        height={450}
        className="aspect-video w-full object-cover"
      />
      <div className="p-4">
        <p className="font-mono text-xs text-accent">
          <time dateTime={palestra.data}>{palestra.dataFormatada}</time>
        </p>
        <h3 className="mt-1 font-medium group-hover:text-accent">{palestra.titulo}</h3>
        <p className="mt-1 text-sm text-muted">
          {palestra.evento} · {palestra.local}
        </p>
      </div>
    </Link>
  );
}
