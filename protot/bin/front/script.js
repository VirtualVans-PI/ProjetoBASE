const menu = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('#sidebar');

if (menu && sidebar) {
  menu.addEventListener('click', () => sidebar.classList.toggle('open'));
}

const busca = document.querySelector('#busca-alunos');
const periodo = document.querySelector('#filtro-periodo');
const tabela = document.querySelector('#tabela-alunos');

function filtrarAlunos() {
  if (!tabela) return;
  const texto = (busca?.value || '').toLocaleLowerCase('pt-BR');
  const turno = periodo?.value || '';

  tabela.querySelectorAll('tbody tr').forEach(linha => {
    const colunas = linha.querySelectorAll('td');
    const corresponde = linha.textContent.toLocaleLowerCase('pt-BR').includes(texto);
    const correspondeTurno = !turno || colunas[2]?.textContent.trim() === turno;
    linha.hidden = !(corresponde && correspondeTurno);
  });
}

busca?.addEventListener('input', filtrarAlunos);
periodo?.addEventListener('change', filtrarAlunos);

document.querySelectorAll('form').forEach(formulario => {

    if (formulario.id === "form-van") {
        return;
    }

    formulario.addEventListener('submit', evento => {
        evento.preventDefault();

        alert(
            'Tela demonstrativa: nenhuma informação será enviada ou armazenada.'
        );
    });

});
