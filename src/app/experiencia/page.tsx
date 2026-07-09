import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Timeline } from '@/components/experiencia/Timeline';
import { StackChips } from '@/components/experiencia/StackChips';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Experiência',
  description: 'Trajetória profissional em Site Reliability Engineering.',
  path: '/experiencia',
});

export default function ExperienciaPage() {
  return (
    <Container className="py-16">
      <SectionHeading eyebrow="# experiência" title="Trajetória profissional" />
      <Timeline />
      <div className="mt-12">
        <h3 className="mb-4 font-mono text-sm text-muted">stack &amp; ferramentas</h3>
        <StackChips />
      </div>
    </Container>
  );
}
