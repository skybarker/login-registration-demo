import Button from "./Button";
import Input from "./Input";

export default ({ fields, button }) => `
  <form class="mx-auto mt-2 max-w-xs">
    ${fields.map((input) => Input({ label: input })).join("")}
    ${Button({ ...button })}
  </form>
`;
