let bit = document.getElementById("bit");
let enth = document.getElementById("enth");
let doge = document.getElementById("doge");

async function fetchApi() {
  let responce = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"
  );
  let data = await responce.json();
  console.log(data.bitcoin);
  bit.innerHTML = "$" + data.bitcoin.usd;
  enth.innerHTML = "$" + data.ethereum.usd;
  doge.innerHTML = "$" + data.dogecoin.usd;
}
fetchApi();
