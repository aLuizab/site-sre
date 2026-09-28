import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Lock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { materiais, getMaterialBySlug } from '@/data/materiais';
import { getCorpoMaterial } from '@/data/materiais/index';
import { buildMetadata } from '@/lib/seo';
import { locales, isLocale, defaultLocale } from '@/i18n/config';
import { getConteudo, preencher } from '@/i18n';

export function generateStaticParams() {
  return locales.flatMap((locale) => materiais.map((m) => ({ locale, slug: m.slug })));
}

export async function generateMetadata(
  props: PageProps<'/[locale]/materiais/[slug]'>
): Promise<Metadata> {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) return {};
  const texto = getConteudo(locale).materiais.itens[slug];
  if (!texto) return {};
  return buildMetadata({
    title: texto.titulo,
    description: texto.descricao,
    locale,
    caminho: `/materiais/${slug}`,
  });
}

export default async function MaterialPage(props: PageProps<'/[locale]/materiais/[slug]'>) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale)) notFound();

  const material = getMaterialBySlug(slug);
  const c = getConteudo(locale);
  const texto = c.materiais.itens[slug];
  if (!material || !texto) notFound();

  const corpo = material.gratuito ? getCorpoMaterial(slug) : undefined;

  return (
    <Container className="py-16">
      <Link
        href={`/${locale}/materiais`}
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {c.materiais.voltarMateriais}
      </Link>

      <div className="mt-6">
        <p className="font-mono text-xs text-accent">
          {material.gratuito ? c.materiais.seloGratuito : c.materiais.seloMentoria}
          <span className="text-muted">
            {' '}· {preencher(c.materiais.leitura, { min: material.leituraMin })}
          </span>
        </p>
        <SectionHeading eyebrow={c.materiais.eyebrow} title={texto.titulo} />
        <p className="-mt-2 max-w-2xl text-muted">{texto.descricao}</p>
      </div>

      {/* O corpo é escrito só em português; nas outras línguas, avisa. */}
      {corpo && locale !== defaultLocale ? (
        <p className="mt-8 rounded-lg border border-border px-4 py-3 text-sm text-muted">
          {c.materiais.avisoIdioma}
        </p>
      ) : null}

      {corpo ? (
        <article lang="pt-BR" className="mt-10 max-w-2xl">
          <p className="text-muted">{corpo.intro}</p>

          {corpo.secoes.map((s) => (
            <section key={s.titulo} className="mt-10">
              <h2 className="text-lg font-semibold tracking-tight">{s.titulo}</h2>
              {s.paragrafos?.map((p, i) => (
                <p key={i} className="mt-3 text-muted">
                  {p}
                </p>
              ))}
              {s.itens ? (
                <ul className="mt-3 space-y-2">
                  {s.itens.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted">
                      <span className="select-none text-accent" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {corpo.fechamento ? (
            <p className="mt-10 border-l-2 border-accent pl-4 text-muted">{corpo.fechamento}</p>
          ) : null}
        </article>
      ) : (
        <section className="mt-10 max-w-2xl rounded-xl border border-border p-6">
          <p className="flex items-start gap-3 text-muted">
            <Lock size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <span>{c.materiais.incluidoNaMentoria}</span>
          </p>
          <Link
            href={`/${locale}/mentoria`}
            className="mt-5 inline-flex items-center rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-black"
          >
            {c.materiais.verMentoria}
          </Link>
        </section>
      )}
    </Container>
  );
}
