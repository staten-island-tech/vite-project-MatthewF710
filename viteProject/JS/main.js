//USE NODE VERSION 18!!!
import "../CSS/style.css";
import { cardarray } from "./arrays.js";
import { DOMSelectors } from "./DOMSelectors.js";
function createCards(x) {
  x.forEach((item) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeEnd",
      `<div class="card"><h1 class="card-header">${item.title}</h1><img src="${item.imageLink}" alt="${item.altText}" class="card-img"><p class="card-rating">Rating: ${item.rating}</p><p class="card-desc">${item.description}</p></div>`
    )
  );
  // DOMSelectors.btn.insertAdjacentHTML("beforeEnd", '<p class=""></p>');
}
createCards(cardarray);
DOMSelectors.colorswapper.addEventListener("click", function () {
  if (document.body.classList.contains("day")) {
    document.body.classList.add("night");
    document.body.classList.remove("day");
  } else {
    document.body.classList.add("day");
    document.body.classList.remove("night");
  }
});
