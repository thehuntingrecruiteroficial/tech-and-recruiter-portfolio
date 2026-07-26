const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const fields = ["experience", "stack", "business", "communication"];

fields.forEach((field) => {
  const input = document.querySelector(`#${field}`);
  const output = document.querySelector(`#${field}Value`);

  input.addEventListener("input", () => {
    output.value = input.value;
  });
});

const form = document.querySelector("#fitForm");
const scoreElement = document.querySelector("#score");
const recommendationElement = document.querySelector("#recommendation");
const progressBar = document.querySelector("#progressBar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const experience = Number(document.querySelector("#experience").value);
  const stack = Number(document.querySelector("#stack").value);
  const business = Number(document.querySelector("#business").value);
  const communication = Number(document.querySelector("#communication").value);

  const score =
    experience * 0.3 +
    stack * 0.3 +
    business * 0.25 +
    communication * 0.15;

  let recommendation = "Não seguir";

  if (score >= 8.5) {
    recommendation = "Seguir";
  } else if (score >= 7) {
    recommendation = "Seguir com ressalvas";
  }

  scoreElement.textContent = score.toFixed(1);
  recommendationElement.textContent = recommendation;
  progressBar.style.width = `${score * 10}%`;
});

document.querySelector("#year").textContent = new Date().getFullYear();
