/**
 * Artigos em destaque na home, por id do post no Medium.
 *
 * O id é o código no fim da URL do artigo — em
 * `medium.com/@aluiza.primo/...-6597c34809f4`, o id é `6597c34809f4`.
 *
 * O feed RSS do Medium não informa visualizações nem palmas, então não
 * há como o site deduzir sozinho quais artigos são os mais relevantes.
 * Liste aqui os que quiser no topo, na ordem desejada; o resto entra
 * depois, do mais recente para o mais antigo.
 *
 * Deixe vazio para simplesmente usar os mais recentes.
 */
export const artigosDestaque: string[] = [];
