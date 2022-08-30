$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 20,
        loop: true,
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
    $(document).on("scroll", function () {
        if
            ($(document).scrollTop() > 86) {
            $("#banner").addClass("shrink");
        }
        else {
            $("#banner").removeClass("shrink");
        }

        
        var value = $(window).height() + $(window).scrollTop();
        var elementTop = $('footer').offset().top;

        if (value >= elementTop) {
            $('.audio-player').removeClass('playerFixed');
        }
        else if (value < elementTop) {
            $('.audio-player').addClass('playerFixed');
        }
    });

    var $cat = $('.categories-filter ul li a');
    var $catli = $('.categories-filter ul li');
    $cat.on('click', function () {
        $catli.prevAll().removeClass('active')
        $(this).parent().addClass('active');
    });
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
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
    
    var cookie = false;
    var cookieContent = $('.cookie-disclaimer');

    checkCookie();

    if (cookie === true) {
      cookieContent.hide();
    }

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
      }
      return "";
    }

    function checkCookie() {
      var check = getCookie("acookie");
      if (check !== "") {
        return cookie = true;
      } else {
          return cookie = false; //setCookie("acookie", "accepted", 365);
      }
      
    }
    $('.accept-cookie').click(function () {
      setCookie("acookie", "accepted", 365);
      cookieContent.hide(500);
    });
    
});