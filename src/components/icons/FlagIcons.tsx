/**
 * Bandeiras em SVG em vez de emoji porque o Windows não renderiza os
 * emoji de bandeira: ele mostra o par de letras do código do país
 * ("BR", "US", "ES"), o que quebra o seletor para boa parte dos
 * visitantes. Desenhos simplificados, legíveis a 20px.
 *
 * São decorativas — quem usa leitor de tela recebe o nome do idioma,
 * não o do país. Por isso todas saem com aria-hidden.
 */

type Props = { className?: string };

const base = 'h-3.5 w-5 shrink-0 rounded-[2px]';

export function BandeiraBR({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 28 20" className={`${base} ${className}`} aria-hidden="true">
      <rect width="28" height="20" fill="#009b3a" />
      <path d="M14 2.5 25.5 10 14 17.5 2.5 10z" fill="#fedf00" />
      <circle cx="14" cy="10" r="4.2" fill="#002776" />
    </svg>
  );
}

export function BandeiraUS({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 28 20" className={`${base} ${className}`} aria-hidden="true">
      <rect width="28" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 20) / 13} width="28" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="12" height={(20 / 13) * 7} fill="#3c3b6e" />
    </svg>
  );
}

export function BandeiraES({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 28 20" className={`${base} ${className}`} aria-hidden="true">
      <rect width="28" height="20" fill="#c60b1e" />
      <rect y="5" width="28" height="10" fill="#ffc400" />
    </svg>
  );
}
