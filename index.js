const menubtn = document.querySelector('.bx-menu');
const closeBtn = document.querySelector('.close-btn');
const sideMenu = document.querySelector('.side-menu');
const menuItems = document.querySelectorAll('.side-menu ul li');
const openMenu = () => sideMenu.classList.add('open-side-menu');
const closeMenu = () => sideMenu.classList.remove('open-side-menu');
menuItems.forEach((el) => {
  el.addEventListener('click', () => closeMenu());
});
menubtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => closeMenu());