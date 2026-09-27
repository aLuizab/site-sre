import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SkipLink } from '@/components/layout/SkipLink';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { perfil } from '@/data/perfil';
import { SITE_URL, SITE_NAME, alternatesPara } from '@/lib/seo';
import { serializarJsonLd } from '@/lib/jsonLd';
import { locales, localeInfo, isLocale } from '@/i18n/config';
import { getConteudo } from '@/i18n';

// Site inteiro usa fonte monospace (estética de terminal/código, pedido explícito).
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/** Os três idiomas viram páginas estáticas no build. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: LayoutProps<'/[locale]'>
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};

  const c = getConteudo(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: c.meta.titulo,
      template: `%s · ${SITE_NAME}`,
    },
    description: c.meta.descricao,
    alternates: {
      canonical: new URL(`/${locale}`, SITE_URL).toString(),
      languages: alternatesPara(''),
    },
    openGraph: {
      title: c.meta.titulo,
      description: c.meta.descricao,
      siteName: SITE_NAME,
      locale: localeInfo[locale].og,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: c.meta.titulo,
      description: c.meta.descricao,
    },
  };
}

export default async function LocaleLayout(props: LayoutProps<'/[locale]'>) {
  const { children } = props;
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getConteudo(locale);

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: perfil.nome,
    description: c.meta.descricao,
    url: new URL(`/${locale}`, SITE_URL).toString(),
    jobTitle: c.ui.cargoJsonLd,
  };

  return (
    <html
      lang={localeInfo[locale].htmlLang}
      className={`${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializarJsonLd(personJsonLd) }}
        />
        <ThemeProvider>
          <SkipLink texto={c.ui.skipLink} />
          <Header locale={locale} c={c} />
          <main id="conteudo" className="flex-1">
            {children}
          </main>
          <Footer c={c} />
        </ThemeProvider>
      </body>
    </html>
  );
}
