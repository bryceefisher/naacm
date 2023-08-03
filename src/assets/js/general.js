// Bootstrap 5 import
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// CSS imports)
import "/src/assets/css/home.css";
import "/src/assets/css/contact.css";
import "/src/assets/css/about.css";
import "/src/assets/css/vendors.css";
//js imports
import "/src/assets/js/home.js";
import "/src/assets/js/contact.js";
import "/src/assets/js/about.js";
import "/src/assets/js/vendors.js";

// Prevent FOUC
import "/src/assets/css/unhide.css";

//Export functions

//Dynamically set the nav in all html files
export function setNavElems() {
  const nav = document.querySelector("#nav");

  if (window.innerWidth < 992) {
    nav.innerHTML = `
    <div class="container-fluid mt-2" >
                <a class="navbar-brand  mx-3 pt-1" href="/">
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
              <li class="nav-item" id="navContact">
                  <a class="nav-link" href="contact.html">Contact</a>
              </li>
          </ul>
    
          <hr>
          <button class="btn btn-outline-success" type="submit">Donate</button>
      </div>
      </div>`;
  } else {
    nav.innerHTML = `
    <div class="container-fluid mt-2" >
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
              <li class="nav-item" id="navContact">
                  <a class="nav-link" href="contact.html">Contact</a>
              </li>
          </ul>
          <button class="btn btn-outline-success" type="submit">Donate</button>
      </div>
      </div>`;
  }
}

//Dynamically set the footer in all html files
export function setFooter() {
  const footer = document.getElementById("footer");

  footer.innerHTML = `<div class="container">
  <div class="row align-items-center justify-content-center">
      <div class="d-flex text-center col-sm-12 col-md-8 col-lg-6 p-3 flex-column row" id="contactDiv">
          <h3>Stay in Touch!</h3>
          <h5>Sign up for our the NAACM newsletter.</h5>
          <form id="form">
              <div class="form-group text-center mt-2" id="form">
                  <label for="email">
                      <h5>Email:</h5>
                  </label>
                  <input type="email" class="form-control" name="email" id="email"
                      placeholder="Enter email" required />
              </div>
              <div class="text-center mt-3">
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
                  </svg></a><a href="https://snapchat.com" target="_blank"><svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-snapchat" viewBox="0 0 16 16">
                      <path
                          d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z" />
                  </svg></a><a href="https://twitter.com" target="_blank"><svg
                      xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-twitter" viewBox="0 0 16 16">
                      <path
                          d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg></a><a href="https://facebook.com" target="_blank"><svg
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
      alert("Thank you for subscribing!");
    })
    .catch((error) => {
      // Handle any errors that occur during the submission
      console.log("An error occurred while submitting the form:", error);
    });
}

export function setCurrentYear() {
  const date = document.querySelector("#date");
  date.innerHTML = new Date().getFullYear();
}

export function navOpacity() {
  if (window.scrollY > 100) {
    document.querySelector("#nav").classList.add("opacity-75");
  } else {
    document.querySelector("#nav").classList.remove("opacity-75");
  }
}
