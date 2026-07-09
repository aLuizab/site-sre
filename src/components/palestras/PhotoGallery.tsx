'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';
import type { PalestraFoto } from '@/data/palestras';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});

export function PhotoGallery({
  fotos,
  titulo,
}: {
  fotos: PalestraFoto[];
  titulo: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (fotos.length === 0) return null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {fotos.map((foto, i) => (
          <li key={foto.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Ampliar foto ${i + 1} de ${titulo}`}
              className="block w-full overflow-hidden rounded-lg border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                width={640}
                height={480}
                className="aspect-[4/3] w-full object-cover transition-transform hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox
        open={openIndex !== null}
        close={() => setOpenIndex(null)}
        index={openIndex ?? 0}
        slides={fotos.map((foto) => ({ src: foto.src, alt: foto.alt }))}
      />
    </>
  );
}
