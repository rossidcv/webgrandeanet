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



$(document).ready(function(){
  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 0){
      if(!flag){
        $(".navbar").css({"background-color": "#6d5497"});
        $(".navbar-nav li a").css({"color": "#fff"});
        $(".navbar-nav li a.active").css({"color": "#ABC566"});
        $(".navbar-brand h2").css({"color": "#fff"});
        $(".navbar-brand p").css({"color": "#fff"});        
        flag = true;
      }
    } 
    else{
      if(flag){
        $(".navbar").css({"background-color": "rgba(248, 248, 248, 1)"});
        $(".navbar-nav li a").css({"color": "#000"});
        $(".navbar-brand h2").css({"color": "#000"});
        $(".navbar-brand p").css({"color": "#000"});   
        flag = false;
      }
    }       
  });
});
