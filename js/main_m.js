/* 모바일 */
//창 크기 에 따라 pc, mobile로 변경
function loadResponsivePage() {
  let width = window.innerWidth;
  let currentUrl = window.location.href;

  if (width <= 480 && !currentUrl.includes("index_m.html")) {
    window.location.href = "index_m.html";
  } else if (width > 480 && !currentUrl.includes("index.html")) {
    window.location.href = "index.html";
  }
}
// 페이지 로드 시 실행
window.onload = loadResponsivePage;
//창 크기 변경 시마다 리다이렉트
window.onresize = function () {
  loadResponsivePage();
};

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

/* main slide */
let main_swiper = new Swiper(".main_swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
  slidesPerGroup: 1,
});

/* brand slide */
let brand_swiper = new Swiper(".brand_swiper", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerGroup: 1,
  centeredSlides: false, // 중앙 정렬 활성화
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
});

/* category slide */
document.querySelector(".category_swiper").style.display = "block";
let boxbSwiper = new Swiper(".category_swiper", {
  slidesPerView: 1.6,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  loopedSlides: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
});

/* sale slide */
let sale_swiper = new Swiper(".sale_swiper", {
  slidesPerView: 1.5,
  spaceBetween: 0,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerGroup: 1,
  centeredSlides: false, // 중앙 정렬 활성화
});
/* ask slide */

let ask_swiper = new Swiper(".ask_swiper", {
  slidesPerView: 1.6,
  spaceBetween: 0,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerGroup: 1,
  centeredSlides: false,
});

/* 카테고리  */
document.addEventListener("DOMContentLoaded", function () {
  let smallBoxChildren = document.querySelector(".small_box").children;

  for (let i = 0; i < smallBoxChildren.length; i++) {
    smallBoxChildren[i].addEventListener("click", function () {
      removeOnClassFromAll();

      let categorySwiper = document.querySelector(
        ".category_swiper" + this.className.slice(-2)
      );
      if (categorySwiper) {
        categorySwiper.classList.add("on");
      }

      this.classList.add("on");
    });
  }
  function removeOnClassFromAll() {
    let allElements = document.querySelectorAll(
      ".category_swiper, .small_box > div"
    );
    allElements.forEach(function (element) {
      element.classList.remove("on");
    });
  }
});

/* 타임세일 */
document.addEventListener("DOMContentLoaded", function () {
  // 타임 세일 종료 날짜와 시간 (YYYY, MM, DD, HH, MM, SS)
  const saleEndDate = new Date(2024, 12, 31, 23, 59, 59);

  function updateCountdown() {
    const now = new Date();

    const totalMillisecondsInADay = 24 * 60 * 60 * 1000;
    const timeLeft = saleEndDate - now;
    const remainingTimeInADay = timeLeft % totalMillisecondsInADay;
    const elapsedMilliseconds = totalMillisecondsInADay - remainingTimeInADay;

    const remainingMilliseconds = timeLeft % totalMillisecondsInADay;

    const remainingPercentage =
      (remainingMilliseconds / totalMillisecondsInADay) * 100;

    const actualWidth = Math.min(100, Math.max(0, remainingPercentage));
    const widthPercentage = 100 - actualWidth;

    // #line의 width를 조절
    const line = document.getElementById("line");
    line.style.width = widthPercentage + "%";

    // 시간, 분, 초를 계산
    const hoursLeft = Math.floor(remainingTimeInADay / (1000 * 60 * 60));
    const minutesLeft = Math.floor(
      (remainingTimeInADay % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsLeft = Math.floor((remainingTimeInADay % (1000 * 60)) / 1000);

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = String(
        Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((timeLeft % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      document.getElementById(
        "countdown"
      ).innerHTML = `<span class= "timetext">남은시간</span> <span>${hours}: ${minutes}: ${seconds}</span>`;
    } else {
      document.getElementById("countdown").innerHTML = "타임 세일 종료!";
    }
  }

  // 초기 업데이트
  updateCountdown();

  // 1초마다 업데이트
  setInterval(updateCountdown, 1000);
});

/* gnb */
$(function () {
  $(".gnb > li").on("mouseover", function () {
    $(".gnb_sub").animate(
      {
        opacity: 1,
      },
      300,
      function () {
        $(this).css("display", "block");
      }
    );
  });
  $("nav").on("mouseleave", function () {
    $(".gnb_sub").animate(
      {
        opacity: 0,
      },
      300,
      function () {
        $(this).css("display", "none");
      }
    );
  });
});
