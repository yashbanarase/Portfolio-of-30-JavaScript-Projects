eyeIcon = document.getElementById("eyeIcon");
password = document.getElementById("password");
let eye = false;

eyeIcon.addEventListener("click", () => {
  if (eye == false) {
    eyeIcon.src = "eye-open.png";
    password.type = "text";
    eye = true;
  } else {
    eyeIcon.src = "eye-close.png";
    password.type = "password";
    eye = false;
  }
});
