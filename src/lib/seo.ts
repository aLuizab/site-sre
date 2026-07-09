import type { Metadata } from 'next';
import { perfil } from '@/data/perfil';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
export const SITE_NAME = perfil.nome;

/**
 * Sem `image`, o OG image gerado em app/opengraph-image.tsx é herdado
 * automaticamente pelo Next.js — só passe `image` quando a página tiver
 * uma imagem própria mais relevante (ex.: capa de uma palestra).
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'pt_BR',
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
