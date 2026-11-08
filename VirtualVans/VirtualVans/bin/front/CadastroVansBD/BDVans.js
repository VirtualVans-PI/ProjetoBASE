
let bd;
let sqlInserir;
let sqlConsultar;

const pastaBanco = new URL(".", document.currentScript.src);

async function carregarSQL(nomeArquivo) {

    const caminho = new URL(nomeArquivo, pastaBanco);
    const resposta = await fetch(caminho);

    if (!resposta.ok) {
        throw new Error( `Não foi possível carregar ${nomeArquivo}: ${resposta.status}`);
    }

    return await resposta.text();
}
function salvarBanco() {

    const bytes = bd.export();
    const dados = Array.from(bytes);
    localStorage.setItem(
        "virtualvans_db",
        JSON.stringify(dados)
    );

    console.log("Banco salvo!");
}

function recuperarBanco() {

    const dados = localStorage.getItem("virtualvans_db");
    if (dados === null) {
        return null;
    }

    //converte para bytes os dados
    return new Uint8Array(JSON.parse(dados));
}
async function iniciarBanco() {

    try {

        const SQL = await initSqlJs({
            locateFile: arquivo =>
                `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${arquivo}`
        });

        const bancoSalvo = recuperarBanco();

        if (bancoSalvo) {

            bd = new SQL.Database(bancoSalvo);

            console.log("Banco recuperado!");

        } else 
            {
            bd = new SQL.Database();
            const ddl = await carregarSQL("DDL.sql");

            bd.run(ddl);
            salvarBanco();

            console.log("Banco criado!");
        }
        sqlInserir = await carregarSQL("DML.sql");
        sqlConsultar = await carregarSQL("DQL.sql");

        listarVans();

        console.log("SQLite iniciado com sucesso!");

    } 
    catch (erro){

        console.error("Erro ao iniciar banco:", erro);
        alert("Erro ao iniciar banco: " + erro.message);
    }
}



//CONSULTAR E MOSTRAR AS VANS

function listarVans() {

    if (!bd || !sqlConsultar) return;
    const tabela = document.getElementById("lista-vans");

    // Caso a página não tenha a tabela
    if (!tabela) return;
    const resultado = bd.exec(sqlConsultar);
    tabela.replaceChildren();

    if (resultado.length === 0) {
        console.log("Nenhuma van cadastrada.");
        return;
    }

    const colunas = resultado[0].columns;
    const linhas = resultado[0].values;

    for (const valores of linhas) {

        const van = Object.fromEntries(
            colunas.map((coluna, i) => [coluna, valores[i]])
        );

        const tr = document.createElement("tr");

        const campos = [
            "identificacao",
            "placa",
            "modelo",
            "motorista",
            "lugares",
            "contato"
        ];

        for (const campo of campos) {

            const td = document.createElement("td");
            td.textContent = van[campo] ?? "";
            tr.appendChild(td);
        }

        tabela.appendChild(tr);
    }
}


//Cadastro de novas vans

const formularioVan = document.getElementById("form-van");

if (formularioVan) {

    formularioVan.addEventListener("submit", function(evento) {

        evento.preventDefault();

        // VERIFICAÇÃO DE INICIALIZAÇÃO DO BANCO (não é o banco master)
        if (!bd || !sqlInserir || !sqlConsultar) {
            alert("Banco ainda não está pronto!");
            return;
        }

        const identificacao =
            document.getElementById("name").value.trim();

        const placa =
            document.getElementById("plate").value.trim().toUpperCase();

        const modelo =
            document.getElementById("model").value.trim();

        const motorista =
            document.getElementById("driver").value.trim();

        const textoLugares =
            document.getElementById("capacity").value;

        const lugares = Number(textoLugares);

        const contato =
            document.getElementById("phone").value.trim();

        // Valida os valores
        if (!identificacao ||!placa ||!modelo ||!motorista ||!contato ||textoLugares === "" 
            ||!Number.isInteger(lugares) ||lugares <= 0) {

            alert("Preencha todos os campos corretamente!");
            return;
        }

        try {

            bd.run(sqlInserir, [
                identificacao,
                placa,
                modelo,
                motorista,
                lugares,
                contato
            ]);

            // Salva os dados localmente no computador
            salvarBanco();
            listarVans();
            evento.target.reset();


        } catch (erro) {

            console.error("Erro no cadastro:", erro);
            alert("Erro ao cadastrar: " + erro.message);
        }

    });
}


iniciarBanco();
