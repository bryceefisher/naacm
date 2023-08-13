//import functions from general
import { setNavElems } from "./general";
import { setFooter } from "./general";
import { submitForm } from "./general";
import { navOpacity } from "./general";
import { setCurrentYear } from "./general";

//create class
class Vendors {
  constructor() {
    //call functions from general
    setNavElems();
    setFooter();
    //call functions from this class
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
  if (window.location.pathname.includes("vendors.html")) new Vendors();
});
