import { GraduationCap } from 'lucide-react';
import { formacao } from '@/data/formacao';
import type { Conteudo } from '@/i18n';

export function Formacao({ c }: { c: Conteudo }) {
  return (
    <ul className="space-y-2">
      {formacao.map((item) => {
        const curso = c.formacao[item.id];
        if (!curso) return null;

        return (
          <li key={item.id} className="flex items-center gap-2 text-muted">
            <GraduationCap className="shrink-0 text-accent" size={16} aria-hidden="true" />
            <span>
              {curso} — {item.instituicao}
              {item.periodo ? ` · ${item.periodo}` : ''}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
