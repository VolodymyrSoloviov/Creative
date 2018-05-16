$(function() {
  $("#tabs2").tabs();

  $(".services__item").click(function() {
	$(".services__item").removeClass("services__item_active").eq($(this).index()).addClass("services__item_active");
	});
	
});