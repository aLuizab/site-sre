import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
import { Timeline } from '@/components/experiencia/Timeline';
import { StackChips } from '@/components/experiencia/StackChips';
import { Formacao } from '@/components/experiencia/Formacao';
import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n';

export function ExperienciaSection({ locale, c }: { locale: Locale; c: Conteudo }) {
  return (
    <section id="experiencia" className="scroll-mt-24 py-12">
      <Container alinhamento="esquerda">
        <FadeIn>
          <SectionHeading
            eyebrow={c.secoes.experiencia.eyebrow}
            title={c.secoes.experiencia.titulo}
          />
          <Timeline locale={locale} c={c} />
          <div className="mt-12">
            <h3 className="mb-4 font-mono text-sm text-muted">{c.ui.formacao}</h3>
            <Formacao c={c} />
          </div>
          <div className="mt-12">
            <h3 className="mb-4 font-mono text-sm text-muted">{c.ui.stackFerramentas}</h3>
            <StackChips />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
