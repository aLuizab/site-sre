import type { SocialIcon } from '@/types/shared';

export interface SocialLink {
  id: SocialIcon;
  icon: SocialIcon;
  label: string;
  url: string;
  /** true só para a rede que deve ganhar destaque visual (pill preenchida). */
  destaque?: boolean;
  contador?: string;
}

export const socials: SocialLink[] = [
  {
    id: 'youtube',
    icon: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/@aluizaprimo',
    destaque: true,
    contador: '12,4 mil inscritos',
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aluizaprimo',
  },
  {
    id: 'instagram',
    icon: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/aluizaprimo',
  },
  {
    id: 'github',
    icon: 'github',
    label: 'GitHub',
    url: 'https://github.com/aluizaprimo',
  },
];
