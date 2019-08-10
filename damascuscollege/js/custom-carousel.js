// JavaScript Document

// for latest news section slider

var newsCarousel;
function initOwl(){
	"use strict";
	if($(window).outerWidth()<992){
		newsCarousel=$(".latest-news-carousel").owlCarousel({
			margin: 20,
			nav: true,
			loop: true,
			dots:false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				768:{
					items: 2
				},
				1024: {
					items: 3
				}, 
			},
			navText:['<img src="images/owl-nav-prev.svg" height="58" width="28">','<img src="images/owl-nav-next.svg" height="58" width="28">'],
		});
	}
	else{
		if(newsCarousel){
			newsCarousel.owlCarousel('destroy');
		}
	}
}

initOwl();
initFeatureOwl();
initfollowOwl();
$(window).resize(function(){
	"use strict";
	initOwl();
	initFeatureOwl();
	initfollowOwl();
});


// feature news slider sections tarts 
var featureCarousel;
function initFeatureOwl(){
	"use strict";
	if($(window).outerWidth()<992){
		featureCarousel=$(".feature-carousel").owlCarousel({
			margin: 20,
			nav: true,
			loop: true,
			dots:false,
			responsive: {
				0: {
					items: 1
				},
				575 :{
					items: 2
				},
				768:{
					items:2
				},
				992:{
					items : 3
				},
				1024: {
					items: 3
				}, 
			},
			navText:['<img src="images/feature-nav-prev.svg" height="58" width="28">','<img src="images/feature-nav-next.svg" height="58" width="28">'],
		});
	}
	else{
		if(featureCarousel){
			featureCarousel.owlCarousel('destroy');
		}
	}
}

// Follow journey slider sections tarts 
var followCarousel;
function initfollowOwl(){
	"use strict";
	if($(window).outerWidth()<1200){
		followCarousel=$(".follow-carousel").owlCarousel({
			margin:0,
			nav: true,
			loop: true,
			dots:false,
			responsive: {
				0: {
					items: 1
				},
				575 :{
					items: 2
				},
				768:{
					items:3
				},
				1200: {
					items: 4
				}
			},
			navText:['<img src="images/owl-nav-prev.svg" height="58" width="28">','<img src="images/owl-nav-next.svg" height="58" width="28">'],
		});
	}
	else{
		if(followCarousel){
			followCarousel.owlCarousel('destroy');
		}
	}
}
