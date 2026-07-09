'use client';

import type { ReactNode } from 'react';
import { useInViewFadeIn } from '@/lib/useInViewFadeIn';

export function FadeIn({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const { ref, visible } = useInViewFadeIn<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(0.75rem)',
        transition: 'opacity 700ms ease-out, transform 700ms ease-out',
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
