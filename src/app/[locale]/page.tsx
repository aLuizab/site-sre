import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { TerminalHero } from '@/components/home/TerminalHero';
import { SocialLinks } from '@/components/home/SocialLinks';
import { ProjetosSection } from '@/components/home/ProjetosSection';
import { ComunidadeSection } from '@/components/home/ComunidadeSection';
import { isLocale } from '@/i18n/config';
import { getConteudo } from '@/i18n';

/**
 * Home enxuta: quem eu sou, o que eu construo e o que eu compartilho.
 * Não é currículo — trajetória detalhada fica no LinkedIn.
 */
export default async function Home(props: PageProps<'/[locale]'>) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getConteudo(locale);

  return (
    <>
      <TerminalHero locale={locale} c={c} />
      <Container>
        <div className="pb-8">
          <SocialLinks locale={locale} c={c} />
        </div>
      </Container>
      <ProjetosSection c={c} />
      <ComunidadeSection locale={locale} c={c} />
    </>
  );
}
