import { setNavElems } from "./general";
import { setFooter } from "./general";
import { submitForm } from "./general";
import { navOpacity } from "./general";
import { setCurrentYear } from "./general";

class About {
  constructor() {
    setNavElems();
    setFooter();
    this.addEventListeners();
    setCurrentYear();
  }

  addEventListeners() {
    window.addEventListener("resize", setNavElems);
    window.addEventListener("submit", submitForm);
    window.addEventListener("scroll", navOpacity);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("about.html")) new About();
});
