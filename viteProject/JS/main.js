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
  x.forEach((item, index) => {
    for (let i = index + 1; i < x.length; i++) {
      let nextitem = x[i];
      if (item.title.localeCompare(nextitem.title) > 0) {
        //compares 2 items, if current item comes after the next one it returns a positive value, meaning it has to swap the two values
        [x[index], x[i]] = [x[i], x[index]];
      }
    }
  });
}
function sortbyname(x) {
  namingsorter(x);
  createCards(x);
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
  console.log(DOMSelectors.sorterbtn.innerHTML);
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
