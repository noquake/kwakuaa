const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const screenwidth = window.screen.width;
var quote = "“ Never compromise ” Rorsharch, The Watchmen";
