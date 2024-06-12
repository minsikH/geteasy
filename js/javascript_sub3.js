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

/* sub3_main_swiper */
let sub3MainSwiper = new Swiper(".sub3_main_swiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
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

/* btn_view */
document.addEventListener("DOMContentLoaded", function () {
  let btnViews = document.querySelectorAll(".btn_view");

  btnViews.forEach(function (btnView) {
    btnView.addEventListener("click", function () {
      let contentsBoxBot = this.previousElementSibling;
      let btnViewIcon = this.querySelector("img");

      contentsBoxBot.classList.toggle("on");

      if (contentsBoxBot.classList.contains("on")) {
        contentsBoxBot.style.display = "flex";
        this.querySelector("span").textContent = "상품 접기";
        btnViewIcon.src = "img/sub3_img/icon-up-arrow.png";
      } else {
        contentsBoxBot.style.display = "none";
        this.querySelector("span").textContent = "상품 펼치기";
        btnViewIcon.src = "img/sub3_img/icon-down-arrow.png";
      }
    });
  });
});

/* aside */
document.addEventListener("DOMContentLoaded", function () {
  const aside = document.querySelector("aside");
  const asideTopOffset = aside.offsetTop;

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;

    if (scrollTop > asideTopOffset) {
      aside.classList.add("fixed");
    } else {
      aside.classList.remove("fixed");
    }
  });

  let asideList = document.querySelectorAll("aside > ul > li");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    asideList.forEach(function (li) {
      let targetSectionId = li
        .querySelector("a")
        .getAttribute("href")
        .substring(1);
      let targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        let sectionTop = targetSection.offsetTop;
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
