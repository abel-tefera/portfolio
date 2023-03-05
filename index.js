/* eslint-disable */
const workData = [
  {
    headline: "Tonic",
    subtitles: ["CANOPY", "Back End Dev", 2015],
    description: `A daily selection of privately personalized reads; no accounts or
    sign-ups required.`,
    tags: ["html", "css", "javascript"],
    imgSrc: "assets/portfolio-1.svg",
    sourceLink: "https://github.com/abel-tefera/portfolio",
    demoLink: "https://abel-tefera.github.io/",
  },
  {
    headline: "Multi-Post Stories",
    subtitles: ["FACEBOOK", "Full Stack Dev", 2015],
    description: `Experimental content creation feature that allows users to add to
    an existing story over the course of a day without spamming their
    friends.`,
    tags: ["html", "Ruby on rails", "css", "javascript"],
    imgSrc: "assets/portfolio-2.svg",
    sourceLink: "https://github.com/abel-tefera/portfolio",
    demoLink: "https://abel-tefera.github.io/",
  },
  {
    headline: "Facebook 360",
    subtitles: ["FACEBOOK", "Full Stack Dev", 2015],
    description: `Exploring the future of media in Facebook's first Virtual Reality
    app; a place to discover and enjoy 360 photos and videos on Gear
    VR.`,
    tags: [
      "html",
      "Ruby on rails",
      "css",
      "javascript",
      "c#",
      "c",
      "python",
      "react",
      "ionic",
      "flutter",
      "django",
      "node.js",
    ],
    imgSrc: "assets/portfolio-3.svg",
    sourceLink: "https://github.com/abel-tefera/portfolio",
    demoLink: "https://abel-tefera.github.io/",
  },

  {
    headline: "Uber Navigation",
    subtitles: ["Uber", "Lead Developer", 2018],
    description: `A smart assistant to make driving more safe, efficient, and fun by
    unlocking your most expensive computer: your car.`,
    tags: ["html", "Ruby on rails", "css", "javascript"],
    imgSrc: "assets/portfolio-5.svg",
    sourceLink: "https://github.com/abel-tefera/portfolio",
    demoLink: "https://abel-tefera.github.io/",
  },
];

const modal = document.querySelector(".modal");

const modalOverlay = document.querySelector(".modal-overlay");

modal.classList.remove("display-none");
modalOverlay.classList.remove("display-none");

const openModal = (id) => {
  const work = workData[id - 1];
  const {
    headline,
    subtitles,
    description,
    tags,
    imgSrc,
    sourceLink,
    demoLink,
  } = work;

  const workModal = document.createElement("div");

  const modalContainer = document.querySelector(".modal");
  modalContainer.appendChild(workModal);

  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");

  modal.classList.add("open-modal");
  modalOverlay.classList.add("open-modal");

  document.body.style.overflow = "hidden";
};

const closeModal = function () {
  const modalContainer = document.querySelector(".modal");

  modal.classList.remove("open-modal");
  modalOverlay.classList.remove("open-modal");

  setTimeout(() => (modalContainer.innerHTML = ""), 500);

  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");

  document.body.style.overflow = "scroll";
};

modalOverlay.addEventListener("click", closeModal);

class workCard extends HTMLElement {
  connectedCallback() {
    const { i, headline, subtitles, description, tags, imgSrc } =
      this.attributes;
    const tagsArr = tags.value.split(",");
    const subtitlesArr = subtitles.value.split(",");
    const id = parseInt(i.value);

    const reverse = id % 2 === 0 ? "work-card-reversed" : "";

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
      <button outlined class="btn work-button" onclick="openModal(${id})">See Project</button>
    </div>
  </div>`;
  }
}

class workModal extends HTMLElement {
  connectedCallback() {
    const {
      i,
      headline,
      subtitles,
      description,
      tags,
      imgSrc,
      sourceLink,
      demoLink,
    } = this.attributes;

    const tagsArr = tags.value.split(",");
    const subtitlesArr = subtitles.value.split(",");
    const id = parseInt(i.value);

    const tagsLi = tagsArr
      .map(
        (tag) => `<li>
    <p class="work-tags">${tag}</p>
  </li>`
      )
      .join("");

    this.innerHTML = `<div class="modal-content">
    <div class="modal-headline">
    <h1>${headline.value}</h1>
    <a href="javascript:void(0)" class="closebtn-modal" onclick="closeModal()"
    >&times;</a>
    </div>
    <ul class="work-info disable-default">
      <li><p class="work-info-title work-info-title-modal">${subtitlesArr[0]}</p></li>
      <li class="grey-dot"></li>
      <li>
        <p class="work-info-sub work-info-sub-modal">${subtitlesArr[1]}</p>
      </li>
      <li class="grey-dot"></li>
      <li><p class="work-info-sub work-info-sub-modal">${subtitlesArr[2]}</p></li>
    </ul>
    <img
      alt="${headline.value}"
      class="modal-img"
      src="${imgSrc.value}"
    />
    <div class="modal-div-content">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sunt
        fugiat illum adipisci harum consequatur cupiditate quod, nisi nam
        iusto suscipit, modi voluptatum totam. Iusto placeat perferendis
        corporis perspiciatis deserunt?
      </p>
      <div class="modal-right">
        <ul class="work-tags-div disable-default">
          ${tagsLi}
        </ul>
        <hr />
        <div class="modal-buttons">
          <a class="btn modal-btn" href="${demoLink.value}"><span>See Live <img src="assets/live.svg" class="modal-button-img"/></span></a>
          <a class="btn modal-btn" href="${sourceLink.value}"><span>See Source <img src="assets/github-2.svg" class="modal-button-img"/></span></a>
        </div>
      </div>
    </div>
  </div>`;
  }
}

customElements.define("work-card", workCard);
customElements.define("work-modal", workModal);

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

const accordionEL = document.querySelectorAll(".accordion");
const panels = document.querySelectorAll(".panel");

const handleAccordion = (accordion) => {
  const sibling = accordion.nextElementSibling;

  panels.forEach((panel) => {
    if (panel == sibling) {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    } else {
      panel.style.maxHeight = null;
    }
  });
};

accordionEL.forEach((acc) => {
  acc.addEventListener("click", () => {
    console.log("CLICKED");
    handleAccordion(acc);
  });
});

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
