const form = document.querySelector("form");

const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target.elements[0].value);
  console.log(event.target.elements[1].value);
});

inputs[0].addEventListener("blur", (event) => {
  const input = event.target;

  if (!input.value.includes("@")) {
    input.classList.add("border-rose-500");
  }
});

inputs[0].addEventListener("focus", (event) => {
  const input = event.target;

  input.classList.remove("border-rose-500");
});

inputs[1].addEventListener("blur", (event) => {
  const input = event.target;

  if (input.value.length < 6) {
    input.classList.add("border-rose-500");
  }
});
