import handleSubmit from './modules/handleSubmit.mjs';
import WEATHER_API_KEY from './weatherApiKey.js';

const weather = document.querySelector("#weather");
const weatherLocation = document.querySelector("#weather-location");
const weatherConditions = document.querySelector("#weather-conditions");
const weatherTemp = document.querySelector("#weather-temp");

localStorage.clear();

const locationSuccess = async (position) => {
  const fetchMessage = document.createElement("div");
  fetchMessage.innerText = "Fetching Weather";
  weather.append(fetchMessage);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const res = await fetch(`http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${lat},${lon}`);
  const data = await res.json();
  fetchMessage.removeChild(fetchMessage.lastChild);
  weatherLocation.innerText = data.location.name + ", " + data.location.region;
  weatherConditions.innerText = data.current.weather_descriptions[0];
  weatherTemp.innerText = (data.current.temperature * (9 / 5)) + 32 + " °F";
}

const locationFail = (e) => {
  console.log(e.message);
  // TODO: display sth
}

navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);

document.querySelector("form").addEventListener("submit", handleSubmit);



