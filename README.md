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
| `RESEND_API_KEY` | Para o formulário de mentoria | Chave do Resend, só com permissão de envio. Sem ela o formulário responde erro e o servidor registra a inscrição perdida. Crie a conta no Resend **com o mesmo e-mail de destino** — sem domínio verificado, ele só entrega para o dono da conta. |
| `EMAIL_DESTINO` / `EMAIL_REMETENTE` | Não | Destino e remetente do formulário. Padrão: o e-mail em `src/data/mentoria.ts` e o sandbox do Resend. |
| `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` | Recomendada | Chave estável para as Server Actions entre deploys (`openssl rand -base64 32`). |
| `SUBSTACK_PUBLICATION` / `MEDIUM_USERNAME` | Não | Fontes dos artigos e da newsletter. Padrões no código. |

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

Páginas próprias, fora da home:

| Rota | O que é |
| --- | --- |
| `/artigos` | Medium + Substack numa lista só |
| `/mentoria` | Metodologia, formatos e preços, formulário |
| `/materiais` e `/materiais/<slug>` | Guias gratuitos na íntegra; os da mentoria só com descrição |
| `/palestras/<slug>` | Detalhe de cada palestra, com navegador de slides |

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

## Mentoria e materiais

**Formulário.** Envia por Server Action (`src/app/[locale]/mentoria/acoes.ts`);
o servidor manda o e-mail pelo Resend (`src/lib/email.ts`). Proteções:
campo-armadilha para robôs, validação e limite de tamanho por campo,
limite de 3 envios por IP por hora (em memória — basta para uma instância;
para várias, seria preciso Redis ou o WAF da plataforma), e nada do que a
pessoa digita vira HTML nem cabeçalho de e-mail. Sem `RESEND_API_KEY`, a
pessoa vê um erro genérico e o log registra o e-mail perdido.

**Preços e formatos** ficam em `src/data/mentoria.ts` (valores) e no bloco
`mentoria.planos` dos dicionários (nome, descrição, o que inclui).

**Materiais.** A lista está em `src/data/materiais.ts`. Os gratuitos têm o
corpo em `src/data/materiais/<slug>.ts` (só em português — as páginas em
inglês e espanhol avisam). Os que vêm com a mentoria ficam em
`docs/materiais-mentoria/*.md`, fora do bundle: não faz sentido publicar
de graça, no código, o que é entregue na mentoria.

## Deploy no Railway

O deploy é feito pelo GitHub Actions (`.github/workflows/deploy.yml`),
não pela integração automática do Railway com o GitHub. A diferença é que
aqui **nada vai ao ar sem passar por tipos, lint, build e auditoria de
dependências** — a integração nativa publica todo push, verde ou não.

> Se você também conectar o repositório na integração do Railway, cada
> push dispara **dois** deploys. Use um ou outro: ou a integração, ou
> este workflow.

### Passo a passo

1. **No Railway**: *New Project* → *Empty Project* → dentro dele, *New* →
   *Empty Service*. Anote o nome do serviço.

2. **Variáveis do Railway** (aba *Variables* do serviço), antes do
   primeiro build:

   ```
   NEXT_PUBLIC_SITE_URL=https://<seu-domínio>.up.railway.app
   ```

   Não é opcional: por ser `NEXT_PUBLIC_*`, ela é embutida no bundle em
   tempo de **build**. Definir depois exige um build novo, não só um
   restart. Sem ela, canonical, hreflang e sitemap apontam para
   `localhost`.

3. **Token do Railway**: *Project Settings* → *Tokens* → crie um **token
   de projeto** e escolha o ambiente (`production`).

   Use token de **projeto**, não de conta. O de conta dá acesso a tudo
   que você tem no Railway; o de projeto só alcança este serviço, e é o
   que limita o estrago se vazar.

4. **No GitHub**, em *Settings* → *Secrets and variables* → *Actions*:

   | Onde | Nome | Valor |
   | --- | --- | --- |
   | **Secrets** | `RAILWAY_TOKEN` | o token do passo 3 |
   | **Variables** | `RAILWAY_SERVICE` | nome do serviço no Railway |
   | **Variables** | `NEXT_PUBLIC_SITE_URL` | a URL pública do site |

   O token vai em *Secrets* (fica oculto no log); os outros dois em
   *Variables*, que não são segredo e aparecem no log — o que ajuda a
   depurar.

5. **Ambiente protegido** (recomendado): *Settings* → *Environments* →
   crie `production`. Ali dá para exigir aprovação manual antes de cada
   deploy e restringir a branch. O workflow já aponta para esse ambiente.

6. `git push` na `main`. O workflow verifica, publica e confere se o
   site respondeu `200`.

### O que o pipeline faz

```
push/PR  →  verificar: tsc → lint → build → npm audit
                            ↓ (só push na main, só se tudo passou)
                         deploy: railway up → checa HTTP 200
```

Decisões de segurança, e o porquê de cada uma:

- **`permissions: contents: read`** — sem isso o `GITHUB_TOKEN` vem com
  escrita, e uma dependência comprometida durante o build poderia usá-lo
  para escrever no repositório.
- **O segredo só existe no job de deploy**, que nunca roda em pull
  request. Um PR vindo de fork não alcança o token do Railway.
- **Actions fixadas por SHA**, não por tag: tag pode ser movida para
  outro commit sem aviso, e aí o pipeline roda código que ninguém
  revisou.
- **`npm ci`** instala exatamente o lockfile. `npm install` poderia
  resolver versões novas e fazer o build rodar com código diferente do
  que foi testado.
- **`npm audit --omit=dev --audit-level=high`** trava o deploy em
  vulnerabilidade alta ou crítica de produção, e ignora ruído de dev.
- **`concurrency`** cancela o deploy anterior: dois em paralelo podem
  chegar fora de ordem e deixar no ar uma versão mais antiga.

### Detalhes do runtime

O `railway.json` define build, start e healthcheck. O `PORT` é injetado
pelo Railway e o `next start` o respeita; o `-H 0.0.0.0` no script
`start` garante que o servidor não suba preso em `localhost`. O
healthcheck aponta para `/pt`, não `/`, porque a raiz responde `307`
(redirecionamento de idioma) e o Railway marcaria o deploy como
não-saudável.

O `.railwayignore` mantém os `.pptx` (158 MB) fora do upload.

### Configurações recomendadas no painel do Railway

| Onde | O quê | Por quê |
| --- | --- | --- |
| Variables | `RESEND_API_KEY`, `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` como **sealed** | Não ficam visíveis nem em log |
| Variables | `NEXT_TELEMETRY_DISABLED=1` | Build não manda telemetria |
| Settings → Deploy | Healthcheck `/pt`, timeout 120 s | Já vem do `railway.json`; confira que não foi sobrescrito |
| Settings → Deploy | Restart policy *On failure*, 10 tentativas | Idem |
| Settings → Deploy | **Wait for CI** ligado, se usar a integração nativa | Só publica com o workflow verde |
| Settings → Networking | Só a porta pública do serviço; sem TCP proxy | Menos superfície |
| Settings → Service | 1 réplica | O limite por IP do formulário é em memória; com 2+ réplicas ele enfraquece |

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
- **Server Actions**: o Next compara `Origin` com `X-Forwarded-Host` (o
  Railway envia esse header) e rejeita origem diferente — CSRF coberto sem
  token próprio. Corpo limitado a 1 MB por padrão; os campos têm limite
  bem menor.
- **`/.well-known/security.txt`** (RFC 9116) diz a quem reportar uma falha.
- **`Cross-Origin-Opener-Policy: same-origin`**: aba aberta daqui não
  referencia esta janela de volta.
- **Segredos no Railway**: use variáveis *seladas* para `RESEND_API_KEY` e
  `NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` — não aparecem no painel depois
  de salvas nem nos logs de build.

Rode `npm audit` antes de cada deploy.

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript · TailwindCSS v4 ·
next-themes (dark mode) · lucide-react (ícones) ·
yet-another-react-lightbox (galeria de fotos).
