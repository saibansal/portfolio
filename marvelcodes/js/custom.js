// JavaScript Document
$(document).ready(function () { 
	// for portfolio 
	"use strict"; 
	// for mobile navigation
	$(' .hamburger-icon').click(function () {
		$('.site-header').toggleClass('mobileMenuOpen');
			$('.logo').toggleClass('openlogo');
			$(this).toggleClass('open').next().toggleClass('mobileMenuOpen'); 
			$('#nav-icon1').toggleClass('open');  
	}); 
	
	$('.home-page, .about, .portfolio, .contact, .homepage__item-1, .homepage__item-2, .homepage__item-3').click( function(){
  $('.logo').removeClass('openlogo');
	});
	
	$('.home-page, .about, .portfolio, .contact').click(function(){
			$('.site-header').removeClass('mobileMenuOpen');
		$('#nav-icon1').removeClass('open');
	});
	
	$(document).on('click', function (e) { 
    var clickedEl = $(e.target);
    var outsideClicker = $(' header');
    if ( !(clickedEl.is(outsideClicker) || outsideClicker.has(clickedEl).length > 0) ) { 
						$('.site-header').removeClass('mobileMenuOpen');
					 $('.hamburger-icon, #nav-icon1').removeClass('open');
					$('.logo ').removeClass('openlogo');
    }
  });
 
	
	// for input box
	$('input, textarea').focus(function () {
		$(this).parents('.form-group').addClass('focused');
	});

	$('input, textarea').blur(function () {
		var inputValue = $(this).val();
		if (inputValue === "") {
			$(this).removeClass('filled');
			$(this).parents('.form-group').removeClass('focused');
		} else {
			$(this).addClass('filled');
		}
	});
	
	

	
	$('.home-page').click( function(){
		$('.content-container').removeClass('about-bg portfolio-bg  contact-bg').addClass('home');
	})
	 
	$('.about').click( function(){
			$('.content-container').removeClass('home portfolio-bg contact-bg').addClass('about-bg');
	});
	
	$('.portfolio').click( function(){
	 	$('.content-container').removeClass('home about-bg home contact-bg').addClass('portfolio-bg');
		});

	$('.contact').click( function(){
	 		$('.content-container').removeClass('about-bg portfolio-bg home').addClass('contact-bg');
		}); 
	
	$(document).on("click", ".home-page, .about, .portfolio, .contact, .contactUsNav, .aboutUsNav, .portfolioNav, .homepage__item-3", function(){
		var $id=$(this).attr('data-id'),
						$div=$('#'+$id);
		$(this).addClass('active').prevAll().removeClass('active');
		$(this).nextAll().removeClass('active');
		$div.addClass('move-center').removeClass('move-right move-left').nextAll().addClass('move-right').removeClass('move-center move-left');
		$div.prevAll().removeClass('move-center move-right').addClass('move-left');	
	});  
	
	$(document).on('click', '.homepage__item .portfolio, .homepage__item .about, .homepage__item .contact', function	(){
		var $clickDiv = $(this).attr('data-id');
 		console.log($clickDiv);
		console.log($('.site-header__top nav ul li.'+$clickDiv));
					$('.site-header__top nav ul li.'+$clickDiv).addClass('active').prevAll().removeClass('active');  
					$('.site-header__top nav ul li.'+$clickDiv).addClass('active').nextAll().removeClass('active');  
	});
 
	
	// show hide prev portfolio popup details  
		$(".portfolio-next").click(function() { 
			$(".portfolio-prev").show();
			if ($(".content-slider .portfolio-slide-center").next().length !== 0){
				$(".content-slider .portfolio-slide-center" ).removeClass('portfolio-slide-center').addClass('portfolio-slide-left').next().removeClass('portfolio-slide-right').addClass("portfolio-slide-center"); 
			}
			return false;
		});
 
	
	$(".portfolio-prev").click(function() { 
		$(".portfolio-next").show();
		if ($(".content-slider .portfolio-slide-center").prev().length !== 0){
			$(".content-slider .portfolio-slide-center" ).removeClass('portfolio-slide-center').addClass('portfolio-slide-right	').prev().removeClass('portfolio-slide-left').addClass("portfolio-slide-center");
			} 
		if ($(".content-slider .portfolio-slide-center").prev().length === 0){
					$('#first').first().addClass('portfolio-slide-center');
			} 
			return false;  
  });
	
	
	// for home page triangenavl efeect on body load  
	
	function bodyLoad(){
		$('.first').addClass('first-show');
	  $('.sixth').addClass('sixth-show');
	  $('.fifth').addClass('fifth-show');
	  $('.second').addClass('second-show');
	  $('.bottom-left').addClass('bottom-left-show');
	  $('.bottom-right').addClass('bottom-right-show');
	 setTimeout(
		 function(){ 			
			 $('.content-container').css({'z-index':'2'});
			 $('.first').removeClass('first-show');
			 $('.sixth').removeClass('sixth-show');
			 $('.fifth').removeClass('fifth-show');
			 $('.second').removeClass('second-show');
			 $('.bottom-left').removeClass('bottom-left-show');
			 $('.bottom-right').removeClass('bottom-right-show');
		 }, 
	 	3000); 
			 
		
			// for navigation hover animation
			
			$(".portfolioNav").hover(function(){
				$('.second').addClass('second-show');  
			}, function(){
				$('.second').removeClass("second-show"); 
			});

				$(".hireMe").hover(function(){
					$('.bottom-left').addClass('bottom-left-show');  
				}, function(){
					$('.bottom-left').removeClass("bottom-left-show"); 
				});

				$(".aboutUsNav").hover(function(){
					$('.first').addClass('first-show');  
				}, function(){
					$('.first').removeClass("first-show"); 
				});

			$(".contactUsNav").hover(function(){
					$('.bottom-right').addClass('bottom-right-show');  
				}, function(){
					$('.bottom-right').removeClass("bottom-right-show"); 
				}); 
	}	
	
	function	removebodyLoad(){
	  $(".contactUsNav, .aboutUsNav, .hireMe, .portfolioNav, .first, .sixth, .fifth, .second, .bottom-left, .bottom-right").unbind();
	}
	if ($(window).width() > 1200) {
			 bodyLoad();
		}	
		else{
			removebodyLoad();
		}
	
	$(window).on("resize", function(){  
  if ($(window).width() > 1200) {
			 bodyLoad();
		}	
		else{
			removebodyLoad();
		}
}); 
		
	$('.portfolio-items').click(function(){
		var $portId=$(this).attr('data-id'),
						$portDiv=$('#'+$portId);   
		$portDiv.addClass('portfolio-slide-center').removeClass('portfolio-slide-right portfolio-slide-left')
		.prevAll().removeClass('portfolio-slide-center portfolio-slide-right').addClass('portfolio-slide-left');
		$portDiv.nextAll().removeClass('portfolio-slide-center portfolio-slide-left').addClass('portfolio-slide-right'); 
		// if click on last item box then if condition will render  >> if .portfolio-slide-center has prev portfolio item div not exist
		if ($(".content-slider .portfolio-slide-center").prev().length === 0){
			$('.portfolio-prev').hide();
			$('.portfolio-next').show();   
		}  
		else{
			$('.portfolio-prev').show();
		}  
		if ($(".content-slider .portfolio-slide-center").next().length === 0){
			$('.portfolio-prev').show();
			$('.portfolio-next').hide();
		}
		else{  
			$('.portfolio-next').show();
		}
	});
	 
	
	$('.close').click(function(){ 
		$('.portfolio-slide-center').removeClass('portfolio-slide-center').addClass('portfolio-slide-right'); 
	});  
	 $(".portfolio-popup-modal").on('hidden.bs.modal', function(){
    $('.portfolio-slide-center').removeClass('portfolio-slide-center').addClass('portfolio-slide-right'); 
  });
});