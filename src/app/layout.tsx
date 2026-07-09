import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SkipLink } from '@/components/layout/SkipLink';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { perfil } from '@/data/perfil';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

// Site inteiro usa fonte monospace (estética de terminal/código, pedido explícito).
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Site Reliability Engineer`,
    template: `%s · ${SITE_NAME}`,
  },
  description: perfil.tagline,
  openGraph: {
    title: `${SITE_NAME} — Site Reliability Engineer`,
    description: perfil.tagline,
    siteName: SITE_NAME,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Site Reliability Engineer`,
    description: perfil.tagline,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: perfil.nome,
  description: perfil.tagline,
  url: SITE_URL,
  jobTitle: 'Site Reliability Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <SkipLink />
          <Header />
          <main id="conteudo" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
