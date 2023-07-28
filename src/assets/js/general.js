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

import "/src/assets/css/unhide.css";

function setNavElems() {
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
                  <a class="nav-link" href="vendors.html">Vendors</a>
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
                  <a class="nav-link" href="vendors.html">Vendors</a>
              </li>
              <li class="nav-item" id="navContact">
                  <a class="nav-link" href="contact.html">Contact</a>
              </li>
          </ul>
          <button class="btn btn-outline-success" type="submit">Donate</button>
      </div>`;
  }
}

export default setNavElems;
