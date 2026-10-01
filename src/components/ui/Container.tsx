import type { ReactNode } from 'react';

export function Container({
  children,
  className = '',
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  const largura = wide ? 'max-w-5xl' : 'max-w-3xl';

  return (
    <div className={`mx-auto w-full px-6 ${largura} ${className}`}>
      {children}
    </div>
  );
}
