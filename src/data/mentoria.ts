/**
 * Dados da mentoria que não mudam entre idiomas. Nome, descrição e o que
 * cada plano inclui ficam em src/i18n/conteudo/<idioma>.ts, indexados
 * pelo `id`.
 */
export interface PlanoBase {
  id: string;
  /** Preço em reais — o mesmo nos três idiomas, porque é um preço só. */
  preco: string;
  /** true quando o preço é por pessoa (turma), não por sessão. */
  porPessoa?: boolean;
  /** Plano que ganha destaque visual na grade. */
  destaque?: boolean;
}

export const mentoria = {
  /** Caixa que recebe os pedidos do formulário (ver lib/email.ts). */
  email: 'aluiza.primo@gmail.com',

  /*
   * Degraus de preço pensados para caber em bolsos diferentes: quem só
   * quer um diagnóstico rápido, quem quer a sessão completa, quem quer
   * acompanhamento por um mês, e quem prefere dividir o custo numa
   * turma pequena. Os valores são proposta inicial — ajustar aqui e
   * nos textos.
   */
  planos: [
    { id: 'diagnostico', preco: 'R$ 149' },
    { id: 'sessao', preco: 'R$ 499', destaque: true },
    { id: 'pacote', preco: 'R$ 1.290' },
    { id: 'turma', preco: 'R$ 249', porPessoa: true },
  ] satisfies PlanoBase[],
} as const;
