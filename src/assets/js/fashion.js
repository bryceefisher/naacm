import { setNavElems, setFooter, setCurrentYear, navOpacity, newsletterButtonClick, scrollTop, newsletterButtonHide } from './general.js';

class Fashion {
  constructor() {
    setNavElems();
    setFooter();
    setCurrentYear();
    newsletterButtonHide();
    newsletterButtonClick();
    scrollTop();
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener("scroll", navOpacity);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname.includes("fashion") ||
    window.location.pathname == "fashion.html"
  )
    new Fashion();
});
