import { perfil } from '@/data/perfil';
import { socials } from '@/data/socials';
import { SOCIAL_ICONS } from '@/lib/socialIcons';
import { preencher, type Conteudo } from '@/i18n';

export function Footer({ c }: { c: Conteudo }) {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="flex flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between lg:px-12">
        <nav aria-label={c.ui.redesSociais} className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            );
          })}
        </nav>
        <p className="font-mono text-xs text-muted">
          {preencher(c.ui.creditoRodape, { nome: perfil.nome, ano })}
        </p>
      </div>
    </footer>
  );
}
