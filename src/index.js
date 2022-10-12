import Form from "./components/Form/Form";
import Header from "./components/Header";

const root = document.getElementById("root");

const App = () => {
  const state = {
    title: "My Form",
    fields: ["email", "password"],
    button: {
      type: "submit",
      txt: "Submit",
    },
  };

  return `
    ${Header(state)}
    ${Form(state)}
  `;
};

function render() {
  root.innerHTML = App();
}

render();
