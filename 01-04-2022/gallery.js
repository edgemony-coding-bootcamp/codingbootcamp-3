// Endpoint REST
const URL = "https://edgemony-backend.herokuapp.com/gallery";

// Utilities
const q = (selector) => document.querySelector(selector);
const qAll = (selector) => document.querySelectorAll(selector);

// Aggiorna i contenuti della modale e la visualizza
const showModal = (item) => {
  const img = q("#overlay figure img");
  img.src = item.url;
  img.alt = item.description;
  q("#overlay figure figcaption").innerHTML = item.description;

  q("#overlay").classList.add("show");
};

// Render nel DOM della galleria
const render = (data = []) => {
  const items = data.map(
    (item, index) => `
    <li>
      <figure id="${index}">
        <img src="${item.url}" alt="${item.description}" />
        <figcaption>${item.description}</figcaption>
      </figure>
    </li>
  `
  );

  q("#gallery").innerHTML = items.join("");

  qAll("#gallery li figure").forEach((item, index) => {
    item.addEventListener("click", () => {
      const index = parseInt(item.id);
      // console.log(data[index]);

      showModal(data[index]);
    });
  });
};

// Fetch dei dati esterni
const getData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // console.log(response, data);
  render(data);
};

// Al caricamento completo del DOM
document.addEventListener("DOMContentLoaded", () => {
  // Carico i dati dall'endpoint
  getData();

  // Nascondo la modale al click su di essa
  q("#overlay").addEventListener("click", () => {
    q("#overlay").classList.remove("show");
  });
});
