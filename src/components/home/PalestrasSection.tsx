import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
import { PalestraGrid } from '@/components/palestras/PalestraGrid';
import { palestras, getAllTags } from '@/data/palestras';
import { formatarData } from '@/lib/formatarData';
import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n';

export function PalestrasSection({ locale, c }: { locale: Locale; c: Conteudo }) {
  /*
   * A data é formatada aqui, no servidor, porque PalestraGrid é um client
   * component — assim o Intl com o locale certo não precisa ir para o
   * bundle do cliente.
   */
  const cards = palestras
    .filter((p) => c.palestras[p.slug])
    .map((p) => ({
      slug: p.slug,
      data: p.data,
      dataFormatada: formatarData(p.data, locale),
      capa: p.capa,
      tags: p.tags,
      titulo: c.palestras[p.slug].titulo,
      evento: c.palestras[p.slug].evento,
      local: c.palestras[p.slug].local,
      capaAlt: c.palestras[p.slug].capaAlt,
    }));

  return (
    <section id="palestras" className="scroll-mt-24 py-12">
      <Container wide>
        <FadeIn>
          <SectionHeading
            eyebrow={c.secoes.palestras.eyebrow}
            title={c.secoes.palestras.titulo}
          />
          <PalestraGrid
            palestras={cards}
            tags={getAllTags()}
            locale={locale}
            rotulos={{
              todas: c.ui.filtroTodas,
              filtrarPorTag: c.ui.filtrarPorTag,
              vazio: c.ui.semPalestras,
              vazioComTag: c.ui.semPalestrasComTag,
            }}
          />
        </FadeIn>
      </Container>
    </section>
  );
}
