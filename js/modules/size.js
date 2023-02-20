//Selecionando o tamanho do item
//Selecionando todos os botões
const tamanhoButton = document.querySelectorAll(".tamanho button");

export function toggleActiveClass(event) {
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
