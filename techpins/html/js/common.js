// AOS.init({
// 	duration: 1200,
// })
$(document).ready(function(){
	var $header=$('#header');
	$(document).scroll(function() {
		if($(window).scrollTop()){
			$header.addClass('sticky');
		}
		else{
			$header.removeClass('sticky');
		}
	});
	if($(window).scrollTop()){
		$header.addClass('sticky');
	}
	
	
	$('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
	
	
});
