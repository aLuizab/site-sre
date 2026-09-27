export const locales = ['pt', 'en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export interface LocaleInfo {
  /** Rótulo no seletor, escrito no próprio idioma. */
  nome: string;
  /** Sigla curta, usada no seletor compacto. */
  curto: string;
  /** Valor de <html lang>. */
  htmlLang: string;
  /** Tag BCP-47 para Intl (datas, listas). */
  intl: string;
  /** Formato que o Open Graph espera. */
  og: string;
}

export const localeInfo: Record<Locale, LocaleInfo> = {
  pt: {
    nome: 'Português',
    curto: 'PT',
    htmlLang: 'pt-BR',
    intl: 'pt-BR',
    og: 'pt_BR',
  },
  en: {
    nome: 'English',
    curto: 'EN',
    htmlLang: 'en',
    intl: 'en-US',
    og: 'en_US',
  },
  es: {
    nome: 'Español',
    curto: 'ES',
    htmlLang: 'es',
    intl: 'es-ES',
    og: 'es_ES',
  },
};

export function isLocale(valor: string): valor is Locale {
  return (locales as readonly string[]).includes(valor);
}

/**
 * Escolhe o melhor idioma a partir do header Accept-Language, caindo no
 * padrão quando nenhum dos oferecidos serve. Implementação própria porque
 * a negociação aqui é trivial (3 idiomas, sem regiões) e não justifica
 * trazer @formatjs/intl-localematcher para o bundle do middleware.
 */
export function negociarLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const preferidos = acceptLanguage
    .split(',')
    .map((parte) => {
      const [tag, ...params] = parte.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { tag: tag.trim().toLowerCase(), q: q ? Number(q.split('=')[1]) : 1 };
    })
    .filter((p) => p.tag && !Number.isNaN(p.q))
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferidos) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}
