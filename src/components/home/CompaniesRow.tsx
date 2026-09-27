import { empresas } from '@/data/empresas';
import { joinComConjuncao } from '@/lib/texto';
import { FadeIn } from '@/components/ui/FadeIn';
import { preencher, type Conteudo } from '@/i18n';

export function CompaniesRow({ c }: { c: Conteudo }) {
  const nome = (id: string) => c.empresas[id] ?? id;

  const passadas = empresas.filter((e) => !e.atual).map((e) => nome(e.id));
  const atual = empresas.find((e) => e.atual);

  const frase = atual
    ? preencher(c.ui.trajetoriaComAtual, {
        passadas: joinComConjuncao(passadas, c.ui.conjuncaoE),
        atual: nome(atual.id),
      })
    : preencher(c.ui.trajetoriaSemAtual, {
        passadas: joinComConjuncao(
          empresas.map((e) => nome(e.id)),
          c.ui.conjuncaoE
        ),
      });

  return (
    <FadeIn>
      <p className="text-sm text-muted">{frase}</p>
    </FadeIn>
  );
}
