//USE NODE VERSION 18!!!
import "../CSS/style.css";
console.log("e");
import { cardarray } from "./arrays.js";
function createCards(x) {
  for (i = 0; i < x.length; i++) {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeEnd",
      `<div class="card"><h1 class="card-header">${x.title}}</h1><img src="${x.imageLink}" alt="${x.altText}" class="card-img"><p class="card-rating">Rating: ${x.rating}</p><p class="card-desc">${x.description}</p></div>`
    );
  }
}
createCards(cardarray);
const DOMSelectors = {
  colorswapper: document.querySelector(".color-swap"),
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
};
DOMSelectors.colorswapper.addEventListener("click", function () {
  if (document.body.classList.contains("day")) {
    document.body.classList.add("night");
    document.body.classList.remove("day");
  } else {
    document.body.classList.add("day");
    document.body.classList.remove("night");
  }
});
