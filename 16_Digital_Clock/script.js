let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  realHours = hours <= 12 ? hours : hours - 12;

  hrs.innerHTML = (realHours < 10 ? "0" : "") + realHours;
  min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
}, 1000);
