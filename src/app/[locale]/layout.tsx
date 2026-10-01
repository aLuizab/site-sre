import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SkipLink } from '@/components/layout/SkipLink';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { perfil } from '@/data/perfil';
import { socials } from '@/data/socials';
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
  const url = new URL(`/${locale}`, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    /*
     * O `default` é o título da home e é o que o Google mostra no link do
     * resultado ("Ana Luiza Primo - Technology and Career"). As outras
     * páginas usam o template.
     */
    title: {
      default: c.meta.titulo,
      template: `%s · ${SITE_NAME}`,
    },
    description: c.meta.descricao,
    authors: [{ name: perfil.nome, url }],
    creator: perfil.nome,
    alternates: {
      canonical: url,
      languages: alternatesPara(''),
    },
    openGraph: {
      title: c.meta.titulo,
      description: c.meta.descricao,
      url,
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

  const url = new URL(`/${locale}`, SITE_URL).toString();

  /*
   * WebSite + Person no mesmo grafo. O `name` do WebSite é o que o Google
   * usa como nome do site acima do link; o `sameAs` liga o site aos
   * perfis nas redes, para a busca pelo nome juntar tudo na mesma pessoa.
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: perfil.nome,
        alternateName: c.meta.titulo,
        inLanguage: localeInfo[locale].htmlLang,
        publisher: { '@id': `${SITE_URL}/#pessoa` },
      },
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#pessoa`,
        name: perfil.nome,
        description: c.meta.descricao,
        url,
        image: new URL(perfil.avatar, SITE_URL).toString(),
        jobTitle: c.ui.cargoJsonLd,
        sameAs: socials.map((s) => s.url),
      },
    ],
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
          dangerouslySetInnerHTML={{ __html: serializarJsonLd(jsonLd) }}
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
