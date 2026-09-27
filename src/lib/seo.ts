import type { Metadata } from 'next';
import { perfil } from '@/data/perfil';
import { locales, localeInfo, defaultLocale, type Locale } from '@/i18n/config';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
export const SITE_NAME = perfil.nome;

/**
 * Monta o bloco `languages` do hreflang para um caminho sem prefixo de
 * idioma. `x-default` aponta para o idioma padrão, que é o que o Google
 * serve a quem não casa com nenhum dos três.
 */
export function alternatesPara(caminho: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[localeInfo[locale].htmlLang] = new URL(
      `/${locale}${caminho}`,
      SITE_URL
    ).toString();
  }
  languages['x-default'] = new URL(`/${defaultLocale}${caminho}`, SITE_URL).toString();
  return languages;
}

/**
 * Sem `image`, o OG image gerado em app/[locale]/opengraph-image.tsx é
 * herdado automaticamente pelo Next.js — só passe `image` quando a página
 * tiver uma imagem própria mais relevante (ex.: capa de uma palestra).
 */
export function buildMetadata({
  title,
  description,
  locale,
  /** Caminho SEM o prefixo de idioma, ex.: "/palestras/slug" ou "". */
  caminho = '',
  image,
}: {
  title: string;
  description: string;
  locale: Locale;
  caminho?: string;
  image?: string;
}): Metadata {
  const url = new URL(`/${locale}${caminho}`, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternatesPara(caminho),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: localeInfo[locale].og,
      type: 'website',
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
