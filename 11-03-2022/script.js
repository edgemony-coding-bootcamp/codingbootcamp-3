// var char = "C";

// let num = 5;

// const isTrue = true;

// let firstName = "Casi";

function sum() {
  let helloMsg = "Ciao a tutti!";
  var welcomeMsg = "Welcome guys";

  console.log(firstName);
  console.log(helloMsg);
}

if (true) {
  // true === true
  const age = 28; // variabile scope locale
  let firstName = "casi"; // variabile scope locale
  var surname = "cian"; // variabile scope GLOBALE

  // console.log(firstName);
  // console.log(age);
  // console.log(surname);
}

// console.log(surname);
// console.log(firstName);    // questo ritorna errore
// console.log(age);          // questo ritorna errore

// for (let x = 0; x <= 10; x += 2) {
//   // { ... } scope locale
//   console.log(x);
// }

// console.log(x);

// Primo ex.
const personList = [
  {
    nome: "Casi",
    cognome: "Cian",
    num: 2323242423,
  },
  {
    nome: "Pippo",
    cognome: "Bla",
    num: 11121212,
  },
  {
    nome: "Topolino",
    cognome: "Cian",
    num: 093934934,
  },
  {
    nome: "Matteo",
    cognome: "Cian",
    num: 66565643,
  },
  {
    nome: "Giada",
    cognome: "Cian",
    num: 122214,
  },
];

// Second ex.
function calculator() {
  console.warn(
    "Benvenuto. Per effettuare delle operazioni segui la seguente leggenda:"
  );
  console.log(
    "Per addizione: 0 - per sottrazione: 1 - per moltiplicazione: 2 - per divisione: 3"
  );
  const operation = parseInt(prompt("Inserire l'operazione desiderata:"));
  const firstNum = parseInt(prompt("Inserire il primo numero:"));
  const secondNum = parseInt(prompt("Inserire il secondo numero:"));

  switch (operation) {
    case 0:
      return firstNum + secondNum;
    case 1:
      return firstNum - secondNum;
    case 2:
      return firstNum * secondNum;
    case 3:
      return firstNum / secondNum;
    default:
      console.error("Attenzione! Operazione scelta non valida!");
  }
}

// const result = calculator();
// console.log("Il risultato dell'operazione è: ", result);

// Terzo ex.
function addContact() {
  const personObj = {
    nome: prompt("Inserisci il nome:"),
    cognome: prompt("Inserisci il cognome:"),
    tel: parseInt(prompt("Inserisci il numero di tel:")),
  };

  personList.push(personObj);
  console.log("La lista è stata aggiornata:");
  console.log(personList);
}

function delContact() {
  const index = parseInt(prompt("Inserisci l'indice"));
  personList.splice(index - 1, 1);
  console.log(personList);
}

function calculator() {
  const numOne = parseInt(prompt("Primo num"));
  const numTwo = parseInt(prompt("Secondo num"));

  // console.log(msgOperation)    // errore!
  function sum() {
    let msgOperation = "L'operazione scelta....";

    return msgOperation, numOne + numTwo; // funziona!
  }

  return sum();
}

// OLTRE!!!!
// function updateContact() {
//   const contactsListEl = document.querySelector(".contactsList");

//   for (index in personList) {
//     contactsListEl.children[index].textContent = personList[index].nome;
//   }
// }

function updateContact() {
  const contactsListEl = document.querySelector(".contactsList");
  contactsListEl.textContent = "";

  for (index in personList) {
    const contactEl = document.createElement("li");

    contactEl.textContent = personList[index].nome;

    contactsListEl.appendChild(contactEl);
  }
}
