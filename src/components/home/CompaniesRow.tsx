import Image from 'next/image';
import { empresas } from '@/data/empresas';
import { joinComEConjuncao } from '@/lib/texto';
import { FadeIn } from '@/components/ui/FadeIn';

export function CompaniesRow() {
  const passadas = empresas.filter((e) => !e.atual);
  const atual = empresas.find((e) => e.atual);

  const frase = atual
    ? `Já atuei em ${joinComEConjuncao(passadas.map((e) => e.nome))}, e hoje trabalho em ${atual.nome}.`
    : `Já atuei em ${joinComEConjuncao(empresas.map((e) => e.nome))}.`;

  return (
    <FadeIn>
      <p className="text-sm text-muted">{frase}</p>
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
