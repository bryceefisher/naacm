import { setNavElems } from "./general";
import { setFooter } from "./general";
import { submitForm } from "./general";
import { navOpacity } from "./general";
import { setCurrentYear } from "./general";
import { newsletterButtonClick } from "./general";
import { scrollTop } from "./general";
import { newsletterButtonHide } from "./general";

class About {
  constructor() {
    setNavElems();
    setFooter();
    setCurrentYear();
    newsletterButtonHide();
    newsletterButtonClick();
    scrollTop();
    this.resizeYouTubeIframe();

    // this.handleUpperDivResize();

    this.addEventListeners();
    // this.handleLowerDivResize();
  }

  // // resize the upper div on the about page by adding and removing bs classes
  // handleUpperDivResize() {
  //   const upperDiv = document.getElementById("aboutUpperDiv");
  //   const aboutDiv = document.getElementById("aboutInnerDiv");
  //   const aboutLowerDiv = document.getElementById("aboutUpperLowerDiv");
  //   const HR = document.getElementById("aboutHR");
  //   if (window.innerWidth < 990) {
  //     upperDiv.classList.remove("flex-row");
  //     upperDiv.classList.add("flex-column");
  //     aboutDiv.classList.add("text-center");
  //     aboutDiv.classList.remove("col-6");
  //     aboutLowerDiv.classList.add("text-center");
  //     aboutLowerDiv.classList.remove("col-6");
  //     upperDiv.classList.remove("pb-5");
  //     aboutLowerDiv.classList.remove("p-5");
  //     HR.classList.remove("m-5");
  //   } else {
  //     upperDiv.classList.add("flex-row");
  //     upperDiv.classList.remove("flex-column");
  //     aboutDiv.classList.remove("text-center");
  //     aboutDiv.classList.add("col-6");
  //     aboutLowerDiv.classList.remove("text-center");
  //     aboutLowerDiv.classList.add("col-6");
  //     upperDiv.classList.add("pt-5");
  //     aboutLowerDiv.classList.add("pt-5");
  //   }
  // }

  //resize the youtube iframe on the about page

  resizeYouTubeIframe() {
    const iframe = document.querySelector(".youtube-iframe"); // Add a class to your iframe for easy selection

    if (iframe) {
      // Adjust the iframe width and height based on the window width
      const windowWidth = window.innerWidth;

      if (windowWidth < 320) {
        iframe.width = 240;
        iframe.height = 135;
      } else if (windowWidth < 400) {
        iframe.width = 300;
        iframe.height = 169;
      } else if (windowWidth < 560) {
        iframe.width = 420;
        iframe.height = 236;
      } else if (windowWidth < 768) {
        iframe.width = 560;
        iframe.height = 315;
      } else if (windowWidth < 992) {
        iframe.width = 720;
        iframe.height = 405;
      } else if (windowWidth < 1200) {
        iframe.width = 840;
        iframe.height = 472;
      } else {
        iframe.width = 960; // Default width for larger screens
        iframe.height = 540; // Default height for larger screens
      }
    }
  }

  // resize the lower div on the about page by adding and removing bs classes
  // handleLowerDivResize() {
  //   const upperDiv = document.getElementById("aboutLowerDiv");
  //   const aboutDiv = document.getElementById("aboutLowerInnerDiv");
  //   const aboutLowerDiv = document.getElementById("aboutLowerLowerDiv");
  //   if (window.innerWidth < 990) {
  //     upperDiv.classList.remove("flex-row");
  //     upperDiv.classList.add("flex-column");
  //     aboutDiv.classList.add("text-center");
  //     aboutDiv.classList.remove("col-6");
  //     aboutLowerDiv.classList.add("text-center");
  //     aboutLowerDiv.classList.remove("col-6");
  //     aboutLowerDiv.classList.remove("d-flex");
  //     aboutLowerDiv.classList.remove("flex-row-reverse");
  //   } else {
  //     upperDiv.classList.add("flex-row");
  //     upperDiv.classList.remove("flex-column");
  //     aboutDiv.classList.remove("text-center");
  //     aboutDiv.classList.add("col-6");
  //     aboutLowerDiv.classList.remove("text-center");
  //     aboutLowerDiv.classList.add("col-6");
  //     aboutLowerDiv.classList.add("d-flex");
  //     aboutLowerDiv.classList.add("flex-row-reverse");
  //   }
  // }

  //add event listeners

  addEventListeners() {
    window.addEventListener("resize", () => {
      console.log("Resize event for setNavElems");
      setNavElems();
    });

    // window.addEventListener("resize", () => {
    //   console.log("Resize event for handleUpperDivResize");
    //   this.handleUpperDivResize();
    // });

    // window.addEventListener("resize", () => {
    //   console.log("Resize event for handleLowerDivResize");
    //   this.handleLowerDivResize();
    // });
    window.addEventListener("resize", () => this.resizeYouTubeIframe());
    window.addEventListener("submit", submitForm);
    window.addEventListener("scroll", navOpacity);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 990) {
        newsButton.classList.add("visually-hidden");
      } else {
        newsButton.classList.remove("visually-hidden");
      }
    });
  }
}

//create new instance of About class if on the about page
window.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname.includes("about") ||
    window.location.pathname == "about"
  )
    new About();
});
