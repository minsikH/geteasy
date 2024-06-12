/* gnb */
$(function () {
  $(".gnb > li").on("mouseover", function () {
    $(".gnb_sub").stop().slideDown(300);
  });

  $("nav").on("mouseleave", function () {
    $(".gnb_sub").stop().slideUp(300);
  });
});
