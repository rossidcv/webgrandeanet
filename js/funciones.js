$(document).ready(function(){
  var flag = false;
  var scroll;
    
  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 0){
      if(!flag){
        $(".navbar").css({"background-color": "#251653"});
        $(".navbar-nav li a").css({"color": "#fff"});
        $(".navbar-nav li a.active").css({"color": "#fff" , "font-weight":"600"});
        $(".navbar-brand h2").css({"color": "#fff"});
        $(".navbar-brand p").css({"color": "#fff"});        
        flag = true;
      }
    } 
    else{
      if(flag){
        $(".navbar").css({"background-color": "rgba(248, 248, 248, 1)"});
        $(".navbar-nav li a").css({"color": "#777"});
        $(".navbar-brand h2").css({"color": "#000"});
        $(".navbar-brand p").css({"color": "#000"});   
        flag = false;
      }
    }     
  });
var lastScrollTop = 0;
  $(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass('scrolled');
    }
    if ($(window).scrollTop() < 1) {
      $('.navbar').removeClass('scrolled');
    }
  });
    
  var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });

  var hamburger = document.querySelector(".hamburger");
    menu.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  }); 
});


/*SMOOTH SCROLLING*/
$(function () {
  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top - 55
      }, 500);
    }
  });  
});

//EFECTO PORCENTAJE
function loading() {
  document.querySelectorAll(".bar").forEach(function(current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;
    
    /* 
    setInterval() time sholud be set as trasition time / 100. 
    In our case, 2 seconds / 100 = 20 milliseconds. 
    */
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
          startWidth++;
          current.style.width = `${endWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
     }
  });
}

setTimeout(loading, 1000);


