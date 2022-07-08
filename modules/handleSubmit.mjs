import createCard from "./createCard.mjs";
import API_KEY from '../apiKey.js';

export default async function handleSubmit(e) {
  e.preventDefault();
  const destination = e.target.elements["destination"].value;
  const location = e.target.elements["location"].value;
  const description = e.target.elements["description"].value;
  const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${destination} ${location}`);
  const data = await res.json();
  const photo = data.results[0].urls.small;
  document.querySelector("form").reset();
  createCard(destination, location, photo, description);
}