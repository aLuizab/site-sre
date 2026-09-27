/**
 * Posts do Instagram exibidos no site.
 *
 * Por que é na mão: o Instagram não tem feed público. A Basic Display
 * API foi desligada em dezembro de 2024, e a Graph API que sobrou exige
 * conta Business ligada a uma Página do Facebook, um app na Meta e um
 * token renovado a cada 60 dias. O perfil público não expõe post algum
 * para quem não está logado.
 *
 * Então: cole aqui o link de cada post que quiser mostrar. O site
 * renderiza o embed oficial do Instagram, que sempre mostra a versão
 * atual do post — se você editar a legenda lá, muda aqui também.
 *
 * Como pegar o link: no post, menu (…) → "Copiar link".
 * Formato aceito: https://www.instagram.com/p/CODIGO/
 *                 https://www.instagram.com/reel/CODIGO/
 *
 * Deixe vazio para a seção não aparecer.
 */
export const instagramPosts: string[] = [];

/** Extrai o código do post de uma URL do Instagram; null se não casar. */
export function codigoDoPost(url: string): string | null {
  const m = url.match(/instagram\.com\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)/);
  return m?.[1] ?? null;
}
