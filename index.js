/* eslint-disable */
const workData = [
  {
    headline: "Tonic",
    subtitles: ["CANOPY", "Back End Dev", 2015],
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    tags: ["html", "css", "javascript"],
    imgSrc: "assets/portfolio-1.svg",
  },
  {
    headline: "Multi-Post Stories",
    subtitles: ["FACEBOOK", "Full Stack Dev", 2015],
    description: `Experimental content creation feature that allows users to add to
    an existing story over the course of a day without spamming their
    friends.`,
    tags: ["html", "Ruby on rails", "css", "javascript"],
    imgSrc: "assets/portfolio-2.svg",
  },
  {
    headline: "Facebook 360",
    subtitles: ["FACEBOOK", "Full Stack Dev", 2015],
    description: `Exploring the future of media in Facebook's first Virtual Reality
    app; a place to discover and enjoy 360 photos and videos on Gear
    VR.`,
    tags: ["html", "Ruby on rails", "css", "javascript"],
    imgSrc: "assets/portfolio-3.svg",
  },

  {
    headline: "Uber Navigation",
    subtitles: ["Uber", "Lead Developer", 2018],
    description: `A smart assistant to make driving more safe, efficient, and fun by
    unlocking your most expensive computer: your car.`,
    tags: ["html", "Ruby on rails", "css", "javascript"],
    imgSrc: "assets/portfolio-5.svg",
  },
];

class workCard extends HTMLElement {
  connectedCallback() {
    const { i, headline, subtitles, description, tags, imgSrc } =
      this.attributes;
    const tagsArr = tags.value.split(",");
    const subtitlesArr = subtitles.value.split(",");

    const reverse = parseInt(i.value) % 2 === 0 ? "work-card-reversed" : "";

    const tagsLi = tagsArr
      .map(
        (tag) => `<li>
    <p class="work-tags">${tag}</p>
  </li>`
      )
      .join("");

    this.innerHTML = `<div class="work-card ${reverse}">
      <img alt="${headline.value}" class="work-img" src="${imgSrc.value}" />
      <div class="work-content">
        <h1 class="work-headline">${headline.value}</h1>
        <ul class="work-info disable-default">
          <li><p class="work-info-title">${subtitlesArr[0]}</p></li>
          <li class="grey-dot"></li>
          <li><p class="work-info-sub">${subtitlesArr[1]}</p></li>
          <li class="grey-dot"></li>
          <li><p class="work-info-sub">${subtitlesArr[2]}</p></li>
        </ul>
        <p class="work-description">
          ${description.value}
        </p>
        <ul class="work-tags-div disable-default">
        ${tagsLi}
        </ul>
      <button outlined class="btn work-button">See Project</button>
    </div>
  </div>`;
  }
}

customElements.define("work-card", workCard);

const main = () => {
  for (const [i, work] of workData.entries()) {
    const { headline, subtitles, description, tags, imgSrc } = work;
    const workItem = document.createElement("li");
    workItem.innerHTML = `<work-card
    headline='${headline}'
    subtitles='${subtitles}'
    description='${description}'
    tags='${tags}'
    imgSrc='${imgSrc}'
    i='${i + 1}'
    ></work-card>`;

    const workContainer = document.querySelector(".work-container");
    workContainer.appendChild(workItem);
  }
};

main();

const showMobileMenu = () => {
  const menu = document.getElementById("mobile-menu");
  menu.style.visibility = "visible";
  menu.style.height = "100%";
  menu.style.width = "100%";
};

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
        const linkHtml = document.querySelector(
          ".links-container a[href*=" + id + "]"
        );
        if (linkHtml) {
          linkHtml.classList.add("active");
        }
      });
    }
  });
};
