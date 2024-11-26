const passwordBox = document.getElementById("password");
const button = document.querySelector("button");
const copy = document.querySelector(".display img");
const length = 12;
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+=-/*-+<>?,./{}[]|";
const allChar = upperCase + lowerCase + numbers + symbols;

button.addEventListener("click", function () {
  createPassword();
});

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

copy.addEventListener("click", function () {
  copyPassword();
});
