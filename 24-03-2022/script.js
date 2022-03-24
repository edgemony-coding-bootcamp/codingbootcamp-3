import createCard from "./utils.js";

const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + " ...";

// const getMoviesData = async () => {
//   const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   console.log(res);

//   if (res.ok) {
//     // console.log("Ottimo, siamo in collegamento!");
//     const data = await res.json();
//     return data;
//   } else console.log("Collegamento non avvenuto... si prega di riprovare");
// };

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

getMoviesData().then((resultAPI) => {
  resultAPI.map((movie) =>
    createCard(
      movie.title,
      formatMinText(movie.description),
      movie.poster,
      movie.year
    )
  );
});

try {
  throw new Error("ERRORREERERE");
} catch (err) {
  console.log(err);
}

const rickEMorty = {
  description: "Wubba Lubba Dub Dub",
  genres: ["animation"],
  poster: "https://m.media-amazon.com/images/I/81LBzgzf0iL._AC_SY741_.jpg",
  title: "Rick & Morty",
  year: 2014,
};

// HTTP Method POST
// fetch("https://edgemony-backend.herokuapp.com/movies", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(rickEMorty),
// });

// HTTP Method DELETE
// fetch("https://edgemony-backend.herokuapp.com/movies/4", {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// FORM Aggiunta movie/poster
const titleInputEl = document.getElementById("title");
const descInputEl = document.getElementById("description");
const posterInputEl = document.getElementById("poster");
const yearInputEl = document.getElementById("year");
const submitInputEl = document.getElementById("submit");

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
  }).then((data) => {
    location.reload();

    // setTimeout(() => {
    //   location.reload();
    // }, 5000);
  });
});
