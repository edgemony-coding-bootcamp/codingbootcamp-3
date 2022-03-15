// Definisco una funzione
// Posso definire degli argomenti, separandoli con una virgola

// Invoco (eseguo) la funzione definita in precedenza
// AddVAT();
console.log(AddVAT(200)); // console.log(244)
console.log(AddVAT(142));

// Wrapper per document.querySelector
const q = (selector) => document.querySelector(selector);

q(".card input").addEventListener("change", () => {
  const value = q(".card input").value;
  const num = parseInt(value);
  // const num = parseInt(q(".card input").value);
  // console.log("cambio valore", value, num);
  q(".total").innerHTML = AddVAT(123) * num;
});
