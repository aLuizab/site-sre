export interface Empresa {
  nome: string;
  logo: string;
  url?: string;
}

/** Empresas fictícias — troque pelos nomes/logos reais antes de publicar. */
export const empresas: Empresa[] = [
  { nome: 'Órbita Cloud', logo: '/logos/orbita-cloud.svg' },
  { nome: 'NimbusTech', logo: '/logos/nimbustech.svg' },
  { nome: 'CloudNine Systems', logo: '/logos/cloudnine-systems.svg' },
];
