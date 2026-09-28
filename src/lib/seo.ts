import type { Metadata } from 'next';
import { perfil } from '@/data/perfil';
import { locales, localeInfo, defaultLocale, type Locale } from '@/i18n/config';

const SITE_URL_PADRAO = 'http://localhost:3000';

/**
 * URL pública do site, vinda de NEXT_PUBLIC_SITE_URL.
 *
 * Cuidados que o build já cobrou:
 *
 * 1. `||` em vez de `??`. Variável não definida no GitHub Actions chega
 *    como string vazia, não como undefined — e `??` só cai no padrão
 *    para null/undefined. A string vazia passava adiante e estourava
 *    `new URL('/pt', '')` na geração das páginas.
 * 2. Valor inválido derruba o build inteiro num ponto distante daqui.
 *    Melhor avisar e seguir com o padrão do que falhar com
 *    "Invalid URL" três arquivos adiante.
 * 3. Barra no fim é removida para não gerar canonical com "//".
 */
function resolverSiteUrl(): string {
  const bruta = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!bruta) return SITE_URL_PADRAO;

  try {
    new URL(bruta);
    return bruta.replace(/\/+$/, '');
  } catch {
    console.warn(
      `[seo] NEXT_PUBLIC_SITE_URL inválida (${bruta}); usando ${SITE_URL_PADRAO}`
    );
    return SITE_URL_PADRAO;
  }
}

export const SITE_URL = resolverSiteUrl();
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
