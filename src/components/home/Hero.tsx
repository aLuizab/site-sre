import Image from 'next/image';
import { perfil } from '@/data/perfil';
import { LatencySparkline } from '@/components/ui/LatencySparkline';
import { Container } from '@/components/ui/Container';
import type { Conteudo } from '@/i18n';

export function Hero({ c }: { c: Conteudo }) {
  return (
    <div className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="absolute inset-x-0 bottom-0 -z-10">
        <LatencySparkline />
      </div>
      <Container alinhamento="esquerda">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
          <Image
            src={perfil.avatar}
            alt={c.perfil.avatarAlt}
            width={140}
            height={140}
            preload
            className="rounded-full border border-border"
          />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {c.perfil.saudacao}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-muted">{c.perfil.tagline}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
