import { getUrlPublicacao } from '@/lib/substack';

/**
 * Widget oficial de inscrição do Substack.
 *
 * É o iframe que o próprio Substack serve em /embed — quem valida o
 * e-mail, confirma e cuida do descadastro é ele, na página dele. Por
 * isso não há campo de e-mail nosso aqui: seria um segundo formulário
 * para a mesma lista.
 *
 * O visual vem do Substack (fundo claro, botão laranja) e não segue a
 * paleta do site. A moldura abaixo encosta o widget no estilo daqui sem
 * tentar reestilizar o conteúdo do iframe, o que seria impossível de
 * qualquer forma: é outra origem.
 */
export function EmbedSubstack({ titulo }: { titulo: string }) {
  return (
    <section
      aria-labelledby="titulo-newsletter"
      className="rounded-xl border border-border bg-background/60 p-5 backdrop-blur"
    >
      <h2
        id="titulo-newsletter"
        className="mb-3 font-mono text-sm text-accent"
      >
        {titulo}
      </h2>

      <div className="overflow-hidden rounded-lg border border-border">
        <iframe
          src={`${getUrlPublicacao()}/embed`}
          title={titulo}
          loading="lazy"
          scrolling="no"
          className="h-[150px] w-full border-0 bg-white"
        />
      </div>
    </section>
  );
}
