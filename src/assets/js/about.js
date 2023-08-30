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
    this.handleUpperDivResize();
    this.handleLowerDivResize();
  }

  handleUpperDivResize() {
    const upperDiv = document.getElementById("aboutUpperDiv");
    const aboutDiv = document.getElementById("aboutInnerDiv");
    const aboutLowerDiv = document.getElementById("aboutUpperLowerDiv");
    if (window.innerWidth < 990) {
      upperDiv.classList.remove("flex-row");
      upperDiv.classList.add("flex-column");
      aboutDiv.classList.add("text-center");
      aboutDiv.classList.remove("col-6");
      aboutLowerDiv.classList.add("text-center");
      aboutLowerDiv.classList.remove("col-6");
    } else {
      upperDiv.classList.add("flex-row");
      upperDiv.classList.remove("flex-column");
      aboutDiv.classList.remove("text-center");
      aboutDiv.classList.add("col-6");
      aboutLowerDiv.classList.remove("text-center");
      aboutLowerDiv.classList.add("col-6");
    }
  }

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

  addEventListeners() {
    window.addEventListener("resize", setNavElems);
    window.addEventListener("resize", this.handleUpperDivResize);
    window.addEventListener("resize", this.handleLowerDivResize);
    window.addEventListener("submit", submitForm);
    window.addEventListener("scroll", navOpacity);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("about.html")) new About();
});
