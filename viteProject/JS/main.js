//USE NODE VERSION 18!!!
import "../CSS/style.css";
import { cardarray } from "./arrays.js";
import { DOMSelectors } from "./DOMSelectors.js";
function createCards(x) {
  DOMSelectors.container.innerHTML = "";
  x.forEach((item) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeEnd",
      `<div class="card"><h1 class="card-header">${item.title}</h1><img src="${item.imageLink}" alt="${item.altText}" class="card-img"><p class="card-rating">Rating: ${item.rating}</p><p class="card-desc">${item.description}</p></div>`
    )
  );
}
function ratingsorter(x) {
  x.sort((item, nextitem) => {
    if (item.rating > nextitem.rating) {
      return -1;
    } else if (item.rating < nextitem.rating) {
      return 1;
    } else {
      return 0;
    }
  });
}
function sortbyrating(x) {
  ratingsorter(x);
  createCards(x);
}
function namingsorter(x) {
  for (let i = 1; i < x.length; i++) {
    let item = x[i];
    let nextitem = i - 1;
    while (nextitem >= 0 && x[nextitem].title.localeCompare(item.title) > 0) {
      //compares 2 items, if current item comes after the next one it returns a positive value, meaning it has to swap the two values
      x[nextitem + 1] = x[nextitem];
      nextitem--;
    }
    x[nextitem + 1] = item;
  }
}
function sortbyname(x) {
  namingsorter(x);
  createCards(x);
}
function cardreverse(x) {
  x.reverse(); //reverses the order of all items in an array
}
createCards(cardarray);
DOMSelectors.colorswapper.addEventListener("click", function () {
  if (document.body.classList.contains("retro")) {
    document.body.classList.add("modern");
    document.body.classList.remove("retro");
    DOMSelectors.colorswapper.innerHTML =
      "Click here for color swap. <br>Theme: Modern";
  } else {
    document.body.classList.add("retro");
    document.body.classList.remove("modern");
    DOMSelectors.colorswapper.innerHTML =
      "Click here for color swap. <br>Theme: Retro";
  }
});
DOMSelectors.sorterbtn.addEventListener("click", function () {
  if (DOMSelectors.sorterbtn.innerHTML.includes("Rating")) {
    sortbyname(cardarray);
    DOMSelectors.sorterbtn.innerHTML =
      "Click here to change how the cards are sorted. <br>Current Sort: Name";
  } else {
    DOMSelectors.sorterbtn.innerHTML =
      "Click here to change how the cards are sorted. <br>Current Sort: Rating";
    sortbyrating(cardarray);
  }
});
DOMSelectors.reversebutton.addEventListener("click", function () {
  cardreverse(cardarray);
  createCards(cardarray);
});
