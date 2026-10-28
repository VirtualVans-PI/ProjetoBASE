# Questões em aberto

> App Glauco · Discovery · Consolidação documental em 28/10/2026 · Aprovação dos itens documentados anteriormente em revisão, por manifestação do responsável pelo projeto.
> Não são resolvidas pela aprovação documental: exigem parâmetro, critério ou decisão que ainda não constam das fontes.

## Questões com IDs históricos

| Referência existente | Situação atual | Questão sem definição |
|---|---|---|
| OPEN-001 (primeiro uso histórico) | Pendente | Ordem de prioridade entre os demais problemas da operação, além do destaque para pagamentos e presença. |
| OPEN-001 (segundo uso histórico) | Pendente | Qual valor deve assumir o limiar configurável de atraso para alertas? O código está colidido na entrevista; não foi renumerado. |
| OPEN-002 (primeiro uso histórico) | Solucionado por decisões posteriores | Atores, canais e restrições de ausência esclarecidos em FR-010 a FR-021 e decisões posteriores. Preservado para registrar a colisão histórica. |
| OPEN-002 (segundo uso histórico) | Pendente | Qual fornecedor e quais condições concretas de integração financeira e conciliação? A pergunta mantém seu código histórico colidido. |
| OPEN-017 | Pendente | Toda indicação preliminar de presença por GPS exige confirmação individual do motorista, ou a verificação humana ocorre somente por exceção? |
| OPEN-BL-001 | Encaminhado pela aprovação documental | A vigência documental do catálogo foi aprovada, respeitando revogações e precedências explícitas; outras contradições identificadas em auditoria permanecem abertas. |
| OPEN-BL-002 | Encaminhado no catálogo revisado | FR-006 e enunciados truncados identificados foram saneados nas revisões; não desfaz outros achados. |
| OPEN-BL-003 | Pendente | Detalhar atores, pré-condições, alternativas, exceções, limites e critérios de sucesso das US multiator. |
| OPEN-BL-004 | Pendente | Definir prioridade e releases; não presumidos na aprovação documental. |
| OPEN-BL-005 | Pendente | Validar dependências específicas e NFR por fluxo. |

`OPEN-003` a `OPEN-009` foram mencionados no documento temático somente como **sugestões de novos códigos**, sem enunciados individuais recuperados; não são registrados aqui como perguntas aprovadas. Não renumerar nem reutilizar os códigos colididos até haver formalização.

## Achados de auditoria com ações ainda não encerradas

| Achado existente | Severidade indicativa (análise documental) | Pergunta ou trabalho pendente | Consequência |
|---|---|---|---|
| AUD-001 / AUD-008 | Crítico | Qual é o modelo de estados e transições após indicação GPS, confirmação humana e correção? | Presença incorreta ou falsa certeza de embarque |
| AUD-007 | Importante | Como distinguir formalmente os aliases históricos colididos FR-002, FR-005, BR-001 e BR-006? | Ambiguidade documental de rastreabilidade |
| Lacuna de fonte sem novo ID | Importante | Recuperar os enunciados de BR-117, BR-266 e BR-267 antes de aprovar seu conteúdo; preservar os números até lá. | Catálogo histórico incompleto nesses três registros |
| AUD-009 | Crítico | Como agir quando o recebedor não está presente ou não está autorizado no desembarque? | Segurança na entrega do aluno |
| AUD-010 | Crítico | O que fazer quando aluno previsto não é localizado no momento da saída da escola? | Risco de aluno ficar sem transporte/sem registro |
| AUD-011 | Importante | O sistema formalizará contratos ou somente armazenará dados de vínculo e condições? | Escopo contratual indefinido |
| AUD-015 | Importante | Qual comportamento em falha, indisponibilidade, duplicidade ou atraso de notificações? | Comunicação de risco e cobranças não entregues |
| AUD-016 | Crítico | Como resolver pagamento de competência errada, retorno tardio do provedor ou indisponibilidade? | Cobrança/quitação indevida |
| AUD-017 | Crítico | Quais condições de operação e proteção de crianças pequenas limitam a otimização da rota? | Risco operacional e logístico |
| AUD-018 | Importante | Quais metas verificáveis de capacidade, desempenho, disponibilidade e continuidade? | NFR não testáveis |
| AUD-019 | Crítico | Quais regras de tratamento, acesso, retenção e proteção dos dados de crianças, localização, dados financeiros e saúde? | Exposição e possível descumprimento regulatório |
| AUD-020 | Importante | Quais vínculos objetivo→FR→BR/DEC→US→AC são efetivamente causais e validados? | Rastreabilidade interpretativa |
| AUD-005 | Importante | Quais cenários concretos substituem os AC genéricos sem testabilidade? | Aceite indefinido |
| AUD-004 (demais histórias) | Importante | Como desmembrar requisitos de diferentes atores sem alterar os IDs atuais? | Permissões e objetivos misturados |

## Questões financeiras e operacionais explicitamente sem valor

Os valores de limites de atraso, parâmetros de alertas, regras de integração, exceções de entrega e prazos de retenção **não foram registrados como escolhas**. Aprovar a existência da funcionalidade não aprova o conteúdo desses parâmetros.

## Condições de encerramento de cada questão

Cada questão deverá ser resolvida por decisão expressa do responsável pelo produto (ou por validação formal quando se tratar de critério de qualidade), com origem, impacto em FR/BR/US/AC e estado documentados. Não alterar silenciosamente textos para representar decisões inexistentes.
