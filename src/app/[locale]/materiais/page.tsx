import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, Lock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { materiais } from '@/data/materiais';
import { buildMetadata } from '@/lib/seo';
import { locales, isLocale } from '@/i18n/config';
import { getConteudo, preencher } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: PageProps<'/[locale]/materiais'>
): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) return {};
  const c = getConteudo(locale);
  return buildMetadata({
    title: c.materiais.tituloPagina,
    description: c.materiais.descricao,
    locale,
    caminho: '/materiais',
  });
}

export default async function MateriaisPage(props: PageProps<'/[locale]/materiais'>) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const c = getConteudo(locale);

  const gratuitos = materiais.filter((m) => m.gratuito);
  const daMentoria = materiais.filter((m) => !m.gratuito);

  const Card = ({ slug, gratuito, leituraMin }: (typeof materiais)[number]) => {
    const texto = c.materiais.itens[slug];
    if (!texto) return null;
    return (
      <li>
        <Link
          href={`/${locale}/materiais/${slug}`}
          className="group flex h-full flex-col rounded-xl border border-border p-5 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {/*
            flex-wrap + nowrap em cada pedaço: se não couber, o tempo de
            leitura desce inteiro para a linha de baixo, em vez de o selo
            quebrar no meio ("incluído na / mentoria").
          */}
          <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-mono text-xs text-accent">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              {gratuito ? (
                <BookOpen size={14} aria-hidden="true" />
              ) : (
                <Lock size={14} aria-hidden="true" />
              )}
              {gratuito ? c.materiais.seloGratuito : c.materiais.seloMentoria}
            </span>
            <span className="whitespace-nowrap text-muted">
              · {preencher(c.materiais.leitura, { min: leituraMin })}
            </span>
          </p>
          <h3 className="mt-2 font-medium group-hover:text-accent">{texto.titulo}</h3>
          <p className="mt-2 text-sm text-muted">{texto.descricao}</p>
        </Link>
      </li>
    );
  };

  return (
    <Container wide className="py-16">
      <Link
        href={`/${locale}`}
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {c.ui.voltarInicio}
      </Link>

      <div className="mt-6">
        <SectionHeading eyebrow={c.materiais.eyebrow} title={c.materiais.tituloPagina} />
        <p className="-mt-2 mb-8 max-w-2xl text-muted">{c.materiais.descricao}</p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gratuitos.map((m) => (
          <Card key={m.slug} {...m} />
        ))}
      </ul>

      {daMentoria.length > 0 ? (
        <section className="mt-14">
          <h2 className="font-mono text-sm text-muted">{c.materiais.seloMentoria}</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {daMentoria.map((m) => (
              <Card key={m.slug} {...m} />
            ))}
          </ul>
        </section>
      ) : null}
    </Container>
  );
}
