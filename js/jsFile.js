
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/*
The function responsible to disappear the left manu when the device is a mobile phone.
And to handle the clicking for the mobile button (close and open the left manu).
*/
var mobile = function() {
	if($(window).width() < 768){
		$('.navbar').css('left', '-50%');
		$('.general-section, .experince-section, .education-section, .skills-section').css(
				'margin', '0 0 1% 12%'
			);
	}

	$('.mobile-button').click(function(){
		if($('.navbar').hasClass('open')){
			$('.navbar').removeClass('open');
			$('.navbar').animate({left: '-50%'}, 200);
			$('body').animate({left: '0%'}, 200);
		}else{
			$('.navbar').addClass('open');
			$('.navbar').animate({left: '0%'}, 200);
			$('body').animate({left: '20%'}, 200);
		}
	});
};

$(document).ready(mobile);