import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PalestraGrid } from '@/components/palestras/PalestraGrid';
import { palestras, getAllTags } from '@/data/palestras';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Palestras & Apresentações',
  description:
    'Palestras e apresentações sobre SRE, observabilidade e confiabilidade — slides, fotos e gravações.',
  path: '/palestras',
});

export default function PalestrasPage() {
  return (
    <Container wide className="py-16">
      <SectionHeading eyebrow="# palestras" title="Palestras & Apresentações" />
      <PalestraGrid palestras={palestras} tags={getAllTags()} />
    </Container>
  );
}
