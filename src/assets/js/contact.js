class Contact {
  constructor() {
    //DOM elements
    this.pdfButton = document.getElementById("pdfButton");
    this.gFormButton = document.getElementById("gFormButton");

    this.setCurrentYear();
    this.setNavElems();
    this.handleResize();
    this.addEventListeners();
  }

  setNavElems() {
    const collapseDiv = document.querySelector("#navbarSupportedContent");

    if (window.innerWidth < 992) {
      collapseDiv.innerHTML = `<div class="container-fluid text-center">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-ul">
            <li class="nav-item" id="navHome">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item" id="navContact">
                <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item" id="navAbout">
                <a class="nav-link" href="about.html">Vendors</a>
            </li>
            <li class="nav-item" id="navContact">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
        </ul>
  
        <hr>
        <button class="btn btn-outline-success" type="submit">Donate</button>
    </div>`;
    } else {
      collapseDiv.innerHTML = `<div class="container-fluid d-flex justify-content-end">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-ul">
            <li class="nav-item" id="navHome">
                <a class="nav-link" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item" id="navContact">
                <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item" id="navAbout">
                <a class="nav-link" href="about.html">Vendors</a>
            </li>
            <li class="nav-item" id="navContact">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
        </ul>
        <button class="btn btn-outline-success" type="submit">Donate</button>
    </div>`;
    }
  }

  submitForm(e) {
    e.preventDefault(); // Prevent the default form submission
    // Get the form data
    var form = document.getElementById("form");
    var formData = new FormData(form);
    const input = document.getElementById("email");
    const URL =
      "https://script.google.com/macros/s/AKfycbxth-Ti4pCrQgGvySbKZ_JCGSMCRaMnyzVjdGcCGsgwJC_UJmIxBV405jo6xB9s45sR5w/exec";

    fetch(URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => {
        // Clears the form upon submission
        input.value = "";
        // Handle the success response object
        alert("Thank you for subscribing!");
      })
      .catch((error) => {
        // Handle any errors that occur during the submission
        console.log("An error occurred while submitting the form:", error);
      });
  }

  setCurrentYear() {
    const date = document.querySelector("#date");
    date.innerHTML = new Date().getFullYear();
  }

  navOpacity() {
    if (window.scrollY > 100) {
      document.querySelector("#nav").classList.add("opacity-75");
    } else {
      document.querySelector("#nav").classList.remove("opacity-75");
    }
  }

  handleResize() {
    const container = document.getElementById("contactContainer");
    const contactDiv = document.getElementById("contactDiv");
    const map = document.getElementById("map");
    const iframe = document.getElementById("iframe");

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
    window.addEventListener("resize", this.setNavElems);
    window.addEventListener("submit", this.submitForm);
    window.addEventListener("scroll", this.navOpacity);
    window.addEventListener("resize", this.handleResize);
    this.pdfButton.addEventListener("click", this.openPDF);
    this.gFormButton.addEventListener("click", this.openGForm);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  console.log(window.location.pathname);
  if (window.location.pathname.includes("/contact.html")) new Contact();
});