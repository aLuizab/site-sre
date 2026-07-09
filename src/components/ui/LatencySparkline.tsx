/**
 * Motivo decorativo de observabilidade (linha de latência). Puramente
 * visual — usado com moderação, não em toda seção.
 */
export function LatencySparkline({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 400 60"
      preserveAspectRatio="none"
      className={`w-full text-accent/25 ${className}`}
    >
      <polyline
        points="0,45 30,42 60,48 90,20 120,30 150,15 180,35 210,25 240,40 270,10 300,28 330,18 360,32 400,22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
