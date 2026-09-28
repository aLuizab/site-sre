'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { mentoria } from '@/data/mentoria';
import type { Conteudo } from '@/i18n';

/**
 * Formulário de inscrição na mentoria.
 *
 * Ao enviar, monta um e-mail com os campos preenchidos e abre o
 * aplicativo de e-mail da pessoa. Não existe servidor recebendo isso:
 * o site é estático, e o único canal escolhido foi o e-mail.
 *
 * A vantagem é não haver terceiro guardando dado pessoal nem segredo
 * para vazar. O custo é que a pessoa precisa ter um cliente de e-mail
 * configurado — por isso o aviso logo abaixo do botão diz o que vai
 * acontecer, em vez de deixar parecer que "não aconteceu nada".
 */
export function FormularioMentoria({ c }: { c: Conteudo }) {
  const [campos, setCampos] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    cargo: '',
    objetivo: '',
  });

  const mudar = (k: keyof typeof campos) => (e: { target: { value: string } }) =>
    setCampos((v) => ({ ...v, [k]: e.target.value }));

  function enviar(e: React.FormEvent) {
    e.preventDefault();

    const corpo = [
      `${c.mentoria.campoNome}: ${campos.nome}`,
      `${c.mentoria.campoEmail}: ${campos.email}`,
      `${c.mentoria.campoWhatsapp}: ${campos.whatsapp}`,
      `${c.mentoria.campoCargo}: ${campos.cargo}`,
      '',
      `${c.mentoria.campoObjetivo}:`,
      campos.objetivo,
    ].join('\n');

    // encodeURIComponent nos dois: assunto e corpo entram numa URL.
    window.location.href =
      `mailto:${mentoria.email}` +
      `?subject=${encodeURIComponent(c.mentoria.ctaAssunto)}` +
      `&body=${encodeURIComponent(corpo)}`;
  }

  const classeCampo =
    'mt-1.5 w-full rounded-lg border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted/60 focus-visible:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  return (
    <form onSubmit={enviar} className="mt-6 max-w-xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="m-nome" className="text-sm text-muted">
            {c.mentoria.campoNome}
          </label>
          <input
            id="m-nome"
            required
            maxLength={120}
            autoComplete="name"
            value={campos.nome}
            onChange={mudar('nome')}
            className={classeCampo}
          />
        </div>

        <div>
          <label htmlFor="m-email" className="text-sm text-muted">
            {c.mentoria.campoEmail}
          </label>
          <input
            id="m-email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            value={campos.email}
            onChange={mudar('email')}
            className={classeCampo}
          />
        </div>

        <div>
          <label htmlFor="m-zap" className="text-sm text-muted">
            {c.mentoria.campoWhatsapp}
          </label>
          <input
            id="m-zap"
            type="tel"
            required
            maxLength={30}
            autoComplete="tel"
            placeholder="+55 11 90000-0000"
            value={campos.whatsapp}
            onChange={mudar('whatsapp')}
            className={classeCampo}
          />
        </div>

        <div>
          <label htmlFor="m-cargo" className="text-sm text-muted">
            {c.mentoria.campoCargo}
          </label>
          <input
            id="m-cargo"
            maxLength={120}
            value={campos.cargo}
            onChange={mudar('cargo')}
            className={classeCampo}
          />
        </div>
      </div>

      <div>
        <label htmlFor="m-obj" className="text-sm text-muted">
          {c.mentoria.campoObjetivo}
        </label>
        <textarea
          id="m-obj"
          required
          rows={4}
          maxLength={2000}
          aria-describedby="m-obj-dica"
          placeholder={c.mentoria.campoObjetivoDica}
          value={campos.objetivo}
          onChange={mudar('objetivo')}
          className={`${classeCampo} resize-y`}
        />
        <p id="m-obj-dica" className="sr-only">
          {c.mentoria.campoObjetivoDica}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-black"
        >
          <Mail size={16} aria-hidden="true" />
          {c.mentoria.formBotao}
        </button>
        <p className="text-xs text-muted">{c.mentoria.formNota}</p>
      </div>
    </form>
  );
}
