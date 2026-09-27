import type { ReactNode } from 'react';

/**
 * `alinhamento="esquerda"` encosta o conteúdo à esquerda em vez de
 * centralizar — é o layout da home, que reserva a coluna da direita para
 * o painel de artigos. Em telas estreitas os dois modos são idênticos,
 * porque aí não há coluna lateral e centralizar vira o mesmo que encostar.
 */
export function Container({
  children,
  className = '',
  wide = false,
  alinhamento = 'centro',
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
  alinhamento?: 'centro' | 'esquerda';
}) {
  const largura = wide ? 'max-w-5xl' : 'max-w-3xl';
  const posicao = alinhamento === 'esquerda' ? 'lg:mx-0' : '';

  return (
    <div className={`mx-auto w-full px-6 ${largura} ${posicao} ${className}`}>
      {children}
    </div>
  );
}
