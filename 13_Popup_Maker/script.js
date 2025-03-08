let submit = document.querySelector("#submit");
let popup = document.querySelector("#popup");
let okBtn = document.querySelector("#okBtn");

submit.addEventListener("click", showPopup);

okBtn.addEventListener("click", hidePopup);

function showPopup() {
  popup.classList.add("open-popup");
}

function hidePopup() {
  popup.classList.remove("open-popup");
}
