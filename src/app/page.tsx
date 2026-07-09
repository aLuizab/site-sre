import { Suspense } from 'react';
import { Container } from '@/components/ui/Container';
import { Hero } from '@/components/home/Hero';
import { CompaniesRow } from '@/components/home/CompaniesRow';
import { SocialLinks } from '@/components/home/SocialLinks';
import { AboutSection } from '@/components/home/AboutSection';
import { PalestrasCta } from '@/components/home/PalestrasCta';
import { LatestVideos } from '@/components/home/LatestVideos';

export default function Home() {
  return (
    <Container>
      <Hero />
      <div className="space-y-10 pb-12">
        <CompaniesRow />
        <SocialLinks />
      </div>
      <AboutSection />
      <PalestrasCta />
      <Suspense fallback={null}>
        <LatestVideos />
      </Suspense>
    </Container>
  );
}
