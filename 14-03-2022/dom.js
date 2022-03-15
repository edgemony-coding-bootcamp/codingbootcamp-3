console.log("file caricato!");

// document.querySelector -> seleziona un elemento nella pagina utilizzando
// la sintassi dei selettori CSS

// camelCase
// kebab-case

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", () => {
    console.log("mi hai cliccato");

    const title = document.querySelector("h1");

    // title.style.color = "red";
    title.classList.toggle("change");

    // Il controllo che ".toggle()" esegue per noi
    // if(title.classList.contains('change')){
    //   title.classList.remove("change");
    // } else {
    //   title.classList.add("change");
    // }

    // title.innerHTML = "Non mi sento più quello di prima";
    // title.id = "newID";
  });
});
