// TODO: Log the input from the form

const form = document.querySelector("form");

const button = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target.elements[0].value);
  console.log(event.target.elements[1].value);
});
