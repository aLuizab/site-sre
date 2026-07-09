# site-sre

Site pessoal — landing page única — para apresentação como Site Reliability
Engineer. Next.js (App Router) + TypeScript + TailwindCSS, tipografia
monospace em todo o site. Todo o conteúdo (sobre, experiência, projetos e
palestras) fica em seções na própria home (`/`); cada palestra ainda ganha
sua própria página em `/palestras/<slug>` para hospedar slides em PDF,
galeria de fotos e vídeo sem pesar a landing page.

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
| `YOUTUBE_API_KEY` / `YOUTUBE_CHANNEL_ID` | Opcionais. Se as duas estiverem definidas, a seção de palestras passa a exibir "Últimos vídeos" buscando o canal via YouTube Data API. Sem elas, a seção é simplesmente omitida (sem quebrar o build). |

## Estrutura da página

A home (`src/app/page.tsx`) empilha as seções, cada uma com um `id` para
navegação por âncora (usado pelo menu do `Header`):

| Seção | Âncora | Componente |
| --- | --- | --- |
| Hero | — | `components/home/Hero.tsx` |
| Empresas + redes | — | `components/home/CompaniesRow.tsx`, `SocialLinks.tsx` |
| Sobre mim | `#sobre` | `components/home/AboutSection.tsx` |
| Experiência | `#experiencia` | `components/home/ExperienciaSection.tsx` |
| Projetos | `#projetos` | `components/home/ProjetosSection.tsx` |
| Palestras | `#palestras` | `components/home/PalestrasSection.tsx` |

## Como editar o conteúdo

Todo o conteúdo do site vive em `src/data/*.ts` — arquivos de dados
tipados, sem JSX. Não é preciso mexer em componentes para atualizar texto,
links ou adicionar itens.

| Arquivo | O que controla |
| --- | --- |
| `src/data/perfil.ts` | Nome, saudação, tagline, bio, foto de perfil |
| `src/data/empresas.ts` | Empresas da seção "Já atuei em..." e seus logos |
| `src/data/socials.ts` | Links de redes/conteúdo (YouTube, LinkedIn, Instagram, GitHub) |
| `src/data/experiencia.ts` | Itens da timeline de experiência |
| `src/data/stack.ts` | Chips de stack/ferramentas na seção Experiência |
| `src/data/projetos.ts` | Cards da seção Projetos |
| `src/data/palestras.ts` | Palestras exibidas na seção Palestras |

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

4. Pronto — o card aparece automaticamente na seção Palestras da home, com
   sua própria página em `/palestras/meu-novo-talk` (título, descrição,
   tags, slides, galeria com lightbox e, se houver, o vídeo embutido).

O campo `alt` é obrigatório em toda imagem — preencha com uma descrição
real, não deixe vazio.

### Adicionando um novo projeto

Adicione um objeto ao array `projetos` em `src/data/projetos.ts`:

```ts
{
  nome: 'nome-do-projeto',
  descricao: 'O que o projeto faz, em 1-3 linhas.',
  tags: ['TypeScript', 'Terraform'],
  repoUrl: 'https://github.com/usuario/projeto',  // opcional
  demoUrl: 'https://projeto.exemplo.com',          // opcional
}
```

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

### Trocando a fonte

O site inteiro usa Geist Mono (fonte monospace). Para trocar, edite
`src/app/layout.tsx` (import de `next/font/google` ou `next/font/local`) e
`--font-sans`/`--font-mono` em `src/app/globals.css`.

## Placeholders para substituir antes de publicar

- Foto de perfil: `public/images/avatar-placeholder.svg` → troque o
  `avatar` em `src/data/perfil.ts` para sua foto real.
- Empresa atual: em `src/data/empresas.ts`, o item com `atual: true` está
  como `"uma empresa internacional"` (nome genérico de propósito) — troque
  `nome` e o logo em `public/logos/empresa-internacional.svg` se quiser
  divulgar o nome real.
- Logos da Stone Pagamentos e do Itaú em `public/logos/` são versões
  simplificadas/estilizadas (não são os logotipos oficiais das marcas) —
  troque pelos arquivos oficiais se for publicar externamente.
- Fotos e PDFs das palestras de exemplo em `public/palestras/*` e
  `public/slides/*.pdf` — as duas palestras em `src/data/palestras.ts` são
  só exemplos com conteúdo fictício.
- Projetos de exemplo em `src/data/projetos.ts` são fictícios.
- URLs de redes sociais em `src/data/socials.ts`.

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
