import handleSubmit from '../js/modules/handleSubmit.mjs';
import createCard from "../js/modules/createCard.mjs";
import WEATHER_API_KEY from '../resources/keys/weatherApiKey.js';

const weather = document.querySelector("#weather");
const weatherLocation = document.querySelector("#weather-location");
const weatherConditions = document.querySelector("#weather-conditions");
const weatherTemp = document.querySelector("#weather-temp");

localStorage.clear();

window.onload = async () => {
  const res = await fetch(`http://localhost:3000/api/cards/`);
  const data = await res.json();
  data.destinations.forEach(card => {
    createCard(card.destination, card.location, card.photo, card.description, card._id)
  });;
};

const fetchMessage = document.createElement("div");

const locationSuccess = async (position) => {
  fetchMessage.innerText = "Fetching Weather";
  weather.append(fetchMessage);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
  const data = await res.json();
  fetchMessage.removeChild(fetchMessage.lastChild);
  weatherLocation.innerText = data.name + ", " + data.sys.country;
  weatherConditions.innerText = data.weather[0].main;
  weatherTemp.innerText = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1) + " °F";
}

const locationFail = (e) => {
  fetchMessage.innerText = e.message;
  weather.append(fetchMessage);
}

navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);

document.querySelector("form").addEventListener("submit", handleSubmit);



