import editCard from "./editCard.mjs";
import removeCard from "./removeCard.mjs";
import cardDetail from './cardDetail.mjs';

export default function createCard(destination, location, photo, description) {
  const picContainer = document.querySelector(".pic-container");
  const card = document.createElement("div");
  const cardPic = document.createElement("img");
  const cardDestination = document.createElement("div");
  const cardLocation = document.createElement("div");
  const cardDescription = document.createElement("div");
  const readMore = document.createElement("span");
  const buttonsDestination = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  card.setAttribute("class", "card");
  cardPic.setAttribute("id", "card-pic");
  cardDestination.setAttribute("id", "card-destination");
  cardLocation.setAttribute("id", "card-location");
  cardDescription.setAttribute("id", "card-description");
  buttonsDestination.setAttribute("class", "buttons-destination");
  editButton.setAttribute("class", "btn edit");
  deleteButton.setAttribute("class", "btn delete");

  card.style.display = "block";
  cardPic.src = photo;
  cardDestination.innerText = destination;
  cardLocation.innerText = location;
  cardDescription.innerText = description;
  readMore.innerText = "Read More...";
  readMore.addEventListener("click", cardDetail);
  editButton.innerText = "Edit";
  editButton.addEventListener("click", editCard);
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", removeCard);

  buttonsDestination.append(editButton, deleteButton);
  card.append(cardPic, cardDestination, cardLocation, cardDescription, readMore, buttonsDestination);
  picContainer.appendChild(card);
}