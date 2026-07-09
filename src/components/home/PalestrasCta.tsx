import Link from 'next/link';
import { Mic, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export function PalestrasCta() {
  return (
    <FadeIn className="py-12">
      <Link
        href="/palestras"
        className="group flex items-center justify-between gap-4 rounded-2xl border border-border p-6 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="flex items-center gap-3">
          <Mic className="text-accent" size={24} aria-hidden="true" />
          <span className="text-lg font-medium">Palestras &amp; Apresentações</span>
        </span>
        <ArrowRight
          className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
          size={20}
          aria-hidden="true"
        />
      </Link>
    </FadeIn>
  );
}
