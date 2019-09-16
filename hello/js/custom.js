jQuery(document).ready(function(){ 
	jQuery("header img").hover(function(){
		 jQuery('.border').css("border", "solid 83px #f3f3f3");
        }, function(){
        jQuery('.border').css("border", "solid 83px transparent");
    });
    fun();
});

//  let time;

function fun() {
    if ($('.demo-page-1').hasClass('active')) {
        $('.pimage').removeClass('Transforming').fadeOut('1000');
		$('.pimage').removeClass('Revamping').fadeOut('1000');
		$('.pimage').addClass('white-bg').fadeIn('1000');
    }
	
    if ($('.demo-page-2').hasClass('active')) {
        $('.pimage').addClass('Transforming').fadeIn('1000');
		$('.pimage').removeClass('Revamping').fadeOut('1000');
		$('.pimage').removeClass('white-b').fadeOut('1000');
    }
    if ($('.demo-page-3').hasClass('active')) {
        $('.pimage').removeClass('Transforming').fadeOut('1000');
		$('.pimage').addClass('Revamping').fadeIn('1000');
		$('.pimage').removeClass('white-bg').fadeOut('1000');
    }
    setTimeout(fun, 500);
};

