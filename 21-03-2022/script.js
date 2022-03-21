const createLiEl = (listItem, parent) => {
  const liEl = document.createElement("li");

  liEl.textContent = listItem.split(" - ")[0];
  return parent.appendChild(liEl);
};

const deleteLiElContent = (element) => {
  element.addEventListener("click", () => {
    // element.textContent = "";

    // ulEl.removeChild(element);

    element.classList.toggle("li-text");
  });
};

const ulEl = document.querySelector("ul");

// const people = [
//   "Luke Skywalker - Star Wars",
//   "Jack Burton - Grosso guaio a Chinatown",
//   "Jhonny Silverhand - Cyberpunk 2077",
//   "Bilbo Baggins - Il signore degli anelli",
//   "Rick Sanchez - Rick & Morty",
//   "Master Chief - Halo",
//   "Eleven - Stranger Things",
// ];

// localStorage.setItem("people", JSON.stringify({ people }));

try {
  people.map((person) => createLiEl(person, ulEl));
} catch (error) {
  // const warningUser = document.createElement("h1");
  // warningUser.textContent = "Mi dispiace ma la lista manca...";
  // document.body.appendChild(warningUser);

  const localPeople = JSON.parse(localStorage.getItem("people")).people;
  localPeople.map((person) => createLiEl(person, ulEl));
} finally {
  console.log("Finally!");
}

const liEls = document.querySelectorAll("li");

liEls.forEach((liEl) => deleteLiElContent(liEl));
