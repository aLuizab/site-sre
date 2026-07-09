import type { MetadataRoute } from 'next';
import { palestras } from '@/data/palestras';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/experiencia`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/palestras`, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const dinamicas: MetadataRoute.Sitemap = palestras.map((p) => ({
    url: `${SITE_URL}/palestras/${p.slug}`,
    lastModified: p.data,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...estaticas, ...dinamicas];
}
