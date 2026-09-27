import type { MetadataRoute } from 'next';
import { palestras } from '@/data/palestras';
import { SITE_URL, alternatesPara } from '@/lib/seo';
import { locales } from '@/i18n/config';

type Entrada = {
  /** Caminho sem prefixo de idioma; "" é a home. */
  caminho: string;
  lastModified?: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

/**
 * Cada URL aparece uma vez por idioma, e cada entrada declara as outras
 * duas em `alternates.languages` — é assim que o Google entende que são
 * traduções da mesma página, e não conteúdo duplicado.
 *
 * O site é uma landing page única: experiência, projetos e palestras são
 * seções de "/", não rotas próprias. Só o detalhe de cada palestra tem
 * URL dedicada.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entradas: Entrada[] = [
    { caminho: '', changeFrequency: 'monthly', priority: 1 },
    { caminho: '/artigos', changeFrequency: 'weekly', priority: 0.8 },
    { caminho: '/newsletter', changeFrequency: 'monthly', priority: 0.5 },
    ...palestras.map(
      (p): Entrada => ({
        caminho: `/palestras/${p.slug}`,
        lastModified: p.data,
        changeFrequency: 'yearly',
        priority: 0.6,
      })
    ),
  ];

  return entradas.flatMap((entrada) =>
    locales.map((locale) => ({
      url: new URL(`/${locale}${entrada.caminho}`, SITE_URL).toString(),
      ...(entrada.lastModified ? { lastModified: entrada.lastModified } : {}),
      changeFrequency: entrada.changeFrequency,
      priority: entrada.priority,
      alternates: { languages: alternatesPara(entrada.caminho) },
    }))
  );
}
