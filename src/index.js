function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  poemElement.innerHTML = "  Within you are everything";
}
let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
