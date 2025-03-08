let imgBox = document.getElementById("img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg");
let line = document.getElementById("line");

let leftSpace = imgBox.offsetLeft;

originalImg.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function (e) {
  let boxWidth = e.pageX - leftSpace + "px";
  imgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};
