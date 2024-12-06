const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

function whileClick(e) {
  if (e.target.tagName === "P") {
    console.log(e.target.tagName);
    notes.forEach((nt) => {
      nt.onKeyup = function () {
        updateStorage();
      };
    });
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
}

notesContainer.addEventListener("click", whileClick);
