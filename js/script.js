//Menu
window.addEventListener("scroll", function () {
  var menu = document.querySelector(".menu");
  var menuPosition = menu.offsetTop;

  if (window.pageYOffset >= menuPosition) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
});

//Adicionando destaque ao menu ativo

//Selecionando o tamanho do item
//Selecionando todos os botões
const tamanhoButton = document.querySelectorAll(".tamanho button");

function toggleActiveClass(event) {
  //Remove a classe 'ativo' de todos os botões
  tamanhoButton.forEach((item) => {
    item.classList.remove("ativo");
  });

  //Adiciona a classe 'ativo' somente ao botão clicado
  event.target.classList.add("ativo");
}

//Adiciona um ouvinte de evento de clique a cada botão, que acionará a função toggleActiveClass() quando o botão for clicado
tamanhoButton.forEach((item) => {
  item.addEventListener("click", toggleActiveClass);
});

/**
 *
 *
 *
 */

//Selecionando a quantidade de itens
//Primeiro seleciona o input a ser alterado
const quantidadeItem = document.querySelector(
  ".quantidade input[type='number']"
);

//Seleciona o botão que irá somar e subtrair
const botaoSoma = document.querySelector(".quantidade .quantidade-mais");
const botaoSub = document.querySelector(".quantidade .quantidade-menos");
// Define a função que será executada quando o botão for clicado
function incrementValue() {
  // Obtém o valor atual do input e adiciona um
  let value = parseInt(quantidadeItem.value);
  value++;

  // Atualiza o valor do input com o novo valor
  quantidadeItem.value = value;
}

function decreaseValue() {
  if (quantidadeItem.value >= 2) {
    // Obtém o valor atual do input e adiciona um
    let value = parseInt(quantidadeItem.value);
    value--;

    // Atualiza o valor do input com o novo valor
    quantidadeItem.value = value;

    //Ativa o botão
    botaoSub.disable = false;
  }
}

//Define a propriedade disabled do botão como true por padrão
botaoSub.disable = true;

// Adiciona um ouvinte de evento de clique ao botão, que acionará a função incrementValue() quando o botão for clicado
botaoSoma.addEventListener("click", incrementValue);
botaoSub.addEventListener("click", decreaseValue);

/**
 *
 *
 *
 */

//Mudando a imagem ativa
//Selecionando a galeria e em destaque
const galeriaImagens = document.querySelectorAll(".galeria img");
const imagemDestaque = document.querySelector(".imagem-ativa");

// Adiciona um evento de clique em cada imagem da galeria
galeriaImagens.forEach(function (imagem) {
  imagem.addEventListener("click", function (event) {
    // Atualiza a imagem em destaque com o caminho da imagem da galeria correspondente
    imagemDestaque.src = event.target.src;
  });
});
