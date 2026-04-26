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

// Selecciona todos los inputs de tipo checkbox y los marca
var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
for (var i = 0; i < allCheckboxes.length; i++) {
    allCheckboxes[i].checked = true;
}