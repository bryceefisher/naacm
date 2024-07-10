// Bootstrap 5 import
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// CSS imports
import "/src/assets/css/general.sass";
import "/src/assets/css/home.sass";
import "/src/assets/css/contact.sass";
import "/src/assets/css/about.sass";
import "/src/assets/css/vendors.sass";

//js imports
import "/src/assets/js/home.js";
import "/src/assets/js/contact.js";
import "/src/assets/js/about.js";
import "/src/assets/js/vendors.js";

// Prevent FOUC
import "/src/assets/css/unhide.sass";
import { Toast } from "bootstrap";

//import fonts
const link = document.createElement("link");
const link1 = document.createElement("link");
const link2 = document.createElement("link");

link.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;600&display=swap";
link.rel = "stylesheet";
link1.rel = "preconnect";
link1.href = "https://fonts.googleapis.com";
link2.rel = "stylesheet";
link2.href = "https://fonts.gstatic.com";
link2.crossorigin = true;
document.head.appendChild(link);
document.head.appendChild(link1);
document.head.appendChild(link2);

//Export functions

//Dynamically set the nav in all html files
export function setNavElems() {
  const nav = document.querySelector("#nav");

  const logoHTML = `
  <div class="logo-container">
  <img src="logo1.png" alt="Logo 1" class="navbar-logo">
  <img src="logo2.png" alt="Logo 2" class="navbar-logo">
</div>

`;

  if (window.innerWidth < 992) {
    nav.innerHTML = `
    <div class="container-fluid" >
                <a class="navbar-brand  mx-3 p-1" href="/">
                    <img src="assets/static/img/new_dragonfly.png" alt="" width="150" height="auto"
                        class="d-inline-block align-text-top" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse p-2" id="navbarSupportedContent">
    <div class="container-fluid text-center">
          <ul class="navbar-nav me-auto  mb-lg-0" id="nav-ul">
              <li class="nav-item" id="navHome">
                  <a class="nav-link" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item" id="navHome">
                  <a class="nav-link" href="fashion.html">Fashion</a>
              </li>
              <li class="nav-item" id="navContact">
                  <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item" id="navAbout">
                  <a class="nav-link" href="vendors.html">Vendors</a>
              </li>
              <li class="nav-item" id="navContact">
                  <a class="nav-link" href="contact.html">Contact</a>
              </li>
          </ul> 
          <hr>
          <button class="btn" type="button" id="newsButton">Join our Newsletter</button>
          
      </div>
      </div>`;
  } else {
    nav.innerHTML = `
    <div class="container-fluid p-2 mt-1" >
                ${logoHTML} <!-- Insert logos HTML here -->
                <a class="navbar-brand  mx-3 pt-1" href="/">
                    <img src="assets/static/img/new_dragonfly.png" alt="" width="150" height="auto"
                        class="d-inline-block align-text-top" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse p-2" id="navbarSupportedContent"><div class="container-fluid d-flex justify-content-end">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-ul">
              <li class="nav-item" id="navHome">
                  <a class="nav-link" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item" id="navContact">
                  <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item" id="navAbout">
                  <a class="nav-link" href="vendors.html">Vendors</a>
              </li>
              <li class="nav-item" id="navFashion">
                  <a class="nav-link" href="fashion.html">Fashion</a>
              </li>
              <li class="nav-item" id="navContact">
                  <a class="nav-link" href="contact.html">Contact</a>
              </li>
          </ul>

          <button class="btn" type="button" id="newsButton">Join our Newsletter</button>

      </div>
      </div>`;
  }
}

//Dynamically set the footer in all html files
export function setFooter() {
  const footer = document.getElementById("footer");

  footer.innerHTML = `<div class="container" id="footerDiv">
  <div class="row align-items-center justify-content-center">
      <div class="d-flex text-center col-sm-12 col-md-8 col-lg-6 p-2 flex-column row" id="contactDiv">
          <h3>Stay in Touch!</h3>
          <h5>Sign up for our the NAACM newsletter.</h5>
          <form id="form">
              <div class="form-group text-center" id="form">
                  <label for="email">
                  </label>
                  <input type="email" class="form-control" name="email" id="email"
                      placeholder="Enter email" required />
              </div>
              <div class="text-center p-3">
                  <button type="submit" class="btn btn-primary btn-block" id="submitBtn">Sign up
                  </button>
              </div>
          </form>
      </div>
  </div>
  <div class="d-flex row justify-content-end">
      <div class="footer-basic">
          <div class="social">
              <a href="https://instagram.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                      width="16" height="16" fill="currentColor" class="bi bi-instagram"
                      viewBox="0 0 16 16">
                      <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg></a><a href="https://twitter.com" target="_blank"><svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-twitter" viewBox="0 0 16 16">
                      <path
                          d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg></a><a href="https://www.facebook.com/NativeAmericanArtsCraftMarket" target="_blank"><svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-facebook" viewBox="0 0 16 16">
                      <path
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg></a>
          </div>
          <div class="text-center">
              <p class="copyright">NAACM © <span id="date"></span> | All Rights Reserved</p>
              <p class="copyright">
                  All photographs and other content contained on this website are expressly for
                  NAACM
                  use.
                  For permission to reproduce or distribute, contact info@naacm.com
              </p>
          </div>
      </div>
  </div>
</div>`;
}

//submits email address to google sheets
export function submitForm(e) {
  // Prevent the default form submission
  e.preventDefault();
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
      const liveToast = document.getElementById("liveToast");

      const toast = new Toast(liveToast);

      toast.show();
    })
    .catch((error) => {
      // Handle any errors that occur during the submission
      console.log("An error occurred while submitting the form:", error);
    });
}

//sets the current year in the footer
export function setCurrentYear() {
  const date = document.querySelector("#date");
  date.innerHTML = new Date().getFullYear();
}

//changes the opacity of the nav on scroll when the user scrolls past 100px
export function navOpacity() {
  if (window.scrollY > 100) {
    document.querySelector("#nav").classList.add("opacity-75");
  } else {
    document.querySelector("#nav").classList.remove("opacity-75");
  }
}

//scrolls to the footer when the sign up to newsletter button is clicked
export function newsletterButtonClick() {
  const newsButton = document.getElementById("newsButton");
  const footer = document.getElementById("footerDiv");

  newsButton.addEventListener("click", () => {
    footer.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
}

//scrolls to the top of the page when the scroll to top button is clicked, scroll button shows when user scrolls past 100px
export function scrollTop() {
  const scrollButton = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollButton.classList.remove("d-none");
    } else {
      scrollButton.classList.add("d-none");
    }
  });

  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

//adds visually hidden to newsletter button on mobile
export function newsletterButtonHide() {
  const newsButton = document.getElementById("newsButton");

  if (window.innerWidth < 990) {
    newsButton.classList.add("visually-hidden");
  }
}
