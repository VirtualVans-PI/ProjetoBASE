# Backlog de produto consolidado

> App Glauco · Discovery · Consolidação documental em 28/10/2026 · Aprovação dos itens documentados anteriormente em revisão, por manifestação do responsável pelo projeto.
> 129 histórias aprovadas como conteúdo documental; refinamento técnico/operacional não é aprovação automática de lacunas.

## Modelo e status

- `EPIC → FEAT → US` preserva a hierarquia e os IDs revisados. `FEAT-001/US-001` constam em `EPIC-013`, sem renumeração.
- **Prioridade / planejamento / esforço:** não definidos no Discovery; não inferir pela ordem dos IDs.
- **Critérios de aceitação:** os IDs e seus textos estão integralmente em `ACCEPTANCE_CRITERIA.md`; as versões genéricas continuam visíveis e exigem detalhamento operacional (AUD-005).
- **Dependências:** a fonte declara permissões e dados cadastrais aplicáveis; dependências específicas não devem ser presumidas.
- **Histórias multiator:** algumas US agrupam FR de atores distintos. A aprovação aceita esse backlog documental, mas o desmembramento técnico permanece ação de refinamento, sem criar novo ID aqui.
- **Nenhum item de pagamento parcial revogado foi recolocado no backlog vigente.**

## EPIC-001 — Presença e ausências

Objetivo: controlar previsão de uso, ausências e alterações de presença pelos atores autorizados. Abrangência documental: FR-005 a FR-021. FR-001 a FR-004 foram realocados para EPIC-013.

### FEAT-002 — Comunicação de ausência

#### US-002 — Comunicação de ausência

**Objetivo:** executar os comportamentos documentados na feature **FEAT-002**, integrante de **EPIC-001**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-005, FR-006, FR-007, FR-008, para executar e acompanhar o processo de presença e ausências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-005 — Comunicação de ausência. O sistema deverá permitir registrar a ausência prevista de um aluno em determinado dia, sem exigir que o responsável confirme diariamente sua presença.
- FR-006 — Consulta de ausências. O sistema deverá permitir consultar as ausências informadas para apoiar a organização diária da operação.
- FR-007 — Registro e atualização do embarque. O sistema deverá permitir que a responsável pela operação registre quando um aluno não embarcar no momento da passagem da van e altere esse registro caso a situação seja apenas um atraso.
- FR-008 — Confirmação de recebimento da ausência. O sistema deverá enviar uma confirmação ao pai ou responsável após o registro da comunicação de ausência do aluno.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-003.

**Requisitos relacionados:** FR-005, FR-006, FR-007, FR-008.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-002-01, AC-002-02, AC-002-03, AC-002-04, AC-002-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-003 — Consulta de ausências

#### US-003 — Consulta de ausências

**Objetivo:** executar os comportamentos documentados na feature **FEAT-003**, integrante de **EPIC-001**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero informar e revisar ausências pelo aplicativo ou robô WhatsApp dos alunos vinculados à minha conta. A consulta administrativa prevista em FR-009 é uma capacidade distinta, mantida para refinamento de história por ator.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-009 — Consulta de ausências. O sistema deverá permitir que a Tia Cláudia consulte, no aplicativo, as ausências registradas para os alunos.
- FR-010 — Registro de ausência por aplicativo e WhatsApp. O responsável poderá informar ausências pelo aplicativo ou pelo robô de WhatsApp, com atualização do mesmo registro no sistema principal.
- FR-011 — Seleção de aluno para informar ausência. Quando o responsável escolher a opção “Informar ausência”, o robô deverá apresentar os alunos vinculados ao seu cadastro, permitindo selecionar aquele cuja ausência deseja registrar.
- FR-012 — Cancelamento da operação. Durante a seleção do aluno, o responsável deverá poder retornar ou cancelar a operação sem registrar uma ausência.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-005, BR-006.

**Requisitos relacionados:** FR-009, FR-010, FR-011, FR-012.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-003-01, AC-003-02, AC-003-03, AC-003-04, AC-003-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-004 — Seleção do trajeto da ausência

#### US-004 — Seleção do trajeto da ausência

**Objetivo:** executar os comportamentos documentados na feature **FEAT-004**, integrante de **EPIC-001**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-013, FR-014, FR-015, FR-016, para executar e acompanhar o processo de presença e ausências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-013 — Seleção do trajeto da ausência. No robô do WhatsApp, depois de selecionar o aluno, o responsável deverá indicar: somente ida, somente volta ou ida e volta.
- FR-014 — Seleção da data no robô. O robô deverá oferecer Hoje, Amanhã e Outra data; para Outra data, deverá orientar o registro no aplicativo.
- FR-015 — Orientação para ausências futuras. Se o responsável escolher uma data futura, o robô deverá explicar como registrar a ausência no aplicativo.
- FR-016 — O controle de presença deve permitir que Tia Cláudia consulte quem compareceu, quem não compareceu e quem avis. O controle de presença deve permitir que Tia Cláudia consulte quem compareceu, quem não compareceu e quem avisou previamente.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-006, BR-007, DEC-007, BR-008, BR-009.

**Requisitos relacionados:** FR-013, FR-014, FR-015, FR-016.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-004-01, AC-004-02, AC-004-03, AC-004-04, AC-004-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-005 — O robô deve oferecer as opções Hoje, Amanhã e Outra data. Para outra data, deverá orientar o…

#### US-005 — O robô deve oferecer as opções Hoje, Amanhã e Outra data. Para outra data, deverá orientar o…

**Objetivo:** executar os comportamentos documentados na feature **FEAT-005**, integrante de **EPIC-001**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-017, FR-018, FR-019, FR-020, para executar e acompanhar o processo de presença e ausências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-017 — Seleção de data Hoje, Amanhã ou Outra data. O robô deverá permitir ausências para hoje e amanhã; para outras datas, deverá orientar o uso do aplicativo.
- FR-018 — Registro de ausência pela administradora. Tia Cláudia deverá conseguir marcar o aluno como ausente diretamente no aplicativo, inclusive quando não houver aviso prévio do responsável.
- FR-019 — Alteração de presença pelo responsável. O sistema deverá permitir que o responsável cancele uma ausência anteriormente informada, fazendo com que o aluno volte a constar como previsto para utilizar a van no trajeto correspondente.
- FR-020 — Alteração de presença pelo robô. Ao solicitar uma alteração, o responsável deverá escolher Confirmar ida (utilizar o transporte) ou Negar presença (não utilizar o transporte), selecionando o trajeto aplicável conforme FR-021.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-007, BR-009, DEC-010, BR-011, DEC-012.

**Requisitos relacionados:** FR-017, FR-018, FR-019, FR-020.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-005-01, AC-005-02, AC-005-03, AC-005-04, AC-005-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-006 — Alteração de presença por trajeto

#### US-006 — Alteração de presença por trajeto

**Objetivo:** executar os comportamentos documentados na feature **FEAT-006**, integrante de **EPIC-001**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-021, para executar e acompanhar o processo de presença e ausências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-021 — Alteração de presença por trajeto. O robô deverá aplicar a alteração somente à ida, somente à volta ou a ambos os trajetos, preservando o trajeto não selecionado.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-013.

**Requisitos relacionados:** FR-021.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-006-01, AC-006-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-002 — Conferência operacional de presença

Objetivo: organizar a capacidade de negócio relacionada a conferência operacional de presença. Abrangência documental: FR-022 a FR-034.

### FEAT-007 — Acompanhamento da rota

#### US-007 — Acompanhamento da rota

**Objetivo:** executar os comportamentos documentados na feature **FEAT-007**, integrante de **EPIC-002**; benefício específico não quantificado.

**Ator explicitado na história:** equipe operacional. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como equipe operacional, quero utilizar as indicações preliminares do GPS para reduzir lançamentos manuais de presença e consultar alterações auditáveis. FR-022 (acesso familiar) e FR-024 (alteração familiar) exigem desmembramento desta história.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-022 — Acompanhamento de rota pela família autorizada. O sistema deverá permitir aos responsáveis autorizados acompanhar a localização da van, o percurso em andamento e a previsão de chegada somente da rota ativa vinculada ao aluno e compartilhada por Tia Cláudia. O aluno não terá acesso autônomo à localização por este requisito.
- FR-023 — Indicação automática preliminar de presença por GPS. O sistema deverá utilizar a passagem/parada detectada por GPS para produzir uma indicação inicial automatizada na lista operacional, identificada como originada por GPS e passível de confirmação ou correção humana quando necessário.
- FR-024 — ao responsável alterar uma ausência para presença antes do embarque. Permitir ao responsável alterar uma ausência para presença antes do embarque.
- FR-025 — no histórico as alterações de presença, com responsável pela ação e horário. Registrar no histórico as alterações de presença, com responsável pela ação e horário.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-014, DEC-017, DEC-168.

**Requisitos relacionados:** FR-022, FR-023, FR-024, FR-025.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-007-01, AC-007-02, AC-007-03, AC-007-04, AC-007-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-008 — Correção de embarque automático

#### US-008 — Correção de embarque automático

**Objetivo:** executar os comportamentos documentados na feature **FEAT-008**, integrante de **EPIC-002**; benefício específico não quantificado.

**Ator explicitado na história:** Tia Cláudia, administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como Tia Cláudia, administradora, quero consultar a situação operacional e corrigir, excepcionalmente, os registros automáticos de embarque quando a realidade divergir do GPS, preservando o histórico.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-026 — Correção da indicação automática de embarque. O sistema deverá permitir ao motorista responsável e à administradora, conforme suas permissões, corrigir indicação gerada a partir do GPS, inclusive quando o aluno não embarcar, preservando o histórico da alteração.
- FR-027 — Consulta operacional da presença. O sistema deverá disponibilizar a situação dos alunos para auxiliar Tia Cláudia a identificar quem utilizará a van na ida e quem deverá ser buscado na volta.
- FR-028 — Ordenação padrão da lista. A lista deverá apresentar inicialmente os alunos com presença confirmada, seguidos daqueles cuja presença ainda não foi confirmada.
- FR-029 — Filtros da lista. O sistema deverá permitir filtrar os alunos por escola, turno e situação de presença.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-018, DEC-168, DEC-019, DEC-020.

**Requisitos relacionados:** FR-026, FR-027, FR-028, FR-029.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-008-01, AC-008-02, AC-008-03, AC-008-04, AC-008-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-009 — Atualização da rota conforme a presença

#### US-009 — Atualização da rota conforme a presença

**Objetivo:** executar os comportamentos documentados na feature **FEAT-009**, integrante de **EPIC-002**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-030, FR-031, FR-032, FR-033, para executar e acompanhar o processo de conferência operacional de presença de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-030 — Atualização da rota conforme a presença. O sistema deverá considerar as informações de presença e ausência dos alunos na definição da rota correspondente.
- FR-031 — Configuração permanente por trajeto. O cadastro deverá permitir indicar ausência permanente na ida (usa somente a volta) ou ausência permanente na volta (usa somente a ida), sem transformar ausência ocasional em configuração permanente.
- FR-032 — Notificação de alteração de rota. O sistema deverá notificar a administradora quando uma mudança na presença dos alunos provocar uma alteração na rota.
- FR-033 — Detalhamento das alterações. A notificação deverá permitir identificar o que mudou na rota.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-021, DEC-022, DEC-023.

**Requisitos relacionados:** FR-030, FR-031, FR-032, FR-033.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-009-01, AC-009-02, AC-009-03, AC-009-04, AC-009-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-010 — Ciência das alterações

#### US-010 — Ciência das alterações

**Objetivo:** executar os comportamentos documentados na feature **FEAT-010**, integrante de **EPIC-002**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-034, para executar e acompanhar o processo de conferência operacional de presença de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-034 — Ciência das alterações. Tia Cláudia deverá visualizar as alterações realizadas e ter uma opção para indicar que tomou ciência delas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-024.

**Requisitos relacionados:** FR-034.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-010-01, AC-010-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-003 — Rotas, localização e estimativas

Objetivo: organizar a capacidade de negócio relacionada a rotas, localização e estimativas. Abrangência documental: FR-035 a FR-061.

### FEAT-011 — Identificação das rotas

#### US-011 — Identificação das rotas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-011**, integrante de **EPIC-003**; benefício específico não quantificado.

**Ator explicitado na história:** Tia Cláudia, administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como Tia Cláudia, administradora, quero identificar, organizar e compartilhar rotas para que apenas responsáveis vinculados a alunos de rotas autorizadas possam acompanhá-las.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-035 — Nomeação de múltiplas rotas. O sistema deverá permitir à administradora atribuir nomes livres às rotas. Nomes como Ensino Médio — Manhã ou Creche — Tarde são apenas exemplos, não categorias obrigatórias.
- FR-036 — Alternância entre rotas. Tia Cláudia deverá conseguir alternar entre as rotas cadastradas para consultar suas informações e acompanhar suas situações.
- FR-037 — Compartilhamento de rota. O sistema deverá permitir que a administradora disponibilize uma rota para visualização de sua localização e estimativa de chegada.
- FR-038 — Controle de acesso ao acompanhamento. O sistema deverá identificar os alunos vinculados ao responsável e disponibilizar apenas as rotas correspondentes.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-025, BR-023, DEC-026, DEC-027.

**Requisitos relacionados:** FR-035, FR-036, FR-037, FR-038.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-011-01, AC-011-02, AC-011-03, AC-011-04, AC-011-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-012 — Ativação do acompanhamento

#### US-012 — Ativação do acompanhamento

**Objetivo:** executar os comportamentos documentados na feature **FEAT-012**, integrante de **EPIC-003**; benefício específico não quantificado.

**Ator explicitado na história:** Tia Cláudia, administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como Tia Cláudia, administradora, quero disponibilizar e encerrar o acompanhamento das rotas autorizadas para dar visibilidade às famílias sem expor rotas alheias.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-039 — Ativação do acompanhamento. O sistema deverá permitir que Tia Cláudia disponibilize o acompanhamento da localização de uma rota aos responsáveis autorizados.
- FR-040 — Encerramento do compartilhamento. O sistema deverá permitir que Tia Cláudia encerre a disponibilização da localização de uma rota.
- FR-041 — Notificação de encerramento. O aplicativo deverá informar Tia Cláudia de que o compartilhamento foi encerrado.
- FR-042 — Continuação do compartilhamento. Após o encerramento automático, o aplicativo deverá oferecer a Tia Cláudia a possibilidade de continuar compartilhando a localização.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-028, BR-026, DEC-029.

**Requisitos relacionados:** FR-039, FR-040, FR-041, FR-042.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-012-01, AC-012-02, AC-012-03, AC-012-04, AC-012-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-013 — a chegada ao destino final da rota por GPS

#### US-013 — a chegada ao destino final da rota por GPS

**Objetivo:** executar os comportamentos documentados na feature **FEAT-013**, integrante de **EPIC-003**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-043, FR-044, FR-045, FR-046, para executar e acompanhar o processo de rotas, localização e estimativas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-043 — a chegada ao destino final da rota por GPS. Identificar a chegada ao destino final da rota por GPS.
- FR-044 — a existência de uma próxima rota consecutiva. Identificar a existência de uma próxima rota consecutiva.
- FR-045 — Realizar automaticamente a transição entre rotas consecutivas. Realizar automaticamente a transição entre rotas consecutivas.
- FR-046 — Manter o compartilhamento da localização durante a sequência de rotas. Manter o compartilhamento da localização durante a sequência de rotas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-032.

**Requisitos relacionados:** FR-043, FR-044, FR-045, FR-046.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-013-01, AC-013-02, AC-013-03, AC-013-04, AC-013-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-014 — Notificar Tia Cláudia sobre a transição e a continuidade do compartilhamento

#### US-014 — Notificar Tia Cláudia sobre a transição e a continuidade do compartilhamento

**Objetivo:** executar os comportamentos documentados na feature **FEAT-014**, integrante de **EPIC-003**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-047, FR-048, FR-049, FR-050, para executar e acompanhar o processo de rotas, localização e estimativas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-047 — Notificar Tia Cláudia sobre a transição e a continuidade do compartilhamento. Notificar Tia Cláudia sobre a transição e a continuidade do compartilhamento.
- FR-048 — Atualização automática das permissões. O sistema deverá atualizar as permissões de acompanhamento quando ocorrer uma transição entre rotas consecutivas.
- FR-049 — Alternância automática do acompanhamento. O sistema deverá identificar a mudança de rota ativa e atualizar automaticamente a visualização do responsável para a próxima rota autorizada.
- FR-050 — Mensagem de rota finalizada. O aplicativo deverá apresentar uma mensagem informando que a rota terminou e que o acompanhamento foi encerrado.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-032, DEC-033, DEC-034, DEC-035.

**Requisitos relacionados:** FR-047, FR-048, FR-049, FR-050.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-014-01, AC-014-02, AC-014-03, AC-014-04, AC-014-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-015 — Restabelecimento do acompanhamento na volta

#### US-015 — Restabelecimento do acompanhamento na volta

**Objetivo:** executar os comportamentos documentados na feature **FEAT-015**, integrante de **EPIC-003**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-051, FR-052, FR-053, FR-054, para executar e acompanhar o processo de rotas, localização e estimativas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-051 — Restabelecimento do acompanhamento na volta. Quando a rota de volta estiver ativa e compartilhada por Tia Cláudia, o responsável vinculado deverá poder acompanhar novamente a localização da van.
- FR-052 — Calcular a estimativa de chegada considerando o início da rota e a distância restante até o aluno. Calcular a estimativa de chegada considerando o início da rota e a distância restante até o aluno.
- FR-053 — Atualizar a estimativa de chegada quando houver atrasos durante o percurso. Atualizar a estimativa de chegada quando houver atrasos durante o percurso.
- FR-054 — Informar aos responsáveis afetados que a rota está atrasada. Informar aos responsáveis afetados que a rota está atrasada.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-035, DEC-038.

**Requisitos relacionados:** FR-051, FR-052, FR-053, FR-054.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-015-01, AC-015-02, AC-015-03, AC-015-04, AC-015-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-016 — que Tia Cláudia comunique atrasos aos responsáveis de uma rota selecionada

#### US-016 — que Tia Cláudia comunique atrasos aos responsáveis de uma rota selecionada

**Objetivo:** executar os comportamentos documentados na feature **FEAT-016**, integrante de **EPIC-003**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-055, FR-056, FR-057, FR-058, para executar e acompanhar o processo de rotas, localização e estimativas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-055 — que Tia Cláudia comunique atrasos aos responsáveis de uma rota selecionada. Permitir que Tia Cláudia comunique atrasos aos responsáveis de uma rota selecionada.
- FR-056 — a comunicação de atrasos aos responsáveis de rotas consecutivas integradas. Permitir a comunicação de atrasos aos responsáveis de rotas consecutivas integradas.
- FR-057 — Verificação do limite de atraso. O sistema deverá comparar o atraso identificado com o limite definido e notificar os responsáveis afetados quando esse limite for ultrapassado.
- FR-058 — Envio manual de aviso de atraso. O sistema deverá permitir que Tia Cláudia envie um comunicado de atraso aos responsáveis das rotas selecionadas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-038, DEC-039, DEC-040.

**Requisitos relacionados:** FR-055, FR-056, FR-057, FR-058.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-016-01, AC-016-02, AC-016-03, AC-016-04, AC-016-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-017 — Mensagens rápidas de atraso

#### US-017 — Mensagens rápidas de atraso

**Objetivo:** executar os comportamentos documentados na feature **FEAT-017**, integrante de **EPIC-003**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-059, FR-060, FR-061, para executar e acompanhar o processo de rotas, localização e estimativas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-059 — Mensagens rápidas de atraso. O sistema deverá disponibilizar opções de mensagens prontas para Tia Cláudia selecionar e enviar aos responsáveis das rotas escolhidas.
- FR-060 — Mensagens personalizadas. O sistema deverá permitir que Tia Cláudia escreva um comunicado próprio quando as mensagens rápidas não atenderem à situação.
- FR-061 — Comunicação durante a rota. As mensagens rápidas deverão continuar disponíveis durante o deslocamento, sem exigir que a rota seja interrompida.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-041, DEC-042.

**Requisitos relacionados:** FR-059, FR-060, FR-061.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-017-01, AC-017-02, AC-017-03, AC-017-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-004 — Ajudante e operação assistida

Objetivo: organizar a capacidade de negócio relacionada a ajudante e operação assistida. Abrangência documental: FR-062 a FR-072.

### FEAT-018 — o acesso individual do ajudante ao aplicativo

#### US-018 — o acesso individual do ajudante ao aplicativo

**Objetivo:** executar os comportamentos documentados na feature **FEAT-018**, integrante de **EPIC-004**; benefício específico não quantificado.

**Ator explicitado na história:** ajudante. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como ajudante, quero dispor das capacidades descritas em FR-062, FR-063, FR-064, FR-065, para executar e acompanhar o processo de ajudante e operação assistida de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-062 — o acesso individual do ajudante ao aplicativo. Permitir o acesso individual do ajudante ao aplicativo.
- FR-063 — que o ajudante registre ausências de alunos. Permitir que o ajudante registre ausências de alunos.
- FR-064 — que o ajudante corrija registros de presença. Permitir que o ajudante corrija registros de presença.
- FR-065 — que o ajudante registre e comunique problemas durante a rota. Permitir que o ajudante registre e comunique problemas durante a rota.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-044.

**Requisitos relacionados:** FR-062, FR-063, FR-064, FR-065.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-018-01, AC-018-02, AC-018-03, AC-018-04, AC-018-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-019 — no histórico as ações realizadas pelo ajudante

#### US-019 — no histórico as ações realizadas pelo ajudante

**Objetivo:** executar os comportamentos documentados na feature **FEAT-019**, integrante de **EPIC-004**; benefício específico não quantificado.

**Ator explicitado na história:** ajudante. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como ajudante, quero dispor das capacidades descritas em FR-066, FR-067, FR-068, FR-069, para executar e acompanhar o processo de ajudante e operação assistida de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-066 — no histórico as ações realizadas pelo ajudante. Identificar no histórico as ações realizadas pelo ajudante.
- FR-067 — Envio de alertas pelo ajudante. O sistema deverá permitir que o ajudante comunique problemas durante o transporte, como atrasos, imprevistos e outras ocorrências da rota.
- FR-068 — Histórico de comunicados. O sistema deverá registrar quem enviou o alerta, quando ele foi enviado e quais rotas foram selecionadas como destinatárias.
- FR-069 — Perfil operacional do ajudante. O sistema deverá disponibilizar ao ajudante as funcionalidades de presença, acompanhamento operacional das rotas e comunicação de ocorrências.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-044, DEC-045, DEC-046.

**Requisitos relacionados:** FR-066, FR-067, FR-068, FR-069.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-019-01, AC-019-02, AC-019-03, AC-019-04, AC-019-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-020 — Restrição de funcionalidades administrativas

#### US-020 — Restrição de funcionalidades administrativas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-020**, integrante de **EPIC-004**; benefício específico não quantificado.

**Ator explicitado na história:** ajudante. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como ajudante, quero dispor das capacidades descritas em FR-070, FR-071, FR-072, para executar e acompanhar o processo de ajudante e operação assistida de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-070 — Restrição de funcionalidades administrativas. O sistema deverá impedir que o ajudante acesse ou altere pagamentos, contratos, cadastros administrativos e suspensões por inadimplência.
- FR-071 — Comunicação de necessidade de alteração. O sistema deverá permitir que o ajudante informe a Tia Cláudia quando identificar a necessidade de modificar uma rota.
- FR-072 — Alteração manual pela administradora. Somente Tia Cláudia poderá realizar alterações manuais na configuração das rotas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-046, DEC-047.

**Requisitos relacionados:** FR-070, FR-071, FR-072.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-020-01, AC-020-02, AC-020-03, AC-020-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-005 — Contas familiares e autenticação

Objetivo: organizar a capacidade de negócio relacionada a contas familiares e autenticação. Abrangência documental: FR-073 a FR-100.

### FEAT-021 — Identificação do responsável principal

#### US-021 — Identificação do responsável principal

**Objetivo:** executar os comportamentos documentados na feature **FEAT-021**, integrante de **EPIC-005**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-073, FR-074, FR-075, FR-076, para executar e acompanhar o processo de contas familiares e autenticação de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-073 — Identificação do responsável principal. O sistema deverá permitir que Tia Cláudia defina qual pessoa será o responsável principal por cada aluno.
- FR-074 — Associação entre responsável e aluno. O sistema deverá vincular o aluno ao responsável principal, utilizando essa associação para determinar o acesso às funcionalidades destinadas à família.
- FR-075 — que pai e mãe utilizem a mesma conta familiar. Permitir que pai e mãe utilizem a mesma conta familiar.
- FR-076 — que Tia Cláudia atualize o telefone cadastrado. Permitir que Tia Cláudia atualize o telefone cadastrado.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-049, DEC-051.

**Requisitos relacionados:** FR-073, FR-074, FR-075, FR-076.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-021-01, AC-021-02, AC-021-03, AC-021-04, AC-021-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-022 — que Tia Cláudia atualize o e-mail cadastrado

#### US-022 — que Tia Cláudia atualize o e-mail cadastrado

**Objetivo:** executar os comportamentos documentados na feature **FEAT-022**, integrante de **EPIC-005**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-077, FR-078, FR-079, FR-080, para executar e acompanhar o processo de contas familiares e autenticação de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-077 — que Tia Cláudia atualize o e-mail cadastrado. Permitir que Tia Cláudia atualize o e-mail cadastrado.
- FR-078 — que Tia Cláudia realize a redefinição da senha da conta. Permitir que Tia Cláudia realize a redefinição da senha da conta.
- FR-079 — Histórico de alterações pela conta familiar. Para cada alteração de presença pela conta familiar, registrar aluno, trajeto, data do transporte, estado anterior e novo, data e horário da alteração, conta familiar e canal utilizado (aplicativo ou WhatsApp). A identificação da conta não comprova qual pessoa usou uma conta compartilhada.
- FR-080 — o cadastro de múltiplos números de WhatsApp vinculados à mesma conta familiar. Permitir o cadastro de múltiplos números de WhatsApp vinculados à mesma conta familiar.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-051, DEC-052, DEC-054.

**Requisitos relacionados:** FR-077, FR-078, FR-079, FR-080.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-022-01, AC-022-02, AC-022-03, AC-022-04, AC-022-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-023 — Reconhecer os números autorizados e associá-los aos alunos da conta familiar

#### US-023 — Reconhecer os números autorizados e associá-los aos alunos da conta familiar

**Objetivo:** executar os comportamentos documentados na feature **FEAT-023**, integrante de **EPIC-005**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-081, FR-082, FR-083, FR-084, para executar e acompanhar o processo de contas familiares e autenticação de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-081 — Reconhecer os números autorizados e associá-los aos alunos da conta familiar. Reconhecer os números autorizados e associá-los aos alunos da conta familiar.
- FR-082 — Consultar a situação atual do aluno antes de registrar uma ausência. Consultar a situação atual do aluno antes de registrar uma ausência.
- FR-083 — Informar ao usuário quando a ausência solicitada já estiver registrada. Informar ao usuário quando a ausência solicitada já estiver registrada.
- FR-084 — que Tia Cláudia cadastre contas familiares. Permitir que Tia Cláudia cadastre contas familiares.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-054, DEC-056.

**Requisitos relacionados:** FR-081, FR-082, FR-083, FR-084.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-023-01, AC-023-02, AC-023-03, AC-023-04, AC-023-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-024 — que Tia Cláudia cadastre, altere e remova números de WhatsApp autorizados

#### US-024 — que Tia Cláudia cadastre, altere e remova números de WhatsApp autorizados

**Objetivo:** executar os comportamentos documentados na feature **FEAT-024**, integrante de **EPIC-005**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-085, FR-086, FR-087, FR-088, para executar e acompanhar o processo de contas familiares e autenticação de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-085 — que Tia Cláudia cadastre, altere e remova números de WhatsApp autorizados. Permitir que Tia Cláudia cadastre, altere e remova números de WhatsApp autorizados.
- FR-086 — que os responsáveis façam login no aplicativo. Permitir que os responsáveis façam login no aplicativo.
- FR-087 — Restringir a criação e a alteração de cadastros familiares à administradora. Restringir a criação e a alteração de cadastros familiares à administradora.
- FR-088 — uma senha provisória quando Tia Cláudia cadastrar uma conta familiar. Disponibilizar uma senha provisória quando Tia Cláudia cadastrar uma conta familiar.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-056, DEC-059.

**Requisitos relacionados:** FR-085, FR-086, FR-087, FR-088.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-024-01, AC-024-02, AC-024-03, AC-024-04, AC-024-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-025 — autenticação utilizando telefone e senha

#### US-025 — autenticação utilizando telefone e senha

**Objetivo:** executar os comportamentos documentados na feature **FEAT-025**, integrante de **EPIC-005**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-089, FR-090, FR-091, FR-092, para executar e acompanhar o processo de contas familiares e autenticação de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-089 — autenticação utilizando telefone e senha. Permitir autenticação utilizando telefone e senha.
- FR-090 — autenticação utilizando e-mail e senha. Permitir autenticação utilizando e-mail e senha.
- FR-091 — que os responsáveis alterem a própria senha após realizar login. Permitir que os responsáveis alterem a própria senha após realizar login.
- FR-092 — Alteração obrigatória no primeiro acesso. O sistema deverá identificar quando uma conta estiver utilizando a senha provisória e direcionar o responsável para a criação de uma nova senha.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-059, DEC-060.

**Requisitos relacionados:** FR-089, FR-090, FR-091, FR-092.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-025-01, AC-025-02, AC-025-03, AC-025-04, AC-025-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-026 — Bloqueio de funcionalidades até a troca

#### US-026 — Bloqueio de funcionalidades até a troca

**Objetivo:** executar os comportamentos documentados na feature **FEAT-026**, integrante de **EPIC-005**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-093, FR-094, FR-095, FR-096, para executar e acompanhar o processo de contas familiares e autenticação de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-093 — Bloqueio de funcionalidades até a troca. Enquanto a senha provisória não for substituída, o responsável não poderá acessar as demais funcionalidades do aplicativo.
- FR-094 — que o responsável solicite a recuperação de senha. Permitir que o responsável solicite a recuperação de senha.
- FR-095 — Enviar um código de verificação pelo WhatsApp ou e-mail cadastrado. Enviar um código de verificação pelo WhatsApp ou e-mail cadastrado.
- FR-096 — a definição de uma nova senha após a validação do código. Permitir a definição de uma nova senha após a validação do código.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-060, DEC-063.

**Requisitos relacionados:** FR-093, FR-094, FR-095, FR-096.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-026-01, AC-026-02, AC-026-03, AC-026-04, AC-026-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-027 — que Tia Cláudia redefina a senha de uma conta familiar

#### US-027 — que Tia Cláudia redefina a senha de uma conta familiar

**Objetivo:** executar os comportamentos documentados na feature **FEAT-027**, integrante de **EPIC-005**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-097, FR-098, FR-099, FR-100, para executar e acompanhar o processo de contas familiares e autenticação de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-097 — que Tia Cláudia redefina a senha de uma conta familiar. Permitir que Tia Cláudia redefina a senha de uma conta familiar.
- FR-098 — as alterações de senha em um histórico consultável pela administradora. Registrar as alterações de senha em um histórico consultável pela administradora.
- FR-099 — Redefinição administrativa de senha. O sistema deverá permitir que Tia Cláudia estabeleça uma nova senha definitiva para uma conta familiar.
- FR-100 — Alteração de senha nas configurações. Os responsáveis deverão poder alterar a senha da própria conta por meio das configurações do aplicativo.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-063, DEC-064.

**Requisitos relacionados:** FR-097, FR-098, FR-099, FR-100.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-027-01, AC-027-02, AC-027-03, AC-027-04, AC-027-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-006 — Cadastro e histórico de alunos

Objetivo: organizar a capacidade de negócio relacionada a cadastro e histórico de alunos. Abrangência documental: FR-101 a FR-136.

### FEAT-028 — o cadastro manual de alunos pela administradora

#### US-028 — o cadastro manual de alunos pela administradora

**Objetivo:** executar os comportamentos documentados na feature **FEAT-028**, integrante de **EPIC-006**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-101, FR-102, FR-103, FR-104, para executar e acompanhar o processo de cadastro e histórico de alunos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-101 — o cadastro manual de alunos pela administradora. Permitir o cadastro manual de alunos pela administradora.
- FR-102 — informações escolares, de transporte, saúde relevante e pessoas autorizadas. Registrar informações escolares, de transporte, saúde relevante e pessoas autorizadas.
- FR-103 — o recebimento de dados preenchidos pelos responsáveis no Google Forms. Permitir o recebimento de dados preenchidos pelos responsáveis no Google Forms.
- FR-104 — Importar automaticamente as respostas recebidas para o cadastro dos alunos. Importar automaticamente as respostas recebidas para o cadastro dos alunos.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-068.

**Requisitos relacionados:** FR-101, FR-102, FR-103, FR-104.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-028-01, AC-028-02, AC-028-03, AC-028-04, AC-028-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-029 — a edição posterior dos dados cadastrados ou importados

#### US-029 — a edição posterior dos dados cadastrados ou importados

**Objetivo:** executar os comportamentos documentados na feature **FEAT-029**, integrante de **EPIC-006**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-105, FR-106, FR-107, FR-108, para executar e acompanhar o processo de cadastro e histórico de alunos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-105 — a edição posterior dos dados cadastrados ou importados. Permitir a edição posterior dos dados cadastrados ou importados.
- FR-106 — os dados importados do Google Forms com status Pendente de aprovação. Registrar os dados importados do Google Forms com status Pendente de aprovação.
- FR-107 — à administradora uma lista de cadastros pendentes. Disponibilizar à administradora uma lista de cadastros pendentes.
- FR-108 — que Tia Cláudia consulte e corrija os dados antes da aprovação. Permitir que Tia Cláudia consulte e corrija os dados antes da aprovação.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-068, DEC-069.

**Requisitos relacionados:** FR-105, FR-106, FR-107, FR-108.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-029-01, AC-029-02, AC-029-03, AC-029-04, AC-029-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-030 — que Tia Cláudia aprove o cadastro do aluno

#### US-030 — que Tia Cláudia aprove o cadastro do aluno

**Objetivo:** executar os comportamentos documentados na feature **FEAT-030**, integrante de **EPIC-006**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-109, FR-110, FR-111, FR-112, para executar e acompanhar o processo de cadastro e histórico de alunos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-109 — que Tia Cláudia aprove o cadastro do aluno. Permitir que Tia Cláudia aprove o cadastro do aluno.
- FR-110 — Incluir o aluno nas listas de transporte somente após a aprovação e quando estiver vinculado ao serviço corres. Incluir o aluno nas listas de transporte somente após a aprovação e quando estiver vinculado ao serviço correspondente.
- FR-111 — que Tia Cláudia rejeite cadastros pendentes. Permitir que Tia Cláudia rejeite cadastros pendentes.
- FR-112 — complementar informações ausentes antes da aprovação. Permitir complementar informações ausentes antes da aprovação.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-069, DEC-073.

**Requisitos relacionados:** FR-109, FR-110, FR-111, FR-112.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-030-01, AC-030-02, AC-030-03, AC-030-04, AC-030-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-031 — possíveis cadastros duplicados para conferência

#### US-031 — possíveis cadastros duplicados para conferência

**Objetivo:** executar os comportamentos documentados na feature **FEAT-031**, integrante de **EPIC-006**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-113, FR-114, FR-115, FR-116, para executar e acompanhar o processo de cadastro e histórico de alunos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-113 — possíveis cadastros duplicados para conferência. Identificar possíveis cadastros duplicados para conferência.
- FR-114 — Exibir os dados dos cadastros semelhantes para comparação. Exibir os dados dos cadastros semelhantes para comparação.
- FR-115 — atualizar o cadastro existente com informações recebidas pelo formulário. Permitir atualizar o cadastro existente com informações recebidas pelo formulário.
- FR-116 — Vincular cada aluno à conta familiar e ao telefone do responsável. Vincular cada aluno à conta familiar e ao telefone do responsável.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-073.

**Requisitos relacionados:** FR-113, FR-114, FR-115, FR-116.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-031-01, AC-031-02, AC-031-03, AC-031-04, AC-031-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-032 — Comparar as informações recebidas pelo Google Forms com os dados existentes do aluno

#### US-032 — Comparar as informações recebidas pelo Google Forms com os dados existentes do aluno

**Objetivo:** executar os comportamentos documentados na feature **FEAT-032**, integrante de **EPIC-006**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-117, FR-118, FR-119, FR-120, para executar e acompanhar o processo de cadastro e histórico de alunos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-117 — Comparar as informações recebidas pelo Google Forms com os dados existentes do aluno. Comparar as informações recebidas pelo Google Forms com os dados existentes do aluno.
- FR-118 — Destacar os campos que apresentam diferenças. Destacar os campos que apresentam diferenças.
- FR-119 — que Tia Cláudia escolha individualmente quais informações atualizar. Permitir que Tia Cláudia escolha individualmente quais informações atualizar.
- FR-120 — Preservar os dados anteriores quando uma alteração não for aprovada. Preservar os dados anteriores quando uma alteração não for aprovada.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-074.

**Requisitos relacionados:** FR-117, FR-118, FR-119, FR-120.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-032-01, AC-032-02, AC-032-03, AC-032-04, AC-032-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-033 — o histórico de alterações dos dados cadastrais

#### US-033 — o histórico de alterações dos dados cadastrais

**Objetivo:** executar os comportamentos documentados na feature **FEAT-033**, integrante de **EPIC-006**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-121, FR-122, FR-123, FR-124, para executar e acompanhar o processo de cadastro e histórico de alunos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-121 — o histórico de alterações dos dados cadastrais. Registrar o histórico de alterações dos dados cadastrais.
- FR-122 — consultar os valores anteriores e atuais. Permitir consultar os valores anteriores e atuais.
- FR-123 — desfazer alterações cadastrais. Permitir desfazer alterações cadastrais.
- FR-124 — refazer alterações desfeitas. Permitir refazer alterações desfeitas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-077.

**Requisitos relacionados:** FR-121, FR-122, FR-123, FR-124.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-033-01, AC-033-02, AC-033-03, AC-033-04, AC-033-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-034 — também as operações de desfazer e refazer no histórico

#### US-034 — também as operações de desfazer e refazer no histórico

**Objetivo:** executar os comportamentos documentados na feature **FEAT-034**, integrante de **EPIC-006**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-125, FR-126, FR-127, FR-128, para executar e acompanhar o processo de cadastro e histórico de alunos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-125 — também as operações de desfazer e refazer no histórico. Registrar também as operações de desfazer e refazer no histórico.
- FR-126 — Undo e Redo durante a edição de cadastros. Disponibilizar Undo e Redo durante a edição de cadastros.
- FR-127 — Manter um histórico de versões salvas dos cadastros. Manter um histórico de versões salvas dos cadastros.
- FR-128 — consultar versões anteriores e seus respectivos dados. Permitir consultar versões anteriores e seus respectivos dados.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-077, DEC-080.

**Requisitos relacionados:** FR-125, FR-126, FR-127, FR-128.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-034-01, AC-034-02, AC-034-03, AC-034-04, AC-034-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-035 — restaurar uma versão antiga do cadastro

#### US-035 — restaurar uma versão antiga do cadastro

**Objetivo:** executar os comportamentos documentados na feature **FEAT-035**, integrante de **EPIC-006**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-129, FR-130, FR-131, FR-132, para executar e acompanhar o processo de cadastro e histórico de alunos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-129 — restaurar uma versão antiga do cadastro. Permitir restaurar uma versão antiga do cadastro.
- FR-130 — Destacar visualmente os campos modificados. Destacar visualmente os campos modificados.
- FR-131 — Preservar a rastreabilidade das restaurações realizadas. Preservar a rastreabilidade das restaurações realizadas.
- FR-132 — a restauração completa de uma versão anterior do cadastro. Permitir a restauração completa de uma versão anterior do cadastro.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-080, DEC-082.

**Requisitos relacionados:** FR-129, FR-130, FR-131, FR-132.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-035-01, AC-035-02, AC-035-03, AC-035-04, AC-035-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-036 — selecionar individualmente os campos que serão restaurados

#### US-036 — selecionar individualmente os campos que serão restaurados

**Objetivo:** executar os comportamentos documentados na feature **FEAT-036**, integrante de **EPIC-006**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-133, FR-134, FR-135, FR-136, para executar e acompanhar o processo de cadastro e histórico de alunos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-133 — selecionar individualmente os campos que serão restaurados. Permitir selecionar individualmente os campos que serão restaurados.
- FR-134 — restaurar vários campos simultaneamente. Permitir restaurar vários campos simultaneamente.
- FR-135 — Preservar os valores atuais dos campos não selecionados. Preservar os valores atuais dos campos não selecionados.
- FR-136 — Exibir uma comparação entre os valores atuais e os valores da versão selecionada antes da confirmação. Exibir uma comparação entre os valores atuais e os valores da versão selecionada antes da confirmação.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-082.

**Requisitos relacionados:** FR-133, FR-134, FR-135, FR-136.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-036-01, AC-036-02, AC-036-03, AC-036-04, AC-036-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-007 — Mudanças cadastrais com impacto em rotas

Objetivo: organizar a capacidade de negócio relacionada a mudanças cadastrais com impacto em rotas. Abrangência documental: FR-137 a FR-158.

### FEAT-037 — alterações cadastrais que possam afetar as rotas

#### US-037 — alterações cadastrais que possam afetar as rotas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-037**, integrante de **EPIC-007**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-137, FR-138, FR-139, FR-140, para executar e acompanhar o processo de mudanças cadastrais com impacto em rotas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-137 — alterações cadastrais que possam afetar as rotas. Identificar alterações cadastrais que possam afetar as rotas.
- FR-138 — Notificar Tia Cláudia sobre o possível impacto da alteração. Notificar Tia Cláudia sobre o possível impacto da alteração.
- FR-139 — Apresentar os dados anteriores e novos para conferência. Apresentar os dados anteriores e novos para conferência.
- FR-140 — Solicitar confirmação antes de aplicar alterações nas rotas. Solicitar confirmação antes de aplicar alterações nas rotas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-083.

**Requisitos relacionados:** FR-137, FR-138, FR-139, FR-140.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-037-01, AC-037-02, AC-037-03, AC-037-04, AC-037-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-038 — Manter a configuração anterior da rota enquanto a mudança não for aprovada

#### US-038 — Manter a configuração anterior da rota enquanto a mudança não for aprovada

**Objetivo:** executar os comportamentos documentados na feature **FEAT-038**, integrante de **EPIC-007**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-141, FR-142, FR-143, FR-144, para executar e acompanhar o processo de mudanças cadastrais com impacto em rotas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-141 — Manter a configuração anterior da rota enquanto a mudança não for aprovada. Manter a configuração anterior da rota enquanto a mudança não for aprovada.
- FR-142 — Aplicar imediatamente às rotas as alterações aprovadas por Tia Cláudia. Aplicar imediatamente às rotas as alterações aprovadas por Tia Cláudia.
- FR-143 — Recalcular o trajeto em andamento quando uma alteração aprovada afetar seu percurso. Recalcular o trajeto em andamento quando uma alteração aprovada afetar seu percurso.
- FR-144 — Atualizar a previsão de chegada (ETA) conforme o novo trajeto. Atualizar a previsão de chegada (ETA) conforme o novo trajeto.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-083, DEC-084.

**Requisitos relacionados:** FR-141, FR-142, FR-143, FR-144.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-038-01, AC-038-02, AC-038-03, AC-038-04, AC-038-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-039 — no histórico a alteração realizada e sua aplicação à rota

#### US-039 — no histórico a alteração realizada e sua aplicação à rota

**Objetivo:** executar os comportamentos documentados na feature **FEAT-039**, integrante de **EPIC-007**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-145, FR-146, FR-147, FR-148, para executar e acompanhar o processo de mudanças cadastrais com impacto em rotas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-145 — no histórico a alteração realizada e sua aplicação à rota. Registrar no histórico a alteração realizada e sua aplicação à rota.
- FR-146 — quando a van já passou pelo ponto de embarque anterior. Identificar quando a van já passou pelo ponto de embarque anterior.
- FR-147 — Alertar Tia Cláudia sobre a alteração de endereço nessa situação. Alertar Tia Cláudia sobre a alteração de endereço nessa situação.
- FR-148 — que Tia Cláudia decida se deseja incluir o novo endereço na viagem atual. Permitir que Tia Cláudia decida se deseja incluir o novo endereço na viagem atual.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-084, DEC-085.

**Requisitos relacionados:** FR-145, FR-146, FR-147, FR-148.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-039-01, AC-039-02, AC-039-03, AC-039-04, AC-039-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-040 — Recalcular a rota caso Tia Cláudia autorize a inclusão

#### US-040 — Recalcular a rota caso Tia Cláudia autorize a inclusão

**Objetivo:** executar os comportamentos documentados na feature **FEAT-040**, integrante de **EPIC-007**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-149, FR-150, FR-151, FR-152, para executar e acompanhar o processo de mudanças cadastrais com impacto em rotas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-149 — Recalcular a rota caso Tia Cláudia autorize a inclusão. Recalcular a rota caso Tia Cláudia autorize a inclusão.
- FR-150 — Manter o novo endereço cadastrado sem incluí-lo na viagem atual caso Tia Cláudia não autorize. Manter o novo endereço cadastrado sem incluí-lo na viagem atual caso Tia Cláudia não autorize.
- FR-151 — Recalcular o ETA dos alunos afetados por alterações no percurso. Recalcular o ETA dos alunos afetados por alterações no percurso.
- FR-152 — Atualizar automaticamente o ETA exibido no aplicativo dos responsáveis. Atualizar automaticamente o ETA exibido no aplicativo dos responsáveis.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-085, DEC-086.

**Requisitos relacionados:** FR-149, FR-150, FR-151, FR-152.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-040-01, AC-040-02, AC-040-03, AC-040-04, AC-040-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-041 — Evitar notificações específicas aos responsáveis quando ocorrer apenas uma alteração de perc…

#### US-041 — Evitar notificações específicas aos responsáveis quando ocorrer apenas uma alteração de perc…

**Objetivo:** executar os comportamentos documentados na feature **FEAT-041**, integrante de **EPIC-007**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-153, FR-154, FR-155, FR-156, para executar e acompanhar o processo de mudanças cadastrais com impacto em rotas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-153 — Evitar notificações específicas aos responsáveis quando ocorrer apenas uma alteração de percurso. Evitar notificações específicas aos responsáveis quando ocorrer apenas uma alteração de percurso.
- FR-154 — alterações de endereço de alunos já embarcados. Identificar alterações de endereço de alunos já embarcados.
- FR-155 — Solicitar confirmação sobre o novo destino de desembarque na viagem atual. Solicitar confirmação sobre o novo destino de desembarque na viagem atual.
- FR-156 — Atualizar o destino e recalcular a rota quando autorizado. Atualizar o destino e recalcular a rota quando autorizado.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-086, DEC-087.

**Requisitos relacionados:** FR-153, FR-154, FR-155, FR-156.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-041-01, AC-041-02, AC-041-03, AC-041-04, AC-041-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-042 — Preservar o destino anterior na viagem atual quando a mudança não for autorizada

#### US-042 — Preservar o destino anterior na viagem atual quando a mudança não for autorizada

**Objetivo:** executar os comportamentos documentados na feature **FEAT-042**, integrante de **EPIC-007**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-157, FR-158, para executar e acompanhar o processo de mudanças cadastrais com impacto em rotas de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-157 — Preservar o destino anterior na viagem atual quando a mudança não for autorizada. Preservar o destino anterior na viagem atual quando a mudança não for autorizada.
- FR-158 — a decisão de Tia Cláudia no histórico. Registrar a decisão de Tia Cláudia no histórico.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-087.

**Requisitos relacionados:** FR-157, FR-158.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-042-01, AC-042-02, AC-042-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-008 — Notificações e autorizações de entrega

Objetivo: organizar a capacidade de negócio relacionada a notificações e autorizações de entrega. Abrangência documental: FR-159 a FR-179.

### FEAT-043 — o envio de notificações aos responsáveis conforme os eventos previstos no sistema

#### US-043 — o envio de notificações aos responsáveis conforme os eventos previstos no sistema

**Objetivo:** executar os comportamentos documentados na feature **FEAT-043**, integrante de **EPIC-008**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-159, FR-160, FR-161, FR-162, para executar e acompanhar o processo de notificações e autorizações de entrega de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-159 — o envio de notificações aos responsáveis conforme os eventos previstos no sistema. Permitir o envio de notificações aos responsáveis conforme os eventos previstos no sistema.
- FR-160 — a visualização das notificações recebidas no aplicativo. Permitir a visualização das notificações recebidas no aplicativo.
- FR-161 — que os pais selecionem uma pessoa autorizada para receber o aluno em determinada data. Permitir que os pais selecionem uma pessoa autorizada para receber o aluno em determinada data.
- FR-162 — Exibir somente pessoas previamente cadastradas como autorizadas para aquele aluno. Exibir somente pessoas previamente cadastradas como autorizadas para aquele aluno.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-088, DEC-090.

**Requisitos relacionados:** FR-159, FR-160, FR-161, FR-162.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-043-01, AC-043-02, AC-043-03, AC-043-04, AC-043-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-044 — a pessoa selecionada e a data correspondente

#### US-044 — a pessoa selecionada e a data correspondente

**Objetivo:** executar os comportamentos documentados na feature **FEAT-044**, integrante de **EPIC-008**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-163, FR-164, FR-165, FR-166, para executar e acompanhar o processo de notificações e autorizações de entrega de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-163 — a pessoa selecionada e a data correspondente. Registrar a pessoa selecionada e a data correspondente.
- FR-164 — Notificar automaticamente Tia Cláudia quando houver alteração. Notificar automaticamente Tia Cláudia quando houver alteração.
- FR-165 — a informação atualizada na consulta operacional de desembarque. Disponibilizar a informação atualizada na consulta operacional de desembarque.
- FR-166 — que os pais cadastrem pessoas que poderão receber seus filhos. Permitir que os pais cadastrem pessoas que poderão receber seus filhos.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-090, DEC-095.

**Requisitos relacionados:** FR-163, FR-164, FR-165, FR-166.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-044-01, AC-044-02, AC-044-03, AC-044-04, AC-044-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-045 — informar o endereço dessas pessoas

#### US-045 — informar o endereço dessas pessoas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-045**, integrante de **EPIC-008**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-167, FR-168, FR-169, FR-170, para executar e acompanhar o processo de notificações e autorizações de entrega de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-167 — informar o endereço dessas pessoas. Permitir informar o endereço dessas pessoas.
- FR-168 — Notificar Tia Cláudia sobre novos cadastros ou alterações. Notificar Tia Cláudia sobre novos cadastros ou alterações.
- FR-169 — que Tia Cláudia avalie e aprove ou rejeite a inclusão de um endereço na rota. Permitir que Tia Cláudia avalie e aprove ou rejeite a inclusão de um endereço na rota.
- FR-170 — Impedir a inclusão de um endereço rejeitado na rota correspondente. Impedir a inclusão de um endereço rejeitado na rota correspondente.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-095.

**Requisitos relacionados:** FR-167, FR-168, FR-169, FR-170.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-045-01, AC-045-02, AC-045-03, AC-045-04, AC-045-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-046 — manter uma pessoa autorizada mesmo quando seu endereço for rejeitado

#### US-046 — manter uma pessoa autorizada mesmo quando seu endereço for rejeitado

**Objetivo:** executar os comportamentos documentados na feature **FEAT-046**, integrante de **EPIC-008**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-171, FR-172, FR-173, FR-174, para executar e acompanhar o processo de notificações e autorizações de entrega de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-171 — manter uma pessoa autorizada mesmo quando seu endereço for rejeitado. Permitir manter uma pessoa autorizada mesmo quando seu endereço for rejeitado.
- FR-172 — Diferenciar a autorização da pessoa da aprovação de seu endereço como destino. Diferenciar a autorização da pessoa da aprovação de seu endereço como destino.
- FR-173 — selecionar essa pessoa para receber a criança em um endereço de entrega já aprovado. Permitir selecionar essa pessoa para receber a criança em um endereço de entrega já aprovado.
- FR-174 — selecionar uma pessoa autorizada para uma data específica. Permitir selecionar uma pessoa autorizada para uma data específica.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-096, DEC-098.

**Requisitos relacionados:** FR-171, FR-172, FR-173, FR-174.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-046-01, AC-046-02, AC-046-03, AC-046-04, AC-046-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-047 — configurar autorizações recorrentes por dia da semana

#### US-047 — configurar autorizações recorrentes por dia da semana

**Objetivo:** executar os comportamentos documentados na feature **FEAT-047**, integrante de **EPIC-008**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-175, FR-176, FR-177, FR-178, para executar e acompanhar o processo de notificações e autorizações de entrega de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-175 — configurar autorizações recorrentes por dia da semana. Permitir configurar autorizações recorrentes por dia da semana.
- FR-176 — consultar e alterar as autorizações programadas. Permitir consultar e alterar as autorizações programadas.
- FR-177 — Notificar Tia Cláudia quando uma autorização for criada ou modificada. Notificar Tia Cláudia quando uma autorização for criada ou modificada.
- FR-178 — exceções em datas específicas sem modificar autorizações recorrentes. Permitir exceções em datas específicas sem modificar autorizações recorrentes.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-098, DEC-102.

**Requisitos relacionados:** FR-175, FR-176, FR-177, FR-178.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-047-01, AC-047-02, AC-047-03, AC-047-04, AC-047-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-048 — Notificar Tia Cláudia quando uma exceção for registrada

#### US-048 — Notificar Tia Cláudia quando uma exceção for registrada

**Objetivo:** executar os comportamentos documentados na feature **FEAT-048**, integrante de **EPIC-008**; benefício específico não quantificado.

**Ator explicitado na história:** responsável familiar. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como responsável familiar, quero dispor das capacidades descritas em FR-179, para executar e acompanhar o processo de notificações e autorizações de entrega de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-179 — Notificar Tia Cláudia quando uma exceção for registrada. Notificar Tia Cláudia quando uma exceção for registrada.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-102.

**Requisitos relacionados:** FR-179.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-048-01, AC-048-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-009 — Central de avisos e ocorrências

Objetivo: organizar a capacidade de negócio relacionada a central de avisos e ocorrências. Abrangência documental: FR-180 a FR-205.

### FEAT-049 — uma Central de Avisos para a administradora

#### US-049 — uma Central de Avisos para a administradora

**Objetivo:** executar os comportamentos documentados na feature **FEAT-049**, integrante de **EPIC-009**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-180, FR-181, FR-182, FR-183, para executar e acompanhar o processo de central de avisos e ocorrências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-180 — uma Central de Avisos para a administradora. Disponibilizar uma Central de Avisos para a administradora.
- FR-181 — filtrar os alertas por nível de prioridade. Permitir filtrar os alertas por nível de prioridade.
- FR-182 — Destacar visualmente os alertas mais importantes. Destacar visualmente os alertas mais importantes.
- FR-183 — Exibir informações sobre o evento que originou cada alerta. Exibir informações sobre o evento que originou cada alerta.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-102.

**Requisitos relacionados:** FR-180, FR-181, FR-182, FR-183.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-049-01, AC-049-02, AC-049-03, AC-049-04, AC-049-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-050 — Classificar automaticamente os alertas conforme sua categoria

#### US-050 — Classificar automaticamente os alertas conforme sua categoria

**Objetivo:** executar os comportamentos documentados na feature **FEAT-050**, integrante de **EPIC-009**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-184, FR-185, FR-186, FR-187, para executar e acompanhar o processo de central de avisos e ocorrências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-184 — Classificar automaticamente os alertas conforme sua categoria. Classificar automaticamente os alertas conforme sua categoria.
- FR-185 — que Tia Cláudia personalize a prioridade de cada categoria. Permitir que Tia Cláudia personalize a prioridade de cada categoria.
- FR-186 — filtrar os alertas por prioridade. Permitir filtrar os alertas por prioridade.
- FR-187 — Destacar os alertas de alta prioridade na Central de Avisos. Destacar os alertas de alta prioridade na Central de Avisos.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-104.

**Requisitos relacionados:** FR-184, FR-185, FR-186, FR-187.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-050-01, AC-050-02, AC-050-03, AC-050-04, AC-050-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-051 — Aplicar as prioridades personalizadas aos novos alertas

#### US-051 — Aplicar as prioridades personalizadas aos novos alertas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-051**, integrante de **EPIC-009**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-188, FR-189, FR-190, FR-191, para executar e acompanhar o processo de central de avisos e ocorrências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-188 — Aplicar as prioridades personalizadas aos novos alertas. Aplicar as prioridades personalizadas aos novos alertas.
- FR-189 — automaticamente quando a situação associada a um alerta foi resolvida. Identificar automaticamente quando a situação associada a um alerta foi resolvida.
- FR-190 — Atualizar o status do alerta para Resolvido. Atualizar o status do alerta para Resolvido.
- FR-191 — Manter os alertas resolvidos em um histórico consultável. Manter os alertas resolvidos em um histórico consultável.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-104, DEC-105.

**Requisitos relacionados:** FR-188, FR-189, FR-190, FR-191.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-051-01, AC-051-02, AC-051-03, AC-051-04, AC-051-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-052 — filtrar os alertas por status: pendentes ou resolvidos

#### US-052 — filtrar os alertas por status: pendentes ou resolvidos

**Objetivo:** executar os comportamentos documentados na feature **FEAT-052**, integrante de **EPIC-009**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-192, FR-193, FR-194, FR-195, para executar e acompanhar o processo de central de avisos e ocorrências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-192 — filtrar os alertas por status: pendentes ou resolvidos. Permitir filtrar os alertas por status: pendentes ou resolvidos.
- FR-193 — a data e o horário da resolução. Registrar a data e o horário da resolução.
- FR-194 — Exibir os avisos operacionais referentes ao dia selecionado. Exibir os avisos operacionais referentes ao dia selecionado.
- FR-195 — Manter os avisos consultáveis mesmo depois de resolvidos. Manter os avisos consultáveis mesmo depois de resolvidos.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-105, DEC-108.

**Requisitos relacionados:** FR-192, FR-193, FR-194, FR-195.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-052-01, AC-052-02, AC-052-03, AC-052-04, AC-052-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-053 — filtrar avisos por impacto na rota

#### US-053 — filtrar avisos por impacto na rota

**Objetivo:** executar os comportamentos documentados na feature **FEAT-053**, integrante de **EPIC-009**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-196, FR-197, FR-198, FR-199, para executar e acompanhar o processo de central de avisos e ocorrências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-196 — filtrar avisos por impacto na rota. Permitir filtrar avisos por impacto na rota.
- FR-197 — combinar filtros de prioridade, categoria e status. Permitir combinar filtros de prioridade, categoria e status.
- FR-198 — Diferenciar visualmente avisos pendentes e resolvidos, sem ocultá-los automaticamente. Diferenciar visualmente avisos pendentes e resolvidos, sem ocultá-los automaticamente.
- FR-199 — um calendário na Central de Avisos. Disponibilizar um calendário na Central de Avisos.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-108, DEC-109.

**Requisitos relacionados:** FR-196, FR-197, FR-198, FR-199.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-053-01, AC-053-02, AC-053-03, AC-053-04, AC-053-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-054 — consultar avisos de datas anteriores

#### US-054 — consultar avisos de datas anteriores

**Objetivo:** executar os comportamentos documentados na feature **FEAT-054**, integrante de **EPIC-009**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-200, FR-201, FR-202, FR-203, para executar e acompanhar o processo de central de avisos e ocorrências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-200 — consultar avisos de datas anteriores. Permitir consultar avisos de datas anteriores.
- FR-201 — consultar os avisos do dia atual. Permitir consultar os avisos do dia atual.
- FR-202 — consultar avisos programados para datas futuras. Permitir consultar avisos programados para datas futuras.
- FR-203 — Aplicar os filtros existentes à data selecionada. Aplicar os filtros existentes à data selecionada.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-109.

**Requisitos relacionados:** FR-200, FR-201, FR-202, FR-203.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-054-01, AC-054-02, AC-054-03, AC-054-04, AC-054-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-055 — visualizar os avisos de todas as rotas em conjunto

#### US-055 — visualizar os avisos de todas as rotas em conjunto

**Objetivo:** executar os comportamentos documentados na feature **FEAT-055**, integrante de **EPIC-009**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-204, FR-205, para executar e acompanhar o processo de central de avisos e ocorrências de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-204 — visualizar os avisos de todas as rotas em conjunto. Permitir visualizar os avisos de todas as rotas em conjunto.
- FR-205 — filtrar os avisos por uma rota específica. Permitir filtrar os avisos por uma rota específica.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-110.

**Requisitos relacionados:** FR-204, FR-205.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-055-01, AC-055-02, AC-055-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-010 — Mensalidades, cobrança e vencimentos

Objetivo: organizar a capacidade de negócio relacionada a mensalidades, cobrança e vencimentos. Abrangência documental: FR-206 a FR-245.

### FEAT-056 — combinar o filtro de rota com data, prioridade, categoria e impacto no trajeto

#### US-056 — combinar o filtro de rota com data, prioridade, categoria e impacto no trajeto

**Objetivo:** executar os comportamentos documentados na feature **FEAT-056**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-206, FR-207, FR-208, FR-209, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-206 — combinar o filtro de rota com data, prioridade, categoria e impacto no trajeto. Permitir combinar o filtro de rota com data, prioridade, categoria e impacto no trajeto.
- FR-207 — Permitir associar um aviso a múltiplas rotas..
- FR-208 — Evitar avisos duplicados na visão geral, preservando sua visibilidade nos filtros individuais..
- FR-209 — que Tia Cláudia registre o valor de mensalidade acordado com cada família. Permitir que Tia Cláudia registre o valor de mensalidade acordado com cada família.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-110, DEC-111, DEC-113.

**Requisitos relacionados:** FR-206, FR-207, FR-208, FR-209.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-056-01, AC-056-02, AC-056-03, AC-056-04, AC-056-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-057 — consultar a situação financeira de cada família

#### US-057 — consultar a situação financeira de cada família

**Objetivo:** executar os comportamentos documentados na feature **FEAT-057**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-210, FR-211, FR-212, FR-213, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-210 — consultar a situação financeira de cada família. Permitir consultar a situação financeira de cada família.
- FR-211 — acompanhar mensalidades pagas, pendentes e atrasadas. Permitir acompanhar mensalidades pagas, pendentes e atrasadas.
- FR-212 — funcionalidades para auxiliar na cobrança das mensalidades. Disponibilizar funcionalidades para auxiliar na cobrança das mensalidades.
- FR-213 — a identificação automática de pagamentos por integração financeira. Permitir a identificação automática de pagamentos por integração financeira.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-113, DEC-114.

**Requisitos relacionados:** FR-210, FR-211, FR-212, FR-213.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-057-01, AC-057-02, AC-057-03, AC-057-04, AC-057-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-058 — que Tia Cláudia confirme pagamentos manualmente

#### US-058 — que Tia Cláudia confirme pagamentos manualmente

**Objetivo:** executar os comportamentos documentados na feature **FEAT-058**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-214, FR-215, FR-216, FR-217, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-214 — que Tia Cláudia confirme pagamentos manualmente. Permitir que Tia Cláudia confirme pagamentos manualmente.
- FR-215 — Atualizar a situação da mensalidade após a confirmação do pagamento. Atualizar a situação da mensalidade após a confirmação do pagamento.
- FR-216 — a data, o valor e a forma de confirmação do pagamento. Registrar a data, o valor e a forma de confirmação do pagamento.
- FR-217 — consultar o histórico de pagamentos de cada família. Permitir consultar o histórico de pagamentos de cada família.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-114.

**Requisitos relacionados:** FR-214, FR-215, FR-216, FR-217.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-058-01, AC-058-02, AC-058-03, AC-058-04, AC-058-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-059 — registrar pagamentos realizados via Pix

#### US-059 — registrar pagamentos realizados via Pix

**Objetivo:** executar os comportamentos documentados na feature **FEAT-059**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-218, FR-219, FR-220, FR-221, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-218 — registrar pagamentos realizados via Pix. Permitir registrar pagamentos realizados via Pix.
- FR-219 — registrar pagamentos em dinheiro. Permitir registrar pagamentos em dinheiro.
- FR-220 — registrar pagamentos por transferência bancária. Permitir registrar pagamentos por transferência bancária.
- FR-221 — registrar pagamentos por boleto bancário. Permitir registrar pagamentos por boleto bancário.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-115.

**Requisitos relacionados:** FR-218, FR-219, FR-220, FR-221.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-059-01, AC-059-02, AC-059-03, AC-059-04, AC-059-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-060 — a forma de pagamento utilizada em cada registro financeiro

#### US-060 — a forma de pagamento utilizada em cada registro financeiro

**Objetivo:** executar os comportamentos documentados na feature **FEAT-060**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-222, FR-223, FR-224, FR-225, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-222 — a forma de pagamento utilizada em cada registro financeiro. Identificar a forma de pagamento utilizada em cada registro financeiro.
- FR-223 — que Tia Cláudia configure o dia de vencimento de cada família. Permitir que Tia Cláudia configure o dia de vencimento de cada família.
- FR-224 — Gerar o acompanhamento mensal das cobranças conforme o vencimento cadastrado. Gerar o acompanhamento mensal das cobranças conforme o vencimento cadastrado.
- FR-225 — mensalidades vencidas que ainda não tiveram pagamento confirmado. Identificar mensalidades vencidas que ainda não tiveram pagamento confirmado.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-115, DEC-116.

**Requisitos relacionados:** FR-222, FR-223, FR-224, FR-225.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-060-01, AC-060-02, AC-060-03, AC-060-04, AC-060-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-061 — consultar os vencimentos das diferentes famílias

#### US-061 — consultar os vencimentos das diferentes famílias

**Objetivo:** executar os comportamentos documentados na feature **FEAT-061**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-226, FR-227, FR-228, FR-229, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-226 — consultar os vencimentos das diferentes famílias. Permitir consultar os vencimentos das diferentes famílias.
- FR-227 — Enviar lembretes automáticos antes do vencimento da mensalidade. Enviar lembretes automáticos antes do vencimento da mensalidade.
- FR-228 — Enviar cobranças automáticas após o vencimento, caso o pagamento não tenha sido confirmado. Enviar cobranças automáticas após o vencimento, caso o pagamento não tenha sido confirmado.
- FR-229 — Interromper as cobranças referentes à mensalidade quando seu pagamento for confirmado. Interromper as cobranças referentes à mensalidade quando seu pagamento for confirmado.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-116, DEC-117.

**Requisitos relacionados:** FR-226, FR-227, FR-228, FR-229.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-061-01, AC-061-02, AC-061-03, AC-061-04, AC-061-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-062 — Considerar a data de vencimento individual de cada família

#### US-062 — Considerar a data de vencimento individual de cada família

**Objetivo:** executar os comportamentos documentados na feature **FEAT-062**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-230, FR-231, FR-232, FR-233, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-230 — Considerar a data de vencimento individual de cada família. Considerar a data de vencimento individual de cada família.
- FR-231 — o histórico dos lembretes e cobranças enviados. Registrar o histórico dos lembretes e cobranças enviados.
- FR-232 — configurar quantos dias antes do vencimento o lembrete será enviado. Permitir configurar quantos dias antes do vencimento o lembrete será enviado.
- FR-233 — configurar a frequência das cobranças após o vencimento. Permitir configurar a frequência das cobranças após o vencimento.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-117, DEC-118.

**Requisitos relacionados:** FR-230, FR-231, FR-232, FR-233.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-062-01, AC-062-02, AC-062-03, AC-062-04, AC-062-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-063 — Aplicar as configurações aos pagamentos pendentes

#### US-063 — Aplicar as configurações aos pagamentos pendentes

**Objetivo:** executar os comportamentos documentados na feature **FEAT-063**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-234, FR-235, FR-236, FR-237, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-234 — Aplicar as configurações aos pagamentos pendentes. Aplicar as configurações aos pagamentos pendentes.
- FR-235 — alterar as configurações de cobrança posteriormente. Permitir alterar as configurações de cobrança posteriormente.
- FR-236 — Interromper automaticamente as cobranças quando o pagamento for confirmado. Interromper automaticamente as cobranças quando o pagamento for confirmado.
- FR-237 — Enviar lembretes e cobranças por notificações no aplicativo. Enviar lembretes e cobranças por notificações no aplicativo.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-118, DEC-119.

**Requisitos relacionados:** FR-234, FR-235, FR-236, FR-237.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-063-01, AC-063-02, AC-063-03, AC-063-04, AC-063-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-064 — Enviar lembretes e cobranças automáticas pelo WhatsApp

#### US-064 — Enviar lembretes e cobranças automáticas pelo WhatsApp

**Objetivo:** executar os comportamentos documentados na feature **FEAT-064**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-238, FR-239, FR-240, FR-241, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-238 — Enviar lembretes e cobranças automáticas pelo WhatsApp. Enviar lembretes e cobranças automáticas pelo WhatsApp.
- FR-239 — Enviar lembretes e cobranças por e-mail. Enviar lembretes e cobranças por e-mail.
- FR-240 — que Tia Cláudia habilite ou desabilite cada canal de comunicação. Permitir que Tia Cláudia habilite ou desabilite cada canal de comunicação.
- FR-241 — o canal utilizado em cada tentativa de envio. Registrar o canal utilizado em cada tentativa de envio.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-119.

**Requisitos relacionados:** FR-238, FR-239, FR-240, FR-241.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-064-01, AC-064-02, AC-064-03, AC-064-04, AC-064-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-065 — configurar os canais de cobrança padrão para todas as famílias

#### US-065 — configurar os canais de cobrança padrão para todas as famílias

**Objetivo:** executar os comportamentos documentados na feature **FEAT-065**, integrante de **EPIC-010**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-242, FR-243, FR-244, FR-245, para executar e acompanhar o processo de mensalidades, cobrança e vencimentos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-242 — configurar os canais de cobrança padrão para todas as famílias. Permitir configurar os canais de cobrança padrão para todas as famílias.
- FR-243 — personalizar os canais de cobrança de uma família específica. Permitir personalizar os canais de cobrança de uma família específica.
- FR-244 — Aplicar automaticamente a configuração geral às famílias sem personalização. Aplicar automaticamente a configuração geral às famílias sem personalização.
- FR-245 — remover uma personalização e retornar à configuração geral. Permitir remover uma personalização e retornar à configuração geral.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-120.

**Requisitos relacionados:** FR-242, FR-243, FR-244, FR-245.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-065-01, AC-065-02, AC-065-03, AC-065-04, AC-065-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-011 — Quitação integral e exceções financeiras

Objetivo: gerir alterações, excedentes e outras exceções de pagamentos integrais; FR-246 a FR-254 revogados e excluídos das funcionalidades vigentes. Abrangência: FR-255 a FR-265.

### FEAT-066 — aplicar descontos ou ajustes em uma mensalidade específica

#### US-066 — aplicar descontos ou ajustes em uma mensalidade específica

**Objetivo:** executar os comportamentos documentados na feature **FEAT-066**, integrante de **EPIC-011**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-255, FR-256, FR-257, FR-258, para executar e acompanhar o processo de liquidação e exceções financeiras de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-255 — aplicar descontos ou ajustes em uma mensalidade específica. Permitir aplicar descontos ou ajustes em uma mensalidade específica.
- FR-256 — alterar o valor mensal utilizado nas próximas cobranças. Permitir alterar o valor mensal utilizado nas próximas cobranças.
- FR-257 — Exigir o registro do motivo de cada alteração financeira. Exigir o registro do motivo de cada alteração financeira.
- FR-258 — Manter o histórico com valor anterior, novo valor, data e responsável pela alteração. Manter o histórico com valor anterior, novo valor, data e responsável pela alteração.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-123.

**Requisitos relacionados:** FR-255, FR-256, FR-257, FR-258.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-066-01, AC-066-02, AC-066-03, AC-066-04, AC-066-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-067 — Atualizar o saldo devedor da mensalidade quando seu valor for ajustado

#### US-067 — Atualizar o saldo devedor da mensalidade quando seu valor for ajustado

**Objetivo:** executar os comportamentos documentados na feature **FEAT-067**, integrante de **EPIC-011**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-259, FR-260, FR-261, FR-262, para executar e acompanhar o processo de liquidação e exceções financeiras de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-259 — Atualizar o saldo devedor da mensalidade quando seu valor for ajustado. Atualizar o saldo devedor da mensalidade quando seu valor for ajustado.
- FR-260 — registrar pagamentos superiores ao saldo devido. Permitir registrar pagamentos superiores ao saldo devido.
- FR-261 — Calcular automaticamente o valor excedente. Calcular automaticamente o valor excedente.
- FR-262 — Enviar um alerta para Tia Cláudia quando houver pagamento excedente. Enviar um alerta para Tia Cláudia quando houver pagamento excedente.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-123, DEC-124.

**Requisitos relacionados:** FR-259, FR-260, FR-261, FR-262.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-067-01, AC-067-02, AC-067-03, AC-067-04, AC-067-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-068 — Informar no alerta a família, o valor recebido, o valor devido e a diferença

#### US-068 — Informar no alerta a família, o valor recebido, o valor devido e a diferença

**Objetivo:** executar os comportamentos documentados na feature **FEAT-068**, integrante de **EPIC-011**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-263, FR-264, FR-265, para executar e acompanhar o processo de liquidação e exceções financeiras de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-263 — Informar no alerta a família, o valor recebido, o valor devido e a diferença. Informar no alerta a família, o valor recebido, o valor devido e a diferença.
- FR-264 — Manter o registro do pagamento excedente no histórico financeiro. Manter o registro do pagamento excedente no histórico financeiro.
- FR-265 — Manter o valor excedente pendente até uma decisão administrativa. Manter o valor excedente pendente até uma decisão administrativa.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-124, DEC-125.

**Requisitos relacionados:** FR-263, FR-264, FR-265.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-068-01, AC-068-02, AC-068-03, AC-068-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-012 — Comprovantes, conciliação e recibos

Objetivo: organizar a capacidade de negócio relacionada a comprovantes, conciliação e recibos. Abrangência documental: FR-266 a FR-305.

### FEAT-069 — que Tia Cláudia registre a devolução do valor excedente à família

#### US-069 — que Tia Cláudia registre a devolução do valor excedente à família

**Objetivo:** executar os comportamentos documentados na feature **FEAT-069**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-266, FR-267, FR-268, FR-269, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-266 — que Tia Cláudia registre a devolução do valor excedente à família. Permitir que Tia Cláudia registre a devolução do valor excedente à família.
- FR-267 — utilizar o valor excedente como crédito em uma mensalidade futura. Permitir utilizar o valor excedente como crédito em uma mensalidade futura.
- FR-268 — a decisão tomada, a data, o valor e a mensalidade beneficiada, quando aplicável. Registrar a decisão tomada, a data, o valor e a mensalidade beneficiada, quando aplicável.
- FR-269 — Atualizar o saldo financeiro da família após a destinação do excedente. Atualizar o saldo financeiro da família após a destinação do excedente.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-125.

**Requisitos relacionados:** FR-266, FR-267, FR-268, FR-269.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-069-01, AC-069-02, AC-069-03, AC-069-04, AC-069-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-070 — que Tia Cláudia corrija pagamentos registrados

#### US-070 — que Tia Cláudia corrija pagamentos registrados

**Objetivo:** executar os comportamentos documentados na feature **FEAT-070**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-270, FR-271, FR-272, FR-273, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-270 — que Tia Cláudia corrija pagamentos registrados. Permitir que Tia Cláudia corrija pagamentos registrados.
- FR-271 — que Tia Cláudia cancele pagamentos registrados. Permitir que Tia Cláudia cancele pagamentos registrados.
- FR-272 — Exigir uma justificativa para cada correção ou cancelamento. Exigir uma justificativa para cada correção ou cancelamento.
- FR-273 — Preservar o valor original, o novo valor, a data, o responsável e o motivo da alteração. Preservar o valor original, o novo valor, a data, o responsável e o motivo da alteração.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-126.

**Requisitos relacionados:** FR-270, FR-271, FR-272, FR-273.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-070-01, AC-070-02, AC-070-03, AC-070-04, AC-070-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-071 — Recalcular o saldo devedor da mensalidade após uma correção ou cancelamento

#### US-071 — Recalcular o saldo devedor da mensalidade após uma correção ou cancelamento

**Objetivo:** executar os comportamentos documentados na feature **FEAT-071**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-274, FR-275, FR-276, FR-277, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-274 — Recalcular o saldo devedor da mensalidade após uma correção ou cancelamento. Recalcular o saldo devedor da mensalidade após uma correção ou cancelamento.
- FR-275 — o histórico completo das alterações financeiras para consulta administrativa. Disponibilizar o histórico completo das alterações financeiras para consulta administrativa.
- FR-276 — que os responsáveis enviem comprovantes de pagamento pelo aplicativo. Permitir que os responsáveis enviem comprovantes de pagamento pelo aplicativo.
- FR-277 — que Tia Cláudia anexe comprovantes aos pagamentos registrados. Permitir que Tia Cláudia anexe comprovantes aos pagamentos registrados.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-126, DEC-127.

**Requisitos relacionados:** FR-274, FR-275, FR-276, FR-277.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-071-01, AC-071-02, AC-071-03, AC-071-04, AC-071-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-072 — Vincular cada comprovante à família e à mensalidade correspondente

#### US-072 — Vincular cada comprovante à família e à mensalidade correspondente

**Objetivo:** executar os comportamentos documentados na feature **FEAT-072**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-278, FR-279, FR-280, FR-281, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-278 — Vincular cada comprovante à família e à mensalidade correspondente. Vincular cada comprovante à família e à mensalidade correspondente.
- FR-279 — que Tia Cláudia visualize os comprovantes enviados. Permitir que Tia Cláudia visualize os comprovantes enviados.
- FR-280 — Manter o histórico dos comprovantes associados aos registros financeiros. Manter o histórico dos comprovantes associados aos registros financeiros.
- FR-281 — Notificar Tia Cláudia quando um responsável enviar um comprovante. Notificar Tia Cláudia quando um responsável enviar um comprovante.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-127, DEC-128.

**Requisitos relacionados:** FR-278, FR-279, FR-280, FR-281.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-072-01, AC-072-02, AC-072-03, AC-072-04, AC-072-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-073 — Exibir os comprovantes recebidos em uma lista de pagamentos aguardando verificação

#### US-073 — Exibir os comprovantes recebidos em uma lista de pagamentos aguardando verificação

**Objetivo:** executar os comportamentos documentados na feature **FEAT-073**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-282, FR-283, FR-284, FR-285, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-282 — Exibir os comprovantes recebidos em uma lista de pagamentos aguardando verificação. Exibir os comprovantes recebidos em uma lista de pagamentos aguardando verificação.
- FR-283 — consultar o comprovante e os dados da mensalidade correspondente. Permitir consultar o comprovante e os dados da mensalidade correspondente.
- FR-284 — Atualizar a situação da verificação após a análise do comprovante. Atualizar a situação da verificação após a análise do comprovante.
- FR-285 — Manter o histórico dos comprovantes analisados para consultas posteriores. Manter o histórico dos comprovantes analisados para consultas posteriores.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-128.

**Requisitos relacionados:** FR-282, FR-283, FR-284, FR-285.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-073-01, AC-073-02, AC-073-03, AC-073-04, AC-073-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-074 — Classificar comprovantes como pendentes, confirmados ou rejeitados

#### US-074 — Classificar comprovantes como pendentes, confirmados ou rejeitados

**Objetivo:** executar os comportamentos documentados na feature **FEAT-074**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-286, FR-287, FR-288, FR-289, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-286 — Classificar comprovantes como pendentes, confirmados ou rejeitados. Classificar comprovantes como pendentes, confirmados ou rejeitados.
- FR-287 — que Tia Cláudia confirme um comprovante após verificar o recebimento. Permitir que Tia Cláudia confirme um comprovante após verificar o recebimento.
- FR-288 — rejeitar comprovantes, exigindo uma justificativa. Permitir rejeitar comprovantes, exigindo uma justificativa.
- FR-289 — Notificar a família quando um comprovante for rejeitado, informando o motivo. Notificar a família quando um comprovante for rejeitado, informando o motivo.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-129.

**Requisitos relacionados:** FR-286, FR-287, FR-288, FR-289.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-074-01, AC-074-02, AC-074-03, AC-074-04, AC-074-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-075 — que a família envie um novo comprovante após a rejeição

#### US-075 — que a família envie um novo comprovante após a rejeição

**Objetivo:** executar os comportamentos documentados na feature **FEAT-075**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-290, FR-291, FR-292, FR-293, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-290 — que a família envie um novo comprovante após a rejeição. Permitir que a família envie um novo comprovante após a rejeição.
- FR-291 — Preservar o histórico das análises, incluindo data, responsável e justificativa. Preservar o histórico das análises, incluindo data, responsável e justificativa.
- FR-292 — Exibir as mensalidades atuais e anteriores da família. Exibir as mensalidades atuais e anteriores da família.
- FR-293 — Consulta de valores e pendências financeiras. O sistema deverá apresentar os valores de mensalidades, valores recebidos integralmente, valores pendentes e vencimentos, sem oferecer pagamentos parciais.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-129, DEC-130.

**Requisitos relacionados:** FR-290, FR-291, FR-292, FR-293.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-075-01, AC-075-02, AC-075-03, AC-075-04, AC-075-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-076 — Exibir as datas de vencimento e a situação de cada mensalidade

#### US-076 — Exibir as datas de vencimento e a situação de cada mensalidade

**Objetivo:** executar os comportamentos documentados na feature **FEAT-076**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-294, FR-295, FR-296, FR-297, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-294 — Exibir as datas de vencimento e a situação de cada mensalidade. Exibir as datas de vencimento e a situação de cada mensalidade.
- FR-295 — consultar os comprovantes vinculados aos pagamentos. Permitir consultar os comprovantes vinculados aos pagamentos.
- FR-296 — Apresentar descontos e ajustes financeiros realizados. Apresentar descontos e ajustes financeiros realizados.
- FR-297 — Exibir créditos disponíveis provenientes de pagamentos excedentes. Exibir créditos disponíveis provenientes de pagamentos excedentes.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-130.

**Requisitos relacionados:** FR-294, FR-295, FR-296, FR-297.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-076-01, AC-076-02, AC-076-03, AC-076-04, AC-076-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-077 — consultar o histórico financeiro da própria família

#### US-077 — consultar o histórico financeiro da própria família

**Objetivo:** executar os comportamentos documentados na feature **FEAT-077**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-298, FR-299, FR-300, FR-301, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-298 — consultar o histórico financeiro da própria família. Permitir consultar o histórico financeiro da própria família.
- FR-299 — Gerar automaticamente um recibo digital após a confirmação da quitação integral. Gerar automaticamente um recibo digital após a confirmação da quitação integral.
- FR-300 — que a família consulte e baixe seus recibos pelo aplicativo. Permitir que a família consulte e baixe seus recibos pelo aplicativo.
- FR-301 — Enviar o recibo pelos canais de comunicação configurados. Enviar o recibo pelos canais de comunicação configurados.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-130, DEC-131.

**Requisitos relacionados:** FR-298, FR-299, FR-300, FR-301.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-077-01, AC-077-02, AC-077-03, AC-077-04, AC-077-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-078 — Manter o histórico dos recibos emitidos

#### US-078 — Manter o histórico dos recibos emitidos

**Objetivo:** executar os comportamentos documentados na feature **FEAT-078**, integrante de **EPIC-012**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-302, FR-303, FR-304, FR-305, para executar e acompanhar o processo de comprovantes, conciliação e recibos de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-302 — Manter o histórico dos recibos emitidos. Manter o histórico dos recibos emitidos.
- FR-303 — Vincular cada recibo à família e à mensalidade correspondente. Vincular cada recibo à família e à mensalidade correspondente.
- FR-304 — recibos afetados por correções ou cancelamentos de pagamentos. Identificar recibos afetados por correções ou cancelamentos de pagamentos.
- FR-305 — Marcar o recibo anterior como cancelado, preservando-o no histórico. Marcar o recibo anterior como cancelado, preservando-o no histórico.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-131, DEC-132.

**Requisitos relacionados:** FR-302, FR-303, FR-304, FR-305.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-078-01, AC-078-02, AC-078-03, AC-078-04, AC-078-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-013 — Gestão financeira, relatórios, inadimplência e suspensão

Objetivo: administrar pagamentos, cobranças, relatórios, inadimplência e suspensão, respeitando a gestão exclusiva de Tia Cláudia. Abrangência documental: FR-001 a FR-004 e FR-306 a FR-345.

### FEAT-001 — Pagamentos, cobrança e suspensão administrativa

#### US-001 — Gerenciar inadimplência e suspensão administrativa

**Objetivo:** executar os comportamentos documentados na feature **FEAT-001**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** Tia Cláudia, administradora da van. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como Tia Cláudia, administradora da van, quero consultar pagamentos e inadimplência, registrar suspensões/reativações e comunicar cobranças para controlar o serviço. O responsável familiar recebe o aviso de suspensão, sem permissão de executá-la.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-001 — Controle de pagamentos. O sistema deverá permitir registrar e acompanhar a situação de pagamento dos alunos.
- FR-002 — Controle de inadimplência e suspensão. O sistema deverá permitir à Administradora identificar a situação financeira do aluno e registrar/gerenciar sua suspensão e retorno ao transporte conforme a regularização dos pagamentos.
- FR-003 — Comunicação de cobrança. O sistema deverá apoiar o processo de comunicação com responsáveis sobre pagamentos pendentes.
- FR-004 — Notificação de suspensão. O sistema deverá emitir um alerta por e-mail, via Gmail, ao pai ou responsável pelo aluno quando a suspensão for registrada.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-001, BR-002, DEC-002.

**Requisitos relacionados:** FR-001, FR-002, FR-003, FR-004.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-001-01, AC-001-02, AC-001-03, AC-001-04, AC-001-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-079 — Gerar automaticamente um novo recibo corrigido caso a mensalidade permaneça integralmente qu…

#### US-079 — Gerar automaticamente um novo recibo corrigido caso a mensalidade permaneça integralmente qu…

**Objetivo:** executar os comportamentos documentados na feature **FEAT-079**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-306, FR-307, FR-308, FR-309, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-306 — Gerar automaticamente um novo recibo corrigido caso a mensalidade permaneça integralmente quitada. Gerar automaticamente um novo recibo corrigido caso a mensalidade permaneça integralmente quitada.
- FR-307 — Notificar a família quando um recibo for cancelado ou substituído. Notificar a família quando um recibo for cancelado ou substituído.
- FR-308 — o vínculo entre o recibo original e o recibo substituto. Registrar o vínculo entre o recibo original e o recibo substituto.
- FR-309 — Gerar relatórios financeiros por período selecionado. Gerar relatórios financeiros por período selecionado.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-132, DEC-134.

**Requisitos relacionados:** FR-306, FR-307, FR-308, FR-309.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-079-01, AC-079-02, AC-079-03, AC-079-04, AC-079-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-080 — Apresentar valores recebidos, pendências e inadimplência

#### US-080 — Apresentar valores recebidos, pendências e inadimplência

**Objetivo:** executar os comportamentos documentados na feature **FEAT-080**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-310, FR-311, FR-312, FR-313, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-310 — Apresentar valores recebidos, pendências e inadimplência. Apresentar valores recebidos, pendências e inadimplência.
- FR-311 — Incluir descontos, créditos, devoluções e formas de pagamento nos relatórios. Incluir descontos, créditos, devoluções e formas de pagamento nos relatórios.
- FR-312 — exportar relatórios financeiros. Permitir exportar relatórios financeiros.
- FR-313 — Impedir o registro de pagamentos inferiores ao saldo integral da mensalidade. Impedir o registro de pagamentos inferiores ao saldo integral da mensalidade.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-134.

**Requisitos relacionados:** FR-310, FR-311, FR-312, FR-313.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-080-01, AC-080-02, AC-080-03, AC-080-04, AC-080-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-081 — Exibir a mensalidade como pendente até a confirmação do pagamento integral

#### US-081 — Exibir a mensalidade como pendente até a confirmação do pagamento integral

**Objetivo:** executar os comportamentos documentados na feature **FEAT-081**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-314, FR-315, FR-316, FR-317, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-314 — Exibir a mensalidade como pendente até a confirmação do pagamento integral. Exibir a mensalidade como pendente até a confirmação do pagamento integral.
- FR-315 — configurar a quantidade de dias de atraso que gera um alerta de possível suspensão. Permitir configurar a quantidade de dias de atraso que gera um alerta de possível suspensão.
- FR-316 — configurar a quantidade de mensalidades atrasadas que gera um alerta. Permitir configurar a quantidade de mensalidades atrasadas que gera um alerta.
- FR-317 — automaticamente famílias que atingirem os critérios configurados. Identificar automaticamente famílias que atingirem os critérios configurados.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-134, DEC-135.

**Requisitos relacionados:** FR-314, FR-315, FR-316, FR-317.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-081-01, AC-081-02, AC-081-03, AC-081-04, AC-081-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-082 — Notificar Tia Cláudia sobre possíveis suspensões

#### US-082 — Notificar Tia Cláudia sobre possíveis suspensões

**Objetivo:** executar os comportamentos documentados na feature **FEAT-082**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-318, FR-319, FR-320, FR-321, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-318 — Notificar Tia Cláudia sobre possíveis suspensões. Notificar Tia Cláudia sobre possíveis suspensões.
- FR-319 — que Tia Cláudia decida manualmente pela suspensão do transporte. Permitir que Tia Cláudia decida manualmente pela suspensão do transporte.
- FR-320 — o histórico das suspensões realizadas. Registrar o histórico das suspensões realizadas.
- FR-321 — que Tia Cláudia registre a suspensão de uma família por inadimplência. Permitir que Tia Cláudia registre a suspensão de uma família por inadimplência.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-135, DEC-136.

**Requisitos relacionados:** FR-318, FR-319, FR-320, FR-321.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-082-01, AC-082-02, AC-082-03, AC-082-04, AC-082-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-083 — Retirar os alunos da família suspensa das próximas rotas previstas

#### US-083 — Retirar os alunos da família suspensa das próximas rotas previstas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-083**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-322, FR-323, FR-324, FR-325, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-322 — Retirar os alunos da família suspensa das próximas rotas previstas. Retirar os alunos da família suspensa das próximas rotas previstas.
- FR-323 — Manter o acesso da família ao aplicativo durante a suspensão. Manter o acesso da família ao aplicativo durante a suspensão.
- FR-324 — que a família suspensa consulte mensalidades, valores pendentes e comprovantes. Permitir que a família suspensa consulte mensalidades, valores pendentes e comprovantes.
- FR-325 — Notificar os responsáveis quando a suspensão for aplicada. Notificar os responsáveis quando a suspensão for aplicada.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-136.

**Requisitos relacionados:** FR-322, FR-323, FR-324, FR-325.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-083-01, AC-083-02, AC-083-03, AC-083-04, AC-083-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-084 — a situação de suspensão no cadastro administrativo da família

#### US-084 — a situação de suspensão no cadastro administrativo da família

**Objetivo:** executar os comportamentos documentados na feature **FEAT-084**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-326, FR-327, FR-328, FR-329, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-326 — a situação de suspensão no cadastro administrativo da família. Identificar a situação de suspensão no cadastro administrativo da família.
- FR-327 — Verificar se existem alunos da família suspensa já embarcados. Verificar se existem alunos da família suspensa já embarcados.
- FR-328 — Alertar Tia Cláudia quando a suspensão envolver um aluno embarcado. Alertar Tia Cláudia quando a suspensão envolver um aluno embarcado.
- FR-329 — Manter o aluno embarcado na rota atual até seu destino previsto. Manter o aluno embarcado na rota atual até seu destino previsto.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-136, DEC-137.

**Requisitos relacionados:** FR-326, FR-327, FR-328, FR-329.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-084-01, AC-084-02, AC-084-03, AC-084-04, AC-084-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-085 — Aplicar a exclusão do aluno somente nas viagens seguintes

#### US-085 — Aplicar a exclusão do aluno somente nas viagens seguintes

**Objetivo:** executar os comportamentos documentados na feature **FEAT-085**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-330, FR-331, FR-332, FR-333, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-330 — Aplicar a exclusão do aluno somente nas viagens seguintes. Aplicar a exclusão do aluno somente nas viagens seguintes.
- FR-331 — a data e o horário da suspensão e seus efeitos nas viagens. Registrar a data e o horário da suspensão e seus efeitos nas viagens.
- FR-332 — quando todas as pendências financeiras da família forem quitadas. Identificar quando todas as pendências financeiras da família forem quitadas.
- FR-333 — Notificar Tia Cláudia quando uma família suspensa estiver apta à reativação. Notificar Tia Cláudia quando uma família suspensa estiver apta à reativação.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-137, DEC-138.

**Requisitos relacionados:** FR-330, FR-331, FR-332, FR-333.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-085-01, AC-085-02, AC-085-03, AC-085-04, AC-085-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-086 — que Tia Cláudia confirme manualmente a reativação

#### US-086 — que Tia Cláudia confirme manualmente a reativação

**Objetivo:** executar os comportamentos documentados na feature **FEAT-086**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-334, FR-335, FR-336, FR-337, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-334 — que Tia Cláudia confirme manualmente a reativação. Permitir que Tia Cláudia confirme manualmente a reativação.
- FR-335 — Reincluir os alunos nas próximas rotas previstas após a autorização. Reincluir os alunos nas próximas rotas previstas após a autorização.
- FR-336 — Notificar os responsáveis quando o transporte for reativado. Notificar os responsáveis quando o transporte for reativado.
- FR-337 — a data, o horário e a responsável pela reativação. Registrar a data, o horário e a responsável pela reativação.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-138.

**Requisitos relacionados:** FR-334, FR-335, FR-336, FR-337.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-086-01, AC-086-02, AC-086-03, AC-086-04, AC-086-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-087 — o histórico de suspensões e reativações de cada família

#### US-087 — o histórico de suspensões e reativações de cada família

**Objetivo:** executar os comportamentos documentados na feature **FEAT-087**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-338, FR-339, FR-340, FR-341, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-338 — o histórico de suspensões e reativações de cada família. Registrar o histórico de suspensões e reativações de cada família.
- FR-339 — Armazenar data, horário e motivo de cada suspensão. Armazenar data, horário e motivo de cada suspensão.
- FR-340 — as mensalidades em atraso relacionadas à suspensão. Identificar as mensalidades em atraso relacionadas à suspensão.
- FR-341 — as notificações enviadas aos responsáveis. Registrar as notificações enviadas aos responsáveis.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-139.

**Requisitos relacionados:** FR-338, FR-339, FR-340, FR-341.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-087-01, AC-087-02, AC-087-03, AC-087-04, AC-087-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-088 — quem autorizou a suspensão ou reativação

#### US-088 — quem autorizou a suspensão ou reativação

**Objetivo:** executar os comportamentos documentados na feature **FEAT-088**, integrante de **EPIC-013**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-342, FR-343, FR-344, FR-345, para executar e acompanhar o processo de relatórios, inadimplência e suspensão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-342 — quem autorizou a suspensão ou reativação. Identificar quem autorizou a suspensão ou reativação.
- FR-343 — que Tia Cláudia consulte o histórico completo no cadastro da família. Permitir que Tia Cláudia consulte o histórico completo no cadastro da família.
- FR-344 — que Tia Cláudia registre o encerramento do serviço de uma família. Permitir que Tia Cláudia registre o encerramento do serviço de uma família.
- FR-345 — a data e o motivo do encerramento. Registrar a data e o motivo do encerramento.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-139, DEC-140.

**Requisitos relacionados:** FR-342, FR-343, FR-344, FR-345.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-088-01, AC-088-02, AC-088-03, AC-088-04, AC-088-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-014 — Encerramento contratual e ajustes financeiros

Objetivo: organizar a capacidade de negócio relacionada a encerramento contratual e ajustes financeiros. Abrangência documental: FR-346 a FR-382.

### FEAT-089 — Retirar os alunos das rotas a partir da data de encerramento

#### US-089 — Retirar os alunos das rotas a partir da data de encerramento

**Objetivo:** executar os comportamentos documentados na feature **FEAT-089**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-346, FR-347, FR-348, FR-349, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-346 — Retirar os alunos das rotas a partir da data de encerramento. Retirar os alunos das rotas a partir da data de encerramento.
- FR-347 — Interromper a geração de novas mensalidades após o encerramento. Interromper a geração de novas mensalidades após o encerramento.
- FR-348 — Preservar o histórico financeiro da família. Preservar o histórico financeiro da família.
- FR-349 — Preservar o histórico operacional, incluindo presenças e ausências. Preservar o histórico operacional, incluindo presenças e ausências.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-140.

**Requisitos relacionados:** FR-346, FR-347, FR-348, FR-349.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-089-01, AC-089-02, AC-089-03, AC-089-04, AC-089-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-090 — a família como inativa após o encerramento

#### US-090 — a família como inativa após o encerramento

**Objetivo:** executar os comportamentos documentados na feature **FEAT-090**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-350, FR-351, FR-352, FR-353, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-350 — a família como inativa após o encerramento. Identificar a família como inativa após o encerramento.
- FR-351 — Bloquear o acesso da família ao aplicativo assim que o encerramento entrar em vigor. Bloquear o acesso da família ao aplicativo assim que o encerramento entrar em vigor.
- FR-352 — Impedir novos acessos às funcionalidades de transporte e financeiras após o encerramento. Impedir novos acessos às funcionalidades de transporte e financeiras após o encerramento.
- FR-353 — Preservar os históricos financeiro e operacional da família. Preservar os históricos financeiro e operacional da família.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-140, DEC-141.

**Requisitos relacionados:** FR-350, FR-351, FR-352, FR-353.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-090-01, AC-090-02, AC-090-03, AC-090-04, AC-090-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-091 — que Tia Cláudia consulte os registros de famílias inativas

#### US-091 — que Tia Cláudia consulte os registros de famílias inativas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-091**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-354, FR-355, FR-356, FR-357, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-354 — que Tia Cláudia consulte os registros de famílias inativas. Permitir que Tia Cláudia consulte os registros de famílias inativas.
- FR-355 — a data e o horário do bloqueio de acesso. Registrar a data e o horário do bloqueio de acesso.
- FR-356 — que Tia Cláudia reative cadastros de famílias anteriormente encerrados. Permitir que Tia Cláudia reative cadastros de famílias anteriormente encerrados.
- FR-357 — Apresentar os dados anteriores para revisão antes da reativação. Apresentar os dados anteriores para revisão antes da reativação.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-141, DEC-142.

**Requisitos relacionados:** FR-354, FR-355, FR-356, FR-357.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-091-01, AC-091-02, AC-091-03, AC-091-04, AC-091-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-092 — atualizar informações dos responsáveis e alunos

#### US-092 — atualizar informações dos responsáveis e alunos

**Objetivo:** executar os comportamentos documentados na feature **FEAT-092**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-358, FR-359, FR-360, FR-361, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-358 — atualizar informações dos responsáveis e alunos. Permitir atualizar informações dos responsáveis e alunos.
- FR-359 — revisar e atualizar o valor da mensalidade. Permitir revisar e atualizar o valor da mensalidade.
- FR-360 — revisar as rotas e os pontos de embarque e desembarque. Permitir revisar as rotas e os pontos de embarque e desembarque.
- FR-361 — Restaurar o acesso da família somente após a confirmação da reativação. Restaurar o acesso da família somente após a confirmação da reativação.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-142.

**Requisitos relacionados:** FR-358, FR-359, FR-360, FR-361.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-092-01, AC-092-02, AC-092-03, AC-092-04, AC-092-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-093 — Preservar os históricos financeiro e operacional anteriores

#### US-093 — Preservar os históricos financeiro e operacional anteriores

**Objetivo:** executar os comportamentos documentados na feature **FEAT-093**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-362, FR-363, FR-364, FR-365, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-362 — Preservar os históricos financeiro e operacional anteriores. Preservar os históricos financeiro e operacional anteriores.
- FR-363 — a data e a responsável pela reativação. Registrar a data e a responsável pela reativação.
- FR-364 — Verificar pendências financeiras anteriores durante a reativação de uma família. Verificar pendências financeiras anteriores durante a reativação de uma família.
- FR-365 — Alertar Tia Cláudia sobre mensalidades antigas não quitadas. Alertar Tia Cláudia sobre mensalidades antigas não quitadas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-142, DEC-143.

**Requisitos relacionados:** FR-362, FR-363, FR-364, FR-365.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-093-01, AC-093-02, AC-093-03, AC-093-04, AC-093-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-094 — Exibir os valores, vencimentos e histórico das pendências

#### US-094 — Exibir os valores, vencimentos e histórico das pendências

**Objetivo:** executar os comportamentos documentados na feature **FEAT-094**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-366, FR-367, FR-368, FR-369, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-366 — Exibir os valores, vencimentos e histórico das pendências. Exibir os valores, vencimentos e histórico das pendências.
- FR-367 — que Tia Cláudia autorize ou impeça a reativação enquanto houver dívidas antigas. Permitir que Tia Cláudia autorize ou impeça a reativação enquanto houver dívidas antigas.
- FR-368 — a decisão administrativa e sua data. Registrar a decisão administrativa e sua data.
- FR-369 — Preservar as pendências financeiras anteriores após a reativação. Preservar as pendências financeiras anteriores após a reativação.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-143.

**Requisitos relacionados:** FR-366, FR-367, FR-368, FR-369.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-094-01, AC-094-02, AC-094-03, AC-094-04, AC-094-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-095 — que Tia Cláudia cancele uma mensalidade pendente

#### US-095 — que Tia Cláudia cancele uma mensalidade pendente

**Objetivo:** executar os comportamentos documentados na feature **FEAT-095**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-370, FR-371, FR-372, FR-373, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-370 — que Tia Cláudia cancele uma mensalidade pendente. Permitir que Tia Cláudia cancele uma mensalidade pendente.
- FR-371 — Não exigir justificativa para o cancelamento. Não exigir justificativa para o cancelamento.
- FR-372 — Atualizar a situação da mensalidade para "Cancelada". Atualizar a situação da mensalidade para "Cancelada".
- FR-373 — Interromper as cobranças automáticas da mensalidade cancelada. Interromper as cobranças automáticas da mensalidade cancelada.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-144.

**Requisitos relacionados:** FR-370, FR-371, FR-372, FR-373.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-095-01, AC-095-02, AC-095-03, AC-095-04, AC-095-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-096 — Preservar o registro da mensalidade cancelada no histórico financeiro

#### US-096 — Preservar o registro da mensalidade cancelada no histórico financeiro

**Objetivo:** executar os comportamentos documentados na feature **FEAT-096**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-374, FR-375, FR-376, FR-377, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-374 — Preservar o registro da mensalidade cancelada no histórico financeiro. Preservar o registro da mensalidade cancelada no histórico financeiro.
- FR-375 — Exibir uma confirmação antes de cancelar uma mensalidade. Exibir uma confirmação antes de cancelar uma mensalidade.
- FR-376 — desistir do cancelamento antes de confirmá-lo. Permitir desistir do cancelamento antes de confirmá-lo.
- FR-377 — que Tia Cláudia reverta o cancelamento de uma mensalidade. Permitir que Tia Cláudia reverta o cancelamento de uma mensalidade.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-144, DEC-145.

**Requisitos relacionados:** FR-374, FR-375, FR-376, FR-377.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-096-01, AC-096-02, AC-096-03, AC-096-04, AC-096-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-097 — Restaurar a situação financeira correspondente após a reversão

#### US-097 — Restaurar a situação financeira correspondente após a reversão

**Objetivo:** executar os comportamentos documentados na feature **FEAT-097**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-378, FR-379, FR-380, FR-381, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-378 — Restaurar a situação financeira correspondente após a reversão. Restaurar a situação financeira correspondente após a reversão.
- FR-379 — a data, o horário e a responsável pelo cancelamento e pela reversão. Registrar a data, o horário e a responsável pelo cancelamento e pela reversão.
- FR-380 — Preservar o histórico completo das alterações. Preservar o histórico completo das alterações.
- FR-381 — Atualizar a situação da mensalidade para "Cancelada" no painel financeiro da família. Atualizar a situação da mensalidade para "Cancelada" no painel financeiro da família.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-145, DEC-146.

**Requisitos relacionados:** FR-378, FR-379, FR-380, FR-381.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-097-01, AC-097-02, AC-097-03, AC-097-04, AC-097-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-098 — Não enviar notificações automáticas quando uma mensalidade for cancelada

#### US-098 — Não enviar notificações automáticas quando uma mensalidade for cancelada

**Objetivo:** executar os comportamentos documentados na feature **FEAT-098**, integrante de **EPIC-014**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-382, para executar e acompanhar o processo de encerramento contratual e ajustes financeiros de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-382 — Não enviar notificações automáticas quando uma mensalidade for cancelada. Não enviar notificações automáticas quando uma mensalidade for cancelada.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-146.

**Requisitos relacionados:** FR-382.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-098-01, AC-098-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-015 — Despesas e relatórios operacionais

Objetivo: organizar a capacidade de negócio relacionada a despesas e relatórios operacionais. Abrangência documental: FR-383 a FR-412.

### FEAT-099 — que a família consulte mensalidades canceladas em seu histórico financeiro

#### US-099 — que a família consulte mensalidades canceladas em seu histórico financeiro

**Objetivo:** executar os comportamentos documentados na feature **FEAT-099**, integrante de **EPIC-015**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-383, FR-384, FR-385, FR-386, para executar e acompanhar o processo de despesas e relatórios operacionais de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-383 — que a família consulte mensalidades canceladas em seu histórico financeiro. Permitir que a família consulte mensalidades canceladas em seu histórico financeiro.
- FR-384 — o cancelamento somente de mensalidades pendentes, incluindo as vencidas e não pagas. Permitir o cancelamento somente de mensalidades pendentes, incluindo as vencidas e não pagas.
- FR-385 — Impedir o cancelamento direto de mensalidades quitadas. Impedir o cancelamento direto de mensalidades quitadas.
- FR-386 — Informar Tia Cláudia quando uma mensalidade não puder ser cancelada por já estar paga. Informar Tia Cláudia quando uma mensalidade não puder ser cancelada por já estar paga.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-146, DEC-147.

**Requisitos relacionados:** FR-383, FR-384, FR-385, FR-386.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-099-01, AC-099-02, AC-099-03, AC-099-04, AC-099-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-100 — Manter disponível a funcionalidade de correção de pagamentos, conforme as regras anteriormen…

#### US-100 — Manter disponível a funcionalidade de correção de pagamentos, conforme as regras anteriormen…

**Objetivo:** executar os comportamentos documentados na feature **FEAT-100**, integrante de **EPIC-015**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-387, FR-388, FR-389, FR-390, para executar e acompanhar o processo de despesas e relatórios operacionais de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-387 — Manter disponível a funcionalidade de correção de pagamentos, conforme as regras anteriormente definidas. Manter disponível a funcionalidade de correção de pagamentos, conforme as regras anteriormente definidas.
- FR-388 — registrar despesas com valor, data, categoria e descrição. Permitir registrar despesas com valor, data, categoria e descrição.
- FR-389 — cadastrar despesas recorrentes, como seguro e outros pagamentos periódicos. Permitir cadastrar despesas recorrentes, como seguro e outros pagamentos periódicos.
- FR-390 — Organizar despesas por categorias, como combustível, manutenção, seguro e outras. Organizar despesas por categorias, como combustível, manutenção, seguro e outras.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-147, DEC-148.

**Requisitos relacionados:** FR-387, FR-388, FR-389, FR-390.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-100-01, AC-100-02, AC-100-03, AC-100-04, AC-100-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-101 — anexar comprovantes às despesas registradas

#### US-101 — anexar comprovantes às despesas registradas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-101**, integrante de **EPIC-015**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-391, FR-392, FR-393, FR-394, para executar e acompanhar o processo de despesas e relatórios operacionais de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-391 — anexar comprovantes às despesas registradas. Permitir anexar comprovantes às despesas registradas.
- FR-392 — consultar o histórico de despesas por período e categoria. Permitir consultar o histórico de despesas por período e categoria.
- FR-393 — Gerar relatórios comparando receitas e despesas. Gerar relatórios comparando receitas e despesas.
- FR-394 — Apresentar o saldo financeiro do período, considerando receitas e despesas registradas. Apresentar o saldo financeiro do período, considerando receitas e despesas registradas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-148.

**Requisitos relacionados:** FR-391, FR-392, FR-393, FR-394.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-101-01, AC-101-02, AC-101-03, AC-101-04, AC-101-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-102 — cadastrar despesas recorrentes com valor, descrição, categoria e periodicidade

#### US-102 — cadastrar despesas recorrentes com valor, descrição, categoria e periodicidade

**Objetivo:** executar os comportamentos documentados na feature **FEAT-102**, integrante de **EPIC-015**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-395, FR-396, FR-397, FR-398, para executar e acompanhar o processo de despesas e relatórios operacionais de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-395 — cadastrar despesas recorrentes com valor, descrição, categoria e periodicidade. Permitir cadastrar despesas recorrentes com valor, descrição, categoria e periodicidade.
- FR-396 — Gerar automaticamente as despesas conforme a periodicidade cadastrada. Gerar automaticamente as despesas conforme a periodicidade cadastrada.
- FR-397 — Manter cada despesa como pendente até a confirmação do pagamento. Manter cada despesa como pendente até a confirmação do pagamento.
- FR-398 — Enviar lembretes de vencimento para Tia Cláudia. Enviar lembretes de vencimento para Tia Cláudia.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-149.

**Requisitos relacionados:** FR-395, FR-396, FR-397, FR-398.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-102-01, AC-102-02, AC-102-03, AC-102-04, AC-102-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-103 — que Tia Cláudia confirme o pagamento de uma despesa

#### US-103 — que Tia Cláudia confirme o pagamento de uma despesa

**Objetivo:** executar os comportamentos documentados na feature **FEAT-103**, integrante de **EPIC-015**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-399, FR-400, FR-401, FR-402, para executar e acompanhar o processo de despesas e relatórios operacionais de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-399 — que Tia Cláudia confirme o pagamento de uma despesa. Permitir que Tia Cláudia confirme o pagamento de uma despesa.
- FR-400 — despesas recorrentes vencidas e não pagas. Identificar despesas recorrentes vencidas e não pagas.
- FR-401 — Manter o histórico dos pagamentos das despesas recorrentes. Manter o histórico dos pagamentos das despesas recorrentes.
- FR-402 — configurar quantos dias antes do vencimento os lembretes serão enviados. Permitir configurar quantos dias antes do vencimento os lembretes serão enviados.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-149, DEC-150.

**Requisitos relacionados:** FR-399, FR-400, FR-401, FR-402.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-103-01, AC-103-02, AC-103-03, AC-103-04, AC-103-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-104 — configurar a frequência dos lembretes após o vencimento

#### US-104 — configurar a frequência dos lembretes após o vencimento

**Objetivo:** executar os comportamentos documentados na feature **FEAT-104**, integrante de **EPIC-015**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-403, FR-404, FR-405, FR-406, para executar e acompanhar o processo de despesas e relatórios operacionais de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-403 — configurar a frequência dos lembretes após o vencimento. Permitir configurar a frequência dos lembretes após o vencimento.
- FR-404 — Enviar lembretes automáticos conforme as configurações estabelecidas. Enviar lembretes automáticos conforme as configurações estabelecidas.
- FR-405 — Interromper os lembretes quando a despesa for confirmada como paga. Interromper os lembretes quando a despesa for confirmada como paga.
- FR-406 — que Tia Cláudia altere as configurações posteriormente. Permitir que Tia Cláudia altere as configurações posteriormente.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-150.

**Requisitos relacionados:** FR-403, FR-404, FR-405, FR-406.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-104-01, AC-104-02, AC-104-03, AC-104-04, AC-104-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-105 — cadastrar e identificar diferentes veículos

#### US-105 — cadastrar e identificar diferentes veículos

**Objetivo:** executar os comportamentos documentados na feature **FEAT-105**, integrante de **EPIC-015**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-407, FR-408, FR-409, FR-410, para executar e acompanhar o processo de despesas e relatórios operacionais de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-407 — cadastrar e identificar diferentes veículos. Permitir cadastrar e identificar diferentes veículos.
- FR-408 — vincular despesas a um veículo específico. Permitir vincular despesas a um veículo específico.
- FR-409 — registrar despesas gerais, sem vínculo com um veículo. Permitir registrar despesas gerais, sem vínculo com um veículo.
- FR-410 — Gerar relatórios de despesas individuais por veículo. Gerar relatórios de despesas individuais por veículo.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-151.

**Requisitos relacionados:** FR-407, FR-408, FR-409, FR-410.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-105-01, AC-105-02, AC-105-03, AC-105-04, AC-105-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-106 — Gerar relatórios consolidados com despesas de todos os veículos e despesas gerais

#### US-106 — Gerar relatórios consolidados com despesas de todos os veículos e despesas gerais

**Objetivo:** executar os comportamentos documentados na feature **FEAT-106**, integrante de **EPIC-015**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-411, FR-412, para executar e acompanhar o processo de despesas e relatórios operacionais de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-411 — Gerar relatórios consolidados com despesas de todos os veículos e despesas gerais. Gerar relatórios consolidados com despesas de todos os veículos e despesas gerais.
- FR-412 — filtrar despesas por veículo, categoria e período. Permitir filtrar despesas por veículo, categoria e período.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-151.

**Requisitos relacionados:** FR-411, FR-412.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-106-01, AC-106-02, AC-106-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-016 — Veículos e capacidade de transporte

Objetivo: organizar a capacidade de negócio relacionada a veículos e capacidade de transporte. Abrangência documental: FR-413 a FR-449.

### FEAT-107 — cadastrar placa, marca, modelo e ano do veículo

#### US-107 — cadastrar placa, marca, modelo e ano do veículo

**Objetivo:** executar os comportamentos documentados na feature **FEAT-107**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-413, FR-414, FR-415, FR-416, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-413 — cadastrar placa, marca, modelo e ano do veículo. Permitir cadastrar placa, marca, modelo e ano do veículo.
- FR-414 — a capacidade de passageiros de cada veículo. Registrar a capacidade de passageiros de cada veículo.
- FR-415 — a situação do veículo como ativo ou inativo. Identificar a situação do veículo como ativo ou inativo.
- FR-416 — registrar e atualizar a quilometragem. Permitir registrar e atualizar a quilometragem.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-152.

**Requisitos relacionados:** FR-413, FR-414, FR-415, FR-416.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-107-01, AC-107-02, AC-107-03, AC-107-04, AC-107-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-108 — os documentos do veículo e suas datas de vencimento

#### US-108 — os documentos do veículo e suas datas de vencimento

**Objetivo:** executar os comportamentos documentados na feature **FEAT-108**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-417, FR-418, FR-419, FR-420, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-417 — os documentos do veículo e suas datas de vencimento. Registrar os documentos do veículo e suas datas de vencimento.
- FR-418 — informações do seguro e seu vencimento. Registrar informações do seguro e seu vencimento.
- FR-419 — Manter o histórico de manutenções realizadas. Manter o histórico de manutenções realizadas.
- FR-420 — consultar e atualizar as informações cadastradas. Permitir consultar e atualizar as informações cadastradas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-152.

**Requisitos relacionados:** FR-417, FR-418, FR-419, FR-420.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-108-01, AC-108-02, AC-108-03, AC-108-04, AC-108-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-109 — configurar alertas de vencimento de documentos e seguros

#### US-109 — configurar alertas de vencimento de documentos e seguros

**Objetivo:** executar os comportamentos documentados na feature **FEAT-109**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-421, FR-422, FR-423, FR-424, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-421 — configurar alertas de vencimento de documentos e seguros. Permitir configurar alertas de vencimento de documentos e seguros.
- FR-422 — configurar alertas de manutenção por data ou quilometragem. Permitir configurar alertas de manutenção por data ou quilometragem.
- FR-423 — definir a antecedência dos alertas. Permitir definir a antecedência dos alertas.
- FR-424 — configurar a frequência dos lembretes. Permitir configurar a frequência dos lembretes.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-153.

**Requisitos relacionados:** FR-421, FR-422, FR-423, FR-424.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-109-01, AC-109-02, AC-109-03, AC-109-04, AC-109-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-110 — documentos e manutenções pendentes ou vencidos

#### US-110 — documentos e manutenções pendentes ou vencidos

**Objetivo:** executar os comportamentos documentados na feature **FEAT-110**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-425, FR-426, FR-427, FR-428, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-425 — documentos e manutenções pendentes ou vencidos. Identificar documentos e manutenções pendentes ou vencidos.
- FR-426 — Manter as pendências visíveis até sua regularização. Manter as pendências visíveis até sua regularização.
- FR-427 — a regularização e preservar o histórico dos alertas. Registrar a regularização e preservar o histórico dos alertas.
- FR-428 — que Tia Cláudia marque um veículo como temporariamente indisponível. Permitir que Tia Cláudia marque um veículo como temporariamente indisponível.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-153, DEC-154.

**Requisitos relacionados:** FR-425, FR-426, FR-427, FR-428.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-110-01, AC-110-02, AC-110-03, AC-110-04, AC-110-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-111 — as rotas associadas ao veículo indisponível

#### US-111 — as rotas associadas ao veículo indisponível

**Objetivo:** executar os comportamentos documentados na feature **FEAT-111**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-429, FR-430, FR-431, FR-432, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-429 — as rotas associadas ao veículo indisponível. Identificar as rotas associadas ao veículo indisponível.
- FR-430 — Alertar Tia Cláudia sobre as rotas afetadas. Alertar Tia Cláudia sobre as rotas afetadas.
- FR-431 — Apresentar os veículos disponíveis para substituição. Apresentar os veículos disponíveis para substituição.
- FR-432 — Verificar a capacidade de passageiros do veículo substituto. Verificar a capacidade de passageiros do veículo substituto.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-154.

**Requisitos relacionados:** FR-429, FR-430, FR-431, FR-432.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-111-01, AC-111-02, AC-111-03, AC-111-04, AC-111-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-112 — que Tia Cláudia confirme a substituição do veículo

#### US-112 — que Tia Cláudia confirme a substituição do veículo

**Objetivo:** executar os comportamentos documentados na feature **FEAT-112**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-433, FR-434, FR-435, FR-436, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-433 — que Tia Cláudia confirme a substituição do veículo. Permitir que Tia Cláudia confirme a substituição do veículo.
- FR-434 — o histórico das substituições realizadas. Registrar o histórico das substituições realizadas.
- FR-435 — Comparar a quantidade de passageiros previstos com a capacidade cadastrada do veículo substituto. Comparar a quantidade de passageiros previstos com a capacidade cadastrada do veículo substituto.
- FR-436 — Exibir um alerta quando a capacidade for insuficiente. Exibir um alerta quando a capacidade for insuficiente.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-154, DEC-155.

**Requisitos relacionados:** FR-433, FR-434, FR-435, FR-436.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-112-01, AC-112-02, AC-112-03, AC-112-04, AC-112-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-113 — Informar a capacidade do veículo e a quantidade de passageiros previstos

#### US-113 — Informar a capacidade do veículo e a quantidade de passageiros previstos

**Objetivo:** executar os comportamentos documentados na feature **FEAT-113**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-437, FR-438, FR-439, FR-440, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-437 — Informar a capacidade do veículo e a quantidade de passageiros previstos. Informar a capacidade do veículo e a quantidade de passageiros previstos.
- FR-438 — que Tia Cláudia confirme a substituição após visualizar o alerta. Permitir que Tia Cláudia confirme a substituição após visualizar o alerta.
- FR-439 — a confirmação da substituição e o alerta apresentado. Registrar a confirmação da substituição e o alerta apresentado.
- FR-440 — Identificar quando a capacidade do veículo substituto for insuficiente..

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-155, DEC-156.

**Requisitos relacionados:** FR-437, FR-438, FR-439, FR-440.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-113-01, AC-113-02, AC-113-03, AC-113-04, AC-113-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-114 — Permitir que Tia Cláudia reorganize os alunos entre rotas ou viagens

#### US-114 — Permitir que Tia Cláudia reorganize os alunos entre rotas ou viagens

**Objetivo:** executar os comportamentos documentados na feature **FEAT-114**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-441, FR-442, FR-443, FR-444, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-441 — Permitir que Tia Cláudia reorganize os alunos entre rotas ou viagens..
- FR-442 — Recalcular a quantidade de passageiros previstos após a reorganização..
- FR-443 — Impedir a liberação de uma rota enquanto a capacidade do veículo estiver excedida..
- FR-444 — Registrar as alterações realizadas na distribuição dos passageiros..

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-156.

**Requisitos relacionados:** FR-441, FR-442, FR-443, FR-444.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-114-01, AC-114-02, AC-114-03, AC-114-04, AC-114-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-115 — que Tia Cláudia cadastre outros motoristas

#### US-115 — que Tia Cláudia cadastre outros motoristas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-115**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-445, FR-446, FR-447, FR-448, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-445 — que Tia Cláudia cadastre outros motoristas. Permitir que Tia Cláudia cadastre outros motoristas.
- FR-446 — vincular motoristas aos veículos cadastrados. Permitir vincular motoristas aos veículos cadastrados.
- FR-447 — associar motoristas às rotas de transporte. Permitir associar motoristas às rotas de transporte.
- FR-448 — acesso individual ao aplicativo para cada motorista. Disponibilizar acesso individual ao aplicativo para cada motorista.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-157.

**Requisitos relacionados:** FR-445, FR-446, FR-447, FR-448.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-115-01, AC-115-02, AC-115-03, AC-115-04, AC-115-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-116 — configurar permissões específicas para motoristas

#### US-116 — configurar permissões específicas para motoristas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-116**, integrante de **EPIC-016**; benefício específico não quantificado.

**Ator explicitado na história:** administradora. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como administradora, quero dispor das capacidades descritas em FR-449, para executar e acompanhar o processo de veículos e capacidade de transporte de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-449 — configurar permissões específicas para motoristas. Permitir configurar permissões específicas para motoristas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-157.

**Requisitos relacionados:** FR-449.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-116-01, AC-116-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## EPIC-017 — Motoristas, viagens e operação sem conexão

Objetivo: organizar a capacidade de negócio relacionada a motoristas, viagens e operação sem conexão. Abrangência documental: FR-450 a FR-499.

### FEAT-117 — qual motorista está responsável por cada rota ou viagem

#### US-117 — qual motorista está responsável por cada rota ou viagem

**Objetivo:** executar os comportamentos documentados na feature **FEAT-117**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-450, FR-451, FR-452, FR-453, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-450 — qual motorista está responsável por cada rota ou viagem. Registrar qual motorista está responsável por cada rota ou viagem.
- FR-451 — que o motorista visualize suas rotas e os alunos previstos. Permitir que o motorista visualize suas rotas e os alunos previstos.
- FR-452 — registrar e corrigir presenças e ausências. Permitir registrar e corrigir presenças e ausências.
- FR-453 — enviar alertas operacionais aos responsáveis das suas rotas. Permitir enviar alertas operacionais aos responsáveis das suas rotas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-157, DEC-158.

**Requisitos relacionados:** FR-450, FR-451, FR-452, FR-453.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-117-01, AC-117-02, AC-117-03, AC-117-04, AC-117-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-118 — iniciar e encerrar viagens sob sua responsabilidade

#### US-118 — iniciar e encerrar viagens sob sua responsabilidade

**Objetivo:** executar os comportamentos documentados na feature **FEAT-118**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-454, FR-455, FR-456, FR-457, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-454 — iniciar e encerrar viagens sob sua responsabilidade. Permitir iniciar e encerrar viagens sob sua responsabilidade.
- FR-455 — compartilhar a localização do veículo durante as viagens autorizadas. Permitir compartilhar a localização do veículo durante as viagens autorizadas.
- FR-456 — Restringir o acesso dos motoristas às informações financeiras e configurações administrativas. Restringir o acesso dos motoristas às informações financeiras e configurações administrativas.
- FR-457 — que Tia Cláudia substitua temporariamente o motorista de uma ou mais viagens. Permitir que Tia Cláudia substitua temporariamente o motorista de uma ou mais viagens.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-158, DEC-159.

**Requisitos relacionados:** FR-454, FR-455, FR-456, FR-457.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-118-01, AC-118-02, AC-118-03, AC-118-04, AC-118-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-119 — selecionar o motorista substituto e as viagens afetadas

#### US-119 — selecionar o motorista substituto e as viagens afetadas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-119**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-458, FR-459, FR-460, FR-461, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-458 — selecionar o motorista substituto e as viagens afetadas. Permitir selecionar o motorista substituto e as viagens afetadas.
- FR-459 — Conceder ao substituto acesso operacional às viagens atribuídas. Conceder ao substituto acesso operacional às viagens atribuídas.
- FR-460 — Atualizar as permissões do motorista original durante a substituição. Atualizar as permissões do motorista original durante a substituição.
- FR-461 — Notificar as famílias afetadas sobre a troca de motorista. Notificar as famílias afetadas sobre a troca de motorista.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-159.

**Requisitos relacionados:** FR-458, FR-459, FR-460, FR-461.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-119-01, AC-119-02, AC-119-03, AC-119-04, AC-119-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-120 — o histórico da substituição, incluindo data, motoristas envolvidos e viagens afetadas

#### US-120 — o histórico da substituição, incluindo data, motoristas envolvidos e viagens afetadas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-120**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-462, FR-463, FR-464, FR-465, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-462 — o histórico da substituição, incluindo data, motoristas envolvidos e viagens afetadas. Registrar o histórico da substituição, incluindo data, motoristas envolvidos e viagens afetadas.
- FR-463 — Encerrar o acesso temporário do substituto quando terminar sua responsabilidade pelas viagens. Encerrar o acesso temporário do substituto quando terminar sua responsabilidade pelas viagens.
- FR-464 — Exibir todas as viagens em andamento em um painel centralizado. Exibir todas as viagens em andamento em um painel centralizado.
- FR-465 — motorista, veículo e rota de cada viagem. Identificar motorista, veículo e rota de cada viagem.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-159, DEC-160.

**Requisitos relacionados:** FR-462, FR-463, FR-464, FR-465.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-120-01, AC-120-02, AC-120-03, AC-120-04, AC-120-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-121 — Exibir a situação atual de cada viagem

#### US-121 — Exibir a situação atual de cada viagem

**Objetivo:** executar os comportamentos documentados na feature **FEAT-121**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-466, FR-467, FR-468, FR-469, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-466 — Exibir a situação atual de cada viagem. Exibir a situação atual de cada viagem.
- FR-467 — Mostrar a localização em tempo real dos veículos durante as viagens. Mostrar a localização em tempo real dos veículos durante as viagens.
- FR-468 — Apresentar alertas operacionais relacionados às viagens. Apresentar alertas operacionais relacionados às viagens.
- FR-469 — abrir os detalhes de cada viagem individualmente. Permitir abrir os detalhes de cada viagem individualmente.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-160.

**Requisitos relacionados:** FR-466, FR-467, FR-468, FR-469.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-121-01, AC-121-02, AC-121-03, AC-121-04, AC-121-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-122 — consultar os dados da viagem previamente carregados, mesmo sem internet

#### US-122 — consultar os dados da viagem previamente carregados, mesmo sem internet

**Objetivo:** executar os comportamentos documentados na feature **FEAT-122**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-470, FR-471, FR-472, FR-473, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-470 — consultar os dados da viagem previamente carregados, mesmo sem internet. Permitir consultar os dados da viagem previamente carregados, mesmo sem internet.
- FR-471 — registrar presenças e ausências durante a falta de conexão. Permitir registrar presenças e ausências durante a falta de conexão.
- FR-472 — Armazenar temporariamente os registros realizados offline. Armazenar temporariamente os registros realizados offline.
- FR-473 — Sincronizar os registros pendentes quando a conexão retornar. Sincronizar os registros pendentes quando a conexão retornar.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-161.

**Requisitos relacionados:** FR-470, FR-471, FR-472, FR-473.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-122-01, AC-122-02, AC-122-03, AC-122-04, AC-122-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-123 — Informar ao motorista quando houver registros aguardando sincronização

#### US-123 — Informar ao motorista quando houver registros aguardando sincronização

**Objetivo:** executar os comportamentos documentados na feature **FEAT-123**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-474, FR-475, FR-476, FR-477, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-474 — Informar ao motorista quando houver registros aguardando sincronização. Informar ao motorista quando houver registros aguardando sincronização.
- FR-475 — Indicar a Tia Cláudia e às famílias autorizadas quando a localização estiver desatualizada. Indicar a Tia Cláudia e às famílias autorizadas quando a localização estiver desatualizada.
- FR-476 — que o motorista responsável registre e corrija a presença dos alunos durante a viagem. Permitir que o motorista responsável registre e corrija a presença dos alunos durante a viagem.
- FR-477 — que Tia Cláudia realize correções administrativas excepcionais. Permitir que Tia Cláudia realize correções administrativas excepcionais.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-161, DEC-162.

**Requisitos relacionados:** FR-474, FR-475, FR-476, FR-477.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-123-01, AC-123-02, AC-123-03, AC-123-04, AC-123-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-124 — conflitos entre registros offline e alterações já sincronizadas

#### US-124 — conflitos entre registros offline e alterações já sincronizadas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-124**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-478, FR-479, FR-480, FR-481, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-478 — conflitos entre registros offline e alterações já sincronizadas. Identificar conflitos entre registros offline e alterações já sincronizadas.
- FR-479 — Priorizar a correção administrativa de Tia Cláudia quando houver conflito. Priorizar a correção administrativa de Tia Cláudia quando houver conflito.
- FR-480 — Preservar os registros conflitantes no histórico, identificando autores e horários. Preservar os registros conflitantes no histórico, identificando autores e horários.
- FR-481 — quando a van passar pelo ponto de embarque previsto. Identificar quando a van passar pelo ponto de embarque previsto.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-162, DEC-163.

**Requisitos relacionados:** FR-478, FR-479, FR-480, FR-481.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-124-01, AC-124-02, AC-124-03, AC-124-04, AC-124-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-125 — Manter o aluno com presença não confirmada enquanto não houver registro efetivo de embarque

#### US-125 — Manter o aluno com presença não confirmada enquanto não houver registro efetivo de embarque

**Objetivo:** executar os comportamentos documentados na feature **FEAT-125**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero receber indicações iniciais de presença apoiadas pelo GPS e poder confirmá-las ou corrigi-las quando necessário, mantendo rastreabilidade e visibilidade das pendências.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-482 — Distinção entre indicação GPS e embarque verificado. O sistema deverá distinguir a indicação automática preliminar baseada em GPS de um registro de embarque confirmado ou corrigido operacionalmente, sem presumir que passagem pelo endereço seja prova definitiva do embarque.
- FR-483 — Identificação de indicações e pendências da presença. A lista operacional deverá diferenciar informações originadas pelo GPS de confirmações/correções humanas e destacar pendências quando existirem; o modo de validação rotineira ainda requer confirmação.
- FR-484 — Confirmação e correção operacional da presença. O motorista deverá poder confirmar a presença indicada automaticamente ou registrar que o aluno não embarcou, corrigindo divergências do GPS e preservando autoria, horário e histórico.
- FR-485 — Verificar se existem presenças não confirmadas ao encerrar uma viagem. Verificar se existem presenças não confirmadas ao encerrar uma viagem.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-163, DEC-168, DEC-164.

**Requisitos relacionados:** FR-482, FR-483, FR-484, FR-485.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-125-01, AC-125-02, AC-125-03, AC-125-04, AC-125-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-126 — Exibir um aviso ao motorista com as pendências identificadas

#### US-126 — Exibir um aviso ao motorista com as pendências identificadas

**Objetivo:** executar os comportamentos documentados na feature **FEAT-126**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-486, FR-487, FR-488, FR-489, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-486 — Exibir um aviso ao motorista com as pendências identificadas. Exibir um aviso ao motorista com as pendências identificadas.
- FR-487 — que o motorista encerre a viagem mesmo com pendências. Permitir que o motorista encerre a viagem mesmo com pendências.
- FR-488 — Manter os registros pendentes disponíveis para correção posterior. Manter os registros pendentes disponíveis para correção posterior.
- FR-489 — o encerramento da viagem e as pendências existentes naquele momento. Registrar o encerramento da viagem e as pendências existentes naquele momento.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-164.

**Requisitos relacionados:** FR-486, FR-487, FR-488, FR-489.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-126-01, AC-126-02, AC-126-03, AC-126-04, AC-126-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-127 — que o motorista consulte o histórico das viagens sob sua responsabilidade

#### US-127 — que o motorista consulte o histórico das viagens sob sua responsabilidade

**Objetivo:** executar os comportamentos documentados na feature **FEAT-127**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-490, FR-491, FR-492, FR-493, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-490 — que o motorista consulte o histórico das viagens sob sua responsabilidade. Permitir que o motorista consulte o histórico das viagens sob sua responsabilidade.
- FR-491 — corrigir registros de presença dessas viagens sem limite de prazo. Permitir corrigir registros de presença dessas viagens sem limite de prazo.
- FR-492 — o valor anterior, o novo valor, o responsável e a data da correção. Registrar o valor anterior, o novo valor, o responsável e a data da correção.
- FR-493 — Manter disponíveis os registros originais e o histórico de correções. Manter disponíveis os registros originais e o histórico de correções.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-165.

**Requisitos relacionados:** FR-490, FR-491, FR-492, FR-493.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-127-01, AC-127-02, AC-127-03, AC-127-04, AC-127-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-128 — correções de presença após o encerramento da viagem sem exigir justificativa

#### US-128 — correções de presença após o encerramento da viagem sem exigir justificativa

**Objetivo:** executar os comportamentos documentados na feature **FEAT-128**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-494, FR-495, FR-496, FR-497, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-494 — correções de presença após o encerramento da viagem sem exigir justificativa. Permitir correções de presença após o encerramento da viagem sem exigir justificativa.
- FR-495 — automaticamente o responsável, a data e o horário de cada alteração. Registrar automaticamente o responsável, a data e o horário de cada alteração.
- FR-496 — Preservar o valor anterior e o novo valor do registro de presença. Preservar o valor anterior e o novo valor do registro de presença.
- FR-497 — Atualizar o registro de presença após uma correção autorizada. Atualizar o registro de presença após uma correção autorizada.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-166, DEC-167.

**Requisitos relacionados:** FR-494, FR-495, FR-496, FR-497.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-128-01, AC-128-02, AC-128-03, AC-128-04, AC-128-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

### FEAT-129 — Preservar o histórico completo da alteração

#### US-129 — Preservar o histórico completo da alteração

**Objetivo:** executar os comportamentos documentados na feature **FEAT-129**, integrante de **EPIC-017**; benefício específico não quantificado.

**Ator explicitado na história:** motorista. Em caso de FR multiator, os limites específicos prevalecem sobre a frase genérica.

**História de usuário (texto consolidado):** Como motorista, quero dispor das capacidades descritas em FR-498, FR-499, para executar e acompanhar o processo de motoristas, viagens e operação sem conexão de forma consistente e rastreável.

**Prioridade:** não definida (aprovação do conteúdo não significa priorização). **Valor de negócio:** relacionado ao objetivo OBJ-001; impacto por história não quantificado.

**Pré-condições:** usuário autorizado, vínculo aplicável e dados cadastrais necessários; pré-condições específicas não formalizadas no material-fonte.

**Descrição detalhada / escopo funcional de origem:**

- FR-498 — Preservar o histórico completo da alteração. Preservar o histórico completo da alteração.
- FR-499 — a informação corrigida nas consultas de presença, sem gerar notificações automáticas. Disponibilizar a informação corrigida nas consultas de presença, sem gerar notificações automáticas.

**Fluxo principal conhecido:** operação descrita pelos FR acima, na data/viagem/vínculo aplicável. Sequência detalhada não documentada de modo independente; a enumeração dos FR não presume ordem de execução.

**Fluxos alternativos:** somente os explicitamente cobertos nos FR/BR/DEC associados; os demais não estão especificados.

**Exceções:** quando cancelada ou inconclusa, a operação não deve ser apresentada como concluída (AC transversal original; exceções específicas podem permanecer abertas).

**Regras de negócio e decisões relacionadas (referências contextuais, sem causalidade validada):** DEC-167.

**Requisitos relacionados:** FR-498, FR-499.

**Validações:** as expressamente descritas em FR e nos AC vinculados; nenhum limiar novo foi presumido.

**Dados envolvidos:** aqueles expressos nos requisitos desta US; modelo de campos e obrigatoriedade não definido além da fonte.

**Dependências:** permissões e dados cadastrais aplicáveis; outras dependências a confirmar conforme fonte revisada.

**Critérios de aceitação:** AC-129-01, AC-129-02, AC-129-E. Texto completo em [ACCEPTANCE_CRITERIA.md](ACCEPTANCE_CRITERIA.md).

**Observações:** vigência e escopo documental aprovados nesta consolidação; verificar questões `AUD`/`OPEN` que afetem exceções, métricas e testabilidade.

**Status do Discovery:** APROVADO DOCUMENTALMENTE — sem mudança de fase, sem determinação de prioridade, podendo conter pendências operacionais explícitas.

## Pendências transversais

O backlog revisado registra `OPEN-BL-001` a `OPEN-BL-005`. A revisão documental de vigência e de enunciados truncados foi aceita e saneada nas correções registradas, mas permanecem necessidades reais de detalhamento de atores, exceções, dependências e testabilidade (`AUD-005`, `AUD-008`, `AUD-020`). Essas pendências constam em `OPEN_QUESTIONS.md`; não criam histórias sem origem.
