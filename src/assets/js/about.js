import { setNavElems } from "./general";
import { setFooter } from "./general";
import { submitForm } from "./general";
import { navOpacity } from "./general";
import { setCurrentYear } from "./general";
import { newsletterButtonClick } from "./general";
import { scrollTop } from "./general";

class About {
  constructor() {
    setNavElems();
    setFooter();
    this.addEventListeners();
    setCurrentYear();
    this.handleUpperDivResize();
    this.handleLowerDivResize();
    newsletterButtonClick();
    scrollTop();
  }

  // resize the upper div on the about page by adding and removing bs classes
  handleUpperDivResize() {
    const upperDiv = document.getElementById("aboutUpperDiv");
    const aboutDiv = document.getElementById("aboutInnerDiv");
    const aboutLowerDiv = document.getElementById("aboutUpperLowerDiv");
    const HR = document.getElementById("aboutHR");
    if (window.innerWidth < 990) {
      upperDiv.classList.remove("flex-row");
      upperDiv.classList.add("flex-column");
      aboutDiv.classList.add("text-center");
      aboutDiv.classList.remove("col-6");
      aboutLowerDiv.classList.add("text-center");
      aboutLowerDiv.classList.remove("col-6");
      upperDiv.classList.remove("pb-5");
      aboutLowerDiv.classList.remove("p-5");
      HR.classList.remove("m-5");
    } else {
      upperDiv.classList.add("flex-row");
      upperDiv.classList.remove("flex-column");
      aboutDiv.classList.remove("text-center");
      aboutDiv.classList.add("col-6");
      aboutLowerDiv.classList.remove("text-center");
      aboutLowerDiv.classList.add("col-6");
      upperDiv.classList.add("pt-5");
      aboutLowerDiv.classList.add("pt-5");
    }
  }

  // resize the lower div on the about page by adding and removing bs classes
  handleLowerDivResize() {
    const upperDiv = document.getElementById("aboutLowerDiv");
    const aboutDiv = document.getElementById("aboutLowerInnerDiv");
    const aboutLowerDiv = document.getElementById("aboutLowerLowerDiv");
    if (window.innerWidth < 990) {
      upperDiv.classList.remove("flex-row");
      upperDiv.classList.add("flex-column");
      aboutDiv.classList.add("text-center");
      aboutDiv.classList.remove("col-6");
      aboutLowerDiv.classList.add("text-center");
      aboutLowerDiv.classList.remove("col-6");
      aboutLowerDiv.classList.remove("d-flex");
      aboutLowerDiv.classList.remove("flex-row-reverse");
    } else {
      upperDiv.classList.add("flex-row");
      upperDiv.classList.remove("flex-column");
      aboutDiv.classList.remove("text-center");
      aboutDiv.classList.add("col-6");
      aboutLowerDiv.classList.remove("text-center");
      aboutLowerDiv.classList.add("col-6");
      aboutLowerDiv.classList.add("d-flex");
      aboutLowerDiv.classList.add("flex-row-reverse");
    }
  }

  //add event listeners
  addEventListeners() {
    window.addEventListener("resize", setNavElems);
    window.addEventListener("resize", this.handleUpperDivResize);
    window.addEventListener("resize", this.handleLowerDivResize);
    window.addEventListener("submit", submitForm);
    window.addEventListener("scroll", navOpacity);
  }
}

//create new instance of About class if on the about page
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("about.html")) new About();
});
