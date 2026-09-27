# site-sre

Site pessoal — landing page única — para apresentação como Site Reliability
Engineer. Next.js (App Router) + TypeScript + TailwindCSS, tipografia
monospace em todo o site, em **três idiomas** (português, inglês e
espanhol).

Todo o conteúdo (sobre, experiência, projetos, palestras e últimos vídeos)
fica em seções da própria home; cada palestra ainda ganha sua própria
página para hospedar slides em PDF, galeria de fotos e vídeo sem pesar a
landing page.

## Rodando localmente

Pré-requisitos: Node.js 22+ e npm.

```bash
npm install
cp .env.example .env.local   # opcional, veja "Variáveis de ambiente"
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) — a raiz negocia o
idioma pelo `Accept-Language` do navegador e redireciona para `/pt`, `/en`
ou `/es`.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # roda o build de produção localmente
npm run lint    # ESLint
```

## Idiomas

Cada idioma tem sua própria URL, então as três versões indexam separado no
Google e dá para mandar um link direto em inglês.

```
/pt   (padrão)      /en                 /es
```

A arquitetura separa **dados invariantes** de **texto traduzível**:

| Onde | O que fica lá |
| --- | --- |
| `src/data/*.ts` | Datas, URLs, slugs, caminhos de imagem, tags — o que não muda entre idiomas |
| `src/i18n/conteudo/{pt,en,es}.ts` | Todo o texto, indexado pelo `id` do item correspondente em `src/data/` |
| `src/i18n/config.ts` | Idiomas suportados, negociação de `Accept-Language` |
| `src/i18n/tipos.ts` | O contrato `Conteudo`, que os três dicionários implementam |
| `src/proxy.ts` | Redireciona `/` para o idioma do visitante |

Como os três dicionários são tipados pela mesma interface, **esquecer uma
chave em qualquer idioma vira erro de compilação**, não string faltando na
tela.

Para adicionar um idioma: inclua o código em `locales` e `localeInfo`
(`src/i18n/config.ts`), crie `src/i18n/conteudo/<código>.ts` e registre-o
em `src/i18n/index.ts`. O TypeScript aponta tudo que falta.

## Variáveis de ambiente

Veja `.env.example`.

| Variável | Obrigatória | Para quê serve |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Em produção | URL pública usada em canonical, hreflang, sitemap e Open Graph. Por ser `NEXT_PUBLIC_*`, é embutida em tempo de **build** — defina antes do primeiro deploy. |
| `YOUTUBE_API_KEY` | Não | Usa a API oficial do YouTube em vez de ler o feed público. Lida só no servidor. |
| `YOUTUBE_CHANNEL_ID` | Não | Canal de onde vêm os vídeos e o contador de inscritos. |

Sem as duas do YouTube o site funciona igual: os vídeos vêm do feed RSS
público e o contador de inscritos, da página do canal. Se as duas fontes
falharem, a seção some e o contador não aparece — nunca um número inventado.

## Estrutura da página

A home (`src/app/[locale]/page.tsx`) empilha as seções, cada uma com um
`id` para navegação por âncora:

| Seção | Âncora | Componente |
| --- | --- | --- |
| Hero | — | `components/home/Hero.tsx` |
| Empresas + redes | — | `components/home/CompaniesRow.tsx`, `SocialLinks.tsx` |
| Sobre mim | `#sobre` | `components/home/AboutSection.tsx` |
| Experiência | `#experiencia` | `components/home/ExperienciaSection.tsx` |
| Projetos | `#projetos` | `components/home/ProjetosSection.tsx` |
| Palestras | `#palestras` | `components/home/PalestrasSection.tsx` |
| Últimos vídeos | `#videos` | `components/home/LatestVideos.tsx` |

## Como editar o conteúdo

**Texto vai nos três dicionários; estrutura vai em `src/data/`.**

| Arquivo de dados | Dicionário correspondente | O que controla |
| --- | --- | --- |
| `src/data/perfil.ts` | `perfil` | Nome e avatar / saudação, tagline, bio |
| `src/data/empresas.ts` | `empresas` | Seção "Já atuei em..." |
| `src/data/socials.ts` | — | Links de redes (URLs não traduzem) |
| `src/data/experiencia.ts` | `experiencia` | Datas e logos / cargo, empresa, bullets |
| `src/data/formacao.ts` | `formacao` | Instituição e período / nome do curso |
| `src/data/stack.ts` | — | Chips de ferramentas (nomes técnicos) |
| `src/data/projetos.ts` | `projetos` | Repo, tags / descrição |
| `src/data/palestras.ts` | `palestras` | Slug, data, arquivos / título, descrição |

### Adicionando uma nova palestra

1. Coloque a capa e as fotos em `public/palestras/<slug>/`.
2. Coloque o PDF em `public/slides/<slug>.pdf` — ou use uma URL externa no
   campo `slidesPdf`.
3. Adicione a **estrutura** em `src/data/palestras.ts`:

   ```ts
   {
     slug: 'meu-novo-talk',
     data: '2026-03-10',                       // AAAA-MM-DD
     capa: '/palestras/meu-novo-talk/capa.jpg',
     fotos: ['/palestras/meu-novo-talk/foto-1.jpg'],
     slidesPdf: '/slides/meu-novo-talk.pdf',   // ou URL externa
     videoUrl: 'https://www.youtube.com/watch?v=...',  // opcional
     tags: ['sre', 'observabilidade'],
   }
   ```

4. Adicione o **texto** nos três dicionários, sob a mesma chave `slug`:

   ```ts
   'meu-novo-talk': {
     titulo: 'Título da palestra',
     evento: 'Nome do evento',
     local: 'Cidade, UF',
     descricao: 'Descrição curta em 2-4 linhas.',
     capaAlt: 'Descrição da capa para leitores de tela',
     fotosAlt: ['Descrição da foto 1'],   // mesma ordem de `fotos`
   }
   ```

O slug é o mesmo nos três idiomas de propósito: a URL fica estável e só o
prefixo de idioma muda. Todo `alt` é obrigatório — preencha com descrição
real, não deixe vazio.

### Adicionando uma nova experiência

No **topo** do array em `src/data/experiencia.ts` (mais recente primeiro):

```ts
{ id: 'empresa-x', periodoInicio: '2026-02', periodoFim: 'atual', logo: '/logos/x.svg' }
```

`periodoInicio` e `periodoFim` aceitam `'AAAA'` ou `'AAAA-MM'` — use só o
ano quando não souber o mês, em vez de inventar um. Depois, nos três
dicionários:

```ts
'empresa-x': {
  empresa: 'Nome da empresa',
  cargo: 'Cargo',
  localizacao: 'Remoto',
  bullets: ['Ponto de impacto 1', 'Ponto de impacto 2'],
}
```

### Trocando a cor de destaque

Duas linhas de `src/app/globals.css` — uma por tema. O tom claro precisa
ser mais escuro que o do modo escuro para manter contraste nos dois fundos:

```css
:root { --accent: oklch(48% 0.13 195); }  /* tema claro */
.dark { --accent: oklch(78% 0.15 195); }  /* tema escuro */
```

### Trocando a fonte

Edite `src/app/[locale]/layout.tsx` (import de `next/font/google` ou
`next/font/local`) e `--font-sans`/`--font-mono` em `src/app/globals.css`.

## Placeholders que ainda faltam substituir

- **Foto de perfil**: `public/images/avatar-placeholder.svg` — troque
  `avatar` em `src/data/perfil.ts`.
- **Palestras**: as duas em `src/data/palestras.ts` são fictícias, assim
  como as fotos e PDFs em `public/palestras/` e `public/slides/`. Uma
  delas tem um `videoUrl` que aponta para um vídeo placeholder.
- **Empresa atual**: em `src/data/empresas.ts` o item `atual: true` está
  como "uma empresa internacional" (genérico de propósito).

## Deploy no Railway

O `railway.json` na raiz já define build, start e healthcheck.

1. **Suba o repositório para o GitHub.**
2. No Railway: *New Project* → *Deploy from GitHub repo* → selecione este
   repositório.
3. **Antes do primeiro build**, em *Variables*, defina:

   ```
   NEXT_PUBLIC_SITE_URL=https://<seu-domínio-ou-subdomínio>.up.railway.app
   ```

   Isso não é opcional: a variável é embutida no bundle em tempo de build,
   então defini-la depois exige um **novo build**, não só um restart. Sem
   ela, canonical, hreflang e sitemap apontam para `localhost`.

4. Em *Settings* → *Networking*, gere o domínio público.
5. Se usar domínio próprio, aponte o DNS e **atualize
   `NEXT_PUBLIC_SITE_URL`**, refazendo o deploy.

O `PORT` é injetado pelo Railway e o `next start` o respeita; o
`-H 0.0.0.0` no script `start` garante que o servidor não suba preso em
`localhost`. O healthcheck aponta para `/pt` em vez de `/`, porque a raiz
responde `307` (redirecionamento de idioma) e não `200`.

## Segurança

- **Headers** (`next.config.ts`): CSP, `X-Frame-Options`, `nosniff`,
  `Referrer-Policy`, `Permissions-Policy` e HSTS, com `poweredByHeader`
  desligado.
- **CSP**: `script-src` usa `'unsafe-inline'` porque o Next injeta o
  payload de hidratação inline e a alternativa (nonce) exigiria abrir mão
  da geração estática. Aceitável enquanto o site não tiver formulário,
  login ou entrada de usuário — **se isso mudar, revise**.
- **Otimizador de imagens**: `remotePatterns` restrito a
  `i.ytimg.com/vi/**`. Um padrão aberto transformaria o site num proxy de
  imagem para qualquer origem. SVG remoto segue bloqueado.
- **Segredos**: `.gitignore` cobre `.env*` (exceto `.env.example`). A
  `YOUTUBE_API_KEY` é lida só em Server Components e nunca chega ao
  navegador.
- **JSON-LD** é serializado por `src/lib/jsonLd.ts`, que escapa `<` e os
  separadores U+2028/U+2029.

Rode `npm audit` antes de cada deploy.

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript · TailwindCSS v4 ·
next-themes (dark mode) · lucide-react (ícones) ·
yet-another-react-lightbox (galeria de fotos).
