# site-sre

Site pessoal minimalista para apresentação como Site Reliability Engineer —
Next.js (App Router) + TypeScript + TailwindCSS. Inclui uma página dedicada
de **Palestras & Apresentações**, com slides em PDF e galeria de fotos por
evento.

## Rodando localmente

Pré-requisitos: Node.js 20.9+ e npm.

```bash
npm install
cp .env.example .env.local   # opcional, veja "Variáveis de ambiente" abaixo
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos úteis:

```bash
npm run build   # build de produção
npm run start   # roda o build de produção localmente
npm run lint    # ESLint
```

## Variáveis de ambiente

Veja `.env.example`. Nenhuma é obrigatória para rodar localmente:

| Variável | Para quê serve |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública usada em metadados/SEO (sitemap, Open Graph, canonical). Defina antes de publicar. |
| `YOUTUBE_API_KEY` / `YOUTUBE_CHANNEL_ID` | Opcionais. Se as duas estiverem definidas, a Home passa a exibir uma seção "Últimos vídeos" buscando o canal via YouTube Data API. Sem elas, a seção é simplesmente omitida (sem quebrar o build). |

## Como editar o conteúdo

Todo o conteúdo do site vive em `src/data/*.ts` — arquivos de dados
tipados, sem JSX. Não é preciso mexer em componentes para atualizar texto,
links ou adicionar itens.

| Arquivo | O que controla |
| --- | --- |
| `src/data/perfil.ts` | Nome, saudação, tagline, bio, foto de perfil |
| `src/data/empresas.ts` | Empresas exibidas na Home ("Já atuei em...") e seus logos |
| `src/data/socials.ts` | Links de redes/conteúdo (YouTube, LinkedIn, Instagram, GitHub) |
| `src/data/experiencia.ts` | Itens da timeline de experiência |
| `src/data/stack.ts` | Chips de stack/ferramentas em `/experiencia` |
| `src/data/palestras.ts` | Palestras exibidas em `/palestras` |

### Adicionando uma nova palestra

1. Coloque a foto de capa e as fotos da galeria em
   `public/palestras/<slug>/` (ex.: `capa.svg`/`.jpg`, `foto-1.jpg`, ...).
2. Coloque o PDF dos slides em `public/slides/<slug>.pdf` — ou, se os
   slides estiverem no SpeakerDeck/Slideshare, use a URL externa direto no
   campo `slidesPdf`.
3. Adicione um novo objeto ao array `palestras` em `src/data/palestras.ts`:

   ```ts
   {
     slug: 'meu-novo-talk',
     titulo: 'Título da palestra',
     evento: 'Nome do evento',
     data: '2026-03-10',        // AAAA-MM-DD
     local: 'Cidade, UF',
     descricao: 'Descrição curta em 2-4 linhas.',
     capa: '/palestras/meu-novo-talk/capa.jpg',
     capaAlt: 'Descrição da imagem de capa para leitores de tela',
     fotos: [
       { src: '/palestras/meu-novo-talk/foto-1.jpg', alt: '...' },
     ],
     slidesPdf: '/slides/meu-novo-talk.pdf', // ou uma URL externa
     videoUrl: 'https://www.youtube.com/watch?v=...', // opcional
     tags: ['sre', 'observabilidade'],
   }
   ```

4. Pronto — o card aparece automaticamente em `/palestras`, com sua própria
   página em `/palestras/meu-novo-talk` (título, descrição, tags, slides,
   galeria com lightbox e, se houver, o vídeo embutido).

O campo `alt` é obrigatório em toda imagem — preencha com uma descrição
real, não deixe vazio.

### Adicionando uma nova experiência

Adicione um objeto no **topo** do array `experiencia` em
`src/data/experiencia.ts` (mais recente primeiro):

```ts
{
  empresa: 'Nome da empresa',
  cargo: 'Cargo',
  periodoInicio: '2026-02',      // AAAA-MM
  periodoFim: 'atual',            // ou 'AAAA-MM'
  localizacao: 'Remoto',
  bullets: ['Ponto de impacto 1', 'Ponto de impacto 2'],
  logo: '/logos/empresa.svg',     // opcional
}
```

### Trocando a cor de destaque

A cor de destaque (usada em botões, links, bordas e ícones) fica em duas
linhas de `src/app/globals.css` — uma para o tema claro, outra para o
escuro (o tom claro precisa ser mais escuro que o do modo escuro para
manter contraste legível nos dois fundos):

```css
:root {
  --accent: oklch(48% 0.13 195); /* tema claro */
}
.dark {
  --accent: oklch(78% 0.15 195); /* tema escuro */
}
```

Exemplo de alternativa verde-terminal: `oklch(40% 0.14 150)` (claro) /
`oklch(80% 0.19 150)` (escuro).

## Placeholders para substituir antes de publicar

- Foto de perfil: `public/images/avatar-placeholder.svg` → troque o
  `avatar` em `src/data/perfil.ts` para sua foto real.
- Logos das empresas: `public/logos/*.svg`.
- Fotos e PDFs das palestras de exemplo em `public/palestras/*` e
  `public/slides/*.pdf` — as duas palestras em `src/data/palestras.ts` são
  só exemplos com conteúdo fictício.
- URLs de redes sociais em `src/data/socials.ts`.
- Nome, bio e empresas reais em `src/data/perfil.ts` / `empresas.ts`.

## Deploy na Vercel

1. Suba o repositório para o GitHub/GitLab/Bitbucket.
2. Importe o projeto em [vercel.com/new](https://vercel.com/new) — o
   framework Next.js é detectado automaticamente, nenhum build command
   customizado é necessário.
3. Configure `NEXT_PUBLIC_SITE_URL` (e, se for usar, `YOUTUBE_API_KEY` /
   `YOUTUBE_CHANNEL_ID`) nas variáveis de ambiente do projeto na Vercel.
4. Deploy.

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript · TailwindCSS v4 ·
next-themes (dark mode) · lucide-react (ícones) ·
yet-another-react-lightbox (galeria de fotos).
