const apiKey = "cb61f51182df2049974b88b1a8839f7b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector("#search input");
const search_btn = document.querySelector("#search button");
const icon = document.querySelector(".temp-img");
info = document.querySelector("#info");
invalid = document.querySelector("#invalid");

async function checkWeather(place) {
  const response = await fetch(apiUrl + place + `&appid=${apiKey}`);
  var data = await response.json();

  info.style.display = "block";
  invalid.style.display = "none";

  if (response.status == 404) {
    invalid.style.display = "block";
    info.style.display = "none";
  }

  console.log(data);
  const city = document.querySelector("#city");
  const temperature = document.querySelector("#temperature");
  const humidity = document.querySelector("#percent");
  const wind = document.querySelector("#speed");

  city.innerHTML = data.name;
  temperature.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clear") {
    icon.src = "images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    icon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    icon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    icon.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    icon.src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    icon.src = "images/snow.png";
  }
}

search_btn.addEventListener("click", () => {
  checkWeather(search.value);
});
