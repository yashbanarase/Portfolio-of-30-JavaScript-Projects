let api = "https://api.quotable.io/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("myBtn");
const tweet = document.getElementById("myTweet");

async function mainApi() {
  const responce = await fetch(api);
  let data = await responce.json();
  console.log(data[0]);
  quote.innerText = data[0].content;
  author.innerText = data[0].author;
}
mainApi();

async function shareTweet() {
  const responce = await fetch(api);
  let data = await responce.json();
  window.open(
    `https://twitter.com/intent/tweet?text=${data[0].content}`,
    "tweet Window",
    "width=600, height=300"
  );
}

button.addEventListener("click", mainApi);
tweet.addEventListener("click", shareTweet);
