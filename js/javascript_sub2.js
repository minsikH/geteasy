//창 크기 에 따라 pc, mobile로 변경
function loadResponsivePage() {
  let width = window.innerWidth;
  let currentUrl = window.location.href;

  if (width <= 480 && !currentUrl.includes("renew_m.html")) {
    window.location.href = "renew_m.html";
  } else if (width > 480 && !currentUrl.includes("renew.html")) {
    window.location.href = "renew.html";
  }
}
// 페이지 로드 시 실행
window.onload = loadResponsivePage;
//창 크기 변경 시마다 리다이렉트
window.onresize = function () {
  loadResponsivePage();
};

// mgnb
$(document).ready(function () {
  $(".mobile_gnb > img").on("click", function () {
    $(".mGnb").slideToggle();
  });
});
//mtnb
$(document).ready(function () {
  $(".mobile_tnb > img").on("click", function () {
    $(".mTnb").slideToggle();
  });
});

/* notice */
$(document).ready(function () {
  let height = $(".notice").height();
  let num = $(".rolling li").length;
  let max = height * num;
  let move = 0;

  function noticeRolling() {
    move += height;
    $(".rolling").animate({ top: -move }, 1100, function () {
      if (move >= max) {
        $(this).css("top", 0);
        move = 0;
      }
    });
  }

  noticeRollingOff = setInterval(noticeRolling, 2000);
  $(".rolling").append($(".rolling li").first().clone());

  $(".rolling_stop").click(function () {
    clearInterval(noticeRollingOff);
  });

  $(".rolling_start").click(function () {
    noticeRollingOff = setInterval(noticeRolling, 1000);
  });
});
/* gnb */
$(function () {
  $(".gnb > li").on("mouseover", function () {
    $(".gnb_sub").stop().slideDown(300);
  });

  $("nav").on("mouseleave", function () {
    $(".gnb_sub").stop().slideUp(300);
  });
});

/* 섹션1 */
let sub2Sec1Right = document.querySelector(
  ".sub2_sec01 .sub2_section_cont1_right"
);
let sub2Section1s = document.querySelectorAll(
  ".sub2_sec01 .sub2_section_botArea_cont"
);
let sub2Sec1Icons = document.querySelectorAll(".sub2_sec01 .sub2_num_icon");
let initialStates = Array.from(sub2Sec1Icons).map(
  (icon) => icon.style.backgroundImage
);
sub2Section1s.forEach(function (sub2Section, index) {
  sub2Section.addEventListener("click", function () {
    sub2Section1s.forEach(function (item) {
      item.classList.remove("on");
    });

    this.classList.add("on");

    if (this.classList.contains("on")) {
      sub2Sec1Icons.forEach(function (icon, iconIndex) {
        if (iconIndex === index) {
          // 현재 클릭한 아이콘의 배경 이미지 변경
          icon.style.backgroundImage = `url('img/sub2_img/icon_${
            index + 1
          }_on.png')`;
          // .sub2_section_cont1_right의 이미지 변경
          sub2Sec1Right.style.backgroundImage = `url('img/sub2_img/section01_0${
            index + 1
          }.png')`;
        } else {
          // 다른 아이콘들은 초기 상태로 되돌림
          icon.style.backgroundImage = initialStates[iconIndex];
        }
      });
    }
  });
  // 초기 상태에서 0번 아이콘에 대한 이미지 변경
  if (index === 0) {
    sub2Sec1Icons[0].style.backgroundImage = `url('img/sub2_img/icon_1_on.png')`;
    sub2Sec1Right.style.backgroundImage = `url('img/sub2_img/section01_01.png')`;
    sub2Section1s[0].classList.add("on");
  }
});
/* 섹션2 */
let sub2Sec2Left = document.querySelector(
  ".sub2_sec02 .sub2_section_cont2_left"
);
let sub2Section2s = document.querySelectorAll(
  ".sub2_sec02 .sub2_section_botArea_cont"
);
let sub2Sec2Icons = document.querySelectorAll(".sub2_sec02 .sub2_num_icon");
let initial2States = Array.from(sub2Sec2Icons).map(
  (icon) => icon.style.backgroundImage
);
sub2Section2s.forEach(function (sub2Section, index) {
  sub2Section.addEventListener("click", function () {
    sub2Section2s.forEach(function (item) {
      item.classList.remove("on");
    });

    this.classList.add("on");

    if (this.classList.contains("on")) {
      sub2Sec2Icons.forEach(function (icon, iconIndex) {
        if (iconIndex === index) {
          // 현재 클릭한 아이콘의 배경 이미지 변경
          icon.style.backgroundImage = `url('img/sub2_img/icon_${
            index + 1
          }_on.png')`;
          // .sub2_section_cont1_right의 이미지 변경
          sub2Sec2Left.style.backgroundImage = `url('img/sub2_img/section02_0${
            index + 1
          }.png')`;
        } else {
          // 다른 아이콘들은 초기 상태로 되돌림
          icon.style.backgroundImage = initialStates[iconIndex];
        }
      });
    }
  });
  // 초기 상태에서 0번 아이콘에 대한 이미지 변경
  if (index === 0) {
    sub2Sec2Icons[0].style.backgroundImage = `url('img/sub2_img/icon_1_on.png')`;
    sub2Sec2Left.style.backgroundImage = `url('img/sub2_img/section02_01.png')`;
    sub2Section2s[0].classList.add("on");
  }
});
/* 섹션3 */
let sub2Sec3Right = document.querySelector(
  ".sub2_sec03 .sub2_section_cont1_right"
);
let sub2Section3s = document.querySelectorAll(
  ".sub2_sec03 .sub2_section_botArea_cont"
);
let sub2Sec3Icons = document.querySelectorAll(".sub2_sec03 .sub2_num_icon");
let initial3States = Array.from(sub2Sec3Icons).map(
  (icon) => icon.style.backgroundImage
);
sub2Section3s.forEach(function (sub2Section, index) {
  sub2Section.addEventListener("click", function () {
    sub2Section3s.forEach(function (item) {
      item.classList.remove("on");
    });

    this.classList.add("on");

    if (this.classList.contains("on")) {
      sub2Sec3Icons.forEach(function (icon, iconIndex) {
        if (iconIndex === index) {
          // 현재 클릭한 아이콘의 배경 이미지 변경
          icon.style.backgroundImage = `url('img/sub2_img/icon_${
            index + 1
          }_on.png')`;
          // .sub2_section_cont1_right의 이미지 변경
          sub2Sec3Right.style.backgroundImage = `url('img/sub2_img/section03_0${
            index + 1
          }.png')`;
        } else {
          // 다른 아이콘들은 초기 상태로 되돌림
          icon.style.backgroundImage = initialStates[iconIndex];
        }
      });
    }
  });
  // 초기 상태에서 0번 아이콘에 대한 이미지 변경
  if (index === 0) {
    sub2Sec3Icons[0].style.backgroundImage = `url('img/sub2_img/icon_1_on.png')`;
    sub2Sec3Right.style.backgroundImage = `url('img/sub2_img/section03_01.png')`;
    sub2Section3s[0].classList.add("on");
  }
});

/* gnb */
$(function () {
  $(".gnb > li").on("mouseover", function () {
    $(".gnb_sub").stop().slideDown(300);
  });

  $("nav").on("mouseleave", function () {
    $(".gnb_sub").stop().slideUp(300);
  });
});
