import Form from "./components/Form/Form";
import Header from "./components/Header";

const root = document.getElementById("root");

// App is a function with no parameters that includes the input data and calls to functions to produce the desired html to insert using the .innerHTML method

// There is usually an App component which serves as a top level component
const App = () => {
  // This is the component that will be rendered
  // REACT is a state management system
  // State represents all the moving parts of the application.  State is an object that contains all the data the application needs.  State will be updated by user input or data from the server.
  const state = {
    title: "My Form",
    fields: ["email", "password"],
    button: {
      type: "submit",
      txt: "Submit",
    },
  };

  // We can pass state from a parent component to a child component
  // State can be passed as props
  return `
    ${Header(state)}
    ${Form(state)}
  `;
};

// Render the App component to the DOM
function render() {
  root.innerHTML = App();
}

render();
