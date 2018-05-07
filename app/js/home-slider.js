$(function() {
	$('.home__slider').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	asNavFor: '.home__slider-nav'
	});

	$('.home__slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.home__slider',
	});

	$('.home__slider-prev').click(function(){
  	$('.home__slider-nav').slick('slickPrev');
	})

	$('.home__slider-next').click(function(){
  	$('.home__slider-nav').slick('slickNext');
	})
});