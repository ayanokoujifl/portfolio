const typeNome = document.querySelector(".name span");
let nome = "Luís Gustavo Ferreira Leite";
nome = nome.split("");
window.onload = () => {
  nome.map((letter, i) => {
    setTimeout(() => {
      typeNome.innerHTML += letter;
    }, 100 * i);
  });
};

const contateMe = document.querySelector(".wrapper-links");
const links = document.querySelector(".links");

contateMe.addEventListener("mouseenter", () => {
  console.log("entrou no contate-me");
  contateMe.style.animationName = "holeOut";
  contateMe.style.animationDuration = "1.5s";
  contateMe.style.animationFillMode = "forwards";
  contateMe.style.animationIterationCount = "unset";
});
