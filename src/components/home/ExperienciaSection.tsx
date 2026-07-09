import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
import { Timeline } from '@/components/experiencia/Timeline';
import { StackChips } from '@/components/experiencia/StackChips';

export function ExperienciaSection() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-12">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow="# experiência" title="Trajetória profissional" />
          <Timeline />
          <div className="mt-12">
            <h3 className="mb-4 font-mono text-sm text-muted">stack &amp; ferramentas</h3>
            <StackChips />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
