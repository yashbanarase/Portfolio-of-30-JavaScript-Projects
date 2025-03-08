let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchResult = document.getElementById("search-result");
let showMoreBtn = document.getElementById("show-more-btn");
let submitBtn = document.getElementById("submitBtn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  let responce = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=PKRqG4NO9lMtCEtaH-ZdPnLYQbcJ-g_PFZZdTWdFn3o&per_page=12`
  );
  let data = await responce.json();
  console.log(data);
  let results = data.results;

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});
