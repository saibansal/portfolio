$(document).ready(function () {
  var o = $("#header");
  $(document).scroll(function () {
    $(window).scrollTop() ? o.addClass("sticky") : o.removeClass("sticky")
  }), $(window).scrollTop() && o.addClass("sticky")


  $('.carousel').carousel({
    interval: 1000 * 6,
    Touch: true
  });

  // $(document).on("click", ".mobiletab-menu", function () {
  //   $(this).toggleClass('active');

  // });



  $(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
  });


  $(".menuClose ").click(function () {
    $(".headerMenu").removeClass('showMenu');
  });

  $(".nv__btn").click(function () {
    $(".headerMenu").addClass('showMenu');
  });


  $('.categorySlider').slick({
    rows: 1,
    dots: false,
    arrows: true,
    slickPlay: false,
    infinite: true,
    speed: 300,
    margin: 30,
    slidesToShow: 9,
    focusOnSelect: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          rows: 1,

          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          rows: 1,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
  });



});


jQuery(document).ready(function ($) {
  $('#exhibition').slickFilterable({
    filterName: 'filter-heading',
    filter: function (category, slider, settings) {
      return $(this).hasClass(category);
    },
    slick: ({
      rows: 2,
      dots: false,
      arrows: false,
      slickPlay: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      focusOnSelect: true,
      slidesToScroll: 1,
      draggable: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            rows: 1,
            settings: "unslick",
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
    })
  });

  $('#exhibitionList').slickFilterable({
    filterName: 'filter-heading',
    filter: function (category, slider, settings) {
      return $(this).hasClass(category);
    },


    slick: ({
      rows: 1,
      dots: false,
      arrows: true,
      slickPlay: true,
      infinite: false,
      centerPadding: '20px',
      speed: 300,
      slidesToShow: 3,
      focusOnSelect: true,
      slidesToScroll: 1,
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            rows: 1,
            // settings: "unslick",
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 769,
          settings: {
            arrows: true,
            rows: 1,
            // settings: "unslick",
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
    })
  });


  var $slider = $('#exhibitionList');

  if ($slider.length) {

    var currentSlide;
    var slidesCount;
    var sliderCounter = $('div');
    sliderCounter.classList.add('slider__counter');
    $('.slick-prev').css('display', 'none');

    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + '/' + slidesCount)
    };

    $slider.on('init', function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);

      if (currentSlide + 3 == slidesCount) {
        $('.slick-next').css('display', 'none')
      }
      else {
        $('.slick-next').css('display', 'block')
      }

      if (currentSlide == 0) {
        $('.slick-prev').css('display', 'none')
      }
      else {
        $('.slick-prev').css('display', 'block')
      }
    });

    $slider.slick();
  }



  $('#popularReads').slickFilterable({
    filterName: 'filter-heading',
    filter: function (category, slider, settings) {
      return $(this).hasClass(category);
    },
    slick: ({
      rows: 2,
      dots: false,
      arrows: false,
      slickPlay: false,
      infinite: false,
      speed: 300,
      slidesToShow: 10,
      focusOnSelect: true,
      slidesToScroll: 1,
      draggable: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            settings: "unslick",
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }],
    })
  });

  $('#videosSlider').slickFilterable({
    filterName: 'filter-heading',
    filter: function (category, slider, settings) {
      return $(this).hasClass(category);
    },
    slick: ({
      rows: 1,
      dots: false,
      arrows: true,

      slickPlay: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      focusOnSelect: true,
      slidesToScroll: 1,
      draggable: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
    })
  });

  $('#featureCollection').slickFilterable({
    filterName: 'filter-heading',
    filter: function (category, slider, settings) {
      return $(this).hasClass(category);
    },
    slick: ({
      rows: 2,
      dots: false,
      arrows: false,
      slickPlay: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      focusOnSelect: true,
      slidesToScroll: 1,
      draggable: false,
      centerPadding: '40px',
      padding: '40px',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
    })
  });

  $('#newsEvents').slickFilterable({
    filterName: 'filter-heading',
    filter: function (category, slider, settings) {
      return $(this).hasClass(category);
    },
    slick: ({
      rows: 2,
      dots: false,
      arrows: false,
      slickPlay: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      focusOnSelect: true,
      slidesToScroll: 1,
      draggable: false,
      centerPadding: '40px',
      padding: '40px',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
    })
  });

  $('.metaDetaSlider').slickFilterable({
    filterName: 'filter-heading',
    filter: function (category, slider, settings) {
      return $(this).hasClass(category);
    },
    slick: ({
      rows: 1,
      dots: false,
      arrows: false,
      slickPlay: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      focusOnSelect: false,
      slidesToScroll: 1,
      draggable: false,
      centerPadding: '40px',
      padding: '40px',
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            rows: 1,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
    })
  });
  $('#list').click(function (event) {
    event.preventDefault();
    $(this).addClass('active');
    $('#grid').removeClass('active');
    $('#products .item').addClass('list-group-item');
  });

  $('#grid').click(function (event) {
    event.preventDefault();
    $('#products .item').removeClass('list-group-item');
    $('#products .item').addClass('grid-group-item');
    $(this).addClass('active');
    $('#list').removeClass('active');
  });


  var $catFilter = $('.selecCat');
  var $searchFilter = $('.frnSearch');
  $('#select-category').click(function () {
    $catFilter.slideDown();
    $searchFilter.slideUp();
    $(this).addClass('active');
    $('#refine-search').removeClass('active');
  });

  $('#refine-search').click(function () {
    $catFilter.slideUp();
    $searchFilter.slideDown();
    $(this).addClass('active');
    $('#list').removeClass('active');
  });

  $('.filterClose').click(function () {
    $('.selecCat, .frnSearch').slideUp();

  });

});

(function ($) {
  $.fn.slickFilterable = function (options) {


    var settings = $.extend({
      slideSelector: '> *',
      filterName: 'filter-slick',
      slick: {},
      beforeFilter: function () { },
      filter: function (element, category, slider, settings) { return true; },
    }, options);

    return this.each(function () {
      var slider = $(this),
        slides = slider.find(settings.slideSelector),
        slickObj;
      slickObj = slider.slick(settings.slick);
      $('[data-' + settings.filterName + ']').on('click', function (event) {

        event.preventDefault();

        var category = $(this).data(settings.filterName),
          newSlides = $.extend(true, {}, slides),
          newSlickOptions;

        var Splitarray = category.split("-");



        if (!category) return;

        // Before Filter Slides
        if (typeof settings.beforeFilter == 'function') {
          settings.beforeFilter.call(this, category, slider, slides);
        }
        slider.slick('unslick');
        if (category === 'all') {
          slider.append(newSlides);
          slider.slick(settings.slick);
          return;
        }
        if (typeof settings.filter !== 'function') {
          newSlides = newSlides.filter(settings.filter);
        } else {
          newSlides = newSlides.filter(function () {
            return settings.filter.call(this, category, slider, $.extend(true, {}, settings));
          });
        }
        slider.append(newSlides);
        slider.slick(settings.slick);
        return


      });
    });
  };
}(jQuery));

$('.slider-for').slick({
  arrows: false,
  asNavFor: '.slider-nav,.slider-x',
});
$('.slider-x').slick({
  arrows: true,
  asNavFor: '.slider-for,.slider-nav',
});
$('.slider-nav').slick({
  arrows: true,
  asNavFor: '.slider-for,.slider-x',
  centerMode: true,
  centerPadding: '10px',
  dots: false,
  focusOnSelect: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        rows: 2,

        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        rows: 1,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],
});



 