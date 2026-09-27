'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, localeInfo, type Locale } from '@/i18n/config';
import { BandeiraBR, BandeiraUS, BandeiraES } from '@/components/icons/FlagIcons';

const BANDEIRAS: Record<Locale, (props: { className?: string }) => React.ReactElement> = {
  pt: BandeiraBR,
  en: BandeiraUS,
  es: BandeiraES,
};

/**
 * Links de verdade (não botões): trocar de idioma muda a URL, então dá
 * para abrir em outra aba, copiar o link em inglês e o Google consegue
 * rastrear as três versões.
 *
 * A bandeira é decorativa. Quem lê por leitor de tela precisa do nome do
 * idioma, não do país — um país não é dono de uma língua —, então o nome
 * vai em .sr-only e a sigla visível faz o papel de rótulo na tela.
 */
export function LanguageSwitcher({
  locale,
  rotulo,
}: {
  locale: Locale;
  rotulo: string;
}) {
  const pathname = usePathname();

  /** Mesma rota, outro prefixo: /pt/palestras/x -> /en/palestras/x */
  function caminhoPara(destino: Locale) {
    const semLocale = pathname.replace(/^\/[^/]+/, '');
    return `/${destino}${semLocale}`;
  }

  return (
    <div className="flex items-center gap-1" role="group" aria-label={rotulo}>
      {locales.map((codigo) => {
        const info = localeInfo[codigo];
        const Bandeira = BANDEIRAS[codigo];
        const ativo = codigo === locale;

        return (
          <Link
            key={codigo}
            href={caminhoPara(codigo)}
            hrefLang={info.htmlLang}
            aria-current={ativo ? 'true' : undefined}
            title={info.nome}
            className={`flex items-center gap-1.5 rounded-full border px-2 py-1 font-mono text-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              ativo
                ? 'border-accent text-accent'
                : 'border-transparent text-muted hover:border-border hover:text-accent'
            }`}
          >
            <Bandeira className={ativo ? '' : 'opacity-70'} />
            <span className="sr-only">{info.nome}</span>
            <span aria-hidden="true">{info.curto}</span>
          </Link>
        );
      })}
    </div>
  );
}
