import Button from "./Button";
import Input from "./Input";

// returns the html for a form...the map method takes the fields property and creates an individual input tag for each item in the fields array then the form calls the button function with arg button to create the button with in the form tag
// We map over the array of strings and return an Input component for each one
export default ({ fields, button }) => `
  <form class="mx-auto mt-2 max-w-xs">
    ${fields.map((input) => Input({ label: input })).join("")}
    ${Button(button)}
  </form>
`;
