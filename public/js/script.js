var $navbar = $('.navbar');

function navbar() {
	if ($navbar.offset().top > 50) {
		if (!$navbar.hasClass('top-nav-collapse')) {
			$navbar.addClass('top-nav-collapse');
		}		
	} else {
		if ($navbar.hasClass('top-nav-collapse')) {
			$navbar.removeClass('top-nav-collapse');
		}
	}
}

navbar();

$(window).scroll(function(){
	navbar();
});

$(function() {
	$('.page-scroll a').on('click', function() {
		var href = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(href).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
})