const scriptURL =
  "https://script.google.com/macros/s/AKfycbzLKZMs9oSKhliGvvl1N3JUjDA-ywwAyRAO-DOZ6xZsmuOLaGf2-a3XCyr2v00XzVoe/exec";
const form = document.forms["submit-to-google-sheet"];
const afterClick = document.getElementById("afterClick");
const inputEmail = document.getElementById("inputEmail");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      afterClick.style.display = "block";
      form.reset();
      setTimeout(function () {
        afterClick.style.display = "none";
      }, 3000);
    })
    .catch((error) => console.error("Error!", error.message));
});
