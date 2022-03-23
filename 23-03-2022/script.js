import {
  createCard,
  getAPIdata,
  formatMaxText,
  formatMinText,
} from "./utils.js";

// Una chiamata un po complessa...

// const people = [];

// for (let i = 1; i <= 10; i++) {
//   fetch(`https://swapi.dev/api/people/${i}`)
//     .then((res) => res.json())
//     .then((peopleData) => {
//       fetch(`https://swapi.dev/api/planets/${i}`)
//         .then((res) => res.json())
//         .then((planetData) => {
//           people.push({
//             name: peopleData.name,
//             planet: planetData.name,
//           });

//           console.log(people);
//         });
//     });
// }

// async function getPeopleAPI() {
//   const peopleData = await fetch(`https://swapi.dev/api/people/1`)
//     .then((res) => res.json())
//     .then((peopleData) => {
//       console.log(peopleData);
//     });

//   return peopleData;
// }

// Erroneo!
// async function getPeopleAPI() {
//   await fetch(`https://swapi.dev/api/people/1`)
//     .then((res) => res.json())
//     .then((peopleData) => peopleData);
// }

// async function getPeopleAPI() {
//   const res = await fetch(`https://swapi.dev/api/people/1`);
//   const data = await res.json();

//   return data;
// }

// async function getPlanetAPI(planetNum = "") {
//   const res = await fetch(`https://swapi.dev/api/planets/${planetNum}`);
//   const data = await res.json();

//   return data;
// }

// getPlanetAPI(1).then((data) => console.log(data));

getAPIdata("https://fakestoreapi.com/products").then((data) => {
  data.map((product) => {
    createCard(
      product.title,
      formatMinText(product.description),
      product.image,
      product.price + " $"
    );

    const cardEls = document.querySelectorAll(".card");

    cardEls.forEach((card) => {
      card.addEventListener(
        "click",
        () =>
          (card.innerHTML = `<p style="padding: 20px">${product.description}</p>`)
      );
    });
  });
});

// const showDescriptionCard = () => {};
