'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n';

interface Linha {
  id: number;
  comando: string;
  saida: string[];
}

/**
 * Campo de comando do terminal.
 *
 * Só navegação e tema — nada aqui executa coisa nenhuma no servidor. O
 * comando digitado nunca vira HTML: é sempre texto dentro de um nó de
 * texto do React, então não há como injetar markup por aqui.
 *
 * É um extra: quem chega pelo buscador, com JavaScript desligado ou por
 * leitor de tela já leu toda a apresentação acima sem precisar disto.
 */
export function TerminalPrompt({ locale, c }: { locale: Locale; c: Conteudo }) {
  const [historico, setHistorico] = useState<Linha[]>([]);
  const [valor, setValor] = useState('');
  const entrada = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  /** Âncoras da home e páginas, por comando, em cada idioma. */
  const destinos: Record<string, string> = {
    // português
    sobre: '#sobre',
    experiencia: '#experiencia',
    projetos: '#projetos',
    palestras: '#palestras',
    artigos: '/artigos',
    mentoria: '/mentoria',
    materiais: '/materiais',
    // inglês
    about: '#sobre',
    experience: '#experiencia',
    projects: '#projetos',
    talks: '#palestras',
    articles: '/artigos',
    mentoring: '/mentoria',
    resources: '/materiais',
    // espanhol
    proyectos: '#projetos',
    charlas: '#palestras',
    articulos: '/artigos',
    materiales: '/materiais',
  };

  const ajuda = ['ajuda', 'help', 'ayuda'];
  const limpar = ['limpar', 'clear', 'limpiar'];
  const tema = ['tema', 'theme'];

  function executar(bruto: string) {
    const cmd = bruto.trim().toLowerCase();
    if (!cmd) return;

    if (limpar.includes(cmd)) {
      setHistorico([]);
      return;
    }

    let saida: string[];

    if (ajuda.includes(cmd)) {
      saida = [
        c.terminal.ajuda,
        ...c.terminal.comandos.map((x) => `  ${x.nome.padEnd(14)}${x.descricao}`),
      ];
    } else if (tema.includes(cmd)) {
      const novo = resolvedTheme === 'dark' ? 'light' : 'dark';
      setTheme(novo);
      saida = [novo];
    } else if (cmd in destinos) {
      const alvo = destinos[cmd];
      saida = [alvo];
      // Âncora rola na própria página; caminho navega.
      if (alvo.startsWith('#')) {
        document.querySelector(alvo)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(`/${locale}${alvo}`);
      }
    } else {
      saida = [c.terminal.naoEncontrado.replace('{cmd}', cmd)];
    }

    setHistorico((h) => [...h, { id: h.length, comando: bruto.trim(), saida }]);
  }

  return (
    <div className="revela" style={{ animationDelay: '520ms' }}>
      {historico.map((l) => (
        <div key={l.id} className="mb-3">
          <p className="flex gap-2">
            <span className="select-none text-term-accent" aria-hidden="true">
              $
            </span>
            <span>{l.comando}</span>
          </p>
          {/* whitespace-pre para o alinhamento da lista de ajuda. */}
          <div className="mt-1 whitespace-pre pl-4 text-term-muted">
            {l.saida.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
        </div>
      ))}

      {/*
        O <form> existe para o Enter submeter de forma nativa, incluindo
        no teclado virtual do celular, onde keydown é menos confiável.
      */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          executar(valor);
          setValor('');
        }}
        className="flex items-center gap-2"
      >
        <span className="select-none text-term-accent" aria-hidden="true">
          $
        </span>
        <label htmlFor="terminal-cmd" className="sr-only">
          {c.terminal.rotuloEntrada}
        </label>
        <input
          id="terminal-cmd"
          ref={entrada}
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder={c.terminal.dica}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="w-full min-w-0 bg-transparent text-term-fg caret-term-accent outline-none placeholder:text-term-muted/70"
        />
      </form>
    </div>
  );
}
