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
import { isLocale } from '@/i18n/config';
import { getConteudo } from '@/i18n';

export default async function Home(props: PageProps<'/[locale]'>) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getConteudo(locale);

  return (
    <>
      <Hero c={c} />
      <Container>
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
    </>
  );
}
