import { setNavElems } from "./general";
import { setFooter } from "./general";
import { submitForm } from "./general";
import { navOpacity } from "./general";
import { setCurrentYear } from "./general";

class Home {
  constructor() {
    setNavElems();
    setFooter();
    this.togglePhotos();
    this.addEventListeners();
    setCurrentYear();
  }

  // Removes 4 photos from the gallery on mobile
  togglePhotos() {
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

  addEventListeners() {
    window.addEventListener("resize", this.togglePhotos);
    window.addEventListener("resize", setNavElems);
    window.addEventListener("submit", submitForm);
    window.addEventListener("scroll", navOpacity);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname == "/" ||
    window.location.pathname == "/index.html" ||
    window.location.pathname == "index.html" ||
    window.location.pathname.includes("index.html")
  )
    new Home();
});
