import { experiencia } from '@/data/experiencia';
import { TimelineItem } from '@/components/experiencia/TimelineItem';
import type { Locale } from '@/i18n/config';
import type { Conteudo } from '@/i18n';

export function Timeline({ locale, c }: { locale: Locale; c: Conteudo }) {
  return (
    <div>
      {experiencia.map((item) => {
        const texto = c.experiencia[item.id];
        if (!texto) return null;

        return (
          <TimelineItem key={item.id} item={item} texto={texto} locale={locale} c={c} />
        );
      })}
    </div>
  );
}
