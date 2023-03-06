/* eslint-disable */

const showMobileMenu = () => {
  const menu = document.getElementById('mobile-menu');
  menu.style.visibility = 'visible';
  menu.style.height = '100%';
  menu.style.width = '100%';
};

const closeMobileMenu = () => {
  const menu = document.getElementById('mobile-menu');
  menu.style.height = '0';
  setTimeout(() => {
    menu.style.visibility = 'hidden';
  }, 500);
};

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.links');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
            .querySelector('.links-container a[href*=' + id + ']')
            .classList.add('active');
      });
    }
  });
};
