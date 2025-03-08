let productImg = document.getElementById("productImg");
let controls = document.getElementById("controls");
let btns = document.getElementsByClassName("btn");

btns[0].addEventListener("click", () => {
  productImg.src = "image1.png";

  for (btn of btns) {
    btn.classList.remove("active");
  }
  btns[0].classList.add("active");
});

btns[1].addEventListener("click", () => {
  productImg.src = "image2.png";

  for (btn of btns) {
    btn.classList.remove("active");
  }
  btns[1].classList.add("active");
});

btns[2].addEventListener("click", () => {
  productImg.src = "image3.png";

  for (btn of btns) {
    btn.classList.remove("active");
  }
  btns[2].classList.add("active");
});
