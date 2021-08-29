const burger = document.querySelector(".header__body-burger");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", onButtonClick);

function onButtonClick(e) {
  burger.classList.toggle("header__body-burger--close-on-mobile");
  burger.classList.toggle("header__body-burger--open-on-mobile");
  nav.classList.toggle("header__nav--close-on-mobile");
  nav.classList.toggle("header__nav--open-on-mobile");
}

function initMenu() {
  burger.classList.add("header__body-burger--close-on-mobile");
  nav.classList.add("header__nav--close-on-mobile");
}

initMenu();