import { Toast } from "bootstrap";
import { setNavElems } from "./general";
import { setFooter } from "./general";
import { submitForm } from "./general";
import { navOpacity } from "./general";
import { setCurrentYear } from "./general";
import { newsletterButtonClick } from "./general";
import { scrollTop } from "./general";
import { newsletterButtonHide } from "./general";

class Home {
  constructor() {
    setNavElems();
    newsletterButtonHide();
    setFooter();
    this.togglePhotos();
    this.addEventListeners();
    setCurrentYear();
    newsletterButtonClick();
    scrollTop();
  }

  // Removes 4 photos from the gallery on mobile
  togglePhotos() {
    const img2 = document.querySelector("#img2");
    const img4 = document.querySelector("#img4");
    const img6 = document.querySelector("#img6");
    const img8 = document.querySelector("#img8");

    if (window.innerWidth < 768) {
      img2.classList.add("visually-hidden");
      img4.classList.add("visually-hidden");
      img6.classList.add("visually-hidden");
      img8.classList.add("visually-hidden");
    } else {
      img2.classList.remove("visually-hidden");
      img4.classList.remove("visually-hidden");
      img6.classList.remove("visually-hidden");
      img8.classList.remove("visually-hidden");
    }
  }



  // Opens the about page when the about div is clicked
  aboutNav() {
    window.open("about.html", "_self");
  }

  // Opens the vendors page when the vendors div is clicked
  vendorNav() {
    window.open("vendors.html", "_self");
  }
  // Opens the contact page when the contact div is clicked
  contactNav() {
    window.open("contact.html", "_self");
  }

  // Adds event listeners to the DOM
  addEventListeners() {
    const about = document.getElementById("info");
    const vendors = document.getElementById("info2");
    const contact = document.getElementById("info3");

    window.addEventListener("resize", this.togglePhotos);
    window.addEventListener("resize", setNavElems);
    window.addEventListener("submit", submitForm);
    window.addEventListener("scroll", navOpacity);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 990) {
        newsButton.classList.add("visually-hidden");
      } else {
        newsButton.classList.remove("visually-hidden");
      }
    });
    about.addEventListener("click", this.aboutNav);
    vendors.addEventListener("click", this.vendorNav);
    contact.addEventListener("click", this.contactNav);
  }
}

// instantiate the class if the page is the home page
window.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname == "/" ||
    window.location.pathname == "/index.html" ||
    window.location.pathname == "index.html" ||
    window.location.pathname.includes("index.html") ||
    window.location.pathname.includes("home")
  )
    new Home();
});

// EVENT POPUP
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById('valentinesPopup');
  if (popup) {
      popup.style.display = 'flex'; // Make the popup visible

      // Hide the popup after 7 seconds
      setTimeout(() => {
          popup.style.display = 'none';
      }, 7000);
  }

  // Optional: Close button functionality
  const closeButton = document.getElementById('closePopup');
  closeButton?.addEventListener('click', () => {
      popup.style.display = 'none';
  });
});
