import { createCard, createModal } from "./utils.js";

const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";

const getMoviesData = async () => {
  const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  } else {
    // Redirect
    // window.location.href = "/";

    const h1El = document.createElement("h1");
    h1El.textContent = "404 pagina non trovata";

    document.body.append(h1El);

    throw new Error("La pagina non è stata trovata");
  }
};

// Elementi relativi alla modale
const overlayEl = document.querySelector(".overlay");

// Elementi relativi al form
const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const submitInputEl = document.getElementById("submit");

getMoviesData()
  .then((resultAPI) => {
    resultAPI.map((movie) =>
      createCard(
        movie.title,
        formatMinText(movie.description),
        movie.poster,
        movie.year
      )
    );
  })
  .then(() => {
    const cardsEl = document.querySelectorAll(".card");

    cardsEl.forEach((movie) => {
      const { children } = movie;

      movie.addEventListener("click", () => {
        createModal(
          children[0].src,
          children[1].textContent,
          children[2].textContent,
          children[3].textContent
        );

        const modalEl = document.querySelector(".modalWrapper");
        modalEl.classList.toggle("showModal");
        overlayEl.classList.toggle("hideOverlay");
      });
    });
  });

submitInputEl.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("https://edgemony-backend.herokuapp.com/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: descInputEl.value,
      genres: ["animation"],
      poster: posterInputEl.value,
      title: titleInputEl.value,
      year: yearInputEl.value,
    }),
  }).then(() => location.reload());
});

overlayEl.addEventListener("click", () => {
  const modalEl = document.querySelector(".modalWrapper");

  document.body.removeChild(modalEl);
  overlayEl.classList.toggle("hideOverlay");
});
