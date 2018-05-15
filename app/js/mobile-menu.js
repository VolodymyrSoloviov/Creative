$(function() {
	$('#menu-icon').click(function() {
		if ($('#mobile-menu').is(':visible'))
			$('#mobile-menu').hide();
		else 
			$('#mobile-menu').show();

	});

	$(document).scroll(function () {
		if ($(document).width() > 992) {
			if ($(document).scrollTop() > $('.header').height())
				$('.header').addClass('fixed-menu');
			else 
				$('.header').removeClass('fixed-menu');
		}
	});

	window.onresize = function(event) {
		$('#mobile-menu').hide();
	};	
});