import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n/tipos';
import { pt } from '@/i18n/conteudo/pt';
import { en } from '@/i18n/conteudo/en';
import { es } from '@/i18n/conteudo/es';

const dicionarios: Record<Locale, Conteudo> = { pt, en, es };

export function getConteudo(locale: Locale): Conteudo {
  return dicionarios[locale];
}

/**
 * Interpola {chaves} numa string do dicionário.
 * `preencher('Olá, {nome}', { nome: 'Ana' })` -> `'Olá, Ana'`.
 */
export function preencher(
  template: string,
  valores: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (todo, chave: string) =>
    chave in valores ? String(valores[chave]) : todo
  );
}

export type {
  Conteudo,
  ConteudoExperiencia,
  ConteudoPalestra,
  ConteudoPerfil,
  ConteudoSecao,
  Destaque,
} from '@/i18n/tipos';
