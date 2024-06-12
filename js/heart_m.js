let heratAreaSwiper = new Swiper(".heart_area_swiper", {
    loop: false,
    spaceBetween: 20, // 슬라이드 간격 설정 (옵션)
    
});



/* 하트 이미지 토글 */
$(document).ready(function(){
    $(".heart_icon").click(function(){
      var imgSrc = $(this).find("img").attr("src");
      var newImgSrc = imgSrc === "./img/sub4_img/icon_heart.png" ? "./img/sub4_img/icon_heart_on.png" : "./img/sub4_img/icon_heart.png";
      $(this).find("img").attr("src", newImgSrc);
    });
  });



  