let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

for (option of options) {
  option.addEventListener("click", function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  });
}
selectField.addEventListener("click", function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});
