import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { mentoria } from '@/data/mentoria';
import { FormularioMentoria } from '@/components/mentoria/FormularioMentoria';
import { buildMetadata } from '@/lib/seo';
import { locales, isLocale } from '@/i18n/config';
import { getConteudo } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: PageProps<'/[locale]/mentoria'>
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};

  const c = getConteudo(locale);

  return buildMetadata({
    title: c.mentoria.tituloPagina,
    description: c.mentoria.resumo,
    locale,
    caminho: '/mentoria',
  });
}

export default async function MentoriaPage(props: PageProps<'/[locale]/mentoria'>) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();

  const c = getConteudo(locale);


  return (
    <Container className="py-16">
      <Link
        href={`/${locale}`}
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {c.ui.voltarInicio}
      </Link>

      <div className="mt-6">
        <SectionHeading
          eyebrow={c.mentoria.eyebrow}
          title={c.mentoria.tituloPagina}
        />
        <p className="-mt-2 max-w-2xl text-muted">{c.mentoria.resumo}</p>
      </div>

      {/* Preço e chamada juntos: quem chega decidido não precisa rolar. */}
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-xl border border-border p-6">
        <div>
          <p className="text-3xl font-semibold tracking-tight">{mentoria.preco}</p>
          <p className="mt-1 text-sm text-muted">{c.mentoria.precoNota}</p>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">
          {c.mentoria.paraQuemTitulo}
        </h2>
        <ul className="mt-4 space-y-2">
          {c.mentoria.paraQuem.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <Check
                className="mt-1 shrink-0 text-accent"
                size={16}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">
          {c.mentoria.metodologiaTitulo}
        </h2>
        <p className="mt-3 max-w-2xl text-muted">{c.mentoria.metodologiaIntro}</p>

        {/* <ol> porque a ordem das etapas é parte da informação. */}
        <ol className="mt-6">
          {c.mentoria.etapas.map((etapa, i) => (
            <li
              key={etapa.titulo}
              className="border-b border-border py-5 last:border-b-0"
            >
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-medium">{etapa.titulo}</h3>
                <span className="font-mono text-xs text-muted">{etapa.duracao}</span>
              </div>
              <p className="mt-2 text-muted">{etapa.descricao}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">
          {c.mentoria.entregaveisTitulo}
        </h2>
        <ul className="mt-4 space-y-2">
          {c.mentoria.entregaveis.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <Check
                className="mt-1 shrink-0 text-accent"
                size={16}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold tracking-tight">
          {c.mentoria.ressalvaTitulo}
        </h2>
        <p className="mt-3 text-muted">{c.mentoria.ressalva}</p>
      </section>

      <section id="agendar" className="mt-14 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight">
          {c.mentoria.formTitulo}
        </h2>
        <p className="mt-2 max-w-xl text-muted">{c.mentoria.formIntro}</p>
        <FormularioMentoria c={c} />
      </section>
    </Container>
  );
}
