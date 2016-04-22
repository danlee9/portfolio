function navbar() {
	if ($('.navbar').offset().top > 50) {
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
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