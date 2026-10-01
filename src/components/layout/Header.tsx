import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { perfil } from '@/data/perfil';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n';

/**
 * Cabeçalho com dois arranjos.
 *
 * Em telas largas (lg+) os links ficam em linha. Abaixo disso eles
 * não cabem: quebravam em duas fileiras e empurravam o cabeçalho, e no
 * celular viravam um amontoado. Então viram um menu recolhido.
 *
 * O menu é um <details>: disclosure nativo, que abre e fecha por teclado
 * e é anunciado por leitor de tela sem ARIA manual, e que funciona
 * mesmo se o JavaScript não carregar.
 *
 * O <summary> precisa ser o PRIMEIRO FILHO do <details> — se ficar
 * aninhado num <div>, o navegador entende que falta summary e desenha um
 * "Saiba mais" próprio no topo. Por isso o nome fica fora do <details>,
 * e o painel é posicionado por absolute em vez de ficar no fluxo.
 */
export function Header({ locale, c }: { locale: Locale; c: Conteudo }) {
  const navItems = [
    { href: `/${locale}#projetos`, label: c.nav.projetos },
    { href: `/${locale}#comunidade`, label: c.nav.comunidade },
    // Páginas próprias, não âncoras da home.
    { href: `/${locale}/artigos`, label: c.nav.artigos },
    { href: `/${locale}/mentoria`, label: c.nav.mentoria },
    { href: `/${locale}/materiais`, label: c.nav.materiais },
  ];

  const classeLink =
    'text-sm text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  const nome = (
    <Link
      href={`/${locale}`}
      // whitespace-nowrap: com sete itens no menu, o nome quebrava em
      // duas linhas antes de o menu ceder. O nome não cede; o menu, sim.
      className="shrink-0 whitespace-nowrap font-mono text-sm font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {perfil.nome}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-6">
          {nome}

          {/* Menu recolhido, até lg. */}
          <details className="group lg:hidden">
            <summary
              aria-label={c.ui.navPrincipal}
              className="flex cursor-pointer list-none items-center rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden"
            >
              <Menu size={18} aria-hidden="true" className="group-open:hidden" />
              <X size={18} aria-hidden="true" className="hidden group-open:block" />
            </summary>

            {/*
              Absolute e ancorado no <header>: o painel cobre a largura
              inteira e passa por cima do conteúdo, em vez de empurrar a
              página para baixo ao abrir.
            */}
            <nav
              aria-label={c.ui.navPrincipal}
              className="absolute inset-x-0 top-full z-40 border-b border-border bg-background px-6 pb-6 pt-4 shadow-lg"
            >
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={classeLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
                <LanguageSwitcher locale={locale} rotulo={c.ui.seletorIdioma} />
                <ThemeToggle
                  paraClaro={c.ui.temaParaClaro}
                  paraEscuro={c.ui.temaParaEscuro}
                />
              </div>
            </nav>
          </details>

          {/* Arranjo em linha, a partir de lg. */}
          <nav
            aria-label={c.ui.navPrincipal}
            className="hidden items-center gap-x-4 lg:flex"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={classeLink}>
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} rotulo={c.ui.seletorIdioma} />
            <ThemeToggle
              paraClaro={c.ui.temaParaClaro}
              paraEscuro={c.ui.temaParaEscuro}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
