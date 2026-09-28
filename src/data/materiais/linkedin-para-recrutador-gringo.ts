import type { CorpoMaterial } from '@/data/materiais';

export const corpo: CorpoMaterial = {
  intro:
    'Recrutador de fora não procura você no Google. Ele procura no LinkedIn Recruiter, com filtro por cargo, palavra-chave e localização. Se o seu perfil não aparece na busca, você não existe para ele. Este guia é sobre aparecer — e, quando aparecer, convencer em dez segundos.',
  secoes: [
    {
      titulo: 'Idioma do perfil',
      itens: [
        'Perfil inteiro em inglês. Não é "perfil bilíngue": o LinkedIn tem o recurso de perfil secundário em outro idioma, mas o principal precisa ser o inglês — é o que o Recruiter indexa por padrão.',
        'Título, resumo, experiências, habilidades: tudo. Um perfil metade em português, metade em inglês parece abandonado.',
        'Nome sem acento no campo de nome. "Ana Luiza Primo", não "Ana Luíza". Busca com acento falha em sistemas de fora.',
      ],
    },
    {
      titulo: 'Título (headline): o campo mais importante',
      paragrafos: [
        'O título é o que aparece na busca e no resultado. Ele precisa conter o cargo que você quer que te encontrem por, não o cargo que sua empresa te deu.',
      ],
      itens: [
        'Formato que funciona: "Site Reliability Engineer | Kubernetes, AWS, Observability | Open to remote (UTC-3)".',
        'Cargo primeiro, sempre. "SRE" e "Site Reliability Engineer" são buscas diferentes — coloque os dois se couber.',
        'Duas ou três tecnologias que definem você. Não a stack inteira.',
        '"Open to remote" ou "Open to relocation" no fim: é filtro de busca que recrutador usa.',
        'Nada de emoji, nada de "🚀", nada de "| Mentora | Palestrante | Criadora de conteúdo" antes do cargo técnico. Isso pode entrar depois, mas o cargo vem primeiro.',
      ],
    },
    {
      titulo: 'Foto e capa',
      itens: [
        'Foto com rosto visível, fundo neutro, roupa que você usaria numa entrevista por vídeo. Perfil sem foto tem taxa de resposta muito menor.',
        'Capa: opcional. Se usar, algo simples — uma foto sua palestrando funciona bem. Nada de frase motivacional.',
      ],
    },
    {
      titulo: 'Resumo (About)',
      itens: [
        'Primeiras duas linhas aparecem antes do "ver mais". Elas precisam dizer cargo, anos e área: "SRE with 5 years keeping high-traffic financial systems reliable."',
        'Três parágrafos curtos: o que você faz, com que escala, e o que está buscando. Escreva em primeira pessoa.',
        'Termine com como te contatar. "Open to SRE/DevOps roles, remote, UTC-3. DM or ana@…"',
        'Sem "apaixonada por tecnologia". Todo mundo é. Diga o que você fez com a paixão.',
      ],
    },
    {
      titulo: 'Experiência',
      itens: [
        'Cada cargo com dois a quatro bullets, no mesmo padrão do currículo: verbo + o que + resultado medido.',
        'Empresa brasileira ganha uma linha de contexto: "Stone — payments company, 2M+ merchants".',
        'Datas coerentes com o currículo. Recrutador cruza os dois; diferença vira pergunta desconfortável.',
        'Contrato internacional atual: se não puder citar a empresa, escreva "International client (US), via contract". Vazio parece buraco.',
      ],
    },
    {
      titulo: 'Habilidades (Skills)',
      itens: [
        'As cinquenta permitidas, com as que mais importam no topo — é o que o filtro por skill usa.',
        'Três fixadas em destaque: as que definem seu cargo. Para SRE: Kubernetes, AWS (ou GCP), Observability.',
        'Peça validação (endorsement) para colegas nas três principais. Conta pouco, mas conta.',
      ],
    },
    {
      titulo: 'Sinais que recrutador de fora olha',
      itens: [
        'Recomendações escritas, em inglês, de gestor ou colega. Duas boas valem mais que dez genéricas.',
        'Selo "Open to work" visível só para recrutadores (não o círculo verde público, se você está empregada).',
        'Localização: cidade e país reais. "Brazil" sem cidade some de filtros por região.',
        'Atividade recente: um post ou comentário técnico por semana mostra que o perfil está vivo. Não precisa ser viral.',
      ],
    },
    {
      titulo: 'Erros que fecham a porta',
      itens: [
        'Cargo diferente no título e na experiência atual.',
        'Perfil em português com título em inglês.',
        'Texto copiado do currículo palavra por palavra — o LinkedIn é mais informal, e o recrutador vai ler os dois.',
        '"Buscando recolocação" ou "em transição" no título. Diga o que você é, não o que está faltando.',
      ],
    },
  ],
  fechamento:
    'Faça o teste: abra uma aba anônima, busque no LinkedIn por "Site Reliability Engineer Brazil" e veja se você aparece nas primeiras páginas. Se não aparece, comece pelo título e pelas habilidades — são os dois campos que a busca lê primeiro.',
};
