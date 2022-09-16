jQuery(document).ready(function () {
    var o = jQuery("#header");
    jQuery(document).scroll(function () {
        jQuery(window).scrollTop() ? o.addClass("sticky") : o.removeClass("sticky")
    }), jQuery(window).scrollTop() && o.addClass("sticky")

    jQuery(".categorySlider").owlCarousel({
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 60,
        dots: false,
        items: 9,
        lazyLoad: false,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            575: {
                items: 2,
                margin: 20,
            },
            768: {
                items: 4.4,
                margin: 30,
            },
            992: {
                items: 7.5,
                margin: 50,
            },
            1200: {
                items: 7,
            },
            1500: {
                items: 9,
            }
        }
    });

    jQuery(".videosSlider").owlCarousel({
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 10,
        dots: false,
        items: 5.3,
        lazyLoad: false,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2.25,
            },
            768: {
                items: 2.2,
            },
            992: {
                items: 3.25,
            },
            1024: {
                items: 3.22,
            },
            1366: {
                items: 5.2,
            },
            1900: {
                items: 5.2,
            },
        }
    });

    jQuery('.carousel').carousel({
        interval: 1000 * 6
    });

    jQuery(".latest-exhibition").click(function () {
        var value = jQuery(this).attr('role');

        if (value == "All") {
            jQuery('.all').addClass('block');
        }
        else {
            jQuery(".all").not('.' + value).removeClass('d-block').addClass('d-none');
            jQuery('.all').filter('.' + value).removeClass('d-none').addClass('d-block');

        }
    });

    jQuery(".popularReads").click(function () {
        var value = jQuery(this).attr('role');

        if (value == "readsAll") {
            jQuery('.readsAll').addClass('d-block');
        }
        else {
            jQuery(".readsAll").not('.' + value).removeClass('d-block').addClass('d-none');
            jQuery('.readsAll').filter('.' + value).removeClass('d-none').addClass('d-block');
        }
    });

    jQuery(".newsEventsSection").click(function () {
        var value = jQuery(this).attr('role');

        if (value == "EventsAll") {
            jQuery('.events-all').addClass('d-block');
        }
        else {
            jQuery(".events-all").not('.' + value).removeClass('d-block').addClass('d-none');
            jQuery('.events-all').filter('.' + value).removeClass('d-none').addClass('d-block');
        }
    });


    jQuery(".menuClose ").click(function () {
        jQuery(".headerMenu").removeClass('showMenu');
    });

    jQuery(".nv__btn").click(function () {
        jQuery(".headerMenu").addClass('showMenu');
    });
});







// jQuery(document).ready(function () {
//     if (jQuery(window).width() < 854) {
//         startCarousel();
//     } else {
//         $('.owl-carousel').owlCarousel('destroy');
//         $('.prdt_category').removeClass("owl-carousel");
//     }
// });

// jQuery(window).resize(function () {
//     var width = jQuery(window).width();
//     if (jQuery(window).width() < 854) {
//         alert(width);
//         startCarousel();
//     } else {
//         $('.owl-carousel').owlCarousel('destroy');
//         $('.prdt_category').removeClass("owl-carousel");
//     }
// });

// function startCarousel() {
//     jQuery(".videosSlider").owlCarousel({
//         navigation: true,
//         slideSpeed: 500,
//         margin: 10,
//         paginationSpeed: 400,
//         autoplay: true,
//         items: 1,
//         itemsDesktop: false,
//         itemsDesktopSmall: false,
//         itemsTablet: false,
//         itemsMobile: false,
//         loop: true,
//         nav: true,
//         navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
//     });
// }
// function stopCarousel() {
//     var owl = jQuery('.owl-carousel');
//     owl.trigger('destroy.owl.carousel');
//     owl.addClass('off');
// }