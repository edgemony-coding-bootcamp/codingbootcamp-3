function sum(numOne, numTwo) {
  console.log("La somma dei numeri è:", numOne + numTwo);
}

function welcomeMsg(string) {
  console.log(string);
}

function complexSum() {
  const firstNum = parseInt(prompt("Inserisci il primo numero"));
  const secondNum = parseInt(prompt("Inserisci il secondo numero"));

  return firstNum + secondNum;
}

function isLegalAged(age) {
  if (age >= 18) return true;

  return false;
}

function isLegalAged() {
  const age = parseInt(prompt("Inserisci la tua età"));

  return age >= 18 ? true : false;
}

// welcomeMsg("Ciao ragazzi");

// const myFirstSum = complexSum();
// console.log("il valore risultato della funzione:", myFirstSum);

// console.log(isLegalAged());

// OGGETTI
const myCar = {
  color: "grey",
  model: "seat",
  wheels: 4,
  type: "diesel",
  isRevisioned: true,
  startEngine: function () {
    console.log("La macchina è in moto");
  },
};

const invictaWatch = {
  title: "Invicta Speedway Orologio Uomo Quarzo, 39.5mm, Bianca, 9212",
  price: "105,00€",
  finalPrice: "69,00€",
  description:
    "L'Invicta 9212 ha una cassa in acciaio inossidabile da 395 millimetri con quadrante bianca",
  img: "https://m.media-amazon.com/images/I/81jPCpMJ4tL._AC_UY445_.jpg",
  colors: ["gold", "silver", "dark"],
  markets: {
    italian: {
      isAvailable: true,
    },
    english: {
      isAvailable: false,
    },
  },
  "something else": false,
};

const damyuan = {
  title: "Damyuan Scarpe da Running Corsa Uomo Ginnastica",
  price: "125,00€",
  finalPrice: "29,00€",
  description: "lorem ipsum dolor sit ame",
  img: "https://m.media-amazon.com/images/I/818fVVx+i4L._AC_UY500_.jpg",
  colors: ["red", "yellow", "green"],
  markets: {
    italian: {
      isAvailable: true,
    },
    english: {
      isAvailable: false,
    },
  },
  "something else": false,
};

const products = [invictaWatch, damyuan];

// oltre ...
const productTitle = document.querySelector(".title");
const productDescription = document.querySelector(".description");
const productImg = document.querySelector(".img");
const productPrice = document.querySelector(".price");

productTitle.textContent = products[0].title;
productDescription.textContent = products[0].description;
productImg.setAttribute("src", products[0].img);
productPrice.textContent = products[0].finalPrice;

console.log(invictaWatch);

for (key in invictaWatch) {
  if (typeof invictaWatch[key] !== "object")
    console.log(key + ":" + invictaWatch[key]);
}

// Anche gli arrays sono degli oggetti
// let fruits = ["apple", "kiwi", "orange", "mango"];

// da non fare, dimostrazione solo per didattica
// let fruits = {
//   0: "apple",
//   1: "kiwi",
//   2: "orange",
//   3: "mango",
// };
