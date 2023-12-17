//import functions from general
import { setNavElems } from "./general";
import { setFooter } from "./general";
import { submitForm } from "./general";
import { navOpacity } from "./general";
import { setCurrentYear } from "./general";
import { newsletterButtonClick } from "./general";
import { scrollTop } from "./general";
import { newsletterButtonHide } from "./general";

//create class
class Vendors {
  constructor() {
    //call functions from general
    setNavElems();
    setFooter();
    //call functions from this class
    this.addEventListeners();
    setCurrentYear();
    newsletterButtonHide();
    newsletterButtonClick();
    scrollTop();
  }

  //add event listeners to the DOM
  addEventListeners() {
    window.addEventListener("resize", setNavElems);
    window.addEventListener("submit", submitForm);
    window.addEventListener("scroll", navOpacity);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 990) {
        newsButton.classList.add("visually-hidden");
      } else {
        newsButton.classList.remove("visually-hidden");
      }
    });
  }
}

//create new instance of Vendors class if on the vendors page
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("vendors")) new Vendors();
});
