//창 크기 에 따라 pc, mobile로 변경
function loadResponsivePage() {
  let width = window.innerWidth;
  let currentUrl = window.location.href;

  if (width <= 480 && !currentUrl.includes("review_m.html")) {
    window.location.href = "review_m.html";
  } else if (width > 480 && !currentUrl.includes("review.html")) {
    window.location.href = "review.html";
  }
}
// 페이지 로드 시 실행
window.onload = loadResponsivePage;
//창 크기 변경 마다 리다이렉트
window.onresize = function () {
  loadResponsivePage();
};

//이미지 업로드 -> firestorage
const storage = firebase.storage();

$("#send").on("click", function () {
  //form 요소에 입력된 정보
  let file = document.querySelector("#image").files[0];
  // 이미지가 선택되지 않은 경우에 대한 처리
  if (!file) {
    alert("이미지를 선택해주세요.");
    return;
  }
  let storageRef = storage.ref(); //스토리지 주소 참조
  let storagePath = storageRef.child("image/" + file.name); //이미지 저장경로
  let uploadImg = storagePath.put(file); //업로드 파일

  //이미지 업로드 성공(then)/실패(catch)
  uploadImg.on(
    "state_changed", //storage가 상태가 변하면(업로드성공/에러/업로드 중)
    //변화시 동작하는 함수
    null,
    (error) => {
      console.log("실패사유는", error);
      alert("업로드에 실패했습니다. 다시 시도해주세요.");
    },
    //이미지 업로드가 성공
    () => {
      uploadImg.snapshot.ref.getDownloadURL().then((url) => {
        function getUserInfo() {
          // Firebase Authentication을 사용하여 현재 로그인된 사용자의 정보를 가져옴
          const user = firebase.auth().currentUser;
          let userInfo = {};

          // 사용자가 로그인되어 있는 경우 사용자의 닉네임을 반환
          if (user) {
            userInfo.uid = user.uid;
            userInfo.displayName = user.displayName;
          } else {
            // 사용자가 로그인되어 있지 않은 경우 기본값을 설정
            userInfo.uid = null;
            userInfo.displayName = "Anonymous"; //익명 사용자로 설정
          }

          return userInfo; // 사용자 정보 반환
        }

        // 현재 로그인된 사용자의 닉네임을 가져옴
        const userInfo = getUserInfo();

        let uploadProduct = {
          date: new Date(),
          score: Number($('input[name="rating"]:checked').val()),
          title: $("#title").val(),
          content: $("#content").val(),
          uid: userInfo.uid, // 사용자 UID 추가
          displayName: userInfo.displayName, // 사용자 닉네임 추가
          image: url,
        };

        //데이터베이스에 업로드 성공(then)/실패(catch)
        db.collection("review")
          .add(uploadProduct)
          .then((result) => {
            //성공 후에 실행할 코드
            alert("후기를 저장했습니다.");
            window.location.href = "detail.html";
          })
          .catch((err) => {
            //실패 후에 실행할 코드
            console.log(err);
          });
      });
    }
  );
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
