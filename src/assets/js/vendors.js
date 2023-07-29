import { setNavElems } from "./general";
import { setFooter } from "./general";

class Vendors {
  constructor() {
    setNavElems();
    setFooter();
    this.addEventListeners();
    this.setCurrentYear();
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
    window.addEventListener("resize", setNavElems);
    window.addEventListener("submit", this.submitForm);
    window.addEventListener("scroll", this.navOpacity);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("vendors.html")) new Vendors();
});
