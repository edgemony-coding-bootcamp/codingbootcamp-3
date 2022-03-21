const q = (selector) => document.querySelector(selector);

const ul = q("ul");
const search = q("#search");
const name = q("#name");
const universe = q("#universe");
const add = q("button");

const people = [
  "Luke Skywalker - Star Wars",
  "Jack Burton - Grosso guaio a Chinatown",
  "Jhonny Silverhand - Cyberpunk 2077",
  "Bilbo Baggins - Il signore degli anelli",
  "Rick Sanchez - Rick & Morty",
  "Master Chief - Halo",
  "Eleven - Stranger Things",
];

const render = (value = "") => {
  const results = people.filter((character) =>
    character.toLowerCase().includes(value.toLowerCase())
  );

  ul.innerHTML = results
    .map((character) => character.split(" - "))
    .map(
      (character) => `<li class="card">
          <span class="name">${character[0]}</span>
          <span class="universe">${character[1]}</span>
        </li>`
    )
    .join("");
};

add.addEventListener("click", () => {
  people.push(`${name.value} - ${universe.value}`);
  render();

  name.value = "";
  universe.value = "";
});

search.addEventListener("keyup", () => render(search.value));

render();
