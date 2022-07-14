import createCard from "../modules/createCard.mjs";
import PHOTO_API_KEY from "../../resources/keys/photoApiKey.js";

export default async function handleSubmit(e) {
  e.preventDefault();

  const destination = e.target.elements["destination"].value;
  const location = e.target.elements["location"].value;
  const description = e.target.elements["description"].value;
  const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=${PHOTO_API_KEY}&query=${destination} ${location}`);
  const data = await res.json();
  const photo = data.results[0].urls.small;
  document.querySelector("form").reset();

  fetch("http://localhost:3000/api/cards/add-destination", {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      destination: destination,
      location: location,
      photo: photo,
      description: description
    })
  }).then(response => response.json())
    .then(data => {
      createCard(destination, location, photo, description, data.result.insertedId);
    });
}