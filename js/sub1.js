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
let sub_swiper = new Swiper(".sub1_main_swiper", {
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
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerGroup: 1,
});

$(document).ready(function () {
  $(".benefit_title li").click(function () {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");

    let index = $(this).index() + 1;
    $(".benefit_list").removeClass("on");
    $(".benefit_list.benefit_list0" + index).addClass("on");
  });
});

$(document).ready(function () {
  $(".brand_container nav ul li").click(function () {
    $(this).addClass("on");

    $(this).siblings().removeClass("on");

    let index = $(this).index() + 1;
    $(".brand_cont").removeClass("on");
    $(".brand_cont.brand_cont_0" + index).addClass("on");
  });
});

$(document).ready(function () {
  $("#product .left_nav ul li").click(function () {
    $(this).addClass("on");

    $("#product .left_nav ul li").not(this).removeClass("on");

    $("#product .left_nav .title").addClass("on");
    $("#product .right_nav .title").removeClass("on");

    $("#product .line_active").removeClass("on");

    $("#product .right_nav ul li").removeClass("on");
  });

  $("#product .right_nav ul li").click(function () {
    $(this).addClass("on");

    $("#product .right_nav ul li").not(this).removeClass("on");

    $("#product .right_nav .title").addClass("on");
    $("#product .left_nav .title").removeClass("on");

    $("#product .line_active").addClass("on");

    $("#product .left_nav ul li").removeClass("on");
  });

  for (let i = 1; i <= 4; i++) {
    $("#product .left_nav ul li:nth-child(" + i + ")").click(function () {
      $(this).addClass("on");

      $("#product .left_nav ul li").not(this).removeClass("on");

      $("#product .box_container.box_container" + ("0" + i).slice(-2)).addClass(
        "on"
      );

      $("#product .box_container")
        .not(".box_container" + ("0" + i).slice(-2))
        .removeClass("on");
    });
  }

  for (let i = 5; i <= 8; i++) {
    $("#product .right_nav ul li:nth-child(" + (i - 4) + ")").click(
      function () {
        $(this).addClass("on");

        $("#product .right_nav ul li").not(this).removeClass("on");

        $(
          "#product .box_container.box_container" + ("0" + i).slice(-2)
        ).addClass("on");

        $("#product .box_container")
          .not(".box_container" + ("0" + i).slice(-2))
          .removeClass("on");
      }
    );
  }
});

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
