//창 크기 에 따라 pc, mobile로 변경
function loadResponsivePage() {
  let width = window.innerWidth;
  let currentUrl = window.location.href;

  if (width <= 480 && !currentUrl.includes("detail_m.html")) {
    window.location.href = "detail_m.html";
  } else if (width > 480 && !currentUrl.includes("detail.html")) {
    window.location.href = "detail.html";
  }
}
// 페이지 로드 시 실행
window.onload = loadResponsivePage;
//창 크기 변경 시마다 리다이렉트
window.onresize = function () {
  loadResponsivePage();
};

/* sub4_main_swiper */
let sub4MainSwiper = new Swiper(".sub4_main_swiper", {
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

let sub4PagingSwiper = new Swiper(".sub4_main_swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    type: "progressbar",
  },
});

sub4MainSwiper.controller.control = sub4PagingSwiper;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".select_result").forEach((result) => {
    let inputBox = result.querySelector(".count");
    let inputResult = result.querySelector(".input_result");
    inputBox.value = 1;
    let price = 2690000;
    inputResult.textContent = (price * Number(inputBox.value)).toLocaleString();
  });

  // updateTotal 함수를 여기서 호출하도록 변경
  updateTotal();
});

document.querySelectorAll(".count").forEach((inputBox) => {
  inputBox.addEventListener("blur", function () {
    let count = parseInt(inputBox.value);
    inputBox.value = Math.max(1, count);
    buttonNum(
      inputBox,
      0,
      inputBox.parentElement.nextElementSibling.querySelector(".input_result")
    );
    updateTotal();
  });
});

function buttonNum(inputBox, num, inputResult) {
  let count = parseInt(inputBox.value);

  if (count + num >= 1 && count + num <= 100) {
    inputBox.value = count + num;
  } else {
    if (count + num < 1) {
      inputBox.value = 1;
      alert("1개 이상 구매하셔야 합니다.");
    } else {
      inputBox.value = 100;
      alert("100개 이하로 구매하셔야 합니다.");
    }
  }

  let price = 2690000;
  inputResult.textContent = (price * Number(inputBox.value)).toLocaleString();
}

document.querySelectorAll(".minus").forEach((button) => {
  button.addEventListener("click", function () {
    let inputBox = button.parentElement.querySelector(".count");
    let inputResult =
      button.parentElement.nextElementSibling.querySelector(".input_result");
    buttonNum(inputBox, -1, inputResult);
    updateTotal();
  });
});

document.querySelectorAll(".plus").forEach((button) => {
  button.addEventListener("click", function () {
    let inputBox = button.parentElement.querySelector(".count");
    let inputResult =
      button.parentElement.nextElementSibling.querySelector(".input_result");
    buttonNum(inputBox, 1, inputResult);
    updateTotal();
  });
});

function updateTotal() {
  let totalQuantity = 0;
  let totalPrice = 0;

  document.querySelectorAll(".select_result").forEach((result) => {
    let inputBox = result.querySelector(".count");
    let inputResult = result.querySelector(".input_result");

    if (result.classList.contains("on") && result.style.display !== "none") {
      totalQuantity += Number(inputBox.value);
      totalPrice += Number(inputResult.textContent.replace(/[^0-9]/g, ""));
    }
  });

  document.querySelector(".result_num").textContent =
    totalQuantity.toLocaleString();
  document.querySelector(".result_price").textContent =
    totalPrice.toLocaleString();
}

document.addEventListener("DOMContentLoaded", function () {
  let itemBox = document.querySelector(".item_box");
  let subItemBox = document.querySelector(".sub_item_box");
  let btnUpDownArea = document.querySelector(".btn_up_down_area");

  let selectResult01 = document.querySelector(".select_result_01");
  let selectResult02 = document.querySelector(".select_result_02");
  let closeBtn01 = document.querySelector(".select_result_01 .close_btn");
  let closeBtn02 = document.querySelector(".select_result_02 .close_btn");

  itemBox.addEventListener("click", function () {
    // item_box 클릭 시 on 클래스를 토글
    this.classList.toggle("on");
    subItemBox.classList.toggle("on");

    // btn_up_down_area 이미지 변경
    let src = this.classList.contains("on")
      ? "./img/sub4_img/icon-up-arrow.png"
      : "./img/sub4_img/icon-down-arrow.png";
    btnUpDownArea.src = src;
  });

  subItemBox.addEventListener("click", function (event) {
    // sub_item_box의 li 클릭 시
    let listItem = event.target.closest("li");
    let itemBoxText = itemBox.querySelector("a > span");

    if (listItem) {
      let index = Array.from(subItemBox.children).indexOf(listItem);

      if (index === 0) {
        if (selectResult01.classList.contains("on")) {
          // 이미 선택된 경우
          alert("이미 선택된 항목입니다.");
        } else {
          // 처음 선택된 경우
          selectResult01.classList.add("on");
          subItemBox.classList.remove("on");
          btnUpDownArea.src = "./img/sub4_img/icon-down-arrow.png";
          itemBox.classList.remove("on");
          itemBoxText.innerHTML =
            '<span class="color_box">' +
            '<span class="color_cont"></span>' +
            "</span>" +
            '<span class="brand_info">ILCE-7CM2 / 실버</span>';
        }
      } else if (index === 1) {
        if (selectResult02.classList.contains("on")) {
          // 이미 선택된 경우
          alert("이미 선택된 항목입니다.");
        } else {
          // 처음 선택된 경우
          selectResult02.classList.add("on");
          subItemBox.classList.remove("on");
          btnUpDownArea.src = "./img/sub4_img/icon-down-arrow.png";
          itemBox.classList.remove("on");
          itemBoxText.innerHTML =
            '<span class="color_box">' +
            '<span class="color_cont b"></span>' +
            "</span>" +
            '<span class="brand_info">ILCE-7CM2 / 블랙</span>';
        }
      }
      updateTotal();
    }
  });

  closeBtn01.addEventListener("click", function (event) {
    // select_result_01의 close_btn 클릭 시 on 클래스 제거 및 이벤트 전파 막기
    selectResult01.classList.remove("on");
    event.stopPropagation();
    updateTotal();
  });

  closeBtn02.addEventListener("click", function (event) {
    // select_result_02의 close_btn 클릭 시 on 클래스 제거 및 이벤트 전파 막기
    selectResult02.classList.remove("on");
    event.stopPropagation();
    updateTotal();
  });
});

/* 적립혜택 설명 */
let question = document.querySelector(".question");
let questionText = document.querySelector(".question_text");

question.addEventListener("mouseover", function () {
  questionText.classList.add("on");
});
question.addEventListener("mouseleave", function () {
  questionText.classList.remove("on");
});

/* section depth1 */
const depth1Items = document.querySelectorAll(".depth1 li");
const contBoxItems = document.querySelectorAll(".cont_box > li");

depth1Items.forEach(function (item, index) {
  item.addEventListener("click", function () {
    depth1Items.forEach(function (depth1Item) {
      depth1Item.classList.remove("on");
    });
    contBoxItems.forEach(function (contBoxItem) {
      contBoxItem.classList.remove("on");
    });

    item.classList.add("on");

    // 현재 클릭한 depth1 li에 해당하는 cont_box li에 'on' 클래스
    contBoxItems[index].classList.add("on");
  });
});

/* 메인이미지변경 */
const colorItems = document.querySelectorAll(".sub4_main_bot .color li");

colorItems.forEach(function (item, index) {
  item.addEventListener("click", function () {
    colorItems.forEach(function (colorItem) {
      colorItem.classList.remove("on");
    });

    item.classList.add("on");

    const imagePrefix = index === 0 ? "s" : "b";

    // 모든 swiper-slide의 이미지 경로를 변경합니다.
    document
      .querySelectorAll(".sub4_main_area .swiper-slide")
      .forEach(function (slide, slideIndex) {
        const sub4MainImg = slide.querySelector(".sub4_main_img");
        sub4MainImg.style.backgroundImage = `url(./img/sub4_img/main_${imagePrefix}_${(
          slideIndex + 1
        )
          .toString()
          .padStart(2, "0")}.png)`;
      });
  });
});

let selectArea = document.querySelector(".icon_down_arrow_wide");
let itemSelect = document.querySelector(".item_select_open");
selectArea.addEventListener("click", function () {
  // item_box 클릭 시 on 클래스를 토글
  this.classList.toggle("on");
  itemSelect.classList.toggle("on");
});

/* db */

db.collection("review")
  .orderBy("date", "asc") // 'date' 필드를 기준으로 정렬
  //asc는 오름차순 , desc는 내림차순
  .get()
  .then((result) => {
    result.forEach((doc) => {
      //console.log(doc.data());
      const reviewData = doc.data().score; // 리뷰 데이터를 가져옴
      //console.log(reviewData);
      // 날짜 정보를 변환 -> timestamp -> date()객체로 변환
      const timestamp = doc.data().date; // firebase에서 가져온 timestamp 값
      const date = timestamp.toDate();
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const docId = doc.id;
      let convertedScore = reviewData / 2;
      // NaN인 경우 0으로 설정
      if (isNaN(convertedScore)) {
        convertedScore = 0;
      }
      /*                 let displayName = JSON.parse(localUser).displayName */
      const displayName = doc.data().displayName;

      // 새로운 리뷰를 생성
      let product = `
          <li id="${doc.data().uid}" class="review_contents">
              <div class="top_area">
                  <div class="top_user">
                      <figure>
                          <img src="./img/icon/icon_mypage.png" alt="">
                      </figure>
                      <div class="user_info">
                          <p class="name">${displayName}</p>
                      </div>
                  </div>
                  <div class="util_area">
                      <ul>
                          <li class="date">${year}/${month}/${day}</li>
                          <li><a href="javascript:;" id='btn_close' data-id=${docId}><img src="./img/icon/icon_close.png" alt=""></a></li>
                      </ul>
                  </div>
              </div>
              <div class="mid_area">
                  <div class="user_img">
                      <div class="img" style="background-image: url('${
                        doc.data().image
                      }');"></div>
                  </div>
                  <p class="title">${doc.data().title}</p>
                  <p class="text">${doc.data().content}</p>
              </div>
              <div class="bot_area">
                  <div class="item">
                      <span class="brand">소니</span>
                      <span class="item_cont">Alpha A7R</span>
                  </div>
                  <div class="score">
                      <div class="no_click"></div>
                      <fieldset class="rate">
                          <input type="radio" id="rating10_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="10" disabled><label for="rating10_${
        doc.id
      }" title="5점"></label>
                          <input type="radio" id="rating9_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="9" disabled><label class="half" for="rating9_${
        doc.id
      }" title="4.5점"></label>
                          <input type="radio" id="rating8_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="8" disabled><label for="rating8_${doc.id}" title="4점"></label>
                          <input type="radio" id="rating7_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="7" disabled><label class="half" for="rating7_${
        doc.id
      }" title="3.5점"></label>
                          <input type="radio" id="rating6_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="6" disabled><label for="rating6_${doc.id}" title="3점"></label>
                          <input type="radio" id="rating5_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="5" disabled><label class="half" for="rating5_${
        doc.id
      }" title="2.5점"></label>
                          <input type="radio" id="rating4_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="4" disabled><label for="rating4_${doc.id}" title="2점"></label>
                          <input type="radio" id="rating3_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="3" disabled><label class="half" for="rating3_${
        doc.id
      }" title="1.5점"></label>
                          <input type="radio" id="rating2_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="2" disabled><label for="rating2_${doc.id}" title="1점"></label>
                          <input type="radio" id="rating1_${
                            doc.id
                          }" name="rating_${
        doc.id
      }" value="1" disabled><label class="half" for="rating1_${
        doc.id
      }" title="0.5점"></label>
                      </fieldset>
                      <div class="score_num">
                          <span>${convertedScore}</span>
                      </div>
                  </div>
              </div>
          </li>`;

      // 새로운 리뷰를 맨 위에 추가
      const existingReviews = $(".cont_box02 > ul");
      const firstReview = existingReviews.children().first();
      if (firstReview.length) {
        firstReview.before(product);
      } else {
        existingReviews.append(product);
      }

      const ratingValue = reviewData;
      $(`input[name="rating_${doc.id}"][value="${ratingValue}"]`).prop(
        "checked",
        true
      );

      //삭제버튼 클릭 이벤트
      $("#btn_close").on("click", function () {
        //삭제할 문서의 id가져옴
        const docId = $(this).data("id");
        //console.log(docId)

        // 현재 로그인한 사용자의 정보 가져오기
        let currentUser = firebase.auth().currentUser;

        // 현재 사용자의 UID 가져오기
        let currentUserUid = currentUser ? currentUser.uid : null;

        // 현재 클릭된 리뷰의 UID 가져오기
        let reviewContent = $(this).closest(".top_area").parent();
        let reviewUid = reviewContent.attr("id");

        if (currentUserUid === reviewUid) {
          // 엘럿으로 확인 메시지 표시
          if (confirm("정말 삭제하시겠습니까?")) {
            // "예"를 클릭한 경우
            // Firestore에서 해당 리뷰 문서 삭제
            db.collection("review")
              .doc(docId)
              .delete()
              .then(() => {
                // 삭제 성공한 경우
                alert("리뷰가 성공적으로 삭제되었습니다.");
                // 해당 리뷰를 화면에서 제거
                $(this).closest(".review_contents").remove();
              })
              .catch((error) => {
                // 삭제 실패한 경우
                console.error("리뷰 삭제 중 오류 발생:", error);
              });
          } else {
            // "아니요"를 클릭한 경우
            //console.log("삭제가 취소되었습니다.");
          }
        } else {
          // 현재 로그인한 사용자의 UID와 리뷰의 UID가 다른 경우
          alert("본인이 작성한 리뷰만 삭제가 가능합니다.");
        }
      });
    });
  });

$(document).ready(function () {
  // 모든 #mypageButton 버튼에 대해 클릭 이벤트 설정
  $(document).on("click", "#reviewButton", function (event) {
    // 이벤트 기본 동작 방지
    event.preventDefault();

    // 사용자 로그인 상태 확인 후 페이지 이동
    checkUserAndRedirect();
  });
});

// 사용자 로그인 상태 확인 후 페이지 이동 함수
function checkUserAndRedirect() {
  let user = localStorage.getItem("user");
  if (user) {
    // 사용자가 로그인된 경우
    console.log("사용자가 로그인되어 있습니다.");
    window.location.href = "review_m.html"; // 유저페이지로 이동
  } else {
    // 사용자가 로그아웃된 경우
    let confirmLogin = confirm(
      "로그인 후 이용 가능합니다. 로그인 페이지로 이동 하시겠습니까?"
    );
    if (confirmLogin) {
      window.location.href = "mypageLogin_m.html"; // 마이페이지 로그인 페이지로 이동
    } else {
      // 사용자가 취소한 경우 현재 페이지에 그대로 유지
    }
  }
}
