import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/projetos/ProjectCard';
import { projetos } from '@/data/projetos';
import type { Conteudo } from '@/i18n';

export function ProjetosSection({ c }: { c: Conteudo }) {
  return (
    <section id="projetos" className="scroll-mt-24 py-12">
      <Container wide alinhamento="esquerda">
        <FadeIn>
          <SectionHeading
            eyebrow={c.secoes.projetos.eyebrow}
            title={c.secoes.projetos.titulo}
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projetos.map((projeto) => (
              <li key={projeto.id}>
                <ProjectCard
                  projeto={projeto}
                  descricao={c.projetos[projeto.id] ?? ''}
                  c={c}
                />
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
