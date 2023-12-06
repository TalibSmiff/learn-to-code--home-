"use strict";
function getWeather() {
  fetch("https://api.weather.gov/")
    .then((response) => response.json())
    .then((data) => {});
}
