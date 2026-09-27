import { getUrlPublicacao } from '@/lib/substack';
import type { Conteudo } from '@/i18n';

/**
 * Formulário de inscrição na newsletter.
 *
 * Posta direto para o Substack, do navegador, no endpoint `nojs=true` —
 * o mesmo que o widget oficial usa como alternativa sem JavaScript.
 *
 * Por que não pelo servidor: tentar esse POST a partir do Node leva 403.
 * O Substack tem proteção anti-bot que reprova a impressão TLS de quem
 * não é navegador de verdade (o mesmo POST via curl passa; via `fetch`
 * do Node, não). Um proxy no servidor funcionaria em dev e quebraria em
 * produção.
 *
 * Por que não o <iframe> oficial: é branco com laranja do Substack e
 * destoa do resto do site.
 *
 * O custo desta escolha: ao enviar, a pessoa vai para a página de
 * confirmação do Substack em vez de continuar aqui. Em troca, o
 * formulário tem a cara do site, funciona sem JavaScript e não depende
 * de nada que possa ser bloqueado.
 */
export function FormularioNewsletter({ c }: { c: Conteudo }) {
  const base = getUrlPublicacao();

  return (
    <form
      action={`${base}/api/v1/free?nojs=true`}
      method="post"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 max-w-md"
    >
      {/* Campos que o widget do Substack envia; vazios são aceitos. */}
      <input type="hidden" name="source" value="embed" />
      <input type="hidden" name="first_url" value={`${base}/`} />
      <input type="hidden" name="current_url" value={`${base}/`} />

      <label htmlFor="email" className="block text-sm text-muted">
        {c.newsletter.rotuloEmail}
      </label>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder={c.newsletter.placeholderEmail}
          aria-describedby="newsletter-privacidade"
          className="w-full rounded-full border border-border bg-transparent px-4 py-2 text-sm placeholder:text-muted/60 focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full border border-accent bg-accent px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-black"
        >
          {c.newsletter.botao}
        </button>
      </div>

      <p id="newsletter-privacidade" className="mt-3 text-xs text-muted">
        {c.newsletter.privacidade}
      </p>
    </form>
  );
}
