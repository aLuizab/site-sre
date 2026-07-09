import Image from 'next/image';
import { empresas } from '@/data/empresas';
import { joinComEConjuncao } from '@/lib/texto';
import { FadeIn } from '@/components/ui/FadeIn';

export function CompaniesRow() {
  const nomes = joinComEConjuncao(empresas.map((e) => e.nome));

  return (
    <FadeIn>
      <p className="text-sm text-muted">Já atuei em {nomes}.</p>
      <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
        {empresas.map((empresa) => (
          <li key={empresa.nome} className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
            <Image src={empresa.logo} alt={empresa.nome} width={120} height={40} />
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
