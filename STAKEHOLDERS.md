# Stakeholders e atores

> App Glauco · Discovery · Consolidação documental em 28/10/2026 · Aprovação dos itens documentados anteriormente em revisão, por manifestação do responsável pelo projeto.

Os IDs abaixo identificam papéis **a partir de evidências**, sem criar novas permissões. São elementos de indexação deste pacote; não substituem IDs históricos.

| Stakeholder | Ator | Papel / interesse documentado | Restrições documentadas |
|---|---|---|---|
| STK-001 — Tia Cláudia, proprietária | ACT-001 — Administradora | Responsável pelo negócio, cadastros, permissões, finanças, rotas, suspensão/reativação | Decide alterações administrativas; aprova endereços que afetem rotas |
| STK-002 — Pais/responsáveis | ACT-002 — Conta familiar | Informar ausências, consultar mensalidades e viagens dos próprios alunos, indicar recebedores | Somente vínculos próprios; conta pode ser compartilhada por pai e mãe |
| STK-003 — Motoristas | ACT-003 — Motorista | Conduzir viagens atribuídas, registrar presença, operar alertas e localização autorizada | Sem acesso financeiro ou administrativo; apenas suas viagens |
| STK-004 — Ajudante/monitor | ACT-004 — Assistente | Apoiar listas, registros de presença e avisos operacionais | Sem pagamentos, contratos, suspensão ou alteração manual de rota |
| STK-005 — Alunos transportados | — | Beneficiários do transporte e titulares de dados, inclusive dados sensíveis | Acesso autônomo ao GPS não está autorizado pelo FR-022 revisado |
| STK-006 — Equipe de projeto / grupo acadêmico | — | Levantamento, análise e documentação do projeto | Não substitui autoridade decisória do produto |

## Ator de integração identificado

**ACT-005 — Robô do WhatsApp:** canal automatizado para solicitação/correção de ausência de alunos vinculados; não é uma pessoa nem um papel com poderes administrativos. O serviço de pagamentos e o Google Forms são integrações previstas, não atores humanos.

## Limites de identidade e responsabilização

- Cada aluno possui responsável principal identificado; uma conta familiar pode conter diversos alunos (CONS-004, BR-050/BR-051).
- Ações realizadas na conta familiar compartilhada identificam **a conta**, não obrigatoriamente a pessoa física que executou a ação (DEC-052).
- A administradora pode corrigir presença excepcionalmente; o registro administrativo prevalece em conflito com registro offline, preservando as duas versões (DEC-162).
- Permissões operacionais detalhadas por ocorrência e substituição temporária dependem das decisões já registradas e das questões abertas de exceção.
