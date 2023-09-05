import { setNavElems } from "./general";
import { setFooter } from "./general";
import { submitForm } from "./general";
import { navOpacity } from "./general";
import { setCurrentYear } from "./general";
import { newsletterButtonClick } from "./general";
import { scrollTop } from "./general";

class Contact {
  constructor() {
    //DOM elements
    this.pdfButton = document.getElementById("pdfButton");
    this.gFormButton = document.getElementById("gFormButton");
    this.addressDiv = document.getElementById("addressDiv");
    this.map = document.getElementById("contactContainer");

    // call functions on page load
    setNavElems();
    setFooter();
    this.handleMapResize();
    this.addEventListeners();
    this.handleContactIconResize();
    setCurrentYear();
    newsletterButtonClick();
    scrollTop();
  }

  handleMapResize() {
    const container = document.getElementById("contactContainer");
    const contactDiv = document.getElementById("contactDiv");
    const map = document.getElementById("map");
    const iframe = document.getElementById("iframe");
    let mapWidth = "600";
    let mapHeight = "450";

    // set map width and height based on screen size
    if (window.innerWidth < 1215) {
      container.classList.remove("flex-row");
      container.classList.add("flex-column");
      contactDiv.classList.remove("row");
      map.classList.remove("row");
      contactDiv.classList.add("col-12");
      map.classList.add("col-12");
      iframe.classList.add("mobileMap");
      iframe.classList.remove("fullMap");
    } else {
      mapWidth = "600";
      mapHeight = "450";
      container.classList.add("flex-row");
      container.classList.remove("flex-column");
      contactDiv.classList.add("row");
      map.classList.add("row");
      contactDiv.classList.remove("col-12");
      map.classList.remove("col-12");
      iframe.classList.remove("mobileMap");
      iframe.classList.add("fullMap");
    }
  }

  handleContactIconResize() {
    // Inner div container for all 4 icons
    const innerIconContainer = document.querySelector(".innerIconContainer");
    // array of all 2 icon containers 2 per row
    const twoIconContainers = document.querySelectorAll(".twoIconContainer");
    // display icons in a 2 x 2 gris on screens less than 1215px and greater than 500px
    if (window.innerWidth < 1215 && window.innerWidth > 501) {
      //foreach loop to remove the col-6 and d-flex classes from the twoIconContainers
      twoIconContainers.forEach((container) => {
        container.classList.remove("col-6");
        container.classList.remove("d-flex");
      });
      innerIconContainer.classList.add("d-flex");
      // display icons in a 1 x 4 grid on screens less than 500px
    } else if (window.innerWidth < 501) {
      innerIconContainer.classList.remove("d-flex");
      twoIconContainers.forEach((container) => {
        container.classList.remove("col-6");
        container.classList.remove("d-flex");
      });

      // add the col-6 and d-flex classes to the twoIconContainers on screens greater than 1215px
    } else {
      twoIconContainers.forEach((container) => {
        container.classList.add("col-6");
        container.classList.add("d-flex");
      });
    }
  }
  // open the vendor app pdf in a new tab
  openPDF() {
    window.open("assets/static/files/2023_Monthly_Market.pdf", "_blank");
  }

  // open the vendor app google form in a new tab
  openGForm() {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdN-d2FFhKh-rgy9Inn3DIyyGcj4Rn5LQL7QDEQMKXqoz9_iQ/viewform",
      "_blank"
    );
  }

  scrollMap() {
    const map = document.getElementById("map");
    map.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }

  // add event listeners for contact page
  addEventListeners() {
    window.addEventListener("resize", setNavElems);
    window.addEventListener("submit", submitForm);
    window.addEventListener("scroll", navOpacity);
    window.addEventListener("resize", this.handleMapResize);
    window.addEventListener("resize", this.handleContactIconResize);
    this.pdfButton.addEventListener("click", this.openPDF);
    this.gFormButton.addEventListener("click", this.openGForm);
    this.addressDiv.addEventListener("click", this.scrollMap);
  }
}

//create new instance of Contact class if on contact page
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("/contact.html")) new Contact();
});
