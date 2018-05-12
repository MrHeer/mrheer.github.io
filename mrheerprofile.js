$(document).ready(function () {
  $("#div1").addClass("animated slideInLeft");
  $("#div2").css("-webkit-animation-delay", ".2s");
  $("#div2").css("-moz-animation-delay", ".2s");
  $("#div2").css("animation-delay", ".2s");
  $("#div2").addClass("animated slideInRight");
  $(".card").addClass("animated fadeInUp");
  $("#card1").css("-webkit-animation-delay", ".4s");
  $("#card2").css("-webkit-animation-delay", ".6s");
  $("#card3").css("-webkit-animation-delay", ".8s");
  $("#card4").css("-webkit-animation-delay", "1.0s");
  $("#card5").css("-webkit-animation-delay", "1.2s");
  $("#card6").css("-webkit-animation-delay", "1.4s");
  $("#card7").css("-webkit-animation-delay", "1.6s");
  $("#card1").css("-moz-animation-delay", ".4s");
  $("#card2").css("-moz-animation-delay", ".6s");
  $("#card3").css("-moz-animation-delay", ".8s");
  $("#card4").css("-moz-animation-delay", "1.0s");
  $("#card5").css("-moz-animation-delay", "1.2s");
  $("#card6").css("-moz-animation-delay", "1.4s");
  $("#card7").css("-moz-animation-delay", "1.6s");
  $("#card1").css("animation-delay", ".4s");
  $("#card2").css("animation-delay", ".6s");
  $("#card3").css("animation-delay", ".8s");
  $("#card4").css("animation-delay", "1.0s");
  $("#card5").css("animation-delay", "1.2s");
  $("#card6").css("animation-delay", "1.4s");
  $("#card7").css("animation-delay", "1.6s");
});
$(".card").on("animationEnd", bindAnimate);
$(".card").on("webkitAnimationEnd", bindAnimate);
function bindAnimate() {
  $(this).css("-webkit-animation-delay", "0");
  $(this).css("-moz-animation-delay", "0");
  $(this).css("animation-delay", "0");
  $(this).removeClass("animated fadeInUp");
  $(this).mouseover(function () {
	$(this).removeClass("shadow-sm");
	$(this).removeClass("card-no-active");
	$(this).addClass("card-active");
	$(this).addClass("shadow");
	$(this).addClass("border border-primary");
  });
  $(this).mouseout(function () {
	$(this).removeClass("shadow");
	$(this).removeClass("border border-primary");
	$(this).removeClass("card-active");
	$(this).addClass("card-no-active");
	$(this).addClass("shadow-sm");
  });
}