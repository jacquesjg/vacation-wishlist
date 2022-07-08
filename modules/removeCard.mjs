export default function removeCard(e) {
  const card = e.target.parentElement.parentElement;
  card.remove();
}