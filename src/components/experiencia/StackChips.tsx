import { stack } from '@/data/stack';
import { Chip } from '@/components/ui/Chip';

export function StackChips() {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <li key={item.nome}>
          <Chip>{item.nome}</Chip>
        </li>
      ))}
    </ul>
  );
}
