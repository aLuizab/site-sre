import Link from 'next/link';
import { perfil } from '@/data/perfil';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

const NAV_ITEMS = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#experiencia', label: 'Experiência' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#palestras', label: 'Palestras' },
];

export function Header() {
  return (
    <header className="border-b border-border">
      <Container wide>
        <div className="flex h-16 flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {perfil.nome}
          </Link>
          <nav aria-label="Navegação principal" className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  );
}
