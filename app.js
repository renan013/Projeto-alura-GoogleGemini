function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" e o armazena na variável section.
    // Esse elemento será usado para exibir os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Para realizar uma pesquisa é necessário inserir algum texto no campo de pesquisa</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Limpa o conteúdo anterior do elemento section para evitar duplicação de resultados.
    //section.innerHTML = "";

    // Inicializa uma string vazia para armazenar os resultados da pesquisa,
    // que serão construídos dentro do loop.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) do array de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
           // Constrói uma string de HTML para cada dado, formatando o título, descrição e link.
           // A string é concatenada à variável resultados.
           resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Experimente</a>
            </div>
    `;
        }
    }
    if (!resultados){
        resultados = "<p>Nenhum dado corresponde a sua pesquisa!</p>"
    }

    // Atribui a string completa de resultados ao conteúdo HTML do elemento section,
    // exibindo os resultados na página.
    section.innerHTML = resultados;
}