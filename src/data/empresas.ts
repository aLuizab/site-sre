export interface Empresa {
  nome: string;
  logo: string;
  url?: string;
  /** true só para a empresa atual — muda o texto da CompaniesRow na Home. */
  atual?: boolean;
}

/**
 * "Empresa internacional" é um placeholder genérico — troque `nome` (e o
 * logo em /public/logos/) pelo nome real quando quiser divulgá-lo.
 */
export const empresas: Empresa[] = [
  { nome: 'Stone Pagamentos', logo: '/logos/stone-pagamentos.svg' },
  { nome: 'Itaú', logo: '/logos/itau.svg' },
  { nome: 'uma empresa internacional', logo: '/logos/empresa-internacional.svg', atual: true },
];
