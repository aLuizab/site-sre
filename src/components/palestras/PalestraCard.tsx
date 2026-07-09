import Link from 'next/link';
import Image from 'next/image';
import type { Palestra } from '@/data/palestras';
import { formatarData } from '@/lib/formatarData';

export function PalestraCard({ palestra }: { palestra: Palestra }) {
  return (
    <Link
      href={`/palestras/${palestra.slug}`}
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
          <time dateTime={palestra.data}>{formatarData(palestra.data)}</time>
        </p>
        <h3 className="mt-1 font-medium group-hover:text-accent">{palestra.titulo}</h3>
        <p className="mt-1 text-sm text-muted">
          {palestra.evento} · {palestra.local}
        </p>
      </div>
    </Link>
  );
}
