import type { MetadataRoute } from 'next';
import { palestras } from '@/data/palestras';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // Site é uma landing page única — experiência/projetos/palestras são
  // seções em "/", não rotas próprias. Só as páginas de detalhe de cada
  // palestra têm URL dedicada.
  const estaticas: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
  ];

  const dinamicas: MetadataRoute.Sitemap = palestras.map((p) => ({
    url: `${SITE_URL}/palestras/${p.slug}`,
    lastModified: p.data,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...estaticas, ...dinamicas];
}
