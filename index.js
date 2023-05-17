const menubtn = document.querySelector('.bx-menu');
const closeBtn = document.querySelector('.close-btn');
const sideMenu = document.querySelector('.side-menu');
const menuItems = document.querySelectorAll('.side-menu ul li');
const detailBackdrop = document.querySelector('.backdrop');
const descModal = document.querySelector('.modal');
const projectCard = document.querySelectorAll('.project-card');
const closebtn = document.querySelector('.modal-close-btn');

const openMenu = () => sideMenu.classList.add('open-side-menu');
const closeMenu = () => sideMenu.classList.remove('open-side-menu');

const showModalDesc = (card) => {
  descModal.querySelector('.modal-img').src = null;
  detailBackdrop.classList.add('open-backdrop');
  const title = card.querySelector('.project-title').textContent;
  const description = card.querySelector('.detail-description').textContent;
  const productImageSrc = card.querySelector('.project-image img').src;
  descModal.querySelector('.desc-title').textContent = title;
  descModal.querySelector('.parag').textContent = description;
  descModal.querySelector('.modal-img').src = productImageSrc;
};

const closeModalDesc = () => {
  detailBackdrop.classList.remove('open-backdrop');
};

menuItems.forEach((el) => {
  el.addEventListener('click', () => closeMenu());
});

projectCard.forEach((card) => {
  card.querySelector('.project-btn').addEventListener('click', () => showModalDesc(card));
});

menubtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => closeMenu());
closebtn.addEventListener('click', () => closeModalDesc());