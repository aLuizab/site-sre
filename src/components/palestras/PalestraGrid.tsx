'use client';

import { useMemo, useState } from 'react';
import { PalestraCard, type PalestraCardData } from '@/components/palestras/PalestraCard';
import { TagFilter } from '@/components/palestras/TagFilter';
import { EmptyState } from '@/components/palestras/EmptyState';
import type { Locale } from '@/i18n/config';

export function PalestraGrid({
  palestras,
  tags,
  locale,
  rotulos,
}: {
  palestras: PalestraCardData[];
  tags: string[];
  locale: Locale;
  rotulos: {
    todas: string;
    filtrarPorTag: string;
    vazio: string;
    vazioComTag: string;
  };
}) {
  const [tagSelecionada, setTagSelecionada] = useState<string | null>(null);

  const filtradas = useMemo(
    () =>
      tagSelecionada
        ? palestras.filter((p) => p.tags.includes(tagSelecionada))
        : palestras,
    [palestras, tagSelecionada]
  );

  if (palestras.length === 0) {
    return <EmptyState mensagem={rotulos.vazio} />;
  }

  return (
    <div className="space-y-8">
      {tags.length > 1 ? (
        <TagFilter
          tags={tags}
          selecionada={tagSelecionada}
          onSelect={setTagSelecionada}
          rotuloTodas={rotulos.todas}
          rotuloGrupo={rotulos.filtrarPorTag}
        />
      ) : null}

      {filtradas.length === 0 ? (
        <EmptyState mensagem={rotulos.vazioComTag} />
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtradas.map((palestra) => (
            <li key={palestra.slug}>
              <PalestraCard palestra={palestra} locale={locale} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
