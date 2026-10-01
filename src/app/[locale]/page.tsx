import { notFound } from 'next/navigation';
import { Hero } from '@/components/home/Hero';
import { ProjetosSection } from '@/components/home/ProjetosSection';
import { ComunidadeSection } from '@/components/home/ComunidadeSection';
import { isLocale } from '@/i18n/config';
import { getConteudo } from '@/i18n';

/**
 * Home enxuta e em tela cheia: quem eu sou, o que eu construo e o que eu
 * compartilho. Não é currículo — trajetória detalhada fica no LinkedIn.
 */
export default async function Home(props: PageProps<'/[locale]'>) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getConteudo(locale);

  return (
    <>
      <Hero locale={locale} c={c} />
      <ProjetosSection c={c} />
      <ComunidadeSection locale={locale} c={c} />
    </>
  );
}
