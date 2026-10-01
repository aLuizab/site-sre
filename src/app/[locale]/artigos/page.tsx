import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArtigoCard } from '@/components/artigos/ArtigoCard';
import { EmbedSubstack } from '@/components/newsletter/EmbedSubstack';
import { getPublicacoes } from '@/lib/publicacoes';
import { formatarData } from '@/lib/formatarData';
import { buildMetadata } from '@/lib/seo';
import { locales, isLocale } from '@/i18n/config';
import { getConteudo } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: PageProps<'/[locale]/artigos'>
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};

  const c = getConteudo(locale);

  return buildMetadata({
    title: c.artigos.tituloPagina,
    description: c.artigos.descricao,
    locale,
    caminho: '/artigos',
  });
}

export default async function ArtigosPage(props: PageProps<'/[locale]/artigos'>) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getConteudo(locale);
  const artigos = await getPublicacoes(30);

  return (
    <Container wide className="py-16">
      <Link
        href={`/${locale}`}
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {c.ui.voltarInicio}
      </Link>

      <div className="mt-6">
        <SectionHeading
          eyebrow={c.artigos.eyebrow}
          title={c.artigos.tituloPagina}
        />
        <p className="-mt-2 mb-8 max-w-2xl text-muted">{c.artigos.descricao}</p>
      </div>

      <div className="mb-10 max-w-md">
        <EmbedSubstack titulo={c.newsletter.eyebrow} />
      </div>

      {artigos.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border py-16 text-center text-muted">
          {c.artigos.vazio}
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {artigos.map((artigo) => (
            <li key={artigo.id}>
              <ArtigoCard
                artigo={artigo}
                dataFormatada={formatarData(artigo.data, locale)}
              />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
