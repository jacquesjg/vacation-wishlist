export default function cardDetail(e) {
  const data = e.target.parentElement;
  localStorage.setItem("pic", data.children[0].src);
  localStorage.setItem("destination", data.children[1].innerText);
  localStorage.setItem("location", data.children[2].innerText);
  localStorage.setItem("description", data.children[3].innerText);
  window.open("src/pages/detailsPage.html", "_blank");
}