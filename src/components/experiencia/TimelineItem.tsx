import { ChevronDown } from 'lucide-react';
import type { ExperienciaItem } from '@/data/experiencia';
import { formatarPeriodo } from '@/lib/formatarData';

/**
 * <details>/<summary> nativo: operável por teclado e anunciado por leitor
 * de tela sem ARIA manual, e mantém o componente sem 'use client'.
 */
export function TimelineItem({ item }: { item: ExperienciaItem }) {
  return (
    <details className="group border-b border-border py-6 first:pt-0 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
        <div>
          <p className="font-mono text-xs text-accent">
            {formatarPeriodo(item.periodoInicio, item.periodoFim)}
          </p>
          <h3 className="mt-1 text-lg font-medium">{item.cargo}</h3>
          <p className="text-muted">
            {item.empresa}
            {item.localizacao ? ` · ${item.localizacao}` : ''}
          </p>
        </div>
        <ChevronDown
          className="mt-1 shrink-0 text-muted transition-transform group-open:rotate-180"
          size={20}
          aria-hidden="true"
        />
      </summary>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
        {item.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </details>
  );
}
