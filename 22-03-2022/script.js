const welcomeHere = () => console.log("Ciao Ragazzi!");

// console.log("Primo");

// setTimeout(welcomeHere, 3000);

// console.log("Secondo");

// setTimeout(() => console.log("Prima dell'altro"), 500);

const btnEl = document.querySelector("button");

// const welcomeInterval = setInterval(welcomeHere, 5000);
// const welcomeIntervalTwo = setInterval(welcomeHere, 4000);

// console.log(welcomeInterval);
// console.log(welcomeIntervalTwo);

// btnEl.addEventListener("click", () => clearInterval(welcomeInterval));

// for (let i = 0; i <= 9; i++) {                 // Very very bad!!
//   setTimeout(() => console.log("Ciao!"), 1000);
// }

// const intervalSentinel = 0

// const tenTimesInterval = setInterval(() => {
//   intervalSentinel++;

//   console.log('Ciao!')
// }, 5000)

// INIZIO CODICE DOM e FETCH
const createCard = (title, desc, imgUrl, price) => {
  const divEl = document.createElement("div");
  const h3El = document.createElement("h3");
  const parDescEl = document.createElement("p");
  const imgEl = document.createElement("img");
  const parPriceEl = document.createElement("p");

  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", "img cosi");
  h3El.textContent = title;
  parDescEl.textContent = desc;
  parPriceEl.textContent = price;

  divEl.append(h3El, parDescEl, imgEl, parPriceEl);
  document.body.appendChild(divEl);
};

let dataArray = [];

// Chhiamata FETCH!
fetch("https://fakestoreapi.com/products/") // Funzione che ritorna una promise!
  .then((res) => res.json())
  .then((data) =>
    // data.map((product) =>
    data.map(
      ({ title, description, image, price }) => {
        createCard(title, description, image, price);

        localStorage.setItem("data", JSON.stringify(data));
      }
      // createCard(product.title, product.description, product.image, product.price)
    )
  );
