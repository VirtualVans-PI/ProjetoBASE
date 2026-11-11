# Discovery — índice e governança

> App Glauco · Discovery · Consolidação documental em 28/10/2026 · Aprovação dos itens documentados anteriormente em revisão, por manifestação do responsável pelo projeto.
> Esta aprovação não supre decisões de negócio ausentes, critérios incompletos ou riscos não resolvidos.

## Escopo e finalidade

Este diretório é o **pacote documental consolidado do Discovery** do App Glauco, para gerenciamento de transporte escolar. Não constitui transcrição das entrevistas, especificação técnica de arquitetura ou autorização para implementação.

A decisão comunicada em 28/10/2026 aprova o **conteúdo já existente** que estava classificado como *proposto*, *catalogado*, *sujeito a revisão* ou similar. Essa aprovação documental não transforma hipóteses não documentadas em decisões, não restaura itens revogados e não atribui valores a parâmetros ainda indefinidos. Questões substanciais sem resposta continuam em `OPEN_QUESTIONS.md`.

## Hierarquia das evidências

1. Decisões explícitas mais recentes e correções de auditoria (incluindo DEC-168 e DEC-134).
2. Catálogo funcional revisado de FR-001 a FR-499 e backlog revisado de 129 US.
3. Consolidação revisada das 128 respostas e entrevistas originais.
4. Solicitação e dossiê inicial do transporte escolar; trabalho acadêmico como contexto, não fonte de escolhas técnicas.

## Arquivos

| Arquivo | Finalidade |
|---|---|
| [CONTEXT.md](CONTEXT.md) | Situação atual, fontes e limites |
| [VISION.md](VISION.md) | Objetivo de negócio, público e escopo |
| [STAKEHOLDERS.md](STAKEHOLDERS.md) | Stakeholders, atores e limites de atuação |
| [GLOSSARY.md](GLOSSARY.md) | Vocabulário comum |
| [BUSINESS_RULES.md](BUSINESS_RULES.md) | 306 BR históricas e situação de vigência |
| [FUNCTIONAL_REQUIREMENTS.md](FUNCTIONAL_REQUIREMENTS.md) | Catálogo integral dos 499 FR e 9 revogações |
| [NON_FUNCTIONAL_REQUIREMENTS.md](NON_FUNCTIONAL_REQUIREMENTS.md) | NFR-001 a NFR-003 e lacunas mensuráveis |
| [BACKLOG.md](BACKLOG.md) | 17 EPIC, 129 FEAT e 129 US em detalhe |
| [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md) | 619 AC históricos associados às US |
| [DECISIONS.md](DECISIONS.md) | DEC-001 a DEC-168 e precedências |
| [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) | Questões sem resposta e achados não encerrados |
| [TRACEABILITY.md](TRACEABILITY.md) | OBJ → FR → BR contextual → US → AC |

## Convenções de controle

- IDs mantidos no padrão histórico: `OBJ`, `FR`, `BR`, `NFR`, `DEC`, `EPIC`, `FEAT`, `US`, `AC`, `AUD`, `CONS`, `OPEN` e `OPEN-BL` quando já registrados.
- **Aprovado documentalmente**: a proposição existente foi aceita como registro do escopo; não significa que possua exceções, métricas e fluxos completos.
- **Revogado/não vigente**: item retido exclusivamente para rastreabilidade histórica.
- **Pendente de definição**: a decisão não está contida nas evidências, apesar da aprovação documental.
- Referências `DEC` ou `BR` descritas como **próximas** no catálogo são associações contextuais, não relações causais comprovadas.
- A ordem numérica dos identificadores nunca define prioridade nem sequência de entrega.

## Fontes consultadas

- `GRUPO 5 - Controle de VAN (1).pdf` — fonte inicial do problema, entrevista e operação.
- `128A_FR.docx` — histórico do Discovery e das 128 perguntas.
- `App_Glauco_128_Consolidacao_Revisada.docx` — consolidação temática e decisões.
- `App_Glauco_Catalogo_FR_001_499_Revisado.docx` — catálogo revisado integral.
- `App_Glauco_03_Backlog_Revisado_Auditoria.docx` — backlog revisado com AC.
- `App_Glauco_04_Auditoria_Correcoes_Impactos.docx` — achados, correções e questões abertas.
- `Projeto Dweb MANHA 2026.docx` — restrições acadêmicas específicas e contexto documental.

## DISCOVERY STATUS

| Indicador | Resultado |
|---|---:|
| Requisitos funcionais históricos | 499 |
| Requisitos funcionais vigentes vinculados a US | 490 |
| FR revogados (pagamento parcial) | 9 |
| Regras de negócio históricas (faixa preservada) | 306 |
| Regras de negócio revogadas explicitamente | 8 |
| Identificadores BR sem enunciado recuperado (não aprovados materialmente) | 3 |
| Decisões históricas identificadas | 168 |
| NFR identificados | 3 |
| EPIC / FEAT / US | 17 / 129 / 129 |
| Critérios de aceitação catalogados | 619 |
| Achados de auditoria identificados | 20 |

**Riscos conhecidos:** declaração incorreta de embarque a partir do GPS; ausência de pessoa autorizada no desembarque; aluno não localizado na escola; indisponibilidade/duplicidade na confirmação financeira ou notificações; divergências entre lançamentos offline e correções administrativas; exposição de dados sensíveis de crianças e localização; limites de desempenho e continuidade não quantificados.

**Decisões pendentes:** tratadas em `OPEN_QUESTIONS.md` e vinculadas aos achados `AUD`. O aceite do documento não determina valores para limiares, critérios operacionais, proteção de dados ou fluxo exato de confirmação de presença. Também exige recuperação dos enunciados de BR-117, BR-266 e BR-267, que não foram considerados materialmente aprovados.

**Condições para a próxima fase:** resolver ou assumir formalmente os riscos/questões bloqueantes, revisar os AC genéricos para testabilidade, validar fluxos excepcionais e permissões, concluir as relações causais de rastreabilidade e registrar solicitação explícita de mudança de fase. **A fase permanece Discovery.**
