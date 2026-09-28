import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormularioMentoria } from '@/components/mentoria/FormularioMentoria';
import { mentoria } from '@/data/mentoria';
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

/** Lista com marcador de check — "para quem é" e "o que você leva". */
function ListaCheck({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {itens.map((item) => (
        <li key={item} className="flex gap-3 text-muted">
          <Check className="mt-1 shrink-0 text-accent" size={16} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function MentoriaPage(props: PageProps<'/[locale]/mentoria'>) {
  const { locale } = await props.params;
  if (!isLocale(locale)) notFound();
  const c = getConteudo(locale);
  const m = c.mentoria;

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
        <SectionHeading eyebrow={m.eyebrow} title={m.tituloPagina} />
        <p className="-mt-2 max-w-2xl text-muted">{m.resumo}</p>
        {/* Quem chega decidido pula direto para o formulário. */}
        <a
          href="#agendar"
          className="mt-6 inline-flex items-center rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-black"
        >
          {m.ctaBotao}
        </a>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">{m.paraQuemTitulo}</h2>
        <ListaCheck itens={m.paraQuem} />
      </section>

      {/* Princípios: em que a metodologia se apoia, antes das etapas. */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">{m.principiosTitulo}</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {m.principios.map((p) => (
            <li key={p.titulo} className="rounded-xl border border-border p-5">
              <h3 className="font-medium">{p.titulo}</h3>
              <p className="mt-2 text-sm text-muted">{p.descricao}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">{m.metodologiaTitulo}</h2>
        <p className="mt-3 max-w-2xl text-muted">{m.metodologiaIntro}</p>
        {/* <ol>: a ordem das etapas é parte da informação. */}
        <ol className="mt-6">
          {m.etapas.map((etapa, i) => (
            <li key={etapa.titulo} className="border-b border-border py-5 last:border-b-0">
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
        <h2 className="text-xl font-semibold tracking-tight">{m.entregaveisTitulo}</h2>
        <ListaCheck itens={m.entregaveis} />
      </section>

      {/* Planos: preço vem de data/mentoria.ts; nome e itens, do dicionário. */}
      <section id="planos" className="mt-14 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight">{m.planosTitulo}</h2>
        <p className="mt-3 max-w-2xl text-muted">{m.planosIntro}</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {mentoria.planos.map((plano) => {
            const texto = m.planos[plano.id];
            if (!texto) return null;
            return (
              <li
                key={plano.id}
                className={`flex flex-col rounded-xl border p-5 ${
                  plano.destaque ? 'border-accent' : 'border-border'
                }`}
              >
                <h3 className="font-medium">{texto.nome}</h3>
                <p className="mt-1 text-2xl font-semibold tracking-tight">
                  {plano.preco}
                  {plano.porPessoa ? (
                    <span className="ml-1 text-sm font-normal text-muted">{m.porPessoa}</span>
                  ) : null}
                </p>
                <p className="mt-2 text-sm text-muted">{texto.descricao}</p>
                <ul className="mt-4 space-y-1.5">
                  {texto.inclui.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <Check className="mt-0.5 shrink-0 text-accent" size={14} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-sm">
          <Link
            href={`/${locale}/materiais`}
            className="text-muted underline decoration-accent underline-offset-4 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {m.materiaisChamada}
          </Link>
        </p>
      </section>

      <section className="mt-14 rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold tracking-tight">{m.ressalvaTitulo}</h2>
        <p className="mt-3 text-muted">{m.ressalva}</p>
      </section>

      <section id="agendar" className="mt-14 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight">{m.formTitulo}</h2>
        <p className="mt-2 max-w-xl text-muted">{m.formIntro}</p>
        <FormularioMentoria locale={locale} c={c} />
      </section>
    </Container>
  );
}
