let numbers = [2, 4, 6, 8, 10];
let fruits = ["apple", "pear", "kiwi", "orange", "banane"];

// console.log(numbers[numbers.length - 2]);
// console.log(fruits);

fruits.push("ananas"); // aggiunge ananas alla coda dell'array
fruits.pop(); // rimuove ananas alla coda dell'array

fruits.unshift("mango"); // aggiunge mango alla testa dell'array
fruits.shift(); // rimuove apple dalla coda dell'array'

fruits.indexOf("melograno"); // cerca un elemento all'interno dell'array, se non esiste -1

// fruits.splice(
//   indice_di_inizio,
//   numero_elementi_rimuovere,
//   elementi_da_aggiungere
// );  // modifica l'array

// fruits.slice(valore_inizio, valore_finale)  // non modifica array

// Concatenare gli array
// let otherFruits = ['papaya', 'mango']
// fruits.concat(otherFruits)

// fruits.join(identificatore); // trasforma da array a stringa
// fruits.split(identificatore); // trasforma da stringa ad array

// constatare se un array è un array (non si usa typeof)
// Array.isArray(array_in_questione)

// Cicli, processione degli array
// for (let index = 0; index <= fruits.length - 1; index++) {
//   console.log(fruits[index]);
// }

// start = start + 1
// start += 1
// start ++

// FOR IN
// for (index in fruits) {
//   console.log(index);
// }

// FOR OF
// for (fruit of fruits) {
//   console.log(fruit);
// }

let fruitsIta = ["mela", "pera", "kiwi", "arancia", "banana", "ananas"];

// for (fruit in fruits) {
//   for (fruitIta of fruitsIta) {
//     console.log(fruitsIta[fruit], ":", fruits[fruit]);
//   }
// }

for (let index = 0; index <= fruitsIta.length - 1; index++) {
  if (fruits[index] === undefined) {
    fruits[index] = "qualcosa";
    break; // interrompe istantaneamente il ciclo
    // continue;
    // console.log("il frutto è mancante");
  }
  console.log(fruitsIta[index], ":", fruits[index]);
}

console.log("array finale", fruits);
