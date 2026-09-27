import Link from 'next/link';
import { perfil } from '@/data/perfil';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n';

export function Header({ locale, c }: { locale: Locale; c: Conteudo }) {
  const navItems = [
    { href: `/${locale}#sobre`, label: c.nav.sobre },
    { href: `/${locale}#experiencia`, label: c.nav.experiencia },
    { href: `/${locale}#projetos`, label: c.nav.projetos },
    { href: `/${locale}#palestras`, label: c.nav.palestras },
    // Página própria, não âncora da home.
    { href: `/${locale}/artigos`, label: c.nav.artigos },
  ];

  return (
    <header className="border-b border-border">
      <Container wide>
        <div className="flex h-16 flex-wrap items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            className="font-mono text-sm font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {perfil.nome}
          </Link>
          <nav aria-label={c.ui.navPrincipal} className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} rotulo={c.ui.seletorIdioma} />
            <ThemeToggle paraClaro={c.ui.temaParaClaro} paraEscuro={c.ui.temaParaEscuro} />
          </nav>
        </div>
      </Container>
    </header>
  );
}
