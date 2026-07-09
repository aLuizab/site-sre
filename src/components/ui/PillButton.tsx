import type { ElementType } from 'react';

export function PillButton({
  href,
  icon: Icon,
  label,
  sublabel,
  destaque = false,
  external = true,
  download = false,
}: {
  href: string;
  icon: ElementType;
  label: string;
  sublabel?: string;
  destaque?: boolean;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      {...(download ? { download: true } : {})}
      {...(external && !download ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        destaque
          ? // Claro: --accent é um tom escuro (texto branco). Escuro: --accent é claro (texto preto).
            'border-accent bg-accent text-white hover:bg-accent/90 dark:text-black'
          : 'border-border text-foreground hover:border-accent hover:text-accent'
      }`}
    >
      <Icon size={18} aria-hidden="true" />
      <span>{label}</span>
      {sublabel ? (
        <span
          className={`font-mono text-xs ${
            destaque ? 'text-white/75 dark:text-black/70' : 'text-muted'
          }`}
        >
          {sublabel}
        </span>
      ) : null}
    </a>
  );
}
