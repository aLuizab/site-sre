import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
import type { Conteudo } from '@/i18n';

export function AboutSection({ c }: { c: Conteudo }) {
  return (
    <section id="sobre" className="scroll-mt-24 py-12">
      <Container>
        <FadeIn>
          <SectionHeading eyebrow={c.secoes.sobre.eyebrow} title={c.secoes.sobre.titulo} />
          <div className="space-y-4 text-muted">
            {c.perfil.bio.map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
