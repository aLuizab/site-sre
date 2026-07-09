import { socials } from '@/data/socials';
import { SOCIAL_ICONS } from '@/lib/socialIcons';
import { PillButton } from '@/components/ui/PillButton';
import { FadeIn } from '@/components/ui/FadeIn';

export function SocialLinks() {
  return (
    <FadeIn>
      <ul className="flex flex-wrap gap-3">
        {socials.map((social) => (
          <li key={social.id}>
            <PillButton
              href={social.url}
              icon={SOCIAL_ICONS[social.icon]}
              label={social.label}
              sublabel={social.contador}
              destaque={social.destaque}
            />
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
