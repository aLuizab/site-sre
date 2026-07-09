import { Mic } from 'lucide-react';

export function EmptyState({ mensagem }: { mensagem: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center text-muted">
      <Mic size={28} aria-hidden="true" />
      <p>{mensagem}</p>
    </div>
  );
}
