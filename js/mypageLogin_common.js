//창 크기 에 따라 pc, mobile로 변경
function loadResponsivePage() {
  let width = window.innerWidth;
  let currentUrl = window.location.href;

  if (width <= 480 && !currentUrl.includes("mypageLogin_m.html")) {
    window.location.href = "mypageLogin_m.html";
  } else if (width > 480 && !currentUrl.includes("mypageLogin.html")) {
    window.location.href = "mypageLogin.html";
  }
}
// 페이지 로드 시 실행
window.onload = loadResponsivePage;
//창 크기 변경 시마다 리다이렉트
window.onresize = function () {
  loadResponsivePage();
};
