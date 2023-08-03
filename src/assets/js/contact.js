import { setNavElems } from "./general";
import { setFooter } from "./general";
import { submitForm } from "./general";
import { navOpacity } from "./general";
import { setCurrentYear } from "./general";

class Contact {
  constructor() {
    //DOM elements
    this.pdfButton = document.getElementById("pdfButton");
    this.gFormButton = document.getElementById("gFormButton");

    setNavElems();
    setFooter();
    this.handleResize();
    this.addEventListeners();
    setCurrentYear();
  }

  handleResize() {
    const container = document.getElementById("contactContainer");
    const contactDiv = document.getElementById("contactDiv");
    const map = document.getElementById("map");
    const iframe = document.getElementById("iframe");
    let mapWidth = "600";
    let mapHeight = "450";

    if (window.innerWidth < 992) {
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

  openPDF() {
    window.open("assets/static/files/2023_Monthly_Market.pdf", "_blank");
  }

  openGForm() {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdN-d2FFhKh-rgy9Inn3DIyyGcj4Rn5LQL7QDEQMKXqoz9_iQ/viewform",
      "_blank"
    );
  }

  addEventListeners() {
    window.addEventListener("resize", setNavElems);
    window.addEventListener("submit", submitForm);
    window.addEventListener("scroll", navOpacity);
    window.addEventListener("resize", this.handleResize);
    this.pdfButton.addEventListener("click", this.openPDF);
    this.gFormButton.addEventListener("click", this.openGForm);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("/contact.html")) new Contact();
});
