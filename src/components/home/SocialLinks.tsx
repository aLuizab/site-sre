import { socials } from '@/data/socials';
import { SOCIAL_ICONS } from '@/lib/socialIcons';
import { PillButton } from '@/components/ui/PillButton';
import { FadeIn } from '@/components/ui/FadeIn';
import { getInscritos } from '@/lib/youtube';
import { localeInfo, type Locale } from '@/i18n/config';
import { preencher, type Conteudo } from '@/i18n';

/**
 * "12,4 mil inscritos" no idioma da página, ou undefined quando a busca
 * falhou. Acima de 10 mil o número compacta, que é como o próprio
 * YouTube mostra.
 */
export function rotuloInscritos(
  inscritos: number | null,
  locale: Locale,
  c: Conteudo
): string | undefined {
  if (inscritos === null) return undefined;
  return preencher(inscritos === 1 ? c.ui.inscritosUm : c.ui.inscritosVarios, {
    n: new Intl.NumberFormat(localeInfo[locale].intl, {
      notation: inscritos >= 10_000 ? 'compact' : 'standard',
      maximumFractionDigits: 1,
    }).format(inscritos),
  });
}

/**
 * O contador de inscritos vem do YouTube a cada revalidação, em vez de
 * ficar chumbado no dicionário — número escrito à mão envelhece e vira
 * mentira. Se a busca falhar, o botão aparece sem contador.
 */
export async function SocialLinks({ locale, c }: { locale: Locale; c: Conteudo }) {
  const contador = rotuloInscritos(await getInscritos(), locale, c);

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
