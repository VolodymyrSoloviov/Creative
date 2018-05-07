$(function() {
  $("#tabs").tabs();

  $(".about__item").click(function() {
	$(".about__item").removeClass("about__item_active").eq($(this).index()).addClass("about__item_active");
	});
	
});