import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Chip } from '@/components/ui/Chip';
import { PdfViewer } from '@/components/palestras/PdfViewer';
import { PhotoGallery } from '@/components/palestras/PhotoGallery';
import { VideoEmbed } from '@/components/palestras/VideoEmbed';
import { palestras, getPalestraBySlug } from '@/data/palestras';
import { formatarData } from '@/lib/formatarData';
import { buildMetadata } from '@/lib/seo';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return palestras.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const palestra = getPalestraBySlug(slug);
  if (!palestra) return {};

  return buildMetadata({
    title: palestra.titulo,
    description: palestra.descricao,
    path: `/palestras/${palestra.slug}`,
    image: palestra.capa,
  });
}

export default async function PalestraDetailPage({ params }: Props) {
  const { slug } = await params;
  const palestra = getPalestraBySlug(slug);
  if (!palestra) notFound();

  return (
    <Container className="py-16">
      <Link
        href="/#palestras"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Voltar para palestras
      </Link>

      <header className="mt-6">
        <p className="font-mono text-xs text-accent">
          <time dateTime={palestra.data}>{formatarData(palestra.data)}</time>
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          {palestra.titulo}
        </h1>
        <p className="mt-1 text-muted">
          {palestra.evento} · {palestra.local}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {palestra.tags.map((tag) => (
            <li key={tag}>
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
      </header>

      <p className="mt-8 whitespace-pre-line text-muted">{palestra.descricao}</p>

      {palestra.videoUrl ? (
        <div className="mt-10">
          <VideoEmbed url={palestra.videoUrl} titulo={palestra.titulo} />
        </div>
      ) : null}

      {palestra.slidesPdf ? (
        <div className="mt-10">
          <h2 className="mb-4 font-mono text-sm text-muted"># slides</h2>
          <PdfViewer src={palestra.slidesPdf} titulo={palestra.titulo} />
        </div>
      ) : null}

      {palestra.fotos.length > 0 ? (
        <div className="mt-10">
          <h2 className="mb-4 font-mono text-sm text-muted"># fotos</h2>
          <PhotoGallery fotos={palestra.fotos} titulo={palestra.titulo} />
        </div>
      ) : null}
    </Container>
  );
}
