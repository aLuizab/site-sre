import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormularioNewsletter } from '@/components/newsletter/FormularioNewsletter';
import { buildMetadata } from '@/lib/seo';
import { locales, isLocale } from '@/i18n/config';
import { getConteudo } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: PageProps<'/[locale]/newsletter'>
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};

  const c = getConteudo(locale);

  return buildMetadata({
    title: c.newsletter.tituloPagina,
    description: c.newsletter.descricao,
    locale,
    caminho: '/newsletter',
  });
}

export default async function NewsletterPage(
  props: PageProps<'/[locale]/newsletter'>
) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getConteudo(locale);

  return (
    <Container className="py-16">
      <Link
        href={`/${locale}`}
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {c.ui.voltarInicio}
      </Link>

      <div className="mt-6">
        <SectionHeading
          eyebrow={c.newsletter.eyebrow}
          title={c.newsletter.tituloPagina}
        />
        <p className="-mt-2 max-w-xl text-muted">{c.newsletter.descricao}</p>
      </div>

      <FormularioNewsletter c={c} />
    </Container>
  );
}
