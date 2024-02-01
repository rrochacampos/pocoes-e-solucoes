const potions_url = "https://merigold-potions.herokuapp.com/potions";

fetch(potions_url, { method: "GET" })
  .then(function (resposta) {
    return resposta.json();
  })
  .then(function (dados) {
    pocoesRecuperadas(dados.content);
  });

function pocoesRecuperadas(content) {
  for (let pocao of content) {
    let divPocao = document.createElement("div");
    divPocao.className = "col-lg-4 mt-3 p-2 div-pocao";

    let containerEl = document.querySelector("#pocoes");
    containerEl.appendChild(divPocao);

    let nomePocao = document.createElement("h3");
    nomePocao.textContent = pocao.name;
    divPocao.appendChild(nomePocao);

    let descricao = document.createElement("p");
    descricao.className = "text-justify";
    descricao.textContent = pocao.description;
    divPocao.appendChild(descricao);

    let fotoPocao = document.createElement("img");
    fotoPocao.src = pocao.img;
    fotoPocao.className = "img-recuperada ";
    divPocao.appendChild(fotoPocao);
  }
}
