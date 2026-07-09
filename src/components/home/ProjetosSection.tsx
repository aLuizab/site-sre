import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/projetos/ProjectCard';
import { projetos } from '@/data/projetos';

export function ProjetosSection() {
  return (
    <section id="projetos" className="scroll-mt-24 py-12">
      <Container wide>
        <FadeIn>
          <SectionHeading eyebrow="# projetos" title="Meus projetos" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projetos.map((projeto) => (
              <li key={projeto.nome}>
                <ProjectCard projeto={projeto} />
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
