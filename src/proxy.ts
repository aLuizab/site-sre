import { NextResponse, type NextRequest } from 'next/server';
import { locales, negociarLocale } from '@/i18n/config';

/**
 * Convenção "proxy" do Next 16 — o antigo middleware.ts.
 *
 * Toda página vive sob /<idioma>. Quando a URL não traz prefixo, escolhe
 * o idioma pelo Accept-Language e redireciona — "/" nunca renderiza nada
 * por conta própria, então não existe conteúdo duplicado sem prefixo.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const jaTemLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (jaTemLocale) return NextResponse.next();

  const locale = negociarLocale(request.headers.get('accept-language'));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  /*
   * Fora do proxy: assets do Next, os arquivos de metadados servidos na
   * raiz (sitemap, robots, favicon) e qualquer caminho com extensão —
   * nada disso deve ganhar prefixo de idioma.
   */
  matcher: ['/((?!_next|api|.*\\..*|sitemap.xml|robots.txt).*)'],
};
