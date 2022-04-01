const createCard = (title, desc, imgUrl, price) => {
  const divEl = document.createElement("div");
  const h3El = document.createElement("h3");
  const parDescEl = document.createElement("p");
  const imgEl = document.createElement("img");
  const parPriceEl = document.createElement("p");

  divEl.classList.add("card");
  parPriceEl.classList.add("price");
  parDescEl.classList.add("description");

  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", "img cosi");
  h3El.textContent = title;
  parDescEl.textContent = desc;
  parPriceEl.textContent = price;

  divEl.append(imgEl, h3El, parDescEl, parPriceEl);
  document.querySelector(".wrapperMovies").appendChild(divEl);
};

const createModal = (imgUrl, title, desc, productionYear) => {
  const divEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textContainerEl = document.createElement("div");
  const h1El = document.createElement("h1");
  const parDescEl = document.createElement("p");
  const parProductionYearEl = document.createElement("p");

  divEl.classList.add("modalWrapper");
  imgEl.setAttribute("src", imgUrl);
  imgEl.setAttribute("alt", "img");
  textContainerEl.classList.add("info");

  h1El.textContent = title;
  parDescEl.textContent = desc;
  parProductionYearEl.textContent = productionYear;

  divEl.append(imgEl, textContainerEl);
  textContainerEl.append(h1El, parDescEl, parProductionYearEl);

  document.querySelector("body").appendChild(divEl);
};

export { createCard, createModal };
// export default createCard;
