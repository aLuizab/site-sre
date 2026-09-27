import { ImageResponse } from 'next/og';
import { perfil } from '@/data/perfil';
import { locales, defaultLocale, isLocale } from '@/i18n/config';
import { getConteudo } from '@/i18n';

export const alt = `${perfil.nome} — Site Reliability Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Uma imagem por idioma, gerada no build em vez de sob demanda. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: bruto } = await params;
  const locale = isLocale(bruto) ? bruto : defaultLocale;
  const c = getConteudo(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#111827',
          color: '#f5f5f5',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 64,
            height: 4,
            background: '#5fd9d0',
            marginBottom: 32,
          }}
        />
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700 }}>
          {perfil.nome}
        </div>
        <div style={{ display: 'flex', fontSize: 32, marginTop: 24, color: '#a3a3a3' }}>
          {c.perfil.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
