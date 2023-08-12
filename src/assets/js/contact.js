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
    this.handleMapResize();
    this.addEventListeners();
    this.handleContactIconResize();
    setCurrentYear();
  }

  handleMapResize() {
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

  handleContactIconResize() {
    const outerIconContainer = document.querySelector(".outerIconContainer");

    if (window.innerWidth < 992) {
      outerIconContainer.innerHTML = `
      <div class="d-flex flex-column"> 
        <div class="row d-flex pt-2">
          <div class="col d-flex justify-content-center p-2">
              <div class="container d-flex flex-column align-items-center contactIconContainer p-3">
                <div class="col">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#044bd9"
                      class="bi bi-house-door-fill" viewBox="0 0 16 16">
                      <path
                          d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                  </svg>
                </div>
              <div class="col text-center pt-4">
                  <h2>Address:</h2>
              </div>
              <div class="col text-center p">
                  <h6>
                      85 E 8th Ave
                  </h6>
                  <h6>
                      Eugene, OR 97401
                  </h6>
              </div>
          </div>
        </div>
        <div class="col d-flex justify-content-center p-2">
          <div class="container d-flex flex-column align-items-center contactIconContainer p-3">
              <div class="col">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#044bd9"
                      class="bi bi-clock-fill" viewBox="0 0 16 16">
                      <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>
              </div>
              <div class="col text-center pt-4">
                  <h2>Hours:</h2>
              </div>
              <div class="col text-center pt-2">
                  <h6>
                      3rd Sunday of every month
                  </h6>
                  <h6>
                      11am - 3pm
                  </h6>
              </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column">
      <div class="row d-flex pt-2">
      <div class="col d-flex justify-content-center p-2">
          <div class="container d-flex flex-column align-items-center contactIconContainer p-3">
              <div class="col">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#044bd9"
                      class="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
              </div>
              <div class="col text-center pt-4">
                  <h2>Phone:</h2>
              </div>
              <div class="col text-center pt-2">
                  <h6>
                      555-555-5555
                  </h6>
              </div>
          </div>


      </div>
      <div class="col d-flex justify-content-center p-2">
          <div class="container d-flex flex-column align-items-center contactIconContainer p-3">
              <div class="col">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#044bd9"
                      class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                      <path
                          d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                      <path
                          d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                  </svg>
              </div>
              <div class="col text-center pt-4">
                  <h2>Email:</h2>
              </div>
              <div class="col text-center pt-2">
                  <h6>
                      contact@naacm.org
                  </h6>
              </div>
          </div>
      </div>
  </div>
  </div>`;
    } else {
      outerIconContainer.innerHTML = `<div class="row d-flex pt-5">
      <div class="col d-flex justify-content-center p-2">
          <div class="container d-flex flex-column align-items-center contactIconContainer p-3">
              <div class="col">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#044bd9"
                      class="bi bi-house-door-fill" viewBox="0 0 16 16">
                      <path
                          d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                  </svg>
              </div>
              <div class="col text-center pt-4">
                  <h2>Address:</h2>
              </div>
              <div class="col text-center p">
                  <h6>
                      85 E 8th Ave
                  </h6>
                  <h6>
                      Eugene, OR 97401
                  </h6>
              </div>
          </div>
      </div>
      <div class="col d-flex justify-content-center p-2">
          <div class="container d-flex flex-column align-items-center contactIconContainer p-3">
              <div class="col">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#044bd9"
                      class="bi bi-clock-fill" viewBox="0 0 16 16">
                      <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  </svg>
              </div>
              <div class="col text-center pt-4">
                  <h2>Hours:</h2>
              </div>
              <div class="col text-center pt-2">
                  <h6>
                      3rd Sunday of every month
                  </h6>
                  <h6>
                      11am - 3pm
                  </h6>
              </div>
          </div>
      </div>

      <div class="col d-flex justify-content-center p-2">
          <div class="container d-flex flex-column align-items-center contactIconContainer p-3">
              <div class="col">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#044bd9"
                      class="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
              </div>
              <div class="col text-center pt-4">
                  <h2>Phone:</h2>
              </div>
              <div class="col text-center pt-2">
                  <h6>
                      555-555-5555
                  </h6>
              </div>
          </div>


      </div>
      <div class="col d-flex justify-content-center p-2">
          <div class="container d-flex flex-column align-items-center contactIconContainer p-3">
              <div class="col">
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="#044bd9"
                      class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                      <path
                          d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                      <path
                          d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                  </svg>
              </div>
              <div class="col text-center pt-4">
                  <h2>Email:</h2>
              </div>
              <div class="col text-center pt-2">
                  <h6>
                      contact@naacm.org
                  </h6>
              </div>
          </div>
      </div>
  </div>`;
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
    window.addEventListener("resize", this.handleMapResize);
    window.addEventListener("resize", this.handleContactIconResize);
    this.pdfButton.addEventListener("click", this.openPDF);
    this.gFormButton.addEventListener("click", this.openGForm);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("/contact.html")) new Contact();
});
