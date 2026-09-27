/**
 * Embed de um post do Instagram.
 *
 * Usa o iframe direto (`/p/<codigo>/embed`) em vez do blockquote com o
 * `embed.js` oficial. O blockquote exigiria carregar e executar
 * JavaScript do Instagram dentro da origem do site — ou seja, abrir o
 * `script-src` do CSP para um domínio de terceiro, que passaria a poder
 * ler o DOM da página inteira. O iframe fica isolado na origem dele e
 * custa só uma entrada em `frame-src`.
 *
 * `loading="lazy"`: são vários embeds numa grade, e cada um carrega uma
 * página do Instagram. Sem isso, abrir a home dispararia todos de uma vez.
 */
export function EmbedInstagram({ codigo }: { codigo: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <iframe
        src={`https://www.instagram.com/p/${codigo}/embed`}
        title={`Post do Instagram ${codigo}`}
        loading="lazy"
        scrolling="no"
        allowTransparency
        className="h-[480px] w-full border-0"
      />
    </div>
  );
}
