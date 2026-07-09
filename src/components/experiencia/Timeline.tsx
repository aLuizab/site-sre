import { experiencia } from '@/data/experiencia';
import { TimelineItem } from '@/components/experiencia/TimelineItem';

export function Timeline() {
  return (
    <div>
      {experiencia.map((item) => (
        <TimelineItem key={`${item.empresa}-${item.periodoInicio}`} item={item} />
      ))}
    </div>
  );
}
