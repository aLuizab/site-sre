import { Suspense } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';
import { Container } from '@/components/ui/Container';
import { PalestraGrid } from '@/components/palestras/PalestraGrid';
import { palestras, getAllTags } from '@/data/palestras';
import { LatestVideos } from '@/components/home/LatestVideos';

export function PalestrasSection() {
  return (
    <section id="palestras" className="scroll-mt-24 py-12">
      <Container wide>
        <FadeIn>
          <SectionHeading eyebrow="# palestras" title="Palestras & Apresentações" />
          <PalestraGrid palestras={palestras} tags={getAllTags()} />
        </FadeIn>
        <Suspense fallback={null}>
          <LatestVideos />
        </Suspense>
      </Container>
    </section>
  );
}
