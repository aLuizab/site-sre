import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Chip } from '@/components/ui/Chip';
import { PdfViewer } from '@/components/palestras/PdfViewer';
import { VisualizadorSlides } from '@/components/palestras/VisualizadorSlides';
import { PhotoGallery } from '@/components/palestras/PhotoGallery';
import { VideoEmbed } from '@/components/palestras/VideoEmbed';
import { palestras, getPalestraBySlug } from '@/data/palestras';
import { formatarData } from '@/lib/formatarData';
import { buildMetadata } from '@/lib/seo';
import { locales, isLocale } from '@/i18n/config';
import { getConteudo, preencher } from '@/i18n';

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    palestras.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata(
  props: PageProps<'/[locale]/palestras/[slug]'>
): Promise<Metadata> {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) return {};

  const palestra = getPalestraBySlug(slug);
  const texto = getConteudo(locale).palestras[slug];
  if (!palestra || !texto) return {};

  return buildMetadata({
    title: texto.titulo,
    description: texto.descricao,
    locale,
    caminho: `/palestras/${palestra.slug}`,
    image: palestra.capa,
  });
}

export default async function PalestraDetailPage(
  props: PageProps<'/[locale]/palestras/[slug]'>
) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();

  const palestra = getPalestraBySlug(slug);
  const c = getConteudo(locale);
  const texto = c.palestras[slug];
  if (!palestra || !texto) notFound();

  return (
    <Container className="py-16">
      <Link
        href={`/${locale}#palestras`}
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {c.ui.voltarPalestras}
      </Link>

      <header className="mt-6">
        <p className="font-mono text-xs text-accent">
          <time dateTime={palestra.data}>{formatarData(palestra.data, locale)}</time>
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          {texto.titulo}
        </h1>
        <p className="mt-1 text-muted">
          {texto.evento}
          {texto.local ? ` · ${texto.local}` : ''}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {palestra.tags.map((tag) => (
            <li key={tag}>
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
      </header>

      <p className="mt-8 whitespace-pre-line text-muted">{texto.descricao}</p>

      {palestra.videoUrl ? (
        <div className="mt-10">
          <VideoEmbed
            url={palestra.videoUrl}
            titulo={preencher(c.ui.tituloGravacao, { titulo: texto.titulo })}
          />
        </div>
      ) : null}

      {palestra.slides ? (
        <div className="mt-10">
          <h2 className="mb-4 font-mono text-sm text-muted">{c.ui.tituloSlides}</h2>
          <VisualizadorSlides
            slug={palestra.slug}
            total={palestra.slides}
            titulo={preencher(c.ui.rotuloSlides, { titulo: texto.titulo })}
            pdfUrl={palestra.slidesPdf}
            rotulos={{
              anterior: c.ui.slideAnterior,
              proximo: c.ui.slideProximo,
              contador: c.ui.slideContador,
              slideAlt: c.ui.slideAlt,
              baixar: c.ui.baixarSlides,
              avisoAcessibilidade: c.ui.slidesAcessibilidade,
            }}
          />
        </div>
      ) : palestra.slidesPdf ? (
        /* Palestra com PDF mas sem slides exportados: só o botão. */
        <div className="mt-10">
          <h2 className="mb-4 font-mono text-sm text-muted">{c.ui.tituloSlides}</h2>
          <PdfViewer
            src={palestra.slidesPdf}
            titulo={preencher(c.ui.rotuloSlides, { titulo: texto.titulo })}
            rotuloBaixar={c.ui.baixarSlides}
            rotuloVer={c.ui.verSlides}
          />
        </div>
      ) : null}

      {palestra.fotos.length > 0 ? (
        <div className="mt-10">
          <h2 className="mb-4 font-mono text-sm text-muted">{c.ui.tituloFotos}</h2>
          <PhotoGallery
            fotos={palestra.fotos.map((src, i) => ({
              src,
              alt: texto.fotosAlt[i] ?? texto.capaAlt,
            }))}
            titulo={texto.titulo}
          />
        </div>
      ) : null}
    </Container>
  );
}
