import PHOTO_API_KEY from "../../resources/keys/photoApiKey.js";

export default async function editCard(e) {
  const cardData = e.target.parentElement.parentElement;
  const cardPic = cardData.children[0];
  const cardDestination = cardData.children[1];
  const cardLocation = cardData.children[2];
  const cardDescription = cardData.children[3];
  const id = cardData.getAttribute("id");
  let pic;

  const destination = window.prompt("Enter new destination");
  const location = window.prompt("Enter new location");
  const description = window.prompt("Enter new description");

  if (destination.length > 0 || location.length > 0) {
    const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=${PHOTO_API_KEY}&query=${destination} ${location}`);
    const data = await res.json();
    pic = data.results[0].urls.small;
  }

  await fetch("http://localhost:3000/api/cards/update-destination", {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      destination: destination,
      location: location,
      photo: pic,
      description: description
    })
  })

  destination.length > 0 ? cardDestination.innerText = destination : null;
  location.length > 0 ? cardLocation.innerText = location : null;
  description.length > 0 ? cardDescription.innerText = description : null;
  cardPic.setAttribute("src", pic);


};