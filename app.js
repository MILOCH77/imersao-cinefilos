function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi digitado</p>"
        return
    }

    // se campoPesquisa for uma string com espaço
    if (campoPesquisa == " ") {
        section.innerHTML = "<p>Somente espaço foi digitado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (filme) no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes cmpoPesquisa
    if (titulo.includes(campoPesquisa) || (descricao.includes(campoPesquisa)) || (tags.includes(campoPesquisa))) {
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrisao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }
    }

    if (!resultados){
        resultados = "<p>Nenhum resultado encontrado!</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}