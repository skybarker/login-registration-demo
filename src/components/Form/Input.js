// returns the html for an input tag when passed the label arg
export default ({ label }) => `
  <div class="mt-4 flex flex-col">
    <label for="${label}">${label}</label>
    <input type="${label}" id="${label}" placeholder="${label}" />
  </div>
`;
