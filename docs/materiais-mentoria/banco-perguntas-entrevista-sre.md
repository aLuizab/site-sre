# Banco de perguntas de entrevista — SRE / DevOps

> Material entregue a quem faz a mentoria. Não é publicado no site.
> Perguntas reais de processos para fora, agrupadas por etapa. Para cada
> uma: o que o entrevistador quer ouvir de verdade.

## Como usar

Não decore respostas. Para cada pergunta, escreva **a sua** resposta em
três linhas, em inglês, com um exemplo do seu histórico. Depois grave
você respondendo em voz alta e ouça. A maioria das reprovações não é
por não saber — é por não conseguir explicar em dois minutos.

---

## Etapa 1 — Triagem com recrutador (30 min, inglês)

O objetivo aqui é só um: não ser eliminada. O recrutador não é técnico.

1. **Tell me about yourself.** — Quer: cargo, anos, escala, o que busca.
   Em 60 segundos. Não é sua biografia.
2. **Why are you looking for a new role?** — Quer: motivo positivo
   ("crescer para X"), nunca reclamação do empregador atual.
3. **Why this company?** — Quer: que você leu sobre eles. Uma frase
   específica sobre o produto ou a engenharia.
4. **What's your experience with on-call?** — Quer: que você já deu
   plantão de verdade e não vê como fardo.
5. **Are you comfortable working async across time zones?** — Quer:
   sim, com exemplo de como você documenta e comunica.
6. **What are your salary expectations?** — Quer: uma faixa, em dólar,
   pesquisada. Nunca "estou aberta". Veja a seção de negociação.
7. **What's your notice period? Visa status?** — Quer: resposta direta.
   Contrato PJ para o Brasil normalmente não exige visto; diga isso.

---

## Etapa 2 — Técnica: fundamentos (45–60 min)

Aqui testam se o currículo é verdade. Perguntas de base, sem pegadinha.

### Linux e rede
8. What happens when you type a URL into a browser and press Enter?
9. A process is using 100% CPU. How do you find out what it's doing?
10. Disk is full but `du` doesn't add up. What's happening?
11. Explain the difference between a process and a thread. When does it
    matter for a service you run?
12. How does DNS resolution work? What's a TTL and why do I care during
    an incident?
13. TCP vs UDP — when would you pick each?
14. What does a 502 vs a 503 vs a 504 tell you?

### Containers e Kubernetes
15. What's the difference between a Docker image and a container?
16. How do you make a Docker image smaller and why does size matter?
17. A pod is in CrashLoopBackOff. Walk me through your debugging.
18. What are requests and limits, and what happens if you set them
    wrong?
19. Explain liveness vs readiness probes with an example where the
    difference bit someone.
20. How does a Service route traffic to pods? What's an Ingress?
21. A node dies. What happens to the pods on it, step by step?

### Cloud e IaC
22. How do you manage Terraform state in a team? What goes wrong if you
    don't?
23. Someone changed something in the console by hand. How do you find
    out and what do you do?
24. Explain IAM least privilege with a concrete policy you've written.
25. How would you design a VPC for a three-tier app? Public vs private
    subnets, NAT, and why.

### Observabilidade
26. Metrics, logs, traces — what does each one answer that the others
    can't?
27. What makes a good alert? Tell me about a bad one you removed.
28. What's an SLO? Define one for a login service and explain the error
    budget to a product manager.
29. How would you instrument a new service from zero?

### CI/CD
30. Walk me through your deploy pipeline. Where can it fail and how do
    you know?
31. Canary vs blue-green vs rolling — trade-offs, and which you've run.
32. A deploy broke production. How do you roll back, and how fast?

---

## Etapa 3 — System design (60 min, sênior; às vezes pleno)

Testam decisão, não memória. Fale em voz alta, desenhe, pergunte antes
de responder.

33. Design the infrastructure for a payments API that needs 99.95%
    availability across two regions.
34. We have 300 microservices on one Kubernetes cluster. What breaks
    first, and how would you evolve it?
35. Design an observability platform for 50 teams. Cost is a concern.
36. How would you migrate a monolith on VMs to Kubernetes without
    downtime?
37. Design a CI/CD platform that 100 engineers use daily. What do you
    standardize and what do you leave open?
38. Our AWS bill doubled in six months. Where do you look, in order?

Roteiro para qualquer uma: (1) perguntas de esclarecimento — escala,
orçamento, SLA; (2) desenho simples; (3) onde quebra; (4) trade-offs
que você escolheu e por quê; (5) o que faria diferente com mais tempo.

---

## Etapa 4 — Comportamental (45 min, formato STAR)

Cada resposta: Situação (1 frase), Tarefa (1 frase), Ação (o grosso),
Resultado (com número). Tenha dez histórias prontas.

39. Tell me about the worst incident you handled.
40. Tell me about a time you disagreed with a senior engineer.
41. Tell me about a change you pushed that broke something. What did
    you do after?
42. Tell me about a time you had to convince a team to adopt something.
43. Tell me about something you automated and what it freed up.
44. Tell me about a time you had to say no to a request.
45. How do you handle being paged at 3am for something that isn't
    yours?
46. Tell me about a time you mentored someone.
47. What's a technical decision you regret?
48. How do you prioritize when everything is on fire?

---

## Etapa 5 — Negociação

49. **Faixa:** pesquise em levels.fyi, Glassdoor e nas próprias vagas.
    Contrato PJ para o Brasil costuma ficar entre 60% e 80% do salário
    de funcionário nos EUA para o mesmo nível — e ainda assim é 3 a 5
    vezes o CLT brasileiro.
50. **Nunca dê o primeiro número absoluto.** Dê uma faixa de 20% de
    amplitude, com o piso já sendo o que você aceita.
51. **Pergunte o que está incluído:** equipamento, feriados de que país,
    reajuste anual, como é pago (Deel, Remote, direto).
52. **Proposta na mão:** peça 48 horas. Sempre. Ninguém retira oferta
    por dois dias.

---

## Depois de cada entrevista

- Escreva em cinco minutos: que perguntas vieram, qual você respondeu
  mal, o que vai estudar.
- Mande um e-mail curto de agradecimento no mesmo dia.
- Reprovou? Peça feedback. Um em cinco responde, e esse um vale ouro.
