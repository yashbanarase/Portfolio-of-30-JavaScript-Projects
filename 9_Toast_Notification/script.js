const Btn1 = document.getElementById("Btn1");
const Btn2 = document.getElementById("Btn2");
const Btn3 = document.getElementById("Btn3");

const Box = document.getElementById("toastBox");

Btn1.addEventListener("click", showToast1);
Btn2.addEventListener("click", showToast2);
Btn3.addEventListener("click", showToast3);

function showToast1() {
  const tost = document.createElement("div");
  tost.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
  Box.appendChild(tost);
  tost.classList.add("success");
  tost.classList.add("tost");
  setTimeout(() => {
    Box.removeChild(tost);
  }, 5000);
}
function showToast2() {
  const tost = document.createElement("div");
  tost.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
  tost.classList.add("tost");
  tost.classList.add("error");
  Box.appendChild(tost);
  setTimeout(() => {
    Box.removeChild(tost);
  }, 5000);
}
function showToast3() {
  const tost = document.createElement("div");
  tost.innerHTML =
    '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';
  Box.appendChild(tost);
  tost.classList.add("tost");
  tost.classList.add("invalid");
  setTimeout(() => {
    Box.removeChild(tost);
  }, 5000);
}
