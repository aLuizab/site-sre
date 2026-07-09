import { Container } from '@/components/ui/Container';
import { Hero } from '@/components/home/Hero';
import { CompaniesRow } from '@/components/home/CompaniesRow';
import { SocialLinks } from '@/components/home/SocialLinks';
import { AboutSection } from '@/components/home/AboutSection';
import { ExperienciaSection } from '@/components/home/ExperienciaSection';
import { ProjetosSection } from '@/components/home/ProjetosSection';
import { PalestrasSection } from '@/components/home/PalestrasSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <div className="space-y-10 pb-12">
          <CompaniesRow />
          <SocialLinks />
        </div>
      </Container>
      <AboutSection />
      <ExperienciaSection />
      <ProjetosSection />
      <PalestrasSection />
    </>
  );
}
