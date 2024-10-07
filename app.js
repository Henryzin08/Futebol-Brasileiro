function pesquisar() {
     // Selecionamos a seção HTML com o ID "resultados-pesquisa" e armazenamos em uma variável. 
  // Essa seção será usada para exibir os resultados da pesquisa.
  let section = document.getElementById("resultados-pesquisa"); 

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value 

    // se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou clube</p>" 
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()   

  // Criamos uma string vazia para armazenar os resultados da pesquisa.
  // Conforme formos iterando pelos dados, vamos adicionar o HTML dos resultados nessa string.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  
  // Iteramos sobre cada dado dentro da lista de dados.
  // A variável 'dado' representará cada objeto dentro da lista 'dados'.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.
      includes(campoPesquisa) || tags.includes
      (campoPesquisa)) { 
        // cria um novo elemento
        resultados += `<div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="Descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>`;   
      }           
    // Para cada dado, criamos um novo elemento HTML <div> com a classe "item-resultado".
    // Dentro desse div, adicionamos um título (<h2>), uma descrição (<p>) e um link (<a>).
    // Os dados do título, descrição e link são obtidos do objeto 'dado'.
 }

 if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
   }
  
  // Após criarmos o HTML com todos os resultados, atualizamos o conteúdo da seção
  // "resultados-pesquisa" com o valor da variável 'resultados'.
  section.innerHTML = resultados;
}  