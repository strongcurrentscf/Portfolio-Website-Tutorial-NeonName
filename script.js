"use strict";
const header = document.querySelector(".header");
const neonName = document.querySelector(".neon-name");
const home = document.querySelector(".home");
const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtnsEl = document.querySelector(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

neonName.addEventListener("click", function () {
  header.classList.add("hidden");
  home.classList.add("active");
  secBtnsEl.classList.add("active-btns");
});

function PageTransitions() {
  //Button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.className = currentBtn.className.replace("active-btn", "");
      this.className += " active-btn";
    });
  }

  //Section active
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove class from the other btns
      secBtns.forEach((btn) => {
        btn.classList.remove("active-btn");
      });
      e.target.classList.add("active-btn");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}
PageTransitions();
