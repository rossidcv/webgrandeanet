// Menú responsive //
$(document).ready(function(){
const menuToggle= document.querySelector(".menu-bars");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("menudesplegable");
  });
});

// Efecto Scroll al hacer click en menú //
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $('.navbar').addClass('scrolled');
  }
  if ($(window).scrollTop() < 100) {
    $('.navbar').removeClass('scrolled');
  }
});


