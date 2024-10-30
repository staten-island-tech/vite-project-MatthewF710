//USE NODE VERSION 18!!!
import "../CSS/style.css";
document.querySelector(".color-swa[").addEventListener("click", function () {
  if (document.body.classList.contains("day")) {
    document.body.classList.add("night");
    document.body.classList.remove("day");
  } else {
    document.body.classList.add("day");
    document.body.classList.remove("night");
  }
});
