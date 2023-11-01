const buttons = document.querySelectorAll(".button");

const characters = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
  // ouvinte de evento de clique a cada botão
  button.addEventListener("click", () => {
    // resetar a seleção
    resetSelection();

    button.classList.add("selected");

    // encontra o personagem correspondente usando o índice do botão e adiciona a classe "selected" a esse personagem
    characters[index].classList.add("selected");
  });
});

// função para resetar a seleção
function resetSelection() {
  // remove a classe "selected" de todos os botões
  buttons.forEach((button) => button.classList.remove("selected"));

  // remove a classe "selected" de todos os personagens
  characters.forEach((character) => character.classList.remove("selected"));
}
