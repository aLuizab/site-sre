/**
 * O nome fica em src/i18n/conteudo/<idioma>.ts porque a empresa atual é
 * descrita genericamente ("uma empresa internacional") e isso traduz.
 */
export interface EmpresaBase {
  id: string;
  url?: string;
  /** true só para a empresa atual — muda o texto da CompaniesRow na Home. */
  atual?: boolean;
}

export const empresas: EmpresaBase[] = [
  { id: 'stone', url: 'https://www.stone.com.br/' },
  { id: 'iti', url: 'https://iti.itau/' },
  { id: 'itau', url: 'https://www.itau.com.br' },
  { id: 'internacional', atual: true },
];
