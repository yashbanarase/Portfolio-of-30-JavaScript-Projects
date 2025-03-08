let password = document.querySelector("#password");
let message = document.querySelector("#message");
let strength = document.querySelector("#strength");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.value.display = "none";
  }
  if (password.value.length < 4) {
    strength.innerHTML = " Weak";
    password.style.borderColor = "#ff5925";
    password.style.color = "#ff5925";
  } else if (password.value.length >= 4 && password.value.length < 8) {
    strength.innerHTML = " Medium";
    password.style.borderColor = "yellow";
    password.style.color = "yellow";
  } else if (password.value.length >= 8) {
    strength.innerHTML = " Strong";
    password.style.borderColor = "#26d730";
    password.style.color = "#26d730";
  }
});
