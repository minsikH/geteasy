//창 크기 에 따라 pc, mobile로 변경
function loadResponsivePage() {
  let width = window.innerWidth;
  let currentUrl = window.location.href;

  if (width <= 480 && !currentUrl.includes("mypageUser_m.html")) {
    window.location.href = "mypageUser_m.html";
  } else if (width > 480 && !currentUrl.includes("mypageUser.html")) {
    window.location.href = "mypageUser.html";
  }
}
// 페이지 로드 시 실행
window.onload = loadResponsivePage;
//창 크기 변경 시마다 리다이렉트
window.onresize = function () {
  loadResponsivePage();
};

/* gnb */
$(function () {
  $(".gnb > li").on("mouseover", function () {
    $(".gnb_sub").stop().slideDown(300);
  });

  $("nav").on("mouseleave", function () {
    $(".gnb_sub").stop().slideUp(300);
  });
});
