// JavaScript Document
$(document).ready(function () {
    // for portfolio 
    "use strict";
    // for mobile navigation

    $(document).on("click", ".homePage", function () {
        $('.content-container').removeClass('about-bg portfolio-bg  contact-bg').addClass('home');
    });

    $(document).on("click", ".about", function () {
        $('.content-container').removeClass('home portfolio-bg contact-bg').addClass('about-bg');
    });

    $(document).on("click", ".portfolio", function () {
        $('.content-container').removeClass('home about-bg home contact-bg').addClass('portfolio-bg');
    });

    $(document).on("click", ".contact", function () {
        $('.content-container').removeClass('about-bg portfolio-bg home').addClass('contact-bg');
    });

    $(document).on("click", ".homePage, .about, .portfolio, .contact, .contactUsNav, .aboutUsNav, .portfolioNav", function () {
        var $id = $(this).attr('data-id'),
            $div = $('#' + $id);
        $div.addClass('move-center').removeClass('move-right move-left').nextAll().addClass('move-right').removeClass('move-center move-left');
        $div.prevAll().removeClass('move-center move-right').addClass('move-left');
    });
    // for home page triangenavl efeect on body load  

    function bodyLoad() {
        $(".portfolioNav").hover(function () {
            $('.second').addClass('second-show');
        }, function () {
            $('.second').removeClass("second-show");
        });

        $(".hireMe").hover(function () {
            $('.bottom-left').addClass('bottom-left-show');
        }, function () {
            $('.bottom-left').removeClass("bottom-left-show");
        });

        $(".aboutUsNav").hover(function () {
            $('.first').addClass('first-show');
        }, function () {
            $('.first').removeClass("first-show");
        });

        $(".contactUsNav").hover(function () {
            $('.bottom-right').addClass('bottom-right-show');
        }, function () {
            $('.bottom-right').removeClass("bottom-right-show");
        });
    }

    function removebodyLoad() {
        $(".contactUsNav, .aboutUsNav, .hireMe, .portfolioNav, .first, .sixth, .fifth, .second, .bottom-left, .bottom-right").unbind();
    }
    if ($(window).width() > 1200) {
        bodyLoad();
    }
    else {
        removebodyLoad();
    }

    $(window).on("resize", function () {
        if ($(window).width() > 1200) {
            bodyLoad();
        }
        else {
            removebodyLoad();
        }
    });

});