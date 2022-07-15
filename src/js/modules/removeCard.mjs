export default function removeCard(e) {
  const card = e.target.parentElement.parentElement;
  const id = card.getAttribute("id");

  fetch("http://localhost:3000/api/destinations/delete-destination", {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id
    })
  })

  card.remove();
}