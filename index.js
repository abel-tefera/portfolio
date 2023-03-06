/* eslint-disable */

const closeMobileMenu = () => {
  const menu = document.getElementById("mobile-menu");
  menu.style.height = "0";
  setTimeout(() => {
    menu.style.visibility = "hidden";
  }, 500);
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".links");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".links-container a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
