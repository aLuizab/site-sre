import { perfil } from '@/data/perfil';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-24 py-12">
      <FadeIn>
        <SectionHeading eyebrow="# sobre" title="Sobre mim" />
        <div className="space-y-4 text-muted">
          {perfil.bio.map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
