# Critérios de aceitação — catálogo integral

> App Glauco · Discovery · Consolidação documental em 28/10/2026 · Aprovação dos itens documentados anteriormente em revisão, por manifestação do responsável pelo projeto.
> 619 critérios preservados de origem, inclusive critérios genéricos com limitação de testabilidade.

Os itens documentados ficam aprovados como **conteúdo-base**. Aprovação não autoriza tratar critérios tautológicos como testes suficientes: `AUD-005` permanece um problema de qualidade registrado.

## US-002 — Comunicação de ausência

- **Feature / Epic:** FEAT-002 / EPIC-001.
- **FR vinculados:** FR-005, FR-006, FR-007, FR-008.

- **AC-002-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-005, então o sistema deverá cumprir: O sistema deverá permitir registrar a ausência prevista de um aluno em determinado dia, sem exigir que o responsável confirme diariamente sua presença.
- **AC-002-02** — Dado um aviso de ausência registrado, quando Tia Cláudia abrir a consulta operacional, então deverá encontrar a ausência na data, no aluno e no trajeto correspondentes, sem informação de OPEN-002 incorporada à descrição.
- **AC-002-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-007, então o sistema deverá cumprir: O sistema deverá permitir que a responsável pela operação registre quando um aluno não embarcar no momento da passagem da van e altere esse registro caso a situação seja apenas um atraso.
- **AC-002-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-008, então o sistema deverá cumprir: O sistema deverá enviar uma confirmação ao pai ou responsável após o registro da comunicação de ausência do aluno.
- **AC-002-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-003 — Consulta de ausências

- **Feature / Epic:** FEAT-003 / EPIC-001.
- **FR vinculados:** FR-009, FR-010, FR-011, FR-012.

- **AC-003-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-009, então o sistema deverá cumprir: O sistema deverá permitir que a Tia Cláudia consulte, no aplicativo, as ausências registradas para os alunos.
- **AC-003-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-010, então o sistema deverá cumprir: Registro de ausência por múltiplos canais: permitir que o responsável informe a ausência do aluno pelo aplicativo ou envie uma mensagem pelo WhatsApp a um robô, que deverá registrar a ausência no sistema principal.
- **AC-003-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-011, então o sistema deverá cumprir: Quando o responsável escolher a opção “Informar ausência”, o robô deverá apresentar os alunos vinculados ao seu cadastro, permitindo selecionar aquele cuja ausência deseja registrar.
- **AC-003-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-012, então o sistema deverá cumprir: Durante a seleção do aluno, o responsável deverá poder retornar ou cancelar a operação sem registrar uma ausência.
- **AC-003-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-004 — Seleção do trajeto da ausência

- **Feature / Epic:** FEAT-004 / EPIC-001.
- **FR vinculados:** FR-013, FR-014, FR-015, FR-016.

- **AC-004-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-013, então o sistema deverá cumprir: Após identificar o responsável e selecionar o aluno, o robô deverá apresentar três opções:
- **AC-004-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-014, então o sistema deverá cumprir: O robô deverá perguntar se a ausência é para hoje ou para uma data futura.
- **AC-004-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-015, então o sistema deverá cumprir: Se o responsável escolher uma data futura, o robô deverá explicar como registrar a ausência no aplicativo.
- **AC-004-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-016, então o sistema deverá cumprir: O controle de presença deve permitir que Tia Cláudia consulte quem compareceu, quem não compareceu e quem avisou previamente.
- **AC-004-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-005 — O robô deve oferecer as opções Hoje, Amanhã e Outra data. Para outra data, deverá orientar o…

- **Feature / Epic:** FEAT-005 / EPIC-001.
- **FR vinculados:** FR-017, FR-018, FR-019, FR-020.

- **AC-005-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-017, então o sistema deverá cumprir: O robô deve oferecer as opções Hoje, Amanhã e Outra data. Para outra data, deverá orientar o uso do aplicativo.
- **AC-005-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-018, então o sistema deverá cumprir: Tia Cláudia deverá conseguir marcar o aluno como ausente diretamente no aplicativo, inclusive quando não houver aviso prévio do responsável.
- **AC-005-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-019, então o sistema deverá cumprir: O sistema deverá permitir que o responsável cancele uma ausência anteriormente informada, fazendo com que o aluno volte a constar como previsto para utilizar a van no trajeto correspondente.
- **AC-005-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-020, então o sistema deverá cumprir: Quando o responsável solicitar uma alteração, o robô deverá apresentar as opções:
- **AC-005-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-006 — Alteração de presença por trajeto

- **Feature / Epic:** FEAT-006 / EPIC-001.
- **FR vinculados:** FR-021.

- **AC-006-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-021, então o sistema deverá cumprir: O robô deverá permitir modificar o estado do aluno para:
- **AC-006-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-007 — Acompanhamento da rota

- **Feature / Epic:** FEAT-007 / EPIC-002.
- **FR vinculados:** FR-022, FR-023, FR-024, FR-025.

- **AC-007-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-022, então o sistema deverá cumprir: Pais, responsáveis e alunos deverão poder visualizar:
- **AC-007-02** — Dada uma passagem/parada registrada pelo GPS no ponto de um aluno, quando o sistema atualizar a lista operacional, então deverá criar uma indicação preliminar identificável como GPS e disponível à verificação/correção do motorista, sem tratá-la isoladamente como prova definitiva de embarque.
- **AC-007-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-024, então o sistema deverá cumprir: Permitir ao responsável alterar uma ausência para presença antes do embarque.
- **AC-007-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-025, então o sistema deverá cumprir: Registrar no histórico as alterações de presença, com responsável pela ação e horário.
- **AC-007-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-008 — Correção de embarque automático

- **Feature / Epic:** FEAT-008 / EPIC-002.
- **FR vinculados:** FR-026, FR-027, FR-028, FR-029.

- **AC-008-01** — Dada uma indicação automática de presença incorreta, quando o motorista responsável ou Tia Cláudia, conforme a permissão, corrigir o registro, então o estado atualizado deverá refletir a correção e manter autoria, horário e estado anterior.
- **AC-008-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-027, então o sistema deverá cumprir: O sistema deverá disponibilizar a situação dos alunos para auxiliar Tia Cláudia a identificar quem utilizará a van na ida e quem deverá ser buscado na volta.
- **AC-008-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-028, então o sistema deverá cumprir: A lista deverá apresentar inicialmente os alunos com presença confirmada, seguidos daqueles cuja presença ainda não foi confirmada.
- **AC-008-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-029, então o sistema deverá cumprir: O sistema deverá permitir filtrar os alunos por escola, turno e situação de presença.
- **AC-008-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-009 — Atualização da rota conforme a presença

- **Feature / Epic:** FEAT-009 / EPIC-002.
- **FR vinculados:** FR-030, FR-031, FR-032, FR-033.

- **AC-009-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-030, então o sistema deverá cumprir: O sistema deverá considerar as informações de presença e ausência dos alunos na definição da rota correspondente.
- **AC-009-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-031, então o sistema deverá cumprir: O sistema deverá oferecer as opções:
- **AC-009-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-032, então o sistema deverá cumprir: O sistema deverá notificar a administradora quando uma mudança na presença dos alunos provocar uma alteração na rota.
- **AC-009-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-033, então o sistema deverá cumprir: A notificação deverá permitir identificar o que mudou na rota.
- **AC-009-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-010 — Ciência das alterações

- **Feature / Epic:** FEAT-010 / EPIC-002.
- **FR vinculados:** FR-034.

- **AC-010-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-034, então o sistema deverá cumprir: Tia Cláudia deverá visualizar as alterações realizadas e ter uma opção para indicar que tomou ciência delas.
- **AC-010-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-011 — Identificação das rotas

- **Feature / Epic:** FEAT-011 / EPIC-003.
- **FR vinculados:** FR-035, FR-036, FR-037, FR-038.

- **AC-011-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-035, então o sistema deverá cumprir: O sistema deverá permitir que Tia Cláudia nomeie livremente suas rotas, por exemplo:
- **AC-011-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-036, então o sistema deverá cumprir: Tia Cláudia deverá conseguir alternar entre as rotas cadastradas para consultar suas informações e acompanhar suas situações.
- **AC-011-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-037, então o sistema deverá cumprir: O sistema deverá permitir que a administradora disponibilize uma rota para visualização de sua localização e estimativa de chegada.
- **AC-011-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-038, então o sistema deverá cumprir: O sistema deverá identificar os alunos vinculados ao responsável e disponibilizar apenas as rotas correspondentes.
- **AC-011-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-012 — Ativação do acompanhamento

- **Feature / Epic:** FEAT-012 / EPIC-003.
- **FR vinculados:** FR-039, FR-040, FR-041, FR-042.

- **AC-012-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-039, então o sistema deverá cumprir: O sistema deverá permitir que Tia Cláudia disponibilize o acompanhamento da localização de uma rota aos responsáveis autorizados.
- **AC-012-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-040, então o sistema deverá cumprir: O sistema deverá permitir que Tia Cláudia encerre a disponibilização da localização de uma rota.
- **AC-012-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-041, então o sistema deverá cumprir: O aplicativo deverá informar Tia Cláudia de que o compartilhamento foi encerrado.
- **AC-012-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-042, então o sistema deverá cumprir: Após o encerramento automático, o aplicativo deverá oferecer a Tia Cláudia a possibilidade de continuar compartilhando a localização.
- **AC-012-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-013 — a chegada ao destino final da rota por GPS

- **Feature / Epic:** FEAT-013 / EPIC-003.
- **FR vinculados:** FR-043, FR-044, FR-045, FR-046.

- **AC-013-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-043, então o sistema deverá cumprir: Identificar a chegada ao destino final da rota por GPS.
- **AC-013-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-044, então o sistema deverá cumprir: Identificar a existência de uma próxima rota consecutiva.
- **AC-013-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-045, então o sistema deverá cumprir: Realizar automaticamente a transição entre rotas consecutivas.
- **AC-013-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-046, então o sistema deverá cumprir: Manter o compartilhamento da localização durante a sequência de rotas.
- **AC-013-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-014 — Notificar Tia Cláudia sobre a transição e a continuidade do compartilhamento

- **Feature / Epic:** FEAT-014 / EPIC-003.
- **FR vinculados:** FR-047, FR-048, FR-049, FR-050.

- **AC-014-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-047, então o sistema deverá cumprir: Notificar Tia Cláudia sobre a transição e a continuidade do compartilhamento.
- **AC-014-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-048, então o sistema deverá cumprir: O sistema deverá atualizar as permissões de acompanhamento quando ocorrer uma transição entre rotas consecutivas.
- **AC-014-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-049, então o sistema deverá cumprir: O sistema deverá identificar a mudança de rota ativa e atualizar automaticamente a visualização do responsável para a próxima rota autorizada.
- **AC-014-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-050, então o sistema deverá cumprir: O aplicativo deverá apresentar uma mensagem informando que a rota terminou e que o acompanhamento foi encerrado.
- **AC-014-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-015 — Restabelecimento do acompanhamento na volta

- **Feature / Epic:** FEAT-015 / EPIC-003.
- **FR vinculados:** FR-051, FR-052, FR-053, FR-054.

- **AC-015-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-051, então o sistema deverá cumprir: Quando a rota de volta estiver ativa e compartilhada por Tia Cláudia, o responsável vinculado deverá poder acompanhar novamente a localização da van.
- **AC-015-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-052, então o sistema deverá cumprir: Calcular a estimativa de chegada considerando o início da rota e a distância restante até o aluno.
- **AC-015-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-053, então o sistema deverá cumprir: Atualizar a estimativa de chegada quando houver atrasos durante o percurso.
- **AC-015-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-054, então o sistema deverá cumprir: Informar aos responsáveis afetados que a rota está atrasada.
- **AC-015-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-016 — que Tia Cláudia comunique atrasos aos responsáveis de uma rota selecionada

- **Feature / Epic:** FEAT-016 / EPIC-003.
- **FR vinculados:** FR-055, FR-056, FR-057, FR-058.

- **AC-016-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-055, então o sistema deverá cumprir: Permitir que Tia Cláudia comunique atrasos aos responsáveis de uma rota selecionada.
- **AC-016-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-056, então o sistema deverá cumprir: Permitir a comunicação de atrasos aos responsáveis de rotas consecutivas integradas.
- **AC-016-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-057, então o sistema deverá cumprir: O sistema deverá comparar o atraso identificado com o limite definido e notificar os responsáveis afetados quando esse limite for ultrapassado.
- **AC-016-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-058, então o sistema deverá cumprir: O sistema deverá permitir que Tia Cláudia envie um comunicado de atraso aos responsáveis das rotas selecionadas.
- **AC-016-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-017 — Mensagens rápidas de atraso

- **Feature / Epic:** FEAT-017 / EPIC-003.
- **FR vinculados:** FR-059, FR-060, FR-061.

- **AC-017-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-059, então o sistema deverá cumprir: O sistema deverá disponibilizar opções de mensagens prontas para Tia Cláudia selecionar e enviar aos responsáveis das rotas escolhidas.
- **AC-017-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-060, então o sistema deverá cumprir: O sistema deverá permitir que Tia Cláudia escreva um comunicado próprio quando as mensagens rápidas não atenderem à situação.
- **AC-017-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-061, então o sistema deverá cumprir: As mensagens rápidas deverão continuar disponíveis durante o deslocamento, sem exigir que a rota seja interrompida.
- **AC-017-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-018 — o acesso individual do ajudante ao aplicativo

- **Feature / Epic:** FEAT-018 / EPIC-004.
- **FR vinculados:** FR-062, FR-063, FR-064, FR-065.

- **AC-018-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-062, então o sistema deverá cumprir: Permitir o acesso individual do ajudante ao aplicativo.
- **AC-018-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-063, então o sistema deverá cumprir: Permitir que o ajudante registre ausências de alunos.
- **AC-018-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-064, então o sistema deverá cumprir: Permitir que o ajudante corrija registros de presença.
- **AC-018-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-065, então o sistema deverá cumprir: Permitir que o ajudante registre e comunique problemas durante a rota.
- **AC-018-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-019 — no histórico as ações realizadas pelo ajudante

- **Feature / Epic:** FEAT-019 / EPIC-004.
- **FR vinculados:** FR-066, FR-067, FR-068, FR-069.

- **AC-019-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-066, então o sistema deverá cumprir: Identificar no histórico as ações realizadas pelo ajudante.
- **AC-019-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-067, então o sistema deverá cumprir: O sistema deverá permitir que o ajudante comunique problemas durante o transporte, como atrasos, imprevistos e outras ocorrências da rota.
- **AC-019-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-068, então o sistema deverá cumprir: O sistema deverá registrar quem enviou o alerta, quando ele foi enviado e quais rotas foram selecionadas como destinatárias.
- **AC-019-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-069, então o sistema deverá cumprir: O sistema deverá disponibilizar ao ajudante as funcionalidades de presença, acompanhamento operacional das rotas e comunicação de ocorrências.
- **AC-019-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-020 — Restrição de funcionalidades administrativas

- **Feature / Epic:** FEAT-020 / EPIC-004.
- **FR vinculados:** FR-070, FR-071, FR-072.

- **AC-020-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-070, então o sistema deverá cumprir: O sistema deverá impedir que o ajudante acesse ou altere pagamentos, contratos, cadastros administrativos e suspensões por inadimplência.
- **AC-020-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-071, então o sistema deverá cumprir: O sistema deverá permitir que o ajudante informe a Tia Cláudia quando identificar a necessidade de modificar uma rota.
- **AC-020-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-072, então o sistema deverá cumprir: Somente Tia Cláudia poderá realizar alterações manuais na configuração das rotas.
- **AC-020-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-021 — Identificação do responsável principal

- **Feature / Epic:** FEAT-021 / EPIC-005.
- **FR vinculados:** FR-073, FR-074, FR-075, FR-076.

- **AC-021-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-073, então o sistema deverá cumprir: O sistema deverá permitir que Tia Cláudia defina qual pessoa será o responsável principal por cada aluno.
- **AC-021-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-074, então o sistema deverá cumprir: O sistema deverá vincular o aluno ao responsável principal, utilizando essa associação para determinar o acesso às funcionalidades destinadas à família.
- **AC-021-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-075, então o sistema deverá cumprir: Permitir que pai e mãe utilizem a mesma conta familiar.
- **AC-021-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-076, então o sistema deverá cumprir: Permitir que Tia Cláudia atualize o telefone cadastrado.
- **AC-021-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-022 — que Tia Cláudia atualize o e-mail cadastrado

- **Feature / Epic:** FEAT-022 / EPIC-005.
- **FR vinculados:** FR-077, FR-078, FR-079, FR-080.

- **AC-022-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-077, então o sistema deverá cumprir: Permitir que Tia Cláudia atualize o e-mail cadastrado.
- **AC-022-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-078, então o sistema deverá cumprir: Permitir que Tia Cláudia realize a redefinição da senha da conta.
- **AC-022-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-079, então o sistema deverá cumprir: O sistema deverá registrar, para cada alteração de presença realizada pela conta familiar:
- **AC-022-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-080, então o sistema deverá cumprir: Permitir o cadastro de múltiplos números de WhatsApp vinculados à mesma conta familiar.
- **AC-022-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-023 — Reconhecer os números autorizados e associá-los aos alunos da conta familiar

- **Feature / Epic:** FEAT-023 / EPIC-005.
- **FR vinculados:** FR-081, FR-082, FR-083, FR-084.

- **AC-023-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-081, então o sistema deverá cumprir: Reconhecer os números autorizados e associá-los aos alunos da conta familiar.
- **AC-023-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-082, então o sistema deverá cumprir: Consultar a situação atual do aluno antes de registrar uma ausência.
- **AC-023-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-083, então o sistema deverá cumprir: Informar ao usuário quando a ausência solicitada já estiver registrada.
- **AC-023-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-084, então o sistema deverá cumprir: Permitir que Tia Cláudia cadastre contas familiares.
- **AC-023-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-024 — que Tia Cláudia cadastre, altere e remova números de WhatsApp autorizados

- **Feature / Epic:** FEAT-024 / EPIC-005.
- **FR vinculados:** FR-085, FR-086, FR-087, FR-088.

- **AC-024-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-085, então o sistema deverá cumprir: Permitir que Tia Cláudia cadastre, altere e remova números de WhatsApp autorizados.
- **AC-024-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-086, então o sistema deverá cumprir: Permitir que os responsáveis façam login no aplicativo.
- **AC-024-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-087, então o sistema deverá cumprir: Restringir a criação e a alteração de cadastros familiares à administradora.
- **AC-024-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-088, então o sistema deverá cumprir: Disponibilizar uma senha provisória quando Tia Cláudia cadastrar uma conta familiar.
- **AC-024-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-025 — autenticação utilizando telefone e senha

- **Feature / Epic:** FEAT-025 / EPIC-005.
- **FR vinculados:** FR-089, FR-090, FR-091, FR-092.

- **AC-025-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-089, então o sistema deverá cumprir: Permitir autenticação utilizando telefone e senha.
- **AC-025-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-090, então o sistema deverá cumprir: Permitir autenticação utilizando e-mail e senha.
- **AC-025-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-091, então o sistema deverá cumprir: Permitir que os responsáveis alterem a própria senha após realizar login.
- **AC-025-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-092, então o sistema deverá cumprir: O sistema deverá identificar quando uma conta estiver utilizando a senha provisória e direcionar o responsável para a criação de uma nova senha.
- **AC-025-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-026 — Bloqueio de funcionalidades até a troca

- **Feature / Epic:** FEAT-026 / EPIC-005.
- **FR vinculados:** FR-093, FR-094, FR-095, FR-096.

- **AC-026-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-093, então o sistema deverá cumprir: Enquanto a senha provisória não for substituída, o responsável não poderá acessar as demais funcionalidades do aplicativo.
- **AC-026-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-094, então o sistema deverá cumprir: Permitir que o responsável solicite a recuperação de senha.
- **AC-026-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-095, então o sistema deverá cumprir: Enviar um código de verificação pelo WhatsApp ou e-mail cadastrado.
- **AC-026-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-096, então o sistema deverá cumprir: Permitir a definição de uma nova senha após a validação do código.
- **AC-026-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-027 — que Tia Cláudia redefina a senha de uma conta familiar

- **Feature / Epic:** FEAT-027 / EPIC-005.
- **FR vinculados:** FR-097, FR-098, FR-099, FR-100.

- **AC-027-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-097, então o sistema deverá cumprir: Permitir que Tia Cláudia redefina a senha de uma conta familiar.
- **AC-027-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-098, então o sistema deverá cumprir: Registrar as alterações de senha em um histórico consultável pela administradora.
- **AC-027-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-099, então o sistema deverá cumprir: O sistema deverá permitir que Tia Cláudia estabeleça uma nova senha definitiva para uma conta familiar.
- **AC-027-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-100, então o sistema deverá cumprir: Os responsáveis deverão poder alterar a senha da própria conta por meio das configurações do aplicativo.
- **AC-027-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-028 — o cadastro manual de alunos pela administradora

- **Feature / Epic:** FEAT-028 / EPIC-006.
- **FR vinculados:** FR-101, FR-102, FR-103, FR-104.

- **AC-028-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-101, então o sistema deverá cumprir: Permitir o cadastro manual de alunos pela administradora.
- **AC-028-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-102, então o sistema deverá cumprir: Registrar informações escolares, de transporte, saúde relevante e pessoas autorizadas.
- **AC-028-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-103, então o sistema deverá cumprir: Permitir o recebimento de dados preenchidos pelos responsáveis no Google Forms.
- **AC-028-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-104, então o sistema deverá cumprir: Importar automaticamente as respostas recebidas para o cadastro dos alunos.
- **AC-028-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-029 — a edição posterior dos dados cadastrados ou importados

- **Feature / Epic:** FEAT-029 / EPIC-006.
- **FR vinculados:** FR-105, FR-106, FR-107, FR-108.

- **AC-029-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-105, então o sistema deverá cumprir: Permitir a edição posterior dos dados cadastrados ou importados.
- **AC-029-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-106, então o sistema deverá cumprir: Registrar os dados importados do Google Forms com status Pendente de aprovação.
- **AC-029-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-107, então o sistema deverá cumprir: Disponibilizar à administradora uma lista de cadastros pendentes.
- **AC-029-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-108, então o sistema deverá cumprir: Permitir que Tia Cláudia consulte e corrija os dados antes da aprovação.
- **AC-029-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-030 — que Tia Cláudia aprove o cadastro do aluno

- **Feature / Epic:** FEAT-030 / EPIC-006.
- **FR vinculados:** FR-109, FR-110, FR-111, FR-112.

- **AC-030-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-109, então o sistema deverá cumprir: Permitir que Tia Cláudia aprove o cadastro do aluno.
- **AC-030-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-110, então o sistema deverá cumprir: Incluir o aluno nas listas de transporte somente após a aprovação e quando estiver vinculado ao serviço correspondente.
- **AC-030-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-111, então o sistema deverá cumprir: Permitir que Tia Cláudia rejeite cadastros pendentes.
- **AC-030-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-112, então o sistema deverá cumprir: Permitir complementar informações ausentes antes da aprovação.
- **AC-030-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-031 — possíveis cadastros duplicados para conferência

- **Feature / Epic:** FEAT-031 / EPIC-006.
- **FR vinculados:** FR-113, FR-114, FR-115, FR-116.

- **AC-031-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-113, então o sistema deverá cumprir: Identificar possíveis cadastros duplicados para conferência.
- **AC-031-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-114, então o sistema deverá cumprir: Exibir os dados dos cadastros semelhantes para comparação.
- **AC-031-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-115, então o sistema deverá cumprir: Permitir atualizar o cadastro existente com informações recebidas pelo formulário.
- **AC-031-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-116, então o sistema deverá cumprir: Vincular cada aluno à conta familiar e ao telefone do responsável.
- **AC-031-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-032 — Comparar as informações recebidas pelo Google Forms com os dados existentes do aluno

- **Feature / Epic:** FEAT-032 / EPIC-006.
- **FR vinculados:** FR-117, FR-118, FR-119, FR-120.

- **AC-032-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-117, então o sistema deverá cumprir: Comparar as informações recebidas pelo Google Forms com os dados existentes do aluno.
- **AC-032-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-118, então o sistema deverá cumprir: Destacar os campos que apresentam diferenças.
- **AC-032-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-119, então o sistema deverá cumprir: Permitir que Tia Cláudia escolha individualmente quais informações atualizar.
- **AC-032-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-120, então o sistema deverá cumprir: Preservar os dados anteriores quando uma alteração não for aprovada.
- **AC-032-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-033 — o histórico de alterações dos dados cadastrais

- **Feature / Epic:** FEAT-033 / EPIC-006.
- **FR vinculados:** FR-121, FR-122, FR-123, FR-124.

- **AC-033-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-121, então o sistema deverá cumprir: Registrar o histórico de alterações dos dados cadastrais.
- **AC-033-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-122, então o sistema deverá cumprir: Permitir consultar os valores anteriores e atuais.
- **AC-033-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-123, então o sistema deverá cumprir: Permitir desfazer alterações cadastrais.
- **AC-033-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-124, então o sistema deverá cumprir: Permitir refazer alterações desfeitas.
- **AC-033-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-034 — também as operações de desfazer e refazer no histórico

- **Feature / Epic:** FEAT-034 / EPIC-006.
- **FR vinculados:** FR-125, FR-126, FR-127, FR-128.

- **AC-034-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-125, então o sistema deverá cumprir: Registrar também as operações de desfazer e refazer no histórico.
- **AC-034-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-126, então o sistema deverá cumprir: Disponibilizar Undo e Redo durante a edição de cadastros.
- **AC-034-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-127, então o sistema deverá cumprir: Manter um histórico de versões salvas dos cadastros.
- **AC-034-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-128, então o sistema deverá cumprir: Permitir consultar versões anteriores e seus respectivos dados.
- **AC-034-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-035 — restaurar uma versão antiga do cadastro

- **Feature / Epic:** FEAT-035 / EPIC-006.
- **FR vinculados:** FR-129, FR-130, FR-131, FR-132.

- **AC-035-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-129, então o sistema deverá cumprir: Permitir restaurar uma versão antiga do cadastro.
- **AC-035-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-130, então o sistema deverá cumprir: Destacar visualmente os campos modificados.
- **AC-035-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-131, então o sistema deverá cumprir: Preservar a rastreabilidade das restaurações realizadas.
- **AC-035-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-132, então o sistema deverá cumprir: Permitir a restauração completa de uma versão anterior do cadastro.
- **AC-035-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-036 — selecionar individualmente os campos que serão restaurados

- **Feature / Epic:** FEAT-036 / EPIC-006.
- **FR vinculados:** FR-133, FR-134, FR-135, FR-136.

- **AC-036-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-133, então o sistema deverá cumprir: Permitir selecionar individualmente os campos que serão restaurados.
- **AC-036-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-134, então o sistema deverá cumprir: Permitir restaurar vários campos simultaneamente.
- **AC-036-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-135, então o sistema deverá cumprir: Preservar os valores atuais dos campos não selecionados.
- **AC-036-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-136, então o sistema deverá cumprir: Exibir uma comparação entre os valores atuais e os valores da versão selecionada antes da confirmação.
- **AC-036-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-037 — alterações cadastrais que possam afetar as rotas

- **Feature / Epic:** FEAT-037 / EPIC-007.
- **FR vinculados:** FR-137, FR-138, FR-139, FR-140.

- **AC-037-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-137, então o sistema deverá cumprir: Identificar alterações cadastrais que possam afetar as rotas.
- **AC-037-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-138, então o sistema deverá cumprir: Notificar Tia Cláudia sobre o possível impacto da alteração.
- **AC-037-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-139, então o sistema deverá cumprir: Apresentar os dados anteriores e novos para conferência.
- **AC-037-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-140, então o sistema deverá cumprir: Solicitar confirmação antes de aplicar alterações nas rotas.
- **AC-037-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-038 — Manter a configuração anterior da rota enquanto a mudança não for aprovada

- **Feature / Epic:** FEAT-038 / EPIC-007.
- **FR vinculados:** FR-141, FR-142, FR-143, FR-144.

- **AC-038-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-141, então o sistema deverá cumprir: Manter a configuração anterior da rota enquanto a mudança não for aprovada.
- **AC-038-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-142, então o sistema deverá cumprir: Aplicar imediatamente às rotas as alterações aprovadas por Tia Cláudia.
- **AC-038-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-143, então o sistema deverá cumprir: Recalcular o trajeto em andamento quando uma alteração aprovada afetar seu percurso.
- **AC-038-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-144, então o sistema deverá cumprir: Atualizar a previsão de chegada (ETA) conforme o novo trajeto.
- **AC-038-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-039 — no histórico a alteração realizada e sua aplicação à rota

- **Feature / Epic:** FEAT-039 / EPIC-007.
- **FR vinculados:** FR-145, FR-146, FR-147, FR-148.

- **AC-039-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-145, então o sistema deverá cumprir: Registrar no histórico a alteração realizada e sua aplicação à rota.
- **AC-039-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-146, então o sistema deverá cumprir: Identificar quando a van já passou pelo ponto de embarque anterior.
- **AC-039-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-147, então o sistema deverá cumprir: Alertar Tia Cláudia sobre a alteração de endereço nessa situação.
- **AC-039-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-148, então o sistema deverá cumprir: Permitir que Tia Cláudia decida se deseja incluir o novo endereço na viagem atual.
- **AC-039-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-040 — Recalcular a rota caso Tia Cláudia autorize a inclusão

- **Feature / Epic:** FEAT-040 / EPIC-007.
- **FR vinculados:** FR-149, FR-150, FR-151, FR-152.

- **AC-040-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-149, então o sistema deverá cumprir: Recalcular a rota caso Tia Cláudia autorize a inclusão.
- **AC-040-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-150, então o sistema deverá cumprir: Manter o novo endereço cadastrado sem incluí-lo na viagem atual caso Tia Cláudia não autorize.
- **AC-040-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-151, então o sistema deverá cumprir: Recalcular o ETA dos alunos afetados por alterações no percurso.
- **AC-040-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-152, então o sistema deverá cumprir: Atualizar automaticamente o ETA exibido no aplicativo dos responsáveis.
- **AC-040-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-041 — Evitar notificações específicas aos responsáveis quando ocorrer apenas uma alteração de perc…

- **Feature / Epic:** FEAT-041 / EPIC-007.
- **FR vinculados:** FR-153, FR-154, FR-155, FR-156.

- **AC-041-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-153, então o sistema deverá cumprir: Evitar notificações específicas aos responsáveis quando ocorrer apenas uma alteração de percurso.
- **AC-041-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-154, então o sistema deverá cumprir: Identificar alterações de endereço de alunos já embarcados.
- **AC-041-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-155, então o sistema deverá cumprir: Solicitar confirmação sobre o novo destino de desembarque na viagem atual.
- **AC-041-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-156, então o sistema deverá cumprir: Atualizar o destino e recalcular a rota quando autorizado.
- **AC-041-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-042 — Preservar o destino anterior na viagem atual quando a mudança não for autorizada

- **Feature / Epic:** FEAT-042 / EPIC-007.
- **FR vinculados:** FR-157, FR-158.

- **AC-042-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-157, então o sistema deverá cumprir: Preservar o destino anterior na viagem atual quando a mudança não for autorizada.
- **AC-042-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-158, então o sistema deverá cumprir: Registrar a decisão de Tia Cláudia no histórico.
- **AC-042-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-043 — o envio de notificações aos responsáveis conforme os eventos previstos no sistema

- **Feature / Epic:** FEAT-043 / EPIC-008.
- **FR vinculados:** FR-159, FR-160, FR-161, FR-162.

- **AC-043-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-159, então o sistema deverá cumprir: Permitir o envio de notificações aos responsáveis conforme os eventos previstos no sistema.
- **AC-043-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-160, então o sistema deverá cumprir: Permitir a visualização das notificações recebidas no aplicativo.
- **AC-043-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-161, então o sistema deverá cumprir: Permitir que os pais selecionem uma pessoa autorizada para receber o aluno em determinada data.
- **AC-043-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-162, então o sistema deverá cumprir: Exibir somente pessoas previamente cadastradas como autorizadas para aquele aluno.
- **AC-043-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-044 — a pessoa selecionada e a data correspondente

- **Feature / Epic:** FEAT-044 / EPIC-008.
- **FR vinculados:** FR-163, FR-164, FR-165, FR-166.

- **AC-044-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-163, então o sistema deverá cumprir: Registrar a pessoa selecionada e a data correspondente.
- **AC-044-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-164, então o sistema deverá cumprir: Notificar automaticamente Tia Cláudia quando houver alteração.
- **AC-044-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-165, então o sistema deverá cumprir: Disponibilizar a informação atualizada na consulta operacional de desembarque.
- **AC-044-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-166, então o sistema deverá cumprir: Permitir que os pais cadastrem pessoas que poderão receber seus filhos.
- **AC-044-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-045 — informar o endereço dessas pessoas

- **Feature / Epic:** FEAT-045 / EPIC-008.
- **FR vinculados:** FR-167, FR-168, FR-169, FR-170.

- **AC-045-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-167, então o sistema deverá cumprir: Permitir informar o endereço dessas pessoas.
- **AC-045-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-168, então o sistema deverá cumprir: Notificar Tia Cláudia sobre novos cadastros ou alterações.
- **AC-045-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-169, então o sistema deverá cumprir: Permitir que Tia Cláudia avalie e aprove ou rejeite a inclusão de um endereço na rota.
- **AC-045-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-170, então o sistema deverá cumprir: Impedir a inclusão de um endereço rejeitado na rota correspondente.
- **AC-045-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-046 — manter uma pessoa autorizada mesmo quando seu endereço for rejeitado

- **Feature / Epic:** FEAT-046 / EPIC-008.
- **FR vinculados:** FR-171, FR-172, FR-173, FR-174.

- **AC-046-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-171, então o sistema deverá cumprir: Permitir manter uma pessoa autorizada mesmo quando seu endereço for rejeitado.
- **AC-046-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-172, então o sistema deverá cumprir: Diferenciar a autorização da pessoa da aprovação de seu endereço como destino.
- **AC-046-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-173, então o sistema deverá cumprir: Permitir selecionar essa pessoa para receber a criança em um endereço de entrega já aprovado.
- **AC-046-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-174, então o sistema deverá cumprir: Permitir selecionar uma pessoa autorizada para uma data específica.
- **AC-046-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-047 — configurar autorizações recorrentes por dia da semana

- **Feature / Epic:** FEAT-047 / EPIC-008.
- **FR vinculados:** FR-175, FR-176, FR-177, FR-178.

- **AC-047-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-175, então o sistema deverá cumprir: Permitir configurar autorizações recorrentes por dia da semana.
- **AC-047-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-176, então o sistema deverá cumprir: Permitir consultar e alterar as autorizações programadas.
- **AC-047-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-177, então o sistema deverá cumprir: Notificar Tia Cláudia quando uma autorização for criada ou modificada.
- **AC-047-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-178, então o sistema deverá cumprir: Permitir exceções em datas específicas sem modificar autorizações recorrentes.
- **AC-047-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-048 — Notificar Tia Cláudia quando uma exceção for registrada

- **Feature / Epic:** FEAT-048 / EPIC-008.
- **FR vinculados:** FR-179.

- **AC-048-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-179, então o sistema deverá cumprir: Notificar Tia Cláudia quando uma exceção for registrada.
- **AC-048-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-049 — uma Central de Avisos para a administradora

- **Feature / Epic:** FEAT-049 / EPIC-009.
- **FR vinculados:** FR-180, FR-181, FR-182, FR-183.

- **AC-049-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-180, então o sistema deverá cumprir: Disponibilizar uma Central de Avisos para a administradora.
- **AC-049-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-181, então o sistema deverá cumprir: Permitir filtrar os alertas por nível de prioridade.
- **AC-049-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-182, então o sistema deverá cumprir: Destacar visualmente os alertas mais importantes.
- **AC-049-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-183, então o sistema deverá cumprir: Exibir informações sobre o evento que originou cada alerta.
- **AC-049-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-050 — Classificar automaticamente os alertas conforme sua categoria

- **Feature / Epic:** FEAT-050 / EPIC-009.
- **FR vinculados:** FR-184, FR-185, FR-186, FR-187.

- **AC-050-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-184, então o sistema deverá cumprir: Classificar automaticamente os alertas conforme sua categoria.
- **AC-050-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-185, então o sistema deverá cumprir: Permitir que Tia Cláudia personalize a prioridade de cada categoria.
- **AC-050-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-186, então o sistema deverá cumprir: Permitir filtrar os alertas por prioridade.
- **AC-050-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-187, então o sistema deverá cumprir: Destacar os alertas de alta prioridade na Central de Avisos.
- **AC-050-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-051 — Aplicar as prioridades personalizadas aos novos alertas

- **Feature / Epic:** FEAT-051 / EPIC-009.
- **FR vinculados:** FR-188, FR-189, FR-190, FR-191.

- **AC-051-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-188, então o sistema deverá cumprir: Aplicar as prioridades personalizadas aos novos alertas.
- **AC-051-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-189, então o sistema deverá cumprir: Identificar automaticamente quando a situação associada a um alerta foi resolvida.
- **AC-051-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-190, então o sistema deverá cumprir: Atualizar o status do alerta para Resolvido.
- **AC-051-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-191, então o sistema deverá cumprir: Manter os alertas resolvidos em um histórico consultável.
- **AC-051-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-052 — filtrar os alertas por status: pendentes ou resolvidos

- **Feature / Epic:** FEAT-052 / EPIC-009.
- **FR vinculados:** FR-192, FR-193, FR-194, FR-195.

- **AC-052-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-192, então o sistema deverá cumprir: Permitir filtrar os alertas por status: pendentes ou resolvidos.
- **AC-052-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-193, então o sistema deverá cumprir: Registrar a data e o horário da resolução.
- **AC-052-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-194, então o sistema deverá cumprir: Exibir os avisos operacionais referentes ao dia selecionado.
- **AC-052-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-195, então o sistema deverá cumprir: Manter os avisos consultáveis mesmo depois de resolvidos.
- **AC-052-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-053 — filtrar avisos por impacto na rota

- **Feature / Epic:** FEAT-053 / EPIC-009.
- **FR vinculados:** FR-196, FR-197, FR-198, FR-199.

- **AC-053-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-196, então o sistema deverá cumprir: Permitir filtrar avisos por impacto na rota.
- **AC-053-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-197, então o sistema deverá cumprir: Permitir combinar filtros de prioridade, categoria e status.
- **AC-053-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-198, então o sistema deverá cumprir: Diferenciar visualmente avisos pendentes e resolvidos, sem ocultá-los automaticamente.
- **AC-053-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-199, então o sistema deverá cumprir: Disponibilizar um calendário na Central de Avisos.
- **AC-053-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-054 — consultar avisos de datas anteriores

- **Feature / Epic:** FEAT-054 / EPIC-009.
- **FR vinculados:** FR-200, FR-201, FR-202, FR-203.

- **AC-054-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-200, então o sistema deverá cumprir: Permitir consultar avisos de datas anteriores.
- **AC-054-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-201, então o sistema deverá cumprir: Permitir consultar os avisos do dia atual.
- **AC-054-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-202, então o sistema deverá cumprir: Permitir consultar avisos programados para datas futuras.
- **AC-054-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-203, então o sistema deverá cumprir: Aplicar os filtros existentes à data selecionada.
- **AC-054-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-055 — visualizar os avisos de todas as rotas em conjunto

- **Feature / Epic:** FEAT-055 / EPIC-009.
- **FR vinculados:** FR-204, FR-205.

- **AC-055-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-204, então o sistema deverá cumprir: Permitir visualizar os avisos de todas as rotas em conjunto.
- **AC-055-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-205, então o sistema deverá cumprir: Permitir filtrar os avisos por uma rota específica.
- **AC-055-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-056 — combinar o filtro de rota com data, prioridade, categoria e impacto no trajeto

- **Feature / Epic:** FEAT-056 / EPIC-010.
- **FR vinculados:** FR-206, FR-207, FR-208, FR-209.

- **AC-056-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-206, então o sistema deverá cumprir: Permitir combinar o filtro de rota com data, prioridade, categoria e impacto no trajeto.
- **AC-056-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-207, então o sistema deverá cumprir: Permitir associar um aviso a múltiplas rotas.
- **AC-056-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-208, então o sistema deverá cumprir: Evitar avisos duplicados na visão geral, preservando sua visibilidade nos filtros individuais.
- **AC-056-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-209, então o sistema deverá cumprir: Permitir que Tia Cláudia registre o valor de mensalidade acordado com cada família.
- **AC-056-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-057 — consultar a situação financeira de cada família

- **Feature / Epic:** FEAT-057 / EPIC-010.
- **FR vinculados:** FR-210, FR-211, FR-212, FR-213.

- **AC-057-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-210, então o sistema deverá cumprir: Permitir consultar a situação financeira de cada família.
- **AC-057-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-211, então o sistema deverá cumprir: Permitir acompanhar mensalidades pagas, pendentes e atrasadas.
- **AC-057-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-212, então o sistema deverá cumprir: Disponibilizar funcionalidades para auxiliar na cobrança das mensalidades.
- **AC-057-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-213, então o sistema deverá cumprir: Permitir a identificação automática de pagamentos por integração financeira.
- **AC-057-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-058 — que Tia Cláudia confirme pagamentos manualmente

- **Feature / Epic:** FEAT-058 / EPIC-010.
- **FR vinculados:** FR-214, FR-215, FR-216, FR-217.

- **AC-058-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-214, então o sistema deverá cumprir: Permitir que Tia Cláudia confirme pagamentos manualmente.
- **AC-058-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-215, então o sistema deverá cumprir: Atualizar a situação da mensalidade após a confirmação do pagamento.
- **AC-058-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-216, então o sistema deverá cumprir: Registrar a data, o valor e a forma de confirmação do pagamento.
- **AC-058-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-217, então o sistema deverá cumprir: Permitir consultar o histórico de pagamentos de cada família.
- **AC-058-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-059 — registrar pagamentos realizados via Pix

- **Feature / Epic:** FEAT-059 / EPIC-010.
- **FR vinculados:** FR-218, FR-219, FR-220, FR-221.

- **AC-059-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-218, então o sistema deverá cumprir: Permitir registrar pagamentos realizados via Pix.
- **AC-059-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-219, então o sistema deverá cumprir: Permitir registrar pagamentos em dinheiro.
- **AC-059-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-220, então o sistema deverá cumprir: Permitir registrar pagamentos por transferência bancária.
- **AC-059-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-221, então o sistema deverá cumprir: Permitir registrar pagamentos por boleto bancário.
- **AC-059-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-060 — a forma de pagamento utilizada em cada registro financeiro

- **Feature / Epic:** FEAT-060 / EPIC-010.
- **FR vinculados:** FR-222, FR-223, FR-224, FR-225.

- **AC-060-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-222, então o sistema deverá cumprir: Identificar a forma de pagamento utilizada em cada registro financeiro.
- **AC-060-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-223, então o sistema deverá cumprir: Permitir que Tia Cláudia configure o dia de vencimento de cada família.
- **AC-060-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-224, então o sistema deverá cumprir: Gerar o acompanhamento mensal das cobranças conforme o vencimento cadastrado.
- **AC-060-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-225, então o sistema deverá cumprir: Identificar mensalidades vencidas que ainda não tiveram pagamento confirmado.
- **AC-060-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-061 — consultar os vencimentos das diferentes famílias

- **Feature / Epic:** FEAT-061 / EPIC-010.
- **FR vinculados:** FR-226, FR-227, FR-228, FR-229.

- **AC-061-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-226, então o sistema deverá cumprir: Permitir consultar os vencimentos das diferentes famílias.
- **AC-061-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-227, então o sistema deverá cumprir: Enviar lembretes automáticos antes do vencimento da mensalidade.
- **AC-061-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-228, então o sistema deverá cumprir: Enviar cobranças automáticas após o vencimento, caso o pagamento não tenha sido confirmado.
- **AC-061-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-229, então o sistema deverá cumprir: Interromper as cobranças referentes à mensalidade quando seu pagamento for confirmado.
- **AC-061-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-062 — Considerar a data de vencimento individual de cada família

- **Feature / Epic:** FEAT-062 / EPIC-010.
- **FR vinculados:** FR-230, FR-231, FR-232, FR-233.

- **AC-062-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-230, então o sistema deverá cumprir: Considerar a data de vencimento individual de cada família.
- **AC-062-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-231, então o sistema deverá cumprir: Registrar o histórico dos lembretes e cobranças enviados.
- **AC-062-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-232, então o sistema deverá cumprir: Permitir configurar quantos dias antes do vencimento o lembrete será enviado.
- **AC-062-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-233, então o sistema deverá cumprir: Permitir configurar a frequência das cobranças após o vencimento.
- **AC-062-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-063 — Aplicar as configurações aos pagamentos pendentes

- **Feature / Epic:** FEAT-063 / EPIC-010.
- **FR vinculados:** FR-234, FR-235, FR-236, FR-237.

- **AC-063-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-234, então o sistema deverá cumprir: Aplicar as configurações aos pagamentos pendentes.
- **AC-063-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-235, então o sistema deverá cumprir: Permitir alterar as configurações de cobrança posteriormente.
- **AC-063-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-236, então o sistema deverá cumprir: Interromper automaticamente as cobranças quando o pagamento for confirmado.
- **AC-063-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-237, então o sistema deverá cumprir: Enviar lembretes e cobranças por notificações no aplicativo.
- **AC-063-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-064 — Enviar lembretes e cobranças automáticas pelo WhatsApp

- **Feature / Epic:** FEAT-064 / EPIC-010.
- **FR vinculados:** FR-238, FR-239, FR-240, FR-241.

- **AC-064-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-238, então o sistema deverá cumprir: Enviar lembretes e cobranças automáticas pelo WhatsApp.
- **AC-064-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-239, então o sistema deverá cumprir: Enviar lembretes e cobranças por e-mail.
- **AC-064-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-240, então o sistema deverá cumprir: Permitir que Tia Cláudia habilite ou desabilite cada canal de comunicação.
- **AC-064-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-241, então o sistema deverá cumprir: Registrar o canal utilizado em cada tentativa de envio.
- **AC-064-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-065 — configurar os canais de cobrança padrão para todas as famílias

- **Feature / Epic:** FEAT-065 / EPIC-010.
- **FR vinculados:** FR-242, FR-243, FR-244, FR-245.

- **AC-065-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-242, então o sistema deverá cumprir: Permitir configurar os canais de cobrança padrão para todas as famílias.
- **AC-065-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-243, então o sistema deverá cumprir: Permitir personalizar os canais de cobrança de uma família específica.
- **AC-065-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-244, então o sistema deverá cumprir: Aplicar automaticamente a configuração geral às famílias sem personalização.
- **AC-065-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-245, então o sistema deverá cumprir: Permitir remover uma personalização e retornar à configuração geral.
- **AC-065-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-066 — aplicar descontos ou ajustes em uma mensalidade específica

- **Feature / Epic:** FEAT-066 / EPIC-011.
- **FR vinculados:** FR-255, FR-256, FR-257, FR-258.

- **AC-066-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-255, então o sistema deverá cumprir: Permitir aplicar descontos ou ajustes em uma mensalidade específica.
- **AC-066-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-256, então o sistema deverá cumprir: Permitir alterar o valor mensal utilizado nas próximas cobranças.
- **AC-066-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-257, então o sistema deverá cumprir: Exigir o registro do motivo de cada alteração financeira.
- **AC-066-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-258, então o sistema deverá cumprir: Manter o histórico com valor anterior, novo valor, data e responsável pela alteração.
- **AC-066-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-067 — Atualizar o saldo devedor da mensalidade quando seu valor for ajustado

- **Feature / Epic:** FEAT-067 / EPIC-011.
- **FR vinculados:** FR-259, FR-260, FR-261, FR-262.

- **AC-067-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-259, então o sistema deverá cumprir: Atualizar o saldo devedor da mensalidade quando seu valor for ajustado.
- **AC-067-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-260, então o sistema deverá cumprir: Permitir registrar pagamentos superiores ao saldo devido.
- **AC-067-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-261, então o sistema deverá cumprir: Calcular automaticamente o valor excedente.
- **AC-067-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-262, então o sistema deverá cumprir: Enviar um alerta para Tia Cláudia quando houver pagamento excedente.
- **AC-067-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-068 — Informar no alerta a família, o valor recebido, o valor devido e a diferença

- **Feature / Epic:** FEAT-068 / EPIC-011.
- **FR vinculados:** FR-263, FR-264, FR-265.

- **AC-068-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-263, então o sistema deverá cumprir: Informar no alerta a família, o valor recebido, o valor devido e a diferença.
- **AC-068-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-264, então o sistema deverá cumprir: Manter o registro do pagamento excedente no histórico financeiro.
- **AC-068-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-265, então o sistema deverá cumprir: Manter o valor excedente pendente até uma decisão administrativa.
- **AC-068-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-069 — que Tia Cláudia registre a devolução do valor excedente à família

- **Feature / Epic:** FEAT-069 / EPIC-012.
- **FR vinculados:** FR-266, FR-267, FR-268, FR-269.

- **AC-069-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-266, então o sistema deverá cumprir: Permitir que Tia Cláudia registre a devolução do valor excedente à família.
- **AC-069-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-267, então o sistema deverá cumprir: Permitir utilizar o valor excedente como crédito em uma mensalidade futura.
- **AC-069-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-268, então o sistema deverá cumprir: Registrar a decisão tomada, a data, o valor e a mensalidade beneficiada, quando aplicável.
- **AC-069-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-269, então o sistema deverá cumprir: Atualizar o saldo financeiro da família após a destinação do excedente.
- **AC-069-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-070 — que Tia Cláudia corrija pagamentos registrados

- **Feature / Epic:** FEAT-070 / EPIC-012.
- **FR vinculados:** FR-270, FR-271, FR-272, FR-273.

- **AC-070-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-270, então o sistema deverá cumprir: Permitir que Tia Cláudia corrija pagamentos registrados.
- **AC-070-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-271, então o sistema deverá cumprir: Permitir que Tia Cláudia cancele pagamentos registrados.
- **AC-070-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-272, então o sistema deverá cumprir: Exigir uma justificativa para cada correção ou cancelamento.
- **AC-070-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-273, então o sistema deverá cumprir: Preservar o valor original, o novo valor, a data, o responsável e o motivo da alteração.
- **AC-070-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-071 — Recalcular o saldo devedor da mensalidade após uma correção ou cancelamento

- **Feature / Epic:** FEAT-071 / EPIC-012.
- **FR vinculados:** FR-274, FR-275, FR-276, FR-277.

- **AC-071-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-274, então o sistema deverá cumprir: Recalcular o saldo devedor da mensalidade após uma correção ou cancelamento.
- **AC-071-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-275, então o sistema deverá cumprir: Disponibilizar o histórico completo das alterações financeiras para consulta administrativa.
- **AC-071-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-276, então o sistema deverá cumprir: Permitir que os responsáveis enviem comprovantes de pagamento pelo aplicativo.
- **AC-071-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-277, então o sistema deverá cumprir: Permitir que Tia Cláudia anexe comprovantes aos pagamentos registrados.
- **AC-071-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-072 — Vincular cada comprovante à família e à mensalidade correspondente

- **Feature / Epic:** FEAT-072 / EPIC-012.
- **FR vinculados:** FR-278, FR-279, FR-280, FR-281.

- **AC-072-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-278, então o sistema deverá cumprir: Vincular cada comprovante à família e à mensalidade correspondente.
- **AC-072-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-279, então o sistema deverá cumprir: Permitir que Tia Cláudia visualize os comprovantes enviados.
- **AC-072-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-280, então o sistema deverá cumprir: Manter o histórico dos comprovantes associados aos registros financeiros.
- **AC-072-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-281, então o sistema deverá cumprir: Notificar Tia Cláudia quando um responsável enviar um comprovante.
- **AC-072-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-073 — Exibir os comprovantes recebidos em uma lista de pagamentos aguardando verificação

- **Feature / Epic:** FEAT-073 / EPIC-012.
- **FR vinculados:** FR-282, FR-283, FR-284, FR-285.

- **AC-073-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-282, então o sistema deverá cumprir: Exibir os comprovantes recebidos em uma lista de pagamentos aguardando verificação.
- **AC-073-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-283, então o sistema deverá cumprir: Permitir consultar o comprovante e os dados da mensalidade correspondente.
- **AC-073-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-284, então o sistema deverá cumprir: Atualizar a situação da verificação após a análise do comprovante.
- **AC-073-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-285, então o sistema deverá cumprir: Manter o histórico dos comprovantes analisados para consultas posteriores.
- **AC-073-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-074 — Classificar comprovantes como pendentes, confirmados ou rejeitados

- **Feature / Epic:** FEAT-074 / EPIC-012.
- **FR vinculados:** FR-286, FR-287, FR-288, FR-289.

- **AC-074-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-286, então o sistema deverá cumprir: Classificar comprovantes como pendentes, confirmados ou rejeitados.
- **AC-074-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-287, então o sistema deverá cumprir: Permitir que Tia Cláudia confirme um comprovante após verificar o recebimento.
- **AC-074-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-288, então o sistema deverá cumprir: Permitir rejeitar comprovantes, exigindo uma justificativa.
- **AC-074-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-289, então o sistema deverá cumprir: Notificar a família quando um comprovante for rejeitado, informando o motivo.
- **AC-074-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-075 — que a família envie um novo comprovante após a rejeição

- **Feature / Epic:** FEAT-075 / EPIC-012.
- **FR vinculados:** FR-290, FR-291, FR-292, FR-293.

- **AC-075-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-290, então o sistema deverá cumprir: Permitir que a família envie um novo comprovante após a rejeição.
- **AC-075-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-291, então o sistema deverá cumprir: Preservar o histórico das análises, incluindo data, responsável e justificativa.
- **AC-075-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-292, então o sistema deverá cumprir: Exibir as mensalidades atuais e anteriores da família.
- **AC-075-04** — Dada uma família com mensalidades integralmente pagas e/ou pendentes, quando consultar seu painel financeiro, então verá os valores quitados, pendentes e vencimentos dos próprios lançamentos; não haverá opção de pagamento parcial.
- **AC-075-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-076 — Exibir as datas de vencimento e a situação de cada mensalidade

- **Feature / Epic:** FEAT-076 / EPIC-012.
- **FR vinculados:** FR-294, FR-295, FR-296, FR-297.

- **AC-076-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-294, então o sistema deverá cumprir: Exibir as datas de vencimento e a situação de cada mensalidade.
- **AC-076-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-295, então o sistema deverá cumprir: Permitir consultar os comprovantes vinculados aos pagamentos.
- **AC-076-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-296, então o sistema deverá cumprir: Apresentar descontos e ajustes financeiros realizados.
- **AC-076-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-297, então o sistema deverá cumprir: Exibir créditos disponíveis provenientes de pagamentos excedentes.
- **AC-076-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-077 — consultar o histórico financeiro da própria família

- **Feature / Epic:** FEAT-077 / EPIC-012.
- **FR vinculados:** FR-298, FR-299, FR-300, FR-301.

- **AC-077-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-298, então o sistema deverá cumprir: Permitir consultar o histórico financeiro da própria família.
- **AC-077-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-299, então o sistema deverá cumprir: Gerar automaticamente um recibo digital após a confirmação da quitação integral.
- **AC-077-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-300, então o sistema deverá cumprir: Permitir que a família consulte e baixe seus recibos pelo aplicativo.
- **AC-077-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-301, então o sistema deverá cumprir: Enviar o recibo pelos canais de comunicação configurados.
- **AC-077-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-078 — Manter o histórico dos recibos emitidos

- **Feature / Epic:** FEAT-078 / EPIC-012.
- **FR vinculados:** FR-302, FR-303, FR-304, FR-305.

- **AC-078-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-302, então o sistema deverá cumprir: Manter o histórico dos recibos emitidos.
- **AC-078-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-303, então o sistema deverá cumprir: Vincular cada recibo à família e à mensalidade correspondente.
- **AC-078-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-304, então o sistema deverá cumprir: Identificar recibos afetados por correções ou cancelamentos de pagamentos.
- **AC-078-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-305, então o sistema deverá cumprir: Marcar o recibo anterior como cancelado, preservando-o no histórico.
- **AC-078-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-001 — Gerenciar inadimplência e suspensão administrativa

- **Feature / Epic:** FEAT-001 / EPIC-013.
- **FR vinculados:** FR-001, FR-002, FR-003, FR-004.

- **AC-001-01** — Dado um pagamento registrado, quando Tia Cláudia consultar a situação financeira, então deverá visualizar se a mensalidade está quitada, pendente ou vencida conforme os registros confirmados.
- **AC-001-02** — Dado um usuário sem perfil de Tia Cláudia, quando tentar suspender ou reativar o transporte, então a operação deverá ser impedida. Somente Tia Cláudia poderá realizar a mudança administrativa.
- **AC-001-03** — Dada uma mensalidade vencida, quando Tia Cláudia acionar a comunicação de cobrança, então o sistema deverá direcioná-la à família afetada, sem conceder à família poderes de gestão financeira.
- **AC-001-04** — Dado que Tia Cláudia registrou a suspensão, quando a ação for concluída, então o sistema deverá gerar o aviso ao responsável familiar por e-mail, conforme FR-004, preservando o registro de suspensão.
- **AC-001-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-079 — Gerar automaticamente um novo recibo corrigido caso a mensalidade permaneça integralmente qu…

- **Feature / Epic:** FEAT-079 / EPIC-013.
- **FR vinculados:** FR-306, FR-307, FR-308, FR-309.

- **AC-079-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-306, então o sistema deverá cumprir: Gerar automaticamente um novo recibo corrigido caso a mensalidade permaneça integralmente quitada.
- **AC-079-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-307, então o sistema deverá cumprir: Notificar a família quando um recibo for cancelado ou substituído.
- **AC-079-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-308, então o sistema deverá cumprir: Registrar o vínculo entre o recibo original e o recibo substituto.
- **AC-079-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-309, então o sistema deverá cumprir: Gerar relatórios financeiros por período selecionado.
- **AC-079-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-080 — Apresentar valores recebidos, pendências e inadimplência

- **Feature / Epic:** FEAT-080 / EPIC-013.
- **FR vinculados:** FR-310, FR-311, FR-312, FR-313.

- **AC-080-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-310, então o sistema deverá cumprir: Apresentar valores recebidos, pendências e inadimplência.
- **AC-080-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-311, então o sistema deverá cumprir: Incluir descontos, créditos, devoluções e formas de pagamento nos relatórios.
- **AC-080-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-312, então o sistema deverá cumprir: Permitir exportar relatórios financeiros.
- **AC-080-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-313, então o sistema deverá cumprir: Impedir o registro de pagamentos inferiores ao saldo integral da mensalidade.
- **AC-080-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-081 — Exibir a mensalidade como pendente até a confirmação do pagamento integral

- **Feature / Epic:** FEAT-081 / EPIC-013.
- **FR vinculados:** FR-314, FR-315, FR-316, FR-317.

- **AC-081-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-314, então o sistema deverá cumprir: Exibir a mensalidade como pendente até a confirmação do pagamento integral.
- **AC-081-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-315, então o sistema deverá cumprir: Permitir configurar a quantidade de dias de atraso que gera um alerta de possível suspensão.
- **AC-081-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-316, então o sistema deverá cumprir: Permitir configurar a quantidade de mensalidades atrasadas que gera um alerta.
- **AC-081-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-317, então o sistema deverá cumprir: Identificar automaticamente famílias que atingirem os critérios configurados.
- **AC-081-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-082 — Notificar Tia Cláudia sobre possíveis suspensões

- **Feature / Epic:** FEAT-082 / EPIC-013.
- **FR vinculados:** FR-318, FR-319, FR-320, FR-321.

- **AC-082-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-318, então o sistema deverá cumprir: Notificar Tia Cláudia sobre possíveis suspensões.
- **AC-082-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-319, então o sistema deverá cumprir: Permitir que Tia Cláudia decida manualmente pela suspensão do transporte.
- **AC-082-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-320, então o sistema deverá cumprir: Registrar o histórico das suspensões realizadas.
- **AC-082-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-321, então o sistema deverá cumprir: Permitir que Tia Cláudia registre a suspensão de uma família por inadimplência.
- **AC-082-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-083 — Retirar os alunos da família suspensa das próximas rotas previstas

- **Feature / Epic:** FEAT-083 / EPIC-013.
- **FR vinculados:** FR-322, FR-323, FR-324, FR-325.

- **AC-083-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-322, então o sistema deverá cumprir: Retirar os alunos da família suspensa das próximas rotas previstas.
- **AC-083-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-323, então o sistema deverá cumprir: Manter o acesso da família ao aplicativo durante a suspensão.
- **AC-083-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-324, então o sistema deverá cumprir: Permitir que a família suspensa consulte mensalidades, valores pendentes e comprovantes.
- **AC-083-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-325, então o sistema deverá cumprir: Notificar os responsáveis quando a suspensão for aplicada.
- **AC-083-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-084 — a situação de suspensão no cadastro administrativo da família

- **Feature / Epic:** FEAT-084 / EPIC-013.
- **FR vinculados:** FR-326, FR-327, FR-328, FR-329.

- **AC-084-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-326, então o sistema deverá cumprir: Identificar a situação de suspensão no cadastro administrativo da família.
- **AC-084-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-327, então o sistema deverá cumprir: Verificar se existem alunos da família suspensa já embarcados.
- **AC-084-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-328, então o sistema deverá cumprir: Alertar Tia Cláudia quando a suspensão envolver um aluno embarcado.
- **AC-084-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-329, então o sistema deverá cumprir: Manter o aluno embarcado na rota atual até seu destino previsto.
- **AC-084-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-085 — Aplicar a exclusão do aluno somente nas viagens seguintes

- **Feature / Epic:** FEAT-085 / EPIC-013.
- **FR vinculados:** FR-330, FR-331, FR-332, FR-333.

- **AC-085-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-330, então o sistema deverá cumprir: Aplicar a exclusão do aluno somente nas viagens seguintes.
- **AC-085-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-331, então o sistema deverá cumprir: Registrar a data e o horário da suspensão e seus efeitos nas viagens.
- **AC-085-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-332, então o sistema deverá cumprir: Identificar quando todas as pendências financeiras da família forem quitadas.
- **AC-085-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-333, então o sistema deverá cumprir: Notificar Tia Cláudia quando uma família suspensa estiver apta à reativação.
- **AC-085-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-086 — que Tia Cláudia confirme manualmente a reativação

- **Feature / Epic:** FEAT-086 / EPIC-013.
- **FR vinculados:** FR-334, FR-335, FR-336, FR-337.

- **AC-086-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-334, então o sistema deverá cumprir: Permitir que Tia Cláudia confirme manualmente a reativação.
- **AC-086-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-335, então o sistema deverá cumprir: Reincluir os alunos nas próximas rotas previstas após a autorização.
- **AC-086-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-336, então o sistema deverá cumprir: Notificar os responsáveis quando o transporte for reativado.
- **AC-086-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-337, então o sistema deverá cumprir: Registrar a data, o horário e a responsável pela reativação.
- **AC-086-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-087 — o histórico de suspensões e reativações de cada família

- **Feature / Epic:** FEAT-087 / EPIC-013.
- **FR vinculados:** FR-338, FR-339, FR-340, FR-341.

- **AC-087-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-338, então o sistema deverá cumprir: Registrar o histórico de suspensões e reativações de cada família.
- **AC-087-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-339, então o sistema deverá cumprir: Armazenar data, horário e motivo de cada suspensão.
- **AC-087-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-340, então o sistema deverá cumprir: Identificar as mensalidades em atraso relacionadas à suspensão.
- **AC-087-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-341, então o sistema deverá cumprir: Registrar as notificações enviadas aos responsáveis.
- **AC-087-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-088 — quem autorizou a suspensão ou reativação

- **Feature / Epic:** FEAT-088 / EPIC-013.
- **FR vinculados:** FR-342, FR-343, FR-344, FR-345.

- **AC-088-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-342, então o sistema deverá cumprir: Identificar quem autorizou a suspensão ou reativação.
- **AC-088-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-343, então o sistema deverá cumprir: Permitir que Tia Cláudia consulte o histórico completo no cadastro da família.
- **AC-088-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-344, então o sistema deverá cumprir: Permitir que Tia Cláudia registre o encerramento do serviço de uma família.
- **AC-088-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-345, então o sistema deverá cumprir: Registrar a data e o motivo do encerramento.
- **AC-088-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-089 — Retirar os alunos das rotas a partir da data de encerramento

- **Feature / Epic:** FEAT-089 / EPIC-014.
- **FR vinculados:** FR-346, FR-347, FR-348, FR-349.

- **AC-089-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-346, então o sistema deverá cumprir: Retirar os alunos das rotas a partir da data de encerramento.
- **AC-089-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-347, então o sistema deverá cumprir: Interromper a geração de novas mensalidades após o encerramento.
- **AC-089-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-348, então o sistema deverá cumprir: Preservar o histórico financeiro da família.
- **AC-089-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-349, então o sistema deverá cumprir: Preservar o histórico operacional, incluindo presenças e ausências.
- **AC-089-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-090 — a família como inativa após o encerramento

- **Feature / Epic:** FEAT-090 / EPIC-014.
- **FR vinculados:** FR-350, FR-351, FR-352, FR-353.

- **AC-090-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-350, então o sistema deverá cumprir: Identificar a família como inativa após o encerramento.
- **AC-090-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-351, então o sistema deverá cumprir: Bloquear o acesso da família ao aplicativo assim que o encerramento entrar em vigor.
- **AC-090-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-352, então o sistema deverá cumprir: Impedir novos acessos às funcionalidades de transporte e financeiras após o encerramento.
- **AC-090-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-353, então o sistema deverá cumprir: Preservar os históricos financeiro e operacional da família.
- **AC-090-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-091 — que Tia Cláudia consulte os registros de famílias inativas

- **Feature / Epic:** FEAT-091 / EPIC-014.
- **FR vinculados:** FR-354, FR-355, FR-356, FR-357.

- **AC-091-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-354, então o sistema deverá cumprir: Permitir que Tia Cláudia consulte os registros de famílias inativas.
- **AC-091-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-355, então o sistema deverá cumprir: Registrar a data e o horário do bloqueio de acesso.
- **AC-091-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-356, então o sistema deverá cumprir: Permitir que Tia Cláudia reative cadastros de famílias anteriormente encerrados.
- **AC-091-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-357, então o sistema deverá cumprir: Apresentar os dados anteriores para revisão antes da reativação.
- **AC-091-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-092 — atualizar informações dos responsáveis e alunos

- **Feature / Epic:** FEAT-092 / EPIC-014.
- **FR vinculados:** FR-358, FR-359, FR-360, FR-361.

- **AC-092-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-358, então o sistema deverá cumprir: Permitir atualizar informações dos responsáveis e alunos.
- **AC-092-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-359, então o sistema deverá cumprir: Permitir revisar e atualizar o valor da mensalidade.
- **AC-092-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-360, então o sistema deverá cumprir: Permitir revisar as rotas e os pontos de embarque e desembarque.
- **AC-092-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-361, então o sistema deverá cumprir: Restaurar o acesso da família somente após a confirmação da reativação.
- **AC-092-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-093 — Preservar os históricos financeiro e operacional anteriores

- **Feature / Epic:** FEAT-093 / EPIC-014.
- **FR vinculados:** FR-362, FR-363, FR-364, FR-365.

- **AC-093-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-362, então o sistema deverá cumprir: Preservar os históricos financeiro e operacional anteriores.
- **AC-093-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-363, então o sistema deverá cumprir: Registrar a data e a responsável pela reativação.
- **AC-093-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-364, então o sistema deverá cumprir: Verificar pendências financeiras anteriores durante a reativação de uma família.
- **AC-093-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-365, então o sistema deverá cumprir: Alertar Tia Cláudia sobre mensalidades antigas não quitadas.
- **AC-093-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-094 — Exibir os valores, vencimentos e histórico das pendências

- **Feature / Epic:** FEAT-094 / EPIC-014.
- **FR vinculados:** FR-366, FR-367, FR-368, FR-369.

- **AC-094-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-366, então o sistema deverá cumprir: Exibir os valores, vencimentos e histórico das pendências.
- **AC-094-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-367, então o sistema deverá cumprir: Permitir que Tia Cláudia autorize ou impeça a reativação enquanto houver dívidas antigas.
- **AC-094-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-368, então o sistema deverá cumprir: Registrar a decisão administrativa e sua data.
- **AC-094-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-369, então o sistema deverá cumprir: Preservar as pendências financeiras anteriores após a reativação.
- **AC-094-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-095 — que Tia Cláudia cancele uma mensalidade pendente

- **Feature / Epic:** FEAT-095 / EPIC-014.
- **FR vinculados:** FR-370, FR-371, FR-372, FR-373.

- **AC-095-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-370, então o sistema deverá cumprir: Permitir que Tia Cláudia cancele uma mensalidade pendente.
- **AC-095-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-371, então o sistema deverá cumprir: Não exigir justificativa para o cancelamento.
- **AC-095-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-372, então o sistema deverá cumprir: Atualizar a situação da mensalidade para "Cancelada".
- **AC-095-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-373, então o sistema deverá cumprir: Interromper as cobranças automáticas da mensalidade cancelada.
- **AC-095-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-096 — Preservar o registro da mensalidade cancelada no histórico financeiro

- **Feature / Epic:** FEAT-096 / EPIC-014.
- **FR vinculados:** FR-374, FR-375, FR-376, FR-377.

- **AC-096-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-374, então o sistema deverá cumprir: Preservar o registro da mensalidade cancelada no histórico financeiro.
- **AC-096-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-375, então o sistema deverá cumprir: Exibir uma confirmação antes de cancelar uma mensalidade.
- **AC-096-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-376, então o sistema deverá cumprir: Permitir desistir do cancelamento antes de confirmá-lo.
- **AC-096-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-377, então o sistema deverá cumprir: Permitir que Tia Cláudia reverta o cancelamento de uma mensalidade.
- **AC-096-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-097 — Restaurar a situação financeira correspondente após a reversão

- **Feature / Epic:** FEAT-097 / EPIC-014.
- **FR vinculados:** FR-378, FR-379, FR-380, FR-381.

- **AC-097-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-378, então o sistema deverá cumprir: Restaurar a situação financeira correspondente após a reversão.
- **AC-097-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-379, então o sistema deverá cumprir: Registrar a data, o horário e a responsável pelo cancelamento e pela reversão.
- **AC-097-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-380, então o sistema deverá cumprir: Preservar o histórico completo das alterações.
- **AC-097-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-381, então o sistema deverá cumprir: Atualizar a situação da mensalidade para "Cancelada" no painel financeiro da família.
- **AC-097-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-098 — Não enviar notificações automáticas quando uma mensalidade for cancelada

- **Feature / Epic:** FEAT-098 / EPIC-014.
- **FR vinculados:** FR-382.

- **AC-098-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-382, então o sistema deverá cumprir: Não enviar notificações automáticas quando uma mensalidade for cancelada.
- **AC-098-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-099 — que a família consulte mensalidades canceladas em seu histórico financeiro

- **Feature / Epic:** FEAT-099 / EPIC-015.
- **FR vinculados:** FR-383, FR-384, FR-385, FR-386.

- **AC-099-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-383, então o sistema deverá cumprir: Permitir que a família consulte mensalidades canceladas em seu histórico financeiro.
- **AC-099-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-384, então o sistema deverá cumprir: Permitir o cancelamento somente de mensalidades pendentes, incluindo as vencidas e não pagas.
- **AC-099-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-385, então o sistema deverá cumprir: Impedir o cancelamento direto de mensalidades quitadas.
- **AC-099-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-386, então o sistema deverá cumprir: Informar Tia Cláudia quando uma mensalidade não puder ser cancelada por já estar paga.
- **AC-099-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-100 — Manter disponível a funcionalidade de correção de pagamentos, conforme as regras anteriormen…

- **Feature / Epic:** FEAT-100 / EPIC-015.
- **FR vinculados:** FR-387, FR-388, FR-389, FR-390.

- **AC-100-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-387, então o sistema deverá cumprir: Manter disponível a funcionalidade de correção de pagamentos, conforme as regras anteriormente definidas.
- **AC-100-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-388, então o sistema deverá cumprir: Permitir registrar despesas com valor, data, categoria e descrição.
- **AC-100-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-389, então o sistema deverá cumprir: Permitir cadastrar despesas recorrentes, como seguro e outros pagamentos periódicos.
- **AC-100-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-390, então o sistema deverá cumprir: Organizar despesas por categorias, como combustível, manutenção, seguro e outras.
- **AC-100-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-101 — anexar comprovantes às despesas registradas

- **Feature / Epic:** FEAT-101 / EPIC-015.
- **FR vinculados:** FR-391, FR-392, FR-393, FR-394.

- **AC-101-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-391, então o sistema deverá cumprir: Permitir anexar comprovantes às despesas registradas.
- **AC-101-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-392, então o sistema deverá cumprir: Permitir consultar o histórico de despesas por período e categoria.
- **AC-101-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-393, então o sistema deverá cumprir: Gerar relatórios comparando receitas e despesas.
- **AC-101-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-394, então o sistema deverá cumprir: Apresentar o saldo financeiro do período, considerando receitas e despesas registradas.
- **AC-101-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-102 — cadastrar despesas recorrentes com valor, descrição, categoria e periodicidade

- **Feature / Epic:** FEAT-102 / EPIC-015.
- **FR vinculados:** FR-395, FR-396, FR-397, FR-398.

- **AC-102-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-395, então o sistema deverá cumprir: Permitir cadastrar despesas recorrentes com valor, descrição, categoria e periodicidade.
- **AC-102-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-396, então o sistema deverá cumprir: Gerar automaticamente as despesas conforme a periodicidade cadastrada.
- **AC-102-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-397, então o sistema deverá cumprir: Manter cada despesa como pendente até a confirmação do pagamento.
- **AC-102-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-398, então o sistema deverá cumprir: Enviar lembretes de vencimento para Tia Cláudia.
- **AC-102-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-103 — que Tia Cláudia confirme o pagamento de uma despesa

- **Feature / Epic:** FEAT-103 / EPIC-015.
- **FR vinculados:** FR-399, FR-400, FR-401, FR-402.

- **AC-103-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-399, então o sistema deverá cumprir: Permitir que Tia Cláudia confirme o pagamento de uma despesa.
- **AC-103-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-400, então o sistema deverá cumprir: Identificar despesas recorrentes vencidas e não pagas.
- **AC-103-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-401, então o sistema deverá cumprir: Manter o histórico dos pagamentos das despesas recorrentes.
- **AC-103-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-402, então o sistema deverá cumprir: Permitir configurar quantos dias antes do vencimento os lembretes serão enviados.
- **AC-103-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-104 — configurar a frequência dos lembretes após o vencimento

- **Feature / Epic:** FEAT-104 / EPIC-015.
- **FR vinculados:** FR-403, FR-404, FR-405, FR-406.

- **AC-104-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-403, então o sistema deverá cumprir: Permitir configurar a frequência dos lembretes após o vencimento.
- **AC-104-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-404, então o sistema deverá cumprir: Enviar lembretes automáticos conforme as configurações estabelecidas.
- **AC-104-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-405, então o sistema deverá cumprir: Interromper os lembretes quando a despesa for confirmada como paga.
- **AC-104-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-406, então o sistema deverá cumprir: Permitir que Tia Cláudia altere as configurações posteriormente.
- **AC-104-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-105 — cadastrar e identificar diferentes veículos

- **Feature / Epic:** FEAT-105 / EPIC-015.
- **FR vinculados:** FR-407, FR-408, FR-409, FR-410.

- **AC-105-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-407, então o sistema deverá cumprir: Permitir cadastrar e identificar diferentes veículos.
- **AC-105-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-408, então o sistema deverá cumprir: Permitir vincular despesas a um veículo específico.
- **AC-105-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-409, então o sistema deverá cumprir: Permitir registrar despesas gerais, sem vínculo com um veículo.
- **AC-105-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-410, então o sistema deverá cumprir: Gerar relatórios de despesas individuais por veículo.
- **AC-105-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-106 — Gerar relatórios consolidados com despesas de todos os veículos e despesas gerais

- **Feature / Epic:** FEAT-106 / EPIC-015.
- **FR vinculados:** FR-411, FR-412.

- **AC-106-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-411, então o sistema deverá cumprir: Gerar relatórios consolidados com despesas de todos os veículos e despesas gerais.
- **AC-106-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-412, então o sistema deverá cumprir: Permitir filtrar despesas por veículo, categoria e período.
- **AC-106-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-107 — cadastrar placa, marca, modelo e ano do veículo

- **Feature / Epic:** FEAT-107 / EPIC-016.
- **FR vinculados:** FR-413, FR-414, FR-415, FR-416.

- **AC-107-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-413, então o sistema deverá cumprir: Permitir cadastrar placa, marca, modelo e ano do veículo.
- **AC-107-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-414, então o sistema deverá cumprir: Registrar a capacidade de passageiros de cada veículo.
- **AC-107-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-415, então o sistema deverá cumprir: Identificar a situação do veículo como ativo ou inativo.
- **AC-107-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-416, então o sistema deverá cumprir: Permitir registrar e atualizar a quilometragem.
- **AC-107-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-108 — os documentos do veículo e suas datas de vencimento

- **Feature / Epic:** FEAT-108 / EPIC-016.
- **FR vinculados:** FR-417, FR-418, FR-419, FR-420.

- **AC-108-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-417, então o sistema deverá cumprir: Registrar os documentos do veículo e suas datas de vencimento.
- **AC-108-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-418, então o sistema deverá cumprir: Registrar informações do seguro e seu vencimento.
- **AC-108-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-419, então o sistema deverá cumprir: Manter o histórico de manutenções realizadas.
- **AC-108-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-420, então o sistema deverá cumprir: Permitir consultar e atualizar as informações cadastradas.
- **AC-108-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-109 — configurar alertas de vencimento de documentos e seguros

- **Feature / Epic:** FEAT-109 / EPIC-016.
- **FR vinculados:** FR-421, FR-422, FR-423, FR-424.

- **AC-109-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-421, então o sistema deverá cumprir: Permitir configurar alertas de vencimento de documentos e seguros.
- **AC-109-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-422, então o sistema deverá cumprir: Permitir configurar alertas de manutenção por data ou quilometragem.
- **AC-109-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-423, então o sistema deverá cumprir: Permitir definir a antecedência dos alertas.
- **AC-109-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-424, então o sistema deverá cumprir: Permitir configurar a frequência dos lembretes.
- **AC-109-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-110 — documentos e manutenções pendentes ou vencidos

- **Feature / Epic:** FEAT-110 / EPIC-016.
- **FR vinculados:** FR-425, FR-426, FR-427, FR-428.

- **AC-110-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-425, então o sistema deverá cumprir: Identificar documentos e manutenções pendentes ou vencidos.
- **AC-110-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-426, então o sistema deverá cumprir: Manter as pendências visíveis até sua regularização.
- **AC-110-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-427, então o sistema deverá cumprir: Registrar a regularização e preservar o histórico dos alertas.
- **AC-110-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-428, então o sistema deverá cumprir: Permitir que Tia Cláudia marque um veículo como temporariamente indisponível.
- **AC-110-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-111 — as rotas associadas ao veículo indisponível

- **Feature / Epic:** FEAT-111 / EPIC-016.
- **FR vinculados:** FR-429, FR-430, FR-431, FR-432.

- **AC-111-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-429, então o sistema deverá cumprir: Identificar as rotas associadas ao veículo indisponível.
- **AC-111-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-430, então o sistema deverá cumprir: Alertar Tia Cláudia sobre as rotas afetadas.
- **AC-111-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-431, então o sistema deverá cumprir: Apresentar os veículos disponíveis para substituição.
- **AC-111-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-432, então o sistema deverá cumprir: Verificar a capacidade de passageiros do veículo substituto.
- **AC-111-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-112 — que Tia Cláudia confirme a substituição do veículo

- **Feature / Epic:** FEAT-112 / EPIC-016.
- **FR vinculados:** FR-433, FR-434, FR-435, FR-436.

- **AC-112-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-433, então o sistema deverá cumprir: Permitir que Tia Cláudia confirme a substituição do veículo.
- **AC-112-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-434, então o sistema deverá cumprir: Registrar o histórico das substituições realizadas.
- **AC-112-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-435, então o sistema deverá cumprir: Comparar a quantidade de passageiros previstos com a capacidade cadastrada do veículo substituto.
- **AC-112-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-436, então o sistema deverá cumprir: Exibir um alerta quando a capacidade for insuficiente.
- **AC-112-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-113 — Informar a capacidade do veículo e a quantidade de passageiros previstos

- **Feature / Epic:** FEAT-113 / EPIC-016.
- **FR vinculados:** FR-437, FR-438, FR-439, FR-440.

- **AC-113-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-437, então o sistema deverá cumprir: Informar a capacidade do veículo e a quantidade de passageiros previstos.
- **AC-113-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-438, então o sistema deverá cumprir: Permitir que Tia Cláudia confirme a substituição após visualizar o alerta.
- **AC-113-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-439, então o sistema deverá cumprir: Registrar a confirmação da substituição e o alerta apresentado.
- **AC-113-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-440, então o sistema deverá cumprir: Identificar quando a capacidade do veículo substituto for insuficiente.
- **AC-113-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-114 — Permitir que Tia Cláudia reorganize os alunos entre rotas ou viagens

- **Feature / Epic:** FEAT-114 / EPIC-016.
- **FR vinculados:** FR-441, FR-442, FR-443, FR-444.

- **AC-114-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-441, então o sistema deverá cumprir: Permitir que Tia Cláudia reorganize os alunos entre rotas ou viagens.
- **AC-114-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-442, então o sistema deverá cumprir: Recalcular a quantidade de passageiros previstos após a reorganização.
- **AC-114-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-443, então o sistema deverá cumprir: Impedir a liberação de uma rota enquanto a capacidade do veículo estiver excedida.
- **AC-114-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-444, então o sistema deverá cumprir: Registrar as alterações realizadas na distribuição dos passageiros.
- **AC-114-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-115 — que Tia Cláudia cadastre outros motoristas

- **Feature / Epic:** FEAT-115 / EPIC-016.
- **FR vinculados:** FR-445, FR-446, FR-447, FR-448.

- **AC-115-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-445, então o sistema deverá cumprir: Permitir que Tia Cláudia cadastre outros motoristas.
- **AC-115-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-446, então o sistema deverá cumprir: Permitir vincular motoristas aos veículos cadastrados.
- **AC-115-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-447, então o sistema deverá cumprir: Permitir associar motoristas às rotas de transporte.
- **AC-115-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-448, então o sistema deverá cumprir: Disponibilizar acesso individual ao aplicativo para cada motorista.
- **AC-115-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-116 — configurar permissões específicas para motoristas

- **Feature / Epic:** FEAT-116 / EPIC-016.
- **FR vinculados:** FR-449.

- **AC-116-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-449, então o sistema deverá cumprir: Permitir configurar permissões específicas para motoristas.
- **AC-116-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-117 — qual motorista está responsável por cada rota ou viagem

- **Feature / Epic:** FEAT-117 / EPIC-017.
- **FR vinculados:** FR-450, FR-451, FR-452, FR-453.

- **AC-117-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-450, então o sistema deverá cumprir: Registrar qual motorista está responsável por cada rota ou viagem.
- **AC-117-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-451, então o sistema deverá cumprir: Permitir que o motorista visualize suas rotas e os alunos previstos.
- **AC-117-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-452, então o sistema deverá cumprir: Permitir registrar e corrigir presenças e ausências.
- **AC-117-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-453, então o sistema deverá cumprir: Permitir enviar alertas operacionais aos responsáveis das suas rotas.
- **AC-117-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-118 — iniciar e encerrar viagens sob sua responsabilidade

- **Feature / Epic:** FEAT-118 / EPIC-017.
- **FR vinculados:** FR-454, FR-455, FR-456, FR-457.

- **AC-118-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-454, então o sistema deverá cumprir: Permitir iniciar e encerrar viagens sob sua responsabilidade.
- **AC-118-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-455, então o sistema deverá cumprir: Permitir compartilhar a localização do veículo durante as viagens autorizadas.
- **AC-118-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-456, então o sistema deverá cumprir: Restringir o acesso dos motoristas às informações financeiras e configurações administrativas.
- **AC-118-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-457, então o sistema deverá cumprir: Permitir que Tia Cláudia substitua temporariamente o motorista de uma ou mais viagens.
- **AC-118-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-119 — selecionar o motorista substituto e as viagens afetadas

- **Feature / Epic:** FEAT-119 / EPIC-017.
- **FR vinculados:** FR-458, FR-459, FR-460, FR-461.

- **AC-119-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-458, então o sistema deverá cumprir: Permitir selecionar o motorista substituto e as viagens afetadas.
- **AC-119-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-459, então o sistema deverá cumprir: Conceder ao substituto acesso operacional às viagens atribuídas.
- **AC-119-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-460, então o sistema deverá cumprir: Atualizar as permissões do motorista original durante a substituição.
- **AC-119-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-461, então o sistema deverá cumprir: Notificar as famílias afetadas sobre a troca de motorista.
- **AC-119-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-120 — o histórico da substituição, incluindo data, motoristas envolvidos e viagens afetadas

- **Feature / Epic:** FEAT-120 / EPIC-017.
- **FR vinculados:** FR-462, FR-463, FR-464, FR-465.

- **AC-120-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-462, então o sistema deverá cumprir: Registrar o histórico da substituição, incluindo data, motoristas envolvidos e viagens afetadas.
- **AC-120-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-463, então o sistema deverá cumprir: Encerrar o acesso temporário do substituto quando terminar sua responsabilidade pelas viagens.
- **AC-120-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-464, então o sistema deverá cumprir: Exibir todas as viagens em andamento em um painel centralizado.
- **AC-120-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-465, então o sistema deverá cumprir: Identificar motorista, veículo e rota de cada viagem.
- **AC-120-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-121 — Exibir a situação atual de cada viagem

- **Feature / Epic:** FEAT-121 / EPIC-017.
- **FR vinculados:** FR-466, FR-467, FR-468, FR-469.

- **AC-121-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-466, então o sistema deverá cumprir: Exibir a situação atual de cada viagem.
- **AC-121-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-467, então o sistema deverá cumprir: Mostrar a localização em tempo real dos veículos durante as viagens.
- **AC-121-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-468, então o sistema deverá cumprir: Apresentar alertas operacionais relacionados às viagens.
- **AC-121-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-469, então o sistema deverá cumprir: Permitir abrir os detalhes de cada viagem individualmente.
- **AC-121-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-122 — consultar os dados da viagem previamente carregados, mesmo sem internet

- **Feature / Epic:** FEAT-122 / EPIC-017.
- **FR vinculados:** FR-470, FR-471, FR-472, FR-473.

- **AC-122-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-470, então o sistema deverá cumprir: Permitir consultar os dados da viagem previamente carregados, mesmo sem internet.
- **AC-122-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-471, então o sistema deverá cumprir: Permitir registrar presenças e ausências durante a falta de conexão.
- **AC-122-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-472, então o sistema deverá cumprir: Armazenar temporariamente os registros realizados offline.
- **AC-122-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-473, então o sistema deverá cumprir: Sincronizar os registros pendentes quando a conexão retornar.
- **AC-122-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-123 — Informar ao motorista quando houver registros aguardando sincronização

- **Feature / Epic:** FEAT-123 / EPIC-017.
- **FR vinculados:** FR-474, FR-475, FR-476, FR-477.

- **AC-123-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-474, então o sistema deverá cumprir: Informar ao motorista quando houver registros aguardando sincronização.
- **AC-123-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-475, então o sistema deverá cumprir: Indicar a Tia Cláudia e às famílias autorizadas quando a localização estiver desatualizada.
- **AC-123-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-476, então o sistema deverá cumprir: Permitir que o motorista responsável registre e corrija a presença dos alunos durante a viagem.
- **AC-123-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-477, então o sistema deverá cumprir: Permitir que Tia Cláudia realize correções administrativas excepcionais.
- **AC-123-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-124 — conflitos entre registros offline e alterações já sincronizadas

- **Feature / Epic:** FEAT-124 / EPIC-017.
- **FR vinculados:** FR-478, FR-479, FR-480, FR-481.

- **AC-124-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-478, então o sistema deverá cumprir: Identificar conflitos entre registros offline e alterações já sincronizadas.
- **AC-124-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-479, então o sistema deverá cumprir: Priorizar a correção administrativa de Tia Cláudia quando houver conflito.
- **AC-124-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-480, então o sistema deverá cumprir: Preservar os registros conflitantes no histórico, identificando autores e horários.
- **AC-124-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-481, então o sistema deverá cumprir: Identificar quando a van passar pelo ponto de embarque previsto.
- **AC-124-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-125 — Manter o aluno com presença não confirmada enquanto não houver registro efetivo de embarque

- **Feature / Epic:** FEAT-125 / EPIC-017.
- **FR vinculados:** FR-482, FR-483, FR-484, FR-485.

- **AC-125-01** — Dado um evento de GPS associado ao ponto do aluno, quando uma indicação automática for criada, então a lista deverá distinguir a origem GPS de uma confirmação humana e permitir correção operacional.
- **AC-125-02** — Dadas presenças com indicação GPS ainda não verificadas ou com pendências, quando o motorista abrir a lista, então o sistema deverá distinguir o tipo de registro e exibir pendências existentes.
- **AC-125-03** — Dada uma indicação GPS incompatível com a realidade, quando o motorista confirmar a presença efetiva ou registrar não embarcou, então o registro deverá ser corrigido e manter o histórico do evento.
- **AC-125-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-485, então o sistema deverá cumprir: Verificar se existem presenças não confirmadas ao encerrar uma viagem.
- **AC-125-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-126 — Exibir um aviso ao motorista com as pendências identificadas

- **Feature / Epic:** FEAT-126 / EPIC-017.
- **FR vinculados:** FR-486, FR-487, FR-488, FR-489.

- **AC-126-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-486, então o sistema deverá cumprir: Exibir um aviso ao motorista com as pendências identificadas.
- **AC-126-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-487, então o sistema deverá cumprir: Permitir que o motorista encerre a viagem mesmo com pendências.
- **AC-126-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-488, então o sistema deverá cumprir: Manter os registros pendentes disponíveis para correção posterior.
- **AC-126-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-489, então o sistema deverá cumprir: Registrar o encerramento da viagem e as pendências existentes naquele momento.
- **AC-126-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-127 — que o motorista consulte o histórico das viagens sob sua responsabilidade

- **Feature / Epic:** FEAT-127 / EPIC-017.
- **FR vinculados:** FR-490, FR-491, FR-492, FR-493.

- **AC-127-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-490, então o sistema deverá cumprir: Permitir que o motorista consulte o histórico das viagens sob sua responsabilidade.
- **AC-127-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-491, então o sistema deverá cumprir: Permitir corrigir registros de presença dessas viagens sem limite de prazo.
- **AC-127-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-492, então o sistema deverá cumprir: Registrar o valor anterior, o novo valor, o responsável e a data da correção.
- **AC-127-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-493, então o sistema deverá cumprir: Manter disponíveis os registros originais e o histórico de correções.
- **AC-127-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-128 — correções de presença após o encerramento da viagem sem exigir justificativa

- **Feature / Epic:** FEAT-128 / EPIC-017.
- **FR vinculados:** FR-494, FR-495, FR-496, FR-497.

- **AC-128-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-494, então o sistema deverá cumprir: Permitir correções de presença após o encerramento da viagem sem exigir justificativa.
- **AC-128-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-495, então o sistema deverá cumprir: Registrar automaticamente o responsável, a data e o horário de cada alteração.
- **AC-128-03** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-496, então o sistema deverá cumprir: Preservar o valor anterior e o novo valor do registro de presença.
- **AC-128-04** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-497, então o sistema deverá cumprir: Atualizar o registro de presença após uma correção autorizada.
- **AC-128-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## US-129 — Preservar o histórico completo da alteração

- **Feature / Epic:** FEAT-129 / EPIC-017.
- **FR vinculados:** FR-498, FR-499.

- **AC-129-01** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-498, então o sistema deverá cumprir: Preservar o histórico completo da alteração.
- **AC-129-02** — Dado um usuário com permissão adequada e as pré-condições do processo atendidas, quando solicitar a operação referente ao FR-499, então o sistema deverá cumprir: Disponibilizar a informação corrigida nas consultas de presença, sem gerar notificações automáticas.
- **AC-129-E** — Quando a ação for cancelada ou não puder ser concluída, não deverá ser apresentada como concluída; o resultado e a necessidade de correção devem ser comunicados ao usuário. [Critério transversal proposto; validar exceções.]

## Nota de validação

Critérios `AC-xxx-E` descrevem exceção transversal original e **não substituem** cenários negativos próprios de cada fluxo. Critérios com a forma "quando solicitar a operação referente ao FR, então deverá cumprir o FR" repetem o requisito sem teste verificável suficiente; continuam identificados, porém necessitam condições específicas e evidências observáveis antes de servir como aceite de execução. Não há concessão de aprovação técnica por inferência.
