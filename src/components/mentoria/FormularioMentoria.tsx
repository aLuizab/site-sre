'use client';

import { useActionState, useEffect, useRef } from 'react';
import { Check, AlertCircle, Send } from 'lucide-react';
import { inscreverMentoria, type ResultadoMentoria } from '@/app/[locale]/mentoria/acoes';
import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n';

const INICIAL: ResultadoMentoria = { estado: 'inicial' };

/**
 * Formulário de inscrição na mentoria.
 *
 * Envia por Server Action: o servidor manda o e-mail (lib/email.ts) e a
 * pessoa nunca sai da página nem precisa de cliente de e-mail. É um
 * <form> de verdade, então também funciona sem JavaScript — só sem a
 * mensagem de status atualizada na hora.
 */
export function FormularioMentoria({ locale, c }: { locale: Locale; c: Conteudo }) {
  const [resultado, acao, enviando] = useActionState(inscreverMentoria, INICIAL);
  const form = useRef<HTMLFormElement>(null);

  // Deu certo: limpa os campos, mas mantém a mensagem de sucesso à vista.
  useEffect(() => {
    if (resultado.estado === 'ok') form.current?.reset();
  }, [resultado]);

  const mensagens: Record<ResultadoMentoria['estado'], string | null> = {
    inicial: null,
    ok: c.mentoria.formSucesso,
    invalido: c.mentoria.formInvalido,
    limite: c.mentoria.formLimite,
    erro: c.mentoria.formErro,
  };
  const mensagem = mensagens[resultado.estado];
  const deuCerto = resultado.estado === 'ok';

  const classeCampo =
    'mt-1.5 w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted/60 focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60';

  return (
    <form ref={form} action={acao} className="mt-6 max-w-xl space-y-4">
      <input type="hidden" name="idioma" value={locale} />

      {/* Campo-armadilha para robôs: invisível e fora da tabulação. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="m-empresa">Empresa</label>
        <input id="m-empresa" name="empresa" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset disabled={enviando} className="contents">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="m-nome" className="text-sm text-muted">
              {c.mentoria.campoNome}
            </label>
            <input
              id="m-nome"
              name="nome"
              required
              minLength={2}
              maxLength={120}
              autoComplete="name"
              className={classeCampo}
            />
          </div>

          <div>
            <label htmlFor="m-email" className="text-sm text-muted">
              {c.mentoria.campoEmail}
            </label>
            <input
              id="m-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              className={classeCampo}
            />
          </div>

          <div>
            <label htmlFor="m-zap" className="text-sm text-muted">
              {c.mentoria.campoWhatsapp}
            </label>
            <input
              id="m-zap"
              name="whatsapp"
              type="tel"
              required
              maxLength={30}
              autoComplete="tel"
              placeholder="+55 11 90000-0000"
              className={classeCampo}
            />
          </div>

          <div>
            <label htmlFor="m-cargo" className="text-sm text-muted">
              {c.mentoria.campoCargo}
            </label>
            <input id="m-cargo" name="cargo" maxLength={120} className={classeCampo} />
          </div>
        </div>

        <div>
          <label htmlFor="m-obj" className="text-sm text-muted">
            {c.mentoria.campoObjetivo}
          </label>
          <textarea
            id="m-obj"
            name="objetivo"
            required
            minLength={10}
            rows={4}
            maxLength={2000}
            placeholder={c.mentoria.campoObjetivoDica}
            className={`${classeCampo} resize-y`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-black"
          >
            <Send size={16} aria-hidden="true" />
            {enviando ? c.mentoria.formEnviando : c.mentoria.formBotao}
          </button>
          <p className="text-xs text-muted">{c.mentoria.formNota}</p>
        </div>
      </fieldset>

      {/* aria-live: o resultado aparece sem recarregar, e precisa ser anunciado. */}
      <p role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
        {mensagem ? (
          <span className={`inline-flex items-start gap-2 ${deuCerto ? 'text-accent' : 'text-muted'}`}>
            {deuCerto ? (
              <Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            ) : (
              <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            )}
            {mensagem}
          </span>
        ) : null}
      </p>
    </form>
  );
}
