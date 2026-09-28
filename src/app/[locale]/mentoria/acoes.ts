'use server';

import { headers } from 'next/headers';
import { enviarEmailMentoria } from '@/lib/email';
import { isLocale, defaultLocale } from '@/i18n/config';

export type ResultadoMentoria = {
  estado: 'inicial' | 'ok' | 'invalido' | 'limite' | 'erro';
};

/*
 * Limite de envios por IP, em memória.
 *
 * Suficiente para o cenário real (uma instância no Railway, formulário de
 * baixo volume) e barra o básico: um robô ou uma pessoa apertando o
 * botão dez vezes. Não é defesa contra ataque distribuído — para isso
 * seria preciso um limitador compartilhado (Redis) ou o WAF da
 * plataforma. O mapa é podado a cada chamada para não crescer sem fim.
 */
const JANELA_MS = 60 * 60 * 1000;
const MAX_POR_JANELA = 3;
const envios = new Map<string, number[]>();

function excedeuLimite(ip: string): boolean {
  const agora = Date.now();
  for (const [k, ts] of envios) {
    const vivos = ts.filter((t) => agora - t < JANELA_MS);
    if (vivos.length === 0) envios.delete(k);
    else envios.set(k, vivos);
  }
  const lista = envios.get(ip) ?? [];
  if (lista.length >= MAX_POR_JANELA) return true;
  lista.push(agora);
  envios.set(ip, lista);
  return false;
}

/** Uma linha só, sem caracteres de controle, aparada e com tamanho máximo. */
function linha(v: FormDataEntryValue | null, max: number): string {
  if (typeof v !== 'string') return '';
  return v.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

/** Várias linhas: só tira caracteres de controle que não sejam quebra. */
function paragrafo(v: FormDataEntryValue | null, max: number): string {
  if (typeof v !== 'string') return '';
  return v.replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, ' ').trim().slice(0, max);
}

const EMAIL = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;
/** Dígitos, espaço, +, -, ( ) — o formato varia por país, então só o mínimo. */
const TELEFONE = /^[+\d][\d\s().-]{6,29}$/;

export async function inscreverMentoria(
  _anterior: ResultadoMentoria,
  formData: FormData
): Promise<ResultadoMentoria> {
  // Campo-armadilha: pessoa não vê; robô preenche. Fingimos sucesso.
  if (formData.get('empresa')) return { estado: 'ok' };

  const nome = linha(formData.get('nome'), 120);
  const email = linha(formData.get('email'), 254);
  const whatsapp = linha(formData.get('whatsapp'), 30);
  const cargo = linha(formData.get('cargo'), 120);
  const objetivo = paragrafo(formData.get('objetivo'), 2000);
  const idiomaBruto = linha(formData.get('idioma'), 5);
  const idioma = isLocale(idiomaBruto) ? idiomaBruto : defaultLocale;

  if (
    nome.length < 2 ||
    !EMAIL.test(email) ||
    !TELEFONE.test(whatsapp) ||
    objetivo.length < 10
  ) {
    return { estado: 'invalido' };
  }

  const h = await headers();
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() || h.get('x-real-ip') || 'desconhecido';
  if (excedeuLimite(ip)) return { estado: 'limite' };

  const resultado = await enviarEmailMentoria({ nome, email, whatsapp, cargo, objetivo, idioma });

  if (resultado.estado === 'ok') return { estado: 'ok' };

  // Sem chave configurada ou provedor fora: a pessoa vê "erro" genérico;
  // o motivo real fica no log do servidor.
  if (resultado.estado === 'naoConfigurado') {
    console.error('[mentoria] RESEND_API_KEY não configurada — inscrição perdida de', email);
  }
  return { estado: 'erro' };
}
