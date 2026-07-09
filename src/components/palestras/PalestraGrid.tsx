'use client';

import { useMemo, useState } from 'react';
import type { Palestra } from '@/data/palestras';
import { PalestraCard } from '@/components/palestras/PalestraCard';
import { TagFilter } from '@/components/palestras/TagFilter';
import { EmptyState } from '@/components/palestras/EmptyState';

export function PalestraGrid({
  palestras,
  tags,
}: {
  palestras: Palestra[];
  tags: string[];
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
    return <EmptyState mensagem="Em breve, novas palestras." />;
  }

  return (
    <div className="space-y-8">
      {tags.length > 1 ? (
        <TagFilter tags={tags} selecionada={tagSelecionada} onSelect={setTagSelecionada} />
      ) : null}

      {filtradas.length === 0 ? (
        <EmptyState mensagem="Nenhuma palestra encontrada com essa tag." />
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtradas.map((palestra) => (
            <li key={palestra.slug}>
              <PalestraCard palestra={palestra} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
