//창 크기 에 따라 pc, mobile로 변경
function loadResponsivePage() {
  let width = window.innerWidth;
  let currentUrl = window.location.href;

  if (width <= 480 && !currentUrl.includes("category_m.html")) {
    window.location.href = "category_m.html";
  } else if (width > 480 && !currentUrl.includes("category.html")) {
    window.location.href = "category.html";
  }
}
// 페이지 로드 시 실행
window.onload = loadResponsivePage;
//창 크기 변경 시마다 리다이렉트
window.onresize = function () {
  loadResponsivePage();
};

/* sub3_main_swiper */
let sub3MainSwiper = new Swiper(".sub3_main_swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionEnd: function () {
      let activeIndex = this.realIndex + 1;
      this.el.classList.remove("slide1", "slide2", "slide3", "slide4");
      this.el.classList.add("slide" + activeIndex);
      if (activeIndex === 1) {
        this.el.classList.add("slide1");
      }
    },
  },
});

let sub3PagingSwiper = new Swiper(".sub3_main_swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    type: "progressbar",
  },
});

sub3MainSwiper.controller.control = sub3PagingSwiper;

/* aside swiper */
let sub3AsideSwiper = new Swiper(".sub3_aside_swiper", {
  loop: false,
  slidesPerView: 4.5,
  spaceBetween: 0,
});

/* aside */
document.addEventListener("DOMContentLoaded", function () {
  const aside = document.querySelector(".sub3_aside_swiper");
  const asideTopOffset = aside.offsetTop;
  //console.log('asideTopOffset:', asideTopOffset)
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    //console.log(scrollTop)
    if (scrollTop >= asideTopOffset) {
      aside.classList.add("fixed");
    } else {
      aside.classList.remove("fixed");
    }
  });

  let asideList = document.querySelectorAll(".sub3_aside_swiper .swiper-slide");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    asideList.forEach(function (li) {
      let targetSectionId = li
        .querySelector("a")
        .getAttribute("href")
        .substring(1);
      let targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        let sectionTop = targetSection.offsetTop - 65;
        let sectionBottom = sectionTop + targetSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          li.classList.add("on");
        } else {
          li.classList.remove("on");
        }
      }
    });
  });
});

/* section 의  swiper들 */
const sub3ContentsAreas = document.querySelectorAll(".sub3_contents_area");

sub3ContentsAreas.forEach(function (sub3ContentsArea) {
  new Swiper(sub3ContentsArea, {
    loop: false,
    slidesPerView: 2.5,
    spaceBetween: 20,
  });
});

document.querySelectorAll(".swiper-slide a").forEach(function (element) {
  element.addEventListener("click", function (event) {
    // 어사이드 해시 클릭인 경우에만 기본 동작(해시 이동)을 막습니다.
    if (this.closest(".sub3_aside_swiper")) {
      event.preventDefault();
    }

    // 이동할 위치 계산
    const targetSectionId = this.getAttribute("href");
    const targetSection = document.querySelector(targetSectionId);

    // targetSection이 null이 아닌 경우에만 처리
    if (targetSection) {
      // targetSection의 위치를 콘솔에 출력
      console.log("Target Section OffsetTop:", targetSection.offsetTop);

      // 이동할 위치 계산
      const offset = targetSection.offsetTop - 60; // 이동할 위치에서 60px 만큼 위로 이동

      // 스크롤 이동
      window.scrollTo({
        top: offset,
        behavior: "smooth", // 부드러운 스크롤 효과를 사용합니다.
      });
    }
  });
});

/* 스크롤 시 슬라이드on이 맨좌측 슬라이드로 위치이동 */

function adjustSlidePosition() {
  const activeSlide = document.querySelector(".swiper-slide.on");
  if (activeSlide) {
    const slidesPerView = 4.5; // 슬라이드가 한 번에 보이는 개수
    const activeSlideIndex = Array.from(
      activeSlide.parentNode.children
    ).indexOf(activeSlide);
    const containerWidth =
      document.querySelector(".sub3_aside_swiper").clientWidth; // 슬라이드 컨테이너의 너비
    const slideWidth = containerWidth / slidesPerView; // 슬라이드의 너비 계산
    const transformValue = -Math.round(activeSlideIndex * slideWidth);

    const swiperWrapper = document.querySelector(
      ".sub3_aside_swiper .swiper-wrapper"
    );
    swiperWrapper.style.transition = "transform 0.3s ease";
    swiperWrapper.style.transform = `translate3d(${transformValue}px, 0px, 0px)`;
  }
}

document.addEventListener("DOMContentLoaded", adjustSlidePosition);
window.addEventListener("scroll", adjustSlidePosition);

$(document).ready(function () {
  $(".sub3_contIcon").click(function () {
    let currentImg = $(this).css("background-image");
    let newImg = currentImg.includes("icon_heart.png")
      ? "url(./img/sub4_img/icon_heart_on.png)"
      : "url(./img/sub4_img/icon_heart.png)";
    $(this).css("background-image", newImg);
  });
});
