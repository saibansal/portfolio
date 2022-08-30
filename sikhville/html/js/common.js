$(document).ready(function () {
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  var o = $("#header");
  $(document).scroll(function () {
    $(window).scrollTop() ? o.addClass("sticky") : o.removeClass("sticky")
  }), $(window).scrollTop() && o.addClass("sticky")

  $('.carousel').carousel({
    interval: 1000 * 6,
    Touch: false
  });



  $(function(){
    // Bind the swipeleftHandler callback function to the swipe event on div.box
    $( "div" ).on( "swipeleft", swipeleftHandler );
   
    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler( event ){
      $( event.target ).addClass( "swipeleft" );
    }
  });


  $(".menuClose ").click(function () {
    $(".headerMenu").removeClass('showMenu');
  });

  $(".nv__btn").click(function () {
    $(".headerMenu").addClass('showMenu');
  });


  // document.getElementsByTagName("body")[4].className += " js";
  AOS.init();
  AOS.init({
    disable: false,
    disable: 'phone',
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });

});