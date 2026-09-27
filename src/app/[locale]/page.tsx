import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Hero } from '@/components/home/Hero';
import { CompaniesRow } from '@/components/home/CompaniesRow';
import { SocialLinks } from '@/components/home/SocialLinks';
import { AboutSection } from '@/components/home/AboutSection';
import { ExperienciaSection } from '@/components/home/ExperienciaSection';
import { ProjetosSection } from '@/components/home/ProjetosSection';
import { PalestrasSection } from '@/components/home/PalestrasSection';
import { LatestVideos } from '@/components/home/LatestVideos';
import { InstagramSection } from '@/components/instagram/InstagramSection';
import { PainelArtigos } from '@/components/artigos/PainelArtigos';
import { isLocale } from '@/i18n/config';
import { getConteudo } from '@/i18n';

export default async function Home(props: PageProps<'/[locale]'>) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getConteudo(locale);

  return (
    /*
     * Duas colunas a partir de lg: conteúdo encostado à esquerda e o
     * painel de artigos fixo à direita. Abaixo de lg vira uma coluna só,
     * com o painel no fim — em tela estreita não há margem sobrando para
     * uma barra lateral.
     */
    <div className="mx-auto w-full max-w-7xl lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 lg:px-6">
      <div className="min-w-0">
        <Hero c={c} />
        <Container alinhamento="esquerda">
          <div className="space-y-10 pb-12">
            <CompaniesRow c={c} />
            <SocialLinks locale={locale} c={c} />
          </div>
        </Container>
        <AboutSection c={c} />
        <ExperienciaSection locale={locale} c={c} />
        <ProjetosSection c={c} />
        <PalestrasSection locale={locale} c={c} />
        {/* Suspense para o fetch do YouTube não segurar o resto da página. */}
        <Suspense fallback={null}>
          <LatestVideos c={c} />
        </Suspense>
        <InstagramSection c={c} />
      </div>

      <div className="px-6 pb-12 lg:px-0 lg:pt-24">
        {/* Idem para o feed do Medium. */}
        <Suspense fallback={null}>
          <PainelArtigos locale={locale} c={c} />
        </Suspense>
      </div>
    </div>
  );
}
