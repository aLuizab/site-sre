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
          // Mesmos valores dos tokens do tema escuro em globals.css —
          // aqui precisam ser literais porque o gerador de imagem não
          // enxerga CSS custom properties.
          background: '#0f0a18',
          color: '#f5f4f8',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 64,
            height: 4,
            background: '#cda6ff',
            marginBottom: 32,
          }}
        />
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700 }}>
          {perfil.nome}
        </div>
        <div style={{ display: 'flex', fontSize: 32, marginTop: 24, color: '#a19ab1' }}>
          {c.perfil.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
