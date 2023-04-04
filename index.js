/* eslint-disable */

/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

const workData = [
  {
    headline: 'JMF Chess',
    subtitles: ['MICROVERSE', 'Front End', 2023],
    description: `A website for an international Chess tournament 
    hosted in Addis Ababa, Ethiopia`,
    tags: ['html', 'css', 'javascript', 'bootstrap', 'sass'],
    imgSrc: 'assets/jmf-chess.png',
    sourceLink: 'https://github.com/abel-tefera/html-css-capstone',
    demoLink: 'https://abel-tefera.github.io/html-css-capstone/',
  },
  {
    headline: 'Merkato E-commerce',
    subtitles: ['SELF', 'Full Stack', 2021],
    description: `A complete E-commerce app integrated to PayPal sandbox. Built on the 
    MERN stack`,
    tags: ['MERN stack', 'Mongo DB', 'Express.js', 'React', 'Node Js', 'paypal', 'render.com'],
    imgSrc: 'assets/market.png',
    sourceLink: 'https://github.com/abel-tefera/React-Shop',
    demoLink: 'https://merkato-market.onrender.com/',
  },
  {
    headline: 'To-Do List',
    subtitles: ['Microverse', 'Front End', 2023],
    description: `A simple to-do list app with CRUD (local storage), bundled with webpack.`,
    tags: [
      'html',
      'css',
      'javascript',
      'webpack',
    ],
    imgSrc: 'assets/To-Do.png',
    sourceLink: 'https://github.com/abel-tefera/to-do-list',
    demoLink: 'https://abel-tefera.github.io/to-do-list/dist/',
  },
  {
    headline: 'Uber Navigation',
    subtitles: ['Uber', 'Lead Developer', 2018],
    description: `A smart assistant to make driving more safe, efficient, and 
    fun by unlocking your most expensive computer: your car.`,
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    imgSrc: 'assets/portfolio-5.svg',
    sourceLink: 'https://github.com/abel-tefera/portfolio',
    demoLink: 'https://abel-tefera.github.io/',
  },
];

const modal = document.querySelector('.modal');

const modalOverlay = document.querySelector('.modal-overlay');

modal.classList.remove('display-none');
modalOverlay.classList.remove('display-none');

const workModalMarkup = (id) => {
  const work = workData[id];

  const {
    headline,
    subtitles,
    description,
    tags,
    imgSrc,
    sourceLink,
    demoLink,
  } = work;

  return `<work-modal
  headline='${headline}'
  subtitles='${subtitles}'
  description='${description}'
  tags='${tags}'
  imgSrc='${imgSrc}'
  sourceLink='${sourceLink}'
  demoLink='${demoLink}'
  i='${id}'
  ></work-modal>`;
};

let currentIdx = 0;

const openModal = (id) => {
  const workModal = document.createElement('div');
  workModal.setAttribute('id', 'work-modal');

  workModal.innerHTML = workModalMarkup(id);

  const modalContainer = document.querySelector('.modal');
  modalContainer.appendChild(workModal);

  modal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');

  modal.classList.add('open-modal');
  modalOverlay.classList.add('open-modal');

  currentIdx = id;

  document.body.style.overflow = 'hidden';
};

const closeModal = function() {
  const modalContainer = document.querySelector('.modal');

  modal.classList.remove('open-modal');
  modalOverlay.classList.remove('open-modal');

  setTimeout(() => (modalContainer.innerHTML = ''), 500);

  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');

  document.body.style.overflow = 'scroll';
};

modalOverlay.addEventListener('click', closeModal);

const projectPrev = (idx = currentIdx) => {
  const index = parseInt(idx);

  if (index === 0) {
    return;
  }

  const prevBtn = document.querySelector('#modal-prev');
  const nextBtn = document.querySelector('#modal-prev');

  if (index == 1) {
    prevBtn.disabled = true;
  }

  const workModal = document.getElementById('work-modal');
  workModal.innerHTML = workModalMarkup(index - 1);

  if (nextBtn.disabled === true) {
    nextBtn.disabled = false;
  }

  currentIdx = index - 1;
};

const projectNext = (idx = currentIdx) => {
  const index = parseInt(idx);

  if (index === workData.length - 1) {
    return;
  }

  const prevBtn = document.querySelector('#modal-prev');
  const nextBtn = document.querySelector('#modal-prev');

  if (index == workData.length - 2) {
    nextBtn.disabled = true;
  }

  const workModal = document.getElementById('work-modal');
  workModal.innerHTML = workModalMarkup(index + 1);

  if (prevBtn.disabled === true) {
    prevBtn.disabled = false;
  }

  currentIdx = index + 1;
};

class workCard extends HTMLElement {
  connectedCallback() {
    const {i, headline, subtitles, description, tags, imgSrc} =
      this.attributes;
    const tagsArr = tags.value.split(',');
    const subtitlesArr = subtitles.value.split(',');
    const id = parseInt(i.value);

    const reverse = id % 2 === 0 ? '' : 'work-card-reversed';

    const tagsLi = tagsArr
        .map(
            (tag) => `<li>
    <p class="work-tags">${tag}</p>
  </li>`,
        )
        .join('');

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
      <button outlined class="btn work-button" onclick="openModal(${id})">
      See Project</button>
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

    const tagsArr = tags.value.split(',');
    const subtitlesArr = subtitles.value.split(',');
    const id = parseInt(i.value);

    const tagsLi = tagsArr
        .map(
            (tag) => `<li>
    <p class="work-tags">${tag}</p>
  </li>`,
        )
        .join('');

    this.innerHTML = `<div class="modal-content">
    <div class="modal-headline">
    <h1>${headline.value}</h1>
    <a href="javascript:void(0)" class="closebtn-modal" onclick="closeModal()"
    >&times;</a>
    </div>
    <ul class="work-info disable-default">
      <li><p class="work-info-title work-info-title-modal">
      ${subtitlesArr[0]}</p></li>
      <li class="grey-dot"></li>
      <li>
        <p class="work-info-sub work-info-sub-modal">
        ${subtitlesArr[1]}</p>
      </li>
      <li class="grey-dot"></li>
      <li><p class="work-info-sub work-info-sub-modal">
      ${subtitlesArr[2]}</p></li>
    </ul>
    <div class="modal-div-flex">
      <button class="circle-btn" id="modal-prev" onclick="projectPrev(${id})">
      <img class="modal-icon" src="assets/drop-icon-down.svg" /></button>
      <img
        alt="${headline.value}"
        class="modal-img"
        src="${imgSrc.value}"
      />
      <button class="circle-btn" id="modal-next" onclick="projectNext(${id})">
      <img class="modal-icon" src="assets/drop-icon-down.svg" /></button>
    </div>
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
          <a class="btn modal-btn" href="${demoLink.value}" target="_blank">
          <span>See Live <img src="assets/live.svg" 
          class="modal-button-img"/></span>
          </a>
          <a class="btn modal-btn" href="${sourceLink.value}" target="_blank">
          <span>See Source <img src="assets/github-2.svg" 
          class="modal-button-img"/>
          </span></a>
        </div>
      </div>
    </div>
  </div>`;
  }
}

customElements.define('work-card', workCard);
customElements.define('work-modal', workModal);

const main = () => {
  for (const [i, work] of workData.entries()) {
    const {headline, subtitles, description, tags, imgSrc} = work;
    const workItem = document.createElement('li');
    workItem.innerHTML = `<work-card
    headline='${headline}'
    subtitles='${subtitles}'
    description='${description}'
    tags='${tags}'
    imgSrc='${imgSrc}'
    i='${i}'
    ></work-card>`;

    const workContainer = document.querySelector('.work-container');
    workContainer.appendChild(workItem);
  }

  const contactData = localStorage.getItem('contact-data');

  if (contactData) {
    const {name, email, message} = JSON.parse(contactData);
    const inputName = document.getElementById('input-name');
    const inputEmail = document.getElementById('input-email');
    const inputMessage = document.getElementById('input-message');

    inputName.value = name;
    inputEmail.value = email;
    inputMessage.value = message;
  }
};

const saveToLocalStorage = () => {
  const inputName = document.getElementById('input-name').value;
  const inputEmail = document.getElementById('input-email').value;
  const inputMessage = document.getElementById('input-message').value;

  const contactObj = {
    name: inputName,
    email: inputEmail,
    message: inputMessage,
  };
  localStorage.setItem('contact-data', JSON.stringify(contactObj));
};

main();

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

const accordionEL = document.querySelectorAll('.accordion');
const panels = document.querySelectorAll('.panel');
const defaultAccordion = document.querySelector('.accordion-default');

const rotateArrowRight = (icon) => {
  icon[0].classList.add('accordion-icon-open');
};

const rotateArrowUp = (icon) => {
  icon[0].classList.remove('accordion-icon-open');
};

const handleAccordion = (accordion) => {
  const sibling = accordion.nextElementSibling;
  const icon = accordion.getElementsByTagName('img');

  accordionEL.forEach((acc) => {
    const otherIcon = acc.getElementsByTagName('img');

    if (acc !== accordion) {
      rotateArrowUp(otherIcon);
    }
  });

  panels.forEach((panel) => {
    if (panel == sibling) {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        rotateArrowUp(icon);
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        rotateArrowRight(icon);
      }
    } else {
      panel.style.maxHeight = null;
    }
  });
};

accordionEL.forEach((acc) => {
  if (acc == defaultAccordion) {
    const sibling = acc.nextElementSibling;
    const icon = acc.getElementsByTagName('img');
    rotateArrowRight(icon);
    sibling.style.maxHeight = sibling.scrollHeight + 'px';
  }

  acc.addEventListener('click', () => {
    handleAccordion(acc);
  });
});

const openMenu = document.getElementById('open-menu');
openMenu.addEventListener('click', showMobileMenu);

const closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', closeMobileMenu);

const formValidation = (input) => {
  if (input.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  return false;
};

const form = document.querySelector('.contact-form');
const email = document.querySelector('.contact-email');
const error = document.querySelector('.contact-error');

form.addEventListener('submit', (e) => {
  if (formValidation(email.value)) {
    error.textContent = '';
    localStorage.removeItem('contact-data');
  } else {
    e.preventDefault();
    error.textContent = 'Email should be in lowerCase';
    setTimeout(() => {
      error.textContent = '';
    }, 3000);
  }
});

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
        const targetLink = document.querySelector(
            '.links-container a[href*=' + id + ']',
        );
        if (targetLink) {
          targetLink.classList.add('active');
        }
      });
    }
  });
};

document.addEventListener(
    'keydown',
    (e) => {
      const code = e.code;

      const modal = document.querySelector('.modal-content');
      if (modal) {
        if (code == 'ArrowLeft') {
          projectPrev();
        } else if (code == 'ArrowRight') {
          projectNext();
        } else if (code == 'Escape') {
          closeModal();
        }
      }
    },
    false,
);
