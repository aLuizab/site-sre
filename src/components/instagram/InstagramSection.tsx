import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
import { EmbedInstagram } from '@/components/instagram/EmbedInstagram';
import { instagramPosts, codigoDoPost } from '@/data/instagram';
import { socials } from '@/data/socials';
import type { Conteudo } from '@/i18n';

/**
 * Sem posts listados em data/instagram.ts a seção inteira some — é o
 * mesmo critério das outras: nada a mostrar, nada ocupando espaço.
 */
export function InstagramSection({ c }: { c: Conteudo }) {
  const codigos = instagramPosts
    .map(codigoDoPost)
    .filter((codigo): codigo is string => codigo !== null);

  if (codigos.length === 0) return null;

  const perfil = socials.find((s) => s.id === 'instagram');

  return (
    <section id="instagram" className="scroll-mt-24 py-12">
      <Container wide alinhamento="esquerda">
        <FadeIn>
          <SectionHeading
            eyebrow={c.secoes.instagram.eyebrow}
            title={c.secoes.instagram.titulo}
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {codigos.map((codigo) => (
              <li key={codigo}>
                <EmbedInstagram codigo={codigo} />
              </li>
            ))}
          </ul>
          {perfil && (
            <p className="mt-6 text-sm">
              <a
                href={perfil.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline underline-offset-4 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {c.ui.verPerfilInstagram}
              </a>
            </p>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
