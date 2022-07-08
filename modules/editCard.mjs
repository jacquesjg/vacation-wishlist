import API_KEY from '../apiKey.js';

export default async function editCard(e) {
  const cardData = e.target.parentElement.parentElement;
  const cardPic = cardData.children[0];
  const cardDestination = cardData.children[1];
  const cardLocation = cardData.children[2];
  const cardDescription = cardData.children[3];

  const destination = window.prompt("Enter new destination");
  const location = window.prompt("Enter new location");
  const description = window.prompt("Enter new description");

  destination.length > 0 ? cardDestination.innerText = destination : null;
  location.length > 0 ? cardLocation.innerText = location : null;
  description.length > 0 ? cardDescription.innerText = description : null;

  if (destination.length > 0 || location.length > 0) {
    const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${destination} ${location}`);
    const data = await res.json();
    const pic = data.results[0].urls.small;
    cardPic.setAttribute("src", pic);
  }
};