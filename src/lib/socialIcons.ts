import { YoutubeIcon, LinkedinIcon, InstagramIcon, GithubIcon, type IconComponent } from '@/components/icons/BrandIcons';
import type { SocialIcon } from '@/types/shared';

export const SOCIAL_ICONS: Record<SocialIcon, IconComponent> = {
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  github: GithubIcon,
};
