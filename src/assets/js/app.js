import "./general";

function togglePhotos() {
  const img2 = document.querySelector("#img2");
  const img4 = document.querySelector("#img4");
  const img6 = document.querySelector("#img6");
  const img8 = document.querySelector("#img8");

  if (window.innerWidth < 768) {
    img2.classList.add("visually-hidden");
    img4.classList.add("visually-hidden");
    img6.classList.add("visually-hidden");
    img8.classList.add("visually-hidden");
  } else {
    img2.classList.remove("visually-hidden");
    img4.classList.remove("visually-hidden");
    img6.classList.remove("visually-hidden");
    img8.classList.remove("visually-hidden");
  }
}

function addEventListeners() {
  window.addEventListener("resize", togglePhotos);
}

function setCurrentYear() {
  const date = document.querySelector("#date");
  date.innerHTML = new Date().getFullYear();
}

setCurrentYear();
addEventListeners();
