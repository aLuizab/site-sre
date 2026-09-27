import { socials } from '@/data/socials';
import { SOCIAL_ICONS } from '@/lib/socialIcons';
import { PillButton } from '@/components/ui/PillButton';
import { FadeIn } from '@/components/ui/FadeIn';
import { getInscritos } from '@/lib/youtube';
import { localeInfo, type Locale } from '@/i18n/config';
import { preencher, type Conteudo } from '@/i18n';

/**
 * O contador de inscritos vem do YouTube a cada revalidação, em vez de
 * ficar chumbado no dicionário — número escrito à mão envelhece e vira
 * mentira. Se a busca falhar, o botão aparece sem contador.
 */
export async function SocialLinks({ locale, c }: { locale: Locale; c: Conteudo }) {
  const inscritos = await getInscritos();

  const contador =
    inscritos === null
      ? undefined
      : preencher(inscritos === 1 ? c.ui.inscritosUm : c.ui.inscritosVarios, {
          // Acima de 10 mil o número compacta ("12,4 mil", "12.4K"),
          // que é como o próprio YouTube mostra.
          n: new Intl.NumberFormat(localeInfo[locale].intl, {
            notation: inscritos >= 10_000 ? 'compact' : 'standard',
            maximumFractionDigits: 1,
          }).format(inscritos),
        });

  return (
    <FadeIn>
      <ul className="flex flex-wrap gap-3">
        {socials.map((social) => (
          <li key={social.id}>
            <PillButton
              href={social.url}
              icon={SOCIAL_ICONS[social.icon]}
              label={social.label}
              sublabel={social.id === 'youtube' ? contador : undefined}
              destaque={social.destaque}
            />
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
