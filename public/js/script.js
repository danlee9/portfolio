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

var $window = $(window);
// var $intro = $('.intro');
// var $portfolio = $('.portfolio');
// var velocity = 0.5;
// var pos;
// var initial = $intro.css('backgroundPosition').split(' ')[1];
// 		initial = initial.slice(0, initial.length -2);
// 		console.log(initial);

// $window.on('resize', function() {
// 	if ($window.width() >= 1400) {
// 		$intro.css('backgroundPosition', '50% -75px');
// 	} else {
// 		$intro.css('backgroundPosition', '50% 0px');
// 	}
// 	initial = $intro.css('backgroundPosition').split(' ')[1];
// 	initial = initial.slice(0, initial.length -2);
// 	console.log(initial);
// });


// var parallax = function() {
// 	if ($navbar.offset().top < $intro.height()) {
// 		pos = $window.scrollTop();
//   	$intro.css('backgroundPosition', '50% -' + Math.round(pos * velocity - initial) + 'px');
// 	}
// };

// var ms_ie = false;
// var ua = window.navigator.userAgent;
// var old_ie = ua.indexOf('MSIE ');
// var new_ie = ua.indexOf('Trident/');

// if ((old_ie > -1) || (new_ie > -1)) {
//     ms_ie = true;
// }

// console.log(ms_ie);

// if ( ms_ie ) {
//   parallax = function() {
//   	return;
//   }
//   $intro.css('backgroundAttachment', 'scroll');
//   $portfolio.css('backgroundAttachment', 'scroll');
//   $portfolio.css('backgroundPosition', '50% 0px');
// }

/* Fade variables */

var $item = $('.portfolio-item');
var bottom_of_object;
var bottom_of_window;
var items = $item.length;
var fadedIn = 0;

/* Fade In Implementation 1 */

// function fadeIn() {
// 	if (fadedIn < items) {
// 		$item.each(function(i){
      
//       var $this = $(this);
//       bottom_of_object = $this.position().top + $this.outerHeight();
//       bottom_of_window = $window.scrollTop() + $window.height();
      
//       bottom_of_window = bottom_of_window + 200;
    
//       if( bottom_of_window > bottom_of_object && !$this.hasClass('fadeIn') ){
//         // $this.animate({'opacity':'1'}, 2000);
//         $this.addClass('fadeIn');
//         fadedIn++;
//       }
      
//     });
// 	}
// }

/* Implementation 2 */

function fadeIn() {
	 $item.each( function(i){
      
      var $this = $(this);      
      var bottom_of_object = $this.position().top + $this.outerHeight();
      var bottom_of_window = $window.scrollTop() + $window.height();
      
       
      bottom_of_window = bottom_of_window + 200;  //Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  
    
      if( bottom_of_window > bottom_of_object ){
          
         $this.addClass('fadeIn');
              
      }
  }); 
}

navbar();
// parallax();
fadeIn();

$window.scroll(function(){
	navbar();
	// parallax();
	fadeIn();
});

$(function() {
	$('.page-scroll a').on('click', function() {
		var href = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(href).offset().top
		}, 850, 'easeOutSine');
		event.preventDefault();
	});
});

$('.popup').on('click', function() {
	var $this = $(this);
	$this.toggleClass('clicked');
	if ($this.hasClass('clicked')) $this.addClass('hover');
	else $this.removeClass('hover');
});

$('.popup').on('mouseenter', function() {
	$(this).addClass('hover');
});

$('.popup').on('mouseleave', function() {
	var $this = $(this);
	if (!$this.hasClass('clicked')) $this.removeClass('hover');
});

$('#submit').on('click', function(e) {
	e.preventDefault();
	$.ajax({
      method: 'post',
      dataType: 'json',
      // data: {
      // 	name: $('#name').val(),
      // 	email: $('#email').val(),
      // 	subject: $('#subject').val(),
      // 	message: $('#message').val(),
      // },
      url: '../phpmailer/email_handler.php',
      success: function(result) {
          console.log(result);
          // $('p').text(result.message);
      }
  });
})