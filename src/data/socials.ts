import type { SocialIcon } from '@/types/shared';

/**
 * URL e rótulo são nomes de marca e não traduzem. O contador ("12,4 mil
 * inscritos") traduz e fica em src/i18n/conteudo/<idioma>.ts.
 */
export interface SocialLink {
  id: SocialIcon;
  icon: SocialIcon;
  label: string;
  url: string;
  /** true só para a rede que deve ganhar destaque visual (pill preenchida). */
  destaque?: boolean;
}

export const socials: SocialLink[] = [
  {
    id: 'youtube',
    icon: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/@analuiizaprimo',
    destaque: true,
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/analuizaprimo',
  },
  {
    id: 'instagram',
    icon: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/aluiza.tech',
  },
  {
    id: 'github',
    icon: 'github',
    label: 'GitHub',
    url: 'https://github.com/aLuizab',
  },
];
