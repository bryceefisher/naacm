class Vendors {
  constructor() {
    this.setCurrentYear();
    this.setNavElems();
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

  addEventListeners() {
    window.addEventListener("resize", this.setNavElems);
    window.addEventListener("submit", this.submitForm);
    window.addEventListener("scroll", this.navOpacity);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("vendors.html")) new Vendors();
});
