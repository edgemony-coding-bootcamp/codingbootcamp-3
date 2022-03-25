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

// export { createCard };
export default createCard;
