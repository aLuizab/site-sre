import type { CorpoMaterial } from '@/data/materiais';

export const corpo: CorpoMaterial = {
  intro:
    'A pergunta que mais recebo é "o que eu preciso saber para ser SRE lá fora?". A resposta honesta é: depende do nível que você está mirando. Este mapa separa o que uma vaga júnior, pleno e sênior de SRE/DevOps de fato cobra — não a lista de desejos da descrição da vaga, mas o que aparece na entrevista. Use para saber onde você está e o que estudar em seguida, nessa ordem.',
  secoes: [
    {
      titulo: 'Como ler este mapa',
      itens: [
        'Cada nível assume o anterior. Sênior precisa de tudo do pleno, que precisa de tudo do júnior.',
        'A ordem dentro de cada nível é a ordem de estudo que recomendo: o item de cima destrava o de baixo.',
        '"Saber" aqui significa conseguir explicar para alguém, num quadro, sem consultar. Não significa ter visto um vídeo.',
        'Nenhum nível exige todas as ferramentas listadas. Exige uma de cada categoria, bem sabida.',
      ],
    },
    {
      titulo: 'Júnior — operar o que já existe',
      paragrafos: [
        'A vaga júnior espera que você consiga dar plantão com supervisão, mexer em infraestrutura já montada e não derrubar nada. O que separa quem passa de quem não passa é Linux e rede de verdade, não a ferramenta da moda.',
      ],
      itens: [
        'Linux de linha de comando sem medo: processos, permissões, systemd, journalctl, top/htop, df, du, ss/netstat. Saber ler um log e achar o erro.',
        'Rede: o que acontece quando você digita uma URL. DNS, TCP/IP, HTTP e seus status, TLS na superfície, portas, firewall básico.',
        'Git no dia a dia: branch, merge, rebase simples, resolver conflito, PR.',
        'Docker: escrever um Dockerfile decente, imagem pequena, entender camadas, docker compose para subir dependências.',
        'Uma nuvem na prática: criar VM, rede, bucket, IAM básico — AWS ou GCP, tanto faz, mas uma de verdade, não as duas pela metade.',
        'Kubernetes como usuária: kubectl, pod, deployment, service, ingress, configmap, secret. Saber ler um "CrashLoopBackOff" e descobrir por quê.',
        'Um script útil em Bash ou Python: automatizar algo repetitivo que você mesma fazia à mão.',
        'Observabilidade como leitora: abrir o Grafana, entender um dashboard, saber o que é métrica, log e trace.',
        'Inglês para ler documentação e responder um chat técnico. Não precisa falar ainda; precisa ler.',
      ],
    },
    {
      titulo: 'Pleno — construir e sustentar sozinha',
      paragrafos: [
        'O pleno é dono de um pedaço: recebe um problema, desenha a solução, implementa e dá plantão por ela. É o nível da maioria das vagas remotas para o Brasil, e onde a diferença de salário para fora é mais gritante.',
      ],
      itens: [
        'Infraestrutura como código de verdade: Terraform com módulos, estado remoto, workspaces, e a disciplina de nunca clicar no console.',
        'Kubernetes como operadora: Helm ou Kustomize, HPA, requests/limits, probes, RBAC, network policy, o que fazer quando o nó morre.',
        'CI/CD com opinião: pipeline que testa, constrói imagem, faz deploy — e como fazer deploy canário ou blue-green sem derrubar produção. GitHub Actions ou GitLab CI, mais ArgoCD ou Flux.',
        'Observabilidade como construtora: instrumentar um serviço, definir alertas que não acordam ninguém à toa, montar um dashboard que responde uma pergunta. Prometheus, Grafana, OpenTelemetry; ou Datadog, se for o caso.',
        'SLI, SLO e error budget: definir um para um serviço real e explicar para o time de produto por que importa.',
        'Incidentes: conduzir a resposta, escrever um post-mortem sem culpa, transformar em ação. Ter feito isso ao menos algumas vezes.',
        'Uma linguagem de verdade além de Bash: Python ou Go, o suficiente para escrever uma ferramenta interna com testes.',
        'Segurança de base: gestão de segredos, princípio do menor privilégio, imagens sem vulnerabilidade crítica, TLS em tudo.',
        'Custo: saber onde a conta da nuvem está indo e propor um corte que não quebre nada.',
        'Inglês para uma entrevista de uma hora e para o plantão: escrever uma atualização de incidente clara, sob pressão, em inglês.',
      ],
    },
    {
      titulo: 'Sênior — decidir e multiplicar',
      paragrafos: [
        'Sênior é menos sobre saber mais ferramentas e mais sobre decidir: qual arquitetura, qual trade-off, o que não fazer. E sobre fazer o time inteiro melhorar. A entrevista de sênior lá fora é quase toda system design e comportamental.',
      ],
      itens: [
        'System design de infraestrutura: desenhar uma plataforma para N serviços com alta disponibilidade multi-região, e defender cada escolha com número (RTO, RPO, custo, latência).',
        'Arquiteturas de resiliência: células, bulkheads, circuit breakers, degradação graciosa. Saber quando cada uma vale o custo.',
        'Capacity planning e performance: prever a próxima quebra antes de acontecer, com dados.',
        'Plataforma interna: construir algo que outros times usam sem falar com você — golden paths, templates, documentação que funciona.',
        'Cultura de confiabilidade: implantar SLOs num time que não tinha, rodar post-mortems que mudam comportamento, mentorar plenos.',
        'Influência sem autoridade: convencer produto e liderança a investir em confiabilidade com argumento de negócio, não de tecnologia.',
        'Entrevista comportamental no formato STAR (Situation, Task, Action, Result): dez histórias suas prontas, cada uma com resultado medido.',
        'Inglês para liderar uma reunião, discordar com educação e apresentar para gente que não é técnica.',
      ],
    },
    {
      titulo: 'O que aparece em toda vaga e ninguém estuda',
      itens: [
        'Comunicação escrita: mensagem de incidente, RFC de mudança, comentário de PR. Metade do trabalho remoto é texto.',
        'Fuso e assincronia: saber trabalhar sem reunião, documentar decisões, não depender de resposta imediata.',
        'Dizer "não sei, vou descobrir" numa entrevista. Vale mais que inventar.',
      ],
    },
    {
      titulo: 'Como usar isto',
      itens: [
        'Marque cada item com: sei explicar, já fiz, ou nunca vi.',
        'O primeiro "nunca vi" do seu nível-alvo é o que você estuda agora. Não pule para o de baixo.',
        'Para cada item estudado, faça algo pequeno e real: um repositório, um post, uma automação no trabalho. Estudo sem artefato não vira entrevista.',
      ],
    },
  ],
  fechamento:
    'Se você marcou quase tudo do júnior e metade do pleno, você já está pronta para começar a aplicar para pleno lá fora — enquanto estuda o resto. Vaga não espera ficar completo; ela espera que você saiba explicar o que sabe e o que está aprendendo.',
};
