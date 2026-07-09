import { ImageResponse } from 'next/og';
import { perfil } from '@/data/perfil';

export const alt = `${perfil.nome} — Site Reliability Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
          {perfil.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
