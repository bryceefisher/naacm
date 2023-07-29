import { setNavElems } from "./general";
import { setFooter } from "./general";

class Home {
  constructor() {
    setNavElems();
    setFooter();
    this.togglePhotos();
    this.addEventListeners();
    this.setCurrentYear();
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
    window.addEventListener("resize", this.togglePhotos);
    window.addEventListener("resize", setNavElems);
    window.addEventListener("submit", this.submitForm);
    window.addEventListener("scroll", this.navOpacity);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname == "/" ||
    window.location.pathname == "/index.html" ||
    window.location.pathname == "index.html" ||
    window.location.pathname.includes("index.html")
  )
    new Home();
});
