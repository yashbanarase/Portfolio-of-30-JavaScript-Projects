const input = document.querySelector("input");
const button = document.querySelector(".add-btn");
const addList = document.querySelector(".list");

button.addEventListener("click", () => {
  if (input.value == "") {
    alert("write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    addList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  input.value = "";
});

addList.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", addList.innerHTML);
}
function showtask() {
  addList.innerHTML = localStorage.getItem("data");
}

showtask();
