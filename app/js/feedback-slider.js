$(function() {
	$('.feedback__list').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	asNavFor: '.feedback__list2'
	});

	$('.feedback__list2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.feedback__list',
	});

	$('.feedback__controll_prev').click(function(){
  	$('.feedback__list2').slick('slickPrev');
	})

	$('.feedback__controll_next').click(function(){
  	$('.feedback__list2').slick('slickNext');
	})
});