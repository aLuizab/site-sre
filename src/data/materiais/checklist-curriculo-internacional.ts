import type { CorpoMaterial } from '@/data/materiais';

export const corpo: CorpoMaterial = {
  intro:
    'Currículo brasileiro e currículo internacional seguem regras diferentes, e a maioria das recusas silenciosas vem daí — não de falta de competência. Passe por cada item abaixo com o seu currículo aberto ao lado. Cada "não" é um ponto a corrigir antes de mandar para fora.',
  secoes: [
    {
      titulo: 'Formato e tamanho',
      itens: [
        'Uma página se você tem até 8 anos de experiência; duas no máximo depois disso. Recrutador lê em 30 segundos na primeira passada.',
        'PDF, nunca .docx. O layout não pode quebrar na máquina de quem abre.',
        'Fonte comum (Arial, Calibri, Helvetica), tamanho 10–11 no corpo. Nada de duas colunas: filtro automatizado (ATS) lê em ordem errada.',
        'Nome do arquivo: Nome-Sobrenome-SRE.pdf. "curriculo_final_v3.pdf" chega como desleixo.',
        'Sem foto, sem idade, sem estado civil, sem CPF, sem endereço completo. Nos EUA e na Europa isso é informação que o recrutador prefere não ver, por risco de viés.',
      ],
    },
    {
      titulo: 'Cabeçalho',
      itens: [
        'Nome, cargo-alvo ("Site Reliability Engineer"), cidade e país, e-mail, LinkedIn e GitHub. Só isso.',
        'Telefone com código do país (+55). Se não quiser receber ligação, tudo bem omitir — e-mail e LinkedIn bastam.',
        'Se a vaga for remota, escreva "Open to remote (UTC-3)". Fuso explícito economiza uma pergunta.',
      ],
    },
    {
      titulo: 'Resumo (Summary)',
      itens: [
        'Três a quatro linhas, no topo, respondendo: quem você é, com o que trabalha, em que escala, e o que está buscando.',
        'Comece pelo cargo e os anos: "Site Reliability Engineer with 5 years of experience…". Não comece com "Passionate" nem "Motivated".',
        'Inclua uma métrica concreta: "supporting 200+ microservices on Kubernetes" vale mais que qualquer adjetivo.',
      ],
    },
    {
      titulo: 'Experiência: a regra que muda tudo',
      paragrafos: [
        'Cada bullet precisa ter três partes: o verbo de ação, o que você fez, e o resultado medido. É a diferença entre "responsável pelo monitoramento" e "Reduced mean time to recovery by 40% by rebuilding the alerting pipeline in Prometheus and Alertmanager".',
      ],
      itens: [
        'Comece cada bullet com verbo no passado (Built, Reduced, Led, Migrated, Automated). Nunca com "Responsible for".',
        'Um número por bullet, sempre que existir: porcentagem, tempo, quantidade de serviços, volume de requisições, dinheiro economizado.',
        'Três a cinco bullets por emprego recente; um ou dois para empregos antigos.',
        'Tecnologias citadas dentro do contexto ("…using Terraform and AWS EKS"), não numa lista solta.',
        'Traduza o nome das empresas brasileiras com contexto: "Itaú Unibanco (largest private bank in Latin America)". Fora do Brasil ninguém sabe o que é Itaú.',
        'Cargo em inglês pelo equivalente real, não pela tradução literal. "Analista de Infraestrutura Pleno" vira "Infrastructure Engineer", não "Full Infrastructure Analyst".',
      ],
    },
    {
      titulo: 'Habilidades (Skills)',
      itens: [
        'Uma lista curta, agrupada: Cloud (AWS, GCP), Containers (Kubernetes, Docker), IaC (Terraform), Observability (Prometheus, Grafana, Datadog), CI/CD (GitHub Actions, ArgoCD), Languages (Python, Go).',
        'Só o que você sustenta numa entrevista. Listar o que viu num tutorial vira pergunta que você não sabe responder.',
        'Nada de barrinhas de nível ou estrelas. Ninguém sabe o que "80% em Kubernetes" significa.',
      ],
    },
    {
      titulo: 'Educação e certificações',
      itens: [
        'Curso, instituição e ano. Sem nota, sem TCC, sem disciplinas cursadas.',
        'Curso incompleto: escreva "Coursework in Telecommunications Engineering, 2018–2022". É honesto e não esconde.',
        'Certificações com nome oficial e ano: "AWS Certified Cloud Practitioner (2024)". Certificação vencida sai.',
      ],
    },
    {
      titulo: 'Inglês',
      itens: [
        'Não escreva "Fluent" se você não sustenta uma entrevista de uma hora. Escreva o nível real (B2, C1) — recrutador de fora entende a escala.',
        'Passe o texto inteiro por um corretor gramatical de inglês antes de enviar. Um erro de concordância no currículo de quem diz ser fluente encerra a conversa.',
        'Peça para uma pessoa nativa, ou fluente, ler uma vez. Não para corrigir, para dizer o que soou estranho.',
      ],
    },
    {
      titulo: 'Antes de enviar',
      itens: [
        'Abra a vaga e sublinhe as cinco palavras-chave técnicas. Elas aparecem no seu currículo, com a mesma grafia? Filtro automatizado busca texto literal.',
        'Leia em voz alta. Frase que você tropeça ao ler, o recrutador também tropeça.',
        'Mande para si mesma por e-mail e abra no celular. É assim que metade dos recrutadores vai ver.',
      ],
    },
  ],
  fechamento:
    'Se a maioria dos itens deu "não", não desanime: é exatamente o que a maioria dos currículos brasileiros tem antes da primeira revisão para fora. Corrija em ordem — formato, depois bullets com números, depois inglês — e mande de novo.',
};
