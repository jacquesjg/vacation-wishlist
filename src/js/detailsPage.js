const destination = localStorage.getItem("destination");
console.log(destination);
const pic = localStorage.getItem("pic")
const locationDest = localStorage.getItem("location")
const description = localStorage.getItem("description")

if (destination && pic && locationDest && description != null) {
  const picContainer = document.querySelector(".pic-container-details");
  const card = document.createElement("div");
  const cardPic = document.createElement("img");
  const cardDestination = document.createElement("div");
  const cardLocation = document.createElement("div");
  const cardDescription = document.createElement("div");

  card.setAttribute("class", "card details");
  cardPic.setAttribute("id", "details-img");
  cardDestination.setAttribute("id", "card-destination");
  cardLocation.setAttribute("id", "card-location");
  cardDescription.setAttribute("id", "card-description");

  card.style.display = "block";
  cardPic.src = pic;
  cardDestination.innerText = destination;
  cardLocation.innerText = locationDest;
  cardDescription.innerText = description;

  card.append(cardPic, cardDestination, cardLocation, cardDescription);
  picContainer.appendChild(card);
}

