function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "b0o0f604484c421bt63fad88c200d0d5";
  let context =
    "you are romantic poems expert and love to write short poems,your missionn is to write a four line poem, do not include the title of the poem in basic HTML.make sure to follow the user instructions Sign the poem with 'Neilwe' at the end of the poem in  <em>";
  let prompt = `User instruction : Generate a poem about ${instructionInput.value} `;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
